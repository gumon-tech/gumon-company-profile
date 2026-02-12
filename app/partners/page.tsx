import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "พาร์ตเนอร์",
  description:
    "แนวทางทำงานร่วมกับพาร์ตเนอร์ของ Gumon ที่เน้นบทบาทชัดเจน ความเชื่อมั่นระยะยาว และการส่งมอบที่ขยายได้",
};

const sections = [
  {
    title: "พาร์ตเนอร์ที่เหมาะสม",
    body:
      "เหมาะกับองค์กรที่มีภารกิจส่งมอบงานให้ลูกค้าอย่างต่อเนื่อง เช่น SI ทีมที่ปรึกษาซอฟต์แวร์ และทีมวางระบบคลาวด์",
  },
  {
    title: "ประโยชน์ที่พาร์ตเนอร์ได้รับ",
    body:
      "เริ่มงานได้เร็วขึ้น ลดต้นทุนงานซ้ำ และมีมาตรฐานร่วมที่ช่วยให้ส่งมอบงานได้สม่ำเสมอ",
  },
  {
    title: "โมเดลการทำงานร่วมกัน",
    body:
      "Gumon ดูแลแกนแพลตฟอร์มและมาตรฐาน ส่วนพาร์ตเนอร์โฟกัสงานลูกค้า การปรับใช้ และผลลัพธ์ทางธุรกิจ",
  },
  {
    title: "ขอบเขตเชิงพาณิชย์",
    body:
      "Gumon ไม่รับงานที่แข่งขันตรงกับพาร์ตเนอร์ เพื่อรักษาความเชื่อมั่นและความยั่งยืนของความร่วมมือ",
  },
];

export default function Page() {
  return (
    <section className="ui-section">
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">สำหรับพาร์ตเนอร์</p>
          <h1 className="ui-h1">โตไปด้วยกันบนบทบาทที่ชัดเจน</h1>
          <p className="mt-6 max-w-3xl ui-p">
            Gumon เป็นฐานเทคโนโลยีให้พาร์ตเนอร์ต่อยอดงานลูกค้าได้เร็วขึ้น
            และรักษามาตรฐานเดียวกันในทุกโครงการ
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {sections.map((section, index) => (
            <Reveal key={section.title} delay={index * 70}>
              <div className="card p-6 shadow-soft h-full">
                <p className="ui-kicker">แนวทางความร่วมมือ</p>
                <h2 className="mt-3 ui-h3">{section.title}</h2>
                <p className="mt-3 text-sm md:text-base text-mist leading-relaxed">{section.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">ขั้นตอนเริ่มต้น</p>
          <h2 className="mt-3 ui-h2">วางแผนร่วมกันก่อนลงมือจริง</h2>
          <p className="mt-3 max-w-3xl text-sm md:text-base text-mist leading-relaxed">
            ทีมงานช่วยประเมินความพร้อม วางกรอบการทำงาน
            และจัดแนวทางส่งมอบให้เหมาะกับบริบทธุรกิจของพาร์ตเนอร์
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn-primary">สมัครเป็นพาร์ตเนอร์</Link>
            <Link href="/contact" className="btn-secondary">คุยกับทีมพาร์ตเนอร์</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
