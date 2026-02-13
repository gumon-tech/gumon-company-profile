import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact",
  description:
    "ช่องทางติดต่อทีม Gumon สำหรับความร่วมมือทางธุรกิจ คำถามเทคนิค และข้อมูลสำหรับนักลงทุน",
  path: "/contact",
});

const routes = [
  {
    title: "Business Partnership",
    body: "หารือแนวทางร่วมงานเชิงพาณิชย์และรูปแบบการส่งมอบ",
    action: "ไปหน้า Partners",
    href: "/partners",
  },
  {
    title: "Technical Discussion",
    body: "สอบถามการเริ่มใช้งาน สถาปัตยกรรม และแนวทางขยายระบบ",
    action: "ไปหน้า Developers",
    href: "/developers",
  },
  {
    title: "Investor Relations",
    body: "ขอข้อมูลเพิ่มเติมเกี่ยวกับกรอบการเติบโตและ Investor Brief",
    action: "ไปหน้า Investors",
    href: "/investors",
  },
];

export default function Page() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Contact", path: "/contact" }]} />
      <div className="ui-container">
        <p className="ui-kicker">Company / Contact</p>
        <h1 className="ui-h1">ติดต่อทีม Gumon ตามหัวข้อที่เกี่ยวข้อง</h1>
        <p className="mt-6 max-w-2xl ui-p">
          เพื่อให้ตอบกลับได้เร็วขึ้น แนะนำให้เลือกเส้นทางตามบทบาทและบริบทงานก่อนส่งคำขอ.
          เป้าหมายการตอบกลับเบื้องต้นคือภายใน 2 วันทำการ.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {routes.map((item) => (
            <div key={item.title} className="route-card h-full">
              <h2 className="ui-h3">{item.title}</h2>
              <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
              <Link href={item.href} className="mt-5 inline-block text-sm text-ink underline underline-offset-4 decoration-accent hover:decoration-ink">
                {item.action}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 card p-7 shadow-soft">
            <p className="ui-kicker">Knowledge Channels</p>
            <h2 className="mt-3 ui-h2">เริ่มจากแหล่งความรู้หลักก่อนคุยเชิงลึก</h2>
            <p className="mt-3 text-sm text-mist leading-relaxed">
              หากเป็นคำถามเชิงเทคนิค แนะนำให้ตรวจเอกสารหลักก่อนเพื่อย่นเวลาการสื่อสารและช่วยให้ทีมตอบได้ตรงประเด็นมากขึ้น.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="https://docs.gumon.io/" target="_blank" rel="noreferrer" className="btn-primary">Developer Documentation</a>
              <a href="https://wiki.gumon.io/" target="_blank" rel="noreferrer" className="btn-secondary">Knowledge Base</a>
            </div>
          </div>

          <div className="lg:col-span-5 card p-7 shadow-soft">
            <p className="ui-kicker">Direct Contact</p>
            <h2 className="mt-3 ui-h3">ช่องทางติดต่อหลัก</h2>
            <div className="mt-4 grid gap-3 text-sm">
              <a href="mailto:contact@gumon.io" className="card p-4 hover:border-ink/30 transition">
                <div className="text-[11px] tracking-[0.16em] uppercase text-mist">Email</div>
                <div className="mt-1 text-ink">contact@gumon.io</div>
              </a>
              <a href="https://lin.ee/BLe8er3" target="_blank" rel="noreferrer" className="card p-4 hover:border-ink/30 transition">
                <div className="text-[11px] tracking-[0.16em] uppercase text-mist">LINE Official</div>
                <div className="mt-1 text-ink">lin.ee/BLe8er3</div>
              </a>
              <a href="https://www.linkedin.com/company/gumon" target="_blank" rel="noreferrer" className="card p-4 hover:border-ink/30 transition">
                <div className="text-[11px] tracking-[0.16em] uppercase text-mist">LinkedIn</div>
                <div className="mt-1 text-ink">linkedin.com/company/gumon</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
