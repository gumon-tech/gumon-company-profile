import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Platform",
  description:
    "ภาพรวม Gumon Platform: สถาปัตยกรรม 3 ชั้น, core services และ workflow มาตรฐานสำหรับทีมที่ต้องการส่งมอบระบบแบบต่อเนื่อง",
  path: "/platform",
});

const architectureLayers = [
  {
    title: "Application Layer",
    body: "จัดการเวิร์กโฟลว์ธุรกิจและบริการฝั่งผู้ใช้งาน ให้ปรับเปลี่ยนได้เร็วโดยไม่ทำให้ระบบรวมเปราะบาง",
  },
  {
    title: "API Service Layer",
    body: "กำหนดสัญญา API และรูปแบบการเชื่อมต่อกลาง เพื่อให้หลายทีมทำงานร่วมกันได้อย่างคาดการณ์ได้",
  },
  {
    title: "Data Stream Layer",
    body: "รองรับข้อมูลเหตุการณ์ การประมวลผลแบบไม่รอคิว และการติดตามระบบสำหรับงานปริมาณสูง",
  },
];

const coreServices = [
  "Gumon Core สำหรับโครงสร้างเริ่มต้นของระบบ",
  "Auth / Access Control / Profile สำหรับอัตลักษณ์และสิทธิ์การเข้าถึง",
  "Notification / Schedule / Storage สำหรับบริการพื้นฐานที่ใช้ซ้ำได้",
  "CLI commands สำหรับเริ่มระบบ ตั้งค่า รันงาน และขยายระบบอย่างเป็นมาตรฐาน",
];

const platformPrinciples = [
  "Open core ใช้งานได้จริงและตรวจสอบได้",
  "มาตรฐานเดียวกันทั้งทีมพัฒนา ทีมปฏิบัติการ และทีมส่งมอบ",
  "ออกแบบเพื่อรองรับการเติบโตโดยลดงานตั้งค่าซ้ำ",
  "เอกสารและแนวปฏิบัติเป็นส่วนหนึ่งของผลิตภัณฑ์ ไม่ใช่ภาคผนวก",
];

export default function PlatformPage() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Platform", path: "/platform" }]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">Platform / Architecture</p>
          <h1 className="ui-h1">สถาปัตยกรรมที่ทำให้ทีมพัฒนาเริ่มเร็ว ส่งมอบไว และควบคุมมาตรฐานได้</h1>
          <p className="mt-6 max-w-3xl ui-p">
            Gumon Platform ถูกออกแบบเพื่อแก้ปัญหาโครงสร้างซ้ำซ้อนที่เกิดขึ้นในทุกโครงการ
            โดยทำให้ทีมเริ่มจากมาตรฐานตั้งต้นที่พร้อมใช้งานและขยายต่อได้ในระยะยาว.
          </p>
        </Reveal>

        <div className="mt-10 card p-4 shadow-soft">
          <Image
            src="/assets/from-gumon/gumon_arc.png"
            alt="Gumon platform architecture"
            width={1600}
            height={900}
            className="mx-auto w-full h-auto max-h-[52vh] md:max-h-[60vh] lg:max-h-[68vh] object-contain rounded-xl border border-line/40 bg-bg1"
          />
          <div className="mt-3 px-1">
            <TrackedLink
              href="/assets/from-gumon/gumon_arc.png"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-xs md:text-sm text-ink underline underline-offset-4 decoration-accent hover:decoration-ink"
            >
              เปิดภาพ Architecture ขนาดเต็ม
            </TrackedLink>
          </div>
          <p className="mt-4 px-1 text-xs md:text-sm text-mist leading-relaxed">
            Architecture reference นี้ใช้เพื่อจัดแนวทางคิดร่วมกันระหว่างทีม ไม่ได้บังคับรูปแบบพัฒนาเพียงแบบเดียว
            แต่ช่วยลดความคลาดเคลื่อนในการออกแบบและส่งมอบ.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {architectureLayers.map((layer, index) => (
            <Reveal key={layer.title} delay={index * 70}>
              <div className="route-card h-full">
                <p className="ui-kicker">Layer</p>
                <h2 className="mt-3 ui-h3">{layer.title}</h2>
                <p className="mt-2 text-sm text-mist leading-relaxed">{layer.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-5">
          <div className="card p-7 shadow-soft">
            <p className="ui-kicker">Core Services</p>
            <h2 className="mt-3 ui-h2">องค์ประกอบที่ทีมสามารถนำไปใช้ซ้ำได้ทันที</h2>
            <ul className="mt-5 grid gap-2 feature-list">
              {coreServices.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>

          <div className="card p-7 shadow-soft">
            <p className="ui-kicker">Platform Principles</p>
            <h2 className="mt-3 ui-h2">หลักการออกแบบที่ทำให้ระบบไม่พังเมื่อทีมโต</h2>
            <ul className="mt-5 grid gap-2 feature-list">
              {platformPrinciples.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <TrackedLink href="/developers" className="btn-primary">
                ไปที่ Developer Path
              </TrackedLink>
              <TrackedLink href="/contact" className="btn-secondary">
                คุยโจทย์กับทีม
              </TrackedLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
