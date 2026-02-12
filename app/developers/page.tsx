import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "นักพัฒนา",
  description:
    "เริ่มใช้งาน Gumon สำหรับนักพัฒนา ตั้งค่าไว โครงสร้างชัด และพร้อมต่อยอดในทีมหลายบริการ",
};

const sections = [
  {
    title: "เริ่มต้นอย่างรวดเร็ว",
    body:
      "ตั้งค่าสภาพแวดล้อม สร้างโปรเจกต์ และรัน service แรกได้ภายในขั้นตอนสั้นๆ",
  },
  {
    title: "ตั้งค่า CLI",
    body:
      "ใช้ CLI เพื่อสร้างโครงงานมาตรฐาน ลดการตั้งค่าด้วยมือ และลดความต่างระหว่างทีม",
  },
  {
    title: "Starter templates",
    body:
      "ใช้ starter templates ที่พร้อมใช้งานจริง เพื่อลดเวลาตั้งต้นและยกระดับความสม่ำเสมอของโค้ดเบส",
  },
  {
    title: "Best practices",
    body:
      "แนวทางปฏิบัติสำหรับระบบหลายบริการที่ช่วยให้ debug ง่าย ดูแลง่าย และ release ได้ต่อเนื่อง",
  },
];

export default function Page() {
  return (
    <section className="ui-section">
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">สำหรับนักพัฒนา</p>
          <h1 className="ui-h1">เริ่มให้ไว แล้วคุมโครงสร้างให้นิ่ง</h1>
          <p className="mt-6 max-w-3xl ui-p">
            Gumon ช่วยลดเวลาตั้งต้นและงานซ้ำทางเทคนิค
            เพื่อให้ทีมโฟกัสกับ feature ใหม่และคุณภาพระบบได้มากขึ้น
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {sections.map((section, index) => (
            <Reveal key={section.title} delay={index * 70}>
              <div className="card p-6 shadow-soft h-full">
                <p className="ui-kicker">เส้นทางใช้งาน</p>
                <h2 className="mt-3 ui-h3">{section.title}</h2>
                <p className="mt-3 text-sm md:text-base text-mist leading-relaxed">{section.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">ชุมชนและการเรียนรู้</p>
          <h2 className="mt-3 ui-h2">ติดปัญหาเมื่อไหร่ มีทางไปต่อทันที</h2>
          <p className="mt-3 max-w-3xl text-sm md:text-base text-mist leading-relaxed">
            หากทีมติดปัญหาระหว่างใช้งานจริง
            สามารถต่อยอดผ่านบทเรียนและ community เพื่อแก้จุดติดขัดได้เร็วขึ้น
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/resources" className="btn-primary">ดูเอกสารและทรัพยากร</Link>
            <Link href="/learning" className="btn-secondary">ดูหลักสูตรและการอบรม</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
