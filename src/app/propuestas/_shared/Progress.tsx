/** Accessible progress indicator shared by the proposals; styling comes from props. */
export function Segments({
  done,
  total,
  label,
  className,
  filled,
  empty,
}: {
  done: number;
  total: number;
  label: string;
  className?: string;
  filled: string;
  empty: string;
}) {
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={total}
      aria-valuenow={done}
      className={`flex gap-1 ${className ?? ""}`}
    >
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={`flex-1 ${i < done ? filled : empty}`} />
      ))}
    </div>
  );
}
