import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { allCourses, courses, isPublishable, lessonFacts } from "@/content/courses";
import { factById, facts } from "@/content/facts";
import { tools } from "@/content/tools";

const fuentes = readFileSync("docs/fuentes.md", "utf8");

/** Rows of docs/fuentes.md: id → status cell. */
function registryStatuses(): Map<string, string> {
  const map = new Map<string, string>();
  for (const line of fuentes.split("\n")) {
    const m = /^\| (F-\d{2}) \|/.exec(line);
    if (!m) continue;
    const cells = line.split("|").map((c) => c.trim());
    map.set(m[1], cells[cells.length - 2]);
  }
  return map;
}

const statusLabel: Record<string, string> = {
  oficial: "Verificado (oficial)",
  "texto legal": "Verificado (texto legal)",
  "mutua colaboradora": "Verificado (mutua colaboradora)",
};

const officialHosts = [
  "www.boe.es",
  "boe.es",
  "sede.agenciatributaria.gob.es",
  "www.seg-social.es",
  "www.lamoncloa.gob.es",
  "www.educacionfpydeportes.gob.es",
  "clientebancario.bde.es",
  "www.cnmv.es",
  "www.interior.gob.es",
  "www.bde.es",
  "www.aepd.es",
  "portal-cec.consumo.gob.es",
  "www.comunidad.madrid",
  "www.cnmc.es",
  "www.dsca.gob.es",
];

describe("fact registry", () => {
  const registry = registryStatuses();

  it("mirrors docs/fuentes.md", () => {
    for (const f of facts) {
      expect(registry.get(f.id), f.id).toBe(statusLabel[f.status]);
    }
  });

  it("includes every verified fact of the registry", () => {
    for (const [id, status] of registry) {
      if (status.startsWith("Verificado")) expect(factById.has(id), id).toBe(true);
    }
  });

  it("always shows learners an official source", () => {
    for (const f of facts) {
      expect(officialHosts, `${f.id} ${f.source.url}`).toContain(new URL(f.source.url).host);
    }
  });
});

describe("lessons only use verified facts", () => {
  for (const course of allCourses) {
    for (const lesson of course.lessons) {
      it(`${lesson.number} cites only verified facts`, () => {
        for (const id of lessonFacts(lesson)) {
          const fact = factById.get(id);
          expect(fact, `${lesson.number} cites unknown ${id}`).toBeDefined();
          expect(fact?.status, `${lesson.number} cites ${id}`).not.toBe("pendiente");
        }
      });
      it(`${lesson.number} declares the facts its questions cite`, () => {
        for (const q of lesson.questions) for (const id of q.facts) expect(lesson.facts).toContain(id);
      });
    }
    for (const q of course.assessment.bank) {
      it(`${q.id} cites only verified facts`, () => {
        for (const id of q.facts) expect(factById.get(id)?.status ?? "pendiente").not.toBe("pendiente");
      });
    }
  }
});

describe("course rules", () => {
  it("publishes every course in the catalogue", () => {
    expect(courses.map((c) => c.slug)).toEqual([
      "fundamentos-del-dinero",
      "tu-primer-sueldo",
      "bancos-tarjetas-y-pagos",
      "que-no-te-estafen",
      "consumo-inteligente",
    ]);
    expect(allCourses.every(isPublishable)).toBe(true);
  });

  it("hides a course with a draft lesson or an unverified fact", () => {
    const base = allCourses[1];
    const draft = { ...base, lessons: base.lessons.map((l, i) => (i === 0 ? { ...l, status: "draft" as const } : l)) };
    expect(isPublishable(draft)).toBe(false);
    const unverified = { ...base, lessons: base.lessons.map((l, i) => (i === 0 ? { ...l, facts: ["F-99"] } : l)) };
    expect(isPublishable(unverified)).toBe(false);
  });

  it("has the requested lesson counts and assessment sizes", () => {
    const [c1, c2] = allCourses;
    expect(c1.lessons).toHaveLength(6);
    expect(c2.lessons).toHaveLength(5);
    expect(c1.assessment).toMatchObject({ count: 10, passMark: 7 });
    expect(c1.assessment.bank).toHaveLength(15);
    expect(c2.assessment).toMatchObject({ count: 8, passMark: 6 });
    expect(c2.assessment.bank).toHaveLength(12);
  });

  it("uses unique ids and slugs", () => {
    const ids = allCourses.flatMap((c) => [
      ...c.lessons.map((l) => `${c.slug}/${l.slug}`),
      ...c.lessons.flatMap((l) => l.questions.map((q) => q.id)),
      ...c.assessment.bank.map((q) => q.id),
    ]);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("assessment questions point to an existing lesson and have distinct options", () => {
    for (const c of allCourses) {
      const numbers = c.lessons.map((l) => l.number);
      for (const q of c.assessment.bank) {
        expect(numbers).toContain(q.lesson);
        expect(new Set([q.correct, ...q.distractors]).size).toBe(3);
      }
    }
  });
});

/** All learner-facing strings of a lesson. */
function lessonText(l: (typeof allCourses)[number]["lessons"][number]): string {
  return JSON.stringify(l);
}

describe("content style", () => {
  const emoji = /\p{Extended_Pictographic}/u;
  const all = JSON.stringify(allCourses) + JSON.stringify(tools);

  it("contains no emojis", () => {
    expect(emoji.test(all)).toBe(false);
  });

  it("every mention of returns says they are not guaranteed", () => {
    for (const c of allCourses) {
      for (const l of c.lessons) {
        const text = lessonText(l);
        if (/rentabilidad/i.test(text)) expect(text, l.number).toMatch(/no está garantizada|ninguna rentabilidad está garantizada/i);
      }
    }
  });

  it("labels illustrative numbers as invented in lessons with salaries, rates or brackets", () => {
    for (const number of ["1.2", "1.6", "2.2", "2.3", "2.4", "2.5"]) {
      const lesson = allCourses.flatMap((c) => c.lessons).find((l) => l.number === number)!;
      expect(lessonText(lesson), number).toMatch(/inventad/);
    }
  });

  it("does not use the word «borrador» (owner's instruction for the Renta lesson)", () => {
    expect(/borrador/i.test(all)).toBe(false);
  });

  it("links tools and lessons both ways", () => {
    for (const t of tools) {
      const lesson = allCourses.find((c) => c.slug === t.lesson.course)?.lessons.find((l) => l.slug === t.lesson.slug);
      expect(lesson?.tool, t.slug).toBe(t.slug);
    }
  });
});

describe("home page content", () => {
  it("only shows verified facts", async () => {
    const { homeFactIds } = await import("@/content/home");
    for (const id of homeFactIds) expect(factById.get(id)?.status ?? "pendiente", id).not.toBe("pendiente");
  });

  it("signs the founder story without a name", async () => {
    const { founderStory } = await import("@/content/home");
    expect(founderStory.signature).toBe("El fundador");
  });
});
