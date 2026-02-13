import { companyInfoByLocale } from "@/lib/companyInfo";
import type { Locale } from "@/lib/i18n";

export type Section = {
  title: string;
  body?: string;
  items?: string[];
};

export type PrivacyCopy = {
  title: string;
  description: string;
  crumb: string;
  kicker: string;
  heading: string;
  updatedAt: string;
  intro: string;
  sections: Section[];
};

export const privacyMeta: Partial<Record<Locale, { title: string; description: string }>> = {
  th: {
    title: "Privacy Policy",
    description: "นโยบายความเป็นส่วนตัวของเว็บไซต์ Gumon Technology สำหรับผู้ใช้งานสาธารณะ",
  },
  en: {
    title: "Privacy Policy",
    description: "Privacy Policy for Gumon Technology public website users.",
  },
  "zh-CN": {
    title: "隐私政策",
    description: "Gumon Technology 公共网站用户隐私政策。",
  },
  ja: {
    title: "プライバシーポリシー",
    description: "Gumon Technology 公開サイト向けのプライバシーポリシー。",
  },
  ko: {
    title: "개인정보 처리방침",
    description: "Gumon Technology 공개 웹사이트 이용자를 위한 개인정보 처리방침입니다.",
  },
  es: {
    title: "Política de Privacidad",
    description: "Política de privacidad para usuarios del sitio público de Gumon Technology.",
  },
  fr: {
    title: "Politique de Confidentialité",
    description: "Politique de confidentialité pour les utilisateurs du site public de Gumon Technology.",
  },
  de: {
    title: "Datenschutzerklärung",
    description: "Datenschutzerklärung für Nutzer der öffentlichen Website von Gumon Technology.",
  },
  "pt-BR": {
    title: "Política de Privacidade",
    description: "Política de privacidade para usuários do site público da Gumon Technology.",
  },
  ar: {
    title: "سياسة الخصوصية",
    description: "سياسة الخصوصية لمستخدمي الموقع العام لشركة Gumon Technology.",
  },
};

export const privacyContent: Record<"th" | "en", PrivacyCopy> = {
  th: {
    title: "Privacy Policy",
    description: "นโยบายความเป็นส่วนตัวของเว็บไซต์ Gumon Technology สำหรับผู้ใช้งานสาธารณะ",
    crumb: "Privacy Policy",
    kicker: "Privacy Policy",
    heading: "นโยบายความเป็นส่วนตัว",
    updatedAt: "February 13, 2026",
    intro:
      "เว็บไซต์ Gumon Technology ให้ความสำคัญกับความเป็นส่วนตัวของผู้ใช้งาน นโยบายนี้อธิบายว่าข้อมูลใดที่เราเก็บ วิธีใช้ข้อมูล ระยะเวลาการเก็บรักษา และสิทธิของคุณเมื่อใช้เว็บไซต์สาธารณะของเรา",
    sections: [
      {
        title: "1. ขอบเขตนโยบาย",
        items: [
          "นโยบายนี้ครอบคลุมเฉพาะการใช้งานเว็บไซต์สาธารณะของ Gumon และหน้าที่เกี่ยวข้อง",
          "ไม่ครอบคลุมบริการภายนอกที่เชื่อมลิงก์ออกไป เช่นเว็บไซต์เอกสารหรือโซเชียลมีเดีย",
          `ผู้ควบคุมข้อมูลส่วนบุคคลตามนโยบายนี้คือ ${companyInfoByLocale.th.legalName} (เลขทะเบียน ${companyInfoByLocale.th.registrationNumber})`,
        ],
      },
      {
        title: "2. ประเภทข้อมูลที่เราเก็บ",
        items: [
          "ข้อมูลที่คุณกรอกเอง: ชื่อ อีเมล เบอร์โทร หัวข้อ และรายละเอียดที่ส่งผ่านฟอร์มติดต่อ",
          "ข้อมูลเชิงเทคนิค: URL ที่เข้าชม เวลาเข้าใช้งาน หน้าอ้างอิง (referrer) และประเภทอุปกรณ์",
          "ข้อมูลคุกกี้และข้อมูลเพื่อการวัดผลการใช้งานหรือการตลาด (เมื่อได้รับความยินยอม) เช่นข้อมูลจาก Google Analytics หรือ Google Tag Manager",
        ],
      },
      {
        title: "3. วัตถุประสงค์การใช้ข้อมูล",
        items: [
          "ติดต่อกลับและประเมินความต้องการเบื้องต้นของผู้ติดต่อผ่านหน้า Contact",
          "วิเคราะห์ประสิทธิภาพช่องทางการตลาดและพฤติกรรมการใช้งานเว็บไซต์ในภาพรวม",
          "ดูแลความปลอดภัยของระบบ ป้องกันการใช้งานที่ผิดปกติ และรักษาคุณภาพบริการ",
          "วางแผนปรับปรุงบริการและเนื้อหาที่เกี่ยวข้องกับแพลตฟอร์ม Gumon",
        ],
      },
      {
        title: "4. ฐานทางกฎหมายในการประมวลผลข้อมูล",
        items: [
          "ความยินยอมของผู้ใช้งานในกรณีที่ต้องขอความยินยอมก่อน",
          "ความจำเป็นเพื่อให้บริการตามที่ผู้ใช้งานร้องขอผ่านช่องทางติดต่อ",
          "ประโยชน์โดยชอบด้วยกฎหมายในการรักษาความปลอดภัยและพัฒนาคุณภาพบริการ",
        ],
      },
      {
        title: "5. การเปิดเผยข้อมูลต่อบุคคลภายนอก",
        items: [
          "เราไม่ขายข้อมูลส่วนบุคคลให้บุคคลภายนอก",
          "ปัจจุบันผู้ควบคุมข้อมูลคือ Gumon Technology เพียงรายเดียว",
          "ณ วันที่ประกาศนโยบายนี้ เรายังไม่มีการส่งต่อข้อมูลติดต่อไปยังบริษัทในเครือหรือผู้ประมวลผลข้อมูลภายนอกเพื่อกิจกรรมเชิงธุรกิจ",
          "หากในอนาคตมีการใช้งานผู้ให้บริการภายนอกหรือมีการแบ่งปันข้อมูลในกลุ่มบริษัท เราจะปรับปรุงนโยบายนี้ก่อนเริ่มใช้งานจริง",
          "การเปิดเผยข้อมูลจะทำเฉพาะเท่าที่จำเป็นตามวัตถุประสงค์ที่ระบุไว้หรือเมื่อกฎหมายกำหนด",
        ],
      },
      {
        title: "6. การโอนข้อมูลข้ามประเทศ",
        body:
          "ปัจจุบัน Gumon ยังไม่มีการโอนข้อมูลส่วนบุคคลออกไปยังนิติบุคคลอื่นเป็นกิจวัตร อย่างไรก็ตาม เว็บไซต์ของเราเข้าถึงได้จากหลายประเทศ และในอนาคตหากมีความจำเป็นต้องโอนข้อมูลข้ามประเทศ เราจะใช้มาตรการคุ้มครองที่เหมาะสมและปรับปรุงนโยบายนี้ให้ชัดเจนก่อนดำเนินการ",
      },
      {
        title: "7. ระยะเวลาเก็บรักษาข้อมูล",
        items: [
          "ข้อมูลจากแบบฟอร์มติดต่อและอีเมลประสานงาน: โดยทั่วไปไม่เกิน 24 เดือนหลังการติดต่อครั้งล่าสุด",
          "ข้อมูลบันทึกด้านความปลอดภัยของระบบ: โดยทั่วไป 6–12 เดือน",
          "ข้อมูลคุกกี้และการวัดผล: ตามระยะเวลาของเครื่องมือที่ใช้งานและตามตัวเลือกความยินยอมของผู้ใช้",
          "เมื่อครบวัตถุประสงค์แล้ว เราจะลบหรือทำให้ไม่สามารถระบุตัวตนได้",
          "หากต้องการลบข้อมูลก่อนกำหนด สามารถส่งคำขอได้ผ่านอีเมล data@gumon.io",
        ],
      },
      {
        title: "8. ความมั่นคงปลอดภัยของข้อมูล",
        body:
          "เราใช้มาตรการด้านเทคนิคและการบริหารจัดการที่เหมาะสม เพื่อป้องกันการเข้าถึง การเปิดเผย หรือการแก้ไขข้อมูลโดยไม่ได้รับอนุญาต",
      },
      {
        title: "9. สิทธิของเจ้าของข้อมูล",
        items: [
          "คุณสามารถขอเข้าถึง แก้ไข ลบ คัดค้าน หรือจำกัดการใช้ข้อมูลที่เกี่ยวข้องกับคุณ ตามสิทธิที่กฎหมายกำหนด",
          "ช่องทางสำหรับส่งคำขอสิทธิข้อมูล: data@gumon.io (แนะนำระบุหัวข้ออีเมลขึ้นต้นว่า [DSAR])",
          "โดยทั่วไปเราจะตอบรับคำขอเบื้องต้นภายใน 72 ชั่วโมง และดำเนินการให้แล้วเสร็จภายในกรอบเวลาที่กฎหมายกำหนด",
        ],
      },
      {
        title: "10. ข้อมูลเด็กและข้อมูลอ่อนไหว",
        body:
          "เว็บไซต์นี้ไม่ได้ออกแบบมาเพื่อเก็บข้อมูลส่วนบุคคลของผู้เยาว์โดยเฉพาะ และไม่ได้มีวัตถุประสงค์ในการเก็บข้อมูลอ่อนไหวโดยตรง หากพบว่ามีการส่งข้อมูลดังกล่าวเข้ามาโดยไม่ตั้งใจ กรุณาติดต่อเราเพื่อดำเนินการลบ",
      },
      {
        title: "11. การร้องเรียนต่อหน่วยงานกำกับดูแล",
        body:
          "หากคุณเห็นว่าเราไม่ปฏิบัติตามกฎหมายคุ้มครองข้อมูลส่วนบุคคลที่เกี่ยวข้อง คุณมีสิทธิร้องเรียนต่อหน่วยงานกำกับดูแลในเขตอำนาจที่เกี่ยวข้องกับคุณ เช่น สำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคลของประเทศไทย",
      },
      {
        title: "12. การเปลี่ยนแปลงนโยบาย",
        body:
          "เราอาจปรับปรุงนโยบายนี้เป็นครั้งคราว โดยจะแสดงวันที่ปรับปรุงล่าสุดบนหน้านี้ เพื่อให้ผู้ใช้งานตรวจสอบได้อย่างโปร่งใส",
      },
      {
        title: "13. ช่องทางติดต่อ",
        items: [
          "คำถามด้านนโยบายและสิทธิข้อมูลส่วนบุคคล: data@gumon.io",
          "ทีมผู้ดูแลข้อมูล: Data Governance & Privacy Office",
          `ชื่อและที่อยู่สำหรับการติดต่อ: ${companyInfoByLocale.th.legalName}, ${companyInfoByLocale.th.address}`,
        ],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    description: "Privacy Policy for Gumon Technology public website users.",
    crumb: "Privacy Policy",
    kicker: "Privacy Policy",
    heading: "Privacy Policy",
    updatedAt: "February 13, 2026",
    intro:
      "Gumon Technology values your privacy. This policy explains what data we collect, how we use it, retention periods, and your rights when using our public website.",
    sections: [
      {
        title: "1. Scope",
        items: [
          "This policy applies to Gumon public website usage and related pages.",
          "It does not cover third-party services linked from this website, such as external documentation or social media.",
          `The data controller under this policy is ${companyInfoByLocale.en.legalName} (registration no. ${companyInfoByLocale.en.registrationNumber}).`,
        ],
      },
      {
        title: "2. Data We Collect",
        items: [
          "Information you provide directly: name, email, phone, topic, and details sent through contact forms.",
          "Technical data: visited URLs, access time, referrer, and device type.",
          "Cookie and analytics/marketing data (where consent is required), including tools such as Google Analytics or Google Tag Manager.",
        ],
      },
      {
        title: "3. Purposes of Processing",
        items: [
          "To respond to inquiries and assess initial project requirements from Contact submissions.",
          "To analyze website usage and channel performance at an aggregate level.",
          "To protect platform security, detect abnormal usage, and maintain service quality.",
          "To improve services and content related to the Gumon platform.",
        ],
      },
      {
        title: "4. Legal Bases",
        items: [
          "User consent where consent is required.",
          "Necessity to provide requested information or support through contact channels.",
          "Legitimate interests in security and service quality improvement.",
        ],
      },
      {
        title: "5. Data Sharing",
        items: [
          "We do not sell personal data.",
          "At present, Gumon Technology is the sole data controller for this website.",
          "As of this policy date, we do not routinely transfer contact data to affiliates or external processors for business operations.",
          "If external processors or group sharing are introduced in the future, we will update this policy before activation.",
          "Any disclosure is limited to what is necessary for stated purposes or required by law.",
        ],
      },
      {
        title: "6. Cross-border Data Transfers",
        body:
          "Gumon does not currently perform routine international transfers of personal data to other entities. Since the website is globally accessible, if cross-border transfer becomes necessary in the future, we will apply appropriate safeguards and update this policy in advance.",
      },
      {
        title: "7. Retention Periods",
        items: [
          "Contact form and coordination email data: typically up to 24 months after the latest contact.",
          "Security logs: typically 6-12 months.",
          "Cookie and analytics data: based on tool settings and user consent choices.",
          "After retention purposes are fulfilled, data is deleted or anonymized.",
          "You may request earlier deletion via data@gumon.io.",
        ],
      },
      {
        title: "8. Data Security",
        body:
          "We apply appropriate technical and organizational safeguards to protect against unauthorized access, disclosure, or modification.",
      },
      {
        title: "9. Data Subject Rights",
        items: [
          "You may request access, correction, deletion, objection, or restriction of processing in accordance with applicable law.",
          "Submit requests to data@gumon.io (recommended email subject prefix: [DSAR]).",
          "We generally acknowledge requests within 72 hours and complete handling within legal timelines.",
        ],
      },
      {
        title: "10. Children and Sensitive Data",
        body:
          "This website is not designed to intentionally collect children's personal data and is not intended for direct sensitive data collection. If such data is submitted unintentionally, please contact us for removal.",
      },
      {
        title: "11. Regulatory Complaints",
        body:
          "If you believe we do not comply with applicable data protection laws, you may lodge a complaint with the relevant supervisory authority in your jurisdiction.",
      },
      {
        title: "12. Policy Updates",
        body:
          "We may update this policy from time to time and will display the latest update date on this page.",
      },
      {
        title: "13. Contact",
        items: [
          "Privacy and data rights inquiries: data@gumon.io",
          "Responsible team: Data Governance & Privacy Office",
          `Contact name and address: ${companyInfoByLocale.en.legalName}, ${companyInfoByLocale.en.address}`,
        ],
      },
    ],
  },
};
