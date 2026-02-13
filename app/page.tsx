import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Home",
  description:
    "Gumon Technology คือแพลตฟอร์มเทคโนโลยีสำหรับองค์กรที่ต้องการเริ่มโครงการได้เร็ว คุมมาตรฐานการพัฒนา และส่งมอบระบบได้ต่อเนื่อง",
  path: "/",
});

const signalPills = [
  { label: "รูปแบบแพลตฟอร์ม", value: "Open Core" },
  { label: "สถาปัตยกรรม", value: "โครงสร้าง 3 ชั้น" },
  { label: "เครื่องมือ", value: "Gumon CLI + Docs" },
  { label: "การส่งมอบ", value: "ทำงานร่วมพาร์ตเนอร์" },
];

const foundationBlocks = [
  {
    title: "Application Layer",
    body: "ออกแบบงานธุรกิจให้ทีมพัฒนาแก้ไขและต่อยอดได้ต่อเนื่อง โดยไม่กระทบทั้งระบบ",
  },
  {
    title: "API Service Layer",
    body: "เชื่อมต่อบริการข้ามทีมด้วยมาตรฐานเดียวกัน ลดปัญหางานชนกันและแก้ยากปลายทาง",
  },
  {
    title: "Data Stream Layer",
    body: "รองรับข้อมูลที่ไหลต่อเนื่องสำหรับระบบที่ต้องโตเร็วและยังคงเสถียรภาพ",
  },
];

const roleCards = [
  {
    title: "ทีมพัฒนา",
    body: "เริ่มงานจากมาตรฐานตั้งต้นเดียวกัน ลดเวลาเตรียมระบบ และปล่อยงานได้สม่ำเสมอ",
    href: "/developers",
    cta: "ดูแนวทางสำหรับทีมพัฒนา",
  },
  {
    title: "พาร์ตเนอร์",
    body: "ต่อยอดเชิงพาณิชย์บนโครงสร้างเดียวกัน พร้อมบทบาทการส่งมอบที่ชัดเจน",
    href: "/partners",
    cta: "ดูแนวทางสำหรับพาร์ตเนอร์",
  },
  {
    title: "ผู้บริหาร",
    body: "เห็นภาพรวมแพลตฟอร์ม ความพร้อมทีม และแนวทางใช้งานให้เหมาะกับองค์กร",
    href: "/company",
    cta: "ดูภาพรวมองค์กร",
  },
];

const deliveryWorkflow = [
  {
    step: "01",
    title: "Assess Current Stack",
    body: "เก็บภาพรวมระบบเดิม ทีมที่เกี่ยวข้อง และคอขวดของรอบส่งมอบ เพื่อกำหนดจุดเริ่มที่คุ้มที่สุด",
  },
  {
    step: "02",
    title: "Align Platform Standards",
    body: "กำหนดมาตรฐานร่วมด้านโครงสร้าง API, pipeline, และเอกสาร เพื่อให้ทุกทีมทำงานบนฐานเดียวกัน",
  },
  {
    step: "03",
    title: "Launch Delivery Cadence",
    body: "วางรอบส่งมอบที่ตรวจสอบได้จริง พร้อมแผนขยายทีมและพาร์ตเนอร์ให้เติบโตบนมาตรฐานเดียวกัน",
  },
];

const outcomeSnapshots = [
  {
    metric: "Lead Time Visibility",
    value: "End-to-End",
    detail: "เห็นคอขวดตลอดเส้นทางตั้งแต่เริ่มงานจนส่งมอบ",
  },
  {
    metric: "Delivery Governance",
    value: "Shared Standard",
    detail: "ควบคุมมาตรฐานร่วมข้ามทีมโดยไม่ลดความเร็วของการพัฒนา",
  },
  {
    metric: "Scale Readiness",
    value: "Partner-Ready",
    detail: "รองรับการร่วมงานกับพาร์ตเนอร์และทีมใหม่ได้อย่างเป็นระบบ",
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

const proofMetrics = [
  {
    label: "First Response Target",
    value: "≤ 1 Business Day",
    detail: "กำหนดรอบตอบกลับเบื้องต้นที่ชัดเจนสำหรับการเริ่มต้นโครงการ",
  },
  {
    label: "Platform Layers",
    value: `${foundationBlocks.length}`,
    detail: "จัดโครงสร้างระบบเป็นชั้นงานที่ขยายต่อได้และคุมมาตรฐานง่าย",
  },
  {
    label: "Active Partners",
    value: `${partners.length}+`,
    detail: "มีเครือข่ายทีมส่งมอบที่ทำงานบนมาตรฐานเดียวกัน",
  },
];

const miniCases = [
  {
    title: "Government Services",
    problem: "มีหลายทีมพัฒนาแยกกัน ทำให้มาตรฐาน API และรอบส่งมอบไม่สม่ำเสมอ",
    approach: "กำหนดมาตรฐานตั้งต้นกลางและเกณฑ์คุณภาพร่วมก่อนเริ่มรอบพัฒนาใหม่",
    outcome: "ทีมเริ่มงานจากมาตรฐานเดียวกันและลดงานแก้ซ้ำปลายทาง",
  },
  {
    title: "Enterprise Internal Apps",
    problem: "ระบบภายในองค์กรเพิ่มขึ้นเร็ว แต่ pipeline และเอกสารไม่เชื่อมกัน",
    approach: "รวม workflow ฝั่งพัฒนา เอกสาร และรอบปล่อยงานไว้ในกรอบเดียว",
    outcome: "onboarding ทีมใหม่เร็วขึ้นและคาดการณ์รอบส่งมอบได้ชัดขึ้น",
  },
];

const selectedFieldWorks = [
  {
    title: "Government Coordination Session",
    category: "Public Sector",
    image: "/assets/selected/government-defence-03.jpg",
    detail: "จัดเวิร์กชอปร่วมกับหน่วยงานเพื่อปรับแนวทางโครงสร้างระบบและการส่งมอบให้ตรวจสอบได้",
  },
  {
    title: "Healthcare Site Collaboration",
    category: "Healthcare",
    image: "/assets/selected/healthcare-cvmcra-01.png",
    detail: "ลงพื้นที่เก็บความต้องการและจัดลำดับการเชื่อมข้อมูลให้สอดคล้องกับการทำงานหน้างานจริง",
  },
  {
    title: "Education Program Support",
    category: "Education",
    image: "/assets/selected/education-kmitl-01.png",
    detail: "สนับสนุนทีมการศึกษาด้วยแนวทางแพลตฟอร์มและเอกสาร เพื่อยกระดับการพัฒนาระยะยาว",
  },
  {
    title: "Ecosystem Event Enablement",
    category: "Ecosystem",
    image: "/assets/selected/ecosystem-dks-01.png",
    detail: "ทำงานร่วมกับพาร์ตเนอร์ในระบบนิเวศเพื่อขยายการใช้งานแพลตฟอร์มในโครงการใหม่",
  },
  {
    title: "Delivery Readiness Review",
    category: "Operations",
    image: "/assets/field-impact/field-impact-15.jpg",
    detail: "ประเมินความพร้อมของทีมและกระบวนการส่งมอบก่อนเริ่มรอบพัฒนาจริง",
  },
  {
    title: "Cross-team Knowledge Transfer",
    category: "Knowledge",
    image: "/assets/field-impact/field-impact-10.jpg",
    detail: "ถ่ายทอดองค์ความรู้ข้ามทีมเพื่อลดความเสี่ยงจากการพึ่งพาบุคคลและเพิ่มความต่อเนื่องของงาน",
  },
];

export default function Page() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">OPEN PLATFORM สำหรับองค์กรที่ต้องการส่งมอบงานได้เร็วและคุมมาตรฐานได้จริง</p>
          <h1 className="ui-h1">ยกระดับจากการทำโปรเจกต์แบบแยกส่วน ไปสู่รอบส่งมอบที่ต่อเนื่องและคาดการณ์ได้</h1>
          <p className="mt-6 max-w-3xl ui-p">
            Gumon ช่วยรวมเวิร์กโฟลว์ของทีมเทคโนโลยีและพาร์ตเนอร์ไว้บนมาตรฐานเดียว
            ตั้งแต่การออกแบบโครงสร้าง การเชื่อมต่อบริการ จนถึงการปล่อยงานจริงในรอบที่วัดผลได้.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <TrackedLink href="/contact" className="btn-primary">ปรึกษาทีม Gumon</TrackedLink>
            <TrackedLink href="/platform" className="btn-secondary">ดูโครงสร้างแพลตฟอร์ม</TrackedLink>
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
            <h2 className="mt-3 ui-h2">โครงสร้าง 3 ชั้นที่ช่วยให้ทีมทำงานเร็วขึ้นโดยไม่เสียมาตรฐาน</h2>
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
            <h2 className="mt-3 ui-h2">เลือกแนวทางที่ตรงกับบทบาทของคุณ แล้วเริ่มงานได้ทันที</h2>
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

        <div className="mt-14">
          <Reveal>
            <p className="ui-kicker">Selected Field Works</p>
            <h2 className="mt-3 ui-h2">ภาพการทำงานร่วมกับหน่วยงานและพาร์ตเนอร์ในโครงการจริง</h2>
            <p className="mt-3 text-sm md:text-base text-mist leading-relaxed max-w-3xl">
              คัดภาพจากกิจกรรมภาคสนามที่สะท้อนแนวทางทำงานของ Gumon ตั้งแต่การวางมาตรฐาน
              การทำงานข้ามทีม ไปจนถึงการส่งมอบในสภาพแวดล้อมจริง.
            </p>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {selectedFieldWorks.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <article className="card p-4 shadow-soft h-full">
                  <div className="overflow-hidden rounded-xl border border-line/30 bg-bg1/70">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1200}
                      height={800}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="mt-4 text-[10px] tracking-[0.18em] uppercase text-accent">{item.category}</div>
                  <h3 className="mt-2 ui-h3">{item.title}</h3>
                  <p className="mt-2 text-sm text-mist leading-relaxed">{item.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14 card p-7 shadow-soft">
          <Reveal>
            <p className="ui-kicker">Delivery Workflow</p>
            <h2 className="mt-3 ui-h2">แนวทางเริ่มต้น 3 ขั้นตอนสำหรับทำให้การส่งมอบเดินต่อได้จริง</h2>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {deliveryWorkflow.map((item, index) => (
              <Reveal key={item.step} delay={index * 80}>
                <div className="route-card h-full">
                  <div className="text-xs font-semibold tracking-[0.2em] text-accent">{item.step}</div>
                  <h3 className="mt-2 ui-h3">{item.title}</h3>
                  <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <Reveal>
            <p className="ui-kicker">Proof Metrics</p>
            <h2 className="mt-3 ui-h2">ตัวชี้วัดตั้งต้นที่ใช้ติดตามความพร้อมก่อนขยายโครงการ</h2>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {proofMetrics.map((item, index) => (
              <Reveal key={item.label} delay={index * 70}>
                <div className="glass rounded-xl border border-line/35 p-5 h-full">
                  <div className="text-xs text-mist uppercase tracking-[0.14em]">{item.label}</div>
                  <div className="mt-2 text-2xl font-semibold text-ink">{item.value}</div>
                  <p className="mt-2 text-sm text-mist leading-relaxed">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14 card p-7 shadow-soft">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="ui-kicker">Trusted Partners</p>
              <h2 className="mt-2 ui-h2">เครือข่ายพาร์ตเนอร์ที่ทำงานบนมาตรฐานเดียวกันและส่งมอบได้จริง</h2>
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

        <div className="mt-14 card p-7 shadow-soft">
          <Reveal>
            <p className="ui-kicker">Mini Cases</p>
            <h2 className="mt-3 ui-h2">ตัวอย่างโจทย์ที่ใช้กรอบเดียวกันในการส่งมอบ</h2>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {miniCases.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
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

        <div className="mt-14">
          <Reveal>
            <p className="ui-kicker">Outcome Snapshot</p>
            <h2 className="mt-3 ui-h2">ผลลัพธ์ที่ทีมผู้บริหารและทีมเทคโนโลยีต้องเห็นร่วมกัน</h2>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {outcomeSnapshots.map((item, index) => (
              <Reveal key={item.metric} delay={index * 80}>
                <div className="glass rounded-xl border border-line/35 p-5 h-full">
                  <div className="text-xs text-mist uppercase tracking-[0.14em]">{item.metric}</div>
                  <div className="mt-2 text-xl font-semibold text-ink">{item.value}</div>
                  <p className="mt-2 text-sm text-mist leading-relaxed">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <div className="mt-14 card p-7 shadow-soft">
            <p className="ui-kicker">Next Step</p>
            <h2 className="mt-3 ui-h2">พร้อมวางแผนเริ่มต้นให้โครงการเดินได้จริงในรอบถัดไปหรือยัง</h2>
            <p className="mt-3 text-sm md:text-base text-mist leading-relaxed max-w-3xl">
              ส่งข้อมูลทีมและระบบปัจจุบันของคุณมาได้เลย เราจะช่วยวางแนวทางเริ่มต้นที่เหมาะกับเป้าหมายธุรกิจ
              และข้อจำกัดขององค์กรคุณ.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <TrackedLink href="/contact" className="btn-primary">นัดคุยกับทีมงาน</TrackedLink>
              <TrackedLink href="/resources" className="btn-secondary">ดูข้อมูลเพิ่มเติม</TrackedLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
