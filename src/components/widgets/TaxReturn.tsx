"use client";

import { useState } from "react";
import { NumberField } from "@/components/ui/Fields";
import { Result } from "@/components/ui/Result";
import { formatEuro } from "@/lib/format";
import { taxReturnResult } from "@/lib/finance";

export function TaxReturn() {
  const [withheld, setWithheld] = useState(42);
  const [due, setDue] = useState(0);
  const r = taxReturnResult(due, withheld);
  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Lo que te retuvieron en el año" unit="€" value={withheld} onChange={setWithheld} />
        <NumberField label="Impuesto que te tocaba pagar" unit="€" value={due} onChange={setDue} hint="Cifras inventadas." />
      </div>
      <Result
        live
        label="Resultado de la declaración"
        value={r.outcome === "devolver" ? `Te devuelven ${formatEuro(-r.diff)}` : r.outcome === "pagar" ? `Pagas ${formatEuro(r.diff)}` : "Ni pagas ni te devuelven"}
        note={`${formatEuro(due)} − ${formatEuro(withheld)} = ${formatEuro(r.diff)}`}
      />
    </div>
  );
}
