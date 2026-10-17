import { ArrowRight, ChartPie, Clock, Target, TrendingUp } from "lucide-react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Typography";
import { tools } from "@/content/tools";

export const metadata: Metadata = pageMetadata({
  title: "Herramientas",
  description: "Calculadoras para practicar con tus cifras: horas de trabajo, presupuesto, meta de ahorro e interés compuesto.",
  path: "/herramientas/",
  image: "herramientas",
});

const icons = { "horas-de-trabajo": Clock, presupuesto: ChartPie, "meta-de-ahorro": Target, "interes-compuesto": TrendingUp };

export default function ToolsPage() {
  return (
    <main>
      <Container className="pt-10">
        <Eyebrow>Herramientas</Eyebrow>
        <h1 className="mt-3 text-h1 font-semibold tracking-[-0.025em]">Practica con tus cifras</h1>
        <p className="mt-3 max-w-prose text-lead text-muted">
          Cada herramienta va unida a la lección donde se explica el concepto. Nada de lo que escribes sale de tu navegador.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {tools.map((t) => {
            const Icon = icons[t.slug];
            return (
              <li key={t.slug}>
                <Link href={`/herramientas/${t.slug}/`} className="group flex h-full flex-col rounded-lg border border-line bg-surface p-5 hover:border-line-strong">
                  <span className="grid size-11 place-items-center rounded-full bg-soft text-on-soft">
                    <Icon size={20} strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <h2 className="mt-4 text-h3 font-semibold group-hover:underline">{t.title}</h2>
                  <p className="mt-1 text-small text-muted">{t.summary}</p>
                  <p className="tabular mt-3 font-mono text-caption">{t.sample}</p>
                  <p className="mt-auto pt-4 text-caption text-muted">
                    Lección {t.lesson.number} · {t.lesson.title}
                  </p>
                  <span className="mt-2 inline-flex min-h-11 items-center gap-1.5 font-semibold text-accent-text">
                    Abrir <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="mt-4 text-caption text-muted">Las cifras son ejemplos.</p>
      </Container>
    </main>
  );
}
