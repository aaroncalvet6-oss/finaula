import { factById, isVerified } from "../facts";
import { courseSchema, type Course, type Lesson } from "../schema";
import { fundamentosDelDinero } from "./fundamentos-del-dinero";
import { tuPrimerSueldo } from "./tu-primer-sueldo";

/** All authored courses, validated at import time. */
export const allCourses: ReadonlyArray<Course> = [fundamentosDelDinero, tuPrimerSueldo].map((c) => courseSchema.parse(c));

/** Facts cited anywhere in a lesson (declared list plus question citations). */
export function lessonFacts(lesson: Lesson): string[] {
  return [...new Set([...lesson.facts, ...lesson.questions.flatMap((q) => q.facts)])];
}

/** A course is public only if every lesson is published and every cited fact is verified. */
export function isPublishable(course: Course): boolean {
  return course.lessons.every(
    (l) => l.status === "published" && lessonFacts(l).every(isVerified),
  ) && course.assessment.bank.every((q) => q.facts.every(isVerified));
}

export const courses: ReadonlyArray<Course> = allCourses.filter(isPublishable);

/** Shown in the small «Próximos cursos» section: title and route only (nothing else is exposed). */
export const upcomingCourses: ReadonlyArray<{ title: string; area: Course["area"] }> = [
  ...allCourses.filter((c) => !isPublishable(c)).map((c) => ({ title: c.title, area: c.area })),
  { title: "Tu primera cuenta y tu primera tarjeta", area: "Tu dinero hoy" },
  { title: "Qué es invertir", area: "Hacer crecer tu dinero" },
  { title: "Que no te estafen", area: "Protégete y entiende el mundo" },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getLesson(courseSlug: string, lessonSlug: string) {
  const course = getCourse(courseSlug);
  const index = course?.lessons.findIndex((l) => l.slug === lessonSlug) ?? -1;
  if (!course || index < 0) return undefined;
  return {
    course,
    lesson: course.lessons[index],
    index,
    prev: course.lessons[index - 1],
    next: course.lessons[index + 1],
  };
}

export function courseMinutes(course: Course): number {
  return course.lessons.reduce((s, l) => s + l.minutes, 0);
}

export function factsFor(ids: ReadonlyArray<string>) {
  return ids.map((id) => factById.get(id)).filter((f) => f !== undefined);
}
