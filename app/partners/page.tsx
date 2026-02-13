import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import Image from "next/image";
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

        <div className="mt-12 card p-7 shadow-soft">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="ui-kicker">Trust Proof</p>
              <h2 className="mt-2 ui-h2">เครือข่ายที่ใช้งานมาตรฐานเดียวกันในงานส่งมอบจริง</h2>
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

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 card p-7 shadow-soft">
            <p className="ui-kicker">Partner Resources</p>
            <h2 className="mt-3 ui-h2">ช่องทาง enablement สำหรับทีมส่งมอบ</h2>
            <div className="mt-5 grid md:grid-cols-2 gap-4">
              <TrackedLink
                href="https://wiki.gumon.io/"
                target="_blank"
                rel="noreferrer"
                className="route-card block"
              >
                <h3 className="ui-h3">Knowledge Base</h3>
                <p className="mt-2 text-sm text-mist leading-relaxed">แนวทางส่งมอบและ operational playbooks</p>
              </TrackedLink>
              <TrackedLink
                href="https://docs.gumon.io/"
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
              <TrackedLink href="/contact" className="btn-primary">
                ติดต่อทีมพาร์ตเนอร์
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
