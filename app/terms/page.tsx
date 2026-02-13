import { buildPageMetadata } from "@/lib/seo";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata = buildPageMetadata({
  title: "Terms of Use",
  description:
    "ข้อกำหนดและเงื่อนไขการใช้งานเว็บไซต์ Gumon Technology",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Terms of Use", path: "/terms" }]} />
      <div className="ui-container max-w-4xl">
        <p className="ui-kicker">Terms of Use</p>
        <h1 className="ui-h1">ข้อกำหนดการใช้งาน</h1>
        <p className="mt-4 ui-small">Last updated: February 13, 2026</p>

        <div className="mt-10 card p-7 shadow-soft space-y-6 text-sm md:text-base text-mist leading-relaxed">
          <p>
            การเข้าใช้งานเว็บไซต์นี้ถือว่าผู้ใช้งานยอมรับข้อกำหนดการใช้งานฉบับนี้
            กรุณาอ่านรายละเอียดอย่างรอบคอบก่อนใช้งาน
          </p>

          <div>
            <h2 className="ui-h3 text-ink">1. ขอบเขตการใช้งาน</h2>
            <p className="mt-2">
              เนื้อหาบนเว็บไซต์จัดทำเพื่อการให้ข้อมูลสาธารณะเกี่ยวกับ Gumon Technology
              และอาจมีการปรับปรุงโดยไม่ต้องแจ้งล่วงหน้า
            </p>
          </div>

          <div>
            <h2 className="ui-h3 text-ink">2. ทรัพย์สินทางปัญญา</h2>
            <p className="mt-2">
              เนื้อหา โลโก้ ภาพ และองค์ประกอบอื่น ๆ บนเว็บไซต์อยู่ภายใต้สิทธิของ Gumon Technology
              หรือเจ้าของสิทธิที่เกี่ยวข้อง ห้ามนำไปใช้โดยไม่ได้รับอนุญาต
            </p>
          </div>

          <div>
            <h2 className="ui-h3 text-ink">3. การใช้งานที่ไม่เหมาะสม</h2>
            <p className="mt-2">
              ผู้ใช้งานต้องไม่กระทำการที่ส่งผลกระทบต่อความปลอดภัย ความพร้อมใช้งาน
              หรือความน่าเชื่อถือของเว็บไซต์และระบบที่เกี่ยวข้อง
            </p>
          </div>

          <div>
            <h2 className="ui-h3 text-ink">4. ลิงก์ไปยังเว็บไซต์ภายนอก</h2>
            <p className="mt-2">
              เว็บไซต์อาจมีลิงก์ไปยังบริการภายนอก เช่น Developer Documentation หรือ Knowledge Base
              ซึ่งมีข้อกำหนดและนโยบายของผู้ให้บริการนั้น ๆ แยกต่างหาก
            </p>
          </div>

          <div>
            <h2 className="ui-h3 text-ink">5. การจำกัดความรับผิด</h2>
            <p className="mt-2">
              Gumon Technology ไม่รับประกันว่าข้อมูลทั้งหมดจะปราศจากข้อผิดพลาดทุกกรณี
              และไม่รับผิดชอบความเสียหายที่เกิดจากการใช้ข้อมูลโดยตรงหรือโดยอ้อม
              นอกเหนือจากที่กฎหมายกำหนด
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
