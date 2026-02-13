import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import { buildPageMetadata } from "@/lib/seo";
import { resolveLocale, type Locale } from "@/lib/i18n";

type ResourceGroup = { title: string; items: [string, string, string, boolean][] };
type Copy = {
  title: string;
  description: string;
  crumb: string;
  kicker: string;
  heading: string;
  intro: string;
  adoptionKicker: string;
  adoptionHeading: string;
  roadmapKicker: string;
  roadmapHeading: string;
  groups: ResourceGroup[];
  adoptionPath: { step: string; title: string; body: string }[];
  roadmap: { phase: string; title: string; body: string }[];
};

const th: Copy = {
  title: "Resources",
  description: "ศูนย์รวมเอกสารและลิงก์สำคัญสำหรับทีมพัฒนา พาร์ตเนอร์ และผู้บริหารที่ต้องการใช้งาน Gumon อย่างเป็นระบบ",
  crumb: "Resources",
  kicker: "Resources / Hub",
  heading: "ศูนย์รวมทรัพยากรที่ทีมใช้งานจริงบ่อยที่สุด",
  intro: "หน้านี้จัดกลุ่มข้อมูลตามวัตถุประสงค์การใช้งาน เพื่อลดเวลาค้นหาเอกสารและเส้นทางที่ควรเริ่มก่อน",
  adoptionKicker: "Adoption Path",
  adoptionHeading: "เส้นทางการใช้งานจากทีมเทคนิคสู่การขยายผลระดับ ecosystem",
  roadmapKicker: "Public Roadmap",
  roadmapHeading: "ภาพรวมทิศทาง 3 ระยะสำหรับการพัฒนาแพลตฟอร์ม",
  groups: [
    { title: "Developer Resources", items: [["Developer Documentation", "คู่มือ setup, API reference และ command usage", "https://docs.gumon.io/", true], ["Knowledge Base", "playbooks และแนวทางปฏิบัติการเชิงเทคนิค", "https://wiki.gumon.io/", true], ["GitHub", "source code, templates และตัวอย่างโปรเจกต์สำหรับทีมพัฒนา", "https://github.com/gumon-tech", true]] },
    { title: "Business Resources", items: [["Partner Collaboration", "แนวทางร่วมงานและขอบเขตการส่งมอบ", "/partners", false], ["Company Overview", "หลักการองค์กรและ operating model", "/company", false], ["Gumon Work", "Project/Task management สำหรับทีมส่งมอบ", "https://work.gumon.io/", true]] },
    { title: "Getting Started", items: [["Platform Overview", "เริ่มเข้าใจสถาปัตยกรรมและองค์ประกอบหลัก", "/platform", false], ["Contact Team", "ส่งโจทย์เพื่อเริ่มวางเส้นทางใช้งาน", "/contact", false]] },
    { title: "Community", items: [["DKS Center", "ศูนย์คอร์สและกิจกรรมอบรมด้านเทคโนโลยี", "https://dkscenter.gumon.io/th", true], ["Gaming Hub", "อีกมุมของ Gumon community สำหรับกิจกรรมและการเชื่อมผู้คนผ่านการเล่น", "https://game.gumon.io/", true]] },
  ],
  adoptionPath: [
    { step: "01", title: "Developer-first Adoption", body: "เริ่มจากทีมเทคนิคด้วยเอกสารและมาตรฐานตั้งต้นกลาง เพื่อลดเวลาเตรียมระบบและเริ่มส่งมอบได้เร็ว" },
    { step: "02", title: "Partner-led Delivery", body: "ขยายผลผ่านพาร์ตเนอร์ที่ทำงานบนมาตรฐานเดียวกัน เพื่อรักษาคุณภาพงานส่งมอบปลายทาง" },
    { step: "03", title: "Ecosystem Expansion", body: "ต่อยอดสู่ระบบนิเวศของส่วนขยาย บริการเสริม และองค์ความรู้ที่เติบโตได้อย่างต่อเนื่อง" },
  ],
  roadmap: [
    { phase: "Phase 1", title: "Open Foundation", body: "เสริมความพร้อมของแกนแพลตฟอร์ม เอกสารหลัก และแนวปฏิบัติที่ใช้งานได้จริง" },
    { phase: "Phase 2", title: "Partner Expansion", body: "ขยายการใช้งานผ่านเครือข่ายพาร์ตเนอร์ พร้อมยกระดับมาตรฐานการส่งมอบร่วมกัน" },
    { phase: "Phase 3", title: "Marketplace Readiness", body: "พัฒนาไปสู่โครงสร้าง ecosystem ที่รองรับการค้นหาและใช้งานส่วนขยายอย่างเป็นระบบ" },
  ],
};

const en: Copy = {
  title: "Resources",
  description: "A central hub of references and links for developers, partners, and stakeholders using Gumon.",
  crumb: "Resources",
  kicker: "Resources / Hub",
  heading: "A resource hub for what teams use most",
  intro: "Resources are grouped by intent to reduce search time and clarify where to start.",
  adoptionKicker: "Adoption Path",
  adoptionHeading: "From developer adoption to ecosystem expansion",
  roadmapKicker: "Public Roadmap",
  roadmapHeading: "Three-stage platform direction overview",
  groups: [
    { title: "Developer Resources", items: [["Developer Documentation", "Setup guides, API references, and command usage", "https://docs.gumon.io/", true], ["Knowledge Base", "Operational playbooks and engineering practices", "https://wiki.gumon.io/", true], ["GitHub", "Source code, templates, and project examples", "https://github.com/gumon-tech", true]] },
    { title: "Business Resources", items: [["Partner Collaboration", "Collaboration model and delivery boundaries", "/partners", false], ["Company Overview", "Organizational principles and operating model", "/company", false], ["Gumon Work", "Project and task management for delivery teams", "https://work.gumon.io/", true]] },
    { title: "Getting Started", items: [["Platform Overview", "Understand architecture and foundational components", "/platform", false], ["Contact Team", "Send your context to start planning", "/contact", false]] },
    { title: "Community", items: [["DKS Center", "Training programs and technology activities", "https://dkscenter.gumon.io/th", true], ["Gaming Hub", "Community engagement through activities and play", "https://game.gumon.io/", true]] },
  ],
  adoptionPath: [
    { step: "01", title: "Developer-first Adoption", body: "Start with core docs and baseline standards to reduce setup time." },
    { step: "02", title: "Partner-led Delivery", body: "Scale through partners operating on shared standards." },
    { step: "03", title: "Ecosystem Expansion", body: "Extend through integrations, services, and reusable knowledge." },
  ],
  roadmap: [
    { phase: "Phase 1", title: "Open Foundation", body: "Strengthen core platform readiness and practical documentation." },
    { phase: "Phase 2", title: "Partner Expansion", body: "Expand usage through partner networks with shared quality standards." },
    { phase: "Phase 3", title: "Marketplace Readiness", body: "Prepare ecosystem structures for discoverable extensions and services." },
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
  return buildPageMetadata({ title: copy.title, description: copy.description, path: "/resources" });
}

export default async function ResourcesPage({ params }: { params?: Promise<{ locale?: string }> }) {
  const locale = await getLocale(params);
  const copy = copyFor(locale);
  const fallbackNotice = locale !== "th" && locale !== "en" ? fallbackNoticeByLocale[locale] : null;

  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: copy.crumb, path: "/resources" }]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">{copy.kicker}</p>
          <h1 className="ui-h1">{copy.heading}</h1>
          <p className="mt-6 max-w-3xl ui-p">{copy.intro}</p>
        </Reveal>

        {fallbackNotice ? <div className="mt-6 rounded-xl border border-line/45 bg-bg1/55 p-4 text-sm text-mist">{fallbackNotice}</div> : null}

        <div className="mt-12 grid md:grid-cols-2 2xl:grid-cols-4 gap-5">
          {copy.groups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 80}>
              <div className="card p-6 shadow-soft h-full">
                <p className="ui-kicker">{group.title}</p>
                <div className="mt-4 grid gap-3 auto-rows-fr">
                  {group.items.map(([title, body, href, external]) =>
                    external ? (
                      <a key={title} href={href} target="_blank" rel="noreferrer" className="route-card block h-full">
                        <h2 className="ui-h3">{title}</h2>
                        <p className="mt-2 text-sm text-mist leading-relaxed">{body}</p>
                      </a>
                    ) : (
                      <TrackedLink key={title} href={href} className="route-card block h-full">
                        <h2 className="ui-h3">{title}</h2>
                        <p className="mt-2 text-sm text-mist leading-relaxed">{body}</p>
                      </TrackedLink>
                    ),
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <p className="ui-kicker">{copy.adoptionKicker}</p>
          <h2 className="mt-3 ui-h2">{copy.adoptionHeading}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {copy.adoptionPath.map((item, index) => (
              <Reveal key={item.step} delay={index * 70}>
                <div className="route-card h-full">
                  <div className="text-xs font-semibold tracking-[0.2em] text-accent">{item.step}</div>
                  <h3 className="mt-2 ui-h3">{item.title}</h3>
                  <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">{copy.roadmapKicker}</p>
          <h2 className="mt-3 ui-h2">{copy.roadmapHeading}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {copy.roadmap.map((item, index) => (
              <Reveal key={item.phase} delay={index * 70}>
                <div className="glass rounded-xl border border-line/35 p-5 h-full">
                  <div className="text-xs tracking-[0.16em] uppercase text-mist">{item.phase}</div>
                  <h3 className="mt-2 ui-h3">{item.title}</h3>
                  <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
