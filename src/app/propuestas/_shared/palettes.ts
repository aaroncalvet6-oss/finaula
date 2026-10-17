/**
 * Color tokens for the three phase-2 visual directions.
 * Each pair listed in `contrastPairs` must pass WCAG AA (tested).
 */

export const tokenNames = [
  "bg",
  "surface",
  "ink",
  "muted",
  "line",
  "accent",
  "onAccent",
  "accentText",
  "soft",
  "onSoft",
  "mark",
  "onMark",
  "alt",
  "onAlt",
] as const;

export type TokenName = (typeof tokenNames)[number];
export type Palette = Record<TokenName, string>;

export type DirectionId = "a" | "b" | "c" | "c2";

export interface Direction {
  id: DirectionId;
  name: string;
  summary: string;
  fonts: { display: string; body: string; mono: string };
  light: Palette;
  dark: Palette;
}

export const directions: Record<DirectionId, Direction> = {
  a: {
    id: "a",
    name: "Cuaderno",
    summary:
      "Editorial y sereno. Papel cálido, tinta, verde profundo y un subrayado ocre. Serif para titulares, índices con números y filetes finos en lugar de tarjetas.",
    fonts: {
      display: '"Newsreader Variable", Georgia, serif',
      body: '"Inter Variable", system-ui, sans-serif',
      mono: 'ui-monospace, "SFMono-Regular", Menlo, monospace',
    },
    light: {
      bg: "#F6F3EC",
      surface: "#FFFDF8",
      ink: "#1B1A17",
      muted: "#5E5A52",
      line: "#D9D2C3",
      accent: "#1F5C45",
      onAccent: "#F6F3EC",
      accentText: "#1F5C45",
      soft: "#E4ECE4",
      onSoft: "#1B3D2F",
      mark: "#F0D58A",
      onMark: "#1B1A17",
      alt: "#EDE7DA",
      onAlt: "#3A362F",
    },
    dark: {
      bg: "#171612",
      surface: "#1F1E19",
      ink: "#EEE9DD",
      muted: "#A6A194",
      line: "#36342C",
      accent: "#8FD0AE",
      onAccent: "#10251B",
      accentText: "#8FD0AE",
      soft: "#1F3329",
      onSoft: "#CDE9D9",
      mark: "#C9A23A",
      onMark: "#171612",
      alt: "#24231D",
      onAlt: "#D6D0C2",
    },
  },
  b: {
    id: "b",
    name: "Instrumento",
    summary:
      "Preciso y técnico. Grafito, blanco roto y una señal lima. Sans geométrica con cifras monoespaciadas, retícula visible y progreso en marcas.",
    fonts: {
      display: '"Geist Variable", system-ui, sans-serif',
      body: '"Geist Variable", system-ui, sans-serif',
      mono: '"Geist Mono Variable", ui-monospace, monospace',
    },
    light: {
      bg: "#FAFAF9",
      surface: "#FFFFFF",
      ink: "#0E0F0C",
      muted: "#5B5F57",
      line: "#E3E4DF",
      accent: "#0E0F0C",
      onAccent: "#FAFAF9",
      accentText: "#3B6A00",
      soft: "#EEF7DA",
      onSoft: "#2C4F00",
      mark: "#C8F169",
      onMark: "#0E0F0C",
      alt: "#F1F2EE",
      onAlt: "#2B2E28",
    },
    dark: {
      bg: "#0B0C0A",
      surface: "#131512",
      ink: "#EDEEE9",
      muted: "#9A9E94",
      line: "#262920",
      accent: "#C8F169",
      onAccent: "#0E0F0C",
      accentText: "#C8F169",
      soft: "#1B2410",
      onSoft: "#D8F59A",
      mark: "#C8F169",
      onMark: "#0E0F0C",
      alt: "#181A16",
      onAlt: "#C9CCC3",
    },
  },
  c: {
    id: "c",
    name: "Contraste",
    summary:
      "Directo y con energía. Bloques de color planos (teja, mostaza y verde azulado) sobre crema, formas geométricas y titulares gruesos. Cercano sin ser infantil.",
    fonts: {
      display: '"Bricolage Grotesque Variable", system-ui, sans-serif',
      body: '"Inter Variable", system-ui, sans-serif',
      mono: 'ui-monospace, "SFMono-Regular", Menlo, monospace',
    },
    light: {
      bg: "#FFF8F0",
      surface: "#FFFFFF",
      ink: "#1A1410",
      muted: "#6A5D52",
      line: "#EADFD2",
      accent: "#C8431B",
      onAccent: "#FFFFFF",
      accentText: "#B33A15",
      soft: "#FFE6D9",
      onSoft: "#7A2A0E",
      mark: "#FFD35C",
      onMark: "#1A1410",
      alt: "#1E5B57",
      onAlt: "#FFF8F0",
    },
    dark: {
      bg: "#16120F",
      surface: "#211B17",
      ink: "#FBF3EA",
      muted: "#B6A899",
      line: "#3A302A",
      accent: "#FF7A50",
      onAccent: "#1A1410",
      accentText: "#FF8D67",
      soft: "#3A2117",
      onSoft: "#FFD0BD",
      mark: "#F5C842",
      onMark: "#1A1410",
      alt: "#3FA39C",
      onAlt: "#0F1A19",
    },
  },
  /** Owner's pick (C) after the review of 17/10/2026: colour only in headers, progress and charts. */
  c2: {
    id: "c2",
    name: "Contraste · ajustada",
    summary:
      "La C con medida: fondos neutros para leer, color solo en cabeceras, progreso y gráficos, titulares menos pesados y cifras monoespaciadas.",
    fonts: {
      display: '"Bricolage Grotesque Variable", system-ui, sans-serif',
      body: '"Inter Variable", system-ui, sans-serif',
      mono: '"Geist Mono Variable", ui-monospace, monospace',
    },
    light: {
      bg: "#FFFCF7",
      surface: "#FFFFFF",
      ink: "#1A1612",
      muted: "#62574D",
      line: "#ECE4DA",
      accent: "#B8441F",
      onAccent: "#FFFFFF",
      accentText: "#A63C19",
      soft: "#FBEAE2",
      onSoft: "#7A2A0E",
      mark: "#F2C14E",
      onMark: "#1A1410",
      alt: "#1F5A55",
      onAlt: "#FFFCF7",
    },
    dark: {
      bg: "#141110",
      surface: "#1D1916",
      ink: "#F6EFE7",
      muted: "#B3A79B",
      line: "#352D27",
      accent: "#F07A52",
      onAccent: "#1A1410",
      accentText: "#F28C69",
      soft: "#33201A",
      onSoft: "#FFD3C2",
      mark: "#E9B949",
      onMark: "#1A1410",
      alt: "#24524E",
      onAlt: "#F6EFE7",
    },
  },
};

/**
 * Foreground/background pairs that carry text. All must reach 4.5:1.
 * Text on `alt` always uses `onAlt` (in Contraste, `alt` is a saturated block).
 */
export const contrastPairs: ReadonlyArray<[TokenName, TokenName]> = [
  ["ink", "bg"],
  ["ink", "surface"],
  ["muted", "bg"],
  ["muted", "surface"],
  ["onAccent", "accent"],
  ["accentText", "bg"],
  ["accentText", "surface"],
  ["onSoft", "soft"],
  ["onMark", "mark"],
  ["onAlt", "alt"],
];

export function cssVariables(palette: Palette): string {
  return tokenNames.map((name) => `--t-${name}:${palette[name]};`).join("");
}
