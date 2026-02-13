import type { Locale } from "@/lib/i18n";

export type ContactCopy = {
  title: string;
  description: string;
  crumb: string;
  kicker: string;
  heading: string;
  intro: string;
  metrics: { label: string; value: string }[];
  routes: { title: string; body: string; action: string; href: string }[];
  projectBriefKicker: string;
  projectBriefHeading: string;
  projectBriefBody: string;
  projectBriefItems: string[];
  projectBriefNote: string;
  dsarIntro: string;
  dsarSubjectPrefix: string;
  directContactKicker: string;
  directContactHeading: string;
  emailSubject: string;
  companyInfoKicker: string;
  registrationLabel: string;
  registeredAtLabel: string;
  socialKicker: string;
  knowledgeKicker: string;
  docsLabel: string;
  kbLabel: string;
};

export const contactMeta: Partial<Record<Locale, { title: string; description: string }>> = {
  th: {
    title: "Contact",
    description: "ติดต่อทีม Gumon สำหรับคำถามด้านเทคนิค ความร่วมมือกับพาร์ตเนอร์ หรือการเริ่มใช้งานแพลตฟอร์ม",
  },
  en: {
    title: "Contact",
    description: "Contact Gumon for technical planning, partner collaboration, or platform onboarding.",
  },
};

export const socialChannels = [
  { name: "LINE OA", href: "https://lin.ee/BLe8er3", handle: "lin.ee/BLe8er3", icon: "/assets/social/line.svg" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/gumon", handle: "linkedin.com/company/gumon", icon: "/assets/social/linkedin.svg" },
  { name: "Facebook", href: "https://facebook.com/gumon.tech", handle: "facebook.com/gumon.tech", icon: "/assets/social/facebook.svg" },
] as const;

export const contactContent: Partial<Record<Locale, ContactCopy>> = {
  th: {
    title: "Contact",
    description: "ติดต่อทีม Gumon สำหรับคำถามด้านเทคนิค ความร่วมมือกับพาร์ตเนอร์ หรือการเริ่มใช้งานแพลตฟอร์ม",
    crumb: "Contact",
    kicker: "Contact / Start Here",
    heading: "คุยกับทีม Gumon เพื่อเริ่มโครงการให้เร็วและตรงเป้าหมาย",
    intro: "แชร์โจทย์ของคุณเบื้องต้น แล้วทีมจะช่วยแนะนำแนวทางเริ่มต้นที่เหมาะกับบริบทธุรกิจและเทคนิคขององค์กร",
    metrics: [
      { label: "เวลาตอบกลับ", value: "ตอบกลับครั้งแรกโดยทั่วไปภายใน 1 วันทำการ" },
      { label: "รูปแบบการให้คำแนะนำ", value: "ได้รับแนวทางเริ่มต้นที่เชื่อมกับโจทย์ธุรกิจและเทคนิค" },
      { label: "ขอบเขตที่ครอบคลุม", value: "ครอบคลุมทั้งประเมินระบบเดิมและแผนส่งมอบ" },
    ],
    routes: [
      { title: "ปรึกษาด้านเทคนิค", body: "ต้องการประเมินสถาปัตยกรรม ระบบเดิม หรือแนวทางย้ายระบบ", action: "เริ่มคุยกับทีม", href: "#contact-form" },
      { title: "ความร่วมมือกับพาร์ตเนอร์", body: "ต้องการหารือรูปแบบความร่วมมือทางธุรกิจและการส่งมอบ", action: "คุยเรื่องความร่วมมือ", href: "#contact-form" },
      { title: "สอบถามข้อมูลทั่วไป", body: "ต้องการรู้จักบริการและแนวทางเริ่มใช้งานแพลตฟอร์ม", action: "ดูช่องทางติดต่อ", href: "#contact-form" },
    ],
    projectBriefKicker: "Project Brief",
    projectBriefHeading: "เตรียมข้อมูลสำคัญก่อนเริ่มคุยโปรเจกต์",
    projectBriefBody: "ยิ่งข้อมูลชัด ทีมยิ่งประเมินและตอบกลับได้เร็ว ทั้งด้านเทคนิค แผนส่งมอบ และแนวทางการร่วมงาน",
    projectBriefItems: [
      "ปัญหาหลักที่ต้องการแก้ใน 1-2 ไตรมาสข้างหน้า",
      "ข้อมูลระบบเดิมหรือข้อจำกัดที่มีผลต่อการส่งมอบ",
      "ผลลัพธ์ทางธุรกิจที่อยากเห็นหลังเริ่มโครงการ",
    ],
    projectBriefNote: "เริ่มต้นติดต่อได้ทันทีผ่านอีเมลหรือ Social ในช่องขวามือ ทีมจะประสานงานกลับโดยเร็ว",
    dsarIntro: "คำขอด้านข้อมูลส่วนบุคคล (เช่น ขอเข้าถึง แก้ไข หรือลบข้อมูล) ส่งได้ที่",
    dsarSubjectPrefix: "โดยระบุหัวข้ออีเมลขึ้นต้นว่า",
    directContactKicker: "Direct Contact",
    directContactHeading: "ช่องทางติดต่อหลัก",
    emailSubject: "สอบถามข้อมูล จากเว็บไซต์ Gumon",
    companyInfoKicker: "Company Information",
    registrationLabel: "เลขทะเบียนนิติบุคคล",
    registeredAtLabel: "วันที่จดทะเบียน",
    socialKicker: "Social Media",
    knowledgeKicker: "Knowledge Channels",
    docsLabel: "Developer Documentation",
    kbLabel: "Knowledge Base",
  },
  en: {
    title: "Contact",
    description: "Contact Gumon for technical planning, partner collaboration, or platform onboarding.",
    crumb: "Contact",
    kicker: "Contact / Start Here",
    heading: "Talk with Gumon to start your project faster and with clear execution goals",
    intro: "Share your initial context and our team will suggest a practical starting path aligned with your business and technical constraints.",
    metrics: [
      { label: "Response Time", value: "First response is typically within 1 business day" },
      { label: "Advisory Format", value: "Initial guidance mapped to both business and technical priorities" },
      { label: "Coverage", value: "Covers baseline assessment and delivery planning" },
    ],
    routes: [
      { title: "Technical Consultation", body: "Architecture review, legacy assessment, or migration planning", action: "Start with Team", href: "#contact-form" },
      { title: "Partner Collaboration", body: "Discuss commercial collaboration and delivery model", action: "Discuss Partnership", href: "#contact-form" },
      { title: "General Inquiry", body: "Understand services and onboarding paths", action: "View Contact Paths", href: "#contact-form" },
    ],
    projectBriefKicker: "Project Brief",
    projectBriefHeading: "Prepare key information before discussion",
    projectBriefBody: "The clearer the context, the faster the team can assess technical scope, delivery plan, and collaboration options.",
    projectBriefItems: [
      "Primary problems to solve in the next 1-2 quarters",
      "Current system context and constraints affecting delivery",
      "Business outcomes expected after kickoff",
    ],
    projectBriefNote: "You can contact us directly via email or social channels in the right panel. Our team will coordinate with you promptly.",
    dsarIntro: "Personal data requests (such as access, correction, or deletion) can be sent to",
    dsarSubjectPrefix: "Please use email subject prefix",
    directContactKicker: "Direct Contact",
    directContactHeading: "Primary contact channel",
    emailSubject: "Inquiry from Gumon Website",
    companyInfoKicker: "Company Information",
    registrationLabel: "Registration Number",
    registeredAtLabel: "Registered At",
    socialKicker: "Social Media",
    knowledgeKicker: "Knowledge Channels",
    docsLabel: "Developer Documentation",
    kbLabel: "Knowledge Base",
  },
};

