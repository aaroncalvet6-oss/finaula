"use client";

import { useState } from "react";
import { NumberField } from "@/components/ui/Fields";
import { Result } from "@/components/ui/Result";
import { formatEuro, formatEuroCents } from "@/lib/format";
import { savingsGoal } from "@/lib/finance";

type Period = "semana" | "mes";

export function SavingsGoalTool({ compact = false }: { compact?: boolean }) {
  const [target, setTarget] = useState(240);
  const [current, setCurrent] = useState(60);
  const [periods, setPeriods] = useState(20);
  const [period, setPeriod] = useState<Period>("semana");
  const [income, setIncome] = useState(10);
  const r = savingsGoal({ target, current, periods });
  const plural = period === "semana" ? "semanas" : "meses";
  const tooMuch = r !== null && !r.reached && income > 0 && r.perPeriod > income;
  return (
    <div className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <NumberField label="Tu meta" unit="€" value={target} onChange={setTarget} hint="Lo que cuesta lo que quieres." />
        <NumberField label="Lo que ya tienes" unit="€" value={current} onChange={setCurrent} />
        <div>
          <NumberField label={`Plazo (${plural})`} unit={plural} value={periods} onChange={setPeriods} min={1} />
          <fieldset className="mt-2 flex gap-2">
            <legend className="sr-only">Contar el plazo en</legend>
            {(["semana", "mes"] as const).map((p) => (
              <label
                key={p}
                className={`inline-flex min-h-11 cursor-pointer items-center rounded-full border-[1.5px] px-4 text-small has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-accent ${
                  period === p ? "border-ink bg-ink text-bg" : "border-line-strong"
                }`}
              >
                <input type="radio" name="period" className="sr-only" checked={period === p} onChange={() => setPeriod(p)} />
                {p === "semana" ? "Semanas" : "Meses"}
              </label>
            ))}
          </fieldset>
        </div>
        {compact ? null : (
          <NumberField
            label={`Lo que recibes cada ${period}`}
            unit="€"
            value={income}
            onChange={setIncome}
            hint="Para comprobar si el plan es realista."
          />
        )}
      </div>
      <Result
        live
        label={`Tienes que apartar cada ${period}`}
        value={r === null ? "Pon un plazo de al menos 1" : r.reached ? "Ya tienes tu meta" : formatEuroCents(r.perPeriod)}
        note={
          r && !r.reached
            ? `Te faltan ${formatEuro(r.missing)} · ${formatEuro(r.missing)} ÷ ${periods} ${plural}`
            : undefined
        }
      />
      {!compact && tooMuch ? (
        <p className="text-small" aria-live="polite">
          Es más de lo que recibes cada {period}. Alarga el plazo, baja la meta o busca más ingresos.
        </p>
      ) : null}
    </div>
  );
}
