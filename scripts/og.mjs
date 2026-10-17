// Renders the social images (1200×630) into public/og/.
// Usage: node scripts/og.mjs
import { chromium } from "@playwright/test";
import { mkdtemp, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const executablePath = process.env.CI ? undefined : "/opt/pw-browsers/chromium";
const font = (pkg, file) => pathToFileURL(resolve(`node_modules/@fontsource-variable/${pkg}/files/${file}`)).href;

const logo = `<svg width="64" height="64" viewBox="0 0 32 32">
<path d="M17 15V1A14 14 0 0 1 31 15Z" fill="#F2C14E"/>
<path d="M4 17H15V31H4A3 3 0 0 1 1 28V20A3 3 0 0 1 4 17Z" fill="#B8441F"/>
<path d="M17 17H28A3 3 0 0 1 31 20V28A3 3 0 0 1 28 31H17Z" fill="#7A2A0E"/></svg>`;

const covers = {
  coins: `<rect x="40" y="270" width="160" height="160" rx="24" fill="#FFFCF7" opacity=".2"/><path d="M220 250V80A170 170 0 0 1 390 250Z" fill="#F2C14E"/><rect x="220" y="270" width="160" height="160" rx="24" fill="#B8441F"/>`,
  bars: `<rect x="70" y="250" width="80" height="230" rx="16" fill="#FFFCF7" opacity=".2"/><rect x="180" y="160" width="80" height="320" rx="16" fill="#FFFCF7" opacity=".2"/><rect x="290" y="70" width="80" height="410" rx="16" fill="#F2C14E"/>`,
  tools: `<rect x="70" y="250" width="120" height="120" rx="20" fill="#FFFCF7" opacity=".2"/><circle cx="300" cy="200" r="90" fill="#F2C14E"/><rect x="230" y="320" width="140" height="140" rx="20" fill="#B8441F"/>`,
};

const images = [
  { file: "finaula", eyebrow: "Formación financiera para jóvenes", title: "Entiende tu dinero antes de que otros decidan por ti.", meta: "Cursos cortos · Herramientas · Certificados", cover: "coins", band: "#1F5A55" },
  { file: "fundamentos-del-dinero", eyebrow: "Curso 1 · Tu dinero hoy", title: "Fundamentos del dinero", meta: "6 lecciones · 43 min · evaluación y certificado", cover: "coins", band: "#1F5A55" },
  { file: "tu-primer-sueldo", eyebrow: "Curso 2 · Trabajo e ingresos", title: "Tu primer sueldo", meta: "5 lecciones · 36 min · evaluación y certificado", cover: "bars", band: "#7A2A0E" },
  { file: "herramientas", eyebrow: "Herramientas", title: "Practica con tus cifras", meta: "Horas de trabajo · Presupuesto · Meta de ahorro · Interés compuesto", cover: "tools", band: "#1F5A55" },
];

const page = (img) => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:B;src:url(${font("bricolage-grotesque", "bricolage-grotesque-latin-wght-normal.woff2")}) format("woff2");font-weight:200 800}
@font-face{font-family:I;src:url(${font("inter", "inter-latin-wght-normal.woff2")}) format("woff2");font-weight:100 900}
@font-face{font-family:M;src:url(${font("geist-mono", "geist-mono-latin-wght-normal.woff2")}) format("woff2");font-weight:100 900}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;background:#FFFCF7;color:#1A1612;font-family:I;display:flex}
.left{flex:1;padding:64px 56px 56px 72px;display:flex;flex-direction:column}
.brand{display:flex;align-items:center;gap:18px;font-family:B;font-weight:650;font-size:44px;letter-spacing:-.03em}
.eyebrow{margin-top:64px;font-weight:600;font-size:22px;letter-spacing:.04em;text-transform:uppercase;color:#62574D;display:flex;gap:12px;align-items:center}
.eyebrow i{width:14px;height:14px;border-radius:3px;background:#B8441F;display:inline-block}
h1{margin-top:20px;font-family:B;font-weight:600;font-size:${img.title.length > 30 ? 60 : 76}px;line-height:1.04;letter-spacing:-.03em}
.meta{margin-top:auto;font-family:M;font-size:22px;color:#62574D}
.band{width:420px;background:${img.band}}
</style></head><body>
<div class="left"><div class="brand">${logo}finaula</div><p class="eyebrow"><i></i>${img.eyebrow}</p><h1>${img.title}</h1><p class="meta">${img.meta}</p></div>
<div class="band"><svg width="420" height="630" viewBox="0 0 420 630"><g transform="translate(0,80)">${covers[img.cover]}</g></svg></div>
</body></html>`;

const dir = await mkdtemp(join(tmpdir(), "finaula-og-"));
const browser = await chromium.launch(executablePath ? { executablePath } : {});
const tab = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const img of images) {
  const html = join(dir, `${img.file}.html`);
  await writeFile(html, page(img));
  await tab.goto(pathToFileURL(html).href);
  await tab.evaluate(() => document.fonts.ready);
  await tab.screenshot({ path: `public/og/${img.file}.png` });
  console.log(`public/og/${img.file}.png`);
}
await browser.close();
