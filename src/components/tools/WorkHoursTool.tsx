"use client";

import { useState } from "react";
import { NumberField } from "@/components/ui/Fields";
import { Result } from "@/components/ui/Result";
import { formatEuro, formatNumber } from "@/lib/format";
import { workHours } from "@/lib/finance";

export function WorkHoursTool({ compact = false }: { compact?: boolean }) {
  const [price, setPrice] = useState(90);
  const [rate, setRate] = useState(6);
  const r = workHours(price, rate);
  const label =
    r === null
      ? "—"
      : r.min === 0
        ? `${r.h} h`
        : r.h === 0
          ? `${r.min} min`
          : `${r.h} h ${r.min} min`;
  return (
    <div className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <NumberField label="Precio de lo que quieres" unit="€" value={price} onChange={setPrice} step={0.5} />
        <NumberField
          label="Lo que ganas por hora"
          unit="€/h"
          value={rate}
          onChange={setRate}
          step={0.5}
          hint={compact ? undefined : "Lo que te pagan por una hora de trabajo, o tu paga semanal entre las horas que te cuesta."}
        />
      </div>
      <Result
        live
        label="Te cuesta"
        value={r === null ? "Escribe lo que ganas por hora" : `${label} de trabajo`}
        note={r === null ? undefined : `${formatEuro(price)} ÷ ${formatEuro(rate)}/h = ${formatNumber(r.hours, 2)} h`}
      />
    </div>
  );
}
