import Image from "next/image";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
// import ContactLeadForm from "@/components/ContactLeadForm";
import EmailContactCard from "@/components/EmailContactCard";
import { companyInfo } from "@/lib/companyInfo";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact",
  description:
    "ติดต่อทีม Gumon สำหรับคำถามด้านเทคนิค ความร่วมมือกับพาร์ตเนอร์ หรือการเริ่มใช้งานแพลตฟอร์ม",
  path: "/contact",
});

const routes = [
  {
    title: "ปรึกษาด้านเทคนิค",
    body: "ต้องการประเมินสถาปัตยกรรม ระบบเดิม หรือแนวทางย้ายระบบ",
    action: "เริ่มคุยกับทีม",
    href: "#contact-form",
  },
  {
    title: "ความร่วมมือกับพาร์ตเนอร์",
    body: "ต้องการหารือรูปแบบความร่วมมือทางธุรกิจและการส่งมอบ",
    action: "คุยเรื่องความร่วมมือ",
    href: "#contact-form",
  },
  {
    title: "สอบถามข้อมูลทั่วไป",
    body: "ต้องการรู้จักบริการและแนวทางเริ่มใช้งานแพลตฟอร์ม",
    action: "ดูช่องทางติดต่อ",
    href: "#contact-form",
  },
];

const socialChannels = [
  {
    name: "LINE OA",
    href: "https://lin.ee/BLe8er3",
    handle: "lin.ee/BLe8er3",
    icon: "/assets/social/line.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/gumon",
    handle: "linkedin.com/company/gumon",
    icon: "/assets/social/linkedin.svg",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/gumon.tech",
    handle: "facebook.com/gumon.tech",
    icon: "/assets/social/facebook.svg",
  },
] as const;

export default function ContactPage() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Contact", path: "/contact" }]} />
      <div className="ui-container">
        <p className="ui-kicker">Contact / Start Here</p>
        <h1 className="ui-h1">คุยกับทีม Gumon เพื่อเริ่มโครงการให้เร็วและตรงเป้าหมาย</h1>
        <p className="mt-6 max-w-2xl ui-p">
          แชร์โจทย์ของคุณเบื้องต้น แล้วทีมจะช่วยแนะนำแนวทางเริ่มต้นที่เหมาะกับบริบทธุรกิจและเทคนิคขององค์กร
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <div className="glass rounded-xl border border-line/35 p-4">
            <div className="text-[11px] tracking-[0.16em] uppercase text-mist">เวลาตอบกลับ</div>
            <div className="mt-2 text-sm text-ink font-medium">ตอบกลับครั้งแรกโดยทั่วไปภายใน 1 วันทำการ</div>
          </div>
          <div className="glass rounded-xl border border-line/35 p-4">
            <div className="text-[11px] tracking-[0.16em] uppercase text-mist">รูปแบบการให้คำแนะนำ</div>
            <div className="mt-2 text-sm text-ink font-medium">ได้รับแนวทางเริ่มต้นที่เชื่อมกับโจทย์ธุรกิจและเทคนิค</div>
          </div>
          <div className="glass rounded-xl border border-line/35 p-4">
            <div className="text-[11px] tracking-[0.16em] uppercase text-mist">ขอบเขตที่ครอบคลุม</div>
            <div className="mt-2 text-sm text-ink font-medium">ครอบคลุมทั้งประเมินระบบเดิมและแผนส่งมอบ</div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {routes.map((item) => (
            <div key={item.title} className="route-card h-full">
              <h2 className="ui-h3">{item.title}</h2>
              <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
              <TrackedLink
                href={item.href}
                className="mt-5 inline-block text-sm text-ink underline underline-offset-4 decoration-accent hover:decoration-ink"
              >
                {item.action}
              </TrackedLink>
            </div>
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div id="contact-form" className="lg:col-span-7 card p-7 shadow-soft">
            <p className="ui-kicker">Project Brief</p>
            <h2 className="mt-3 ui-h2">เตรียมข้อมูลสำคัญก่อนเริ่มคุยโปรเจกต์</h2>
            <p className="mt-3 text-sm text-mist leading-relaxed">
              ยิ่งข้อมูลชัด ทีมยิ่งประเมินและตอบกลับได้เร็ว ทั้งด้านเทคนิค แผนส่งมอบ และแนวทางการร่วมงาน
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-mist">
              <li>- ปัญหาหลักที่ต้องการแก้ใน 1-2 ไตรมาสข้างหน้า</li>
              <li>- ข้อมูลระบบเดิมหรือข้อจำกัดที่มีผลต่อการส่งมอบ</li>
              <li>- ผลลัพธ์ทางธุรกิจที่อยากเห็นหลังเริ่มโครงการ</li>
            </ul>
            {/* TODO: เปิดใช้งาน ContactLeadForm เมื่อฝั่ง Server/API พร้อม
            <div className="mt-6">
              <ContactLeadForm />
            </div>
            */}
            <div className="mt-6 rounded-xl border border-dashed border-line/45 bg-bg1/45 p-4 text-sm text-mist">
              เริ่มต้นติดต่อได้ทันทีผ่านอีเมลหรือ Social ในช่องขวามือ ทีมจะประสานงานกลับโดยเร็ว
            </div>
            <div id="dsar-request" className="mt-4 rounded-xl border border-line/35 bg-bg1/55 p-4 text-sm text-mist scroll-mt-28">
              คำขอด้านข้อมูลส่วนบุคคล (เช่น ขอเข้าถึง แก้ไข หรือลบข้อมูล) ส่งได้ที่{" "}
              <a href="mailto:data@gumon.io?subject=[DSAR]%20คำขอสิทธิข้อมูลส่วนบุคคล" className="text-ink underline underline-offset-4 decoration-accent hover:decoration-ink transition">
                data@gumon.io
              </a>{" "}
              โดยระบุหัวข้ออีเมลขึ้นต้นว่า <span className="text-ink">[DSAR]</span>
            </div>
          </div>

          <div className="lg:col-span-5 card p-7 shadow-soft">
            <p className="ui-kicker">Direct Contact</p>
            <h2 className="mt-3 ui-h3">ช่องทางติดต่อหลัก</h2>
            <div className="mt-4 grid gap-3 text-sm">
              <EmailContactCard
                email="contact@gumon.io"
                subject="สอบถามข้อมูล จากเว็บไซต์ Gumon"
              />
            </div>

            <div className="mt-6">
              <p className="ui-kicker">Company Information</p>
              <div className="mt-3 card p-4 text-sm text-mist leading-relaxed">
                <div className="text-ink font-medium">{companyInfo.legalName}</div>
                <div className="mt-2">{companyInfo.address}</div>
                <div className="mt-2">เลขทะเบียนนิติบุคคล {companyInfo.registrationNumber}</div>
                <div>วันที่จดทะเบียน {companyInfo.registeredAt}</div>
              </div>
            </div>

            <div className="mt-6">
              <p className="ui-kicker">Social Media</p>
              <div className="mt-3 grid gap-3 text-sm">
                {socialChannels.map((item) => (
                  <TrackedLink
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="card p-4 hover:border-ink/30 transition flex items-center gap-3"
                  >
                    <div className="h-9 w-9 rounded-full border border-line/40 bg-bg1 flex items-center justify-center">
                      <Image
                        src={item.icon}
                        alt={`${item.name} logo`}
                        width={20}
                        height={20}
                        sizes="20px"
                        loading="lazy"
                        decoding="async"
                        className="opacity-90 brightness-0 invert"
                      />
                    </div>
                    <div>
                      <div className="text-[11px] tracking-[0.16em] uppercase text-mist">{item.name}</div>
                      <div className="mt-1 text-ink">{item.handle}</div>
                    </div>
                  </TrackedLink>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="ui-kicker">Knowledge Channels</p>
              <div className="mt-3 flex flex-col gap-3">
                <TrackedLink href="https://docs.gumon.io/" target="_blank" rel="noreferrer" className="btn-secondary">
                  Developer Documentation
                </TrackedLink>
                <TrackedLink href="https://wiki.gumon.io/" target="_blank" rel="noreferrer" className="btn-secondary">
                  Knowledge Base
                </TrackedLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
