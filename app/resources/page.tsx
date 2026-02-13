import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Resources",
  description:
    "ศูนย์รวมเอกสารและลิงก์สำคัญสำหรับทีมพัฒนา พาร์ตเนอร์ และผู้บริหารที่ต้องการใช้งาน Gumon อย่างเป็นระบบ",
  path: "/resources",
});

const resourceGroups = [
  {
    title: "Developer Resources",
    items: [
      ["Developer Documentation", "คู่มือ setup, API reference และ command usage", "https://docs.gumon.io/", true],
      ["Knowledge Base", "playbooks และแนวทางปฏิบัติการเชิงเทคนิค", "https://wiki.gumon.io/", true],
    ],
  },
  {
    title: "Business Resources",
    items: [
      ["Partner Collaboration", "แนวทางร่วมงานและขอบเขตการส่งมอบ", "/partners", false],
      ["Company Overview", "หลักการองค์กรและ operating model", "/company", false],
    ],
  },
  {
    title: "Action",
    items: [
      ["Platform Overview", "เริ่มเข้าใจสถาปัตยกรรมและองค์ประกอบหลัก", "/platform", false],
      ["Contact Team", "ส่งโจทย์เพื่อเริ่มวางเส้นทางใช้งาน", "/contact", false],
    ],
  },
] as const;

const adoptionPath = [
  {
    step: "01",
    title: "Developer-first Adoption",
    body: "เริ่มจากทีมเทคนิคด้วยเอกสารและมาตรฐานตั้งต้นกลาง เพื่อลดเวลาเตรียมระบบและเริ่มส่งมอบได้เร็ว",
  },
  {
    step: "02",
    title: "Partner-led Delivery",
    body: "ขยายผลผ่านพาร์ตเนอร์ที่ทำงานบนมาตรฐานเดียวกัน เพื่อรักษาคุณภาพงานส่งมอบปลายทาง",
  },
  {
    step: "03",
    title: "Ecosystem Expansion",
    body: "ต่อยอดสู่ระบบนิเวศของส่วนขยาย บริการเสริม และองค์ความรู้ที่เติบโตได้อย่างต่อเนื่อง",
  },
];

const publicRoadmap = [
  {
    phase: "Phase 1",
    title: "Open Foundation",
    body: "เสริมความพร้อมของแกนแพลตฟอร์ม เอกสารหลัก และแนวปฏิบัติที่ใช้งานได้จริง",
  },
  {
    phase: "Phase 2",
    title: "Partner Expansion",
    body: "ขยายการใช้งานผ่านเครือข่ายพาร์ตเนอร์ พร้อมยกระดับมาตรฐานการส่งมอบร่วมกัน",
  },
  {
    phase: "Phase 3",
    title: "Marketplace Readiness",
    body: "พัฒนาไปสู่โครงสร้าง ecosystem ที่รองรับการค้นหาและใช้งานส่วนขยายอย่างเป็นระบบ",
  },
];

export default function ResourcesPage() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Resources", path: "/resources" }]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">Resources / Hub</p>
          <h1 className="ui-h1">ศูนย์รวมทรัพยากรที่ทีมใช้งานจริงบ่อยที่สุด</h1>
          <p className="mt-6 max-w-3xl ui-p">
            หน้านี้จัดกลุ่มข้อมูลตามวัตถุประสงค์การใช้งาน เพื่อลดเวลาค้นหาเอกสารและเส้นทางที่ควรเริ่มก่อน.
          </p>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-3 gap-5">
          {resourceGroups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 80}>
              <div className="card p-6 shadow-soft h-full">
                <p className="ui-kicker">{group.title}</p>
                <div className="mt-4 grid gap-3 auto-rows-fr">
                  {group.items.map(([title, body, href, external]) =>
                    external ? (
                      <a key={title} href={href} target="_blank" rel="noreferrer" className="route-card block h-full">
                        <h2 className="ui-h3">{title}</h2>
                        <p className="mt-2 text-sm text-mist leading-relaxed">{body}</p>
                      </a>
                    ) : (
                      <Link key={title} href={href} className="route-card block h-full">
                        <h2 className="ui-h3">{title}</h2>
                        <p className="mt-2 text-sm text-mist leading-relaxed">{body}</p>
                      </Link>
                    )
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <p className="ui-kicker">Adoption Path</p>
          <h2 className="mt-3 ui-h2">เส้นทางการใช้งานจากทีมเทคนิคสู่การขยายผลระดับ ecosystem</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {adoptionPath.map((item, index) => (
              <Reveal key={item.step} delay={index * 70}>
                <div className="route-card h-full">
                  <div className="text-xs font-semibold tracking-[0.2em] text-accent">{item.step}</div>
                  <h3 className="mt-2 ui-h3">{item.title}</h3>
                  <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">Public Roadmap</p>
          <h2 className="mt-3 ui-h2">ภาพรวมทิศทาง 3 ระยะสำหรับการพัฒนาแพลตฟอร์ม</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {publicRoadmap.map((item, index) => (
              <Reveal key={item.phase} delay={index * 70}>
                <div className="glass rounded-xl border border-line/35 p-5 h-full">
                  <div className="text-xs tracking-[0.16em] uppercase text-mist">{item.phase}</div>
                  <h3 className="mt-2 ui-h3">{item.title}</h3>
                  <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
