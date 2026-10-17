import { ArrowLeft, ArrowRight, Clock, ChartPie, CircleUser, Menu, Target, TrendingUp } from "lucide-react";
import Link from "next/link";
import { home, lesson, euro } from "../_shared/content";
import { Segments } from "../_shared/Progress";

const toolIcons = [Clock, ChartPie, Target, TrendingUp];

function Symbol({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" aria-hidden="true">
      <rect x="10" y="2" width="18" height="18" rx="4" className="fill-mark" />
      <circle cx="11" cy="19" r="9" className="fill-accent" />
    </svg>
  );
}

function Header() {
  return (
    <header className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4">
      <Link href="/propuestas/c" className="flex min-h-11 items-center gap-2" aria-label="Finaula, inicio">
        <Symbol />
        <span className="font-display text-[1.5rem] font-extrabold tracking-[-0.03em]">finaula</span>
      </Link>
      <div className="flex items-center">
        <Link href="#" aria-label="Perfil" className="grid size-11 place-items-center rounded-full">
          <CircleUser size={24} strokeWidth={1.8} aria-hidden="true" />
        </Link>
        <button type="button" aria-label="Abrir menú" className="grid size-11 place-items-center rounded-full">
          <Menu size={24} strokeWidth={1.8} aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}

export function ContrasteHome() {
  const r = home.resume;
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-3 pb-6">
        <section className="relative overflow-hidden rounded-[28px] bg-accent px-5 pt-8 pb-8 text-on-accent">
          <svg
            className="absolute -top-6 -right-10"
            width="170"
            height="170"
            viewBox="0 0 170 170"
            aria-hidden="true"
          >
            <circle cx="85" cy="85" r="60" className="fill-mark" />
            <rect x="85" y="85" width="85" height="85" className="fill-alt" />
          </svg>
          <p className="relative max-w-[60%] text-[14px] leading-snug font-medium">{home.eyebrow}</p>
          <h1 className="relative mt-16 font-display text-[2.75rem] leading-[0.98] font-extrabold tracking-[-0.035em]">
            {home.title}
          </h1>
          <p className="relative mt-5 text-[17px] leading-relaxed">{home.lead}</p>
          <div className="relative mt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              href="/propuestas/c/leccion"
              className="inline-flex h-13 items-center gap-2 rounded-full bg-ink px-6 font-semibold text-bg"
            >
              {home.primary} <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="#cursos" className="inline-flex min-h-11 items-center font-semibold underline underline-offset-4">
              {home.secondary}
            </Link>
          </div>
        </section>

        <section aria-labelledby="resume" className="mt-3 rounded-[28px] bg-mark px-5 py-5 text-on-mark">
          <h2 id="resume" className="text-[14px] font-semibold">
            {r.label}
          </h2>
          <Link href="/propuestas/c/leccion" className="mt-2 flex items-center gap-4">
            <span className="tabular font-display text-[3rem] leading-none font-extrabold">{r.number}</span>
            <span className="flex-1 text-[17px] leading-snug font-semibold">{r.lesson}</span>
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-ink text-mark">
              <ArrowRight size={20} aria-hidden="true" />
            </span>
          </Link>
          <Segments
            done={r.done}
            total={r.total}
            label={`${r.done} de ${r.total} lecciones`}
            className="mt-4"
            filled="h-2.5 rounded-full bg-on-mark"
            empty="h-2.5 rounded-full bg-on-mark/20"
          />
          <p className="tabular mt-2 text-[14px] font-medium">
            {r.course} · {r.done} de {r.total} lecciones
          </p>
        </section>

        <section id="cursos" className="mt-12 px-2">
          <h2 className="font-display text-[2rem] font-extrabold tracking-[-0.03em]">Cursos</h2>
          <ul className="mt-4 space-y-3">
            {home.courses.map((c, i) => (
              <li key={c.number}>
                <Link
                  href="#"
                  className={`block overflow-hidden rounded-[28px] ${i === 0 ? "bg-alt text-on-alt" : "bg-soft text-on-soft"}`}
                >
                  <div className="flex items-start justify-between px-5 pt-5">
                    <span className="font-display text-[3.5rem] leading-none font-extrabold">{c.number}</span>
                    <svg width="72" height="56" viewBox="0 0 72 56" aria-hidden="true">
                      {i === 0 ? (
                        <>
                          <circle cx="18" cy="38" r="18" className="fill-mark" />
                          <circle cx="44" cy="22" r="18" className="fill-current opacity-25" />
                        </>
                      ) : (
                        <>
                          <rect x="4" y="20" width="20" height="36" rx="4" className="fill-accent" />
                          <rect x="28" y="8" width="20" height="48" rx="4" className="fill-current opacity-25" />
                          <rect x="52" y="0" width="20" height="56" rx="4" className="fill-mark" />
                        </>
                      )}
                    </svg>
                  </div>
                  <div className="px-5 pt-3 pb-5">
                    <h3 className="font-display text-[1.625rem] leading-tight font-bold tracking-[-0.02em]">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed">{c.description}</p>
                    <p className="tabular mt-3 text-[14px] font-semibold">
                      {c.lessons} lecciones · {c.minutes} min
                    </p>
                    <Segments
                      done={c.done}
                      total={c.lessons}
                      label={`${c.done} de ${c.lessons} lecciones`}
                      className="mt-3"
                      filled="h-2.5 rounded-full bg-current"
                      empty="h-2.5 rounded-full bg-current opacity-20"
                    />
                    <span className="mt-4 inline-flex min-h-11 items-center gap-1.5 font-semibold">
                      {c.done > 0 ? "Continuar" : "Empezar"} <ArrowRight size={18} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 rounded-[20px] border-2 border-dashed border-line px-5 py-4">
            <p className="text-[14px] font-semibold">Próximos cursos</p>
            <p className="mt-1 text-[15px] text-muted">{home.upcoming.join(" · ")}</p>
          </div>
        </section>

        <section className="mt-12 px-2">
          <h2 className="font-display text-[2rem] font-extrabold tracking-[-0.03em]">Herramientas</h2>
          <ul className="mt-3">
            {home.tools.map((t, i) => {
              const Icon = toolIcons[i];
              return (
                <li key={t.title} className="border-b-2 border-line last:border-0">
                  <Link href="#" className="flex items-center gap-4 py-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-soft text-on-soft">
                      <Icon size={22} strokeWidth={2} aria-hidden="true" />
                    </span>
                    <span className="flex-1">
                      <span className="block font-display text-[1.125rem] font-bold">{t.title}</span>
                      <span className="block text-[15px] leading-snug text-muted">{t.description}</span>
                    </span>
                    <ArrowRight size={18} className="shrink-0" aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="mt-12 px-2">
          <h2 className="font-display text-[2rem] font-extrabold tracking-[-0.03em]">Cómo funciona</h2>
          <ol className="mt-4 space-y-5">
            {home.steps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="w-10 shrink-0 font-display text-[2.75rem] leading-none font-extrabold text-accent-text">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-[1.125rem] font-bold">{s.title}</h3>
                  <p className="text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12 rounded-[28px] border-2 border-ink px-5 py-6">
          <h2 className="font-display text-[1.75rem] leading-tight font-extrabold tracking-[-0.02em]">
            {home.trust.title}
          </h2>
          <ul className="mt-4 space-y-3">
            {home.trust.points.map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-2 size-2.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <Link href="#" className="mt-4 inline-flex min-h-11 items-center gap-1.5 font-semibold underline underline-offset-4">
            {home.trust.link}
          </Link>
        </section>

        <section className="mt-3 rounded-[28px] bg-alt px-5 py-6 text-on-alt">
          <h2 className="font-display text-[1.75rem] leading-tight font-extrabold tracking-[-0.02em]">
            {home.families.title}
          </h2>
          <p className="mt-3">{home.families.text}</p>
          <Link href="#" className="mt-3 inline-flex min-h-11 items-center gap-1.5 font-semibold underline underline-offset-4">
            {home.families.link}
          </Link>
        </section>

        <footer className="mt-10 px-2 pb-6 text-[15px] text-muted">
          <div className="flex items-center gap-2 text-ink">
            <Symbol size={24} />
            <span className="font-display text-xl font-extrabold">finaula</span>
          </div>
          <p className="mt-3">Formación financiera para jóvenes. Es educación, no asesoramiento financiero.</p>
          <nav aria-label="Pie de página" className="mt-2 flex gap-5">
            <Link href="#" className="inline-flex min-h-11 items-center underline underline-offset-4">
              Fuentes y metodología
            </Link>
            <Link href="#" className="inline-flex min-h-11 items-center underline underline-offset-4">
              Legal
            </Link>
          </nav>
        </footer>
      </main>
    </>
  );
}

export function ContrasteLesson() {
  const ex = lesson.example;
  const budget = 25;
  const segmentColors = ["bg-accent", "bg-mark", "bg-alt"];
  return (
    <>
      <div className="mx-auto max-w-2xl px-3 pt-3">
        <header className="rounded-[28px] bg-alt px-4 pt-2 pb-6 text-on-alt">
          <div className="flex items-center justify-between">
            <Link href="/propuestas/c" aria-label="Volver al curso" className="grid size-11 place-items-center">
              <ArrowLeft size={22} aria-hidden="true" />
            </Link>
            <span className="tabular text-[14px] font-semibold">
              {lesson.index} / {lesson.total} · {lesson.minutes} min
            </span>
          </div>
          <div className="px-1">
            <p className="mt-4 font-display text-[4rem] leading-none font-extrabold">{lesson.number}</p>
            <h1 className="mt-3 font-display text-[2rem] leading-[1.02] font-extrabold tracking-[-0.03em]">
              {lesson.title}
            </h1>
            <Segments
              done={lesson.currentStep + 1}
              total={lesson.steps.length}
              label="Progreso de la lección"
              className="mt-6"
              filled="h-2.5 rounded-full bg-mark"
              empty="h-2.5 rounded-full bg-current opacity-25"
            />
          </div>
        </header>
      </div>

      <main className="mx-auto max-w-2xl px-5 pt-8 pb-32">
        <p className="text-[18px] leading-[1.65] font-medium">{lesson.objective}</p>
        <p className="mt-5 text-[18px] leading-[1.65]">{lesson.intro}</p>

        <div className="mt-6 rounded-[20px] bg-soft px-5 py-4 text-on-soft">
          <p className="font-display text-[1.25rem] font-bold">{lesson.concept.term}</p>
          <p className="mt-1 text-[17px] leading-[1.6]">{lesson.concept.definition}</p>
        </div>

        <section className="mt-10" aria-labelledby="ejemplo">
          <h2 id="ejemplo" className="font-display text-[1.75rem] font-extrabold tracking-[-0.02em]">
            {ex.title}
          </h2>
          <p className="mt-2 text-[17px] leading-relaxed">{ex.setup}</p>
          <div className="mt-5 space-y-5">
            {ex.options.map((o) => (
              <div key={o.label}>
                <div className="flex items-baseline justify-between">
                  <p className="font-display text-[1.125rem] font-bold">{o.label}</p>
                  <p className="tabular text-[14px] text-muted">de {euro(budget)}</p>
                </div>
                <div className="mt-2 flex h-11 gap-1 overflow-hidden rounded-xl bg-line" aria-hidden="true">
                  {o.items.map((item, i) => (
                    <span
                      key={item.name}
                      className={`${segmentColors[i]} h-full`}
                      style={{ width: `${(item.amount / budget) * 100}%` }}
                    />
                  ))}
                </div>
                <ul className="mt-2 space-y-1 text-[15px]">
                  {o.items.map((item, i) => (
                    <li key={item.name} className="flex items-center gap-2">
                      <span className={`size-3 shrink-0 rounded-[3px] ${segmentColors[i]}`} aria-hidden="true" />
                      <span className="flex-1">{item.name}</span>
                      <span className="tabular font-semibold">{euro(item.amount)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[17px] leading-relaxed">{ex.takeaway}</p>
          <p className="tabular mt-5 font-display text-[1.75rem] font-extrabold">
            20 € ÷ 8 €/h = <span className="text-accent-text">2,5 h</span>
          </p>
          <p className="mt-1 text-[15px] text-muted">{ex.hoursNote}</p>
        </section>

        <section className="mt-10 rounded-[28px] bg-mark px-5 py-6 text-on-mark">
          <p className="text-[14px] font-semibold">Dato clave</p>
          <p className="mt-2 font-display text-[1.5rem] leading-tight font-extrabold tracking-[-0.02em]">
            {lesson.keyFact}
          </p>
        </section>

        <section className="mt-10" aria-labelledby="pregunta">
          <p className="text-[14px] font-semibold text-accent-text">Pregunta 2 de 4</p>
          <h2 id="pregunta" className="mt-2 text-[18px] leading-[1.55] font-semibold">
            {lesson.question.prompt}
          </h2>
          <fieldset className="mt-4 space-y-3">
            <legend className="sr-only">Elige una respuesta</legend>
            {lesson.question.options.map((o, i) => (
              <label
                key={o}
                className={`flex min-h-14 cursor-pointer items-center rounded-2xl border-2 px-4 py-3 text-[16px] font-medium ${
                  i === 0 ? "border-ink bg-surface" : "border-line"
                }`}
              >
                <input type="radio" name="q" defaultChecked={i === 0} className="sr-only" />
                {o}
              </label>
            ))}
          </fieldset>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 bg-bg px-3 pt-2 pb-3">
        <button
          type="button"
          className="mx-auto block h-14 w-full max-w-2xl rounded-full bg-accent font-display text-[1.125rem] font-bold text-on-accent"
        >
          Comprobar
        </button>
      </div>
    </>
  );
}
