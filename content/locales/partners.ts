import type { Locale } from "@/lib/i18n";

export type PartnersCopy = {
  title: string;
  description: string;
  crumb: string;
  kicker: string;
  heading: string;
  intro: string;
  modelLabel: string;
  readinessKicker: string;
  readinessHeading: string;
  governanceKicker: string;
  governanceHeading: string;
  trustKicker: string;
  trustHeading: string;
  casesKicker: string;
  casesHeading: string;
  resourcesKicker: string;
  resourcesHeading: string;
  nextKicker: string;
  nextHeading: string;
  nextBody: string;
  companyCta: string;
  contactCta: string;
  resourceCta: string;
  modelBlocks: { title: string; body: string }[];
  readiness: string[];
  governance: { title: string; body: string }[];
  trustSignals: { label: string; value: string }[];
  cases: { title: string; problem: string; approach: string; outcome: string }[];
};

export const partnerNetwork = [
  { name: "Asia Connect Corporation", country: "Thailand", website: "https://www.asiaconnectth.com", logo: "/assets/partners/asia-connect.png", logoScaleClass: "partner-logo-scale-98", logoFrameClass: "partner-logo-badge-circle" },
  { name: "AC Academys", country: "Thailand", website: "https://acacademys.com", logo: "/assets/partners/ac-academys.png", logoScaleClass: "partner-logo-scale-92", logoFrameClass: "partner-logo-badge-circle" },
  { name: "Olufy-X", country: "Thailand", website: "https://olufy.com", logo: "/assets/partners/olufy-x.png", logoScaleClass: "partner-logo-scale-90", logoFrameClass: "partner-logo-badge-circle" },
  { name: "Taitam-D", country: "United Kingdom", website: "https://taitam-d.com", logo: "/assets/partners/taitam-d.png", logoScaleClass: "partner-logo-scale-88", logoFrameClass: "partner-logo-badge-circle" },
];

export const partnersContent: Partial<Record<Locale, PartnersCopy>> = {
  th: {
    title: "Partners",
    description: "แนวทางสำหรับพาร์ตเนอร์ที่ต้องการส่งมอบโครงการบนมาตรฐานเดียวกับ Gumon และขยายงานเชิงพาณิชย์ได้อย่างต่อเนื่อง",
    crumb: "Partners",
    kicker: "Partners / แนวทางการทำงานร่วมกัน",
    heading: "โมเดลความร่วมมือที่ช่วยให้พาร์ตเนอร์ส่งมอบได้เร็วและรักษามาตรฐานได้จริง",
    intro: "เราแบ่งบทบาทให้ชัดตั้งแต่ต้น: Gumon พัฒนาแพลตฟอร์มและมาตรฐานกลาง ส่วนพาร์ตเนอร์นำไปส่งมอบงานในตลาดจริงได้อย่างมั่นใจ",
    modelLabel: "Model",
    readinessKicker: "Readiness Checklist",
    readinessHeading: "ความพร้อมเบื้องต้นก่อนเริ่ม collaboration",
    governanceKicker: "Governance & Fair-Play",
    governanceHeading: "หลักการทำงานร่วมกันเพื่อรักษาความไว้วางใจใน ecosystem",
    trustKicker: "Trust Proof",
    trustHeading: "หลักฐานการทำงานร่วมกันในโครงการส่งมอบจริง",
    casesKicker: "Mini Cases",
    casesHeading: "ตัวอย่างผลลัพธ์จากการทำงานร่วมกันแบบ shared model",
    resourcesKicker: "Partner Resources",
    resourcesHeading: "ชุดเครื่องมือสำหรับทีมส่งมอบ",
    nextKicker: "Next Step",
    nextHeading: "พร้อมเริ่มประเมินโอกาสร่วมงานแล้วหรือยัง",
    nextBody: "ส่งข้อมูลอุตสาหกรรม โครงสร้างทีม และเป้าหมายเชิงธุรกิจของคุณมาได้ เพื่อให้ทีมช่วยวางแนวทางร่วมงานที่เหมาะสมได้ทันที",
    companyCta: "ดูภาพรวมองค์กร",
    contactCta: "ติดต่อทีมพาร์ตเนอร์ทันที",
    resourceCta: "เปิด Resource Hub",
    modelBlocks: [
      { title: "Platform Ownership", body: "Gumon ดูแลแกนแพลตฟอร์ม มาตรฐานกลาง และเครื่องมือหลัก" },
      { title: "Commercial Delivery", body: "พาร์ตเนอร์รับผิดชอบการส่งมอบงานเชิงธุรกิจและผลลัพธ์ปลายทางของลูกค้า" },
      { title: "Shared Enablement", body: "ทั้งสองฝ่ายใช้แนวทางทำงานชุดเดียวกัน เพื่อให้คุณภาพการส่งมอบสม่ำเสมอ" },
    ],
    readiness: [
      "มีทีม delivery ที่ดูแลโครงการได้ต่อเนื่อง",
      "มีความสามารถด้าน solution architecture และ implementation",
      "พร้อมทำงานบน shared standards และ quality gates",
      "ต้องการขยายหลายโครงการโดยคุมคุณภาพได้",
    ],
    governance: [
      { title: "Open Source Integrity", body: "รักษาแกนแพลตฟอร์มแบบเปิดให้ตรวจสอบได้ และไม่เปลี่ยนขอบเขตแกนหลักโดยเอื้อรายใดรายหนึ่ง" },
      { title: "Non-Intrusion Boundary", body: "Gumon ไม่แข่งขันกับพาร์ตเนอร์ในงานส่งมอบปลายทาง และยึดบทบาทแพลตฟอร์มอย่างชัดเจน" },
      { title: "Compatibility Standards", body: "ส่วนขยายและบริการที่เชื่อมบนแพลตฟอร์มต้องยึดมาตรฐานกลางเพื่อรักษาคุณภาพร่วม" },
    ],
    trustSignals: [
      { label: "Partner Organizations", value: `${partnerNetwork.length}+` },
      { label: "Operating Countries", value: `${new Set(partnerNetwork.map((item) => item.country)).size}` },
      { label: "Enablement Channels", value: "Docs + Wiki + Work + Training" },
    ],
    cases: [
      { title: "Public Sector Delivery", problem: "ทีมส่งมอบหลายชุดใช้มาตรฐานต่างกัน ทำให้คุณภาพงานไม่คงที่", approach: "จัด shared standards และรีวิวคุณภาพร่วมกับทีมแพลตฟอร์มก่อนปล่อยงาน", outcome: "ยกระดับความสม่ำเสมอของงานส่งมอบระหว่างทีมพาร์ตเนอร์" },
      { title: "Cross-Border Collaboration", problem: "การทำงานข้ามประเทศทำให้การส่งต่อความรู้และเอกสารไม่ต่อเนื่อง", approach: "ใช้ docs + knowledge base ชุดเดียวกันและตั้งรอบ sync กลาง", outcome: "ลดงานซ้ำจากความเข้าใจไม่ตรงกันและเร่งการเริ่มงานรอบใหม่" },
    ],
  },
  en: {
    title: "Partners",
    description: "Collaboration model for partners delivering projects on shared Gumon standards.",
    crumb: "Partners",
    kicker: "Partners / Collaboration Model",
    heading: "A partner model built for fast delivery and consistent quality",
    intro: "Roles are clear from day one: Gumon maintains the platform core and shared standards while partners lead commercial delivery in market contexts.",
    modelLabel: "Model",
    readinessKicker: "Readiness Checklist",
    readinessHeading: "Minimum readiness before collaboration",
    governanceKicker: "Governance & Fair-Play",
    governanceHeading: "Principles that protect trust in the ecosystem",
    trustKicker: "Trust Proof",
    trustHeading: "Signals from practical delivery collaborations",
    casesKicker: "Mini Cases",
    casesHeading: "Examples from shared delivery execution",
    resourcesKicker: "Partner Resources",
    resourcesHeading: "Tooling and enablement channels for partner teams",
    nextKicker: "Next Step",
    nextHeading: "Ready to evaluate collaboration potential",
    nextBody: "Share your industry context, team structure, and delivery goals so we can propose a practical collaboration path.",
    companyCta: "View Company Overview",
    contactCta: "Contact Partner Team",
    resourceCta: "Open Resource Hub",
    modelBlocks: [
      { title: "Platform Ownership", body: "Gumon maintains the platform core, standards, and key tooling." },
      { title: "Commercial Delivery", body: "Partners own customer-facing execution and business outcomes." },
      { title: "Shared Enablement", body: "Both sides operate under common practices to keep delivery quality consistent." },
    ],
    readiness: [
      "Sustainable delivery team capacity",
      "Solution architecture and implementation capability",
      "Readiness to follow shared standards and quality gates",
      "Ability to scale across multiple projects",
    ],
    governance: [
      { title: "Open Source Integrity", body: "Keep platform core open and auditable without biasing core decisions to any single party." },
      { title: "Non-Intrusion Boundary", body: "Gumon does not compete with partners in end delivery and keeps platform role boundaries clear." },
      { title: "Compatibility Standards", body: "Extensions and services must align with common standards to preserve ecosystem quality." },
    ],
    trustSignals: [
      { label: "Partner Organizations", value: `${partnerNetwork.length}+` },
      { label: "Operating Countries", value: `${new Set(partnerNetwork.map((item) => item.country)).size}` },
      { label: "Enablement Channels", value: "Docs + Wiki + Work + Training" },
    ],
    cases: [
      { title: "Public Sector Delivery", problem: "Multiple delivery teams worked with inconsistent standards.", approach: "Introduced shared standards and joint quality reviews before release.", outcome: "Improved consistency across partner delivery teams." },
      { title: "Cross-Border Collaboration", problem: "Cross-country collaboration caused handover gaps.", approach: "Used shared docs and knowledge base with recurring sync cycles.", outcome: "Reduced duplicated work and improved ramp-up speed." },
    ],
  },
};
