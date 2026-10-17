import type { CSSProperties, ReactNode } from "react";
import { colorNames, colors } from "@/design/tokens";

/** Forces one theme inside a block (used to show light and dark side by side). */
export function ThemeScope({ mode, children, className }: { mode: "light" | "dark"; children: ReactNode; className?: string }) {
  const style = Object.fromEntries(
    colorNames.map((n) => [`--f-${n.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)}`, colors[mode][n]]),
  ) as CSSProperties;
  return (
    <div style={{ ...style, colorScheme: mode }} className={`bg-bg text-ink ${className ?? ""}`}>
      {children}
    </div>
  );
}
