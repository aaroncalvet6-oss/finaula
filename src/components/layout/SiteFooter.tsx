import Link from "next/link";
import { Logo } from "@/components/brand/Logo";

const links = [
  { href: "/cursos/", label: "Cursos" },
  { href: "/herramientas/", label: "Herramientas" },
  { href: "/familias/", label: "Para familias y centros" },
  { href: "/fuentes/", label: "Fuentes y metodología" },
  { href: "/legal/", label: "Privacidad y uso educativo" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-line">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <Logo size="sm" />
        <p className="mt-3 max-w-prose text-small text-muted">
          Formación financiera para jóvenes de 14 a 18 años. Es educación, no asesoramiento financiero: no
          recomendamos productos, entidades ni inversiones.
        </p>
        <nav aria-label="Pie de página" className="mt-4">
          <ul className="flex flex-wrap gap-x-5">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-11 items-center text-small underline underline-offset-4">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
