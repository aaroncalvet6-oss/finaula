"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { CompoundPoint } from "@/lib/finance";
import { formatEuroCents } from "@/lib/format";

const compactEuro = new Intl.NumberFormat("es-ES", { maximumFractionDigits: 0 });

/** Total vs contributed over time. Decorative: the same figures are shown as text. */
export function CompoundChart({ series }: { series: ReadonlyArray<CompoundPoint> }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={[...series]} margin={{ top: 8, right: 8, bottom: 0, left: 0 }} accessibilityLayer={false}>
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
  );
}
