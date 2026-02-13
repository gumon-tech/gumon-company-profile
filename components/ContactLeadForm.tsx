"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics";

function encode(value: string) {
  return encodeURIComponent(value.trim());
}

export default function ContactLeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("technical");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [utm, setUtm] = useState<Record<string, string>>({});

  const topicLabel = useMemo(() => {
    if (topic === "partner") return "Partner Collaboration";
    if (topic === "business") return "General Inquiry";
    return "Technical Consultation";
  }, [topic]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "utm_id"];
    const fromUrl: Record<string, string> = {};

    keys.forEach((key) => {
      const value = params.get(key);
      if (value) fromUrl[key] = value;
    });

    const hasUrlUtm = Object.keys(fromUrl).length > 0;
    if (hasUrlUtm) {
      window.sessionStorage.setItem("gumon_utm", JSON.stringify(fromUrl));
      setUtm(fromUrl);
      return;
    }

    const saved = window.sessionStorage.getItem("gumon_utm");
    if (!saved) return;

    try {
      const parsed = JSON.parse(saved) as Record<string, string>;
      setUtm(parsed);
    } catch {
      // ignore invalid saved payload
    }
  }, []);

  const buildMailtoHref = (payloadMessage: string) => {
    const subject = `[Gumon Website] ${topicLabel} - ${name.trim()}`;
    return `mailto:contact@gumon.io?subject=${encode(subject)}&body=${encode(payloadMessage)}`;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("กรุณากรอกข้อมูลให้ครบก่อนส่งคำขอ");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      setError("รูปแบบอีเมลไม่ถูกต้อง");
      return;
    }

    const lines = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Topic: ${topicLabel}`,
      `Submitted At: ${new Date().toISOString()}`,
      `Current URL: ${typeof window !== "undefined" ? window.location.href : ""}`,
      `Referrer: ${typeof document !== "undefined" ? document.referrer : ""}`,
      ...(Object.entries(utm).map(([key, value]) => `${key}: ${value}`)),
      "",
      "Message:",
      message.trim(),
    ];
    const body = lines.join("\n");
    const mailtoHref = buildMailtoHref(body);
    const webhookUrl = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_URL;

    trackEvent({
      name: "contact_form_submit",
      category: "contact",
      label: `contact-form-${topic}`,
      location: "contact.form",
      href: webhookUrl || mailtoHref,
    });

    if (!webhookUrl) {
      window.location.href = mailtoHref;
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          topic,
          topic_label: topicLabel,
          message: message.trim(),
          submitted_at: new Date().toISOString(),
          current_url: typeof window !== "undefined" ? window.location.href : "",
          referrer: typeof document !== "undefined" ? document.referrer : "",
          utm,
        }),
      });

      if (!response.ok) {
        throw new Error(`Webhook failed: ${response.status}`);
      }

      trackEvent({
        name: "contact_form_submit_success",
        category: "contact",
        label: `contact-form-${topic}-webhook-success`,
        location: "contact.form",
        href: webhookUrl,
      });

      setSuccess("ส่งคำขอสำเร็จแล้ว ทีมจะติดต่อกลับโดยเร็วที่สุด");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      trackEvent({
        name: "contact_form_submit_fallback_mailto",
        category: "contact",
        label: `contact-form-${topic}-fallback-mailto`,
        location: "contact.form",
        href: mailtoHref,
      });
      window.location.href = mailtoHref;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <label htmlFor="contact-name" className="text-xs tracking-[0.14em] uppercase text-mist">ชื่อผู้ติดต่อ</label>
        <input
          id="contact-name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg border border-line/40 bg-bg1/80 px-3 py-2 text-sm text-ink outline-none focus:border-accent/70"
          placeholder="ชื่อ-นามสกุล"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="contact-email" className="text-xs tracking-[0.14em] uppercase text-mist">อีเมล</label>
        <input
          id="contact-email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg border border-line/40 bg-bg1/80 px-3 py-2 text-sm text-ink outline-none focus:border-accent/70"
          placeholder="name@company.com"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="contact-topic" className="text-xs tracking-[0.14em] uppercase text-mist">หัวข้อ</label>
        <select
          id="contact-topic"
          name="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="rounded-lg border border-line/40 bg-bg1/80 px-3 py-2 text-sm text-ink outline-none focus:border-accent/70"
        >
          <option value="technical">Technical Consultation</option>
          <option value="partner">Partner Collaboration</option>
          <option value="business">General Inquiry</option>
        </select>
      </div>

      <div className="grid gap-2">
        <label htmlFor="contact-message" className="text-xs tracking-[0.14em] uppercase text-mist">รายละเอียด</label>
        <textarea
          id="contact-message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="rounded-lg border border-line/40 bg-bg1/80 px-3 py-2 text-sm text-ink outline-none focus:border-accent/70"
          placeholder="เล่าบริบทระบบหรือความต้องการของทีมคุณ"
        />
      </div>

      {error ? <p className="text-xs text-danger">{error}</p> : null}
      {success ? <p className="text-xs text-accent">{success}</p> : null}

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full sm:w-fit disabled:opacity-70 disabled:cursor-not-allowed">
        {isSubmitting ? "กำลังส่ง..." : "ส่งคำขอ"}
      </button>
      <p className="text-xs text-mist">
        หากตั้งค่า `NEXT_PUBLIC_CONTACT_WEBHOOK_URL` ระบบจะส่งเข้า webhook ก่อน
        และจะ fallback ไปอีเมลอัตโนมัติหากส่งไม่สำเร็จ
      </p>
    </form>
  );
}
