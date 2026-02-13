import { sitemapRoutes } from "@/lib/navigation";
export const dynamic = "force-static";

export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gumon.io";
  const now = new Date();

  return sitemapRoutes.map((item) => ({
    url: new URL(item.path === "/" ? "/" : `${item.path}/`, base).toString(),
    lastModified: now,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));
}
