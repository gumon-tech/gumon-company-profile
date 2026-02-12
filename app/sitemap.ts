export const dynamic = "force-static";

export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://web.gumon.dev";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/deployments/`, lastModified: now },
    { url: `${base}/ecosystem/`, lastModified: now },
    { url: `${base}/research/`, lastModified: now },
    { url: `${base}/contact/`, lastModified: now },
    { url: `${base}/brand/`, lastModified: now },
    { url: `${base}/partners/`, lastModified: now },
  ];
}
