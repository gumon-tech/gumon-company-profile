import Link from "next/link";
import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Developers",
  description:
    "เส้นทางเริ่มต้นสำหรับนักพัฒนาบน Gumon ตั้งแต่ setup จนถึง release ที่ทำซ้ำได้",
  path: "/developers",
});

const steps = [
  "ตั้งค่าสภาพแวดล้อมและสิทธิ์การเข้าถึงตาม baseline ของทีม",
  "สร้าง service จาก template มาตรฐานผ่าน Gumon CLI",
  "เชื่อม API และ event contracts ตาม guideline กลาง",
  "ตั้งค่า CI/CD และ observability เพื่อคุมคุณภาพการส่งมอบ",
  "ออก release รอบแรกพร้อม checklist ที่ทีมใช้ร่วมกัน",
];

const supports = [
  {
    title: "Developer Documentation",
    body: "คู่มือเทคนิคสำหรับ quick start, reference APIs และการใช้งานเครื่องมือ",
    href: "https://docs.gumon.io/",
  },
  {
    title: "Knowledge Base",
    body: "แนวทางปฏิบัติการและคู่มือการทำงานร่วมกันใน ecosystem",
    href: "https://wiki.gumon.io/",
  },
  {
    title: "Learning Path",
    body: "เสริมทักษะทีมผ่านหลักสูตรและการรับรองจาก DKS Center",
    href: "/learning",
  },
];

export default function Page() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Developers", path: "/developers" }]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">Audience / Developers</p>
          <h1 className="ui-h1">เริ่มพัฒนาเร็วขึ้น โดยไม่เสียมาตรฐานระยะยาว</h1>
          <p className="mt-6 max-w-3xl ui-p">
            หน้านี้จัดสำหรับทีมพัฒนาที่ต้องการเริ่มระบบใหม่หรือขยายบริการเดิมให้เป็นโครงสร้างที่ดูแลง่ายและปล่อยงานได้ต่อเนื่อง.
          </p>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 card p-7 shadow-soft">
            <p className="ui-kicker">Recommended Workflow</p>
            <h2 className="mt-3 ui-h2">ลำดับเริ่มต้นที่ทีมส่วนใหญ่ใช้ได้ทันที</h2>
            <ul className="mt-5 grid gap-2 feature-list">
              {steps.map((step) => (
                <li key={step}>- {step}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 card p-7 shadow-soft">
            <p className="ui-kicker">What You Get</p>
            <h2 className="mt-3 ui-h3">เมื่อเริ่มจาก baseline เดียวกัน</h2>
            <ul className="mt-4 grid gap-2 feature-list">
              <li>- ลดเวลาการ setup project และลด error จากการตั้งค่าด้วยมือ</li>
              <li>- ทำ code review ง่ายขึ้นเพราะ conventions ชัดเจน</li>
              <li>- onboard นักพัฒนาใหม่ได้เร็วขึ้น</li>
              <li>- วางแผนขยายบริการได้โดยไม่เพิ่ม technical debt เร็วเกินไป</li>
            </ul>
            <div className="mt-6">
              <Link href="/platform" className="text-sm text-ink underline underline-offset-4 decoration-accent hover:decoration-ink">
                ดูภาพรวม Platform Architecture →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {supports.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              {item.href.startsWith("http") ? (
                <a href={item.href} target="_blank" rel="noreferrer" className="route-card block h-full">
                  <h3 className="ui-h3">{item.title}</h3>
                  <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
                </a>
              ) : (
                <Link href={item.href} className="route-card block h-full">
                  <h3 className="ui-h3">{item.title}</h3>
                  <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
                </Link>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
