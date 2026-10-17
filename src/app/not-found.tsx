import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/brand/Logo";

export default function NotFound() {
  return (
    <Container width="reading" className="py-20">
      <Logo size="sm" />
      <p className="tabular mt-10 font-mono text-caption text-muted">ERROR 404</p>
      <h1 className="mt-2 text-h1 font-semibold tracking-[-0.025em]">Esta página no existe</h1>
      <p className="mt-3 text-lead text-muted">Puede que el enlace esté mal escrito o que la página se haya movido.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/">Ir al inicio</ButtonLink>
        <ButtonLink href="/cursos/" variant="secondary">
          Ver los cursos
        </ButtonLink>
      </div>
    </Container>
  );
}
