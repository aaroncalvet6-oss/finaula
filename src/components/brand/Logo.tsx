/**
 * Finaula logo. Symbol: a step built from two blocks with a rising coin
 * (quarter disc) on top — learning step by step, money that grows.
 * Colors come from the logo tokens, so it adapts to light and dark themes.
 */

/** Symbol geometry on a 32×32 grid (shared with src/app/icon.svg and scripts/icons.mjs). */
export const LOGO_PATHS = {
  coin: "M17 15V1A14 14 0 0 1 31 15Z",
  blockLeft: "M4 17H15V31H4A3 3 0 0 1 1 28V20A3 3 0 0 1 4 17Z",
  blockRight: "M17 17H28A3 3 0 0 1 31 20V28A3 3 0 0 1 28 31H17Z",
} as const;

export function LogoSymbol({ size = 28, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <path d={LOGO_PATHS.coin} className="fill-logo-square" />
      <path d={LOGO_PATHS.blockLeft} className="fill-logo-circle" />
      <path d={LOGO_PATHS.blockRight} className="fill-logo-overlap" />
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
