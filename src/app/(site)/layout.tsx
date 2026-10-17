import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only z-50 rounded-md bg-ink px-4 py-3 text-bg focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Saltar al contenido
      </a>
      <SiteHeader />
      <div id="contenido">{children}</div>
      <SiteFooter />
    </>
  );
}
