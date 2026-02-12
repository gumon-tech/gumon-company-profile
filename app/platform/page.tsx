import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "แพลตฟอร์ม",
  description:
    "ภาพรวมแพลตฟอร์ม Gumon ตั้งแต่โครงสร้างหลัก เครื่องมือสำคัญ ไปจนถึงคุณค่าที่เกิดขึ้นจริงในการทำงาน",
};

export default function Page() {
  return (
    <section className="ui-section">
      <div className="ui-container">
        <Reveal><p className="ui-kicker">ภาพรวมแพลตฟอร์ม</p></Reveal>
        <Reveal delay={70}><h1 className="ui-h1">โครงสร้างที่ช่วยให้ทีมส่งมอบงานได้ต่อเนื่อง</h1></Reveal>
        <Reveal delay={140}>
          <p className="mt-6 max-w-3xl ui-p">
            หน้านี้สรุปว่า Gumon ช่วยทีมพัฒนาในจุดไหนบ้าง ตั้งแต่เริ่มโครงการ
            ไปจนถึงการดูแลระบบที่กำลัง scale
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {[
            ["สถาปัตยกรรม 3 ชั้น", "ช่วยแยกบทบาทของระบบให้ชัด ทำให้ขยายและดูแลได้ง่ายขึ้น"],
            ["ส่วนประกอบแกนหลัก", "ใช้ซ้ำได้จริงในหลายโปรเจกต์ ลดงานที่ต้องเริ่มใหม่ทุกครั้ง"],
            ["เครื่องมือเริ่มต้น", "ช่วย setup โครงงานได้เร็ว และทำให้ทีมใช้มาตรฐานเดียวกันตั้งแต่ต้น"],
            ["ความปลอดภัยและมาตรฐาน", "วางหลักการที่ชัดเพื่อรักษาคุณภาพและความน่าเชื่อถือของระบบ"],
          ].map(([title, desc]) => (
            <div key={title} className="card p-6 shadow-soft">
              <p className="ui-kicker">ประเด็นสำคัญ</p>
              <h2 className="mt-3 ui-h3">{title}</h2>
              <p className="mt-2 text-sm text-mist leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">คุณค่าที่เกิดขึ้นจริง</p>
          <h2 className="mt-3 ui-h2">ทีมเริ่มงานไวขึ้น และคุมคุณภาพได้ต่อเนื่อง</h2>
          <p className="mt-3 max-w-3xl text-sm md:text-base text-mist leading-relaxed">
            ผลที่ชัดคือ ลดงานซ้ำ ลดความคลาดเคลื่อนระหว่างทีม
            และทำให้การพัฒนาในระยะยาวยังอยู่บนทิศทางเดียวกัน
          </p>
          <div className="mt-5 grid gap-2 text-sm text-mist">
            <div>เหมาะกับทีมที่กำลังเริ่มระบบใหม่และไม่อยากเสียเวลางานตั้งค่าซ้ำ</div>
            <div>เหมาะกับองค์กรที่มีหลายทีมและต้องการมาตรฐานร่วมในการส่งมอบ</div>
            <div>เหมาะกับทีมที่กำลังขยายจากระบบเดี่ยวไปสู่หลายบริการ</div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/developers" className="btn-primary">ดูเส้นทางนักพัฒนา</Link>
            <Link href="/resources" className="btn-secondary">ดูข้อมูลเพิ่มเติม</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
