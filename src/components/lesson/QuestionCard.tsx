"use client";

import { Lightbulb } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Option, type OptionState } from "@/components/ui/Option";
import type { Question } from "@/content/schema";
import { seededRandom, shuffle } from "@/lib/assessment";
import { tutor } from "@/lib/tutor";

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

/** A lesson question: pick, check, read the explanation. `saved` is the stored answer (content order). */
export function QuestionCard({
  question,
  index,
  total,
  saved,
  onAnswer,
}: {
  question: Question;
  index: number;
  total: number;
  saved: number | undefined;
  onAnswer: (option: number) => void;
}) {
  // Stable display order per question so the right answer is not always first.
  const order = useMemo(() => shuffle([0, 1, 2], seededRandom(hash(question.id))), [question.id]);
  const [picked, setPicked] = useState<number | null>(saved ?? null);
  const [checked, setChecked] = useState(saved !== undefined);
  const [hint, setHint] = useState<string | null>(null);
  const [explanation, setExplanation] = useState<string | null>(null);
  const correct = picked === question.correct;

  async function check() {
    if (picked === null) return;
    setChecked(true);
    onAnswer(picked);
    setExplanation(await tutor.explain(question, picked === question.correct));
  }

  const stateOf = (opt: number): OptionState => {
    if (!checked) return picked === opt ? "selected" : "idle";
    if (opt === question.correct) return "correct";
    if (opt === picked) return "incorrect";
    return "dimmed";
  };

  return (
    <div className="space-y-4">
      <p className="tabular font-mono text-caption text-muted">
        PREGUNTA {index + 1}/{total}
      </p>
      <h3 className="font-body text-reading font-semibold">{question.prompt}</h3>
      <fieldset className="space-y-3">
        <legend className="sr-only">Elige una respuesta</legend>
        {order.map((opt, i) => (
          <Option
            key={opt}
            name={question.id}
            value={String(opt)}
            letter={String.fromCharCode(65 + i)}
            state={stateOf(opt)}
            disabled={checked}
            onSelect={() => setPicked(opt)}
          >
            {question.options[opt]}
          </Option>
        ))}
      </fieldset>

      <AnimatePresence initial={false}>
        {!checked && hint ? (
          <motion.p
            key="hint"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-2 rounded-md bg-sunken px-4 py-3 text-small"
            aria-live="polite"
          >
            <Lightbulb size={18} className="mt-0.5 shrink-0 text-accent-text" aria-hidden="true" />
            {hint}
          </motion.p>
        ) : null}
        {checked ? (
          <motion.div
            key="feedback"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-md border-l-[3px] px-4 py-3 ${correct ? "border-success bg-success-soft text-on-success-soft" : "border-danger bg-danger-soft text-on-danger-soft"}`}
            aria-live="polite"
          >
            <p className="font-semibold">{correct ? "Correcto." : "No es esa."}</p>
            <p className="mt-1">{correct ? question.explanation : (explanation ?? question.explanation).replace(/^No es esa\. /, "")}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {!checked ? (
        <div className="flex flex-wrap gap-3">
          <Button onClick={check} disabled={picked === null}>
            Comprobar
          </Button>
          <Button variant="ghost" onClick={async () => setHint(await tutor.hint(question))} disabled={hint !== null}>
            <Lightbulb size={18} aria-hidden="true" /> Pista
          </Button>
        </div>
      ) : null}
    </div>
  );
}
