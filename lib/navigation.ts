export type NavItem = {
  href: string;
  label: string;
};

export const primaryNavItems: NavItem[] = [
  { href: "/platform", label: "Platform" },
  { href: "/developers", label: "Developers" },
  { href: "/partners", label: "Partners" },
  { href: "/resources", label: "Resources" },
  { href: "/company", label: "Company" },
  { href: "/team", label: "Team" },
];

export const workToolLinks: NavItem[] = [
  { href: "https://docs.gumon.io/", label: "Docs" },
  { href: "https://wiki.gumon.io/", label: "Knowledge Base" },
  { href: "https://work.gumon.io/", label: "Gumon Work" },
  { href: "https://github.com/gumon-tech", label: "GitHub" },
];

export const communityLinks: NavItem[] = [
  { href: "https://dkscenter.gumon.io/th", label: "DKS Center" },
  { href: "https://game.gumon.io/", label: "Gaming Hub" },
];

export const supportLinks: NavItem[] = [
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const legalLinks: NavItem[] = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
];

export const stickyCtaEnabledRoutes = new Set([
  "/",
  "/platform",
  "/developers",
  "/partners",
  "/resources",
  "/company",
  "/team",
]);

export const sitemapRoutes = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1.0 },
  { path: "/platform", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/developers", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/partners", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/resources", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "/company", changeFrequency: "monthly" as const, priority: 0.75 },
  { path: "/team", changeFrequency: "monthly" as const, priority: 0.72 },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/faq", changeFrequency: "monthly" as const, priority: 0.65 },
  { path: "/privacy", changeFrequency: "monthly" as const, priority: 0.5 },
  { path: "/terms", changeFrequency: "monthly" as const, priority: 0.5 },
  { path: "/cookies", changeFrequency: "monthly" as const, priority: 0.5 },
];
