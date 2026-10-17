import { describe, expect, it } from "vitest";
import { AA_TEXT, contrastRatio, parseHex } from "@/design/contrast";
import { contrastPairs, directions } from "@/app/propuestas/_shared/palettes";

describe("contrastRatio", () => {
  it("matches known WCAG values", () => {
    expect(contrastRatio("#000000", "#FFFFFF")).toBeCloseTo(21, 5);
    expect(contrastRatio("#FFFFFF", "#FFFFFF")).toBeCloseTo(1, 5);
    expect(contrastRatio("#777777", "#FFFFFF")).toBeCloseTo(4.48, 2);
  });

  it("is symmetric", () => {
    expect(contrastRatio("#1F5C45", "#F6F3EC")).toBe(contrastRatio("#F6F3EC", "#1F5C45"));
  });

  it("rejects malformed colors", () => {
    expect(() => parseHex("#fff")).toThrow();
    expect(() => parseHex("red")).toThrow();
  });
});

describe("design proposals reach AA", () => {
  for (const direction of Object.values(directions)) {
    for (const mode of ["light", "dark"] as const) {
      for (const [fg, bg] of contrastPairs) {
        it(`${direction.name} · ${mode} · ${fg} on ${bg}`, () => {
          const palette = direction[mode];
          expect(contrastRatio(palette[fg], palette[bg])).toBeGreaterThanOrEqual(AA_TEXT);
        });
      }
    }
  }
});
