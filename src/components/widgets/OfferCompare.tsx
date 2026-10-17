"use client";

import { useState } from "react";
import { NumberField } from "@/components/ui/Fields";
import { Result } from "@/components/ui/Result";
import { formatEuro } from "@/lib/format";
import { annualGross } from "@/lib/finance";

export function OfferCompare() {
  const [a, setA] = useState({ monthly: 1050, payments: 14 });
  const [b, setB] = useState({ monthly: 1200, payments: 12 });
  const ya = annualGross(a.monthly, a.payments);
  const yb = annualGross(b.monthly, b.payments);
  return (
    <div className="space-y-5">
      {(
        [
          ["A", a, setA],
          ["B", b, setB],
        ] as const
      ).map(([name, v, set]) => (
        <fieldset key={name} className="grid grid-cols-2 gap-4">
          <legend className="mb-2 font-semibold">Oferta {name} (cifras inventadas)</legend>
          <NumberField label="Bruto al mes" unit="€" value={v.monthly} onChange={(monthly) => set({ ...v, monthly })} />
          <NumberField label="Pagas al año" value={v.payments} onChange={(payments) => set({ ...v, payments })} />
        </fieldset>
      ))}
      <Result
        live
        label="Bruto al año"
        value={`A ${formatEuro(ya)} · B ${formatEuro(yb)}`}
        note={ya === yb ? "Pagan lo mismo al año." : `Paga más la oferta ${ya > yb ? "A" : "B"}: ${formatEuro(Math.abs(ya - yb))} más al año.`}
      />
    </div>
  );
}
