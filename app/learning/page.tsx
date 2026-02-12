import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "การเรียนรู้และการรับรอง",
  description:
    "ยกระดับทีมด้วยหลักสูตร การรับรอง และการฝึกอบรมที่ออกแบบมาเพื่อการใช้งานจริง",
};

const sections = [
  {
    title: "หลักสูตรตามบทบาท",
    body: "เลือกเรียนตามบทบาทงาน เช่น นักพัฒนา สถาปนิกระบบ หรือทีมส่งมอบ",
  },
  {
    title: "เส้นทางการรับรอง",
    body: "มีกรอบประเมินที่ชัดเจน เพื่อยืนยันความพร้อมในการนำแพลตฟอร์มไปใช้จริง",
  },
  {
    title: "กิจกรรมและเวิร์กช็อป",
    body: "กิจกรรมแบบลงมือทำที่ช่วยให้ทีมเรียนรู้ได้เร็วและเห็นผลในงานจริง",
  },
  {
    title: "อบรมสำหรับองค์กร",
    body: "ออกแบบการอบรมให้เหมาะกับทีมในองค์กรที่ต้องการยกระดับทั้งระบบ",
  },
];

export default function Page() {
  return (
    <section className="ui-section">
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">การเรียนรู้และการรับรอง</p>
          <h1 className="ui-h1">พัฒนาทีมให้พร้อมใช้งานจริง</h1>
          <p className="mt-6 max-w-3xl ui-p">
            DKS Center ช่วยพัฒนาทักษะบุคลากรอย่างเป็นขั้นตอน ตั้งแต่พื้นฐานจนถึงระดับที่พร้อมนำไปใช้ในโครงการจริง
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {sections.map((section, index) => (
            <Reveal key={section.title} delay={index * 70}>
              <div className="card p-6 shadow-soft h-full">
                <p className="ui-kicker">หัวข้อการเรียนรู้</p>
                <h2 className="mt-3 ui-h3">{section.title}</h2>
                <p className="mt-3 text-sm md:text-base text-mist leading-relaxed">{section.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">เริ่มต้นได้ทันที</p>
          <h2 className="mt-3 ui-h2">เลือกเส้นทางที่เหมาะกับทีมของคุณ</h2>
          <p className="mt-3 max-w-3xl text-sm md:text-base text-mist leading-relaxed">
            เลือกหลักสูตรที่ตรงกับเป้าหมายทีม แล้วต่อยอดสู่การรับรองเพื่อให้พร้อมส่งมอบงานอย่างมั่นใจ
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="https://dkscenter.gumon.io" target="_blank" rel="noreferrer" className="btn-primary">
              ไปที่ DKS Center
            </a>
            <a href="https://dkscenter.gumon.io" target="_blank" rel="noreferrer" className="btn-secondary">
              สมัครโปรแกรม
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
