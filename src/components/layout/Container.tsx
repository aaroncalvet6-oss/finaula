import type { ReactNode } from "react";

/** Page width container. `reading` narrows to a comfortable measure for lessons. */
export function Container({
  children,
  width = "page",
  className,
}: {
  children: ReactNode;
  width?: "page" | "reading";
  className?: string;
}) {
  const max = width === "reading" ? "max-w-[38rem]" : "max-w-5xl";
  return <div className={`mx-auto ${max} px-4 sm:px-6 ${className ?? ""}`}>{children}</div>;
}
