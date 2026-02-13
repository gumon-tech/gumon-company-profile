import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import { buildPageMetadata } from "@/lib/seo";
import { resolveLocale, type Locale } from "@/lib/i18n";
import { pickLocalizedContent } from "@/lib/i18nContent";
import { getFallbackNotice } from "@/content/locales/fallbackNotice";
import { resourcesContent } from "@/content/locales/resources";

async function getLocale(params?: Promise<{ locale?: string }>): Promise<Locale> {
  if (!params) return resolveLocale("th");
  const resolved = await params;
  return resolveLocale(resolved.locale);
}

export async function generateMetadata({ params }: { params?: Promise<{ locale?: string }> }): Promise<Metadata> {
  const locale = await getLocale(params);
  const copy = pickLocalizedContent(locale, resourcesContent);
  return buildPageMetadata({ title: copy.title, description: copy.description, path: "/resources" });
}

export default async function ResourcesPage({ params }: { params?: Promise<{ locale?: string }> }) {
  const locale = await getLocale(params);
  const copy = pickLocalizedContent(locale, resourcesContent);
  const fallbackNotice = getFallbackNotice(locale);

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
