import Image from "next/image";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import ContactLeadForm from "@/components/ContactLeadForm";
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
    action: "กรอกฟอร์มปรึกษา",
    href: "#contact-form",
  },
  {
    title: "ความร่วมมือกับพาร์ตเนอร์",
    body: "ต้องการหารือรูปแบบความร่วมมือทางธุรกิจและการส่งมอบ",
    action: "ส่งข้อมูลเพื่อนัดคุย",
    href: "#contact-form",
  },
  {
    title: "สอบถามข้อมูลทั่วไป",
    body: "ต้องการรู้จักบริการและแนวทางเริ่มใช้งานแพลตฟอร์ม",
    action: "ติดต่อทีมงาน",
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
          ระบุโจทย์ของคุณสั้น ๆ แล้วส่งผ่านฟอร์มได้ทันที ทีมจะติดต่อกลับพร้อมแนวทางที่เหมาะกับองค์กรของคุณ.
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
              <TrackedLink href={item.href} className="mt-5 inline-block text-sm text-ink underline underline-offset-4 decoration-accent hover:decoration-ink">
                {item.action}
              </TrackedLink>
            </div>
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div id="contact-form" className="lg:col-span-7 card p-7 shadow-soft">
            <p className="ui-kicker">Contact Form</p>
            <h2 className="mt-3 ui-h2">ส่งข้อมูลโครงการเพื่อให้ทีมตอบได้ตรงประเด็น</h2>
            <p className="mt-3 text-sm text-mist leading-relaxed">
              ยิ่งข้อมูลชัด ทีมยิ่งประเมินและตอบกลับได้เร็ว ทั้งด้านเทคนิค แผนส่งมอบ และการร่วมงานเชิงธุรกิจ.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-mist">
              <li>- ปัญหาหลักที่ต้องการแก้ใน 1-2 ไตรมาสข้างหน้า</li>
              <li>- ข้อมูลระบบเดิมหรือข้อจำกัดที่มีผลต่อการส่งมอบ</li>
              <li>- ผลลัพธ์ทางธุรกิจที่อยากเห็นหลังเริ่มโครงการ</li>
            </ul>
            <div className="mt-6">
              <ContactLeadForm />
            </div>
          </div>

          <div className="lg:col-span-5 card p-7 shadow-soft">
            <p className="ui-kicker">Direct Contact</p>
            <h2 className="mt-3 ui-h3">ช่องทางติดต่อหลัก</h2>
            <div className="mt-4 grid gap-3 text-sm">
              <TrackedLink href="mailto:contact@gumon.io" className="card p-4 hover:border-ink/30 transition">
                <div className="text-[11px] tracking-[0.16em] uppercase text-mist">Email</div>
                <div className="mt-1 text-ink">contact@gumon.io</div>
              </TrackedLink>
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
                <TrackedLink href="https://docs.gumon.io/" target="_blank" rel="noreferrer" className="btn-secondary">Developer Documentation</TrackedLink>
                <TrackedLink href="https://wiki.gumon.io/" target="_blank" rel="noreferrer" className="btn-secondary">Knowledge Base</TrackedLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
