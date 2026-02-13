import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import CookiePreferenceReset from "@/components/CookiePreferenceReset";
import { resolveLocale, type Locale } from "@/lib/i18n";
import { pickLocalizedContent } from "@/lib/i18nContent";
import { getFallbackNotice } from "@/content/locales/fallbackNotice";
import { cookiesContent, cookiesMeta } from "@/content/locales/cookies";

async function getLocaleFromParams(params?: Promise<{ locale?: string }>): Promise<Locale> {
  if (!params) return resolveLocale("th");
  const resolved = await params;
  return resolveLocale(resolved.locale);
}

export async function generateMetadata({ params }: { params?: Promise<{ locale?: string }> }): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  const localized = pickLocalizedContent(locale, cookiesMeta);
  return buildPageMetadata({ title: localized.title, description: localized.description, path: "/cookies" });
}

export default async function CookiesPage({ params }: { params?: Promise<{ locale?: string }> }) {
  const locale = await getLocaleFromParams(params);
  const copy = pickLocalizedContent(locale, cookiesContent);
  const fallbackNotice = getFallbackNotice(locale);

  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: copy.crumb, path: "/cookies" }]} />
      <div className="ui-container max-w-4xl">
        <p className="ui-kicker">{copy.kicker}</p>
        <h1 className="ui-h1">{copy.heading}</h1>
        <p className="mt-4 ui-small">Last updated: {copy.updatedAt}</p>

        {fallbackNotice ? <div className="mt-6 rounded-xl border border-line/45 bg-bg1/55 p-4 text-sm text-mist">{fallbackNotice}</div> : null}

        <div className="mt-10 card p-7 shadow-soft space-y-8 text-sm md:text-base text-mist leading-relaxed">
          <p>{copy.intro}</p>
          {copy.sections.map((section, index) => (
            <div key={section.title}>
              <h2 className="ui-h3 text-ink">{section.title}</h2>
              {section.body ? <p className="mt-2">{section.body}</p> : null}
              {section.items ? (
                <ul className="mt-3 grid gap-2">
                  {section.items.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              ) : null}
              {index === 6 ? (
                <div className="mt-4">
                  <CookiePreferenceReset />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
