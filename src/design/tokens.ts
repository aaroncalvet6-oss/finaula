/**
 * Finaula design tokens: the single source of truth.
 * `tokensCss()` turns them into CSS variables (rendered in the root layout);
 * Tailwind maps the variables to utilities in `globals.css`.
 */

export const colorNames = [
  "bg",
  "surface",
  "sunken",
  "ink",
  "muted",
  "line",
  "lineStrong",
  "accent",
  "onAccent",
  "accentText",
  "soft",
  "onSoft",
  "mark",
  "onMark",
  "alt",
  "onAlt",
  "success",
  "successSoft",
  "onSuccessSoft",
  "danger",
  "dangerSoft",
  "onDangerSoft",
  "logoSquare",
  "logoCircle",
  "logoOverlap",
] as const;

export type ColorName = (typeof colorNames)[number];
export type ColorPalette = Record<ColorName, string>;

export const colors: { light: ColorPalette; dark: ColorPalette } = {
  light: {
    bg: "#FFFCF7",
    surface: "#FFFFFF",
    sunken: "#F7F1E8",
    ink: "#1A1612",
    muted: "#62574D",
    line: "#ECE4DA",
    lineStrong: "#8C7F72",
    accent: "#B8441F",
    onAccent: "#FFFFFF",
    accentText: "#A63C19",
    soft: "#FBEAE2",
    onSoft: "#7A2A0E",
    mark: "#F2C14E",
    onMark: "#1A1410",
    alt: "#1F5A55",
    onAlt: "#FFFCF7",
    success: "#1E6B4A",
    successSoft: "#E3F1E8",
    onSuccessSoft: "#14492F",
    danger: "#B3261E",
    dangerSoft: "#FBE7E4",
    onDangerSoft: "#7C1913",
    logoSquare: "#F2C14E",
    logoCircle: "#B8441F",
    logoOverlap: "#7A2A0E",
  },
  dark: {
    bg: "#141110",
    surface: "#1D1916",
    sunken: "#100D0C",
    ink: "#F6EFE7",
    muted: "#B3A79B",
    line: "#352D27",
    lineStrong: "#86796C",
    accent: "#F07A52",
    onAccent: "#1A1410",
    accentText: "#F28C69",
    soft: "#33201A",
    onSoft: "#FFD3C2",
    mark: "#E9B949",
    onMark: "#1A1410",
    alt: "#24524E",
    onAlt: "#F6EFE7",
    success: "#6FCF9C",
    successSoft: "#15291F",
    onSuccessSoft: "#B9EBCF",
    danger: "#F2867C",
    dangerSoft: "#3A1714",
    onDangerSoft: "#FFC9C2",
    logoSquare: "#E9B949",
    logoCircle: "#F07A52",
    logoOverlap: "#B8441F",
  },
};

/** Text/background pairs used in the UI. Each must reach WCAG AA (4.5:1). */
export const textPairs: ReadonlyArray<[ColorName, ColorName]> = [
  ["ink", "bg"],
  ["ink", "surface"],
  ["ink", "sunken"],
  ["muted", "bg"],
  ["muted", "surface"],
  ["muted", "sunken"],
  ["onAccent", "accent"],
  ["accentText", "bg"],
  ["accentText", "surface"],
  ["onSoft", "soft"],
  ["onMark", "mark"],
  ["onAlt", "alt"],
  ["success", "bg"],
  ["success", "surface"],
  ["onSuccessSoft", "successSoft"],
  ["danger", "bg"],
  ["danger", "surface"],
  ["onDangerSoft", "dangerSoft"],
];

/** Non-text UI pairs (input borders, focus ring, progress). Each must reach 3:1. */
export const uiPairs: ReadonlyArray<[ColorName, ColorName]> = [
  ["lineStrong", "bg"],
  ["lineStrong", "surface"],
  ["accent", "bg"],
  ["accent", "surface"],
  ["ink", "bg"],
  ["mark", "alt"],
];

export const fonts = {
  display: '"Bricolage Grotesque Variable", "Bricolage Grotesque Fallback", ui-sans-serif, system-ui, sans-serif',
  body: '"Inter Variable", "Inter Fallback", ui-sans-serif, system-ui, sans-serif',
  mono: '"Geist Mono Variable", "Geist Mono Fallback", ui-monospace, SFMono-Regular, Menlo, monospace',
} as const;

/** Type scale (rem). Reading text never goes below 1rem (16px). */
export const typeScale = {
  caption: { size: "0.8125rem", line: "1.4", weight: 600 },
  small: { size: "0.9375rem", line: "1.55", weight: 400 },
  body: { size: "1rem", line: "1.6", weight: 400 },
  reading: { size: "1.125rem", line: "1.7", weight: 400 },
  lead: { size: "1.0625rem", line: "1.65", weight: 400 },
  h4: { size: "1.125rem", line: "1.35", weight: 600 },
  h3: { size: "1.375rem", line: "1.2", weight: 600 },
  h2: { size: "1.75rem", line: "1.15", weight: 600 },
  h1: { size: "2.25rem", line: "1.08", weight: 600 },
  display: { size: "2.5rem", line: "1.05", weight: 600 },
  number: { size: "3.5rem", line: "1", weight: 600 },
} as const;

/** 4px spacing grid. */
export const space = {
  0: "0",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
} as const;

export const radius = {
  sm: "0.375rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.5rem",
  full: "9999px",
} as const;

/** Shadows are rare: only floating elements (sticky bars, menus). Cards use borders. */
export const shadow = {
  none: "none",
  float: "0 -1px 0 0 var(--f-line), 0 -8px 24px -12px rgb(26 22 18 / 0.18)",
  overlay: "0 12px 32px -12px rgb(26 22 18 / 0.35)",
} as const;

export const motion = {
  fast: "120ms",
  base: "200ms",
  slow: "320ms",
  ease: "cubic-bezier(0.2, 0, 0, 1)",
} as const;

/** Minimum touch target in px. */
export const touchTarget = 44;

const kebab = (s: string) => s.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);

function colorVars(palette: ColorPalette): string {
  return colorNames.map((n) => `--f-${kebab(n)}:${palette[n]};`).join("");
}

/** CSS variables for both themes. Dark follows the system setting. */
export function tokensCss(): string {
  const fontVars = Object.entries(fonts)
    .map(([k, v]) => `--f-font-${k}:${v};`)
    .join("");
  const shadowVars = Object.entries(shadow)
    .map(([k, v]) => `--f-shadow-${k}:${v};`)
    .join("");
  const motionVars = Object.entries(motion)
    .map(([k, v]) => `--f-motion-${k}:${v};`)
    .join("");
  return (
    `:root{color-scheme:light;${colorVars(colors.light)}${fontVars}${shadowVars}${motionVars}}` +
    `@media (prefers-color-scheme: dark){:root{color-scheme:dark;${colorVars(colors.dark)}}}`
  );
}
