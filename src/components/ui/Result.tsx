import type { ReactNode } from "react";

/** Big monospaced result with a label, used by tools and lesson examples. */
export function Result({
  label,
  value,
  note,
  live = false,
}: {
  label: string;
  value: ReactNode;
  note?: ReactNode;
  live?: boolean;
}) {
  return (
    <div className="rounded-md border border-line bg-surface px-4 py-4">
      <p className="text-caption font-semibold text-muted">{label}</p>
      <p className="tabular mt-1 font-mono text-[1.625rem] leading-tight" aria-live={live ? "polite" : undefined}>
        {value}
      </p>
      {note ? <div className="mt-1.5 text-small text-muted">{note}</div> : null}
    </div>
  );
}

/** Label/value rows in monospace (breakdowns). */
export function Breakdown({ rows }: { rows: ReadonlyArray<{ label: ReactNode; value: ReactNode; strong?: boolean }> }) {
  return (
    <dl className="divide-y divide-line border-y border-line">
      {rows.map((r, i) => (
        <div key={i} className={`flex items-baseline justify-between gap-4 py-2.5 ${r.strong ? "font-semibold" : ""}`}>
          <dt>{r.label}</dt>
          <dd className="tabular font-mono">{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}
