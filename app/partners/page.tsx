import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Partners",
  description:
    "แนวทางสำหรับพาร์ตเนอร์ที่ต้องการส่งมอบโครงการบนมาตรฐานเดียวกับ Gumon และขยายงานเชิงพาณิชย์ได้อย่างต่อเนื่อง",
  path: "/partners",
});

const modelBlocks = [
  {
    title: "Platform Ownership",
    body: "Gumon ดูแลแกนแพลตฟอร์ม มาตรฐานกลาง และเครื่องมือหลัก",
  },
  {
    title: "Commercial Delivery",
    body: "พาร์ตเนอร์รับผิดชอบการส่งมอบงานเชิงธุรกิจและผลลัพธ์ปลายทางของลูกค้า",
  },
  {
    title: "Shared Enablement",
    body: "ทั้งสองฝ่ายใช้แนวทางทำงานชุดเดียวกัน เพื่อให้คุณภาพการส่งมอบสม่ำเสมอ",
  },
];

const partnerReadiness = [
  "มีทีม delivery ที่ดูแลโครงการได้ต่อเนื่อง",
  "มีความสามารถด้าน solution architecture และ implementation",
  "พร้อมทำงานบน shared standards และ quality gates",
  "ต้องการขยายหลายโครงการโดยคุมคุณภาพได้",
];

const fairPlayPrinciples = [
  {
    title: "Open Source Integrity",
    body: "รักษาแกนแพลตฟอร์มแบบเปิดให้ตรวจสอบได้ และไม่เปลี่ยนขอบเขตแกนหลักโดยเอื้อรายใดรายหนึ่ง",
  },
  {
    title: "Non-Intrusion Boundary",
    body: "Gumon ไม่แข่งขันกับพาร์ตเนอร์ในงานส่งมอบปลายทาง และยึดบทบาทแพลตฟอร์มอย่างชัดเจน",
  },
  {
    title: "Compatibility Standards",
    body: "ส่วนขยายและบริการที่เชื่อมบนแพลตฟอร์มต้องยึดมาตรฐานกลางเพื่อรักษาคุณภาพร่วม",
  },
];

const partnerNetwork = [
  { name: "Asia Connect Corporation", country: "Thailand", website: "https://www.asiaconnectth.com", logo: "/assets/partners/asia-connect.png" },
  { name: "AC Academys", country: "Thailand", website: "https://acacademys.com", logo: "/assets/partners/ac-academys.png" },
  { name: "Olufy-X", country: "Thailand", website: "https://olufy.com", logo: "/assets/partners/olufy-x.png" },
  { name: "Taitam-D", country: "United Kingdom", website: "https://taitam-d.com", logo: "/assets/partners/taitam-d.png" },
];

const trustSignals = [
  { label: "Partner Organizations", value: `${partnerNetwork.length}+` },
  { label: "Operating Countries", value: `${new Set(partnerNetwork.map((item) => item.country)).size}` },
  { label: "Enablement Channels", value: "Docs + Wiki" },
];

const collaborationOutcomes = [
  {
    title: "Public Sector Delivery",
    problem: "ทีมส่งมอบหลายชุดใช้มาตรฐานต่างกัน ทำให้คุณภาพงานไม่คงที่",
    approach: "จัด shared standards และรีวิวคุณภาพร่วมกับทีมแพลตฟอร์มก่อนปล่อยงาน",
    outcome: "ยกระดับความสม่ำเสมอของงานส่งมอบระหว่างทีมพาร์ตเนอร์",
  },
  {
    title: "Cross-Border Collaboration",
    problem: "การทำงานข้ามประเทศทำให้การส่งต่อความรู้และเอกสารไม่ต่อเนื่อง",
    approach: "ใช้ docs + knowledge base ชุดเดียวกันและตั้งรอบ sync กลาง",
    outcome: "ลดงานซ้ำจากความเข้าใจไม่ตรงกันและเร่งการเริ่มงานรอบใหม่",
  },
];

export default function PartnersPage() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Partners", path: "/partners" }]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">Partners / แนวทางการทำงานร่วมกัน</p>
          <h1 className="ui-h1">โมเดลความร่วมมือที่ช่วยให้พาร์ตเนอร์ส่งมอบได้เร็วและรักษามาตรฐานได้จริง</h1>
          <p className="mt-6 max-w-3xl ui-p">
            เราแบ่งบทบาทให้ชัดตั้งแต่ต้น: Gumon พัฒนาแพลตฟอร์มและมาตรฐานกลาง
            ส่วนพาร์ตเนอร์นำไปส่งมอบงานในตลาดจริงได้อย่างมั่นใจ.
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

        <div className="mt-12">
          <p className="ui-kicker">Governance & Fair-Play</p>
          <h2 className="mt-3 ui-h2">หลักการทำงานร่วมกันเพื่อรักษาความไว้วางใจใน ecosystem</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {fairPlayPrinciples.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="route-card h-full">
                  <h3 className="ui-h3">{item.title}</h3>
                  <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="ui-kicker">Trust Proof</p>
              <h2 className="mt-2 ui-h2">หลักฐานการทำงานร่วมกันในโครงการส่งมอบจริง</h2>
            </div>
            <TrackedLink href="/company" className="btn-secondary w-fit">
              ดูภาพรวมองค์กร
            </TrackedLink>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-3">
            {trustSignals.map((item) => (
              <div key={item.label} className="glass rounded-xl border border-line/35 px-4 py-4">
                <div className="text-[10px] tracking-[0.18em] uppercase text-mist">{item.label}</div>
                <div className="mt-2 text-xl font-semibold text-ink">{item.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {partnerNetwork.map((partner) => (
              <div key={partner.name} className="partner-item">
                <div className="partner-logo-wrap">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={112}
                    height={40}
                    className="partner-logo"
                  />
                </div>
                <div>
                  <TrackedLink
                    href={partner.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium leading-snug underline underline-offset-4 decoration-accent hover:decoration-ink transition"
                  >
                    {partner.name}
                  </TrackedLink>
                  <div className="text-xs text-mist mt-0.5">{partner.country}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">Mini Cases</p>
          <h2 className="mt-3 ui-h2">ตัวอย่างผลลัพธ์จากการทำงานร่วมกันแบบ shared model</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {collaborationOutcomes.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="route-card h-full">
                  <div className="text-xs tracking-[0.16em] uppercase text-mist">{item.title}</div>
                  <p className="mt-3 text-sm text-mist leading-relaxed"><span className="text-ink">Problem:</span> {item.problem}</p>
                  <p className="mt-2 text-sm text-mist leading-relaxed"><span className="text-ink">Approach:</span> {item.approach}</p>
                  <p className="mt-2 text-sm text-mist leading-relaxed"><span className="text-ink">Outcome:</span> {item.outcome}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 card p-7 shadow-soft">
            <p className="ui-kicker">Partner Resources</p>
            <h2 className="mt-3 ui-h2">ชุดความรู้และเอกสารสำหรับทีมส่งมอบ</h2>
            <div className="mt-5 grid md:grid-cols-2 gap-4">
              <TrackedLink
                href="https://wiki.gumon.io/"
                target="_blank"
                rel="noreferrer"
                className="route-card block"
              >
                <h3 className="ui-h3">Knowledge Base</h3>
                <p className="mt-2 text-sm text-mist leading-relaxed">แนวทางการส่งมอบและคู่มือปฏิบัติงาน</p>
              </TrackedLink>
              <TrackedLink
                href="https://docs.gumon.io/"
                target="_blank"
                rel="noreferrer"
                className="route-card block"
              >
                <h3 className="ui-h3">Technical Docs</h3>
                <p className="mt-2 text-sm text-mist leading-relaxed">เอกสารอ้างอิงสำหรับทีมเทคนิคที่พัฒนาร่วมกับแพลตฟอร์ม</p>
              </TrackedLink>
            </div>
          </div>

          <div className="lg:col-span-5 card p-7 shadow-soft">
            <p className="ui-kicker">Next Step</p>
            <h2 className="mt-3 ui-h3">พร้อมเริ่มประเมินโอกาสร่วมงานแล้วหรือยัง</h2>
            <p className="mt-3 text-sm text-mist leading-relaxed">
              ส่งข้อมูลอุตสาหกรรม, โครงสร้างทีม และเป้าหมายเชิงธุรกิจของคุณมาได้
              เพื่อให้ทีมช่วยวางแนวทางร่วมงานที่เหมาะสมได้ทันที.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <TrackedLink href="/contact" className="btn-primary">
                ติดต่อทีมพาร์ตเนอร์ทันที
              </TrackedLink>
              <TrackedLink href="/resources" className="btn-secondary">
                เปิด Resource Hub
              </TrackedLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
