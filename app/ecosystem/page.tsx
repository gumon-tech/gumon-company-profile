import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Page Moved",
  description: "หน้านี้ถูกย้ายแล้ว กรุณาไปยังหน้าใหม่ของเว็บไซต์ Gumon",
  path: "/ecosystem",
});

export default function LegacyEcosystemPage() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Legacy", path: "/ecosystem" }]} />
      <div className="ui-container max-w-3xl">
        <div className="card p-7 shadow-soft">
          <p className="ui-kicker">Legacy Route</p>
          <h1 className="ui-h2 mt-3">หน้านี้ถูกย้ายในโครงสร้างใหม่</h1>
          <p className="mt-3 ui-p">เนื้อหา ecosystem ถูกย้ายไปรวมในหน้า Company และ Partners ตามโครงสร้างใหม่</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/company" className="btn-primary">ไปหน้า Company</Link>
            <Link href="/partners" className="btn-secondary">ไปหน้า Partners</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
