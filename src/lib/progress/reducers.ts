import type { Progress } from "./schema";

/** Pure state transitions, shared by the store and tested in isolation. */

export const lessonKey = (course: string, lesson: string) => `${course}/${lesson}`;

const now = () => new Date().toISOString();

export function reachStep(p: Progress, course: string, lesson: string, step: number): Progress {
  const key = lessonKey(course, lesson);
  const prev = p.lessons[key] ?? { step: 0, completed: false, answers: {}, updatedAt: now() };
  return {
    ...p,
    last: { course, lesson },
    lessons: { ...p.lessons, [key]: { ...prev, step: Math.max(prev.step, step), updatedAt: now() } },
  };
}

export function answerQuestion(p: Progress, course: string, lesson: string, questionId: string, option: number): Progress {
  const key = lessonKey(course, lesson);
  const prev = p.lessons[key] ?? { step: 0, completed: false, answers: {}, updatedAt: now() };
  return {
    ...p,
    last: { course, lesson },
    lessons: { ...p.lessons, [key]: { ...prev, answers: { ...prev.answers, [questionId]: option }, updatedAt: now() } },
  };
}

export function completeLesson(p: Progress, course: string, lesson: string, lastStep: number): Progress {
  const next = reachStep(p, course, lesson, lastStep);
  const key = lessonKey(course, lesson);
  return { ...next, lessons: { ...next.lessons, [key]: { ...next.lessons[key], completed: true } } };
}

export function recordAssessment(
  p: Progress,
  course: string,
  score: number,
  total: number,
  passMark: number,
  makeId: () => string,
): Progress {
  const prev = p.assessments[course];
  const passed = score >= passMark;
  const alreadyPassed = prev?.passed ?? false;
  return {
    ...p,
    assessments: {
      ...p.assessments,
      [course]: {
        attempts: (prev?.attempts ?? 0) + 1,
        bestScore: Math.max(prev?.bestScore ?? 0, score),
        total,
        passed: alreadyPassed || passed,
        // The first pass is the one recorded on the certificate.
        passedAt: alreadyPassed ? prev?.passedAt : passed ? now() : undefined,
        passedScore: alreadyPassed ? prev?.passedScore : passed ? score : undefined,
        certificateId: alreadyPassed ? prev?.certificateId : passed ? makeId() : undefined,
      },
    },
  };
}

export function completedCount(p: Progress, course: string, lessonSlugs: ReadonlyArray<string>): number {
  return lessonSlugs.filter((l) => p.lessons[lessonKey(course, l)]?.completed).length;
}
