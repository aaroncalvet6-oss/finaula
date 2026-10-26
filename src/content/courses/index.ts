import { factById, isVerified } from "../facts";
import { courseSchema, type Course, type Lesson } from "../schema";
import { bancosTarjetasYPagos } from "./bancos-tarjetas-y-pagos";
import { consumoInteligente } from "./consumo-inteligente";
import { fundamentosDelDinero } from "./fundamentos-del-dinero";
import { queNoTeEstafen } from "./que-no-te-estafen";
import { tuPrimerSueldo } from "./tu-primer-sueldo";

/** All authored courses, validated at import time. */
export const allCourses: ReadonlyArray<Course> = [
  fundamentosDelDinero,
  tuPrimerSueldo,
  bancosTarjetasYPagos,
  queNoTeEstafen,
  consumoInteligente,
].map((c) => courseSchema.parse(c));

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

export type Area = Course["area"];

/** Catalogue order of the learning areas. */
export const areas: ReadonlyArray<Area> = ["Tu dinero hoy", "Trabajo e ingresos", "Hacer crecer tu dinero", "Protégete y entiende el mundo"];

/** Courses of the approved syllabus not in the catalogue yet: drafts and unwritten (docs/temario.md). */
const plannedCourses: ReadonlyArray<{ number: number; title: string; area: Area }> = [
  { number: 6, title: "Deudas y créditos", area: "Protégete y entiende el mundo" },
  { number: 7, title: "Ahorro e inversión: lo básico", area: "Hacer crecer tu dinero" },
  { number: 8, title: "Cómo funciona la economía", area: "Protégete y entiende el mundo" },
  { number: 9, title: "Impuestos y Estado", area: "Protégete y entiende el mundo" },
  { number: 10, title: "Emprender y ganar dinero por tu cuenta", area: "Trabajo e ingresos" },
];

/** Shown in the small «Próximos cursos» section: number, title and area only (nothing else is exposed). */
export const upcomingCourses: ReadonlyArray<{ number: number; title: string; area: Area }> = [
  ...allCourses.filter((c) => !isPublishable(c)).map((c) => ({ number: c.number, title: c.title, area: c.area })),
  ...plannedCourses.filter((p) => !allCourses.some((c) => c.number === p.number)),
].sort((a, b) => a.number - b.number);

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
