import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Home",
  description:
    "Gumon Technology คือ Open Platform สำหรับองค์กรที่ต้องการลดเวลาเริ่มต้นโครงการ คุมมาตรฐานการพัฒนา และส่งมอบระบบได้เร็วขึ้น",
  path: "/",
});

const signalPills = [
  { label: "OPEN SOURCE", value: "Open Core" },
  { label: "ARCHITECTURE", value: "3-Layer Platform" },
  { label: "TOOLING", value: "Gumon CLI + Docs" },
  { label: "DELIVERY", value: "Partner-Enabled" },
];

const foundationBlocks = [
  {
    title: "Application Layer",
    body: "ออกแบบ workflow ของธุรกิจให้พัฒนาและปรับปรุงได้ต่อเนื่องโดยไม่กระทบทั้งระบบ",
  },
  {
    title: "API Service Layer",
    body: "จัดการ service contracts และการเชื่อมต่อข้ามทีมด้วยมาตรฐานเดียวกัน",
  },
  {
    title: "Data Stream Layer",
    body: "รองรับ event/data pipeline สำหรับระบบที่ต้องการความเร็วและเสถียรภาพในการขยาย",
  },
];

const roleCards = [
  {
    title: "Developers",
    body: "เริ่ม project จาก baseline เดียวกัน ใช้เวลา setup น้อยลง และปล่อยงานได้สม่ำเสมอ",
    href: "/developers",
    cta: "เข้าสู่ Developer Path",
  },
  {
    title: "Partners",
    body: "ต่อยอดเชิงพาณิชย์บนโครงสร้างเดียวกัน โดยมีบทบาทส่งมอบที่ชัดเจน",
    href: "/partners",
    cta: "เข้าสู่ Partner Path",
  },
  {
    title: "Executives",
    body: "ประเมินภาพรวมแพลตฟอร์ม ความพร้อมทีม และแนวทางนำไปใช้ในองค์กร",
    href: "/company",
    cta: "ดู Company Overview",
  },
];

const partners = [
  { name: "Asia Connect Corporation", country: "Thailand", website: "https://www.asiaconnectth.com", short: "AC", logo: "/assets/partners/asia-connect.png" },
  { name: "AC Academys", country: "Thailand", website: "https://acacademys.com", short: "AC", logo: "/assets/partners/ac-academys.png" },
  { name: "Olufy-X", country: "Thailand", website: "https://olufy.com", short: "OX", logo: "/assets/partners/olufy-x.png" },
  { name: "Taitam-D", country: "United Kingdom", website: "https://taitam-d.com", short: "TD", logo: "/assets/partners/taitam-d.png" },
];

const trustStats = [
  { label: "Partner Organizations", value: `${partners.length}+` },
  { label: "Operating Countries", value: `${new Set(partners.map((item) => item.country)).size}` },
];

export default function Page() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">OPEN SOURCE PLATFORM FOR MODERN SYSTEM DELIVERY</p>
          <h1 className="ui-h1">ลดเวลาเริ่มต้นโครงการและส่งมอบได้เร็วขึ้น ด้วยแพลตฟอร์มมาตรฐานเดียวกันทั้งองค์กร</h1>
          <p className="mt-6 max-w-3xl ui-p">
            Gumon ช่วยเปลี่ยนการพัฒนาแบบต่างคนต่างทำ ให้กลายเป็นระบบที่ใช้ซ้ำได้จริง
            ตั้งแต่ baseline โครงสร้าง, service contracts ไปจนถึงการส่งมอบที่คาดการณ์ได้.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <TrackedLink href="/platform" className="btn-primary">ดูโครงสร้าง Platform</TrackedLink>
            <TrackedLink href="/contact" className="btn-secondary">คุยโจทย์กับทีม Gumon</TrackedLink>
          </div>
        </Reveal>

        <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-4 gap-3">
          {signalPills.map((pill, index) => (
            <Reveal key={pill.label} delay={index * 60}>
              <div className="glass rounded-xl border border-line/35 px-4 py-3">
                <div className="text-[10px] tracking-[0.2em] uppercase text-mist">{pill.label}</div>
                <div className="mt-2 text-sm font-semibold text-ink">{pill.value}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 card p-7 shadow-soft">
          <Reveal>
            <p className="ui-kicker">Platform Foundation</p>
            <h2 className="mt-3 ui-h2">สถาปัตยกรรม 3 ชั้นสำหรับทีมที่ต้องการส่งมอบอย่างมีวินัย</h2>
          </Reveal>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {foundationBlocks.map((block, index) => (
              <Reveal key={block.title} delay={index * 80}>
                <div className="route-card h-full">
                  <h3 className="ui-h3">{block.title}</h3>
                  <p className="mt-2 text-sm text-mist leading-relaxed">{block.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <Reveal>
            <p className="ui-kicker">Role Paths</p>
            <h2 className="mt-3 ui-h2">เลือกเส้นทางเริ่มต้นตามบทบาท เพื่อเดินงานได้เร็วตั้งแต่สัปดาห์แรก</h2>
          </Reveal>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
            {roleCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 80}>
                <div className="route-card h-full">
                  <h3 className="ui-h3">{card.title}</h3>
                  <p className="mt-3 text-sm text-mist leading-relaxed">{card.body}</p>
                  <TrackedLink
                    href={card.href}
                    className="mt-5 inline-block text-sm text-ink underline underline-offset-4 decoration-accent hover:decoration-ink"
                  >
                    {card.cta}
                  </TrackedLink>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14 card p-7 shadow-soft">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="ui-kicker">Trusted Partners</p>
              <h2 className="mt-2 ui-h2">เครือข่ายพาร์ตเนอร์ที่ส่งมอบงานจริงบนมาตรฐานเดียวกัน</h2>
            </div>
            <TrackedLink href="/partners" className="btn-secondary w-fit">ดูแนวทางการร่วมงาน</TrackedLink>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner) => (
              <div key={partner.name} className="partner-item">
                <div className="partner-logo-wrap">
                  {partner.logo ? (
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={112}
                      height={40}
                      className="partner-logo"
                    />
                  ) : (
                    <div className="partner-logo-fallback" aria-label={`${partner.name} monogram`}>{partner.short}</div>
                  )}
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

          <div className="mt-6 flex flex-wrap gap-3">
            {trustStats.map((item) => (
              <div key={item.label} className="glass rounded-lg border border-line/35 px-3 py-2 text-xs text-mist">
                <span className="text-ink font-semibold">{item.value}</span> {item.label}
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <div className="mt-14 card p-7 shadow-soft">
            <p className="ui-kicker">Next Step</p>
            <h2 className="mt-3 ui-h2">ต้องการ roadmap ที่เริ่มได้จริงภายในรอบการทำงานถัดไป</h2>
            <p className="mt-3 text-sm md:text-base text-mist leading-relaxed max-w-3xl">
              ส่งบริบททีมและระบบปัจจุบันของคุณมาได้เลย แล้วเราจะช่วยกำหนดเส้นทางเริ่มต้นที่เหมาะสม
              ทั้งด้านโครงสร้างเทคโนโลยีและรูปแบบการส่งมอบ.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <TrackedLink href="/contact" className="btn-primary">ขอนัดคุย 30 นาที</TrackedLink>
              <TrackedLink href="/resources" className="btn-secondary">ดูเอกสารประกอบการตัดสินใจ</TrackedLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
