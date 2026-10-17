import { describe, expect, it } from "vitest";
import { colorNames, colors, tokensCss, typeScale } from "@/design/tokens";

describe("tokens", () => {
  it("defines every color in both themes as #rrggbb", () => {
    for (const mode of ["light", "dark"] as const) {
      for (const name of colorNames) {
        expect(colors[mode][name], `${mode}.${name}`).toMatch(/^#[0-9A-F]{6}$/i);
      }
    }
  });

  it("emits a CSS variable per color plus a dark override", () => {
    const css = tokensCss();
    for (const name of colorNames) {
      const kebab = name.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
      expect(css.split(`--f-${kebab}:`).length - 1, name).toBe(2);
    }
    expect(css).toContain("@media (prefers-color-scheme: dark)");
  });

  it("keeps reading text at 16px or more", () => {
    for (const key of ["body", "reading", "lead"] as const) {
      expect(Number.parseFloat(typeScale[key].size)).toBeGreaterThanOrEqual(1);
    }
  });
});

describe("globals.css type scale", () => {
  it("matches typeScale in tokens.ts", async () => {
    const { readFileSync } = await import("node:fs");
    const css = readFileSync("src/app/globals.css", "utf8");
    for (const [name, { size, line }] of Object.entries(typeScale)) {
      expect(css, name).toContain(`--text-${name}: ${size};`);
      expect(css, name).toContain(`--text-${name}--line-height: ${line};`);
    }
  });
});
