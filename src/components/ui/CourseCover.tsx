/** Subtle geometric cover for a course header. One motif per course. */
export function CourseCover({ motif, className }: { motif: "coins" | "bars" | "blocks"; className?: string }) {
  return (
    <svg width="96" height="56" viewBox="0 0 96 56" aria-hidden="true" className={className}>
      {motif === "coins" ? (
        <>
          <circle cx="62" cy="36" r="20" className="fill-mark" />
          <circle cx="82" cy="20" r="14" fill="currentColor" opacity="0.18" />
        </>
      ) : motif === "bars" ? (
        <>
          <rect x="44" y="26" width="12" height="30" rx="3" fill="currentColor" opacity="0.18" />
          <rect x="62" y="14" width="12" height="42" rx="3" fill="currentColor" opacity="0.18" />
          <rect x="80" y="2" width="12" height="54" rx="3" className="fill-mark" />
        </>
      ) : (
        <>
          <rect x="40" y="20" width="24" height="24" rx="5" fill="currentColor" opacity="0.18" />
          <rect x="68" y="8" width="24" height="24" rx="5" className="fill-mark" />
        </>
      )}
    </svg>
  );
}
