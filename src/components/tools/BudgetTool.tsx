"use client";

import { useState } from "react";
import { NumberField, SliderField } from "@/components/ui/Fields";
import { ProportionalBar } from "@/components/ui/Bars";
import { Breakdown } from "@/components/ui/Result";
import { formatEuro, formatPercent } from "@/lib/format";
import { budget } from "@/lib/finance";

export function BudgetTool({ compact = false }: { compact?: boolean }) {
  const [income, setIncome] = useState(60);
  const [fixed, setFixed] = useState(14);
  const [planned, setPlanned] = useState(40);
  const [rate, setRate] = useState(20);
  const r = budget({ income, fixed, savingRate: rate / 100, variablePlanned: planned });
  const variable = Math.max(0, r.variableAvailable);
  return (
    <div className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <NumberField label="Ingresos al mes" unit="€" value={income} onChange={setIncome} hint="Paga, trabajos, regalos…" />
        <NumberField label="Gastos fijos al mes" unit="€" value={fixed} onChange={setFixed} hint="Lo que se repite: suscripciones, móvil…" />
        {compact ? null : (
          <NumberField
            label="Gastos variables que tenías pensados"
            unit="€"
            value={planned}
            onChange={setPlanned}
            hint="Salidas, caprichos… Para ver si te llega."
          />
        )}
      </div>
      <SliderField label="Ahorro" value={rate} onChange={setRate} min={0} max={50} format={formatPercent} />
      <ProportionalBar
        label="Reparto de tus ingresos"
        total={Math.max(income, r.saving + fixed + variable, 1)}
        items={[
          { name: "Ahorro (lo apartas primero)", amount: r.saving },
          { name: "Gastos fijos", amount: Math.min(fixed, r.spendable) },
          { name: "Para gastos variables", amount: variable },
        ]}
      />
      <Breakdown
        rows={[
          { label: "Ingresos", value: formatEuro(income) },
          { label: `Ahorro (${formatPercent(rate)})`, value: `− ${formatEuro(r.saving)}` },
          { label: "Gastos fijos", value: `− ${formatEuro(fixed)}` },
          { label: "Para gastos variables", value: formatEuro(r.variableAvailable), strong: true },
        ]}
      />
      <p className="text-small" aria-live="polite">
        {r.variableAvailable < 0
          ? `Tus gastos fijos y tu ahorro superan tus ingresos en ${formatEuro(-r.variableAvailable)}. Baja el ahorro, reduce gastos fijos o busca más ingresos.`
          : compact
            ? `Con este plan apartas ${formatEuro(r.saving)} al mes.`
            : r.shortfall > 0
              ? `Para tus variables te faltan ${formatEuro(r.shortfall)}. Tendrías que recortar esa cantidad o ingresar más.`
              : `Te llega: te sobran ${formatEuro(r.variableAvailable - planned)} de lo que tenías pensado gastar.`}
      </p>
    </div>
  );
}
