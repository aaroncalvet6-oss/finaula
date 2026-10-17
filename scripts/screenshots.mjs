// Captures mobile screenshots of the design proposals from a running `next dev`.
// Usage: npm run dev (in another shell), then npm run screenshots
import { chromium, devices } from "@playwright/test";
import { mkdir } from "node:fs/promises";

const base = process.env.BASE_URL ?? "http://localhost:3000/finaula";
const outDir = "docs/design-proposals";
const executablePath = process.env.CI ? undefined : "/opt/pw-browsers/chromium";

const device = devices["iPhone 13"];
const viewport = device.viewport;

const pages = [
  ["portada", ""],
  ["leccion", "/leccion"],
];

await mkdir(outDir, { recursive: true });
const browser = await chromium.launch(executablePath ? { executablePath } : {});
for (const id of ["a", "b", "c"]) {
  for (const scheme of ["light", "dark"]) {
    const context = await browser.newContext({
      ...device,
      colorScheme: scheme,
      reducedMotion: "reduce",
    });
    const page = await context.newPage();
    for (const [name, path] of pages) {
      await page.goto(`${base}/propuestas/${id}${path}/`, { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);
      // Grow the viewport to the page height so fixed bars sit at the real bottom.
      const height = await page.evaluate(() => document.documentElement.scrollHeight);
      await page.setViewportSize({ width: viewport.width, height });
      const file = `${outDir}/${id}-${name}-${scheme === "light" ? "claro" : "oscuro"}.png`;
      await page.screenshot({ path: file });
      await page.setViewportSize(viewport);
      console.log(file);
    }
    await context.close();
  }
}
await browser.close();
