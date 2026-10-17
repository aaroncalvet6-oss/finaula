"use client";

import { ArrowRight, Check, RotateCcw, X } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Option } from "@/components/ui/Option";
import { ProgressSegments } from "@/components/ui/Progress";
import type { BankQuestion } from "@/content/schema";
import { drawAttempt, score as scoreOf } from "@/lib/assessment";
import { useHydratedProgress } from "@/lib/progress/useHydratedProgress";

interface Props {
  course: { slug: string; title: string };
  bank: ReadonlyArray<BankQuestion>;
  count: number;
  passMark: number;
  /** lesson number → lesson slug, to link explanations back to lessons */
  lessonSlugs: Record<string, string>;
}

type Phase = "intro" | "running" | "done";

export function Assessment({ course, bank, count, passMark, lessonSlugs }: Props) {
  const { hydrated, progress, recordAssessment } = useHydratedProgress();
  const [phase, setPhase] = useState<Phase>("intro");
  const [seed, setSeed] = useState(0);
  const drawn = useMemo(() => (seed ? drawAttempt(bank, count, seed) : []), [bank, count, seed]);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [current, setCurrent] = useState(0);
  const record = progress.assessments[course.slug];

  function start() {
    setSeed(Math.floor(Math.random() * 2 ** 31) + 1);
    setAnswers(Array(count).fill(null));
    setCurrent(0);
    setPhase("running");
    window.scrollTo({ top: 0 });
  }

  function finish() {
    recordAssessment(course.slug, scoreOf(drawn, answers), count, passMark);
    setPhase("done");
    window.scrollTo({ top: 0 });
  }

  if (phase === "intro") {
    return (
      <div className="space-y-6">
        <ul className="space-y-3 text-reading">
          <li className="flex gap-3">
            <span className="tabular font-mono text-accent-text">{count}</span>
            preguntas elegidas al azar de un banco de {bank.length}.
          </li>
          <li className="flex gap-3">
            <span className="tabular font-mono text-accent-text">{passMark}</span>
            aciertos para aprobar.
          </li>
          <li className="flex gap-3">
            <RotateCcw size={20} className="mt-1 shrink-0 text-accent-text" aria-hidden="true" />
            Puedes repetirla las veces que quieras. En cada intento cambian las preguntas y el orden de las respuestas.
          </li>
          <li className="flex gap-3">
            <Check size={20} className="mt-1 shrink-0 text-accent-text" aria-hidden="true" />
            Al final te explicamos cada fallo. Si apruebas, consigues tu certificado.
          </li>
        </ul>
        {hydrated && record ? (
          <p className="text-small text-muted">
            Tu mejor resultado: <span className="tabular font-mono text-ink">{record.bestScore}/{record.total}</span> ·{" "}
            {record.attempts} {record.attempts === 1 ? "intento" : "intentos"}
            {record.passed ? " · aprobada" : ""}
          </p>
        ) : null}
        <div className="flex flex-wrap gap-3">
          <Button onClick={start}>
            {record ? "Empezar un nuevo intento" : "Empezar la evaluación"} <ArrowRight size={18} aria-hidden="true" />
          </Button>
          {record?.passed ? (
            <ButtonLink href={`/cursos/${course.slug}/certificado/`} variant="secondary">
              Ver tu certificado
            </ButtonLink>
          ) : null}
        </div>
      </div>
    );
  }

  if (phase === "running") {
    const d = drawn[current];
    const isLast = current === count - 1;
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <ProgressSegments done={current + 1} total={count} label={`Pregunta ${current + 1} de ${count}`} className="flex-1" />
          <span className="tabular font-mono text-caption text-muted">
            {current + 1}/{count}
          </span>
        </div>
        <motion.div key={d.question.id} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2 }}>
          <h2 className="font-body text-reading font-semibold">{d.question.prompt}</h2>
          <fieldset className="mt-5 space-y-3">
            <legend className="sr-only">Elige una respuesta</legend>
            {d.options.map((o, i) => (
              <Option
                key={o}
                name={d.question.id}
                value={String(i)}
                letter={String.fromCharCode(65 + i)}
                state={answers[current] === i ? "selected" : "idle"}
                onSelect={() => setAnswers((a) => a.map((v, j) => (j === current ? i : v)))}
              >
                {o}
              </Option>
            ))}
          </fieldset>
        </motion.div>
        <div className="flex flex-wrap justify-between gap-3">
          <Button variant="secondary" onClick={() => setCurrent((c) => c - 1)} disabled={current === 0}>
            Anterior
          </Button>
          {isLast ? (
            <Button onClick={finish} disabled={answers.some((a) => a === null)}>
              Terminar y corregir
            </Button>
          ) : (
            <Button onClick={() => setCurrent((c) => c + 1)} disabled={answers[current] === null}>
              Siguiente <ArrowRight size={18} aria-hidden="true" />
            </Button>
          )}
        </div>
        {isLast && answers.some((a) => a === null) ? (
          <p className="text-caption text-muted">Responde todas las preguntas para corregir.</p>
        ) : null}
      </div>
    );
  }

  const result = scoreOf(drawn, answers);
  const passed = result >= passMark;
  const mistakes = drawn.map((d, i) => ({ d, answer: answers[i] })).filter(({ d, answer }) => answer !== d.correctIndex);
  return (
    <div className="space-y-8">
      <div className={`rounded-lg border-l-4 px-5 py-5 ${passed ? "border-success bg-success-soft text-on-success-soft" : "border-danger bg-danger-soft text-on-danger-soft"}`}>
        <p className="tabular font-mono text-[2.5rem] leading-none font-medium">
          {result}/{count}
        </p>
        <p className="mt-2 text-h4 font-semibold">{passed ? "Has aprobado." : `Te faltan ${passMark - result} para aprobar.`}</p>
        <p className="mt-1">
          {passed
            ? "Ya puedes descargar tu certificado de finalización."
            : `Se aprueba con ${passMark} de ${count}. Repasa los fallos y vuelve a intentarlo.`}
        </p>
      </div>

      {mistakes.length > 0 ? (
        <section aria-labelledby="fallos">
          <h2 id="fallos" className="text-h3 font-semibold">
            {mistakes.length === 1 ? "Tu fallo, explicado" : `Tus ${mistakes.length} fallos, explicados`}
          </h2>
          <ol className="mt-4 space-y-5">
            {mistakes.map(({ d, answer }) => (
              <li key={d.question.id} className="rounded-md border border-line bg-surface p-4">
                <p className="font-semibold">{d.question.prompt}</p>
                <p className="mt-2 flex gap-2 text-small text-danger">
                  <X size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                  <span>
                    Tu respuesta: <span className="text-ink">{answer === null ? "sin responder" : d.options[answer]}</span>
                  </span>
                </p>
                <p className="mt-1 flex gap-2 text-small text-success">
                  <Check size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                  <span>
                    Correcta: <span className="text-ink">{d.question.correct}</span>
                  </span>
                </p>
                <p className="mt-3">{d.question.explanation}</p>
                {lessonSlugs[d.question.lesson] ? (
                  <Link
                    href={`/cursos/${course.slug}/${lessonSlugs[d.question.lesson]}/`}
                    className="mt-2 inline-flex min-h-11 items-center text-small font-semibold text-accent-text underline underline-offset-4"
                  >
                    Repasar la lección {d.question.lesson}
                  </Link>
                ) : null}
              </li>
            ))}
          </ol>
        </section>
      ) : (
        <p className="text-reading">Sin ningún fallo. Enhorabuena.</p>
      )}

      <div className="flex flex-wrap gap-3">
        {passed || record?.passed ? (
          <ButtonLink href={`/cursos/${course.slug}/certificado/`}>
            Ver tu certificado <ArrowRight size={18} aria-hidden="true" />
          </ButtonLink>
        ) : null}
        <Button variant={passed ? "secondary" : "primary"} onClick={start}>
          <RotateCcw size={18} aria-hidden="true" /> Repetir la evaluación
        </Button>
      </div>
    </div>
  );
}
