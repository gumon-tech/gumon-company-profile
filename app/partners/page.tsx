import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/seo";
import { resolveLocale, type Locale } from "@/lib/i18n";

type Copy = {
  title: string;
  description: string;
  crumb: string;
  kicker: string;
  heading: string;
  intro: string;
  modelLabel: string;
  readinessKicker: string;
  readinessHeading: string;
  governanceKicker: string;
  governanceHeading: string;
  trustKicker: string;
  trustHeading: string;
  casesKicker: string;
  casesHeading: string;
  resourcesKicker: string;
  resourcesHeading: string;
  nextKicker: string;
  nextHeading: string;
  nextBody: string;
  companyCta: string;
  contactCta: string;
  resourceCta: string;
  modelBlocks: { title: string; body: string }[];
  readiness: string[];
  governance: { title: string; body: string }[];
  trustSignals: { label: string; value: string }[];
  cases: { title: string; problem: string; approach: string; outcome: string }[];
};

const partnerNetwork = [
  { name: "Asia Connect Corporation", country: "Thailand", website: "https://www.asiaconnectth.com", logo: "/assets/partners/asia-connect.png", logoScaleClass: "partner-logo-scale-98", logoFrameClass: "partner-logo-badge-circle" },
  { name: "AC Academys", country: "Thailand", website: "https://acacademys.com", logo: "/assets/partners/ac-academys.png", logoScaleClass: "partner-logo-scale-92", logoFrameClass: "partner-logo-badge-circle" },
  { name: "Olufy-X", country: "Thailand", website: "https://olufy.com", logo: "/assets/partners/olufy-x.png", logoScaleClass: "partner-logo-scale-90", logoFrameClass: "partner-logo-badge-circle" },
  { name: "Taitam-D", country: "United Kingdom", website: "https://taitam-d.com", logo: "/assets/partners/taitam-d.png", logoScaleClass: "partner-logo-scale-88", logoFrameClass: "partner-logo-badge-circle" },
];

const th: Copy = {
  title: "Partners",
  description: "แนวทางสำหรับพาร์ตเนอร์ที่ต้องการส่งมอบโครงการบนมาตรฐานเดียวกับ Gumon และขยายงานเชิงพาณิชย์ได้อย่างต่อเนื่อง",
  crumb: "Partners",
  kicker: "Partners / แนวทางการทำงานร่วมกัน",
  heading: "โมเดลความร่วมมือที่ช่วยให้พาร์ตเนอร์ส่งมอบได้เร็วและรักษามาตรฐานได้จริง",
  intro: "เราแบ่งบทบาทให้ชัดตั้งแต่ต้น: Gumon พัฒนาแพลตฟอร์มและมาตรฐานกลาง ส่วนพาร์ตเนอร์นำไปส่งมอบงานในตลาดจริงได้อย่างมั่นใจ",
  modelLabel: "Model",
  readinessKicker: "Readiness Checklist",
  readinessHeading: "ความพร้อมเบื้องต้นก่อนเริ่ม collaboration",
  governanceKicker: "Governance & Fair-Play",
  governanceHeading: "หลักการทำงานร่วมกันเพื่อรักษาความไว้วางใจใน ecosystem",
  trustKicker: "Trust Proof",
  trustHeading: "หลักฐานการทำงานร่วมกันในโครงการส่งมอบจริง",
  casesKicker: "Mini Cases",
  casesHeading: "ตัวอย่างผลลัพธ์จากการทำงานร่วมกันแบบ shared model",
  resourcesKicker: "Partner Resources",
  resourcesHeading: "ชุดเครื่องมือสำหรับทีมส่งมอบ",
  nextKicker: "Next Step",
  nextHeading: "พร้อมเริ่มประเมินโอกาสร่วมงานแล้วหรือยัง",
  nextBody: "ส่งข้อมูลอุตสาหกรรม โครงสร้างทีม และเป้าหมายเชิงธุรกิจของคุณมาได้ เพื่อให้ทีมช่วยวางแนวทางร่วมงานที่เหมาะสมได้ทันที",
  companyCta: "ดูภาพรวมองค์กร",
  contactCta: "ติดต่อทีมพาร์ตเนอร์ทันที",
  resourceCta: "เปิด Resource Hub",
  modelBlocks: [
    { title: "Platform Ownership", body: "Gumon ดูแลแกนแพลตฟอร์ม มาตรฐานกลาง และเครื่องมือหลัก" },
    { title: "Commercial Delivery", body: "พาร์ตเนอร์รับผิดชอบการส่งมอบงานเชิงธุรกิจและผลลัพธ์ปลายทางของลูกค้า" },
    { title: "Shared Enablement", body: "ทั้งสองฝ่ายใช้แนวทางทำงานชุดเดียวกัน เพื่อให้คุณภาพการส่งมอบสม่ำเสมอ" },
  ],
  readiness: [
    "มีทีม delivery ที่ดูแลโครงการได้ต่อเนื่อง",
    "มีความสามารถด้าน solution architecture และ implementation",
    "พร้อมทำงานบน shared standards และ quality gates",
    "ต้องการขยายหลายโครงการโดยคุมคุณภาพได้",
  ],
  governance: [
    { title: "Open Source Integrity", body: "รักษาแกนแพลตฟอร์มแบบเปิดให้ตรวจสอบได้ และไม่เปลี่ยนขอบเขตแกนหลักโดยเอื้อรายใดรายหนึ่ง" },
    { title: "Non-Intrusion Boundary", body: "Gumon ไม่แข่งขันกับพาร์ตเนอร์ในงานส่งมอบปลายทาง และยึดบทบาทแพลตฟอร์มอย่างชัดเจน" },
    { title: "Compatibility Standards", body: "ส่วนขยายและบริการที่เชื่อมบนแพลตฟอร์มต้องยึดมาตรฐานกลางเพื่อรักษาคุณภาพร่วม" },
  ],
  trustSignals: [
    { label: "Partner Organizations", value: `${partnerNetwork.length}+` },
    { label: "Operating Countries", value: `${new Set(partnerNetwork.map((item) => item.country)).size}` },
    { label: "Enablement Channels", value: "Docs + Wiki + Work + Training" },
  ],
  cases: [
    { title: "Public Sector Delivery", problem: "ทีมส่งมอบหลายชุดใช้มาตรฐานต่างกัน ทำให้คุณภาพงานไม่คงที่", approach: "จัด shared standards และรีวิวคุณภาพร่วมกับทีมแพลตฟอร์มก่อนปล่อยงาน", outcome: "ยกระดับความสม่ำเสมอของงานส่งมอบระหว่างทีมพาร์ตเนอร์" },
    { title: "Cross-Border Collaboration", problem: "การทำงานข้ามประเทศทำให้การส่งต่อความรู้และเอกสารไม่ต่อเนื่อง", approach: "ใช้ docs + knowledge base ชุดเดียวกันและตั้งรอบ sync กลาง", outcome: "ลดงานซ้ำจากความเข้าใจไม่ตรงกันและเร่งการเริ่มงานรอบใหม่" },
  ],
};

const en: Copy = {
  title: "Partners",
  description: "Collaboration model for partners delivering projects on shared Gumon standards.",
  crumb: "Partners",
  kicker: "Partners / Collaboration Model",
  heading: "A partner model built for fast delivery and consistent quality",
  intro: "Roles are clear from day one: Gumon maintains the platform core and shared standards while partners lead commercial delivery in market contexts.",
  modelLabel: "Model",
  readinessKicker: "Readiness Checklist",
  readinessHeading: "Minimum readiness before collaboration",
  governanceKicker: "Governance & Fair-Play",
  governanceHeading: "Principles that protect trust in the ecosystem",
  trustKicker: "Trust Proof",
  trustHeading: "Signals from practical delivery collaborations",
  casesKicker: "Mini Cases",
  casesHeading: "Examples from shared delivery execution",
  resourcesKicker: "Partner Resources",
  resourcesHeading: "Tooling and enablement channels for partner teams",
  nextKicker: "Next Step",
  nextHeading: "Ready to evaluate collaboration potential",
  nextBody: "Share your industry context, team structure, and delivery goals so we can propose a practical collaboration path.",
  companyCta: "View Company Overview",
  contactCta: "Contact Partner Team",
  resourceCta: "Open Resource Hub",
  modelBlocks: [
    { title: "Platform Ownership", body: "Gumon maintains the platform core, standards, and key tooling." },
    { title: "Commercial Delivery", body: "Partners own customer-facing execution and business outcomes." },
    { title: "Shared Enablement", body: "Both sides operate under common practices to keep delivery quality consistent." },
  ],
  readiness: [
    "Sustainable delivery team capacity",
    "Solution architecture and implementation capability",
    "Readiness to follow shared standards and quality gates",
    "Ability to scale across multiple projects",
  ],
  governance: [
    { title: "Open Source Integrity", body: "Keep platform core open and auditable without biasing core decisions to any single party." },
    { title: "Non-Intrusion Boundary", body: "Gumon does not compete with partners in end delivery and keeps platform role boundaries clear." },
    { title: "Compatibility Standards", body: "Extensions and services must align with common standards to preserve ecosystem quality." },
  ],
  trustSignals: [
    { label: "Partner Organizations", value: `${partnerNetwork.length}+` },
    { label: "Operating Countries", value: `${new Set(partnerNetwork.map((item) => item.country)).size}` },
    { label: "Enablement Channels", value: "Docs + Wiki + Work + Training" },
  ],
  cases: [
    { title: "Public Sector Delivery", problem: "Multiple delivery teams worked with inconsistent standards.", approach: "Introduced shared standards and joint quality reviews before release.", outcome: "Improved consistency across partner delivery teams." },
    { title: "Cross-Border Collaboration", problem: "Cross-country collaboration caused handover gaps.", approach: "Used shared docs and knowledge base with recurring sync cycles.", outcome: "Reduced duplicated work and improved ramp-up speed." },
  ],
};

const fallbackNoticeByLocale: Partial<Record<Locale, string>> = {
  "zh-CN": "当前语言版本正在本地化中。以下内容暂以英文提供。",
  ja: "現在この言語版はローカライズ中です。以下は英語版です。",
  ko: "현재 해당 언어 버전은 현지화 중입니다. 아래 내용은 영어로 제공됩니다。",
  es: "Esta versión del idioma está en localización. El contenido se muestra en inglés temporalmente.",
  fr: "Cette version est en cours de localisation. Le contenu ci-dessous est temporairement en anglais.",
  de: "Diese Sprachversion wird derzeit lokalisiert. Der folgende Inhalt wird vorübergehend auf Englisch angezeigt.",
  "pt-BR": "Esta versão de idioma está em localização. O conteúdo abaixo é exibido temporariamente em inglês.",
  ar: "هذه النسخة اللغوية قيد التوطين حالياً. يتم عرض المحتوى أدناه باللغة الإنجليزية مؤقتاً.",
};

function copyFor(locale: Locale): Copy {
  return locale === "th" ? th : en;
}

async function getLocale(params?: Promise<{ locale?: string }>): Promise<Locale> {
  if (!params) return resolveLocale("th");
  const resolved = await params;
  return resolveLocale(resolved.locale);
}

export async function generateMetadata({ params }: { params?: Promise<{ locale?: string }> }): Promise<Metadata> {
  const locale = await getLocale(params);
  const copy = copyFor(locale);
  return buildPageMetadata({ title: copy.title, description: copy.description, path: "/partners" });
}

export default async function PartnersPage({ params }: { params?: Promise<{ locale?: string }> }) {
  const locale = await getLocale(params);
  const copy = copyFor(locale);
  const fallbackNotice = locale !== "th" && locale !== "en" ? fallbackNoticeByLocale[locale] : null;

  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: copy.crumb, path: "/partners" }]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">{copy.kicker}</p>
          <h1 className="ui-h1">{copy.heading}</h1>
          <p className="mt-6 max-w-3xl ui-p">{copy.intro}</p>
        </Reveal>

        {fallbackNotice ? <div className="mt-6 rounded-xl border border-line/45 bg-bg1/55 p-4 text-sm text-mist">{fallbackNotice}</div> : null}

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {copy.modelBlocks.map((block, index) => (
            <Reveal key={block.title} delay={index * 70}>
              <div className="route-card h-full">
                <p className="ui-kicker">{copy.modelLabel}</p>
                <h2 className="mt-3 ui-h3">{block.title}</h2>
                <p className="mt-2 text-sm text-mist leading-relaxed">{block.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">{copy.readinessKicker}</p>
          <h2 className="mt-3 ui-h2">{copy.readinessHeading}</h2>
          <ul className="mt-5 grid gap-2 feature-list">{copy.readiness.map((item) => <li key={item}>- {item}</li>)}</ul>
        </div>

        <div className="mt-12">
          <p className="ui-kicker">{copy.governanceKicker}</p>
          <h2 className="mt-3 ui-h2">{copy.governanceHeading}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {copy.governance.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="route-card h-full">
                  <h3 className="ui-h3">{item.title}</h3>
                  <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="ui-kicker">{copy.trustKicker}</p>
              <h2 className="mt-2 ui-h2">{copy.trustHeading}</h2>
            </div>
            <TrackedLink href="/company" className="btn-secondary w-fit">{copy.companyCta}</TrackedLink>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-3">
            {copy.trustSignals.map((item) => (
              <div key={item.label} className="glass rounded-xl border border-line/35 px-4 py-4">
                <div className="text-[10px] tracking-[0.18em] uppercase text-mist">{item.label}</div>
                <div className="mt-2 text-xl font-semibold text-ink">{item.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {partnerNetwork.map((partner) => (
              <TrackedLink key={partner.name} href={partner.website} target="_blank" rel="noreferrer" className="partner-item">
                <div className={`partner-logo-badge ${partner.logoFrameClass ?? "partner-logo-badge-circle"}`}>
                  <Image src={partner.logo} alt={`${partner.name} logo`} width={112} height={40} sizes="112px" loading="lazy" decoding="async" className={`partner-logo ${partner.logoScaleClass}`} />
                </div>
                <div>
                  <div className="text-sm font-medium leading-snug text-ink">{partner.name}</div>
                  <div className="text-xs text-mist mt-0.5">{partner.country}</div>
                </div>
              </TrackedLink>
            ))}
          </div>
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">{copy.casesKicker}</p>
          <h2 className="mt-3 ui-h2">{copy.casesHeading}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {copy.cases.map((item) => (
              <div key={item.title} className="route-card h-full">
                <div className="text-xs tracking-[0.16em] uppercase text-mist">{item.title}</div>
                <p className="mt-3 text-sm text-mist leading-relaxed"><span className="text-ink">Problem:</span> {item.problem}</p>
                <p className="mt-2 text-sm text-mist leading-relaxed"><span className="text-ink">Approach:</span> {item.approach}</p>
                <p className="mt-2 text-sm text-mist leading-relaxed"><span className="text-ink">Outcome:</span> {item.outcome}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 card p-7 shadow-soft">
            <p className="ui-kicker">{copy.resourcesKicker}</p>
            <h2 className="mt-3 ui-h3 md:text-2xl">{copy.resourcesHeading}</h2>
            <div className="mt-5 grid md:grid-cols-2 2xl:grid-cols-4 gap-4">
              <TrackedLink href="https://wiki.gumon.io/" target="_blank" rel="noreferrer" className="route-card block h-full"><h3 className="ui-h3">Knowledge Base</h3><p className="mt-2 text-sm text-mist leading-relaxed">Delivery guidance and operational references.</p></TrackedLink>
              <TrackedLink href="https://docs.gumon.io/" target="_blank" rel="noreferrer" className="route-card block h-full"><h3 className="ui-h3">Technical Docs</h3><p className="mt-2 text-sm text-mist leading-relaxed">Technical references for engineering teams.</p></TrackedLink>
              <TrackedLink href="https://work.gumon.io/" target="_blank" rel="noreferrer" className="route-card block h-full"><h3 className="ui-h3">Gumon Work</h3><p className="mt-2 text-sm text-mist leading-relaxed">Project and task tracking for aligned execution.</p></TrackedLink>
              <TrackedLink href="https://dkscenter.gumon.io/th" target="_blank" rel="noreferrer" className="route-card block h-full"><h3 className="ui-h3">Partner Training</h3><p className="mt-2 text-sm text-mist leading-relaxed">Courses and workshops for partner enablement.</p></TrackedLink>
            </div>
          </div>

          <div className="lg:col-span-5 card p-7 shadow-soft">
            <p className="ui-kicker">{copy.nextKicker}</p>
            <h2 className="mt-3 ui-h3">{copy.nextHeading}</h2>
            <p className="mt-3 text-sm text-mist leading-relaxed">{copy.nextBody}</p>
            <div className="mt-6 flex flex-col gap-3">
              <TrackedLink href="/contact" className="btn-primary">{copy.contactCta}</TrackedLink>
              <TrackedLink href="/resources" className="btn-secondary">{copy.resourceCta}</TrackedLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
