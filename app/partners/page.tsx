import Link from "next/link";
import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Partners",
  description:
    "แนวทางความร่วมมือสำหรับพาร์ตเนอร์ที่ต้องการขยายงานส่งมอบบนมาตรฐานเดียวกับ Gumon",
  path: "/partners",
});

const partnerModel = [
  {
    title: "Platform by Gumon",
    body: "Gumon พัฒนาแกนเทคโนโลยี เอกสาร และแนวปฏิบัติร่วม",
  },
  {
    title: "Delivery by Partners",
    body: "พาร์ตเนอร์รับผิดชอบ solution design, implementation และผลลัพธ์เชิงธุรกิจของลูกค้า",
  },
  {
    title: "Enablement Together",
    body: "ยกระดับทีมผ่าน playbook, support flow และ learning path ร่วมกัน",
  },
];

const readinessChecklist = [
  "มีทีมส่งมอบหรือทีมที่ปรึกษาที่ดูแลโครงการลูกค้าอย่างต่อเนื่อง",
  "มี capability ด้าน architecture, implementation, และ operation",
  "พร้อมทำงานบนมาตรฐานการส่งมอบร่วม (shared delivery standards)",
  "ต้องการขยายงานหลายโครงการโดยควบคุมคุณภาพได้",
];

export default function Page() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Partners", path: "/partners" }]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">Audience / Partners</p>
          <h1 className="ui-h1">ขยายงานเชิงพาณิชย์บนระบบที่มีขอบเขตบทบาทชัดเจน</h1>
          <p className="mt-6 max-w-3xl ui-p">
            Gumon ยึดหลัก Partner-only ในงานส่งมอบปลายทาง เพื่อให้พาร์ตเนอร์เติบโตได้อย่างมั่นใจบนแพลตฟอร์มและมาตรฐานเดียวกัน.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {partnerModel.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <div className="route-card h-full">
                <p className="ui-kicker">Collaboration Model</p>
                <h2 className="mt-3 ui-h3">{item.title}</h2>
                <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 card p-7 shadow-soft">
            <p className="ui-kicker">Partner Readiness</p>
            <h2 className="mt-3 ui-h2">เกณฑ์ความพร้อมเบื้องต้นสำหรับการเริ่มความร่วมมือ</h2>
            <ul className="mt-5 grid gap-2 feature-list">
              {readinessChecklist.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 card p-7 shadow-soft">
            <p className="ui-kicker">Enablement</p>
            <h2 className="mt-3 ui-h3">สิ่งที่พาร์ตเนอร์จะได้รับ</h2>
            <ul className="mt-4 grid gap-2 feature-list">
              <li>- คู่มือการส่งมอบบนมาตรฐานเดียวกัน</li>
              <li>- แนวทาง support escalation ที่ชัดเจน</li>
              <li>- เส้นทางฝึกอบรมและรับรองทักษะผ่าน DKS Center</li>
              <li>- ฐานความรู้ร่วมสำหรับการแก้ปัญหาในงานจริง</li>
            </ul>
            <div className="mt-6 flex flex-col gap-3">
              <a href="https://wiki.gumon.io/" target="_blank" rel="noreferrer" className="btn-secondary">เปิด Knowledge Base</a>
              <Link href="/contact" className="btn-primary">คุยกับทีมพาร์ตเนอร์</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
