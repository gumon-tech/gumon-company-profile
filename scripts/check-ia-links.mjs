import fs from "node:fs";
import path from "node:path";

const ROOTS = ["app", "components"];
const EXTS = new Set([".ts", ".tsx", ".js", ".jsx", ".mdx"]);
const LEGACY_PREFIXES = [
  `app${path.sep}ecosystem${path.sep}`,
  `app${path.sep}learning${path.sep}`,
  `app${path.sep}investors${path.sep}`,
  `app${path.sep}solutions${path.sep}`,
  `app${path.sep}team${path.sep}`,
];

const legacyRoutePattern = /href\s*=\s*["'`]\/(ecosystem|learning|investors|solutions|team)(?:\/["'`]|["'`])/g;

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, files);
      continue;
    }
    if (EXTS.has(path.extname(entry.name))) files.push(full);
  }
  return files;
}

function isLegacyFile(filePath) {
  return LEGACY_PREFIXES.some((prefix) => filePath.startsWith(prefix));
}

const files = ROOTS.flatMap((root) => walk(root));
const findings = [];

for (const file of files) {
  if (isLegacyFile(file)) continue;
  const content = fs.readFileSync(file, "utf8");
  const lines = content.split(/\r?\n/);

  lines.forEach((line, index) => {
    legacyRoutePattern.lastIndex = 0;
    if (legacyRoutePattern.test(line)) {
      findings.push(`${file}:${index + 1}: ${line.trim()}`);
    }
  });
}

if (findings.length > 0) {
  console.error("Found links to legacy routes in non-legacy files:\n");
  findings.forEach((f) => console.error(`- ${f}`));
  process.exit(1);
}

console.log("IA link check passed: no legacy links found in active pages.");
