import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Page Moved",
  description: "หน้านี้ถูกย้ายแล้ว กรุณาไปยังหน้าใหม่ของเว็บไซต์ Gumon",
  path: "/solutions",
});

export default function LegacySolutionDetailPage() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Legacy", path: "/solutions" }]} />
      <div className="ui-container max-w-3xl">
        <div className="card p-7 shadow-soft">
          <p className="ui-kicker">Legacy Route</p>
          <h1 className="ui-h2 mt-3">หน้ารายละเอียด solution ถูกย้ายแล้ว</h1>
          <p className="mt-3 ui-p">โปรดเริ่มจากหน้า Platform หรือเลือกเส้นทางตามบทบาทจากหน้า Home</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/platform" className="btn-primary">ไปหน้า Platform</Link>
            <Link href="/" className="btn-secondary">กลับหน้า Home</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
