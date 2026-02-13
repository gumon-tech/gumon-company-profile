import { sitemapRoutes } from "@/lib/navigation";
import { supportedLocales } from "@/lib/i18n";
export const dynamic = "force-static";

export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gumon.io";
  const now = new Date();

  const localizedRoutes = supportedLocales.flatMap((locale) =>
    sitemapRoutes.map((item) => ({
      url: new URL(item.path === "/" ? `/${locale}/` : `/${locale}${item.path}/`, base).toString(),
      lastModified: now,
      changeFrequency: item.changeFrequency,
      priority: item.priority,
    })),
  );

  const rootRoutes = sitemapRoutes.map((item) => ({
    url: new URL(item.path === "/" ? "/" : `${item.path}/`, base).toString(),
    lastModified: now,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  return [...rootRoutes, ...localizedRoutes];
}
