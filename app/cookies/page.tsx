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

        <div className="mt-10 card p-7 shadow-soft space-y-6 text-sm md:text-base text-mist leading-relaxed">
          <p>
            เว็บไซต์นี้อาจใช้คุกกี้หรือเทคโนโลยีที่ใกล้เคียงกันเพื่อช่วยให้เว็บไซต์ทำงานได้อย่างเหมาะสม
            วิเคราะห์การใช้งาน และปรับปรุงประสบการณ์ผู้ใช้งาน
          </p>

          <div>
            <h2 className="ui-h3 text-ink">1. คุกกี้ที่จำเป็น</h2>
            <p className="mt-2">
              คุกกี้บางประเภทจำเป็นต่อการทำงานพื้นฐานของเว็บไซต์
              เช่น การคงสถานะการใช้งานและความปลอดภัยของระบบ
            </p>
          </div>

          <div>
            <h2 className="ui-h3 text-ink">2. คุกกี้เพื่อการวิเคราะห์</h2>
            <p className="mt-2">
              เราอาจใช้คุกกี้เพื่อวิเคราะห์การใช้งานแบบภาพรวม เช่น หน้าที่เข้าชมบ่อย
              เพื่อปรับปรุงเนื้อหาและประสบการณ์ใช้งาน
            </p>
          </div>

          <div>
            <h2 className="ui-h3 text-ink">3. การจัดการคุกกี้</h2>
            <p className="mt-2">
              ผู้ใช้งานสามารถตั้งค่าบราวเซอร์เพื่อปฏิเสธหรือลบคุกกี้ได้
              อย่างไรก็ตาม บางฟังก์ชันของเว็บไซต์อาจทำงานได้ไม่สมบูรณ์หากปิดคุกกี้ที่จำเป็น
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
