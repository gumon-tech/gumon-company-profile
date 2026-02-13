export const supportedLocales = [
  "th",
  "en",
  "zh-CN",
  "zh-TW",
  "ja",
  "ko",
  "vi",
  "id",
  "ms",
  "hi",
  "ar",
  "he",
  "es",
  "pt-BR",
  "fr",
  "de",
  "it",
  "nl",
  "pl",
  "tr",
  "ru",
  "uk",
  "sv",
] as const;

export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = "th";
export const fallbackLocale: Locale = "en";

const localeSet = new Set<string>(supportedLocales);

function normalizeLanguageTag(input: string) {
  return input.trim().replace(/_/g, "-");
}

export function isSupportedLocale(value: string): value is Locale {
  return localeSet.has(value);
}

export function resolveLocale(input?: string | null): Locale {
  if (!input) return defaultLocale;

  const raw = normalizeLanguageTag(input);
  if (isSupportedLocale(raw)) return raw;

  const base = raw.split("-")[0];
  const matched = supportedLocales.find(
    (locale) => locale.toLowerCase() === base.toLowerCase() || locale.toLowerCase().startsWith(`${base.toLowerCase()}-`),
  );

  return matched ?? fallbackLocale;
}

export function detectLocaleFromPathname(pathname?: string | null): Locale {
  if (!pathname) return defaultLocale;
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  if (!firstSegment || !isSupportedLocale(firstSegment)) {
    return defaultLocale;
  }
  return firstSegment;
}

export function stripLocalePrefix(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (!segments.length) return "/";

  const [first, ...rest] = segments;
  if (!isSupportedLocale(first)) {
    return pathname.startsWith("/") ? pathname : `/${pathname}`;
  }

  if (!rest.length) return "/";
  return `/${rest.join("/")}`;
}

function isStaticAssetPath(pathname: string) {
  return pathname.startsWith("/_next") || pathname.startsWith("/assets/") || pathname === "/favicon.ico" || pathname === "/favicon.png" || pathname.startsWith("/images/");
}

export function localizePath(pathname: string, locale: Locale) {
  if (!pathname.startsWith("/") || isStaticAssetPath(pathname)) {
    return pathname;
  }

  const [pathPart, hashPart] = pathname.split("#");
  const [cleanPath, searchPart] = pathPart.split("?");

  const normalized = cleanPath === "" ? "/" : cleanPath;
  const segments = normalized.split("/").filter(Boolean);

  if (segments.length && isSupportedLocale(segments[0])) {
    segments[0] = locale;
    const rebuilt = `/${segments.join("/")}`;
    const withSearch = searchPart ? `${rebuilt}?${searchPart}` : rebuilt;
    return hashPart ? `${withSearch}#${hashPart}` : withSearch;
  }

  const prefixed = normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
  const withSearch = searchPart ? `${prefixed}?${searchPart}` : prefixed;
  return hashPart ? `${withSearch}#${hashPart}` : withSearch;
}

export type UiCopy = {
  menu: string;
  contactTeam: string;
  tools: string;
  workTools: string;
  community: string;
  support: string;
  cookieShort: string;
  cookieNotice: string;
  cookieEssential: string;
  cookieAcceptAll: string;
  resetCookie: string;
  backToTop: string;
  sendEmailAria: string;
  copy: string;
  copied: string;
  language: string;
  teamFilters: {
    all: string;
    leadership: string;
    engineering: string;
    design: string;
    media: string;
  };
};

const enCopy: UiCopy = {
  menu: "Menu",
  contactTeam: "Contact Team",
  tools: "Tools",
  workTools: "Work Tools",
  community: "Community",
  support: "Support",
  cookieShort: "This site uses essential cookies and optional analytics cookies when you consent.",
  cookieNotice: "Cookie Notice",
  cookieEssential: "Essential only",
  cookieAcceptAll: "Accept all",
  resetCookie: "Reset cookie preferences",
  backToTop: "Top",
  sendEmailAria: "Send email to Gumon",
  copy: "Copy",
  copied: "Copied",
  language: "Language",
  teamFilters: {
    all: "All",
    leadership: "Leadership",
    engineering: "Engineering",
    design: "Design",
    media: "Media",
  },
};

const thCopy: UiCopy = {
  menu: "เมนู",
  contactTeam: "ติดต่อทีมงาน",
  tools: "เครื่องมือ",
  workTools: "เครื่องมือทำงาน",
  community: "คอมมูนิตี้",
  support: "ช่วยเหลือ",
  cookieShort: "เว็บไซต์นี้ใช้คุกกี้ที่จำเป็น และคุกกี้วิเคราะห์เมื่อคุณยินยอม",
  cookieNotice: "นโยบายคุกกี้",
  cookieEssential: "จำเป็นเท่านั้น",
  cookieAcceptAll: "ยอมรับทั้งหมด",
  resetCookie: "รีเซ็ตการตั้งค่าคุกกี้",
  backToTop: "ด้านบน",
  sendEmailAria: "ส่งอีเมลถึง Gumon",
  copy: "คัดลอก",
  copied: "คัดลอกแล้ว",
  language: "ภาษา",
  teamFilters: {
    all: "ทั้งหมด",
    leadership: "ผู้บริหาร",
    engineering: "วิศวกรรม",
    design: "ดีไซน์",
    media: "มีเดีย",
  },
};

const localizedUiCopy: Partial<Record<Locale, UiCopy>> = {
  th: thCopy,
  en: enCopy,
};

export function getUiCopy(locale: Locale): UiCopy {
  return localizedUiCopy[locale] ?? enCopy;
}
