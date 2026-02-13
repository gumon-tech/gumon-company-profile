import type { Locale } from "@/lib/i18n";

export type CompanyCopy = {
  title: string;
  description: string;
  crumb: string;
  kicker: string;
  heading: string;
  intro: string;
  principlesKicker: string;
  principlesHeading: string;
  principles: { title: string; body: string }[];
  strategicKicker: string;
  strategicHeading: string;
  strategicItems: { title: string; body: string }[];
  proofKicker: string;
  proofHeading: string;
  proofMetrics: { label: string; value: string; detail: string }[];
  modelKicker: string;
  modelHeading: string;
  modelItems: string[];
  boundariesKicker: string;
  boundariesHeading: string;
  isTitle: string;
  isNotTitle: string;
  isItems: string[];
  isNotItems: string[];
  casesKicker: string;
  casesHeading: string;
  cases: { title: string; problem: string; approach: string; outcome: string }[];
  legalKicker: string;
  legalHeading: string;
  companyLabel: string;
  addressLabel: string;
  regLabel: string;
  dateLabel: string;
  platformCta: string;
  teamCta: string;
  contactCta: string;
};

export const companyContent: Partial<Record<Locale, CompanyCopy>> = {
  th: {
    title: "Company",
    description: "รู้จัก Gumon Technology แนวคิดขององค์กร และวิธีขับเคลื่อนแพลตฟอร์มเทคโนโลยีสำหรับงานส่งมอบจริง",
    crumb: "Company",
    kicker: "Company / Overview",
    heading: "Gumon Technology สร้างโครงสร้างพื้นฐานซอฟต์แวร์ที่ทีมใช้งานได้จริงในงานประจำวัน",
    intro: "เราเป็นองค์กรเทคโนโลยีที่โฟกัส platform engineering และมาตรฐานการทำงานร่วมกัน เพื่อให้ทีมพัฒนาและทีมธุรกิจเดินไปในทิศทางเดียวกันได้เร็วขึ้น",
    principlesKicker: "Principle",
    principlesHeading: "หลักการที่ใช้ตัดสินใจเชิงระบบ",
    principles: [
      { title: "Open Source by Default", body: "แกนหลักของแพลตฟอร์มต้องเปิดและตรวจสอบได้ เพื่อให้ทีมใช้งานต่อได้อย่างมั่นใจในระยะยาว" },
      { title: "Platform over Projects", body: "เราลงทุนกับโครงสร้างที่ใช้ซ้ำได้ ไม่เน้นแก้ปัญหาเฉพาะกิจรายโปรเจกต์" },
      { title: "Partner-Driven Delivery", body: "การส่งมอบปลายทางขับเคลื่อนโดยเครือข่ายพาร์ตเนอร์ เพื่อขยายงานได้อย่างยั่งยืน" },
      { title: "Evidence-Led Execution", body: "ทุกการปรับปรุงอ้างอิงจากข้อมูลหน้างาน ความเห็นจากผู้ใช้งาน และผลลัพธ์ที่ตรวจสอบได้" },
    ],
    strategicKicker: "Strategic Intent",
    strategicHeading: "วิสัยทัศน์และพันธกิจ",
    strategicItems: [
      { title: "Vision", body: "ยกระดับการพัฒนาซอฟต์แวร์ให้เริ่มต้นได้เร็ว ส่งมอบได้ต่อเนื่อง และไม่ติดกับผู้ขายรายเดียวด้วยแนวทางแบบเปิด" },
      { title: "Mission", body: "พัฒนาแพลตฟอร์ม มาตรฐาน และองค์ความรู้ที่ทีมเทคโนโลยีและพาร์ตเนอร์นำไปใช้งานจริงได้ในอุตสาหกรรมที่หลากหลาย" },
    ],
    proofKicker: "Proof Metrics",
    proofHeading: "ตัวชี้วัดเชิงโครงสร้างที่ใช้ยืนยันความพร้อมในการขยายผล",
    proofMetrics: [
      { label: "Core Principles", value: "4", detail: "กรอบการตัดสินใจหลักที่ใช้ร่วมกันทั้งองค์กร" },
      { label: "Operating Tracks", value: "3", detail: "บทบาทหลักที่เชื่อมงานวิศวกรรมกับการส่งมอบ" },
      { label: "Delivery Model", value: "Platform + Partner", detail: "แยกบทบาทชัดเจนระหว่างทีมแพลตฟอร์มและทีมส่งมอบ" },
    ],
    modelKicker: "Operating Model",
    modelHeading: "วิธีทำงานขององค์กรที่ออกแบบมาเพื่อขยายผลได้จริง",
    modelItems: [
      "Platform Team: พัฒนา core architecture, standards และ tooling",
      "Enablement System: ขับเคลื่อน docs, playbooks และองค์ความรู้สำหรับทีมใช้งาน",
      "Partner Network: ส่งมอบเชิงพาณิชย์และขยายผลในตลาดจริง",
    ],
    boundariesKicker: "What Gumon Is / Is Not",
    boundariesHeading: "ขอบเขตบทบาทที่ชัดเจนเพื่อรักษาความเชื่อมั่นของ ecosystem",
    isTitle: "What Gumon Is",
    isNotTitle: "What Gumon Is Not",
    isItems: [
      "องค์กรแพลตฟอร์มเทคโนโลยีแบบเปิด (Open-first Platform Organization)",
      "ผู้พัฒนาโครงสร้างกลาง มาตรฐาน และเครื่องมือที่ใช้ซ้ำได้",
      "ผู้สนับสนุน ecosystem ผ่านเอกสาร แนวปฏิบัติ และการทำงานร่วมกับพาร์ตเนอร์",
    ],
    isNotItems: [
      "Software House ที่รับพัฒนาโครงการปลายทางเป็นหลัก",
      "ผู้แข่งขันกับพาร์ตเนอร์ในงานส่งมอบเชิงพาณิชย์",
      "แพลตฟอร์มที่ปิดแกนหลักหรือบังคับจ่ายเงินเพื่อใช้งานความสามารถจำเป็น",
    ],
    casesKicker: "Mini Cases",
    casesHeading: "ตัวอย่างการตัดสินใจเชิงระบบที่ช่วยให้ส่งมอบได้ต่อเนื่อง",
    cases: [
      {
        title: "Standardized Delivery Setup",
        problem: "แต่ละโครงการตั้งต้นระบบใหม่ ทำให้ใช้เวลานำส่งนานและเกิดงานซ้ำ",
        approach: "ลงทุนกับมาตรฐานตั้งต้นกลางและแนวปฏิบัติที่ใช้ซ้ำได้ในหลายรูปแบบโครงการ",
        outcome: "ทีมสามารถเริ่มงานจากแนวทางเดียวกันและขยายโครงการได้ง่ายขึ้น",
      },
      {
        title: "Partner-Enabled Expansion",
        problem: "การขยายส่งมอบด้วยหลายทีมเสี่ยงต่อคุณภาพและความสม่ำเสมอ",
        approach: "สร้าง quality gates และชุดเอกสารที่พาร์ตเนอร์ใช้ร่วมกับทีมกลาง",
        outcome: "เพิ่มความมั่นใจในการส่งมอบและคุมมาตรฐานได้เมื่อจำนวนงานโตขึ้น",
      },
    ],
    legalKicker: "Legal Information",
    legalHeading: "ข้อมูลนิติบุคคล",
    companyLabel: "ชื่อบริษัท",
    addressLabel: "ที่อยู่จดทะเบียน",
    regLabel: "เลขทะเบียนนิติบุคคล",
    dateLabel: "วันที่จดทะเบียน",
    platformCta: "ดู Platform",
    teamCta: "รู้จักทีม",
    contactCta: "คุยกับทีม",
  },
  en: {
    title: "Company",
    description: "Learn about Gumon Technology, its principles, and platform-first operating model.",
    crumb: "Company",
    kicker: "Company / Overview",
    heading: "Gumon Technology builds practical software foundations for delivery teams",
    intro: "We are a technology organization focused on platform engineering and shared execution standards so engineering and business teams can move in the same direction faster.",
    principlesKicker: "Principle",
    principlesHeading: "Decision principles behind the platform",
    principles: [
      { title: "Open Source by Default", body: "The platform core must remain open and auditable for long-term confidence." },
      { title: "Platform over Projects", body: "We invest in reusable structures instead of one-off project fixes." },
      { title: "Partner-Driven Delivery", body: "Commercial delivery is scaled through partner networks." },
      { title: "Evidence-Led Execution", body: "Improvements are grounded in operational evidence and measurable outcomes." },
    ],
    strategicKicker: "Strategic Intent",
    strategicHeading: "Vision and mission",
    strategicItems: [
      { title: "Vision", body: "Advance software delivery so teams can start faster, ship continuously, and avoid vendor lock-in through an open approach." },
      { title: "Mission", body: "Build platform standards and practical knowledge that technology teams and partners can apply across industries." },
    ],
    proofKicker: "Proof Metrics",
    proofHeading: "Structural indicators used to validate readiness for scale",
    proofMetrics: [
      { label: "Core Principles", value: "4", detail: "Shared decision framework across the organization." },
      { label: "Operating Tracks", value: "3", detail: "Execution tracks linking engineering and delivery operations." },
      { label: "Delivery Model", value: "Platform + Partner", detail: "Clear role separation between platform and commercial delivery." },
    ],
    modelKicker: "Operating Model",
    modelHeading: "Execution model designed for practical scale",
    modelItems: [
      "Platform Team: builds core architecture, standards, and tooling",
      "Enablement System: drives docs, playbooks, and operational knowledge",
      "Partner Network: delivers commercial outcomes and market expansion",
    ],
    boundariesKicker: "What Gumon Is / Is Not",
    boundariesHeading: "Clear scope boundaries to preserve ecosystem trust",
    isTitle: "What Gumon Is",
    isNotTitle: "What Gumon Is Not",
    isItems: [
      "An open-first platform organization",
      "A builder of shared standards and reusable tooling",
      "An ecosystem enabler through practical documentation and partner collaboration",
    ],
    isNotItems: [
      "A traditional software house focused on custom end delivery",
      "A competitor to partners in commercial delivery",
      "A closed platform that locks required capabilities behind forced payment",
    ],
    casesKicker: "Mini Cases",
    casesHeading: "System-level decisions that improved delivery continuity",
    cases: [
      {
        title: "Standardized Delivery Setup",
        problem: "Projects repeatedly started from scratch, causing delays and duplicated work.",
        approach: "Invested in shared baselines and reusable operational playbooks.",
        outcome: "Teams started from a common baseline and scaled delivery more predictably.",
      },
      {
        title: "Partner-Enabled Expansion",
        problem: "Multi-team expansion introduced quality and consistency risk.",
        approach: "Defined quality gates and shared partner documentation.",
        outcome: "Delivery confidence improved as workload scaled.",
      },
    ],
    legalKicker: "Legal Information",
    legalHeading: "Company Registration Details",
    companyLabel: "Company",
    addressLabel: "Registered Address",
    regLabel: "Registration Number",
    dateLabel: "Registered Date",
    platformCta: "View Platform",
    teamCta: "Meet Team",
    contactCta: "Talk to Team",
  },
};
