/**
 * Finaula logo. Symbol: a coin (circle) over a building block (square);
 * where they overlap, a deeper tone. Colors come from the logo tokens, so it
 * adapts to light and dark themes.
 */

/** Overlap of the circle (12,19 r11) and the rounded square (12,2 18×18 r4.5). */
export const LOGO_OVERLAP_PATH = "M12 8A11 11 0 0 1 22.954 20H16.5A4.5 4.5 0 0 1 12 15.5Z";

export function LogoSymbol({ size = 28, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <rect x="12" y="2" width="18" height="18" rx="4.5" className="fill-logo-square" />
      <circle cx="12" cy="19" r="11" className="fill-logo-circle" />
      <path d={LOGO_OVERLAP_PATH} className="fill-logo-overlap" />
    </svg>
  );
}

const wordmarkSizes = {
  sm: { symbol: 24, text: "text-[1.25rem]", gap: "gap-2" },
  md: { symbol: 28, text: "text-[1.4375rem]", gap: "gap-2.5" },
  lg: { symbol: 56, text: "text-[2.75rem]", gap: "gap-4" },
  xl: { symbol: 88, text: "text-[4.25rem]", gap: "gap-5" },
} as const;

export function Logo({ size = "md", className }: { size?: keyof typeof wordmarkSizes; className?: string }) {
  const s = wordmarkSizes[size];
  return (
    <span className={`inline-flex items-center ${s.gap} ${className ?? ""}`}>
      <LogoSymbol size={s.symbol} />
      <span className={`font-display ${s.text} leading-none font-[650] tracking-[-0.03em] text-ink`}>
        finaula
      </span>
    </span>
  );
}
