import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import TeamDirectory from "@/components/TeamDirectory";
import { buildPageMetadata } from "@/lib/seo";
import { resolveLocale, type Locale } from "@/lib/i18n";
import { pickLocalizedContent } from "@/lib/i18nContent";
import { getFallbackNotice } from "@/content/locales/fallbackNotice";
import { teamContent, teamMembers } from "@/content/locales/team";

async function getLocale(params?: Promise<{ locale?: string }>): Promise<Locale> {
  if (!params) return resolveLocale("th");
  const resolved = await params;
  return resolveLocale(resolved.locale);
}

export async function generateMetadata({ params }: { params?: Promise<{ locale?: string }> }): Promise<Metadata> {
  const locale = await getLocale(params);
  const copy = pickLocalizedContent(locale, teamContent);
  return buildPageMetadata({ title: copy.title, description: copy.description, path: "/team" });
}

export default async function TeamPage({ params }: { params?: Promise<{ locale?: string }> }) {
  const locale = await getLocale(params);
  const copy = pickLocalizedContent(locale, teamContent);
  const fallbackNotice = getFallbackNotice(locale);

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
