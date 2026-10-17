import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { LOGO_OVERLAP_PATH } from "@/components/brand/Logo";
import { colors } from "@/design/tokens";

describe("favicon", () => {
  const svg = readFileSync("src/app/icon.svg", "utf8");

  it("uses the logo token colors for both themes", () => {
    for (const mode of ["light", "dark"] as const) {
      const p = colors[mode];
      for (const c of [p.logoSquare, p.logoCircle, p.logoOverlap]) {
        expect(svg.toUpperCase()).toContain(c.toUpperCase());
      }
    }
  });

  it("draws the same overlap as the Logo component", () => {
    expect(svg).toContain(LOGO_OVERLAP_PATH);
  });
});
