import { site } from "@/config/site";

/** Holding page until phase 4 ships the real home. */
export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-2xl flex-col justify-center gap-6 px-6 py-16">
      <p className="text-sm font-medium tracking-wide text-muted uppercase">{site.tagline}</p>
      <h1 className="text-4xl leading-tight font-semibold tracking-tight text-ink">{site.name}</h1>
      <p className="max-w-prose text-lg text-muted">
        Cursos cortos para entender tu dinero, con ejemplos reales y herramientas para practicar.
        Estamos preparando los primeros cursos.
      </p>
    </main>
  );
}
