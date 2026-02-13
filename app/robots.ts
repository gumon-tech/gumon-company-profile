export const dynamic = "force-static";

export default function robots() {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gumon.io";
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    host: base,
    sitemap: `${base}/sitemap.xml`,
  };
}
