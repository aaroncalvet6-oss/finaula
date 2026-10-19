import { z } from "zod";

export const factStatusSchema = z.enum(["oficial", "texto legal", "mutua colaboradora", "pendiente"]);

export const factSchema = z.object({
  id: z.string().regex(/^F-\d{2}$/),
  claim: z.string().min(10),
  status: factStatusSchema,
  /** Changes every year: the figure never appears in lessons. */
  annual: z.boolean(),
  /** dd/mm/yyyy, or null when the verifier did not give a date. */
  checkedAt: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/).nullable(),
  /** Official source shown to learners. Always an official domain. */
  source: z.object({ label: z.string(), url: z.string().url() }),
  /** Where it was actually verified, when it was not the official page itself. */
  verifiedIn: z.string().url().optional(),
});

const textBlock = z.object({ type: z.literal("p"), text: z.string() });
const headingBlock = z.object({ type: z.literal("h"), text: z.string() });
const conceptBlock = z.object({ type: z.literal("concept"), term: z.string(), text: z.string() });
const listBlock = z.object({ type: z.literal("list"), items: z.array(z.string()).min(1), ordered: z.boolean().optional() });
const barsBlock = z.object({
  type: z.literal("bars"),
  total: z.number().positive(),
  groups: z.array(z.object({ label: z.string(), items: z.array(z.object({ name: z.string(), amount: z.number() })) })),
});
const tableBlock = z.object({
  type: z.literal("table"),
  caption: z.string(),
  head: z.array(z.string()),
  rows: z.array(z.array(z.string())),
  /** Index of rows to emphasise (totals). */
  strong: z.array(z.number()).optional(),
});
const calcBlock = z.object({ type: z.literal("calc"), label: z.string(), value: z.string(), note: z.string().optional() });
const noteBlock = z.object({ type: z.literal("note"), text: z.string() });

export const blockSchema = z.discriminatedUnion("type", [
  textBlock,
  headingBlock,
  conceptBlock,
  listBlock,
  barsBlock,
  tableBlock,
  calcBlock,
  noteBlock,
]);

export const widgetIds = [
  "unitPrice",
  "workHours",
  "budget",
  "savingsGoal",
  "gameCurrency",
  "scamOrNot",
  "compound",
  "canOrCannot",
  "offerCompare",
  "payslip",
  "brackets",
  "taxReturn",
] as const;

export const toolSlugs = ["horas-de-trabajo", "presupuesto", "meta-de-ahorro", "interes-compuesto"] as const;

export const questionSchema = z.object({
  id: z.string(),
  prompt: z.string(),
  /** Options in content order; display order is shuffled. */
  options: z.array(z.string()).length(3),
  correct: z.number().int().min(0).max(2),
  explanation: z.string(),
  hint: z.string(),
  facts: z.array(z.string()).default([]),
});

export const lessonSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  number: z.string().regex(/^\d\.\d$/),
  title: z.string(),
  minutes: z.number().int().min(5).max(8),
  status: z.enum(["published", "draft"]),
  objective: z.string(),
  /** Every fact cited anywhere in the lesson. */
  facts: z.array(z.string()).default([]),
  tool: z.enum(toolSlugs).optional(),
  explanation: z.array(blockSchema).min(1),
  example: z.object({ title: z.string(), blocks: z.array(blockSchema).min(1) }),
  keyFact: z.string(),
  practice: z
    .object({ intro: z.string(), widgets: z.array(z.enum(widgetIds)).min(1) })
    .optional(),
  keyIdeas: z.array(z.string()).length(3),
  questions: z.array(questionSchema).min(3).max(4),
  challenge: z.string(),
});

export const bankQuestionSchema = z.object({
  id: z.string(),
  lesson: z.string(),
  facts: z.array(z.string()).default([]),
  prompt: z.string(),
  correct: z.string(),
  distractors: z.array(z.string()).length(2),
  explanation: z.string(),
});

export const courseSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  number: z.number().int().positive(),
  title: z.string(),
  /** Learning route (area of the roadmap) the course belongs to. */
  area: z.enum(["Tu dinero hoy", "Trabajo e ingresos", "Hacer crecer tu dinero", "Protégete y entiende el mundo"]),
  summary: z.string(),
  /** One sentence: what you will learn (course page header). */
  tagline: z.string().max(160),
  audience: z.string(),
  objectives: z.array(z.string()).min(3),
  motif: z.enum(["coins", "bars", "blocks"]),
  tone: z.enum(["alt", "soft"]),
  lessons: z.array(lessonSchema).min(1),
  assessment: z.object({
    count: z.number().int().positive(),
    passMark: z.number().int().positive(),
    bank: z.array(bankQuestionSchema),
  }),
});

export type Fact = z.infer<typeof factSchema>;
export type Block = z.infer<typeof blockSchema>;
export type Question = z.infer<typeof questionSchema>;
export type Lesson = z.infer<typeof lessonSchema>;
export type BankQuestion = z.infer<typeof bankQuestionSchema>;
export type Course = z.infer<typeof courseSchema>;
export type WidgetId = (typeof widgetIds)[number];
export type ToolSlug = (typeof toolSlugs)[number];
