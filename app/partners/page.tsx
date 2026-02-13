import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Partners",
  description:
    "แนวทางสำหรับพาร์ตเนอร์ที่ต้องการส่งมอบโครงการบนมาตรฐานเดียวกับ Gumon และขยายงานเชิงพาณิชย์ได้ต่อเนื่อง",
  path: "/partners",
});

const modelBlocks = [
  {
    title: "Platform Ownership",
    body: "Gumon ดูแล core platform, standards และ tooling กลาง",
  },
  {
    title: "Commercial Delivery",
    body: "พาร์ตเนอร์รับผิดชอบ solution delivery และผลลัพธ์ปลายทางของลูกค้า",
  },
  {
    title: "Shared Enablement",
    body: "ทั้งสองฝ่ายยึด playbook เดียวกันเพื่อให้คุณภาพการส่งมอบสม่ำเสมอ",
  },
];

const partnerReadiness = [
  "มีทีม delivery ที่ดูแลโครงการได้ต่อเนื่อง",
  "มีความสามารถด้าน solution architecture และ implementation",
  "พร้อมทำงานบน shared standards และ quality gates",
  "ต้องการขยายหลายโครงการโดยคุมคุณภาพได้",
];

export default function PartnersPage() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Partners", path: "/partners" }]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">Partners / Delivery Path</p>
          <h1 className="ui-h1">โมเดลความร่วมมือสำหรับพาร์ตเนอร์ที่ต้องการส่งมอบได้เร็วและรักษามาตรฐานได้จริง</h1>
          <p className="mt-6 max-w-3xl ui-p">
            เราวางขอบเขตให้ชัดเจนตั้งแต่ต้น: Gumon สร้าง platform และมาตรฐาน
            พาร์ตเนอร์นำไปส่งมอบเชิงพาณิชย์ในตลาดปลายทาง.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {modelBlocks.map((block, index) => (
            <Reveal key={block.title} delay={index * 70}>
              <div className="route-card h-full">
                <p className="ui-kicker">Model</p>
                <h2 className="mt-3 ui-h3">{block.title}</h2>
                <p className="mt-2 text-sm text-mist leading-relaxed">{block.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">Readiness Checklist</p>
          <h2 className="mt-3 ui-h2">ความพร้อมเบื้องต้นก่อนเริ่ม collaboration</h2>
          <ul className="mt-5 grid gap-2 feature-list">
            {partnerReadiness.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 card p-7 shadow-soft">
            <p className="ui-kicker">Partner Resources</p>
            <h2 className="mt-3 ui-h2">ช่องทาง enablement สำหรับทีมส่งมอบ</h2>
            <div className="mt-5 grid md:grid-cols-2 gap-4">
              <TrackedLink
                href="https://wiki.gumon.io/"
                eventName="partners_knowledge_base_click"
                category="docs"
                label="partners-wiki"
                location="partners.resources"
                target="_blank"
                rel="noreferrer"
                className="route-card block"
              >
                <h3 className="ui-h3">Knowledge Base</h3>
                <p className="mt-2 text-sm text-mist leading-relaxed">แนวทางส่งมอบและ operational playbooks</p>
              </TrackedLink>
              <TrackedLink
                href="https://docs.gumon.io/"
                eventName="partners_docs_click"
                category="docs"
                label="partners-docs"
                location="partners.resources"
                target="_blank"
                rel="noreferrer"
                className="route-card block"
              >
                <h3 className="ui-h3">Technical Docs</h3>
                <p className="mt-2 text-sm text-mist leading-relaxed">reference สำหรับทีมเทคนิคที่ทำงานร่วมกับแพลตฟอร์ม</p>
              </TrackedLink>
            </div>
          </div>

          <div className="lg:col-span-5 card p-7 shadow-soft">
            <p className="ui-kicker">Next Step</p>
            <h2 className="mt-3 ui-h3">เริ่มประเมินโอกาสร่วมงานกับทีมพาร์ตเนอร์</h2>
            <p className="mt-3 text-sm text-mist leading-relaxed">
              ส่งบริบทอุตสาหกรรม, โครงสร้างทีม และเป้าหมายเชิงธุรกิจของคุณมาได้
              เพื่อเริ่มวาง collaboration path ที่เหมาะสม.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <TrackedLink href="/contact" eventName="partners_contact_click" category="contact" label="partners-contact" location="partners.next-step" className="btn-primary">
                ติดต่อทีมพาร์ตเนอร์
              </TrackedLink>
              <TrackedLink href="/resources" eventName="partners_resources_click" category="navigation" label="partners-resources" location="partners.next-step" className="btn-secondary">
                เปิด Resource Hub
              </TrackedLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
