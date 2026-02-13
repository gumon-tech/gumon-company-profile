import type { Locale } from "@/lib/i18n";

export type DevelopersCopy = {
  title: string;
  description: string;
  crumb: string;
  kicker: string;
  heading: string;
  intro: string;
  phaseLabel: string;
  focusKicker: string;
  focusHeading: string;
  resourcesKicker: string;
  resourcesHeading: string;
  nextKicker: string;
  nextHeading: string;
  nextBody: string;
  platformCta: string;
  contactCta: string;
  phases: { title: string; body: string }[];
  technicalFocus: string[];
  resourceCards: { title: string; body: string; href: string }[];
};

export const developersMeta: Partial<Record<Locale, { title: string; description: string }>> = {
  th: {
    title: "Developers",
    description: "เส้นทางสำหรับทีมพัฒนาที่ต้องการเริ่มโครงการบนมาตรฐานเดียวกันและปล่อยระบบได้เร็วขึ้น",
  },
  en: {
    title: "Developers",
    description: "A delivery path for engineering teams that need faster starts and consistent standards.",
  },
};

export const developersContent: Partial<Record<Locale, DevelopersCopy>> = {
  th: {
    title: "Developers",
    description: "เส้นทางสำหรับทีมพัฒนาที่ต้องการเริ่มโครงการบนมาตรฐานเดียวกันและปล่อยระบบได้เร็วขึ้น",
    crumb: "Developers",
    kicker: "Developers / Build Path",
    heading: "เส้นทางสำหรับทีมพัฒนาที่ต้องการสร้างระบบให้เร็วและคุมมาตรฐานได้ตั้งแต่ต้น",
    intro:
      "หน้านี้รวมเส้นทางทำงานสำหรับทีมพัฒนาที่ต้องการย้ายจากการเริ่มใหม่ทุกครั้ง ไปสู่การพัฒนาบนมาตรฐานตั้งต้นเดียวกันเพื่อให้ส่งมอบซ้ำได้จริง",
    phaseLabel: "Phase",
    focusKicker: "Engineering Focus",
    focusHeading: "สิ่งที่ทีมพัฒนาควรได้จากแพลตฟอร์ม",
    resourcesKicker: "Core Resources",
    resourcesHeading: "เริ่มจากเครื่องมือที่ทีมใช้จริง",
    nextKicker: "Next Step",
    nextHeading: "ต้องการประเมินระบบเดิมก่อนเริ่มย้ายโครงสร้าง",
    nextBody:
      "หากทีมมีระบบเดิมอยู่แล้วและต้องการวางแผนย้ายระบบแบบค่อยเป็นค่อยไป สามารถส่งข้อมูลระบบปัจจุบันมาเพื่อประเมินมาตรฐานตั้งต้นที่เหมาะสม",
    platformCta: "ดู Platform Overview",
    contactCta: "คุยกับทีมเทคนิค",
    phases: [
      { title: "Bootstrap", body: "เริ่มระบบจากแม่แบบมาตรฐาน กำหนดค่ากลาง และวางมาตรฐานตั้งต้นของทีม" },
      { title: "Integrate", body: "เชื่อมบริการผ่านสัญญาเชื่อมต่อที่ชัดเจน พร้อมตรวจคุณภาพก่อนรวมงาน" },
      { title: "Operate", body: "ปล่อยงานอย่างสม่ำเสมอ พร้อมระบบติดตามและวงจรข้อเสนอแนะสำหรับรอบถัดไป" },
    ],
    technicalFocus: [
      "ลดเวลาเตรียมโครงการใหม่ด้วยมาตรฐานเดียวกันทั้งทีม",
      "ลดความเสี่ยงจากการเชื่อมต่อบริการที่ไม่สอดคล้องกัน",
      "ทำให้ทีมใหม่เริ่มงานได้เร็วขึ้นโดยไม่ต้องพึ่งความรู้เฉพาะบุคคล",
      "สร้างรอบการปล่อยงานที่คาดการณ์ได้ในสภาพแวดล้อมจริง",
    ],
    resourceCards: [
      { title: "Developer Docs", body: "คู่มือเริ่มต้น คำสั่งสำคัญ และเอกสารอ้างอิงเชิงเทคนิค", href: "https://docs.gumon.io/" },
      { title: "Knowledge Base", body: "แนวปฏิบัติและแนวทางแก้ปัญหาเชิงปฏิบัติการ", href: "https://wiki.gumon.io/" },
      { title: "Gumon Work", body: "Project/Task management สำหรับทีมพัฒนาและทีมส่งมอบ", href: "https://work.gumon.io/" },
      { title: "GitHub", body: "source code, templates และตัวอย่างโปรเจกต์สำหรับทีมพัฒนา", href: "https://github.com/gumon-tech" },
    ],
  },
  en: {
    title: "Developers",
    description: "A delivery path for engineering teams that need faster starts and consistent standards.",
    crumb: "Developers",
    kicker: "Developers / Build Path",
    heading: "A practical path for engineering teams to deliver faster with consistent standards",
    intro:
      "This page outlines an execution path for teams moving from repeated project bootstrapping to a shared baseline that supports repeatable delivery.",
    phaseLabel: "Phase",
    focusKicker: "Engineering Focus",
    focusHeading: "What teams should gain from the platform",
    resourcesKicker: "Core Resources",
    resourcesHeading: "Start with tools teams use in real delivery",
    nextKicker: "Next Step",
    nextHeading: "Need a baseline assessment before migration",
    nextBody:
      "If your team already operates legacy systems and needs phased migration planning, send your current context and we can assess a suitable baseline.",
    platformCta: "View Platform Overview",
    contactCta: "Talk to Technical Team",
    phases: [
      { title: "Bootstrap", body: "Start from a standard template, set shared defaults, and define an initial engineering baseline." },
      { title: "Integrate", body: "Integrate services through explicit contracts and quality checks before merge." },
      { title: "Operate", body: "Release consistently with observability and feedback loops for the next cycle." },
    ],
    technicalFocus: [
      "Reduce setup time for new projects with shared standards.",
      "Lower integration risk across inconsistent services.",
      "Speed up onboarding without relying on individual tribal knowledge.",
      "Establish predictable release cadence in production-like environments.",
    ],
    resourceCards: [
      { title: "Developer Docs", body: "Quickstart guides, critical commands, and technical references.", href: "https://docs.gumon.io/" },
      { title: "Knowledge Base", body: "Operational playbooks and practical troubleshooting guidance.", href: "https://wiki.gumon.io/" },
      { title: "Gumon Work", body: "Project and task management for development and delivery teams.", href: "https://work.gumon.io/" },
      { title: "GitHub", body: "Source code, templates, and project examples for engineering teams.", href: "https://github.com/gumon-tech" },
    ],
  },
};
