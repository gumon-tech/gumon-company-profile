import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "บริษัท",
  description:
    "รู้จัก Gumon Technology ผ่านวิสัยทัศน์ บทบาทองค์กร และหลักการทำงานที่ชัดเจน",
};

const sections = [
  {
    title: "วิสัยทัศน์และพันธกิจ",
    body:
      "เราต้องการให้การพัฒนาซอฟต์แวร์สมัยใหม่เริ่มต้นได้ง่ายขึ้น มีมาตรฐานร่วม และเติบโตได้อย่างมั่นคง",
  },
  {
    title: "ทิศทางเชิงกลยุทธ์",
    body:
      "Gumon เติบโตในฐานะผู้สร้างแพลตฟอร์ม โดยให้ความสำคัญกับคุณค่าเชิงโครงสร้างมากกว่าการเติบโตระยะสั้น",
  },
  {
    title: "บทบาทใน YCN Ecosystem",
    body:
      "Gumon ดูแลแกนเทคโนโลยีและมาตรฐาน ขณะที่หน่วยงานในกลุ่มร่วมสนับสนุนด้านการสื่อสาร การเรียนรู้ และการส่งมอบ",
  },
  {
    title: "ทีมและวัฒนธรรมการทำงาน",
    body:
      "ทีมทำงานขนาดกระชับที่เน้นความชัดเจน โปร่งใส และเคารพบทบาทของพาร์ตเนอร์ใน ecosystem",
  },
];

export default function Page() {
  return (
    <section className="ui-section">
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">ข้อมูลบริษัท</p>
          <h1 className="ui-h1">เกี่ยวกับ Gumon Technology</h1>
          <p className="mt-6 max-w-3xl ui-p">
            Gumon คือองค์กรที่ทำงานด้านแพลตฟอร์มเทคโนโลยีแบบเปิด โดยเน้นการวางฐานรากที่แข็งแรง
            เพื่อให้ทีมพัฒนาและพาร์ตเนอร์ต่อยอดได้อย่างมั่นใจ
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {sections.map((section, index) => (
            <Reveal key={section.title} delay={index * 70}>
              <div className="card p-6 shadow-soft h-full">
                <p className="ui-kicker">สาระสำคัญ</p>
                <h2 className="mt-3 ui-h3">{section.title}</h2>
                <p className="mt-3 text-sm md:text-base text-mist leading-relaxed">{section.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">ติดต่อทีมงาน</p>
          <h2 className="mt-3 ui-h2">คุยกับทีม Gumon</h2>
          <p className="mt-3 max-w-3xl text-sm md:text-base text-mist leading-relaxed">
            หากต้องการหารือเรื่องความร่วมมือ ทิศทางแพลตฟอร์ม หรือข้อมูลเชิงกลยุทธ์
            ทีมงานพร้อมให้ข้อมูลเพิ่มเติม
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn-primary">ติดต่อทีมงาน</Link>
            <Link href="/investors" className="btn-secondary">ข้อมูลสำหรับนักลงทุน</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
