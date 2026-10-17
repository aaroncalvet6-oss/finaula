import type { ReactNode } from "react";

export function Eyebrow({ children, tone = "muted" }: { children: ReactNode; tone?: "muted" | "accent" }) {
  return (
    <p className={`eyebrow flex gap-2 ${tone === "accent" ? "text-accent-text" : "text-muted"}`}>
      <span className="mt-[0.4em] size-2 shrink-0 rounded-[2px] bg-accent" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeading({
  id,
  children,
  description,
}: {
  id?: string;
  children: ReactNode;
  description?: ReactNode;
}) {
  return (
    <div className="mb-5">
      <h2 id={id} className="text-h2 font-semibold tracking-[-0.02em]">
        {children}
      </h2>
      {description ? <p className="mt-2 text-muted">{description}</p> : null}
    </div>
  );
}

/** Monospaced figure for tool results and amounts. */
export function Mono({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={`tabular font-mono ${className ?? ""}`}>{children}</span>;
}
