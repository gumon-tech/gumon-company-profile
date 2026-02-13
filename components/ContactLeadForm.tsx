"use client";

import { FormEvent, useMemo, useState } from "react";
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

  const topicLabel = useMemo(() => {
    if (topic === "partner") return "Partner Collaboration";
    if (topic === "business") return "General Inquiry";
    return "Technical Consultation";
  }, [topic]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("กรุณากรอกข้อมูลให้ครบก่อนส่งคำขอ");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      setError("รูปแบบอีเมลไม่ถูกต้อง");
      return;
    }

    const subject = `[Gumon Website] ${topicLabel} - ${name.trim()}`;
    const body = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Topic: ${topicLabel}`,
      "",
      "Message:",
      message.trim(),
    ].join("\n");
    const href = `mailto:contact@gumon.io?subject=${encode(subject)}&body=${encode(body)}`;

    trackEvent({
      name: "contact_form_submit",
      category: "contact",
      label: `contact-form-${topic}`,
      location: "contact.form",
      href,
    });

    window.location.href = href;
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

      <button type="submit" className="btn-primary w-full sm:w-fit">ส่งคำขอผ่านอีเมล</button>
      <p className="text-xs text-mist">เมื่อกดส่ง ระบบจะเปิดอีเมลไคลเอนต์พร้อมข้อความที่กรอกไว้</p>
    </form>
  );
}
