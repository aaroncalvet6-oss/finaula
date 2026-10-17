// Lighthouse (mobile, default throttling) on the key pages of the static export.
// Usage: npm run build && npm run serve & npm run lighthouse
import * as chromeLauncher from "chrome-launcher";
import lighthouse from "lighthouse";
import { writeFile } from "node:fs/promises";

const base = process.env.BASE_URL ?? "http://localhost:4173/finaula";
const pages = {
  Portada: "/",
  Curso: "/cursos/fundamentos-del-dinero/",
  "Lección": "/cursos/fundamentos-del-dinero/coste-de-oportunidad/",
  Herramienta: "/herramientas/interes-compuesto/",
};
const categories = ["performance", "accessibility", "best-practices", "seo"];
const target = 95;
const runs = Number(process.env.LH_RUNS ?? 3);

const chrome = await chromeLauncher.launch({
  chromePath: process.env.CHROME_PATH ?? (process.env.CI ? undefined : "/opt/pw-browsers/chromium"),
  chromeFlags: ["--headless=new", "--no-sandbox"],
});
const results = {};
let failed = false;
try {
  for (const [name, path] of Object.entries(pages)) {
    // Several runs and the median, like Lighthouse CI: single runs vary by a few points.
    const reports = [];
    for (let i = 0; i < runs; i++) {
      const { lhr } = await lighthouse(`${base}${path}`, { port: chrome.port, output: "json", onlyCategories: categories, logLevel: "error" });
      reports.push(lhr);
    }
    const median = (c) => {
      const sorted = reports.map((r) => Math.round((r.categories[c].score ?? 0) * 100)).sort((a, b) => a - b);
      return sorted[Math.floor(sorted.length / 2)];
    };
    results[name] = Object.fromEntries(categories.map((c) => [c, median(c)]));
    const lhr = reports[0];
    console.log(`${name}: host benchmarkIndex ${Math.round(lhr.environment.benchmarkIndex)}`);
    const low = Object.entries(results[name]).filter(([, s]) => s < target);
    if (low.length) {
      failed = true;
      for (const [c] of low) {
        const audits = lhr.categories[c].auditRefs
          .map((r) => lhr.audits[r.id])
          .filter((a) => a.score !== null && a.score < 0.9 && a.scoreDisplayMode !== "informative")
          .map((a) => `    - ${a.id}: ${a.title}${a.displayValue ? ` (${a.displayValue})` : ""}`);
        console.log(`${name} · ${c} below ${target}:\n${audits.join("\n")}`);
      }
    }
  }
} finally {
  await chrome.kill();
}
console.table(results);
await writeFile("docs/lighthouse.json", `${JSON.stringify({ date: new Date().toISOString(), mobile: true, runs, results }, null, 2)}\n`);
process.exit(failed ? 1 : 0);
