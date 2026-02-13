import Link from "next/link";
import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Investors",
  description:
    "ข้อมูลสำหรับนักลงทุนเกี่ยวกับกรอบการเติบโต หลักการกำกับ และการขอ Investor Brief ของ Gumon",
  path: "/investors",
});

const focusAreas = [
  {
    title: "Platform Maturity",
    body: "ยกระดับความพร้อมของแกนแพลตฟอร์มและมาตรฐานการใช้งานก่อนการขยายเชิงปริมาณ",
  },
  {
    title: "Partner Expansion",
    body: "ขยายผลผ่านเครือข่ายพาร์ตเนอร์ที่ส่งมอบในตลาดจริงอย่างมีวินัย",
  },
  {
    title: "Capability System",
    body: "สร้างระบบเรียนรู้และรับรองทักษะเพื่อรองรับการขยายที่ยั่งยืน",
  },
  {
    title: "Governance Readiness",
    body: "วางกรอบกำกับความเสี่ยงและการใช้เงินทุนให้สอดคล้องกับความพร้อมจริง",
  },
];

const roadmap = [
  "Phase 1: Platform Baseline - พัฒนาแกนเทคโนโลยี เอกสาร และ onboarding ที่พร้อมใช้",
  "Phase 2: Partner Delivery Scale - ขยายการใช้งานผ่านพาร์ตเนอร์และเสริมศักยภาพทีมส่งมอบ",
  "Phase 3: Ecosystem Marketplace Readiness - เตรียม governance สำหรับการเติบโตระดับ ecosystem",
];

export default function Page() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Investors", path: "/investors" }]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">Audience / Investors</p>
          <h1 className="ui-h1">กรอบการเติบโตที่เน้น readiness มากกว่าการเร่งขยายระยะสั้น</h1>
          <p className="mt-6 max-w-3xl ui-p">
            หน้านี้เป็น Public Summary สำหรับผู้สนใจลงทุน โดยเน้นหลักการเชิงโครงสร้างในการเติบโตของ Gumon.
            ข้อมูลเชิงลึกเชิงตัวเลขและแผนทุนจะเปิดผ่าน Investor Brief ตามกระบวนการ.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {focusAreas.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <div className="route-card h-full">
                <p className="ui-kicker">Strategic Focus</p>
                <h2 className="mt-3 ui-h3">{item.title}</h2>
                <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">3-Phase Growth Roadmap</p>
          <h2 className="mt-3 ui-h2">ลำดับการเติบโตจากฐานแพลตฟอร์มสู่ ecosystem scale</h2>
          <ul className="mt-5 grid gap-2 feature-list">
            {roadmap.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn-primary">Request Investor Brief</Link>
            <Link href="/company" className="btn-secondary">ดูหลักการองค์กร</Link>
          </div>
          <p className="mt-4 text-xs text-mist">Last updated: February 13, 2026</p>
        </div>
      </div>
    </section>
  );
}
