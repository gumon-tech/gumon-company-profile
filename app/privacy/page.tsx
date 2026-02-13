import { buildPageMetadata } from "@/lib/seo";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "นโยบายความเป็นส่วนตัวของเว็บไซต์ Gumon Technology สำหรับผู้ใช้งานสาธารณะ",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Privacy Policy", path: "/privacy" }]} />
      <div className="ui-container max-w-4xl">
        <p className="ui-kicker">Privacy Policy</p>
        <h1 className="ui-h1">นโยบายความเป็นส่วนตัว</h1>
        <p className="mt-4 ui-small">Last updated: February 13, 2026</p>

        <div className="mt-10 card p-7 shadow-soft space-y-6 text-sm md:text-base text-mist leading-relaxed">
          <p>
            เว็บไซต์ Gumon Technology ให้ความสำคัญกับความเป็นส่วนตัวของผู้ใช้งาน
            นโยบายนี้อธิบายว่าข้อมูลใดที่อาจถูกเก็บ วิธีการใช้งานข้อมูล และสิทธิของผู้ใช้งาน
            เมื่อเข้าใช้งานเว็บไซต์สาธารณะของเรา
          </p>

          <div>
            <h2 className="ui-h3 text-ink">1. ข้อมูลที่อาจเก็บ</h2>
            <p className="mt-2">
              เราอาจเก็บข้อมูลพื้นฐานที่จำเป็นต่อการให้บริการเว็บไซต์ เช่น ข้อมูลการใช้งานหน้าเว็บ
              ประเภทอุปกรณ์ และข้อมูลที่ผู้ใช้งานส่งให้โดยสมัครใจผ่านช่องทางติดต่อ
            </p>
          </div>

          <div>
            <h2 className="ui-h3 text-ink">2. วัตถุประสงค์การใช้ข้อมูล</h2>
            <p className="mt-2">
              ข้อมูลจะถูกใช้เพื่อปรับปรุงประสบการณ์ใช้งานเว็บไซต์ ตอบคำถามที่ส่งเข้ามา
              วิเคราะห์ความเสถียรของระบบ และรักษาความปลอดภัยของบริการ
            </p>
          </div>

          <div>
            <h2 className="ui-h3 text-ink">3. การเปิดเผยข้อมูล</h2>
            <p className="mt-2">
              เราไม่ขายข้อมูลส่วนบุคคลของผู้ใช้งานให้บุคคลภายนอก
              และจะเปิดเผยข้อมูลเฉพาะกรณีที่จำเป็นตามกฎหมาย หรือเพื่อการป้องกันความปลอดภัยของระบบ
            </p>
          </div>

          <div>
            <h2 className="ui-h3 text-ink">4. การเก็บรักษาและความปลอดภัย</h2>
            <p className="mt-2">
              เราใช้มาตรการที่เหมาะสมเพื่อปกป้องข้อมูลจากการเข้าถึงโดยไม่ได้รับอนุญาต
              และเก็บข้อมูลเท่าที่จำเป็นตามวัตถุประสงค์การใช้งาน
            </p>
          </div>

          <div>
            <h2 className="ui-h3 text-ink">5. สิทธิของผู้ใช้งาน</h2>
            <p className="mt-2">
              ผู้ใช้งานสามารถร้องขอสอบถาม แก้ไข หรือลบข้อมูลที่เกี่ยวข้องกับตนเองได้ตามสิทธิที่กฎหมายกำหนด
              โดยติดต่อผ่านหน้า Contact ของเว็บไซต์
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
