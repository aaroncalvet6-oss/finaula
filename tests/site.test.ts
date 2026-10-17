import { describe, expect, it } from "vitest";
import { assetPath, site } from "@/config/site";

describe("site config", () => {
  it("publishes under the GitHub Pages sub-path", () => {
    expect(site.basePath).toBe("/finaula");
    expect(site.url.endsWith(site.basePath)).toBe(true);
  });

  it("prefixes asset paths with the base path", () => {
    expect(assetPath("/logo.svg")).toBe("/finaula/logo.svg");
    expect(assetPath("logo.svg")).toBe("/finaula/logo.svg");
  });

  it("does not expose a contact email until the owner provides one", () => {
    expect(site.contactEmail).toBeNull();
  });
});
