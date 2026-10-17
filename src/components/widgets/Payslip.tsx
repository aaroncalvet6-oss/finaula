"use client";

import { useState } from "react";
import { NumberField } from "@/components/ui/Fields";

const zones = [
  {
    id: "cabecera",
    title: "Cabecera",
    text: "Datos de la empresa y del trabajador, y el periodo que se paga. Comprueba que tu nombre, tu categoría y las fechas están bien.",
    rows: [["Empresa · Heladería de ejemplo", ""], ["Trabajadora · Carla", "Julio"]],
  },
  {
    id: "devengos",
    title: "Devengos",
    text: "Lo que ganas: salario base, complementos y, si se reparten, la prorrata de las pagas extra.",
    rows: [
      ["Salario base", "900,00 €"],
      ["Prorrata de pagas extra", "150,00 €"],
      ["Total devengado", "1.050,00 €"],
    ],
  },
  {
    id: "deducciones",
    title: "Deducciones",
    text: "Lo que te descuentan: tus cotizaciones a la Seguridad Social y la retención de IRPF.",
    rows: [
      ["Cotizaciones del trabajador", "70,00 €"],
      ["Retención de IRPF", "21,00 €"],
      ["Total deducciones", "91,00 €"],
    ],
  },
  {
    id: "liquido",
    title: "Líquido total a percibir",
    text: "Lo que cobras: el total devengado menos el total de deducciones.",
    rows: [["Líquido total a percibir", "¿?"]],
  },
] as const;

export function Payslip() {
  const [open, setOpen] = useState<string>("devengos");
  const [guess, setGuess] = useState(0);
  const solved = Math.abs(guess - 959) < 0.005;
  return (
    <div className="space-y-5">
      <p className="text-small text-muted">Nómina de ejemplo con cifras inventadas. Toca cada parte.</p>
      <div className="overflow-hidden rounded-md border border-line-strong bg-surface font-mono text-small">
        {zones.map((z) => {
          const active = open === z.id;
          return (
            <div key={z.id} className="border-b border-line last:border-0">
              <button
                type="button"
                aria-expanded={active}
                onClick={() => setOpen(z.id)}
                className={`flex min-h-11 w-full items-center justify-between px-4 py-2 text-left font-body font-semibold ${
                  active ? "bg-soft text-on-soft" : ""
                }`}
              >
                {z.title}
                <span aria-hidden="true">{active ? "−" : "+"}</span>
              </button>
              <dl className="px-4 pb-3">
                {z.rows.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-3 py-1">
                    <dt>{k}</dt>
                    <dd className="tabular">{z.id === "liquido" && solved ? "959,00 €" : v}</dd>
                  </div>
                ))}
              </dl>
              {active ? <p className="px-4 pb-4 font-body text-body">{z.text}</p> : null}
            </div>
          );
        })}
      </div>
      <NumberField label="¿Cuál es el líquido?" unit="€" value={guess} onChange={setGuess} step={0.01} />
      <p className={`text-small ${solved ? "text-success" : "text-muted"}`} aria-live="polite">
        {solved
          ? "Correcto: 1.050 € − 91 € = 959 €."
          : guess === 0
            ? "Resta el total de deducciones al total devengado."
            : "Todavía no. Total devengado menos total de deducciones."}
      </p>
    </div>
  );
}
