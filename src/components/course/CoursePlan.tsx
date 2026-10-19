"use client";

import { ArrowRight, Award, BookOpen, Check, ChevronRight, ClipboardCheck, Lock } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { ProgressSegments } from "@/components/ui/Progress";
import { completedCount, lessonKey } from "@/lib/progress/reducers";
import { useHydratedProgress } from "@/lib/progress/useHydratedProgress";

export interface PlanLesson {
  slug: string;
  number: string;
  title: string;
  objective: string;
  minutes: number;
}

interface Props {
  course: { slug: string; title: string };
  lessons: ReadonlyArray<PlanLesson>;
  assessment: { count: number; passMark: number };
}

type LessonState = "todo" | "doing" | "done";
type Step = "lessons" | "assessment" | "certificate";

function usePlan(course: string, lessons: ReadonlyArray<PlanLesson>) {
  const { hydrated, progress } = useHydratedProgress();
  const stateOf = (slug: string): LessonState => {
    const p = progress.lessons[lessonKey(course, slug)];
    return p?.completed ? "done" : p ? "doing" : "todo";
  };
  const done = completedCount(progress, course, lessons.map((l) => l.slug));
  const allDone = done === lessons.length;
  const passed = progress.assessments[course]?.passed ?? false;
  const step: Step = passed ? "certificate" : allDone ? "assessment" : "lessons";
  const next = lessons.find((l) => stateOf(l.slug) !== "done");
  const started = lessons.some((l) => stateOf(l.slug) !== "todo");
  return { hydrated, stateOf, done, allDone, passed, step, next, started };
}

/** «2 de 6 lecciones» with segments, for the course header. */
export function CourseHeaderProgress({ course, lessons }: Pick<Props, "course" | "lessons">) {
  const { done } = usePlan(course.slug, lessons);
  return (
    <div className="mt-5 flex items-center gap-3">
      <ProgressSegments done={done} total={lessons.length} label={`${done} de ${lessons.length} lecciones`} tone="onAlt" className="flex-1" />
      <span className="tabular shrink-0 font-mono text-caption">
        {done} de {lessons.length} lecciones
      </span>
    </div>
  );
}

const stepInfo: { id: Step; title: string; text: string; Icon: typeof BookOpen }[] = [
  { id: "lessons", title: "Lecciones", text: "Cortas, con ejemplos y preguntas.", Icon: BookOpen },
  { id: "assessment", title: "Evaluación final", text: "Para comprobar lo que sabes.", Icon: ClipboardCheck },
  { id: "certificate", title: "Certificado", text: "Al aprobar, descárgalo.", Icon: Award },
];

/** «Cómo funciona este curso»: three steps, marking the current one. */
export function CourseSteps({ course, lessons }: Pick<Props, "course" | "lessons">) {
  const { step } = usePlan(course.slug, lessons);
  const current = stepInfo.findIndex((s) => s.id === step);
  return (
    <ol className="grid grid-cols-3 gap-2" aria-label="Pasos del curso">
      {stepInfo.map((s, i) => {
        const state = i < current ? "done" : i === current ? "current" : "next";
        return (
          <li
            key={s.id}
            aria-current={state === "current" ? "step" : undefined}
            className={`relative rounded-md border-[1.5px] px-3 py-3 ${
              state === "current" ? "border-accent bg-soft text-on-soft" : "border-line bg-surface"
            }`}
          >
            <span className="flex items-center justify-between">
              <s.Icon size={20} strokeWidth={1.9} className={state === "next" ? "text-muted" : ""} aria-hidden="true" />
              <span className="tabular font-mono text-caption">{state === "done" ? <Check size={16} aria-label="Hecho" /> : i + 1}</span>
            </span>
            <span className="mt-2 block text-small leading-tight font-semibold">{s.title}</span>
            <span className={`mt-1 hidden text-caption sm:block ${state === "current" ? "" : "text-muted"}`}>{s.text}</span>
            {state === "current" ? <span className="mt-1 block text-caption font-semibold">Estás aquí</span> : null}
          </li>
        );
      })}
    </ol>
  );
}

const stateLabel: Record<LessonState, string> = { todo: "Sin empezar", doing: "En curso", done: "Completada" };

function StatusChip({ state }: { state: LessonState }) {
  const styles = {
    todo: "text-muted",
    doing: "text-accent-text",
    done: "text-success",
  } as const;
  return (
    <span className={`inline-flex items-center gap-1.5 text-caption font-semibold ${styles[state]}`}>
      {state === "done" ? (
        <Check size={14} strokeWidth={2.6} aria-hidden="true" />
      ) : (
        <span className={`size-2 rounded-full ${state === "doing" ? "bg-accent" : "border-[1.5px] border-line-strong"}`} aria-hidden="true" />
      )}
      {stateLabel[state]}
    </span>
  );
}

function Row({ href, children, disabled }: { href?: string; children: ReactNode; disabled?: boolean }) {
  const cls = "flex items-start gap-4 px-4 py-4";
  if (!href || disabled) return <div className={`${cls} ${disabled ? "opacity-80" : ""}`}>{children}</div>;
  return (
    <Link href={href} className={`${cls} group hover:bg-sunken`}>
      {children}
    </Link>
  );
}

/** The syllabus: lessons, then the assessment (locked until all lessons are done), then the certificate. */
export function CourseSyllabus({ course, lessons, assessment }: Props) {
  const { stateOf, allDone, passed } = usePlan(course.slug, lessons);
  return (
    <ol className="divide-y divide-line overflow-hidden rounded-lg border border-line bg-surface">
      {lessons.map((l) => {
        const state = stateOf(l.slug);
        return (
          <li key={l.slug}>
            <Row href={`/cursos/${course.slug}/${l.slug}/`}>
              <span
                className={`tabular grid size-11 shrink-0 place-items-center rounded-full font-mono text-small font-medium ${
                  state === "done" ? "bg-success-soft text-on-success-soft" : state === "doing" ? "bg-soft text-on-soft" : "bg-sunken"
                }`}
              >
                {l.number}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-semibold group-hover:underline">{l.title}</span>
                <span className="mt-0.5 block text-small text-muted">{l.objective}</span>
                <span className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="tabular font-mono text-caption text-muted">{l.minutes} min</span>
                  <StatusChip state={state} />
                </span>
              </span>
              <ChevronRight size={20} className="mt-3 shrink-0 text-muted" aria-hidden="true" />
            </Row>
          </li>
        );
      })}
      <li>
        <Row href={allDone ? `/cursos/${course.slug}/evaluacion/` : undefined} disabled={!allDone}>
          <span
            className={`grid size-11 shrink-0 place-items-center rounded-full ${allDone ? "bg-alt text-on-alt" : "bg-sunken text-muted"}`}
          >
            {allDone ? <ClipboardCheck size={20} aria-hidden="true" /> : <Lock size={18} aria-hidden="true" />}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-semibold">Evaluación final</span>
            <span className="mt-0.5 block text-small text-muted">
              {assessment.count} preguntas al azar. Se aprueba con {assessment.passMark}. Puedes repetirla.
            </span>
            <span className="mt-2 block text-caption font-semibold">
              {passed ? (
                <span className="inline-flex items-center gap-1.5 text-success">
                  <Check size={14} strokeWidth={2.6} aria-hidden="true" /> Aprobada
                </span>
              ) : allDone ? (
                <span className="text-accent-text">Disponible</span>
              ) : (
                <span className="text-muted">Se desbloquea al terminar las lecciones</span>
              )}
            </span>
          </span>
          {allDone ? <ChevronRight size={20} className="mt-3 shrink-0 text-muted" aria-hidden="true" /> : null}
        </Row>
      </li>
      {passed ? (
        <li>
          <Row href={`/cursos/${course.slug}/certificado/`}>
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-mark text-on-mark">
              <Award size={20} aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-semibold">Tu certificado</span>
              <span className="mt-0.5 block text-small text-muted">Descárgalo como imagen o PDF.</span>
            </span>
            <ChevronRight size={20} className="mt-3 shrink-0 text-muted" aria-hidden="true" />
          </Row>
        </li>
      ) : null}
    </ol>
  );
}

/** The single main action, fixed at the bottom on mobile. */
export function CourseAction({ course, lessons }: Pick<Props, "course" | "lessons">) {
  const { hydrated, next, started, allDone, passed } = usePlan(course.slug, lessons);
  const action = passed
    ? { href: `/cursos/${course.slug}/certificado/`, label: "Ver tu certificado" }
    : allDone
      ? { href: `/cursos/${course.slug}/evaluacion/`, label: "Hacer la evaluación final" }
      : next && started
        ? { href: `/cursos/${course.slug}/${next.slug}/`, label: `Continuar con la ${next.number}` }
        : { href: `/cursos/${course.slug}/${lessons[0].slug}/`, label: "Empezar" };
  return (
    <div className="sticky bottom-0 z-10 -mx-4 mt-8 bg-bg px-4 pt-3 pb-4 shadow-float sm:static sm:mx-0 sm:bg-transparent sm:p-0 sm:shadow-none">
      <Link
        href={action.href}
        aria-disabled={!hydrated}
        className="mx-auto flex h-12 max-w-[38rem] items-center justify-center gap-2 rounded-full bg-accent px-6 font-semibold text-on-accent sm:mx-0 sm:inline-flex"
      >
        {action.label} <ArrowRight size={18} aria-hidden="true" />
      </Link>
    </div>
  );
}
