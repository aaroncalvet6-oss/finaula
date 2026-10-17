"use client";

import { useState } from "react";
import { NumberField } from "@/components/ui/Fields";
import { Breakdown } from "@/components/ui/Result";
import { formatEuroCents } from "@/lib/format";
import { packCost } from "@/lib/finance";

export function GameCurrency() {
  const [item, setItem] = useState(1200);
  const [size, setSize] = useState(1000);
  const [price, setPrice] = useState(9.99);
  const r = packCost(item, size, price);
  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Precio del objeto" unit="gemas" value={item} onChange={setItem} />
        <NumberField label="Gemas por paquete" unit="gemas" value={size} onChange={setSize} />
        <NumberField label="Precio del paquete" unit="€" value={price} step={0.01} onChange={setPrice} />
      </div>
      {r ? (
        <div aria-live="polite">
          <Breakdown
            rows={[
              { label: "Paquetes que tienes que comprar", value: String(r.packs) },
              { label: "Lo que «vale» el objeto", value: formatEuroCents(r.fairPrice) },
              { label: "Gemas que te sobran", value: String(r.leftover) },
              { label: "Lo que pagas de verdad", value: formatEuroCents(r.paid), strong: true },
            ]}
          />
        </div>
      ) : (
        <p className="text-small">Pon un paquete con más de 0 gemas.</p>
      )}
    </div>
  );
}
