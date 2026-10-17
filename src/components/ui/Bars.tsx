import { formatEuro } from "@/lib/format";

const segmentColors = ["bg-accent", "bg-mark", "bg-alt", "bg-line-strong"];

export interface BarItem {
  name: string;
  amount: number;
}

/**
 * Proportional bar: each item takes its share of `total`.
 * The amounts are always repeated as text in the legend, so color is never the only cue.
 */
export function ProportionalBar({
  label,
  items,
  total,
}: {
  label: string;
  items: ReadonlyArray<BarItem>;
  total: number;
}) {
  const sum = items.reduce((s, i) => s + i.amount, 0);
  return (
    <figure>
      <figcaption className="flex items-baseline justify-between gap-3">
        <span className="font-semibold">{label}</span>
        <span className="tabular font-mono text-caption text-muted">
          {formatEuro(sum)} de {formatEuro(total)}
        </span>
      </figcaption>
      <div className="mt-2 flex h-9 gap-[3px] overflow-hidden rounded-sm bg-line" aria-hidden="true">
        {items.map((item, i) => (
          <span
            key={item.name}
            className={`${segmentColors[i % segmentColors.length]} h-full`}
            style={{ width: `${total > 0 ? (item.amount / total) * 100 : 0}%` }}
          />
        ))}
      </div>
      <ul className="mt-2.5 space-y-1.5">
        {items.map((item, i) => (
          <li key={item.name} className="flex items-center gap-2.5">
            <span
              className={`size-3 shrink-0 rounded-[3px] ${segmentColors[i % segmentColors.length]}`}
              aria-hidden="true"
            />
            <span className="flex-1">{item.name}</span>
            <span className="tabular font-mono text-small">{formatEuro(item.amount)}</span>
          </li>
        ))}
      </ul>
    </figure>
  );
}
