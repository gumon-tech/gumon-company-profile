import type { Metadata } from "next";
import Image from "next/image";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import EmailContactCard from "@/components/EmailContactCard";
import { companyInfo } from "@/lib/companyInfo";
import { buildPageMetadata } from "@/lib/seo";
import { resolveLocale, type Locale } from "@/lib/i18n";

type ContactCopy = {
  title: string;
  description: string;
  crumb: string;
  kicker: string;
  heading: string;
  intro: string;
  metrics: { label: string; value: string }[];
  routes: { title: string; body: string; action: string; href: string }[];
  projectBriefKicker: string;
  projectBriefHeading: string;
  projectBriefBody: string;
  projectBriefItems: string[];
  projectBriefNote: string;
  dsarIntro: string;
  dsarSubjectPrefix: string;
  directContactKicker: string;
  directContactHeading: string;
  emailSubject: string;
  companyInfoKicker: string;
  registrationLabel: string;
  registeredAtLabel: string;
  socialKicker: string;
  knowledgeKicker: string;
  docsLabel: string;
  kbLabel: string;
};

const localizedMeta: Partial<Record<Locale, { title: string; description: string }>> = {
  th: {
    title: "Contact",
    description: "ติดต่อทีม Gumon สำหรับคำถามด้านเทคนิค ความร่วมมือกับพาร์ตเนอร์ หรือการเริ่มใช้งานแพลตฟอร์ม",
  },
  en: {
    title: "Contact",
    description: "Contact Gumon for technical planning, partner collaboration, or platform onboarding.",
  },
};

const fallbackNoticeByLocale: Partial<Record<Locale, string>> = {
  "zh-CN": "当前语言版本正在本地化中。以下内容暂以英文提供。",
  ja: "現在この言語版はローカライズ中です。以下は英語版です。",
  ko: "현재 해당 언어 버전은 현지화 중입니다. 아래 내용은 영어로 제공됩니다.",
  es: "Esta versión del idioma está en localización. El contenido se muestra en inglés temporalmente.",
  fr: "Cette version est en cours de localisation. Le contenu ci-dessous est temporairement en anglais.",
  de: "Diese Sprachversion wird derzeit lokalisiert. Der folgende Inhalt wird vorübergehend auf Englisch angezeigt.",
  "pt-BR": "Esta versão de idioma está em localização. O conteúdo abaixo é exibido temporariamente em inglês.",
  ar: "هذه النسخة اللغوية قيد التوطين حالياً. يتم عرض المحتوى أدناه باللغة الإنجليزية مؤقتاً.",
};

const socialChannels = [
  { name: "LINE OA", href: "https://lin.ee/BLe8er3", handle: "lin.ee/BLe8er3", icon: "/assets/social/line.svg" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/gumon", handle: "linkedin.com/company/gumon", icon: "/assets/social/linkedin.svg" },
  { name: "Facebook", href: "https://facebook.com/gumon.tech", handle: "facebook.com/gumon.tech", icon: "/assets/social/facebook.svg" },
] as const;

const contactCopyByLocale: Record<"th" | "en", ContactCopy> = {
  th: {
    title: "Contact",
    description: "ติดต่อทีม Gumon สำหรับคำถามด้านเทคนิค ความร่วมมือกับพาร์ตเนอร์ หรือการเริ่มใช้งานแพลตฟอร์ม",
    crumb: "Contact",
    kicker: "Contact / Start Here",
    heading: "คุยกับทีม Gumon เพื่อเริ่มโครงการให้เร็วและตรงเป้าหมาย",
    intro: "แชร์โจทย์ของคุณเบื้องต้น แล้วทีมจะช่วยแนะนำแนวทางเริ่มต้นที่เหมาะกับบริบทธุรกิจและเทคนิคขององค์กร",
    metrics: [
      { label: "เวลาตอบกลับ", value: "ตอบกลับครั้งแรกโดยทั่วไปภายใน 1 วันทำการ" },
      { label: "รูปแบบการให้คำแนะนำ", value: "ได้รับแนวทางเริ่มต้นที่เชื่อมกับโจทย์ธุรกิจและเทคนิค" },
      { label: "ขอบเขตที่ครอบคลุม", value: "ครอบคลุมทั้งประเมินระบบเดิมและแผนส่งมอบ" },
    ],
    routes: [
      { title: "ปรึกษาด้านเทคนิค", body: "ต้องการประเมินสถาปัตยกรรม ระบบเดิม หรือแนวทางย้ายระบบ", action: "เริ่มคุยกับทีม", href: "#contact-form" },
      { title: "ความร่วมมือกับพาร์ตเนอร์", body: "ต้องการหารือรูปแบบความร่วมมือทางธุรกิจและการส่งมอบ", action: "คุยเรื่องความร่วมมือ", href: "#contact-form" },
      { title: "สอบถามข้อมูลทั่วไป", body: "ต้องการรู้จักบริการและแนวทางเริ่มใช้งานแพลตฟอร์ม", action: "ดูช่องทางติดต่อ", href: "#contact-form" },
    ],
    projectBriefKicker: "Project Brief",
    projectBriefHeading: "เตรียมข้อมูลสำคัญก่อนเริ่มคุยโปรเจกต์",
    projectBriefBody: "ยิ่งข้อมูลชัด ทีมยิ่งประเมินและตอบกลับได้เร็ว ทั้งด้านเทคนิค แผนส่งมอบ และแนวทางการร่วมงาน",
    projectBriefItems: [
      "ปัญหาหลักที่ต้องการแก้ใน 1-2 ไตรมาสข้างหน้า",
      "ข้อมูลระบบเดิมหรือข้อจำกัดที่มีผลต่อการส่งมอบ",
      "ผลลัพธ์ทางธุรกิจที่อยากเห็นหลังเริ่มโครงการ",
    ],
    projectBriefNote: "เริ่มต้นติดต่อได้ทันทีผ่านอีเมลหรือ Social ในช่องขวามือ ทีมจะประสานงานกลับโดยเร็ว",
    dsarIntro: "คำขอด้านข้อมูลส่วนบุคคล (เช่น ขอเข้าถึง แก้ไข หรือลบข้อมูล) ส่งได้ที่",
    dsarSubjectPrefix: "โดยระบุหัวข้ออีเมลขึ้นต้นว่า",
    directContactKicker: "Direct Contact",
    directContactHeading: "ช่องทางติดต่อหลัก",
    emailSubject: "สอบถามข้อมูล จากเว็บไซต์ Gumon",
    companyInfoKicker: "Company Information",
    registrationLabel: "เลขทะเบียนนิติบุคคล",
    registeredAtLabel: "วันที่จดทะเบียน",
    socialKicker: "Social Media",
    knowledgeKicker: "Knowledge Channels",
    docsLabel: "Developer Documentation",
    kbLabel: "Knowledge Base",
  },
  en: {
    title: "Contact",
    description: "Contact Gumon for technical planning, partner collaboration, or platform onboarding.",
    crumb: "Contact",
    kicker: "Contact / Start Here",
    heading: "Talk with Gumon to start your project faster and with clear execution goals",
    intro: "Share your initial context and our team will suggest a practical starting path aligned with your business and technical constraints.",
    metrics: [
      { label: "Response Time", value: "First response is typically within 1 business day" },
      { label: "Advisory Format", value: "Initial guidance mapped to both business and technical priorities" },
      { label: "Coverage", value: "Covers baseline assessment and delivery planning" },
    ],
    routes: [
      { title: "Technical Consultation", body: "Architecture review, legacy assessment, or migration planning", action: "Start with Team", href: "#contact-form" },
      { title: "Partner Collaboration", body: "Discuss commercial collaboration and delivery model", action: "Discuss Partnership", href: "#contact-form" },
      { title: "General Inquiry", body: "Understand services and onboarding paths", action: "View Contact Paths", href: "#contact-form" },
    ],
    projectBriefKicker: "Project Brief",
    projectBriefHeading: "Prepare key information before discussion",
    projectBriefBody: "The clearer the context, the faster the team can assess technical scope, delivery plan, and collaboration options.",
    projectBriefItems: [
      "Primary problems to solve in the next 1-2 quarters",
      "Current system context and constraints affecting delivery",
      "Business outcomes expected after kickoff",
    ],
    projectBriefNote: "You can contact us directly via email or social channels in the right panel. Our team will coordinate with you promptly.",
    dsarIntro: "Personal data requests (such as access, correction, or deletion) can be sent to",
    dsarSubjectPrefix: "Please use email subject prefix",
    directContactKicker: "Direct Contact",
    directContactHeading: "Primary contact channel",
    emailSubject: "Inquiry from Gumon Website",
    companyInfoKicker: "Company Information",
    registrationLabel: "Registration Number",
    registeredAtLabel: "Registered At",
    socialKicker: "Social Media",
    knowledgeKicker: "Knowledge Channels",
    docsLabel: "Developer Documentation",
    kbLabel: "Knowledge Base",
  },
};

async function getLocaleFromParams(params?: Promise<{ locale?: string }>): Promise<Locale> {
  if (!params) return resolveLocale("th");
  const resolved = await params;
  return resolveLocale(resolved.locale);
}

function getCopy(locale: Locale): ContactCopy {
  return locale === "th" ? contactCopyByLocale.th : contactCopyByLocale.en;
}

export async function generateMetadata({ params }: { params?: Promise<{ locale?: string }> }): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  const localized = localizedMeta[locale] ?? localizedMeta.en ?? localizedMeta.th!;
  return buildPageMetadata({ title: localized.title, description: localized.description, path: "/contact" });
}

export default async function ContactPage({ params }: { params?: Promise<{ locale?: string }> }) {
  const locale = await getLocaleFromParams(params);
  const copy = getCopy(locale);
  const fallbackNotice = locale !== "th" && locale !== "en" ? fallbackNoticeByLocale[locale] : null;

  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: copy.crumb, path: "/contact" }]} />
      <div className="ui-container">
        <p className="ui-kicker">{copy.kicker}</p>
        <h1 className="ui-h1">{copy.heading}</h1>
        <p className="mt-6 max-w-2xl ui-p">{copy.intro}</p>

        {fallbackNotice ? <div className="mt-6 rounded-xl border border-line/45 bg-bg1/55 p-4 text-sm text-mist">{fallbackNotice}</div> : null}

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {copy.metrics.map((metric) => (
            <div key={metric.label} className="glass rounded-xl border border-line/35 p-4">
              <div className="text-[11px] tracking-[0.16em] uppercase text-mist">{metric.label}</div>
              <div className="mt-2 text-sm text-ink font-medium">{metric.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {copy.routes.map((item) => (
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
            <p className="ui-kicker">{copy.projectBriefKicker}</p>
            <h2 className="mt-3 ui-h2">{copy.projectBriefHeading}</h2>
            <p className="mt-3 text-sm text-mist leading-relaxed">{copy.projectBriefBody}</p>
            <ul className="mt-4 grid gap-2 text-sm text-mist">
              {copy.projectBriefItems.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl border border-dashed border-line/45 bg-bg1/45 p-4 text-sm text-mist">{copy.projectBriefNote}</div>
            <div id="dsar-request" className="mt-4 rounded-xl border border-line/35 bg-bg1/55 p-4 text-sm text-mist scroll-mt-28">
              {copy.dsarIntro}{" "}
              <a href="mailto:data@gumon.io?subject=[DSAR]%20Data%20Subject%20Request" className="text-ink underline underline-offset-4 decoration-accent hover:decoration-ink transition">
                data@gumon.io
              </a>{" "}
              {copy.dsarSubjectPrefix} <span className="text-ink">[DSAR]</span>
            </div>
          </div>

          <div className="lg:col-span-5 card p-7 shadow-soft">
            <p className="ui-kicker">{copy.directContactKicker}</p>
            <h2 className="mt-3 ui-h3">{copy.directContactHeading}</h2>
            <div className="mt-4 grid gap-3 text-sm">
              <EmailContactCard email="contact@gumon.io" subject={copy.emailSubject} />
            </div>

            <div className="mt-6">
              <p className="ui-kicker">{copy.companyInfoKicker}</p>
              <div className="mt-3 card p-4 text-sm text-mist leading-relaxed">
                <div className="text-ink font-medium">{companyInfo.legalName}</div>
                <div className="mt-2">{companyInfo.address}</div>
                <div className="mt-2">{copy.registrationLabel} {companyInfo.registrationNumber}</div>
                <div>{copy.registeredAtLabel} {companyInfo.registeredAt}</div>
              </div>
            </div>

            <div className="mt-6">
              <p className="ui-kicker">{copy.socialKicker}</p>
              <div className="mt-3 grid gap-3 text-sm">
                {socialChannels.map((item) => (
                  <TrackedLink key={item.name} href={item.href} target="_blank" rel="noreferrer" className="card p-4 hover:border-ink/30 transition flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full border border-line/40 bg-bg1 flex items-center justify-center">
                      <Image src={item.icon} alt={`${item.name} logo`} width={20} height={20} sizes="20px" loading="lazy" decoding="async" className="opacity-90 brightness-0 invert" />
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
              <p className="ui-kicker">{copy.knowledgeKicker}</p>
              <div className="mt-3 flex flex-col gap-3">
                <TrackedLink href="https://docs.gumon.io/" target="_blank" rel="noreferrer" className="btn-secondary">{copy.docsLabel}</TrackedLink>
                <TrackedLink href="https://wiki.gumon.io/" target="_blank" rel="noreferrer" className="btn-secondary">{copy.kbLabel}</TrackedLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
