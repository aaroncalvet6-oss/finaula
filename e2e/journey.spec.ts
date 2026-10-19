import { expect, test, type Page } from "@playwright/test";
import { fundamentosDelDinero as course } from "../src/content/courses/fundamentos-del-dinero";

const lesson = course.lessons[0];

async function answerLessonQuestions(page: Page) {
  for (const q of lesson.questions) {
    await page.locator("label", { hasText: q.options[q.correct] }).click();
    await page.getByRole("button", { name: "Comprobar" }).click();
    await expect(page.getByText("Correcto.", { exact: true }).last()).toBeVisible();
  }
}

test("home → lesson → assessment → certificate", async ({ page }) => {
  // Home: first visit shows «Empezar».
  await page.goto("./");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Entiende tu dinero");
  await expect(page.getByText("Por qué existe Finaula").first()).toBeVisible();
  await page.getByRole("link", { name: /Empezar el primer curso/ }).click();

  // Lesson 1.1: go through every section, answer, finish.
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(lesson.title);
  const next = page.getByRole("button", { name: /Continuar|Terminar lección/ });
  while (!(await page.locator("#preguntas").isVisible())) await next.click();
  await expect(next).toBeDisabled();
  await answerLessonQuestions(page);
  while (await next.isVisible()) await next.click();
  await expect(page.getByText("Lección completada")).toBeVisible();

  // Progress survives a reload: the home button now says «Continuar».
  await page.goto("./");
  await expect(page.getByRole("link", { name: /^Continuar/ }).first()).toBeVisible();

  // Assessment: answer everything correctly.
  await page.goto(`cursos/${course.slug}/evaluacion/`);
  await page.getByRole("button", { name: /Empezar la evaluación/ }).click();
  for (let i = 0; i < course.assessment.count; i++) {
    const prompt = (await page.getByRole("heading", { level: 2 }).textContent())?.trim();
    const q = course.assessment.bank.find((b) => b.prompt === prompt);
    expect(q, `unknown question: ${prompt}`).toBeDefined();
    await page.locator("label", { hasText: q!.correct }).click();
    await page.getByRole("button", { name: /Siguiente|Terminar y corregir/ }).click();
  }
  await expect(page.getByText(`${course.assessment.count}/${course.assessment.count}`)).toBeVisible();
  await expect(page.getByText("Has aprobado.")).toBeVisible();

  // Certificate: name, disclaimer and downloads.
  await page.getByRole("link", { name: /Ver tu certificado/ }).click();
  await expect(page.getByText("no tiene validez académica oficial").first()).toBeVisible();
  const download = page.getByRole("button", { name: /Descargar imagen/ });
  await expect(download).toBeDisabled();
  await page.getByLabel("Nombre que aparecerá en el certificado").fill("Lucía García");
  await expect(download).toBeEnabled();
  const [file] = await Promise.all([page.waitForEvent("download"), download.click()]);
  expect(file.suggestedFilename()).toBe(`finaula-certificado-${course.slug}.png`);
  const [pdf] = await Promise.all([page.waitForEvent("download"), page.getByRole("button", { name: /Descargar PDF/ }).click()]);
  expect(pdf.suggestedFilename()).toBe(`finaula-certificado-${course.slug}.pdf`);

  // Everything stays in the browser, under the finaula: prefix.
  const keys = await page.evaluate(() => Object.keys(localStorage));
  expect(keys.sort()).toEqual(["finaula:profile", "finaula:progress"]);
});

test("a failed assessment explains every mistake", async ({ page }) => {
  await page.goto(`cursos/${course.slug}/evaluacion/`);
  await page.getByRole("button", { name: /Empezar la evaluación/ }).click();
  for (let i = 0; i < course.assessment.count; i++) {
    const prompt = (await page.getByRole("heading", { level: 2 }).textContent())?.trim();
    const q = course.assessment.bank.find((b) => b.prompt === prompt)!;
    await page.locator("label", { hasText: q.distractors[0] }).click();
    await page.getByRole("button", { name: /Siguiente|Terminar y corregir/ }).click();
  }
  await expect(page.getByText(`0/${course.assessment.count}`)).toBeVisible();
  await expect(page.getByRole("heading", { name: `Tus ${course.assessment.count} fallos, explicados` })).toBeVisible();
  await expect(page.getByRole("link", { name: /Repasar la lección/ })).toHaveCount(course.assessment.count);
  await expect(page.getByRole("link", { name: /Ver tu certificado/ })).toHaveCount(0);
});

test("a lesson cannot be finished with unanswered questions", async ({ page }) => {
  await page.addInitScript(() =>
    localStorage.setItem(
      "finaula:progress",
      JSON.stringify({
        version: 1,
        lessons: { "fundamentos-del-dinero/que-es-el-dinero": { step: 9, completed: false, answers: {}, updatedAt: "2026-10-17T10:00:00.000Z" } },
        assessments: {},
      }),
    ),
  );
  await page.goto(`cursos/${course.slug}/${lesson.slug}/`);
  await expect(page.getByRole("button", { name: /Terminar lección/ })).toBeDisabled();
  await expect(page.getByText("Responde las preguntas para continuar.")).toBeVisible();
});
