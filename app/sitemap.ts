export const dynamic = "force-static";

export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gumon.io";
  const now = new Date();
  const weekly = "weekly" as const;
  const monthly = "monthly" as const;

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: weekly, priority: 1.0 },
    { url: `${base}/platform/`, lastModified: now, changeFrequency: weekly, priority: 0.9 },
    { url: `${base}/developers/`, lastModified: now, changeFrequency: weekly, priority: 0.9 },
    { url: `${base}/partners/`, lastModified: now, changeFrequency: weekly, priority: 0.9 },
    { url: `${base}/resources/`, lastModified: now, changeFrequency: weekly, priority: 0.8 },
    { url: `${base}/company/`, lastModified: now, changeFrequency: monthly, priority: 0.75 },
    { url: `${base}/team/`, lastModified: now, changeFrequency: monthly, priority: 0.72 },
    { url: `${base}/contact/`, lastModified: now, changeFrequency: monthly, priority: 0.7 },
    { url: `${base}/faq/`, lastModified: now, changeFrequency: monthly, priority: 0.65 },
    { url: `${base}/privacy/`, lastModified: now, changeFrequency: monthly, priority: 0.5 },
    { url: `${base}/terms/`, lastModified: now, changeFrequency: monthly, priority: 0.5 },
    { url: `${base}/cookies/`, lastModified: now, changeFrequency: monthly, priority: 0.5 },
  ];
}
