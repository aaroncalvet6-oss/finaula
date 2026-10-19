"use client";

import { ArrowRight, Check, Circle, CircleDot } from "lucide-react";
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
