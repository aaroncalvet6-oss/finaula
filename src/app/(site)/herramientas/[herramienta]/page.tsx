import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { ToolBySlug } from "@/components/tools";
import { TextLink } from "@/components/ui/Button";
import { Notice } from "@/components/ui/Callouts";
import { Eyebrow } from "@/components/ui/Typography";
import { getTool, tools } from "@/content/tools";

type Params = { herramienta: string };

const howItWorks: Record<string, string> = {
  "horas-de-trabajo": "Divide el precio entre lo que ganas por hora. Así ves cada compra como tiempo de tu vida, no solo como euros.",
  presupuesto:
    "Primero aparta el ahorro (un porcentaje de tus ingresos), después resta los gastos fijos. Lo que queda es lo que puedes dedicar a gastos variables.",
  "meta-de-ahorro":
    "Resta lo que ya tienes a tu meta y divide lo que falta entre las semanas o meses que quedan. La aportación se redondea al céntimo hacia arriba para que llegues.",
  "interes-compuesto":
    "Cada mes, el dinero acumulado crece al interés de ejemplo y se suma tu aportación. Los intereses de un año generan intereses al siguiente. Es una simulación con un interés fijo: en la realidad las rentabilidades cambian, pueden ser negativas y ninguna está garantizada.",
};

export function generateStaticParams(): Params[] {
  return tools.map((t) => ({ herramienta: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const tool = getTool((await params).herramienta);
  return tool
    ? pageMetadata({ title: tool.title, description: tool.summary, path: `/herramientas/${tool.slug}/`, image: "herramientas" })
    : {};
}

export default async function ToolPage({ params }: { params: Promise<Params> }) {
  const tool = getTool((await params).herramienta);
  if (!tool) notFound();
  return (
    <main>
      <Container width="reading" className="pt-10">
        <TextLink href="/herramientas/" className="text-small text-muted">
          Herramientas
        </TextLink>
        <div className="mt-2">
          <Eyebrow>Herramienta</Eyebrow>
        </div>
        <h1 className="mt-3 text-h1 font-semibold tracking-[-0.025em]">{tool.title}</h1>
        <p className="mt-3 text-lead text-muted">{tool.summary}</p>
        <div className="mt-8">
          <ToolBySlug slug={tool.slug} />
        </div>
        {tool.slug !== "interes-compuesto" ? (
          <p className="mt-4 text-caption text-muted">Las cifras son ejemplos. Prueba con las tuyas.</p>
        ) : null}
        <section aria-labelledby="como" className="mt-12 border-t border-line pt-6">
          <h2 id="como" className="text-h3 font-semibold">
            Cómo se calcula
          </h2>
          <p className="mt-2">{howItWorks[tool.slug]}</p>
        </section>
        <Notice className="mt-8">
          Aprende el concepto en la lección {tool.lesson.number}: {tool.lesson.title}.{" "}
          <TextLink href={`/cursos/${tool.lesson.course}/${tool.lesson.slug}/`} className="min-h-0">
            Ir a la lección <ArrowRight size={14} aria-hidden="true" />
          </TextLink>
        </Notice>
      </Container>
    </main>
  );
}
