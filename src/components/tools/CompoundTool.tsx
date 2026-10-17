"use client";

import { useMemo, useState } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Notice } from "@/components/ui/Callouts";
import { NumberField, SliderField } from "@/components/ui/Fields";
import { Breakdown } from "@/components/ui/Result";
import { formatEuroCents, formatPercent } from "@/lib/format";
import { compoundSeries } from "@/lib/finance";

export const COMPOUND_DISCLAIMER =
  "Es una simulación con un interés fijo de ejemplo. Ninguna rentabilidad está garantizada: las inversiones pueden bajar y puedes recuperar menos de lo que pusiste.";

const compactEuro = new Intl.NumberFormat("es-ES", { maximumFractionDigits: 0 });

export function CompoundTool({ compact = false }: { compact?: boolean }) {
  const [initial, setInitial] = useState(100);
  const [monthly, setMonthly] = useState(10);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(20);
  const series = useMemo(
    () => compoundSeries({ initial, monthly, annualRate: rate / 100, years }),
    [initial, monthly, rate, years],
  );
  const last = series[series.length - 1];
  return (
    <div className="space-y-6">
      <Notice tone="warning">{COMPOUND_DISCLAIMER}</Notice>
      <div className="grid gap-5 sm:grid-cols-2">
        <NumberField label="Cantidad inicial" unit="€" value={initial} onChange={setInitial} />
        <NumberField label="Aportación cada mes" unit="€" value={monthly} onChange={setMonthly} />
      </div>
      <SliderField
        label="Interés anual de ejemplo"
        value={rate}
        onChange={setRate}
        min={0}
        max={10}
        step={0.5}
        format={formatPercent}
      />
      <SliderField label="Años" value={years} onChange={setYears} min={1} max={50} format={(v) => `${v} años`} />

      <figure>
        <figcaption className="text-caption font-semibold text-muted">Evolución en {years} años (en euros)</figcaption>
        <div className="mt-3 h-56 w-full" aria-hidden="true">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={series} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
              <CartesianGrid stroke="var(--f-line)" vertical={false} />
              <XAxis
                dataKey="year"
                tickLine={false}
                axisLine={{ stroke: "var(--f-line)" }}
                tick={{ fill: "var(--f-muted)", fontSize: 12, fontFamily: "var(--f-font-mono)" }}
                minTickGap={24}
              />
              <YAxis
                width={44}
                tickLine={false}
                axisLine={false}
                tick={{ fill: "var(--f-muted)", fontSize: 12, fontFamily: "var(--f-font-mono)" }}
                tickFormatter={(v: number) => compactEuro.format(v)}
              />
              <Tooltip
                formatter={(v) => formatEuroCents(Number(v))}
                labelFormatter={(l) => `Año ${l}`}
                contentStyle={{
                  background: "var(--f-surface)",
                  border: "1px solid var(--f-line)",
                  borderRadius: 8,
                  color: "var(--f-ink)",
                  fontFamily: "var(--f-font-mono)",
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                name="Total"
                stroke="var(--f-accent)"
                strokeWidth={2.5}
                fill="var(--f-soft)"
                isAnimationActive={false}
              />
              <Area
                type="monotone"
                dataKey="contributed"
                name="Lo que has puesto"
                stroke="var(--f-line-strong)"
                strokeWidth={2}
                strokeDasharray="5 4"
                fill="transparent"
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-small">
          <li className="flex items-center gap-2">
            <span className="h-[3px] w-5 rounded-full bg-accent" aria-hidden="true" /> Total
          </li>
          <li className="flex items-center gap-2">
            <span className="h-0 w-5 border-t-2 border-dashed border-line-strong" aria-hidden="true" /> Lo que has puesto
          </li>
        </ul>
      </figure>

      <div aria-live="polite">
        <Breakdown
          rows={[
            { label: "Lo que has puesto", value: formatEuroCents(last.contributed) },
            { label: "Intereses (simulados)", value: formatEuroCents(last.interest) },
            { label: `Total a los ${years} años`, value: formatEuroCents(last.value), strong: true },
          ]}
        />
      </div>
      {compact ? null : (
        <p className="text-small text-muted">
          Interés compuesto mensual equivalente al porcentaje anual elegido; las aportaciones se suman a final de cada mes.
        </p>
      )}
    </div>
  );
}
