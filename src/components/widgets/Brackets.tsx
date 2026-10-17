"use client";

import { useState } from "react";
import { SliderField } from "@/components/ui/Fields";
import { Breakdown } from "@/components/ui/Result";
import { formatEuro, formatEuroCents, formatPercent } from "@/lib/format";
import { progressiveTax } from "@/lib/finance";

/** Invented two-bracket scale used in lesson 2.4 (not the real one). */
const scale = [
  { upTo: 10000, rate: 0.1 },
  { upTo: Number.POSITIVE_INFINITY, rate: 0.2 },
];

export function Brackets() {
  const [income, setIncome] = useState(12000);
  const r = progressiveTax(income, scale);
  const low = Math.min(income, 10000);
  const high = Math.max(0, income - 10000);
  return (
    <div className="space-y-5">
      <p className="text-small text-muted">Escala inventada: hasta 10.000 € al 10 %; lo que pase, al 20 %.</p>
      <SliderField
        label="Lo que ganas en el año"
        value={income}
        onChange={setIncome}
        min={0}
        max={30000}
        step={500}
        format={(v) => formatEuro(v)}
      />
      <div className="flex h-9 gap-[3px] overflow-hidden rounded-sm bg-line" aria-hidden="true">
        <span className="h-full bg-alt" style={{ width: `${(low / 30000) * 100}%` }} />
        <span className="h-full bg-accent" style={{ width: `${(high / 30000) * 100}%` }} />
      </div>
      <div aria-live="polite">
        <Breakdown
          rows={[
            { label: `${formatEuro(low)} al 10 %`, value: formatEuroCents(low * 0.1) },
            { label: `${formatEuro(high)} al 20 %`, value: formatEuroCents(high * 0.2) },
            { label: "Impuesto total", value: formatEuroCents(r.total), strong: true },
            { label: "Porcentaje medio", value: formatPercent(r.averageRate * 100) },
          ]}
        />
      </div>
    </div>
  );
}
