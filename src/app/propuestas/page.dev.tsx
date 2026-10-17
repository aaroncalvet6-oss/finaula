import Link from "next/link";
import { directions } from "./_shared/palettes";

/** Dev-only index of the phase-2 visual directions. */
export default function ProposalsIndex() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Propuestas de diseño</h1>
      <ul className="mt-8 divide-y divide-line border-y border-line">
        {Object.values(directions).map((d) => (
          <li key={d.id} className="py-5">
            <h2 className="text-xl font-semibold">
              {d.id.toUpperCase()} · {d.name}
            </h2>
            <p className="mt-1 text-muted">{d.summary}</p>
            <p className="mt-2 flex gap-4">
              <Link className="underline" href={`/propuestas/${d.id}`}>
                Portada
              </Link>
              <Link className="underline" href={`/propuestas/${d.id}/leccion`}>
                Lección
              </Link>
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
