import { buildPageMetadata } from "@/lib/seo";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

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
            วิเคราะห์การใช้งาน และปรับปรุงประสบการณ์ผู้ใช้งาน
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
              <li>- คุกกี้เพื่อการวิเคราะห์ (Analytics): ใช้วิเคราะห์พฤติกรรมการใช้งานแบบภาพรวม เช่น หน้าที่เข้าชมบ่อย</li>
              <li>- คุกกี้การตั้งค่า (Preference): ช่วยจดจำตัวเลือกบางอย่างเพื่อให้การใช้งานครั้งต่อไปสะดวกขึ้น</li>
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
              ในบางกรณีอาจมีคุกกี้จากผู้ให้บริการภายนอกที่เกี่ยวข้องกับการวิเคราะห์หรือบริการเสริม
              โดยคุกกี้ดังกล่าวอยู่ภายใต้นโยบายของผู้ให้บริการนั้น ๆ
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
            <h2 className="ui-h3 text-ink">6. การจัดการคุกกี้โดยผู้ใช้งาน</h2>
            <p className="mt-2">
              ผู้ใช้งานสามารถตั้งค่าบราวเซอร์เพื่อปฏิเสธหรือลบคุกกี้ได้
              อย่างไรก็ตาม บางฟังก์ชันของเว็บไซต์อาจทำงานได้ไม่สมบูรณ์หากปิดคุกกี้ที่จำเป็น
            </p>
          </div>

          <div>
            <h2 className="ui-h3 text-ink">7. ความเชื่อมโยงกับนโยบายความเป็นส่วนตัว</h2>
            <p className="mt-2">
              การใช้คุกกี้และข้อมูลที่เกี่ยวข้องอยู่ภายใต้กรอบนโยบายความเป็นส่วนตัวของเรา
              กรุณาอ่านรายละเอียดเพิ่มเติมที่หน้า Privacy Policy
            </p>
          </div>

          <div>
            <h2 className="ui-h3 text-ink">8. การปรับปรุงนโยบายคุกกี้</h2>
            <p className="mt-2">
              เราอาจปรับปรุงนโยบายคุกกี้เป็นระยะ โดยจะแสดงวันที่ปรับปรุงล่าสุดบนหน้านี้
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
