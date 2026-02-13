import type { Locale } from "@/lib/i18n";
import mapData from "@/content/locales/auto-translation-map.json";

type TranslationMap = Record<string, string>;

type TranslationPayload = {
  generatedAt: string;
  sourceCount: number;
  locales: Record<string, TranslationMap>;
};

const payload = mapData as TranslationPayload;

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function getLocaleTranslationMap(locale: Locale): TranslationMap | null {
  if (locale === "th" || locale === "en") return null;
  return payload.locales[locale] ?? null;
}

export function translateText(locale: Locale, source: string): string {
  const localeMap = getLocaleTranslationMap(locale);
  if (!localeMap) return source;
  return localeMap[source] ?? source;
}

export function translateDeep<T>(locale: Locale, source: T): T {
  if (locale === "th" || locale === "en") return source;

  if (typeof source === "string") {
    return translateText(locale, source) as T;
  }

  if (Array.isArray(source)) {
    return source.map((item) => translateDeep(locale, item)) as T;
  }

  if (isPlainObject(source)) {
    const entries = Object.entries(source).map(([key, value]) => [key, translateDeep(locale, value)]);
    return Object.fromEntries(entries) as T;
  }

  return source;
}
