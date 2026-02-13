import ts from "typescript";
import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SOURCE_FILES = [
  ...((await fs.readdir(path.join(ROOT, "content", "locales"))).filter((f) => f.endsWith(".ts")).map((f) => path.join(ROOT, "content", "locales", f))),
  path.join(ROOT, "lib", "companyInfo.ts"),
];

const OUT_FILE = path.join(ROOT, "content", "locales", "auto-translation-map.json");
const SOURCE_LIST_FILE = path.join(ROOT, "docs", "translation", "translation-source-strings.json");

const ALL_TARGET_LOCALES = [
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
];

const GOOGLE_LOCALE_MAP = {
  "pt-BR": "pt",
  "zh-CN": "zh-CN",
  "zh-TW": "zh-TW",
  he: "he",
};

function isEnProperty(node) {
  if (!ts.isPropertyAssignment(node)) return false;
  if (ts.isIdentifier(node.name)) return node.name.text === "en";
  if (ts.isStringLiteral(node.name)) return node.name.text === "en";
  return false;
}

function collectStringLiterals(node, out) {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    out.push(node.text);
  }

  if (ts.isTemplateExpression(node)) {
    // Keep template texts only when there are no expressions in between.
    const spansHaveExpr = node.templateSpans.some((span) => span.expression);
    if (!spansHaveExpr) {
      out.push(node.head.text + node.templateSpans.map((s) => s.literal.text).join(""));
    }
  }

  ts.forEachChild(node, (child) => collectStringLiterals(child, out));
}

function shouldIncludeString(value) {
  const text = value.trim();
  if (text.length < 2) return false;
  if (text.length > 260) return false;
  if (/^\/?[a-z0-9._-]+\/[a-z0-9._/-]+$/i.test(text)) return false;
  if (/^(https?:\/\/|mailto:|\/)/i.test(text)) return false;
  if (/^[0-9\s.,:+\-<>=()%]+$/.test(text)) return false;
  if (/[\u0E00-\u0E7F]/.test(text)) return false;
  if (!/[A-Za-z]/.test(text)) return false;
  return true;
}

async function fetchTranslate(sl, tl, q) {
  const params = new URLSearchParams({
    client: "gtx",
    sl,
    tl,
    dt: "t",
    q,
  });

  const url = `https://translate.googleapis.com/translate_a/single?${params.toString()}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);

  const response = await fetch(url, { signal: controller.signal }).finally(() => {
    clearTimeout(timeout);
  });

  if (!response.ok) {
    throw new Error(`translate api ${response.status}`);
  }

  const data = await response.json();
  const segments = Array.isArray(data?.[0]) ? data[0] : [];
  return segments.map((seg) => seg?.[0] ?? "").join("");
}

function chunkStrings(strings, maxChars = 3000) {
  const chunks = [];
  let current = [];
  let size = 0;

  for (const item of strings) {
    const next = item.length + 14;
    if (current.length && size + next > maxChars) {
      chunks.push(current);
      current = [];
      size = 0;
    }
    current.push(item);
    size += next;
  }

  if (current.length) chunks.push(current);
  return chunks;
}

async function translateBatch(locale, strings) {
  const tl = GOOGLE_LOCALE_MAP[locale] ?? locale;
  const separator = "\n⟪GUMON_SEG_SPLIT⟫\n";

  const joined = strings.join(separator);

  const translatedJoined = await withRetry(() => fetchTranslate("en", tl, joined));
  const parts = translatedJoined.split(separator);

  if (parts.length !== strings.length) {
    console.log(`${locale}: batch split mismatch (${parts.length}/${strings.length}), fallback single mode`);
    const fallback = [];
    for (let i = 0; i < strings.length; i += 1) {
      const translated = await withRetry(() => fetchTranslate("en", tl, strings[i]));
      fallback.push(translated);
    }
    return fallback;
  }

  return parts;
}

async function withRetry(fn, retries = 4) {
  let attempt = 0;
  let lastError = null;
  while (attempt < retries) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      attempt += 1;
      await new Promise((resolve) => setTimeout(resolve, 600 * attempt));
    }
  }
  throw lastError;
}

function collectEnglishSourceStrings(filePath) {
  const content = ts.sys.readFile(filePath) ?? "";
  const sourceFile = ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const found = [];

  function walk(node) {
    if (ts.isPropertyAssignment(node) && isEnProperty(node) && ts.isObjectLiteralExpression(node.initializer)) {
      collectStringLiterals(node.initializer, found);
    }
    ts.forEachChild(node, walk);
  }

  walk(sourceFile);

  return found.map((value) => value.trim()).filter(shouldIncludeString);
}

async function main() {
  const localeArg = process.argv.find((arg) => arg.startsWith("--locale="));
  const localeFilter = localeArg ? localeArg.replace("--locale=", "").trim() : "";
  const targetLocales = localeFilter ? ALL_TARGET_LOCALES.filter((locale) => locale === localeFilter) : ALL_TARGET_LOCALES;
  if (!targetLocales.length) {
    throw new Error(`No valid target locale found for filter: ${localeFilter}`);
  }

  const sourceSet = new Set();

  for (const file of SOURCE_FILES) {
    const strings = collectEnglishSourceStrings(file);
    strings.forEach((value) => sourceSet.add(value));
  }

  const sourceStrings = Array.from(sourceSet).sort((a, b) => a.localeCompare(b));
  await fs.writeFile(
    SOURCE_LIST_FILE,
    `${JSON.stringify({ count: sourceStrings.length, strings: sourceStrings }, null, 2)}\n`,
    "utf8",
  );

  let existing = {};
  try {
    const raw = await fs.readFile(OUT_FILE, "utf8");
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object" && parsed.locales) {
      existing = parsed.locales;
    }
  } catch {
    existing = {};
  }

  const output = { ...existing };

  for (const locale of targetLocales) {
    const currentMap = { ...(existing[locale] ?? {}) };
    const pending = sourceStrings.filter((text) => !currentMap[text]);

    if (!pending.length) {
      output[locale] = currentMap;
      console.log(`${locale}: already up-to-date (${Object.keys(currentMap).length})`);
      continue;
    }

    console.log(`${locale}: translating ${pending.length} strings...`);
    const chunks = chunkStrings(pending, 8000);

    let doneChunks = 0;
    for (const chunk of chunks) {
      const translatedChunk = await translateBatch(locale, chunk);
      chunk.forEach((source, index) => {
        currentMap[source] = translatedChunk[index] || source;
      });
      doneChunks += 1;
      if (doneChunks % 2 === 0 || doneChunks === chunks.length) {
        const partialPayload = {
          generatedAt: new Date().toISOString(),
          sourceCount: sourceStrings.length,
          locales: { ...output, [locale]: currentMap },
        };
        await fs.writeFile(OUT_FILE, `${JSON.stringify(partialPayload, null, 2)}\n`, "utf8");
        console.log(`${locale}: chunk ${doneChunks}/${chunks.length}`);
      }
    }

    output[locale] = currentMap;
    console.log(`${locale}: done (${Object.keys(currentMap).length})`);
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    sourceCount: sourceStrings.length,
    locales: output,
  };

  await fs.writeFile(OUT_FILE, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  console.log(`Wrote ${path.relative(ROOT, OUT_FILE)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
