import type { ReactNode } from "react";
import { cssVariables, directions, type DirectionId } from "./palettes";

/** Applies one direction's tokens to the page (light, and dark via prefers-color-scheme). */
export function Proposal({ id, children }: { id: DirectionId; children: ReactNode }) {
  const d = directions[id];
  const css =
    `:root{${cssVariables(d.light)}--t-font-display:${d.fonts.display};` +
    `--t-font-body:${d.fonts.body};--t-font-mono:${d.fonts.mono};color-scheme:light;}` +
    `@media (prefers-color-scheme: dark){:root{${cssVariables(d.dark)}color-scheme:dark;}}`;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="min-h-dvh bg-bg font-body text-ink">{children}</div>
    </>
  );
}
