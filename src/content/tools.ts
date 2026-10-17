import type { ToolSlug } from "./schema";

export interface ToolInfo {
  slug: ToolSlug;
  title: string;
  summary: string;
  /** Lesson where the concept is taught: "course/lesson". */
  lesson: { course: string; slug: string; number: string; title: string };
  /** Short monospaced example for listings. */
  sample: string;
}

export const tools: ReadonlyArray<ToolInfo> = [
  {
    slug: "horas-de-trabajo",
    title: "Horas de trabajo",
    summary: "Cuántas horas de trabajo te cuesta lo que quieres comprar.",
    lesson: { course: "fundamentos-del-dinero", slug: "coste-de-oportunidad", number: "1.2", title: "Necesidades, deseos y coste de oportunidad" },
    sample: "90 € → 15 h",
  },
  {
    slug: "presupuesto",
    title: "Presupuesto",
    summary: "Reparte tus ingresos y ajusta el ahorro del 0 % al 50 %.",
    lesson: { course: "fundamentos-del-dinero", slug: "tu-presupuesto", number: "1.3", title: "Tu presupuesto: ingresos, gastos y ahorro" },
    sample: "60 € · 20 % → 12 €",
  },
  {
    slug: "meta-de-ahorro",
    title: "Meta de ahorro",
    summary: "Cuánto apartar cada semana o cada mes para llegar a tiempo.",
    lesson: { course: "fundamentos-del-dinero", slug: "ahorrar-con-una-meta", number: "1.4", title: "Ahorrar con una meta" },
    sample: "180 € ÷ 20 sem → 9 €",
  },
  {
    slug: "interes-compuesto",
    title: "Interés compuesto",
    summary: "Cómo crece el dinero con el tiempo. Una simulación, no una promesa.",
    lesson: {
      course: "fundamentos-del-dinero",
      slug: "inflacion-e-interes-compuesto",
      number: "1.6",
      title: "El tiempo y el dinero: inflación e interés compuesto",
    },
    sample: "100 € · 5 % · 20 a → 265,33 €",
  },
];

export const getTool = (slug: string) => tools.find((t) => t.slug === slug);
