import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { allCourses, courses, lessonFacts } from "@/content/courses";
import { draftCourses } from "@/content/drafts";
import { factById, pendingFacts } from "@/content/facts";
import { courseSchema } from "@/content/schema";

// Draft courses (src/content/drafts/) may cite pending facts, so they never reach the site.
// When all their facts are verified they move to the catalogue and content.test.ts checks them.

const pendingById = new Map(pendingFacts.map((f) => [f.id, f]));

function sourceFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const path = join(dir, e.name);
    if (e.isDirectory()) return path.endsWith(join("content", "drafts")) ? [] : sourceFiles(path);
    return /\.(ts|tsx|mjs)$/.test(e.name) ? [path] : [];
  });
}

describe("draft courses", () => {
  it("are valid courses", () => {
    for (const c of draftCourses) expect(() => courseSchema.parse(c), c.slug).not.toThrow();
  });

  it("cite only facts registered in facts.ts, verified or pending", () => {
    for (const c of draftCourses) {
      const ids = [...c.lessons.flatMap(lessonFacts), ...c.assessment.bank.flatMap((q) => q.facts)];
      for (const id of ids) expect(factById.has(id) || pendingById.has(id), `${c.slug} cites unknown ${id}`).toBe(true);
    }
  });

  it("declare the facts their questions cite", () => {
    for (const l of draftCourses.flatMap((c) => c.lessons)) {
      for (const q of l.questions) for (const id of q.facts) expect(l.facts, l.number).toContain(id);
    }
  });

  it("keep pending facts pending in docs/fuentes.md", () => {
    const fuentes = readFileSync("docs/fuentes.md", "utf8");
    for (const f of pendingFacts) {
      expect(f.status).toBe("pendiente");
      const row = fuentes.split("\n").find((line) => line.startsWith(`| ${f.id} |`));
      expect(row, f.id).toBeDefined();
      expect(row!.split("|").map((c) => c.trim()).at(-2), f.id).toBe("Pendiente");
    }
  });

  it("never appear on the site", () => {
    const slugs = draftCourses.map((c) => c.slug);
    for (const c of [...allCourses, ...courses]) expect(slugs).not.toContain(c.slug);
    for (const file of [...sourceFiles("src"), ...sourceFiles("scripts")]) {
      expect(readFileSync(file, "utf8"), file).not.toMatch(/from "[^"]*\/drafts["/]/);
    }
  });

  it("link every lesson to the course 1 lesson it extends", () => {
    const c1 = allCourses[0];
    for (const l of draftCourses.flatMap((c) => c.lessons)) {
      expect(l.extends, l.number).toBeDefined();
      const [course, slug] = l.extends!.split("/");
      expect(course, l.number).toBe(c1.slug);
      expect(c1.lessons.map((x) => x.slug), l.number).toContain(slug);
    }
  });

  it("follow the content style rules", () => {
    const all = JSON.stringify(draftCourses);
    expect(/\p{Extended_Pictographic}/u.test(all)).toBe(false);
    expect(/borrador/i.test(all)).toBe(false);
    for (const l of draftCourses.flatMap((c) => c.lessons)) {
      const text = JSON.stringify(l);
      if (/rentabilidad/i.test(text)) expect(text, l.number).toMatch(/no está garantizada|ninguna rentabilidad está garantizada/i);
    }
  });

  it("use banks of 12, 8 per attempt, pass with 6", () => {
    for (const c of draftCourses) {
      expect(c.assessment, c.slug).toMatchObject({ count: 8, passMark: 6 });
      expect(c.assessment.bank, c.slug).toHaveLength(12);
    }
  });
});
