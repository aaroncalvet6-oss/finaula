import { z } from "zod";

export const PROGRESS_VERSION = 1;

export const lessonProgressSchema = z.object({
  /** Index of the furthest section reached in the reader. */
  step: z.number().int().min(0),
  completed: z.boolean(),
  /** Question id → index of the chosen option (in content order). */
  answers: z.record(z.string(), z.number().int().min(0)),
  updatedAt: z.string(),
});

export const assessmentProgressSchema = z.object({
  attempts: z.number().int().min(0),
  bestScore: z.number().int().min(0),
  total: z.number().int().min(1),
  passed: z.boolean(),
  passedAt: z.string().optional(),
  /** Score of the passing attempt shown on the certificate. */
  passedScore: z.number().int().min(0).optional(),
  certificateId: z.string().optional(),
});

export const progressSchema = z.object({
  version: z.literal(PROGRESS_VERSION),
  /** Keyed by "courseSlug/lessonSlug". */
  lessons: z.record(z.string(), lessonProgressSchema),
  /** Keyed by course slug. */
  assessments: z.record(z.string(), assessmentProgressSchema),
  last: z.object({ course: z.string(), lesson: z.string() }).optional(),
});

export const profileSchema = z.object({
  version: z.literal(PROGRESS_VERSION),
  /** Name printed on certificates. Never leaves the browser. */
  certificateName: z.string().max(80),
});

export type LessonProgress = z.infer<typeof lessonProgressSchema>;
export type AssessmentProgress = z.infer<typeof assessmentProgressSchema>;
export type Progress = z.infer<typeof progressSchema>;
export type Profile = z.infer<typeof profileSchema>;

export const emptyProgress = (): Progress => ({ version: PROGRESS_VERSION, lessons: {}, assessments: {} });
export const emptyProfile = (): Profile => ({ version: PROGRESS_VERSION, certificateName: "" });
