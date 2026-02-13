import { companyInfoByLocale } from "@/lib/companyInfo";
import type { Locale } from "@/lib/i18n";

export type Section = { title: string; body?: string; items?: string[] };

export type TermsCopy = {
  title: string;
  description: string;
  crumb: string;
  kicker: string;
  heading: string;
  updatedAt: string;
  intro: string;
  sections: Section[];
};

export const termsMeta: Partial<Record<Locale, { title: string; description: string }>> = {
  th: { title: "Terms of Use", description: "ข้อกำหนดและเงื่อนไขการใช้งานเว็บไซต์ Gumon Technology" },
  en: { title: "Terms of Use", description: "Terms and conditions for use of the Gumon Technology website." },
  "zh-CN": { title: "使用条款", description: "Gumon Technology 网站使用条款。" },
  ja: { title: "利用規約", description: "Gumon Technology ウェブサイトの利用規約。" },
  ko: { title: "이용약관", description: "Gumon Technology 웹사이트 이용약관입니다." },
  es: { title: "Términos de Uso", description: "Términos y condiciones de uso del sitio web de Gumon Technology." },
  fr: { title: "Conditions d'Utilisation", description: "Conditions d'utilisation du site web de Gumon Technology." },
  de: { title: "Nutzungsbedingungen", description: "Nutzungsbedingungen für die Website von Gumon Technology." },
  "pt-BR": { title: "Termos de Uso", description: "Termos e condições de uso do site da Gumon Technology." },
  ar: { title: "شروط الاستخدام", description: "شروط وأحكام استخدام موقع Gumon Technology." },
};

export const termsContent: Partial<Record<Locale, TermsCopy>> = {
  th: {
    title: "Terms of Use",
    description: "ข้อกำหนดและเงื่อนไขการใช้งานเว็บไซต์ Gumon Technology",
    crumb: "Terms of Use",
    kicker: "Terms of Use",
    heading: "ข้อกำหนดการใช้งาน",
    updatedAt: "February 13, 2026",
    intro: "การเข้าใช้งานเว็บไซต์นี้ถือว่าผู้ใช้งานยอมรับข้อกำหนดการใช้งานฉบับนี้ กรุณาอ่านรายละเอียดอย่างรอบคอบก่อนใช้งาน",
    sections: [
      { title: "1. ขอบเขตการใช้งาน", items: ["เนื้อหาบนเว็บไซต์จัดทำเพื่อการให้ข้อมูลเกี่ยวกับ Gumon Technology", "ข้อกำหนดนี้ครอบคลุมการใช้งานหน้าเว็บไซต์สาธารณะและช่องทางติดต่อที่ระบุบนเว็บไซต์", "เราอาจปรับปรุง แก้ไข หรือถอดถอนเนื้อหาบางส่วนโดยไม่ต้องแจ้งล่วงหน้า"] },
      { title: "2. คุณสมบัติผู้ใช้งานและการยอมรับข้อกำหนด", items: ["ผู้ใช้งานต้องใช้เว็บไซต์โดยสุจริตและไม่กระทำการที่ผิดกฎหมาย", "หากคุณไม่ยอมรับข้อกำหนดนี้ กรุณาหยุดใช้งานเว็บไซต์", "การใช้เว็บไซต์ต่อเนื่องถือเป็นการยอมรับข้อกำหนดและการเปลี่ยนแปลงที่ประกาศภายหลัง"] },
      { title: "3. ทรัพย์สินทางปัญญา", items: ["ข้อความ รูปภาพ โลโก้ ดีไซน์ และองค์ประกอบอื่นบนเว็บไซต์เป็นทรัพย์สินของ Gumon Technology หรือเจ้าของสิทธิที่เกี่ยวข้อง", "ห้ามคัดลอก ดัดแปลง เผยแพร่ หรือใช้งานเชิงพาณิชย์โดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษร", "การอ้างอิงเนื้อหาต้องระบุแหล่งที่มาอย่างเหมาะสมและไม่ทำให้เกิดความเข้าใจผิด"] },
      { title: "4. การใช้งานที่ไม่อนุญาต", items: ["ห้ามพยายามเจาะระบบ ทดสอบช่องโหว่ หรือเข้าถึงส่วนที่ไม่ได้รับอนุญาต", "ห้ามใช้ระบบอัตโนมัติที่สร้างภาระเกินสมควรต่อบริการ", "ห้ามคัดลอกหรือดึงข้อมูลจำนวนมากจากเว็บไซต์เพื่อวัตถุประสงค์ที่ขัดต่อกฎหมายหรือก่อให้เกิดความเสียหายต่อระบบ", "ห้ามส่งข้อมูลอันเป็นเท็จ เนื้อหาที่ละเมิดสิทธิ หรือเนื้อหาที่ผิดกฎหมายผ่านช่องทางติดต่อ"] },
      { title: "5. ความถูกต้องของข้อมูล", body: "เราพยายามดูแลให้ข้อมูลบนเว็บไซต์มีความถูกต้องและทันสมัย อย่างไรก็ตาม อาจมีความคลาดเคลื่อนหรือการเปลี่ยนแปลงได้ตามเวลา ผู้ใช้งานควรใช้ดุลยพินิจในการนำข้อมูลไปประกอบการตัดสินใจ" },
      { title: "6. ลิงก์และบริการภายนอก", body: "เว็บไซต์อาจมีลิงก์ไปยังบริการภายนอก เช่น Developer Documentation, Knowledge Base หรือโซเชียลมีเดีย ซึ่งอยู่ภายใต้เงื่อนไขและนโยบายของผู้ให้บริการนั้น ๆ" },
      { title: "7. การใช้งานช่องทางติดต่อและการส่งข้อมูล", items: ["ผู้ใช้งานรับรองว่าข้อมูลที่ส่งผ่านหน้า Contact เป็นข้อมูลที่ถูกต้องและมีสิทธิส่งให้เราใช้งาน", "ห้ามส่งข้อมูลที่ผิดกฎหมาย ข้อมูลที่ละเมิดสิทธิบุคคลอื่น หรือข้อมูลที่ไม่เกี่ยวข้องกับวัตถุประสงค์การติดต่อ", "การส่งข้อมูลผ่านหน้า Contact ไม่ถือเป็นการก่อให้เกิดสัญญาทางธุรกิจโดยอัตโนมัติ เว้นแต่มีการตกลงเป็นลายลักษณ์อักษรแยกต่างหาก"] },
      { title: "8. การจำกัดความรับผิด", body: "Gumon Technology ไม่รับผิดชอบความเสียหายโดยตรงหรือโดยอ้อม ที่เกิดจากการใช้งานเว็บไซต์หรือการพึ่งพาข้อมูลบนเว็บไซต์ เว้นแต่กรณีที่กฎหมายกำหนดไว้เป็นอย่างอื่น" },
      { title: "9. การชดใช้ความเสียหาย", body: "ผู้ใช้งานตกลงรับผิดชอบต่อความเสียหายที่เกิดจากการใช้งานที่ฝ่าฝืนข้อกำหนดนี้ ซึ่งส่งผลกระทบต่อเว็บไซต์ ระบบ หรือบุคคลที่เกี่ยวข้อง" },
      { title: "10. การระงับหรือยุติการให้บริการ", body: "เราอาจจำกัดหรือระงับการเข้าถึงเว็บไซต์บางส่วนหรือทั้งหมดชั่วคราว เพื่อบำรุงรักษาระบบ แก้ไขเหตุขัดข้อง หรือเหตุผลด้านความปลอดภัย" },
      { title: "11. ความเชื่อมโยงกับนโยบายอื่น", items: ["การเก็บ ใช้ และเปิดเผยข้อมูลส่วนบุคคลอยู่ภายใต้นโยบายความเป็นส่วนตัว (Privacy Policy)", "การใช้คุกกี้และตัวเลือกความยินยอมอยู่ภายใต้นโยบายคุกกี้ (Cookie Notice)", "ในกรณีที่ข้อกำหนดนี้ขัดหรือแย้งกับนโยบายคุ้มครองข้อมูลส่วนบุคคล ให้ตีความร่วมกันตามกฎหมายที่เกี่ยวข้อง"] },
      { title: "12. กฎหมายที่ใช้บังคับ", body: "ข้อกำหนดนี้ให้ตีความและบังคับใช้ตามกฎหมายที่เกี่ยวข้องของประเทศไทย เว้นแต่กฎหมายบังคับในเขตอำนาจอื่นกำหนดไว้เป็นอย่างอื่น" },
      { title: "13. การเปลี่ยนแปลงข้อกำหนด", body: "เราอาจปรับปรุงข้อกำหนดนี้เป็นครั้งคราว โดยแสดงวันที่ปรับปรุงล่าสุดบนหน้านี้ การใช้งานต่อหลังการปรับปรุงถือว่าคุณยอมรับข้อกำหนดฉบับใหม่" },
      { title: "14. ข้อมูลนิติบุคคลและช่องทางติดต่อ", items: [`ชื่อนิติบุคคล: ${companyInfoByLocale.th.legalName}`, `เลขทะเบียนนิติบุคคล: ${companyInfoByLocale.th.registrationNumber}`, `ที่อยู่: ${companyInfoByLocale.th.address}`, "ติดต่อทั่วไป: contact@gumon.io", "คำขอสิทธิข้อมูลส่วนบุคคล: data@gumon.io"] },
    ],
  },
  en: {
    title: "Terms of Use",
    description: "Terms and conditions for use of the Gumon Technology website.",
    crumb: "Terms of Use",
    kicker: "Terms of Use",
    heading: "Terms of Use",
    updatedAt: "February 13, 2026",
    intro: "By using this website, you agree to these terms of use. Please read them carefully before continuing.",
    sections: [
      { title: "1. Scope", items: ["Website content is provided for general information about Gumon Technology.", "These terms cover use of public website pages and listed contact channels.", "We may update, revise, or remove parts of the website without prior notice."] },
      { title: "2. User Eligibility and Acceptance", items: ["Users must use the website lawfully and in good faith.", "If you do not agree to these terms, please stop using the website.", "Continued use after updates constitutes acceptance of revised terms."] },
      { title: "3. Intellectual Property", items: ["Text, images, logos, design, and other website elements are owned by Gumon Technology or relevant rights holders.", "Copying, modification, publication, or commercial use without written permission is prohibited.", "Any references must include proper attribution and must not mislead users."] },
      { title: "4. Prohibited Use", items: ["Attempting unauthorized access, vulnerability probing, or system intrusion is prohibited.", "Automated actions that impose unreasonable service load are prohibited.", "Bulk extraction of data for unlawful or harmful use is prohibited.", "Submitting false, unlawful, or rights-infringing content via contact channels is prohibited."] },
      { title: "5. Information Accuracy", body: "We strive to keep website information accurate and current. However, content may change over time and users should apply their own judgment when making decisions." },
      { title: "6. External Links and Services", body: "The website may link to third-party services such as Developer Documentation, Knowledge Base, or social media, each governed by their own terms and policies." },
      { title: "7. Contact Submissions", items: ["You confirm that information submitted via Contact is accurate and that you have rights to provide it.", "You must not submit unlawful, rights-infringing, or irrelevant information.", "Submitting information through Contact does not create a business contract unless separately agreed in writing."] },
      { title: "8. Limitation of Liability", body: "Gumon Technology is not liable for direct or indirect damages arising from website use or reliance on website information, except where required by law." },
      { title: "9. Indemnification", body: "Users agree to be responsible for damages arising from breaches of these terms that impact the website, systems, or related parties." },
      { title: "10. Suspension or Termination", body: "We may limit or suspend access to parts or all of the website for maintenance, incident response, or security reasons." },
      { title: "11. Relation to Other Policies", items: ["Personal data processing is governed by our Privacy Policy.", "Cookie usage and consent options are governed by our Cookie Notice.", "If any conflict arises, these terms and data protection policies are interpreted together under applicable law."] },
      { title: "12. Governing Law", body: "These terms are governed by applicable laws of Thailand, unless mandatory laws in other jurisdictions require otherwise." },
      { title: "13. Changes to Terms", body: "We may update these terms from time to time and will display the latest update date on this page. Continued use indicates acceptance of updated terms." },
      { title: "14. Legal Entity and Contact", items: [`Legal entity: ${companyInfoByLocale.en.legalName}`, `Registration number: ${companyInfoByLocale.en.registrationNumber}`, `Address: ${companyInfoByLocale.en.address}`, "General contact: contact@gumon.io", "Data rights requests: data@gumon.io"] },
    ],
  },
};
