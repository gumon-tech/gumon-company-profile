import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Developers",
  description:
    "เส้นทางสำหรับทีมพัฒนาที่ต้องการเริ่ม project บนมาตรฐานเดียวกันและปล่อยระบบได้เร็วขึ้น",
  path: "/developers",
});

const phases = [
  {
    title: "Bootstrap",
    body: "เริ่มระบบจาก template มาตรฐาน, กำหนด config กลาง และ set baseline ของทีม",
  },
  {
    title: "Integrate",
    body: "เชื่อม service ผ่าน contracts ที่ชัดเจน พร้อมตรวจคุณภาพก่อนรวมงาน",
  },
  {
    title: "Operate",
    body: "ปล่อย release อย่างสม่ำเสมอ พร้อม monitoring และ feedback loop สำหรับรอบถัดไป",
  },
];

const technicalFocus = [
  "ลดเวลา setup โครงการใหม่ด้วยมาตรฐานเดียวกันทั้งทีม",
  "ลดความเสี่ยงจากการเชื่อมต่อบริการที่ไม่สอดคล้องกัน",
  "ทำ onboarding ทีมใหม่ได้เร็วขึ้นโดยไม่ต้องพึ่งความรู้เฉพาะบุคคล",
  "ทำ release cadence ที่คาดการณ์ได้ในสภาพแวดล้อมจริง",
];

export default function DevelopersPage() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Developers", path: "/developers" }]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">Developers / Build Path</p>
          <h1 className="ui-h1">เส้นทางสำหรับทีมพัฒนาที่ต้องการสร้างระบบให้เร็วและคุมมาตรฐานได้ตั้งแต่ต้น</h1>
          <p className="mt-6 max-w-3xl ui-p">
            หน้านี้รวมเส้นทางทำงานสำหรับทีม dev ที่ต้องการย้ายจากการเริ่มใหม่ทุกครั้ง
            ไปสู่การพัฒนาบน baseline เดียวกันเพื่อให้ส่งมอบซ้ำได้จริง.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {phases.map((phase, index) => (
            <Reveal key={phase.title} delay={index * 70}>
              <div className="route-card h-full">
                <p className="ui-kicker">Phase</p>
                <h2 className="mt-3 ui-h3">{phase.title}</h2>
                <p className="mt-2 text-sm text-mist leading-relaxed">{phase.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">Engineering Focus</p>
          <h2 className="mt-3 ui-h2">สิ่งที่ทีม dev ควรได้จากแพลตฟอร์ม</h2>
          <ul className="mt-5 grid gap-2 feature-list">
            {technicalFocus.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 card p-7 shadow-soft">
            <p className="ui-kicker">Core Resources</p>
            <h2 className="mt-3 ui-h2">เริ่มจากเครื่องมือที่ทีมใช้จริง</h2>
            <div className="mt-5 grid md:grid-cols-2 gap-4">
              <TrackedLink
                href="https://docs.gumon.io/"
                eventName="developers_resource_click"
                category="docs"
                label="developers-docs"
                location="developers.resources"
                target="_blank"
                rel="noreferrer"
                className="route-card block"
              >
                <h3 className="ui-h3">Developer Docs</h3>
                <p className="mt-2 text-sm text-mist leading-relaxed">คู่มือ setup, commands และ technical reference</p>
              </TrackedLink>
              <TrackedLink
                href="https://wiki.gumon.io/"
                eventName="developers_resource_click"
                category="docs"
                label="developers-wiki"
                location="developers.resources"
                target="_blank"
                rel="noreferrer"
                className="route-card block"
              >
                <h3 className="ui-h3">Knowledge Base</h3>
                <p className="mt-2 text-sm text-mist leading-relaxed">playbooks และแนวทางการแก้ปัญหาเชิงปฏิบัติการ</p>
              </TrackedLink>
            </div>
          </div>

          <div className="lg:col-span-5 card p-7 shadow-soft">
            <p className="ui-kicker">Next Step</p>
            <h2 className="mt-3 ui-h3">ต้องการประเมินระบบเดิมก่อนเริ่มย้ายโครงสร้าง</h2>
            <p className="mt-3 text-sm text-mist leading-relaxed">
              หากทีมมีระบบเดิมอยู่แล้วและต้องการวาง migration path แบบค่อยเป็นค่อยไป
              สามารถส่งบริบทมาเพื่อประเมิน baseline ที่เหมาะสม.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <TrackedLink href="/platform" eventName="developers_platform_reference_click" category="navigation" label="developers-platform" location="developers.next-step" className="btn-secondary">
                ดู Platform Overview
              </TrackedLink>
              <TrackedLink href="/contact" eventName="developers_contact_click" category="contact" label="developers-contact" location="developers.next-step" className="btn-primary">
                คุยกับทีมเทคนิค
              </TrackedLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
