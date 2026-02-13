import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Page Moved",
  description: "หน้านี้ถูกย้ายแล้ว กรุณาไปยังหน้าใหม่ของเว็บไซต์ Gumon",
  path: "/team",
});

export default function LegacyTeamPage() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Legacy", path: "/team" }]} />
      <div className="ui-container max-w-3xl">
        <div className="card p-7 shadow-soft">
          <p className="ui-kicker">Legacy Route</p>
          <h1 className="ui-h2 mt-3">หน้า Team ถูกย้ายในโครงสร้างใหม่</h1>
          <p className="mt-3 ui-p">ข้อมูลทีมถูกรวมในหน้า Company และช่องทางติดต่อหลักอยู่ที่ Contact</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/company" className="btn-primary">ไปหน้า Company</Link>
            <Link href="/contact" className="btn-secondary">ไปหน้า Contact</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
