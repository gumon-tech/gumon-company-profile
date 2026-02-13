import type { Locale } from "@/lib/i18n";

export type ResourceGroup = { title: string; items: [string, string, string, boolean][] };

export type ResourcesCopy = {
  title: string;
  description: string;
  crumb: string;
  kicker: string;
  heading: string;
  intro: string;
  adoptionKicker: string;
  adoptionHeading: string;
  roadmapKicker: string;
  roadmapHeading: string;
  groups: ResourceGroup[];
  adoptionPath: { step: string; title: string; body: string }[];
  roadmap: { phase: string; title: string; body: string }[];
};

export const resourcesContent: Partial<Record<Locale, ResourcesCopy>> = {
  th: {
    title: "Resources",
    description: "ศูนย์รวมเอกสารและลิงก์สำคัญสำหรับทีมพัฒนา พาร์ตเนอร์ และผู้บริหารที่ต้องการใช้งาน Gumon อย่างเป็นระบบ",
    crumb: "Resources",
    kicker: "Resources / Hub",
    heading: "ศูนย์รวมทรัพยากรที่ทีมใช้งานจริงบ่อยที่สุด",
    intro: "หน้านี้จัดกลุ่มข้อมูลตามวัตถุประสงค์การใช้งาน เพื่อลดเวลาค้นหาเอกสารและเส้นทางที่ควรเริ่มก่อน",
    adoptionKicker: "Adoption Path",
    adoptionHeading: "เส้นทางการใช้งานจากทีมเทคนิคสู่การขยายผลระดับ ecosystem",
    roadmapKicker: "Public Roadmap",
    roadmapHeading: "ภาพรวมทิศทาง 3 ระยะสำหรับการพัฒนาแพลตฟอร์ม",
    groups: [
      { title: "Developer Resources", items: [["Developer Documentation", "คู่มือ setup, API reference และ command usage", "https://docs.gumon.io/", true], ["Knowledge Base", "playbooks และแนวทางปฏิบัติการเชิงเทคนิค", "https://wiki.gumon.io/", true], ["GitHub", "source code, templates และตัวอย่างโปรเจกต์สำหรับทีมพัฒนา", "https://github.com/gumon-tech", true]] },
      { title: "Business Resources", items: [["Partner Collaboration", "แนวทางร่วมงานและขอบเขตการส่งมอบ", "/partners", false], ["Company Overview", "หลักการองค์กรและ operating model", "/company", false], ["Gumon Work", "Project/Task management สำหรับทีมส่งมอบ", "https://work.gumon.io/", true]] },
      { title: "Getting Started", items: [["Platform Overview", "เริ่มเข้าใจสถาปัตยกรรมและองค์ประกอบหลัก", "/platform", false], ["Contact Team", "ส่งโจทย์เพื่อเริ่มวางเส้นทางใช้งาน", "/contact", false]] },
      { title: "Community", items: [["DKS Center", "ศูนย์คอร์สและกิจกรรมอบรมด้านเทคโนโลยี", "https://dkscenter.gumon.io/th", true], ["Gaming Hub", "อีกมุมของ Gumon community สำหรับกิจกรรมและการเชื่อมผู้คนผ่านการเล่น", "https://game.gumon.io/", true]] },
    ],
    adoptionPath: [
      { step: "01", title: "Developer-first Adoption", body: "เริ่มจากทีมเทคนิคด้วยเอกสารและมาตรฐานตั้งต้นกลาง เพื่อลดเวลาเตรียมระบบและเริ่มส่งมอบได้เร็ว" },
      { step: "02", title: "Partner-led Delivery", body: "ขยายผลผ่านพาร์ตเนอร์ที่ทำงานบนมาตรฐานเดียวกัน เพื่อรักษาคุณภาพงานส่งมอบปลายทาง" },
      { step: "03", title: "Ecosystem Expansion", body: "ต่อยอดสู่ระบบนิเวศของส่วนขยาย บริการเสริม และองค์ความรู้ที่เติบโตได้อย่างต่อเนื่อง" },
    ],
    roadmap: [
      { phase: "Phase 1", title: "Open Foundation", body: "เสริมความพร้อมของแกนแพลตฟอร์ม เอกสารหลัก และแนวปฏิบัติที่ใช้งานได้จริง" },
      { phase: "Phase 2", title: "Partner Expansion", body: "ขยายการใช้งานผ่านเครือข่ายพาร์ตเนอร์ พร้อมยกระดับมาตรฐานการส่งมอบร่วมกัน" },
      { phase: "Phase 3", title: "Marketplace Readiness", body: "พัฒนาไปสู่โครงสร้าง ecosystem ที่รองรับการค้นหาและใช้งานส่วนขยายอย่างเป็นระบบ" },
    ],
  },
  en: {
    title: "Resources",
    description: "A central hub of references and links for developers, partners, and stakeholders using Gumon.",
    crumb: "Resources",
    kicker: "Resources / Hub",
    heading: "A resource hub for what teams use most",
    intro: "Resources are grouped by intent to reduce search time and clarify where to start.",
    adoptionKicker: "Adoption Path",
    adoptionHeading: "From developer adoption to ecosystem expansion",
    roadmapKicker: "Public Roadmap",
    roadmapHeading: "Three-stage platform direction overview",
    groups: [
      { title: "Developer Resources", items: [["Developer Documentation", "Setup guides, API references, and command usage", "https://docs.gumon.io/", true], ["Knowledge Base", "Operational playbooks and engineering practices", "https://wiki.gumon.io/", true], ["GitHub", "Source code, templates, and project examples", "https://github.com/gumon-tech", true]] },
      { title: "Business Resources", items: [["Partner Collaboration", "Collaboration model and delivery boundaries", "/partners", false], ["Company Overview", "Organizational principles and operating model", "/company", false], ["Gumon Work", "Project and task management for delivery teams", "https://work.gumon.io/", true]] },
      { title: "Getting Started", items: [["Platform Overview", "Understand architecture and foundational components", "/platform", false], ["Contact Team", "Send your context to start planning", "/contact", false]] },
      { title: "Community", items: [["DKS Center", "Training programs and technology activities", "https://dkscenter.gumon.io/th", true], ["Gaming Hub", "Community engagement through activities and play", "https://game.gumon.io/", true]] },
    ],
    adoptionPath: [
      { step: "01", title: "Developer-first Adoption", body: "Start with core docs and baseline standards to reduce setup time." },
      { step: "02", title: "Partner-led Delivery", body: "Scale through partners operating on shared standards." },
      { step: "03", title: "Ecosystem Expansion", body: "Extend through integrations, services, and reusable knowledge." },
    ],
    roadmap: [
      { phase: "Phase 1", title: "Open Foundation", body: "Strengthen core platform readiness and practical documentation." },
      { phase: "Phase 2", title: "Partner Expansion", body: "Expand usage through partner networks with shared quality standards." },
      { phase: "Phase 3", title: "Marketplace Readiness", body: "Prepare ecosystem structures for discoverable extensions and services." },
    ],
  },
};
