/** Segmented progress: one segment per step (lessons in a course, steps in a lesson). */
export function ProgressSegments({
  done,
  total,
  label,
  tone = "accent",
  className,
}: {
  done: number;
  total: number;
  label: string;
  tone?: "accent" | "onAlt";
  className?: string;
}) {
  const filled = tone === "accent" ? "bg-accent" : "bg-mark";
  const empty = tone === "accent" ? "bg-line" : "bg-on-alt/25";
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={total}
      aria-valuenow={done}
      aria-valuetext={`${done} de ${total}`}
      className={`flex gap-1 ${className ?? ""}`}
    >
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={`h-2 flex-1 rounded-full transition-colors duration-300 ${i < done ? filled : empty}`}
        />
      ))}
    </div>
  );
}
