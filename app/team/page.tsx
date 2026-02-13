import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import TeamDirectory from "@/components/TeamDirectory";
import { buildPageMetadata } from "@/lib/seo";
import { resolveLocale, type Locale } from "@/lib/i18n";

const teamMembers = [
  { name: "Komphet Meesab", role: "Chief Executive Officer", image: "/images/team/komphet-meesab.jpg", crop: "50% 12%" },
  { name: "Panitchai Chaenglek", role: "Head of Research and Development Division", image: "/images/team/panitchai-chaenglek.jpg", crop: "50% 12%" },
  { name: "Kritsada Suriyachan", role: "Head of Technology Solutions Division", image: "/images/team/kritsada-suriyachan.jpg", crop: "50% 10%" },
  { name: "Niti Kosutao", role: "Backend Developer", image: "/images/team/niti-kosutao.jpg", crop: "50% 12%" },
  { name: "Apirat Jamnongrat", role: "Frontend Developer", image: "/images/team/apirat-jamnongrat.jpg", crop: "50% 14%" },
  { name: "Pongsathon Tungkanakul", role: "Frontend Developer", image: "/images/team/pongsathon-tungkanakul.jpg", crop: "50% 14%" },
  { name: "Poomchanok Sangprasert", role: "Frontend Developer", image: "/images/team/poomchanok-sangprasert.jpg", crop: "50% 14%" },
  { name: "Sorawit Poemponsri", role: "UX/UI Designer", image: "/images/team/sorawit-poemponsri.jpg", crop: "50% 12%" },
  { name: "Sittipong Sainum", role: "Digital and Technology Social Network Officer", image: "/images/team/sittipong-sainum.jpg", crop: "50% 12%" },
  { name: "Suvapat Pimklang", role: "Mobile Developer", image: "/images/team/suvapat-pimklang.jpg", crop: "50% 12%" },
  { name: "Witsawachit Wangklang", role: "Project Manager", image: "/images/team/witsawachit-wangklang.jpg", crop: "50% 12%" },
  { name: "Noppon Changchai", role: "Media Staff", image: "/images/team/noppon-changchai.jpg", crop: "50% 12%" },
  { name: "Pramin Wangwun", role: "Fullstack Developer", image: "/images/team/pramin-wangwun.jpg", crop: "50% 10%" },
  { name: "Thanathorn Chulay", role: "Fullstack Developer", image: "/images/team/thanathorn-chulay.jpg", crop: "50% 10%" },
  { name: "Parichat Hongsa", role: "Fullstack Developer", image: "/images/team/parichat-hongsa.jpg", crop: "50% 10%" },
  { name: "Irin Maysasittiroj", role: "Fullstack Developer", image: "/images/team/irin-maysasittiroj.jpg", crop: "50% 10%" },
  { name: "Nuntakarn Paonariang", role: "Business Analyst", image: "/images/team/nuntakarn-paonariang.jpg", crop: "50% 10%" },
  { name: "Suriya Thanee", role: "Media Staff", image: "/images/team/suriya-thanee.jpg", crop: "50% 10%" },
  { name: "Wichayoot Wongsason", role: "Media Staff", image: "/images/team/wichayoot-wongsason.jpg", crop: "50% 10%" },
];

type Copy = {
  title: string;
  description: string;
  crumb: string;
  kicker: string;
  heading: string;
  intro: string;
  nextKicker: string;
  nextHeading: string;
  nextBody: string;
  contactCta: string;
  companyCta: string;
};

const th: Copy = {
  title: "Team",
  description: "ทีมงาน Gumon Technology จากสายงานเทคโนโลยี ดีไซน์ และการส่งมอบที่ร่วมกันสร้าง Open Platform",
  crumb: "Team",
  kicker: "Company / Team",
  heading: "ทีม Gumon Technology",
  intro: "ทีมงานจากหลายบทบาทที่ร่วมกันขับเคลื่อนงานวิจัย การพัฒนาแพลตฟอร์ม และการส่งมอบเทคโนโลยีให้เกิดผลจริง",
  nextKicker: "Next Step",
  nextHeading: "ต้องการคุยเรื่องการร่วมงานกับทีม Gumon",
  nextBody: "หากคุณต้องการหารือเรื่องการวางโรดแมปแพลตฟอร์ม การส่งมอบผ่านพาร์ตเนอร์ หรือความร่วมมือเชิงเทคโนโลยี สามารถส่งข้อมูลโครงการของคุณมาได้โดยตรง",
  contactCta: "ติดต่อทีมงาน",
  companyCta: "ดูภาพรวมบริษัท",
};

const en: Copy = {
  title: "Team",
  description: "Meet the Gumon Technology team across engineering, design, and delivery disciplines.",
  crumb: "Team",
  kicker: "Company / Team",
  heading: "Gumon Technology Team",
  intro: "A multidisciplinary team working together across research, platform engineering, and real-world delivery execution.",
  nextKicker: "Next Step",
  nextHeading: "Interested in working with the Gumon team",
  nextBody: "If you want to discuss platform roadmap planning, partner-led delivery, or technology collaboration, share your project context and we will follow up.",
  contactCta: "Contact Team",
  companyCta: "View Company Overview",
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
  return buildPageMetadata({ title: copy.title, description: copy.description, path: "/team" });
}

export default async function TeamPage({ params }: { params?: Promise<{ locale?: string }> }) {
  const locale = await getLocale(params);
  const copy = copyFor(locale);
  const fallbackNotice = locale !== "th" && locale !== "en" ? fallbackNoticeByLocale[locale] : null;

  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: copy.crumb, path: "/team" }]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">{copy.kicker}</p>
          <h1 className="ui-h1">{copy.heading}</h1>
          <p className="mt-6 max-w-3xl ui-p">{copy.intro}</p>
        </Reveal>

        {fallbackNotice ? <div className="mt-6 rounded-xl border border-line/45 bg-bg1/55 p-4 text-sm text-mist">{fallbackNotice}</div> : null}

        <TeamDirectory members={teamMembers} />

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">{copy.nextKicker}</p>
          <h2 className="mt-3 ui-h2">{copy.nextHeading}</h2>
          <p className="mt-3 text-sm text-mist leading-relaxed max-w-3xl">{copy.nextBody}</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <TrackedLink href="/contact" className="btn-primary">{copy.contactCta}</TrackedLink>
            <TrackedLink href="/company" className="btn-secondary">{copy.companyCta}</TrackedLink>
          </div>
        </div>
      </div>
    </section>
  );
}
