// Builds docs/design-proposals/comparativa.png from the light-mode screenshots.
// Usage: npm run screenshots && npm run comparison
import { chromium } from "@playwright/test";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const dir = resolve("docs/design-proposals");
const executablePath = process.env.CI ? undefined : "/opt/pw-browsers/chromium";
const proposals = [
  ["a", "A · Cuaderno", "Editorial y sereno"],
  ["b", "B · Instrumento", "Preciso y técnico"],
  ["c", "C · Contraste", "Directo y con energía"],
];
// Inlined as data URIs: a page built with setContent cannot load file:// URLs.
const img = (id, page) =>
  `data:image/png;base64,${readFileSync(`${dir}/${id}-${page}-claro.png`).toString("base64")}`;

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  body{margin:0;background:#E9E7E1;font-family:system-ui,sans-serif;color:#1B1A17}
  .wrap{display:flex;gap:48px;padding:48px}
  .col h2{margin:0;font-size:28px;letter-spacing:-.01em}
  .col p{margin:4px 0 20px;color:#5E5A52;font-size:18px}
  .pair{display:flex;gap:16px}
  figure{margin:0}
  figcaption{font-size:15px;color:#5E5A52;margin-bottom:8px}
  .phone{width:390px;height:1100px;overflow:hidden;border-radius:28px;border:1px solid #CFCBC1;background:#fff}
  .phone img{width:390px;display:block}
</style></head><body><div class="wrap">
${proposals
  .map(
    ([id, name, note]) => `<section class="col"><h2>${name}</h2><p>${note}</p><div class="pair">
      <figure><figcaption>Portada</figcaption><div class="phone"><img src="${img(id, "portada")}"></div></figure>
      <figure><figcaption>Lección</figcaption><div class="phone"><img src="${img(id, "leccion")}"></div></figure>
    </div></section>`,
  )
  .join("")}
</div></body></html>`;

const browser = await chromium.launch(executablePath ? { executablePath } : {});
const page = await browser.newPage({ viewport: { width: 2600, height: 1300 }, deviceScaleFactor: 1.5 });
await page.setContent(html, { waitUntil: "load" });
await page.screenshot({ path: `${dir}/comparativa.png`, fullPage: true });
await browser.close();
console.log(`${dir}/comparativa.png`);
