"use client";

import { FormEvent, useMemo, useState } from "react";

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

  const topicLabel = useMemo(() => {
    if (topic === "partner") return "ความร่วมมือกับพาร์ตเนอร์";
    if (topic === "business") return "สอบถามข้อมูลทั่วไป";
    return "ปรึกษาด้านเทคนิค";
  }, [topic]);

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
      "",
      "Message:",
      message.trim(),
    ];
    const body = lines.join("\n");
    const mailtoHref = buildMailtoHref(body);
    const webhookUrl = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_URL;

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
        }),
      });

      if (!response.ok) {
        throw new Error(`Webhook failed: ${response.status}`);
      }

      setSuccess("ส่งคำขอสำเร็จแล้ว ทีมจะติดต่อกลับโดยเร็วที่สุด");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
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
          <option value="technical">ปรึกษาด้านเทคนิค</option>
          <option value="partner">ความร่วมมือกับพาร์ตเนอร์</option>
          <option value="business">สอบถามข้อมูลทั่วไป</option>
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
          placeholder="เล่าระบบปัจจุบัน ปัญหาหลัก และเป้าหมายที่ต้องการ"
        />
      </div>

      {error ? <p className="text-xs text-danger">{error}</p> : null}
      {success ? <p className="text-xs text-accent">{success}</p> : null}

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full sm:w-fit disabled:opacity-70 disabled:cursor-not-allowed">
        {isSubmitting ? "กำลังส่ง..." : "ส่งคำขอ"}
      </button>
      <p className="text-xs text-mist">
        ข้อมูลของคุณจะถูกใช้เพื่อการติดต่อกลับและการประเมินแนวทางเริ่มต้นเท่านั้น
      </p>
    </form>
  );
}
