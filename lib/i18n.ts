import { type UiCopy, uiCopyByLocale } from "@/content/locales/ui";

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

export const defaultLocale: Locale = "en";
export const fallbackLocale: Locale = "en";

const localeSet = new Set<string>(supportedLocales);

function normalizeLanguageTag(input: string) {
  return input.trim().replace(/_/g, "-");
}

function matchSupportedLocale(input: string): Locale | null {
  const raw = normalizeLanguageTag(input);
  if (isSupportedLocale(raw)) return raw;

  const base = raw.split("-")[0];
  const matched = supportedLocales.find(
    (locale) => locale.toLowerCase() === base.toLowerCase() || locale.toLowerCase().startsWith(`${base.toLowerCase()}-`),
  );

  return matched ?? null;
}

export function isSupportedLocale(value: string): value is Locale {
  return localeSet.has(value);
}

export function findSupportedLocale(input?: string | null): Locale | null {
  if (!input) return null;
  return matchSupportedLocale(input);
}

export function resolveLocale(input?: string | null): Locale {
  if (!input) return defaultLocale;
  return matchSupportedLocale(input) ?? fallbackLocale;
}

export function resolveLocaleFromPriority(inputs?: Array<string | null | undefined>): Locale {
  if (!inputs?.length) return fallbackLocale;

  for (const input of inputs) {
    const matched = findSupportedLocale(input);
    if (matched) return matched;
  }

  return fallbackLocale;
}

export function getLocalePrefixFromPathname(pathname?: string | null): Locale | null {
  if (!pathname) return null;
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  if (!firstSegment || !isSupportedLocale(firstSegment)) {
    return null;
  }
  return firstSegment;
}

export function detectLocaleFromPathname(pathname?: string | null): Locale {
  return getLocalePrefixFromPathname(pathname) ?? defaultLocale;
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

export type { UiCopy };

export function getUiCopy(locale: Locale): UiCopy {
  return locale === "th" ? uiCopyByLocale.th : uiCopyByLocale.en;
}
