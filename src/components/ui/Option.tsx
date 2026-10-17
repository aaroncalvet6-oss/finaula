import { Check, X } from "lucide-react";
import type { ReactNode } from "react";

export type OptionState = "idle" | "selected" | "correct" | "incorrect" | "dimmed";

const styles: Record<OptionState, string> = {
  idle: "border-line bg-surface hover:border-line-strong",
  selected: "border-ink bg-surface",
  correct: "border-success bg-success-soft text-on-success-soft",
  incorrect: "border-danger bg-danger-soft text-on-danger-soft",
  dimmed: "border-line bg-surface opacity-60",
};

/** Answer option rendered as a radio card. */
export function Option({
  name,
  value,
  letter,
  state,
  disabled,
  onSelect,
  children,
}: {
  name: string;
  value: string;
  letter: string;
  state: OptionState;
  disabled?: boolean;
  onSelect?: () => void;
  children: ReactNode;
}) {
  const marker =
    state === "correct" ? (
      <Check size={16} strokeWidth={2.6} aria-hidden="true" />
    ) : state === "incorrect" ? (
      <X size={16} strokeWidth={2.6} aria-hidden="true" />
    ) : (
      letter
    );
  return (
    <label
      className={`flex min-h-14 cursor-pointer items-center gap-3 rounded-md border-[1.5px] px-4 py-3 transition-colors duration-150 has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent ${styles[state]} ${disabled ? "cursor-default" : ""}`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={state === "selected" || state === "correct" || state === "incorrect"}
        disabled={disabled}
        onChange={onSelect}
        className="sr-only"
      />
      <span
        className={`grid size-7 shrink-0 place-items-center rounded-full border-[1.5px] font-mono text-caption ${
          state === "selected"
            ? "border-ink bg-ink text-bg"
            : state === "correct"
              ? "border-success bg-success text-bg"
              : state === "incorrect"
                ? "border-danger bg-danger text-bg"
                : "border-line-strong text-muted"
        }`}
      >
        {marker}
      </span>
      <span>{children}</span>
    </label>
  );
}
