import { assetPath } from "@/config/site";

/**
 * Self-hosted variable fonts (latin subset, covers Spanish), served from
 * public/fonts with stable URLs so the two text fonts can be preloaded.
 * Licences: public/fonts/LICENSE-*.txt (SIL Open Font License 1.1).
 */
const LATIN =
  "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2190-2193,U+2212,U+2215,U+FEFF,U+FFFD";

export const fontFiles = [
  { family: "Bricolage Grotesque Variable", file: "/fonts/bricolage-grotesque-latin.woff2", weight: "200 800", preload: true, display: "swap" },
  { family: "Inter Variable", file: "/fonts/inter-latin.woff2", weight: "100 900", preload: true, display: "swap" },
  { family: "Geist Mono Variable", file: "/fonts/geist-mono-latin.woff2", weight: "100 900", preload: false, display: "swap" },
] as const;

/**
 * Metric-matched local fallbacks (same method as next/font) so text keeps its
 * size while the web fonts load: no layout shift when they swap in.
 */
const fallbacks = [
  { family: "Inter Fallback", local: "Arial", sizeAdjust: "107.12%", ascent: "90.44%", descent: "22.52%" },
  { family: "Bricolage Grotesque Fallback", local: "Arial", sizeAdjust: "105.43%", ascent: "88.21%", descent: "25.61%" },
  { family: "Geist Mono Fallback", local: "Courier New", sizeAdjust: "99.98%", ascent: "100.52%", descent: "29.50%" },
];

export function fontFaceCss(): string {
  const fallbackCss = fallbacks
    .map(
      (f) =>
        `@font-face{font-family:"${f.family}";src:local("${f.local}");size-adjust:${f.sizeAdjust};ascent-override:${f.ascent};descent-override:${f.descent};line-gap-override:0%}`,
    )
    .join("");
  return fallbackCss + fontFiles
    .map(
      (f) =>
        `@font-face{font-family:"${f.family}";font-style:normal;font-display:${f.display};font-weight:${f.weight};` +
        `src:url(${assetPath(f.file)}) format("woff2-variations"),url(${assetPath(f.file)}) format("woff2");unicode-range:${LATIN}}`,
    )
    .join("");
}
