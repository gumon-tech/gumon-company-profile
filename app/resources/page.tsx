import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "ทรัพยากร",
  description:
    "ศูนย์รวมข้อมูลสำคัญสำหรับนักพัฒนา พาร์ตเนอร์ และผู้บริหารที่ต้องการมองภาพเดียวกัน",
};

const resources = [
  ["เอกสารสำหรับนักพัฒนา", "รวมคู่มือเริ่มต้น แนวทางตั้งค่า และขั้นตอนใช้งาน", "/developers"],
  ["ข้อมูลสำหรับผู้ลงทุน", "สรุปทิศทางธุรกิจ แผนการใช้ทุน และการกำกับดูแล", "/investors"],
  ["กรณีใช้งาน", "ตัวอย่างการต่อยอดใน ecosystem และการส่งมอบผ่านพาร์ตเนอร์", "/ecosystem"],
  ["คำถามที่พบบ่อยและการติดต่อ", "รวมคำถามสำคัญและช่องทางติดต่อทีมที่เกี่ยวข้อง", "/contact"],
  ["ข้อมูลบริษัท", "วิสัยทัศน์ บทบาท และแนวทางการทำงานของ Gumon", "/company"],
];

export default function Page() {
  return (
    <section className="ui-section">
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">ทรัพยากร</p>
          <h1 className="ui-h1">ข้อมูลสำคัญครบในที่เดียว</h1>
          <p className="mt-6 max-w-3xl ui-p">
            หน้านี้รวบรวมข้อมูลที่ใช้บ่อยที่สุด เพื่อให้แต่ละบทบาทเข้าถึงสิ่งที่ต้องการได้เร็ว
            โดยไม่ต้องค้นหลายที่
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {resources.map(([title, body, href], index) => (
            <Reveal key={title} delay={index * 70}>
              <Link href={href} className="card p-6 shadow-soft block h-full hover:border-ink/30 transition">
                <p className="ui-kicker">เนื้อหาแนะนำ</p>
                <h2 className="mt-3 ui-h3">{title}</h2>
                <p className="mt-3 text-sm md:text-base text-mist leading-relaxed">{body}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">เริ่มจากตรงนี้</p>
          <h2 className="mt-3 ui-h2">เริ่มจากเอกสารหลักและข้อมูลบริษัท</h2>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/developers" className="btn-primary">เปิดเอกสารสำหรับนักพัฒนา</Link>
            <Link href="/company" className="btn-secondary">ดูข้อมูลบริษัท</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
