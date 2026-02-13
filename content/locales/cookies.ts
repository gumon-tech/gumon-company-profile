import type { Locale } from "@/lib/i18n";

export type Section = { title: string; body?: string; items?: string[] };

export type CookiesCopy = {
  title: string;
  description: string;
  crumb: string;
  kicker: string;
  heading: string;
  updatedAt: string;
  intro: string;
  sections: Section[];
};

export const cookiesMeta: Partial<Record<Locale, { title: string; description: string }>> = {
  th: { title: "Cookie Notice", description: "นโยบายคุกกี้สำหรับเว็บไซต์ Gumon Technology" },
  en: { title: "Cookie Notice", description: "Cookie policy for the Gumon Technology website." },
  "zh-CN": { title: "Cookie 说明", description: "Gumon Technology 网站的 Cookie 政策。" },
  ja: { title: "Cookie 通知", description: "Gumon Technology ウェブサイトの Cookie ポリシー。" },
  ko: { title: "쿠키 고지", description: "Gumon Technology 웹사이트 쿠키 정책입니다." },
  es: { title: "Aviso de Cookies", description: "Política de cookies del sitio web de Gumon Technology." },
  fr: { title: "Notice Cookies", description: "Politique de cookies du site web de Gumon Technology." },
  de: { title: "Cookie-Hinweis", description: "Cookie-Richtlinie für die Website von Gumon Technology." },
  "pt-BR": { title: "Aviso de Cookies", description: "Política de cookies do site da Gumon Technology." },
  ar: { title: "إشعار ملفات تعريف الارتباط", description: "سياسة ملفات تعريف الارتباط لموقع Gumon Technology." },
};

export const cookiesContent: Partial<Record<Locale, CookiesCopy>> = {
  th: {
    title: "Cookie Notice",
    description: "นโยบายคุกกี้สำหรับเว็บไซต์ Gumon Technology",
    crumb: "Cookie Notice",
    kicker: "Cookie Notice",
    heading: "นโยบายคุกกี้",
    updatedAt: "February 13, 2026",
    intro: "เว็บไซต์นี้อาจใช้คุกกี้หรือเทคโนโลยีที่ใกล้เคียงกันเพื่อช่วยให้เว็บไซต์ทำงานได้อย่างเหมาะสม วิเคราะห์การใช้งาน และปรับปรุงประสบการณ์ผู้ใช้งาน โดยคุกกี้วิเคราะห์จะทำงานเมื่อผู้ใช้ให้ความยินยอม",
    sections: [
      { title: "1. คุกกี้คืออะไร", body: "คุกกี้คือไฟล์ข้อมูลขนาดเล็กที่จัดเก็บบนอุปกรณ์ของคุณเมื่อเข้าเว็บไซต์ เพื่อช่วยให้เว็บไซต์จดจำข้อมูลและให้บริการได้มีประสิทธิภาพมากขึ้น" },
      { title: "2. ประเภทคุกกี้ที่เราใช้งาน", items: ["คุกกี้ที่จำเป็น (Strictly Necessary): จำเป็นต่อการทำงานพื้นฐานและความปลอดภัยของเว็บไซต์", "คุกกี้เพื่อการวิเคราะห์ (Analytics): ใช้วิเคราะห์พฤติกรรมการใช้งานแบบภาพรวม เช่น หน้าที่เข้าชมบ่อย (จะทำงานเมื่อผู้ใช้ยินยอม)", "คุกกี้การตั้งค่า (Preference): อาจถูกใช้งานเพื่อจดจำตัวเลือกบางอย่างตามการพัฒนาของเว็บไซต์ในอนาคต"] },
      { title: "3. วัตถุประสงค์การใช้คุกกี้", items: ["ทำให้เว็บไซต์ทำงานได้อย่างถูกต้องและมีความเสถียร", "ปรับปรุงประสบการณ์ใช้งานและโครงสร้างเนื้อหาในหน้าเว็บ", "วิเคราะห์แนวโน้มการใช้งานเพื่อการพัฒนาเว็บไซต์ในระยะถัดไป"] },
      { title: "4. คุกกี้ของบุคคลภายนอก", body: "ปัจจุบันเว็บไซต์อาจยังไม่มีการเปิดใช้งานคุกกี้จากผู้ให้บริการภายนอกในทุกกรณี หากมีการเปิดใช้งานเครื่องมือวิเคราะห์หรือการตลาด เช่น Google Analytics หรือ Google Tag Manager เราจะใช้งานภายใต้ความยินยอมของผู้ใช้ และคุกกี้ดังกล่าวจะอยู่ภายใต้นโยบายของผู้ให้บริการนั้น ๆ" },
      { title: "5. ระยะเวลาการจัดเก็บคุกกี้", items: ["Session Cookies: ถูกลบเมื่อปิดเบราว์เซอร์", "Persistent Cookies: ถูกเก็บไว้ตามระยะเวลาที่กำหนดหรือจนกว่าผู้ใช้งานจะลบออก"] },
      { title: "6. สถานะการใช้งานปัจจุบันของเว็บไซต์", items: ["เว็บไซต์ใช้ตัวบันทึกการยินยอมคุกกี้ผ่าน localStorage key: gumon_cookie_consent_v2", "หากคุณเลือก \"จำเป็นเท่านั้น\" ระบบจะไม่เปิดใช้งานเครื่องมือวิเคราะห์หรือการตลาด", "หากคุณเลือก \"ยอมรับทั้งหมด\" ระบบสามารถเปิดใช้งานเครื่องมือวิเคราะห์ เช่น Google Analytics หรือ Google Tag Manager ตามการตั้งค่าของระบบ"] },
      { title: "7. การจัดการคุกกี้โดยผู้ใช้งาน", items: ["ผู้ใช้งานสามารถเลือกได้จากแบนเนอร์คุกกี้ระหว่าง \"จำเป็นเท่านั้น\" หรือ \"ยอมรับทั้งหมด\"", "ผู้ใช้งานสามารถตั้งค่าเบราว์เซอร์เพื่อปฏิเสธหรือลบคุกกี้ได้เพิ่มเติม", "หากปิดคุกกี้ที่จำเป็น บางฟังก์ชันของเว็บไซต์อาจทำงานได้ไม่สมบูรณ์"] },
      { title: "8. ความเชื่อมโยงกับนโยบายความเป็นส่วนตัว", body: "การใช้คุกกี้และข้อมูลที่เกี่ยวข้องอยู่ภายใต้กรอบนโยบายความเป็นส่วนตัวของเรา กรุณาอ่านรายละเอียดเพิ่มเติมที่หน้า Privacy Policy" },
      { title: "9. ช่องทางติดต่อ", items: ["คำถามเกี่ยวกับคุกกี้และการตั้งค่าความยินยอม: data@gumon.io", "คำถามทั่วไปเกี่ยวกับเว็บไซต์: contact@gumon.io"] },
      { title: "10. การปรับปรุงนโยบายคุกกี้", body: "เราอาจปรับปรุงนโยบายคุกกี้เป็นระยะ โดยจะแสดงวันที่ปรับปรุงล่าสุดบนหน้านี้" },
    ],
  },
  en: {
    title: "Cookie Notice",
    description: "Cookie policy for the Gumon Technology website.",
    crumb: "Cookie Notice",
    kicker: "Cookie Notice",
    heading: "Cookie Notice",
    updatedAt: "February 13, 2026",
    intro: "This website may use cookies or similar technologies to ensure proper functionality, analyze usage, and improve user experience. Analytics cookies are activated only when consent is provided.",
    sections: [
      { title: "1. What Are Cookies", body: "Cookies are small data files stored on your device when you visit a website, helping the site remember information and operate more efficiently." },
      { title: "2. Types of Cookies We Use", items: ["Strictly Necessary cookies: required for core website functionality and security.", "Analytics cookies: used for aggregate usage analysis such as frequently visited pages (enabled upon consent).", "Preference cookies: may be used to remember certain settings as the website evolves."] },
      { title: "3. Purposes of Cookie Use", items: ["To ensure the website functions correctly and remains stable.", "To improve user experience and content structure.", "To analyze usage trends for future website improvements."] },
      { title: "4. Third-party Cookies", body: "The website may not always enable third-party cookies in every scenario. If analytics or marketing tools such as Google Analytics or Google Tag Manager are enabled, they are used under user consent and governed by the provider's own policies." },
      { title: "5. Cookie Retention", items: ["Session cookies: deleted when the browser is closed.", "Persistent cookies: stored for a defined period or until manually deleted."] },
      { title: "6. Current Website Implementation", items: ["Cookie consent is stored in localStorage using key: gumon_cookie_consent_v2", "If you select \"Essential only\", analytics and marketing tools remain disabled.", "If you select \"Accept all\", analytics tools such as Google Analytics or Google Tag Manager may be enabled based on system settings."] },
      { title: "7. User Cookie Controls", items: ["You can choose from the cookie banner between \"Essential only\" and \"Accept all\".", "You can further reject or remove cookies through browser settings.", "Disabling required cookies may affect some website functionality."] },
      { title: "8. Relation to Privacy Policy", body: "Cookie usage and related data are governed within our privacy framework. Please refer to the Privacy Policy for more details." },
      { title: "9. Contact", items: ["Cookie and consent questions: data@gumon.io", "General website questions: contact@gumon.io"] },
      { title: "10. Policy Updates", body: "We may update this cookie notice periodically and will display the latest update date on this page." },
    ],
  },
};
