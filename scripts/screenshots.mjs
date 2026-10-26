// Mobile screenshots of the main pages, with realistic stored progress.
// Usage: npm run build && node scripts/serve.mjs & node scripts/screenshots.mjs [outDir]
import { chromium, devices } from "@playwright/test";
import { mkdir } from "node:fs/promises";

const base = process.env.BASE_URL ?? "http://localhost:4173/finaula";
const outDir = process.argv[2] ?? "docs/screenshots";
// Optional filters after the output dir: only shots whose name contains one of them.
const only = process.argv.slice(3);
const executablePath = process.env.CI ? undefined : "/opt/pw-browsers/chromium";
const C1 = "fundamentos-del-dinero";
const now = "2026-10-17T10:00:00.000Z";

const lesson = (step, completed, answers = {}) => ({ step, completed, answers, updatedAt: now });
const allCorrect = (n, ids) => Object.fromEntries(ids.map((id) => [id, 0]));

const midProgress = {
  version: 1,
  lessons: {
    [`${C1}/que-es-el-dinero`]: lesson(5, true, allCorrect(3, ["1.1-q1", "1.1-q2", "1.1-q3"])),
    [`${C1}/coste-de-oportunidad`]: lesson(5, true, allCorrect(4, ["1.2-q1", "1.2-q2", "1.2-q3", "1.2-q4"])),
    [`${C1}/tu-presupuesto`]: lesson(1, false),
  },
  assessments: {},
  last: { course: C1, lesson: "tu-presupuesto" },
};

const passed = {
  ...midProgress,
  assessments: {
    [C1]: { attempts: 2, bestScore: 9, total: 10, passed: true, passedAt: now, passedScore: 9, certificateId: "FIN-7C21A9E4" },
  },
};

const profile = { version: 1, certificateName: "Lucía García Martín" };

const c1Lessons = ["que-es-el-dinero", "coste-de-oportunidad", "tu-presupuesto", "ahorrar-con-una-meta", "dinero-digital", "inflacion-e-interes-compuesto"];
const allDone = {
  version: 1,
  lessons: Object.fromEntries(c1Lessons.map((l) => [`${C1}/${l}`, lesson(5, true)])),
  assessments: {},
  last: { course: C1, lesson: c1Lessons[5] },
};
const allPassed = { ...allDone, assessments: passed.assessments };

const C3 = "bancos-tarjetas-y-pagos";
const c3Lessons = ["que-es-un-banco", "tu-primera-cuenta", "tarjetas", "pagos-con-el-movil", "si-algo-sale-mal"];
const c3Done = {
  version: 1,
  lessons: Object.fromEntries(c3Lessons.map((l) => [`${C3}/${l}`, lesson(5, true)])),
  assessments: {},
  last: { course: C3, lesson: c3Lessons[4] },
};

const C5 = "consumo-inteligente";
const c5Lessons = ["comparar-antes-de-comprar", "comprar-por-internet", "garantias-y-devoluciones", "suscripciones-y-paga-despues", "publicidad-y-reclamar"];
const c5Done = {
  version: 1,
  lessons: Object.fromEntries(c5Lessons.map((l) => [`${C5}/${l}`, lesson(5, true)])),
  assessments: {},
  last: { course: C5, lesson: c5Lessons[4] },
};

const C4 = "que-no-te-estafen";
const c4Lessons = ["como-piensa-un-estafador", "phishing-y-llamadas-falsas", "estafas-al-comprar-y-vender", "inversiones-milagro-y-piramides", "mulas-de-dinero-y-que-hacer"];
const c4Done = {
  version: 1,
  lessons: Object.fromEntries(c4Lessons.map((l) => [`${C4}/${l}`, lesson(5, true)])),
  assessments: {},
  last: { course: C4, lesson: c4Lessons[4] },
};

const shots = [
  { name: "01-portada", path: "/" },
  { name: "02-ficha-curso", path: `/cursos/${C1}/`, state: midProgress },
  { name: "02b-ficha-curso-sin-empezar", path: `/cursos/${C1}/` },
  { name: "02c-ficha-curso-evaluacion-desbloqueada", path: `/cursos/${C1}/`, state: allDone },
  { name: "02d-ficha-curso-aprobado", path: `/cursos/${C1}/`, state: allPassed },
  { name: "02e-ficha-curso-oscuro", path: `/cursos/${C1}/`, state: midProgress, scheme: "dark" },
  { name: "03-leccion-completa", path: `/cursos/${C1}/coste-de-oportunidad/`, state: midProgress },
  { name: "04-evaluacion", path: `/cursos/${C1}/evaluacion/`, state: allDone, run: "assessment" },
  { name: "05-certificado", path: `/cursos/${C1}/certificado/`, state: passed, profile },
  { name: "06-herramienta-horas-de-trabajo", path: "/herramientas/horas-de-trabajo/" },
  { name: "07-herramienta-presupuesto", path: "/herramientas/presupuesto/" },
  { name: "08-herramienta-meta-de-ahorro", path: "/herramientas/meta-de-ahorro/" },
  { name: "09-herramienta-interes-compuesto", path: "/herramientas/interes-compuesto/" },
  { name: "10-fuentes-y-metodologia", path: "/fuentes/" },
  { name: "13-pagina-404", path: "/esta-pagina-no-existe/" },
  { name: "14-familias-y-centros", path: "/familias/" },
  { name: "15-cursos-por-areas", path: "/cursos/" },
  { name: "16a-curso-3-leccion-3-3", path: "/cursos/bancos-tarjetas-y-pagos/tarjetas/", state: c3Done },
  { name: "16b-curso-3-leccion-3-4", path: "/cursos/bancos-tarjetas-y-pagos/pagos-con-el-movil/", state: c3Done },
  { name: "16c-curso-5-leccion-5-5", path: "/cursos/consumo-inteligente/publicidad-y-reclamar/", state: c5Done },
  { name: "16-curso-4-ficha", path: `/cursos/${C4}/` },
  { name: "17-curso-4-leccion-4-2", path: `/cursos/${C4}/phishing-y-llamadas-falsas/`, state: c4Done },
  { name: "18-curso-4-leccion-4-5", path: `/cursos/${C4}/mulas-de-dinero-y-que-hacer/`, state: c4Done },
  { name: "11-portada-oscuro", path: "/", scheme: "dark" },
  { name: "12-leccion-oscuro", path: `/cursos/${C1}/coste-de-oportunidad/`, state: midProgress, scheme: "dark" },
];

await mkdir(outDir, { recursive: true });
const browser = await chromium.launch(executablePath ? { executablePath } : {});
const device = devices["iPhone 13"];

for (const shot of shots.filter((s) => only.length === 0 || only.some((o) => s.name.includes(o)))) {
  const context = await browser.newContext({ ...device, colorScheme: shot.scheme ?? "light", reducedMotion: "reduce" });
  await context.addInitScript(
    ([state, prof]) => {
      if (state) localStorage.setItem("finaula:progress", JSON.stringify(state));
      if (prof) localStorage.setItem("finaula:profile", JSON.stringify(prof));
    },
    [shot.state ?? null, shot.profile ?? null],
  );
  const page = await context.newPage();
  await page.goto(`${base}${shot.path}`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);

  if (shot.run === "assessment") {
    await page.getByRole("button", { name: /Empezar/ }).click();
    for (let i = 0; i < 10; i++) {
      // Always pick the first option: some answers right, some wrong, to show the explanations.
      await page.locator("label:has(input[type=radio])").first().click();
      const next = page.getByRole("button", { name: /Siguiente|Terminar y corregir/ });
      await next.click();
    }
    await page.waitForTimeout(300);
  }
  if (shot.name.startsWith("05")) await page.waitForTimeout(800);

  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.setViewportSize({ width: device.viewport.width, height });
  await page.waitForTimeout(200);
  await page.screenshot({ path: `${outDir}/${shot.name}.png` });
  console.log(`${outDir}/${shot.name}.png`);
  await context.close();
}
await browser.close();
