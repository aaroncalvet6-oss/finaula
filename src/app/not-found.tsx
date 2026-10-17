import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ButtonLink, TextLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main>
        <Container width="reading" className="pt-14 pb-6">
          <svg width="72" height="72" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M17 15V1A14 14 0 0 1 31 15Z" className="fill-mark" />
            <rect x="1" y="17" width="14" height="14" rx="3" className="fill-line" />
            <rect x="17" y="17" width="14" height="14" rx="3" className="fill-accent" />
          </svg>
          <p className="tabular mt-8 font-mono text-caption text-muted">ERROR 404</p>
          <h1 className="mt-2 text-h1 font-semibold tracking-[-0.025em]">Esta página no existe</h1>
          <p className="mt-3 text-lead text-muted">
            Puede que el enlace esté mal escrito o que la página se haya movido. Tu progreso sigue guardado en este navegador.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <ButtonLink href="/">
              Ir al inicio <ArrowRight size={18} aria-hidden="true" />
            </ButtonLink>
            <TextLink href="/cursos/" className="text-ink underline">
              Ver los cursos
            </TextLink>
            <TextLink href="/herramientas/" className="text-ink underline">
              Herramientas
            </TextLink>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
