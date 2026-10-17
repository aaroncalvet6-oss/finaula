"use client";

import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Widget, widgetTitles } from "@/components/widgets";
import { ButtonLink, TextLink } from "@/components/ui/Button";
import { KeyFact } from "@/components/ui/Callouts";
import { ProgressSegments } from "@/components/ui/Progress";
import type { Fact, Lesson } from "@/content/schema";
import type { ToolInfo } from "@/content/tools";
import { lessonKey } from "@/lib/progress/reducers";
import { useHydratedProgress } from "@/lib/progress/useHydratedProgress";
import { Blocks } from "./Blocks";
import { QuestionCard } from "./QuestionCard";

interface Props {
  course: { slug: string; title: string; lessonCount: number };
  lesson: Lesson;
  index: number;
  next: { slug: string; number: string; title: string } | null;
  facts: ReadonlyArray<Fact>;
  tool: ToolInfo | null;
}

type SectionId = "explicacion" | "ejemplo" | "practica" | "ideas" | "preguntas" | "reto";

const sectionTitles: Record<SectionId, string> = {
  explicacion: "Explicación",
  ejemplo: "Ejemplo",
  practica: "Practica",
  ideas: "Ideas clave",
  preguntas: "Preguntas",
  reto: "Reto práctico",
};

function Section({ id, title, children }: { id: SectionId; title: string; children: ReactNode }) {
  return (
    <motion.section
      id={id}
      aria-labelledby={`${id}-title`}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: [0.2, 0, 0, 1] }}
      className="scroll-mt-6 pt-10"
    >
      <p className="eyebrow flex gap-2 text-muted">
        <span className="mt-[0.4em] size-2 shrink-0 rounded-[2px] bg-accent" aria-hidden="true" />
        <span id={`${id}-title`} tabIndex={-1} className="outline-none">
          {title}
        </span>
      </p>
      <div className="mt-4">{children}</div>
    </motion.section>
  );
}

export function LessonReader({ course, lesson, index, next, facts, tool }: Props) {
  const { hydrated, progress, reachStep, answer, completeLesson } = useHydratedProgress();
  const key = lessonKey(course.slug, lesson.slug);
  const stored = progress.lessons[key];

  const sections: SectionId[] = [
    "explicacion",
    "ejemplo",
    ...(lesson.practice ? (["practica"] as const) : []),
    "ideas",
    "preguntas",
    "reto",
  ];
  const lastStep = sections.length - 1;
  const revealed = Math.min(stored?.step ?? 0, lastStep);
  const completed = stored?.completed ?? false;
  const answers = stored?.answers ?? {};
  const answeredAll = lesson.questions.every((q) => answers[q.id] !== undefined);
  const current = sections[revealed];
  // Questions must be answered before moving past them (also guards a stale stored step).
  const blocked = revealed >= sections.indexOf("preguntas") && !answeredAll;

  // Scroll to a newly revealed section (not on first load).
  const [scrollTarget, setScrollTarget] = useState<SectionId | null>(null);
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (scrollTarget) {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      document.getElementById(scrollTarget)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      document.getElementById(`${scrollTarget}-title`)?.focus?.();
    }
  }, [scrollTarget]);

  // Record that the lesson was opened.
  useEffect(() => {
    if (hydrated) reachStep(course.slug, lesson.slug, 0);
  }, [hydrated, reachStep, course.slug, lesson.slug]);

  function advance() {
    if (revealed < lastStep) {
      reachStep(course.slug, lesson.slug, revealed + 1);
      setScrollTarget(sections[revealed + 1]);
    } else {
      completeLesson(course.slug, lesson.slug, lastStep);
      setScrollTarget(null);
      requestAnimationFrame(() => document.getElementById("fin")?.scrollIntoView({ block: "start" }));
    }
  }

  const visible = (id: SectionId) => sections.indexOf(id) <= revealed;
  const coursePath = `/cursos/${course.slug}/`;

  return (
    <>
      <header className="bg-alt text-on-alt">
        <div className="mx-auto max-w-[40rem] px-2 pt-2 pb-6 sm:px-4">
          <div className="flex items-center justify-between">
            <Link href={coursePath} aria-label={`Volver a ${course.title}`} className="grid size-11 place-items-center rounded-full">
              <ArrowLeft size={22} aria-hidden="true" />
            </Link>
            <span className="tabular font-mono text-caption">
              {index + 1}/{course.lessonCount} · {lesson.minutes} MIN
            </span>
            <Link href={coursePath} aria-label="Cerrar la lección" className="grid size-11 place-items-center rounded-full">
              <X size={22} aria-hidden="true" />
            </Link>
          </div>
          <div className="px-2">
            <p className="mt-3 text-small font-medium">{course.title}</p>
            <p className="tabular mt-1 font-display text-number font-semibold">{lesson.number}</p>
            <h1 className="mt-3 text-[1.875rem] leading-[1.1] font-semibold tracking-[-0.025em]">{lesson.title}</h1>
            <ProgressSegments
              done={completed ? sections.length : revealed + 1}
              total={sections.length}
              label="Progreso de la lección"
              tone="onAlt"
              className="mt-6"
            />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[38rem] px-4 pb-36 sm:px-6">
        <div className="pt-8">
          <p className="eyebrow text-muted">Objetivo</p>
          <p className="mt-1 text-reading font-medium">{lesson.objective}</p>
        </div>

        <Section id="explicacion" title={sectionTitles.explicacion}>
          <Blocks blocks={lesson.explanation} />
        </Section>

        {visible("ejemplo") ? (
          <Section id="ejemplo" title={sectionTitles.ejemplo}>
            <h2 className="mb-4 text-h3 font-semibold tracking-[-0.015em]">{lesson.example.title}</h2>
            <Blocks blocks={lesson.example.blocks} />
            <div className="mt-8">
              <KeyFact>{lesson.keyFact}</KeyFact>
            </div>
          </Section>
        ) : null}

        {lesson.practice && visible("practica") ? (
          <Section id="practica" title={sectionTitles.practica}>
            <p className="text-reading">{lesson.practice.intro}</p>
            <div className="mt-6 space-y-10">
              {lesson.practice.widgets.map((w) => (
                <div key={w}>
                  <h2 className="mb-4 text-h4 font-semibold">{widgetTitles[w]}</h2>
                  <Widget id={w} />
                </div>
              ))}
            </div>
            {tool ? (
              <TextLink href={`/herramientas/${tool.slug}/`} className="mt-4">
                Abrir la herramienta completa: {tool.title} <ArrowRight size={16} aria-hidden="true" />
              </TextLink>
            ) : null}
          </Section>
        ) : null}

        {visible("ideas") ? (
          <Section id="ideas" title={sectionTitles.ideas}>
            <ol className="space-y-4">
              {lesson.keyIdeas.map((idea, i) => (
                <li key={idea} className="flex gap-4 border-b border-line pb-4 last:border-0">
                  <span className="tabular font-display text-h3 leading-none font-semibold text-accent-text">{i + 1}</span>
                  <span className="text-reading">{idea}</span>
                </li>
              ))}
            </ol>
          </Section>
        ) : null}

        {visible("preguntas") ? (
          <Section id="preguntas" title={sectionTitles.preguntas}>
            <div className="space-y-12">
              {lesson.questions.map((q, i) => {
                const prevAnswered = i === 0 || answers[lesson.questions[i - 1].id] !== undefined;
                if (!prevAnswered) return null;
                return (
                  <QuestionCard
                    key={q.id}
                    question={q}
                    index={i}
                    total={lesson.questions.length}
                    saved={answers[q.id]}
                    onAnswer={(opt) => answer(course.slug, lesson.slug, q.id, opt)}
                  />
                );
              })}
            </div>
          </Section>
        ) : null}

        {visible("reto") ? (
          <Section id="reto" title={sectionTitles.reto}>
            <p className="text-reading">{lesson.challenge}</p>
          </Section>
        ) : null}

        {completed ? (
          <section id="fin" aria-labelledby="fin-title" className="mt-12 scroll-mt-6 rounded-lg border border-line bg-surface p-5">
            <p className="flex items-center gap-2 font-semibold text-success">
              <Check size={20} aria-hidden="true" /> Lección completada
            </p>
            <h2 id="fin-title" className="mt-2 text-h3 font-semibold">
              {next ? `Siguiente: ${next.number} · ${next.title}` : "Has terminado todas las lecciones del curso"}
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {next ? (
                <ButtonLink href={`/cursos/${course.slug}/${next.slug}/`}>
                  Siguiente lección <ArrowRight size={18} aria-hidden="true" />
                </ButtonLink>
              ) : (
                <ButtonLink href={`/cursos/${course.slug}/evaluacion/`}>
                  Hacer la evaluación final <ArrowRight size={18} aria-hidden="true" />
                </ButtonLink>
              )}
              <ButtonLink href={coursePath} variant="secondary">
                Volver al curso
              </ButtonLink>
            </div>
          </section>
        ) : null}

        {facts.length > 0 ? (
          <aside aria-labelledby="fuentes-title" className="mt-14 border-t border-line pt-6">
            <h2 id="fuentes-title" className="text-h4 font-semibold">
              Fuentes de esta lección
            </h2>
            <ul className="mt-3 space-y-3 text-small">
              {facts.map((f) => (
                <li key={f.id}>
                  <span>{f.claim}</span>{" "}
                  <a href={f.source.url} className="font-semibold text-accent-text underline underline-offset-4" rel="noopener">
                    {f.source.label}
                  </a>
                </li>
              ))}
            </ul>
            <TextLink href="/fuentes/" className="mt-2 text-small">
              Cómo verificamos los datos
            </TextLink>
          </aside>
        ) : null}
      </main>

      {!completed ? (
        <div className="fixed inset-x-0 bottom-0 z-10 bg-bg shadow-float">
          <div className="mx-auto flex max-w-[38rem] items-center justify-between gap-4 px-4 py-3 sm:px-6">
            <span className="text-small text-muted" aria-live="polite">
              {hydrated ? `${sectionTitles[current]} · guardado` : "Cargando…"}
            </span>
            <button
              type="button"
              onClick={advance}
              disabled={!hydrated || blocked}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 font-semibold text-on-accent disabled:opacity-45"
            >
              {revealed < lastStep ? "Continuar" : "Terminar lección"}
              {revealed < lastStep ? <ArrowRight size={18} aria-hidden="true" /> : <Check size={18} aria-hidden="true" />}
            </button>
          </div>
          {blocked ? (
            <p className="mx-auto max-w-[38rem] px-4 pb-3 text-caption text-muted sm:px-6">Responde las preguntas para continuar.</p>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
