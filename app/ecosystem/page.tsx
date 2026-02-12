import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Ecosystem",
  description:
    "ภาพรวม ecosystem ของ Gumon ที่เน้นความร่วมมือที่ยุติธรรม ขอบเขตชัดเจน และการเติบโตร่วมกัน",
};

const items = [
  {
    title: "การต่อยอดด้วยปลั๊กอินและบริการ",
    body:
      "เปิดพื้นที่ให้พาร์ตเนอร์และนักพัฒนาต่อยอดได้บนแกนหลักที่มั่นคง",
  },
  {
    title: "กติกาการทำงานร่วมกัน",
    body:
      "กติกาที่โปร่งใสช่วยให้ทุกฝ่ายทำงานร่วมกันได้อย่างเป็นธรรมและไว้ใจได้",
  },
  {
    title: "แนวทางการมีส่วนร่วม",
    body:
      "มีแนวทางชัดเจนสำหรับโค้ด เอกสาร การทดสอบ และการออกรุ่น",
  },
  {
    title: "เส้นทางสู่ตลาด",
    body:
      "ค่อยๆ เติบโตจากการใช้งานจริงไปสู่โอกาสเชิงธุรกิจที่พาร์ตเนอร์ขับเคลื่อนได้",
  },
];

export default function Page() {
  return (
    <section className="ui-section">
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">ECOSYSTEM AND GROWTH</p>
          <h1 className="ui-h1">ทุกฝ่ายได้เติบโตไปในทิศทางเดียวกัน</h1>
          <p className="mt-6 max-w-3xl ui-p">
            ecosystem ของ Gumon ออกแบบให้ทำงานจริงได้ในระยะยาว
            ครอบคลุมทั้งเทคโนโลยี การมีส่วนร่วม และโอกาสธุรกิจของพาร์ตเนอร์
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <div className="card p-6 shadow-soft h-full">
                <p className="ui-kicker">ECOSYSTEM BUILDING BLOCK</p>
                <h2 className="mt-3 ui-h3">{item.title}</h2>
                <p className="mt-3 text-sm md:text-base text-mist leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">ก้าวถัดไป</p>
          <h2 className="mt-3 ui-h2">เริ่มต่อยอดบน ecosystem ของ Gumon</h2>
          <p className="mt-3 max-w-3xl text-sm md:text-base text-mist leading-relaxed">
            เริ่มจากแนวทางที่กำหนดร่วมกัน เพื่อให้ทุกการต่อยอดเพิ่มคุณค่าให้แพลตฟอร์ม
            และไม่ทำให้โครงสร้างหลักเสียสมดุล
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn-primary">เริ่มคุยเรื่องการต่อยอด</Link>
            <Link href="/company" className="btn-secondary">อ่านหลักการทำงานร่วมกัน</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
