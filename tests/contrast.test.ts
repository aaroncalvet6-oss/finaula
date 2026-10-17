import { describe, expect, it } from "vitest";
import { AA_LARGE, AA_TEXT, contrastRatio, parseHex } from "@/design/contrast";
import { colors, textPairs, uiPairs } from "@/design/tokens";

describe("contrastRatio", () => {
  it("matches known WCAG values", () => {
    expect(contrastRatio("#000000", "#FFFFFF")).toBeCloseTo(21, 5);
    expect(contrastRatio("#FFFFFF", "#FFFFFF")).toBeCloseTo(1, 5);
    expect(contrastRatio("#777777", "#FFFFFF")).toBeCloseTo(4.48, 2);
  });

  it("is symmetric", () => {
    expect(contrastRatio("#B8441F", "#FFFCF7")).toBe(contrastRatio("#FFFCF7", "#B8441F"));
  });

  it("rejects malformed colors", () => {
    expect(() => parseHex("#fff")).toThrow();
    expect(() => parseHex("red")).toThrow();
  });
});

describe("design tokens reach WCAG AA", () => {
  for (const mode of ["light", "dark"] as const) {
    const palette = colors[mode];
    for (const [fg, bg] of textPairs) {
      it(`${mode}: text ${fg} on ${bg} ≥ 4.5`, () => {
        expect(contrastRatio(palette[fg], palette[bg])).toBeGreaterThanOrEqual(AA_TEXT);
      });
    }
    for (const [fg, bg] of uiPairs) {
      it(`${mode}: UI ${fg} on ${bg} ≥ 3`, () => {
        expect(contrastRatio(palette[fg], palette[bg])).toBeGreaterThanOrEqual(AA_LARGE);
      });
    }
  }
});
