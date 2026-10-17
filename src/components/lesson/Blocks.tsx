import { ProportionalBar } from "@/components/ui/Bars";
import { Concept, Notice } from "@/components/ui/Callouts";
import type { Block } from "@/content/schema";

/** Renders lesson content blocks with reading typography. */
export function Blocks({ blocks }: { blocks: ReadonlyArray<Block> }) {
  return (
    <div className="space-y-5">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return (
              <p key={i} className="text-reading">
                {b.text}
              </p>
            );
          case "h":
            return (
              <h3 key={i} className="pt-3 text-h4 font-semibold tracking-[-0.01em]">
                {b.text}
              </h3>
            );
          case "concept":
            return (
              <Concept key={i} term={b.term}>
                {b.text}
              </Concept>
            );
          case "list": {
            const List = b.ordered ? "ol" : "ul";
            return (
              <List key={i} className="space-y-2.5 text-reading">
                {b.items.map((item, j) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className={`tabular mt-[0.2em] shrink-0 font-mono text-small ${b.ordered ? "text-accent-text" : "text-muted"}`}
                      aria-hidden="true"
                    >
                      {b.ordered ? `${j + 1}.` : "—"}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </List>
            );
          }
          case "bars":
            return (
              <div key={i} className="space-y-6">
                {b.groups.map((g) => (
                  <ProportionalBar key={g.label} label={g.label} items={g.items} total={b.total} />
                ))}
              </div>
            );
          case "table":
            return (
              <div key={i} className="-mx-1 overflow-x-auto px-1">
                <table className="w-full border-collapse text-left text-small">
                  <caption className="mb-2 text-left text-caption font-semibold text-muted">{b.caption}</caption>
                  <thead>
                    <tr className="border-b-[1.5px] border-ink">
                      {b.head.map((h, j) => (
                        <th key={h} scope="col" className={`py-2 pr-3 font-semibold ${j === b.head.length - 1 ? "text-right" : ""}`}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row, r) => (
                      <tr key={r} className={`border-b border-line ${b.strong?.includes(r) ? "font-semibold" : ""}`}>
                        {row.map((cell, c) => (
                          <td
                            key={c}
                            className={`py-2.5 pr-3 align-top ${c === row.length - 1 || (c > 0 && /€|%|^\d/.test(cell)) ? "tabular font-mono whitespace-nowrap" : ""} ${c === row.length - 1 ? "text-right" : ""}`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "calc":
            return (
              <div key={i} className="rounded-md border border-line bg-surface px-4 py-4">
                <p className="text-caption font-semibold text-muted">{b.label}</p>
                <p className="tabular mt-1 font-mono text-[1.25rem] leading-snug">{b.value}</p>
                {b.note ? <p className="mt-1.5 text-small text-muted">{b.note}</p> : null}
              </div>
            );
          case "note":
            return <Notice key={i}>{b.text}</Notice>;
        }
      })}
    </div>
  );
}
