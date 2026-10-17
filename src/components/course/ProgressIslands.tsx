"use client";

import { ArrowRight, Check, Circle, CircleDot } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { ProgressSegments } from "@/components/ui/Progress";
import { completedCount, lessonKey } from "@/lib/progress/reducers";
import { useHydratedProgress } from "@/lib/progress/useHydratedProgress";

/** Segmented progress for a course (empty until stored progress is loaded). */
export function CourseProgress({
  course,
  lessons,
  className,
}: {
  course: string;
  lessons: ReadonlyArray<string>;
  className?: string;
}) {
  const { progress } = useHydratedProgress();
  const done = completedCount(progress, course, lessons);
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <ProgressSegments done={done} total={lessons.length} label={`${done} de ${lessons.length} lecciones completadas`} className="flex-1" />
      <span className="tabular font-mono text-caption text-muted">
        {done}/{lessons.length}
      </span>
    </div>
  );
}

interface LessonRef {
  slug: string;
  number: string;
  title: string;
}

/** «Empezar» or «Continuar» button for a course page. */
export function CourseStartButton({ course, lessons }: { course: string; lessons: ReadonlyArray<LessonRef> }) {
  const { progress } = useHydratedProgress();
  const firstPending = lessons.find((l) => !progress.lessons[lessonKey(course, l.slug)]?.completed);
  const started = lessons.some((l) => progress.lessons[lessonKey(course, l.slug)]);
  if (!firstPending) {
    return (
      <ButtonLink href={`/cursos/${course}/evaluacion/`}>
        Hacer la evaluación final <ArrowRight size={18} aria-hidden="true" />
      </ButtonLink>
    );
  }
  return (
    <ButtonLink href={`/cursos/${course}/${firstPending.slug}/`}>
      {started ? `Continuar con la ${firstPending.number}` : "Empezar el curso"} <ArrowRight size={18} aria-hidden="true" />
    </ButtonLink>
  );
}

/** Status icon for a lesson row in a syllabus. */
export function LessonStatus({ course, lesson }: { course: string; lesson: string }) {
  const { progress } = useHydratedProgress();
  const p = progress.lessons[lessonKey(course, lesson)];
  if (p?.completed)
    return (
      <span className="grid size-7 place-items-center rounded-full bg-success text-bg" title="Completada">
        <Check size={16} strokeWidth={2.6} aria-hidden="true" />
        <span className="sr-only">Completada</span>
      </span>
    );
  if (p)
    return (
      <span className="grid size-7 place-items-center text-accent-text" title="Empezada">
        <CircleDot size={22} aria-hidden="true" />
        <span className="sr-only">Empezada</span>
      </span>
    );
  return (
    <span className="grid size-7 place-items-center text-line-strong">
      <Circle size={22} aria-hidden="true" />
      <span className="sr-only">Sin empezar</span>
    </span>
  );
}

interface CourseRef {
  slug: string;
  title: string;
  lessons: ReadonlyArray<LessonRef & { minutes: number }>;
}

/** «Continúa donde lo dejaste»: only rendered when there is progress. */
export function ResumeCard({ courses }: { courses: ReadonlyArray<CourseRef> }) {
  const { hydrated, progress } = useHydratedProgress();
  if (!hydrated || !progress.last) return null;
  const course = courses.find((c) => c.slug === progress.last?.course);
  if (!course) return null;
  const lastIdx = course.lessons.findIndex((l) => l.slug === progress.last?.lesson);
  const lastDone = progress.lessons[lessonKey(course.slug, course.lessons[lastIdx]?.slug ?? "")]?.completed;
  const target = lastDone
    ? course.lessons.find((l) => !progress.lessons[lessonKey(course.slug, l.slug)]?.completed)
    : course.lessons[lastIdx];
  const done = completedCount(progress, course.slug, course.lessons.map((l) => l.slug));
  const href = target ? `/cursos/${course.slug}/${target.slug}/` : `/cursos/${course.slug}/evaluacion/`;
  return (
    <section aria-labelledby="resume-title" className="rounded-lg border border-line bg-surface px-5 py-5">
      <h2 id="resume-title" className="font-body text-small font-semibold text-muted">
        Continúa donde lo dejaste
      </h2>
      <Link href={href} className="mt-3 flex items-center gap-4">
        <span className="tabular font-display text-[2.75rem] leading-none font-semibold text-accent-text">
          {target ? target.number : <Check size={36} aria-hidden="true" />}
        </span>
        <span className="flex-1">
          <span className="block text-[1.0625rem] leading-snug font-semibold">
            {target ? target.title : "Evaluación final"}
          </span>
          <span className="mt-0.5 block text-small text-muted">
            {course.title}
            {target ? ` · ${target.minutes} min` : ""}
          </span>
        </span>
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent text-on-accent">
          <ArrowRight size={20} aria-hidden="true" />
          <span className="sr-only">Continuar</span>
        </span>
      </Link>
      <div className="mt-4 flex items-center gap-3">
        <ProgressSegments done={done} total={course.lessons.length} label={`${done} de ${course.lessons.length} lecciones`} className="flex-1" />
        <span className="tabular font-mono text-caption text-muted">
          {done}/{course.lessons.length}
        </span>
      </div>
    </section>
  );
}

/** Home hero button: «Empezar» for new learners, «Continuar» if there is progress. */
export function HeroButton({ firstLessonHref }: { firstLessonHref: string }) {
  const { hydrated, progress } = useHydratedProgress();
  const resume = hydrated && progress.last;
  return (
    <ButtonLink href={resume ? `/cursos/${progress.last!.course}/${progress.last!.lesson}/` : firstLessonHref}>
      {resume ? "Continuar" : "Empezar el primer curso"} <ArrowRight size={18} aria-hidden="true" />
    </ButtonLink>
  );
}
