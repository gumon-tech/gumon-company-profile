import type { Locale } from "@/lib/i18n";

export type PlatformCopy = {
  title: string;
  description: string;
  crumb: string;
  kicker: string;
  heading: string;
  intro: string;
  layerLabel: string;
  openImage: string;
  imageCaption: string;
  coreKicker: string;
  coreHeading: string;
  principlesKicker: string;
  principlesHeading: string;
  developersCta: string;
  contactCta: string;
  architectureLayers: { title: string; body: string }[];
  coreServices: string[];
  platformPrinciples: string[];
};

export const platformMeta: Partial<Record<Locale, { title: string; description: string }>> = {
  th: {
    title: "Platform",
    description:
      "ภาพรวม Gumon Platform: สถาปัตยกรรม 3 ชั้น, core services และ workflow มาตรฐานสำหรับทีมที่ต้องการส่งมอบระบบแบบต่อเนื่อง",
  },
  en: {
    title: "Platform",
    description:
      "Gumon Platform overview: three-layer architecture, reusable core services, and delivery standards.",
  },
};

export const platformContent: Partial<Record<Locale, PlatformCopy>> = {
  th: {
    title: "Platform",
    description:
      "ภาพรวม Gumon Platform: สถาปัตยกรรม 3 ชั้น, core services และ workflow มาตรฐานสำหรับทีมที่ต้องการส่งมอบระบบแบบต่อเนื่อง",
    crumb: "Platform",
    kicker: "Platform / Architecture",
    heading: "สถาปัตยกรรมที่ทำให้ทีมพัฒนาเริ่มเร็ว ส่งมอบไว และควบคุมมาตรฐานได้",
    intro:
      "Gumon Platform ถูกออกแบบเพื่อแก้ปัญหาโครงสร้างซ้ำซ้อนที่เกิดขึ้นในทุกโครงการ โดยทำให้ทีมเริ่มจากมาตรฐานตั้งต้นที่พร้อมใช้งานและขยายต่อได้ในระยะยาว",
    layerLabel: "Layer",
    openImage: "เปิดภาพ Architecture ขนาดเต็ม",
    imageCaption:
      "Architecture reference นี้ใช้เพื่อจัดแนวทางคิดร่วมกันระหว่างทีม ไม่ได้บังคับรูปแบบ implementation เดียว แต่ช่วยลดความคลาดเคลื่อนของการส่งมอบ",
    coreKicker: "Core Services",
    coreHeading: "องค์ประกอบหลักที่ทีมใช้งานซ้ำได้ทันที",
    principlesKicker: "Platform Principles",
    principlesHeading: "หลักการออกแบบที่ทำให้ระบบขยายได้โดยไม่เสียเสถียรภาพ",
    developersCta: "ไปหน้า Developer Path",
    contactCta: "คุยกับทีม",
    architectureLayers: [
      { title: "Application Layer", body: "รองรับงานธุรกิจและประสบการณ์ผู้ใช้งาน โดยออกแบบให้ปรับเปลี่ยนได้โดยไม่กระทบระบบทั้งหมด" },
      { title: "API Service Layer", body: "กำหนดสัญญาการเชื่อมต่อและมาตรฐานการสื่อสารระหว่างบริการ เพื่อให้ทีมทำงานร่วมกันได้อย่างคาดการณ์ได้" },
      { title: "Data Stream Layer", body: "รองรับการประมวลผลข้อมูลต่อเนื่อง งานแบบ asynchronous และการติดตามสถานะระบบแบบเรียลไทม์" },
    ],
    coreServices: [
      "Gumon Core สำหรับโครงสร้างระบบตั้งต้น",
      "Auth / Access Control / Profile สำหรับการยืนยันตัวตนและสิทธิ์การใช้งาน",
      "Notification / Schedule / Storage สำหรับบริการพื้นฐานที่ใช้ร่วมกัน",
      "CLI commands สำหรับ bootstrap, configuration, operations และ extension",
    ],
    platformPrinciples: [
      "แกนแพลตฟอร์มแบบเปิดที่ใช้งานได้จริงและตรวจสอบได้",
      "มาตรฐานเดียวกันทั้งทีมพัฒนา ทีมปฏิบัติการ และทีมส่งมอบ",
      "ออกแบบเพื่อรองรับการเติบโตโดยลดงานตั้งค่าซ้ำ",
      "เอกสารและแนวปฏิบัติเป็นส่วนหนึ่งของผลิตภัณฑ์ ไม่ใช่ภาคผนวก",
    ],
  },
  en: {
    title: "Platform",
    description: "Gumon Platform overview: three-layer architecture, reusable core services, and delivery standards.",
    crumb: "Platform",
    kicker: "Platform / Architecture",
    heading: "Architecture that helps teams start faster, ship consistently, and keep standards under control",
    intro:
      "Gumon Platform is designed to reduce repeated structural setup across projects by giving teams a production-ready baseline they can extend over time.",
    layerLabel: "Layer",
    openImage: "Open full Architecture image",
    imageCaption:
      "This architecture reference aligns cross-team design decisions. It does not force a single implementation style, but reduces delivery drift.",
    coreKicker: "Core Services",
    coreHeading: "Reusable building blocks teams can adopt immediately",
    principlesKicker: "Platform Principles",
    principlesHeading: "Design principles that keep systems stable as teams scale",
    developersCta: "Go to Developer Path",
    contactCta: "Discuss with Team",
    architectureLayers: [
      { title: "Application Layer", body: "Handles business workflows and user-facing services with flexibility and low system fragility." },
      { title: "API Service Layer", body: "Defines shared API contracts and integration standards for predictable cross-team collaboration." },
      { title: "Data Stream Layer", body: "Supports high-throughput event streams, asynchronous processing, and observability." },
    ],
    coreServices: [
      "Gumon Core for baseline system structure",
      "Auth / Access Control / Profile for identity and authorization",
      "Notification / Schedule / Storage as reusable foundational services",
      "CLI commands for bootstrap, configuration, operations, and extension",
    ],
    platformPrinciples: [
      "Open core that is practical and auditable",
      "Shared standards across engineering, operations, and delivery teams",
      "Scale-ready architecture with minimal repetitive setup",
      "Documentation and practices are part of the product, not appendices",
    ],
  },
};
