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
    body: "จัดการ business workflows และ front-facing services ให้ปรับเปลี่ยนได้เร็วโดยไม่ทำให้ระบบรวมเปราะบาง",
  },
  {
    title: "API Service Layer",
    body: "กำหนด service contracts และ integration pattern กลาง เพื่อให้หลายทีมทำงานร่วมกันได้อย่างคาดการณ์ได้",
  },
  {
    title: "Data Stream Layer",
    body: "รองรับ event pipeline, async processing และ observability สำหรับระบบที่ต้องรองรับปริมาณงานจริง",
  },
];

const coreServices = [
  "Gumon Core สำหรับโครงสร้างเริ่มต้นของระบบ",
  "Auth / Access Control / Profile สำหรับ identity และสิทธิ์การเข้าถึง",
  "Notification / Schedule / Storage สำหรับ service utilities ที่ใช้ซ้ำได้",
  "CLI commands สำหรับ init, configure, run และ scale ระบบอย่างเป็นมาตรฐาน",
];

const platformPrinciples = [
  "Open core ใช้งานได้จริงและตรวจสอบได้",
  "มาตรฐานเดียวกันทั้งทีมพัฒนา ทีม operation และทีมส่งมอบ",
  "ออกแบบเพื่อ scale โดยลดงานตั้งค่าซ้ำ",
  "เอกสารและ playbook เป็นส่วนหนึ่งของผลิตภัณฑ์ ไม่ใช่ภาคผนวก",
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
            โดยทำให้ทีมเริ่มจาก baseline ที่พร้อมใช้งานและขยายต่อได้ในระยะยาว.
          </p>
        </Reveal>

        <div className="mt-10 card p-4 shadow-soft">
          <Image
            src="/assets/from-gumon/gumon_arc.png"
            alt="Gumon platform architecture"
            width={1600}
            height={900}
            className="w-full h-auto rounded-xl border border-line/40 bg-bg1"
          />
          <p className="mt-4 px-1 text-xs md:text-sm text-mist leading-relaxed">
            Architecture reference นี้ใช้เพื่อ align วิธีคิดร่วมกันระหว่างทีม ไม่ได้บังคับ implementation เดียว
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
              <TrackedLink href="/developers" eventName="platform_nextstep_click" category="navigation" label="platform-to-developers" location="platform.next-step" className="btn-primary">
                ไปที่ Developer Path
              </TrackedLink>
              <TrackedLink href="/contact" eventName="platform_nextstep_click" category="contact" label="platform-to-contact" location="platform.next-step" className="btn-secondary">
                คุยโจทย์กับทีม
              </TrackedLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
