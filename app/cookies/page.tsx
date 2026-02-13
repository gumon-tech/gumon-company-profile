import { buildPageMetadata } from "@/lib/seo";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import CookiePreferenceReset from "@/components/CookiePreferenceReset";

export const metadata = buildPageMetadata({
  title: "Cookie Notice",
  description:
    "นโยบายคุกกี้สำหรับเว็บไซต์ Gumon Technology",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Cookie Notice", path: "/cookies" }]} />
      <div className="ui-container max-w-4xl">
        <p className="ui-kicker">Cookie Notice</p>
        <h1 className="ui-h1">นโยบายคุกกี้</h1>
        <p className="mt-4 ui-small">Last updated: February 13, 2026</p>

        <div className="mt-10 card p-7 shadow-soft space-y-8 text-sm md:text-base text-mist leading-relaxed">
          <p>
            เว็บไซต์นี้อาจใช้คุกกี้หรือเทคโนโลยีที่ใกล้เคียงกันเพื่อช่วยให้เว็บไซต์ทำงานได้อย่างเหมาะสม
            วิเคราะห์การใช้งาน และปรับปรุงประสบการณ์ผู้ใช้งาน โดยคุกกี้วิเคราะห์จะทำงานเมื่อผู้ใช้ให้ความยินยอม
          </p>

          <div>
            <h2 className="ui-h3 text-ink">1. คุกกี้คืออะไร</h2>
            <p className="mt-2">
              คุกกี้คือไฟล์ข้อมูลขนาดเล็กที่จัดเก็บบนอุปกรณ์ของคุณเมื่อเข้าเว็บไซต์
              เพื่อช่วยให้เว็บไซต์จดจำข้อมูลและให้บริการได้มีประสิทธิภาพมากขึ้น
            </p>
          </div>

          <div>
            <h2 className="ui-h3 text-ink">2. ประเภทคุกกี้ที่เราใช้งาน</h2>
            <ul className="mt-3 grid gap-2">
              <li>- คุกกี้ที่จำเป็น (Strictly Necessary): จำเป็นต่อการทำงานพื้นฐานและความปลอดภัยของเว็บไซต์</li>
              <li>- คุกกี้เพื่อการวิเคราะห์ (Analytics): ใช้วิเคราะห์พฤติกรรมการใช้งานแบบภาพรวม เช่น หน้าที่เข้าชมบ่อย (จะทำงานเมื่อผู้ใช้ยินยอม)</li>
              <li>- คุกกี้การตั้งค่า (Preference): อาจถูกใช้งานเพื่อจดจำตัวเลือกบางอย่างตามการพัฒนาของเว็บไซต์ในอนาคต</li>
            </ul>
          </div>

          <div>
            <h2 className="ui-h3 text-ink">3. วัตถุประสงค์การใช้คุกกี้</h2>
            <ul className="mt-3 grid gap-2">
              <li>- ทำให้เว็บไซต์ทำงานได้อย่างถูกต้องและมีความเสถียร</li>
              <li>- ปรับปรุงประสบการณ์ใช้งานและโครงสร้างเนื้อหาในหน้าเว็บ</li>
              <li>- วิเคราะห์แนวโน้มการใช้งานเพื่อการพัฒนาเว็บไซต์ในระยะถัดไป</li>
            </ul>
          </div>

          <div>
            <h2 className="ui-h3 text-ink">4. คุกกี้ของบุคคลภายนอก</h2>
            <p className="mt-2">
              ปัจจุบันเว็บไซต์อาจยังไม่มีการเปิดใช้งานคุกกี้จากผู้ให้บริการภายนอกในทุกกรณี
              หากมีการเปิดใช้งานเครื่องมือวิเคราะห์หรือการตลาด เช่น Google Analytics หรือ Google Tag Manager
              เราจะใช้งานภายใต้ความยินยอมของผู้ใช้ และคุกกี้ดังกล่าวจะอยู่ภายใต้นโยบายของผู้ให้บริการนั้น ๆ
            </p>
          </div>

          <div>
            <h2 className="ui-h3 text-ink">5. ระยะเวลาการจัดเก็บคุกกี้</h2>
            <ul className="mt-3 grid gap-2">
              <li>- Session Cookies: ถูกลบเมื่อปิดเบราว์เซอร์</li>
              <li>- Persistent Cookies: ถูกเก็บไว้ตามระยะเวลาที่กำหนดหรือจนกว่าผู้ใช้งานจะลบออก</li>
            </ul>
          </div>

          <div>
            <h2 className="ui-h3 text-ink">6. สถานะการใช้งานปัจจุบันของเว็บไซต์</h2>
            <ul className="mt-3 grid gap-2">
              <li>- เว็บไซต์ใช้ตัวบันทึกการยินยอมคุกกี้ผ่าน localStorage key: <span className="text-ink">gumon_cookie_consent_v2</span></li>
              <li>- หากคุณเลือก “จำเป็นเท่านั้น” ระบบจะไม่เปิดใช้งานเครื่องมือวิเคราะห์หรือการตลาด</li>
              <li>- หากคุณเลือก “ยอมรับทั้งหมด” ระบบสามารถเปิดใช้งานเครื่องมือวิเคราะห์ เช่น Google Analytics หรือ Google Tag Manager ตามการตั้งค่าของระบบ</li>
            </ul>
          </div>

          <div>
            <h2 className="ui-h3 text-ink">7. การจัดการคุกกี้โดยผู้ใช้งาน</h2>
            <ul className="mt-3 grid gap-2">
              <li>- ผู้ใช้งานสามารถเลือกได้จากแบนเนอร์คุกกี้ระหว่าง “จำเป็นเท่านั้น” หรือ “ยอมรับทั้งหมด”</li>
              <li>- ผู้ใช้งานสามารถตั้งค่าเบราว์เซอร์เพื่อปฏิเสธหรือลบคุกกี้ได้เพิ่มเติม</li>
              <li>- หากปิดคุกกี้ที่จำเป็น บางฟังก์ชันของเว็บไซต์อาจทำงานได้ไม่สมบูรณ์</li>
            </ul>
            <div className="mt-4">
              <CookiePreferenceReset />
            </div>
          </div>

          <div>
            <h2 className="ui-h3 text-ink">8. ความเชื่อมโยงกับนโยบายความเป็นส่วนตัว</h2>
            <p className="mt-2">
              การใช้คุกกี้และข้อมูลที่เกี่ยวข้องอยู่ภายใต้กรอบนโยบายความเป็นส่วนตัวของเรา
              กรุณาอ่านรายละเอียดเพิ่มเติมที่หน้า Privacy Policy
            </p>
          </div>

          <div>
            <h2 className="ui-h3 text-ink">9. ช่องทางติดต่อ</h2>
            <ul className="mt-3 grid gap-2">
              <li>- คำถามเกี่ยวกับคุกกี้และการตั้งค่าความยินยอม: data@gumon.io</li>
              <li>- คำถามทั่วไปเกี่ยวกับเว็บไซต์: contact@gumon.io</li>
            </ul>
          </div>

          <div>
            <h2 className="ui-h3 text-ink">10. การปรับปรุงนโยบายคุกกี้</h2>
            <p className="mt-2">
              เราอาจปรับปรุงนโยบายคุกกี้เป็นระยะ โดยจะแสดงวันที่ปรับปรุงล่าสุดบนหน้านี้
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
