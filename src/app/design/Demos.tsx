"use client";

import { useState } from "react";
import { NumberField, SliderField } from "@/components/ui/Fields";
import { Option, type OptionState } from "@/components/ui/Option";
import { formatPercent } from "@/lib/format";

export function FieldDemo() {
  const [price, setPrice] = useState(90);
  const [saving, setSaving] = useState(20);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <NumberField label="Precio" unit="€" value={price} onChange={setPrice} hint="Lo que cuesta lo que quieres." />
      <SliderField label="Ahorro" value={saving} onChange={setSaving} min={0} max={50} format={formatPercent} />
    </div>
  );
}

const states: OptionState[] = ["idle", "selected", "correct", "incorrect", "dimmed"];
const labels: Record<OptionState, string> = {
  idle: "Sin elegir",
  selected: "Elegida",
  correct: "Correcta",
  incorrect: "Incorrecta",
  dimmed: "Atenuada (tras comprobar)",
};

export function OptionDemo() {
  return (
    <div className="space-y-3">
      {states.map((s, i) => (
        <Option key={s} name={`demo-${s}`} value={s} letter={String.fromCharCode(65 + i)} state={s} disabled>
          {labels[s]}
        </Option>
      ))}
    </div>
  );
}
