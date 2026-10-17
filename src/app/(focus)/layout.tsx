import type { ReactNode } from "react";

/** Focused pages (lesson reader, assessment): no site navigation. */
export default function FocusLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
