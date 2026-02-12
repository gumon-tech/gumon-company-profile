export const dynamic = "force-static";

export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://web.gumon.dev";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/platform/`, lastModified: now },
    { url: `${base}/partners/`, lastModified: now },
    { url: `${base}/developers/`, lastModified: now },
    { url: `${base}/ecosystem/`, lastModified: now },
    { url: `${base}/learning/`, lastModified: now },
    { url: `${base}/resources/`, lastModified: now },
    { url: `${base}/company/`, lastModified: now },
    { url: `${base}/investors/`, lastModified: now },
    { url: `${base}/contact/`, lastModified: now },
  ];
}
