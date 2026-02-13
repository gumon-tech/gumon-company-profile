import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Page Moved",
  description: "หน้านี้ถูกย้ายแล้ว กรุณาไปยังหน้าใหม่ของเว็บไซต์ Gumon",
  path: "/solutions",
});

export default function LegacySolutionsPage() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Legacy", path: "/solutions" }]} />
      <div className="ui-container max-w-3xl">
        <div className="card p-7 shadow-soft">
          <p className="ui-kicker">Legacy Route</p>
          <h1 className="ui-h2 mt-3">หน้า Solutions ถูกย้ายในโครงสร้างใหม่</h1>
          <p className="mt-3 ui-p">เนื้อหาถูกแยกตามเป้าหมายการใช้งานจริงในหน้า Platform, Developers และ Partners</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/platform" className="btn-primary">ไปหน้า Platform</Link>
            <Link href="/partners" className="btn-secondary">ไปหน้า Partners</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
