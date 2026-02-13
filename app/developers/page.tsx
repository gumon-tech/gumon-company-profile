import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import { buildPageMetadata } from "@/lib/seo";
import { resolveLocale, type Locale } from "@/lib/i18n";
import { pickLocalizedContent } from "@/lib/i18nContent";
import { getFallbackNotice } from "@/content/locales/fallbackNotice";
import { developersContent, developersMeta } from "@/content/locales/developers";

async function getLocaleFromParams(params?: Promise<{ locale?: string }>): Promise<Locale> {
  if (!params) return resolveLocale("th");
  const resolved = await params;
  return resolveLocale(resolved.locale);
}

export async function generateMetadata({ params }: { params?: Promise<{ locale?: string }> }): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  const localized = pickLocalizedContent(locale, developersMeta);
  return buildPageMetadata({ title: localized.title, description: localized.description, path: "/developers" });
}

export default async function DevelopersPage({ params }: { params?: Promise<{ locale?: string }> }) {
  const locale = await getLocaleFromParams(params);
  const copy = pickLocalizedContent(locale, developersContent);
  const fallbackNotice = getFallbackNotice(locale);

  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: copy.crumb, path: "/developers" }]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">{copy.kicker}</p>
          <h1 className="ui-h1">{copy.heading}</h1>
          <p className="mt-6 max-w-3xl ui-p">{copy.intro}</p>
        </Reveal>

        {fallbackNotice ? <div className="mt-6 rounded-xl border border-line/45 bg-bg1/55 p-4 text-sm text-mist">{fallbackNotice}</div> : null}

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {copy.phases.map((phase, index) => (
            <Reveal key={phase.title} delay={index * 70}>
              <div className="route-card h-full">
                <p className="ui-kicker">{copy.phaseLabel}</p>
                <h2 className="mt-3 ui-h3">{phase.title}</h2>
                <p className="mt-2 text-sm text-mist leading-relaxed">{phase.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">{copy.focusKicker}</p>
          <h2 className="mt-3 ui-h2">{copy.focusHeading}</h2>
          <ul className="mt-5 grid gap-2 feature-list">
            {copy.technicalFocus.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 card p-7 shadow-soft">
            <p className="ui-kicker">{copy.resourcesKicker}</p>
            <h2 className="mt-3 ui-h3 md:text-2xl">{copy.resourcesHeading}</h2>
            <div className="mt-5 grid md:grid-cols-2 2xl:grid-cols-4 gap-4">
              {copy.resourceCards.map((item) => (
                <TrackedLink key={item.href} href={item.href} target="_blank" rel="noreferrer" className="route-card block h-full">
                  <h3 className="ui-h3">{item.title}</h3>
                  <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
                </TrackedLink>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 card p-7 shadow-soft">
            <p className="ui-kicker">{copy.nextKicker}</p>
            <h2 className="mt-3 ui-h3">{copy.nextHeading}</h2>
            <p className="mt-3 text-sm text-mist leading-relaxed">{copy.nextBody}</p>
            <div className="mt-6 flex flex-col gap-3">
              <TrackedLink href="/platform" className="btn-secondary">{copy.platformCta}</TrackedLink>
              <TrackedLink href="/contact" className="btn-primary">{copy.contactCta}</TrackedLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
