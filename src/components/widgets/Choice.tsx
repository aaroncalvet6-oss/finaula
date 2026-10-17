"use client";

import { Check, X } from "lucide-react";
import { useState } from "react";

/** A scenario with two buttons and an explanation once answered. Used by classification widgets. */
export function ChoiceCard({
  index,
  text,
  options,
  correct,
  explanation,
}: {
  index: number;
  text: string;
  options: readonly [string, string];
  correct: 0 | 1;
  explanation: string;
}) {
  const [picked, setPicked] = useState<0 | 1 | null>(null);
  const right = picked === correct;
  return (
    <li className="rounded-md border border-line bg-surface p-4">
      <p className="tabular font-mono text-caption text-muted">{String(index + 1).padStart(2, "0")}</p>
      <p className="mt-1">{text}</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Tu respuesta">
        {options.map((o, i) => (
          <button
            key={o}
            type="button"
            aria-pressed={picked === i}
            disabled={picked !== null}
            onClick={() => setPicked(i as 0 | 1)}
            className={`inline-flex min-h-11 items-center rounded-full border-[1.5px] px-4 text-small font-semibold disabled:cursor-default ${
              picked === i
                ? right
                  ? "border-success bg-success-soft text-on-success-soft"
                  : "border-danger bg-danger-soft text-on-danger-soft"
                : "border-line-strong"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
      {picked !== null ? (
        <p className={`mt-3 flex gap-2 text-small ${right ? "text-success" : "text-danger"}`} aria-live="polite">
          {right ? <Check size={18} className="mt-0.5 shrink-0" aria-hidden="true" /> : <X size={18} className="mt-0.5 shrink-0" aria-hidden="true" />}
          <span>
            <strong>{right ? "Bien visto." : `Era «${options[correct]}».`}</strong>{" "}
            <span className="text-ink">{explanation}</span>
          </span>
        </p>
      ) : null}
    </li>
  );
}
