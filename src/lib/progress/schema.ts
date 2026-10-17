// zod/mini keeps the client bundle small: this schema runs in every page.
import * as z from "zod/mini";

export const PROGRESS_VERSION = 1;

const count = () => z.int().check(z.minimum(0));

export const lessonProgressSchema = z.object({
  /** Index of the furthest section reached in the reader. */
  step: count(),
  completed: z.boolean(),
  /** Question id → index of the chosen option (in content order). */
  answers: z.record(z.string(), count()),
  updatedAt: z.string(),
});

export const assessmentProgressSchema = z.object({
  attempts: count(),
  bestScore: count(),
  total: z.int().check(z.minimum(1)),
  passed: z.boolean(),
  passedAt: z.optional(z.string()),
  /** Score of the passing attempt shown on the certificate. */
  passedScore: z.optional(count()),
  certificateId: z.optional(z.string()),
});

export const progressSchema = z.object({
  version: z.literal(PROGRESS_VERSION),
  /** Keyed by "courseSlug/lessonSlug". */
  lessons: z.record(z.string(), lessonProgressSchema),
  /** Keyed by course slug. */
  assessments: z.record(z.string(), assessmentProgressSchema),
  last: z.optional(z.object({ course: z.string(), lesson: z.string() })),
});

export const profileSchema = z.object({
  version: z.literal(PROGRESS_VERSION),
  /** Name printed on certificates. Never leaves the browser. */
  certificateName: z.string().check(z.maxLength(80)),
});

export type LessonProgress = z.infer<typeof lessonProgressSchema>;
export type AssessmentProgress = z.infer<typeof assessmentProgressSchema>;
export type Progress = z.infer<typeof progressSchema>;
export type Profile = z.infer<typeof profileSchema>;

export const emptyProgress = (): Progress => ({ version: PROGRESS_VERSION, lessons: {}, assessments: {} });
export const emptyProfile = (): Profile => ({ version: PROGRESS_VERSION, certificateName: "" });
