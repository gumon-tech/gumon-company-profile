import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "หน้าแรก",
  description:
    "Gumon Technology แพลตฟอร์มเทคโนโลยีแบบเปิดที่ช่วยให้ทีมพัฒนาเริ่มงานไว ทำงานเป็นระบบ และขยายโครงการได้มั่นคง",
};

export default function Page() {
  return (
    <section className="ui-section">
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">OPEN PLATFORM • มาตรฐานชัดเจน • PARTNER-LED GROWTH</p>
        </Reveal>

        <Reveal delay={70}>
          <h1 className="ui-h1">
            ทำระบบให้เร็วขึ้น
            <br className="hidden md:block" />และโตได้จริงบนมาตรฐานเดียวกัน
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-6 max-w-3xl ui-p">
            Gumon Technology ช่วยวางโครงสร้างซอฟต์แวร์ตั้งแต่ต้น ให้ทีมเริ่มงานไว
            เชื่อมต่อง่าย และคุมคุณภาพได้ต่อเนื่อง แม้ระบบจะ scale เป็นหลายบริการ
          </p>
        </Reveal>

        <Reveal delay={210}>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link href="/developers" className="btn-primary">เริ่มใช้งานสำหรับนักพัฒนา</Link>
            <Link href="/partners" className="btn-secondary">ร่วมเป็นพาร์ตเนอร์</Link>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {[
            ["ชั้นแอปพลิเคชัน", "เริ่มสร้างบริการได้เร็วขึ้นด้วยโครงพื้นฐานที่ใช้ซ้ำได้"],
            ["ชั้นบริการ API", "มาตรฐานการเชื่อมต่อที่ทำให้ทีมหลายชุดทำงานร่วมกันได้ลื่นขึ้น"],
            ["ชั้นข้อมูลและเหตุการณ์", "รองรับ data flow และ event flow ในระบบที่เติบโตต่อเนื่อง"],
            ["Gumon CLI และชุดแกนหลัก", "ลดงานตั้งค่าซ้ำในทุกโปรเจกต์ และช่วยให้เริ่มงานเป็นรูปแบบเดียวกัน"],
          ].map(([title, desc]) => (
            <div key={title} className="card p-6 shadow-soft">
              <div className="text-[11px] tracking-[0.28em] uppercase text-accent">องค์ประกอบหลัก</div>
              <div className="mt-3 text-lg font-semibold">{title}</div>
              <p className="mt-2 text-sm text-mist leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 card p-6 shadow-soft overflow-hidden relative">
            <div className="relative">
              <p className="ui-kicker">บทบาทของ Gumon</p>
              <h2 className="mt-3 ui-h2">เราเป็นผู้สร้างแพลตฟอร์ม ไม่ใช่ผู้รับงานปลายทาง</h2>
              <p className="mt-3 text-sm md:text-base text-mist leading-relaxed max-w-xl">
                Gumon โฟกัสที่แพลตฟอร์ม มาตรฐาน และเครื่องมือแกนหลัก
                ส่วนงานส่งมอบลูกค้าปลายทางเป็นบทบาทของพาร์ตเนอร์ เพื่อให้ ecosystem เติบโตอย่างยั่งยืน
              </p>
              <Link href="/partners" className="mt-6 inline-block text-sm text-ink underline underline-offset-4 decoration-accent hover:decoration-accent transition">
                ดูแนวทางทำงานกับพาร์ตเนอร์ →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 card p-6 shadow-soft overflow-hidden relative">
            <div className="relative">
              <p className="ui-kicker">ONE ECOSYSTEM</p>
              <h2 className="mt-3 ui-h2">แต่ละหน่วยงานมีบทบาทชัด ไม่ทับซ้อน</h2>
              <p className="mt-3 text-sm md:text-base text-mist leading-relaxed">
                Gumon ดูแลแกนเทคโนโลยีและมาตรฐาน Zenix ดูแลการสื่อสาร
                DKS Center ดูแลการเรียนรู้ และพาร์ตเนอร์ดูแลงานส่งมอบเชิงพาณิชย์
              </p>
              <Link href="/ecosystem" className="mt-6 inline-block text-sm text-ink underline underline-offset-4 decoration-accent hover:decoration-accent transition">
                ดูภาพรวม ecosystem →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 card p-7 shadow-soft">
          <div className="grid lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7">
              <p className="ui-kicker">เริ่มต้นจากบทบาทของคุณ</p>
              <h2 className="mt-3 ui-h2">แต่ละกลุ่มมีเส้นทางใช้งานที่ชัดเจน</h2>
              <p className="mt-3 text-sm md:text-base text-mist leading-relaxed max-w-2xl">
                ไม่ว่าคุณจะเป็นนักพัฒนา พาร์ตเนอร์ หรือผู้ลงทุน คุณจะเห็นภาพเดียวกันของ Gumon
                และเข้าถึงข้อมูลที่ใช้ตัดสินใจได้ทันที
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link href="/developers" className="btn-secondary">สำหรับนักพัฒนา</Link>
                <Link href="/partners" className="btn-secondary">สำหรับพาร์ตเนอร์</Link>
                <Link href="/investors" className="btn-secondary">สำหรับนักลงทุน</Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="text-[11px] tracking-[0.28em] uppercase text-mist">เส้นทางยอดนิยม</div>
              <div className="mt-3 space-y-3">
                <div className="card p-4">
                  <div className="text-sm font-semibold">เริ่มใช้งานสำหรับนักพัฒนา</div>
                  <p className="mt-1 text-sm text-mist">เหมาะกับทีมที่ต้องการเริ่มงานไวด้วยโครงสร้างมาตรฐาน</p>
                </div>
                <div className="card p-4">
                  <div className="text-sm font-semibold">ร่วมเป็นพาร์ตเนอร์</div>
                  <p className="mt-1 text-sm text-mist">เหมาะกับองค์กรที่ต้องการต่อยอดและส่งมอบโซลูชันให้ลูกค้า</p>
                </div>
                <div className="card p-4">
                  <div className="text-sm font-semibold">ดูหลักสูตรที่ DKS Center</div>
                  <p className="mt-1 text-sm text-mist">สำหรับการเรียนรู้ อบรม และการรับรองทักษะ</p>
                </div>
              </div>
              <div className="mt-3 ui-small">
                เลือกเส้นทางที่ตรงกับเป้าหมายของคุณ แล้วทีมงานจะพาคุณไปต่อได้เร็วขึ้น
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
