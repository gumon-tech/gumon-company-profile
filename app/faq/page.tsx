import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import { buildPageMetadata } from "@/lib/seo";
import { resolveLocale, type Locale } from "@/lib/i18n";
import { pickLocalizedContent } from "@/lib/i18nContent";
import { getFallbackNotice } from "@/content/locales/fallbackNotice";
import { faqContent } from "@/content/locales/faq";

async function getLocale(params?: Promise<{ locale?: string }>): Promise<Locale> {
  if (!params) return resolveLocale("th");
  const resolved = await params;
  return resolveLocale(resolved.locale);
}

export async function generateMetadata({ params }: { params?: Promise<{ locale?: string }> }): Promise<Metadata> {
  const locale = await getLocale(params);
  const copy = pickLocalizedContent(locale, faqContent);
  return buildPageMetadata({ title: copy.title, description: copy.description, path: "/faq" });
}

export default async function FaqPage({ params }: { params?: Promise<{ locale?: string }> }) {
  const locale = await getLocale(params);
  const copy = pickLocalizedContent(locale, faqContent);
  const fallbackNotice = getFallbackNotice(locale);

  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "FAQ", path: "/faq" }]} />
      <div className="ui-container">
        <p className="ui-kicker">{copy.kicker}</p>
        <h1 className="ui-h1">{copy.heading}</h1>
        <p className="mt-6 max-w-3xl ui-p">{copy.intro}</p>

        {fallbackNotice ? <div className="mt-6 rounded-xl border border-line/45 bg-bg1/55 p-4 text-sm text-mist">{fallbackNotice}</div> : null}

        <div className="mt-8 flex flex-wrap gap-2">
          {copy.groups.map((group) => (
            <TrackedLink key={group.id} href={`#${group.id}`} className="rounded-full border border-line/45 bg-surf/50 px-4 py-2 text-xs tracking-[0.08em] uppercase text-mist transition hover:border-accent/60 hover:text-ink">
              {group.title}
            </TrackedLink>
          ))}
        </div>

        <div className="mt-12 grid gap-6">
          {copy.groups.map((group) => (
            <div key={group.title} id={group.id} className="card p-7 shadow-soft scroll-mt-28">
              <h2 className="ui-h3">{group.title}</h2>
              <div className="mt-5 grid gap-4">
                {group.items.map((item, index) => (
                  <details key={item.q} className="route-card" open={index === 0}>
                    <summary className="cursor-pointer list-none text-base font-semibold pr-8 relative">
                      {item.q}
                      <span className="absolute right-0 top-0 text-mist">+</span>
                    </summary>
                    <p className="mt-3 text-sm md:text-base text-mist leading-relaxed">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">{copy.needDetailKicker}</p>
          <h2 className="mt-3 ui-h2">{copy.needDetailHeading}</h2>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <TrackedLink href="/contact" className="btn-primary">{copy.contactCta}</TrackedLink>
            <a href="mailto:contact@gumon.io" className="btn-secondary">contact@gumon.io</a>
          </div>
        </div>
      </div>
    </section>
  );
}
