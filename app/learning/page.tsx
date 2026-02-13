import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Page Moved",
  description: "หน้านี้ถูกย้ายแล้ว กรุณาไปยังหน้าใหม่ของเว็บไซต์ Gumon",
  path: "/learning",
});

export default function LegacyLearningPage() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Legacy", path: "/learning" }]} />
      <div className="ui-container max-w-3xl">
        <div className="card p-7 shadow-soft">
          <p className="ui-kicker">Legacy Route</p>
          <h1 className="ui-h2 mt-3">หน้านี้ถูกย้ายในโครงสร้างใหม่</h1>
          <p className="mt-3 ui-p">เนื้อหา learning ถูกย้ายไปรวมในเส้นทาง Developers และ Resources</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/developers" className="btn-primary">ไปหน้า Developers</Link>
            <Link href="/resources" className="btn-secondary">ไปหน้า Resources</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
