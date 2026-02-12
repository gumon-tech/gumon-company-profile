import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "นักลงทุน",
  description:
    "ข้อมูลเชิงกลยุทธ์สำหรับนักลงทุน ครอบคลุมการใช้เงินทุน growth roadmap และกรอบการกำกับดูแล",
};

const sections = [
  {
    title: "แนวคิดการใช้เงินทุน",
    body:
      "เงินทุนมุ่งใช้เพื่อเสริมความพร้อมของแพลตฟอร์ม มาตรฐานกลาง เอกสารอ้างอิง และความสามารถในการขยาย ecosystem",
  },
  {
    title: "แผนการจัดสรรงบ",
    body:
      "ยึดโครงสร้างทีมแบบกระชับ โดยจัดสรรงบประมาณตามฟังก์ชันหลักที่ส่งผลต่อความยั่งยืนระยะยาว",
  },
  {
    title: "แผนเติบโตระยะกลาง",
    body:
      "ขยายตามลำดับจากฐานผู้ใช้งานและพาร์ตเนอร์ ไปสู่การเพิ่มมูลค่าทางธุรกิจตาม growth roadmap ที่ควบคุมได้",
  },
  {
    title: "ความเสี่ยงและแนวทางรับมือ",
    body:
      "กำหนดกรอบบริหารความเสี่ยงด้านความเชื่อมั่น การยอมรับของตลาด และการกำกับดูแลอย่างโปร่งใส",
  },
];

export default function Page() {
  return (
    <section className="ui-section">
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">ข้อมูลสำหรับนักลงทุน</p>
          <h1 className="ui-h1">กรอบการเติบโตที่มีวินัยและตรวจสอบได้</h1>
          <p className="mt-6 max-w-3xl ui-p">
            Gumon วางการเติบโตบนหลักเปิดกว้างและขอบเขตบทบาทที่ชัดเจน
            เพื่อสร้างความต่อเนื่องเชิงโครงสร้างและความน่าเชื่อถือเชิงพาณิชย์
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {sections.map((section, index) => (
            <Reveal key={section.title} delay={index * 70}>
              <div className="card p-6 shadow-soft h-full">
                <p className="ui-kicker">ประเด็นสำคัญ</p>
                <h2 className="mt-3 ui-h3">{section.title}</h2>
                <p className="mt-3 text-sm md:text-base text-mist leading-relaxed">{section.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">ขอข้อมูลเพิ่มเติม</p>
          <h2 className="mt-3 ui-h2">รับเอกสารสรุปสำหรับการประเมินเบื้องต้น</h2>
          <p className="mt-3 max-w-3xl text-sm md:text-base text-mist leading-relaxed">
            สามารถขอเอกสารสรุปที่ครอบคลุมภาพรวมธุรกิจ แนวคิดการใช้เงินทุน
            ตัวชี้วัดตาม phase และกรอบกำกับดูแลเพื่อประกอบการพิจารณา
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn-primary">ขอเอกสารสรุปนักลงทุน</Link>
            <Link href="/contact" className="btn-secondary">นัดประชุม</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
