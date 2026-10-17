import { Info, TriangleAlert } from "lucide-react";
import type { ReactNode } from "react";

/** A term and its plain-language definition. */
export function Concept({ term, children }: { term: string; children: ReactNode }) {
  return (
    <div className="border-l-[3px] border-accent pl-5">
      <p className="font-display text-[1.25rem] font-semibold">{term}</p>
      <div className="mt-1 text-reading">{children}</div>
    </div>
  );
}

/** The one idea to remember from a lesson. Sober on purpose. */
export function KeyFact({ children, label = "Dato clave" }: { children: ReactNode; label?: string }) {
  return (
    <figure className="border-y border-line py-7">
      <figcaption className="eyebrow text-accent-text">{label}</figcaption>
      <blockquote className="mt-2 font-display text-[1.375rem] leading-snug font-medium tracking-[-0.01em]">
        {children}
      </blockquote>
    </figure>
  );
}

/** Short neutral notice (disclaimers, methodology notes). */
export function Notice({
  children,
  tone = "info",
  className,
}: {
  children: ReactNode;
  tone?: "info" | "warning";
  className?: string;
}) {
  const Icon = tone === "warning" ? TriangleAlert : Info;
  return (
    <div className={`flex gap-3 rounded-md bg-sunken px-4 py-3 text-small ${className ?? ""}`} role="note">
      <Icon size={18} className="mt-0.5 shrink-0 text-muted" aria-hidden="true" />
      <div>{children}</div>
    </div>
  );
}
