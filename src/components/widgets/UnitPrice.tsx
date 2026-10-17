"use client";

import { useState } from "react";
import { NumberField } from "@/components/ui/Fields";
import { Result } from "@/components/ui/Result";
import { formatEuroCents } from "@/lib/format";
import { unitPrice } from "@/lib/finance";

export function UnitPrice() {
  const [a, setA] = useState({ price: 4.2, units: 6 });
  const [b, setB] = useState({ price: 3, units: 4 });
  const ua = unitPrice(a.price, a.units);
  const ub = unitPrice(b.price, b.units);
  const verdict =
    ua === null || ub === null
      ? "Pon unidades mayores que cero."
      : Math.abs(ua - ub) < 0.005
        ? "Salen igual por unidad."
        : ua < ub
          ? "El paquete A sale más barato por unidad."
          : "El paquete B sale más barato por unidad.";
  return (
    <div className="space-y-5">
      {(
        [
          ["A", a, setA],
          ["B", b, setB],
        ] as const
      ).map(([name, v, set]) => (
        <fieldset key={name} className="grid grid-cols-2 gap-4">
          <legend className="mb-2 font-semibold">Paquete {name}</legend>
          <NumberField label="Precio" unit="€" value={v.price} step={0.1} onChange={(price) => set({ ...v, price })} />
          <NumberField label="Unidades" value={v.units} onChange={(units) => set({ ...v, units })} />
        </fieldset>
      ))}
      <Result
        live
        label="Precio por unidad"
        value={`A ${ua === null ? "—" : formatEuroCents(ua)} · B ${ub === null ? "—" : formatEuroCents(ub)}`}
        note={verdict}
      />
    </div>
  );
}
