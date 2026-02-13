import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Company",
  description:
    "รู้จัก Gumon Technology แนวคิดขององค์กร และวิธีขับเคลื่อนแพลตฟอร์มเทคโนโลยีสำหรับงานส่งมอบจริง",
  path: "/company",
});

const principles = [
  {
    title: "Open Source by Default",
    body: "แกนหลักของแพลตฟอร์มต้องเปิดและตรวจสอบได้ เพื่อให้ทีมใช้งานต่อได้อย่างมั่นใจในระยะยาว",
  },
  {
    title: "Platform over Projects",
    body: "เราลงทุนกับโครงสร้างที่ใช้ซ้ำได้ ไม่เน้นแก้ปัญหาเฉพาะกิจรายโปรเจกต์",
  },
  {
    title: "Partner-Driven Delivery",
    body: "การส่งมอบปลายทางขับเคลื่อนโดยเครือข่ายพาร์ตเนอร์ เพื่อขยายงานได้อย่างยั่งยืน",
  },
  {
    title: "Evidence-Led Execution",
    body: "ทุกการปรับปรุงอ้างอิงจากข้อมูลหน้างาน ความเห็นจากผู้ใช้งาน และผลลัพธ์ที่ตรวจสอบได้",
  },
];

const operatingModel = [
  "Platform Team: พัฒนา core architecture, standards และ tooling",
  "Enablement System: ขับเคลื่อน docs, playbooks และองค์ความรู้สำหรับทีมใช้งาน",
  "Partner Network: ส่งมอบเชิงพาณิชย์และขยายผลในตลาดจริง",
];

const visionMission = [
  {
    title: "Vision",
    body: "ยกระดับการพัฒนาซอฟต์แวร์ให้เริ่มต้นได้เร็ว ส่งมอบได้ต่อเนื่อง และไม่ติดกับผู้ขายรายเดียวด้วยแนวทางแบบเปิด",
  },
  {
    title: "Mission",
    body: "พัฒนาแพลตฟอร์ม มาตรฐาน และองค์ความรู้ที่ทีมเทคโนโลยีและพาร์ตเนอร์นำไปใช้งานจริงได้ในอุตสาหกรรมที่หลากหลาย",
  },
];

const gumonBoundaries = {
  is: [
    "องค์กรแพลตฟอร์มเทคโนโลยีแบบเปิด (Open-first Platform Organization)",
    "ผู้พัฒนาโครงสร้างกลาง มาตรฐาน และเครื่องมือที่ใช้ซ้ำได้",
    "ผู้สนับสนุน ecosystem ผ่านเอกสาร แนวปฏิบัติ และการทำงานร่วมกับพาร์ตเนอร์",
  ],
  isNot: [
    "Software House ที่รับพัฒนาโครงการปลายทางเป็นหลัก",
    "ผู้แข่งขันกับพาร์ตเนอร์ในงานส่งมอบเชิงพาณิชย์",
    "แพลตฟอร์มที่ปิดแกนหลักหรือบังคับจ่ายเงินเพื่อใช้งานความสามารถจำเป็น",
  ],
};

const companyProof = [
  { label: "Core Principles", value: `${principles.length}`, detail: "กรอบการตัดสินใจหลักที่ใช้ร่วมกันทั้งองค์กร" },
  { label: "Operating Tracks", value: `${operatingModel.length}`, detail: "บทบาทหลักที่เชื่อมงานวิศวกรรมกับการส่งมอบ" },
  { label: "Delivery Model", value: "Platform + Partner", detail: "แยกบทบาทชัดเจนระหว่างทีมแพลตฟอร์มและทีมส่งมอบ" },
];

const executionCases = [
  {
    title: "Standardized Delivery Setup",
    problem: "แต่ละโครงการตั้งต้นระบบใหม่ ทำให้ใช้เวลานำส่งนานและเกิดงานซ้ำ",
    approach: "ลงทุนกับมาตรฐานตั้งต้นกลางและแนวปฏิบัติที่ใช้ซ้ำได้ในหลายรูปแบบโครงการ",
    outcome: "ทีมสามารถเริ่มงานจากแนวทางเดียวกันและขยายโครงการได้ง่ายขึ้น",
  },
  {
    title: "Partner-Enabled Expansion",
    problem: "การขยายส่งมอบด้วยหลายทีมเสี่ยงต่อคุณภาพและความสม่ำเสมอ",
    approach: "สร้าง quality gates และชุดเอกสารที่พาร์ตเนอร์ใช้ร่วมกับทีมกลาง",
    outcome: "เพิ่มความมั่นใจในการส่งมอบและคุมมาตรฐานได้เมื่อจำนวนงานโตขึ้น",
  },
];

export default function CompanyPage() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Company", path: "/company" }]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">Company / Overview</p>
          <h1 className="ui-h1">Gumon Technology สร้างโครงสร้างพื้นฐานซอฟต์แวร์ที่ทีมใช้งานได้จริงในงานประจำวัน</h1>
          <p className="mt-6 max-w-3xl ui-p">
            เราเป็นองค์กรเทคโนโลยีที่โฟกัส platform engineering และมาตรฐานการทำงานร่วมกัน
            เพื่อให้ทีมพัฒนาและทีมธุรกิจเดินไปในทิศทางเดียวกันได้เร็วขึ้น.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {principles.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <div className="route-card h-full">
                <p className="ui-kicker">Principle</p>
                <h2 className="mt-3 ui-h3">{item.title}</h2>
                <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {visionMission.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <div className="card p-7 shadow-soft h-full">
                <p className="ui-kicker">Strategic Intent</p>
                <h2 className="mt-3 ui-h3">{item.title}</h2>
                <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <p className="ui-kicker">Proof Metrics</p>
          <h2 className="mt-3 ui-h2">ตัวชี้วัดเชิงโครงสร้างที่ใช้ยืนยันความพร้อมในการขยายผล</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {companyProof.map((item, index) => (
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

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">Operating Model</p>
          <h2 className="mt-3 ui-h2">วิธีทำงานขององค์กรที่ออกแบบมาเพื่อขยายผลได้จริง</h2>
          <ul className="mt-5 grid gap-2 feature-list">
            {operatingModel.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/platform" className="btn-primary">ดู Platform</Link>
            <Link href="/team" className="btn-secondary">รู้จักทีม</Link>
            <Link href="/contact" className="btn-secondary">คุยกับทีม</Link>
          </div>
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">What Gumon Is / Is Not</p>
          <h2 className="mt-3 ui-h2">ขอบเขตบทบาทที่ชัดเจนเพื่อรักษาความเชื่อมั่นของ ecosystem</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="route-card h-full">
              <h3 className="ui-h3">What Gumon Is</h3>
              <ul className="mt-3 grid gap-2 feature-list">
                {gumonBoundaries.is.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
            <div className="route-card h-full">
              <h3 className="ui-h3">What Gumon Is Not</h3>
              <ul className="mt-3 grid gap-2 feature-list">
                {gumonBoundaries.isNot.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">Mini Cases</p>
          <h2 className="mt-3 ui-h2">ตัวอย่างการตัดสินใจเชิงระบบที่ช่วยให้ส่งมอบได้ต่อเนื่อง</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {executionCases.map((item, index) => (
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
      </div>
    </section>
  );
}
