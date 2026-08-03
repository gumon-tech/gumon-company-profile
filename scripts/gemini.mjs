#!/usr/bin/env node
/**
 * Minimal Gemini client for copy review and localization work on this site.
 *
 * Usage:
 *   GEMINI_API_KEY=... node scripts/gemini.mjs --prompt "..." [--model gemini-3-pro-preview] [--json]
 *   cat payload.json | GEMINI_API_KEY=... node scripts/gemini.mjs --prompt "..." --stdin --json
 *
 * The key is never written to disk or logged. See docs/gemini-workflow.md.
 */

const API_BASE = "https://generativelanguage.googleapis.com/v1beta/models";
const DEFAULT_MODEL = "gemini-3.1-pro-preview";

function parseArgs(argv) {
  const args = { model: DEFAULT_MODEL, json: false, stdin: false, prompt: "" };
  for (let i = 2; i < argv.length; i += 1) {
    const key = argv[i];
    if (key === "--json") args.json = true;
    else if (key === "--stdin") args.stdin = true;
    else if (key === "--prompt") args.prompt = argv[++i] ?? "";
    else if (key === "--model") args.model = argv[++i] ?? DEFAULT_MODEL;
  }
  return args;
}

async function readStdin() {
  if (process.stdin.isTTY) return "";
  const chunks = [];
  for await (const chunk of process.stdin) chunks.push(chunk);
  return Buffer.concat(chunks).toString("utf8");
}

async function main() {
  const args = parseArgs(process.argv);
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.error("GEMINI_API_KEY is not set. See docs/gemini-workflow.md.");
    process.exit(1);
  }
  if (!args.prompt) {
    console.error("Missing --prompt.");
    process.exit(1);
  }

  const extra = args.stdin ? await readStdin() : "";
  const text = extra ? `${args.prompt}\n\n${extra}` : args.prompt;

  const body = {
    contents: [{ role: "user", parts: [{ text }] }],
    generationConfig: args.json ? { responseMimeType: "application/json" } : {},
  };

  const res = await fetch(`${API_BASE}/${args.model}:generateContent`, {
    method: "POST",
    headers: { "content-type": "application/json", "x-goog-api-key": apiKey },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    console.error(`Gemini HTTP ${res.status}: ${(await res.text()).slice(0, 500)}`);
    process.exit(1);
  }

  const data = await res.json();
  const out = (data.candidates?.[0]?.content?.parts ?? []).map((p) => p.text ?? "").join("");
  if (!out) {
    console.error(`Empty response. finishReason=${data.candidates?.[0]?.finishReason ?? "unknown"}`);
    process.exit(1);
  }
  process.stdout.write(out);
}

main().catch((err) => {
  console.error(err?.message ?? String(err));
  process.exit(1);
});
