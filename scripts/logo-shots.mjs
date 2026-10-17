// Captures the logo review screenshots from the dev-only /design page.
// Usage: npm run dev (in another shell), then node scripts/logo-shots.mjs
import { chromium, devices } from "@playwright/test";
import { mkdir } from "node:fs/promises";

const base = process.env.BASE_URL ?? "http://localhost:3000/finaula";
const outDir = "docs/design-system/logo";
const executablePath = process.env.CI ? undefined : "/opt/pw-browsers/chromium";

await mkdir(outDir, { recursive: true });
const browser = await chromium.launch(executablePath ? { executablePath } : {});
const context = await browser.newContext({ ...devices["iPhone 13"], reducedMotion: "reduce" });
const page = await context.newPage();
await page.goto(`${base}/design/`, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);

const shots = [
  ["#logo-sheet > div:nth-child(1)", "logo-claro"],
  ["#logo-sheet > div:nth-child(2)", "logo-oscuro"],
  ["#favicon-sheet", "favicon"],
  ["#header-sheet > div:nth-child(1)", "cabecera-movil-claro"],
  ["#header-sheet > div:nth-child(2)", "cabecera-movil-oscuro"],
];
for (const [selector, name] of shots) {
  await page.locator(selector).screenshot({ path: `${outDir}/${name}.png` });
  console.log(`${outDir}/${name}.png`);
}
await browser.close();
