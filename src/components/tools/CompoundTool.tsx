"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Notice } from "@/components/ui/Callouts";
import { NumberField, SliderField } from "@/components/ui/Fields";
import { Breakdown } from "@/components/ui/Result";
import { formatEuroCents, formatPercent } from "@/lib/format";
import { compoundSeries } from "@/lib/finance";

export const COMPOUND_DISCLAIMER =
  "Es una simulación con un interés fijo de ejemplo. Ninguna rentabilidad está garantizada: las inversiones pueden bajar y puedes recuperar menos de lo que pusiste.";

// Recharts loads separately so the inputs and figures render with the page.
const CompoundChart = dynamic(() => import("./CompoundChart").then((m) => m.CompoundChart), {
  ssr: false,
  loading: () => <div className="h-full rounded-md bg-sunken" />,
});

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

  // Load the chart (and Recharts) only when it scrolls into view.
  const chartRef = useRef<HTMLDivElement>(null);
  const [chartVisible, setChartVisible] = useState(false);
  useEffect(() => {
    const el = chartRef.current;
    if (!el || chartVisible) return;
    const io = new IntersectionObserver(([entry]) => entry.isIntersecting && setChartVisible(true), { rootMargin: "0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [chartVisible]);
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


      <div aria-live="polite">
        <Breakdown
          rows={[
            { label: "Lo que has puesto", value: formatEuroCents(last.contributed) },
            { label: "Intereses (simulados)", value: formatEuroCents(last.interest) },
            { label: `Total a los ${years} años`, value: formatEuroCents(last.value), strong: true },
          ]}
        />
      </div>

      <figure>
        <figcaption className="text-caption font-semibold text-muted">Evolución en {years} años (en euros)</figcaption>
        <div ref={chartRef} className="mt-3 h-56 w-full" aria-hidden="true">
          {chartVisible ? <CompoundChart series={series} /> : <div className="h-full rounded-md bg-sunken" />}
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
      {compact ? null : (
        <p className="text-small text-muted">
          Interés compuesto mensual equivalente al porcentaje anual elegido; las aportaciones se suman a final de cada mes.
        </p>
      )}
    </div>
  );
}
