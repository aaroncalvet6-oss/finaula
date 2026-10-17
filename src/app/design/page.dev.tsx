import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Logo, LogoSymbol } from "@/components/brand/Logo";
import { Container } from "@/components/layout/Container";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ThemeScope } from "@/components/layout/ThemeScope";
import { ProportionalBar } from "@/components/ui/Bars";
import { Button, ButtonLink, TextLink } from "@/components/ui/Button";
import { Concept, KeyFact, Notice } from "@/components/ui/Callouts";
import { CourseCover } from "@/components/ui/CourseCover";
import { ProgressSegments } from "@/components/ui/Progress";
import { Breakdown, Result } from "@/components/ui/Result";
import { Eyebrow, Mono, SectionHeading } from "@/components/ui/Typography";
import { contrastRatio } from "@/design/contrast";
import { colorNames, colors, radius, space, textPairs, typeScale } from "@/design/tokens";
import { FieldDemo, OptionDemo } from "./Demos";

export const metadata: Metadata = { title: "Sistema de diseño", robots: { index: false } };

function Block({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="border-t border-line py-10">
      <h2 className="text-h2 font-semibold tracking-[-0.02em]">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function BrowserTab({ mode }: { mode: "light" | "dark" }) {
  return (
    <ThemeScope mode={mode} className="rounded-md border border-line p-3">
      <div className="flex items-center gap-2 rounded-t-md bg-sunken px-3 py-2">
        <span className="flex w-60 items-center gap-2 rounded-md bg-surface px-3 py-1.5 text-[13px]">
          <LogoSymbol size={16} />
          <span className="truncate">Finaula · Formación financiera</span>
        </span>
      </div>
    </ThemeScope>
  );
}

export default function DesignPage() {
  return (
    <>
      <SiteHeader />
      <Container className="pb-20">
        <div className="py-10">
          <Eyebrow>Solo en desarrollo</Eyebrow>
          <h1 className="mt-3 text-h1 font-semibold tracking-[-0.025em]">Sistema de diseño</h1>
          <p className="mt-3 max-w-prose text-lead text-muted">
            Tokens, logotipo y componentes de Finaula. Cada color de texto cumple WCAG AA en claro y oscuro.
          </p>
        </div>

        <Block id="logotipo" title="Logotipo">
          <div id="logo-sheet" className="grid gap-4 sm:grid-cols-2">
            {(["light", "dark"] as const).map((mode) => (
              <ThemeScope key={mode} mode={mode} className="rounded-lg border border-line p-6" >
                <p className="eyebrow text-muted">{mode === "light" ? "Claro" : "Oscuro"}</p>
                <div className="mt-6 flex flex-col gap-8">
                  <Logo size="xl" />
                  <div className="flex items-end gap-6">
                    <LogoSymbol size={96} />
                    <LogoSymbol size={48} />
                    <LogoSymbol size={32} />
                    <LogoSymbol size={16} />
                  </div>
                  <div className="flex items-center gap-6">
                    <Logo size="md" />
                    <Logo size="sm" />
                  </div>
                </div>
              </ThemeScope>
            ))}
          </div>
          <div id="favicon-sheet" className="mt-6 grid gap-4 sm:grid-cols-2">
            {(["light", "dark"] as const).map((mode) => (
              <div key={mode}>
                <BrowserTab mode={mode} />
                <ThemeScope mode={mode} className="mt-3 flex items-end gap-5 rounded-md border border-line p-4">
                  {[16, 32, 48, 180].map((s) => (
                    <figure key={s} className="flex flex-col items-center gap-2">
                      {s === 180 ? (
                        <span className="grid size-[90px] place-items-center rounded-[20px] bg-surface ring-1 ring-line">
                          <LogoSymbol size={60} />
                        </span>
                      ) : (
                        <LogoSymbol size={s} />
                      )}
                      <figcaption className="font-mono text-[12px] text-muted">{s}px</figcaption>
                    </figure>
                  ))}
                </ThemeScope>
              </div>
            ))}
          </div>
          <div id="header-sheet" className="mt-6 grid gap-4 sm:grid-cols-2">
            {(["light", "dark"] as const).map((mode) => (
              <ThemeScope key={mode} mode={mode} className="overflow-hidden rounded-lg border border-line">
                <SiteHeader currentPath="/" />
                <div className="px-4 py-6">
                  <Eyebrow>Para jóvenes de 14 a 18 años</Eyebrow>
                  <p className="mt-3 font-display text-[2rem] leading-[1.05] font-semibold tracking-[-0.03em]">
                    Entiende <span className="text-accent-text">tu dinero</span> antes de que otros decidan por ti.
                  </p>
                </div>
              </ThemeScope>
            ))}
          </div>
          <p className="mt-4 max-w-prose text-small text-muted">
            Símbolo: un escalón de dos bloques con una moneda que asoma encima. Aprender paso a paso y un dinero que
            crece. Funciona solo, sin nombre, desde 16 px.
          </p>
        </Block>

        <Block id="color" title="Color">
          {(["light", "dark"] as const).map((mode) => (
            <ThemeScope key={mode} mode={mode} className="mb-4 rounded-lg border border-line p-4">
              <p className="eyebrow text-muted">{mode === "light" ? "Claro" : "Oscuro"}</p>
              <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {colorNames.map((n) => (
                  <li key={n} className="flex items-center gap-2">
                    <span className="size-8 shrink-0 rounded-sm border border-line" style={{ background: colors[mode][n] }} />
                    <span className="text-[12px] leading-tight">
                      {n}
                      <br />
                      <Mono className="text-muted">{colors[mode][n]}</Mono>
                    </span>
                  </li>
                ))}
              </ul>
              <table className="mt-4 w-full text-[13px]">
                <caption className="sr-only">Contraste de texto</caption>
                <tbody>
                  {textPairs.map(([fg, bg]) => (
                    <tr key={`${fg}-${bg}`} className="border-t border-line">
                      <td className="py-1">
                        {fg} / {bg}
                      </td>
                      <td className="py-1 text-right">
                        <Mono>{contrastRatio(colors[mode][fg], colors[mode][bg]).toFixed(2)}:1</Mono>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ThemeScope>
          ))}
        </Block>

        <Block id="tipografia" title="Tipografía">
          <p className="text-muted">
            Bricolage Grotesque (titulares), Inter (lectura), Geist Mono (cifras).
          </p>
          <ul className="mt-6 space-y-5">
            {Object.entries(typeScale).map(([name, t]) => (
              <li key={name} className="grid gap-1 sm:grid-cols-[8rem_1fr]">
                <Mono className="text-caption text-muted">
                  {name} · {t.size}
                </Mono>
                <span
                  className={
                    ["h1", "h2", "h3", "h4", "display", "number"].includes(name)
                      ? "font-display font-semibold tracking-[-0.02em]"
                      : ""
                  }
                  style={{ fontSize: t.size, lineHeight: t.line }}
                >
                  {name === "number" ? "1.2" : "Entiende tu dinero"}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-mono text-[1.375rem]">20 € ÷ 8 €/h = 2,5 h</p>
        </Block>

        <Block id="espacio" title="Espaciado y radios">
          <ul className="space-y-2">
            {Object.entries(space).map(([k, v]) => (
              <li key={k} className="flex items-center gap-3">
                <Mono className="w-24 text-caption text-muted">
                  {k} · {v}
                </Mono>
                <span className="h-3 rounded-full bg-accent" style={{ width: v }} />
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-4">
            {Object.entries(radius).map(([k, v]) => (
              <div key={k} className="grid size-20 place-items-center border-[1.5px] border-line-strong" style={{ borderRadius: v }}>
                <Mono className="text-caption">{k}</Mono>
              </div>
            ))}
          </div>
          <p className="mt-4 text-small text-muted">
            Sin sombras en tarjetas: se separan con bordes. Solo flotan las barras fijas y los menús.
          </p>
        </Block>

        <Block id="componentes" title="Componentes">
          <div className="space-y-10">
            <div className="flex flex-wrap items-center gap-3">
              <Button>Comprobar</Button>
              <ButtonLink href="/design/" variant="secondary">
                Ver los cursos
              </ButtonLink>
              <Button variant="ghost">Pista</Button>
              <Button disabled>Desactivado</Button>
              <TextLink href="/design/">Fuentes y metodología</TextLink>
            </div>

            <div className="space-y-4">
              <Eyebrow>Ejemplo</Eyebrow>
              <SectionHeading description="Texto de apoyo para una sección.">Título de sección</SectionHeading>
              <ProgressSegments done={2} total={6} label="2 de 6 lecciones" />
            </div>

            <div className="overflow-hidden rounded-lg border border-line bg-surface">
              <div className="flex items-end justify-between bg-alt px-5 pt-4 pb-3 text-on-alt">
                <div>
                  <p className="text-caption font-semibold">Curso</p>
                  <p className="font-display text-[2.75rem] leading-none font-semibold">1</p>
                </div>
                <CourseCover motif="coins" />
              </div>
              <div className="px-5 py-4">
                <h3 className="text-h3 font-semibold">Cabecera de curso</h3>
                <p className="text-muted">Color solo en la cabecera; el texto, sobre fondo neutro.</p>
              </div>
            </div>

            <Concept term="Coste de oportunidad">
              Es lo que de verdad te cuesta algo: la mejor alternativa a la que renuncias al elegirlo.
            </Concept>
            <KeyFact>El precio de algo es lo que pagas. Su coste es todo aquello a lo que renuncias.</KeyFact>
            <Notice>Es una simulación. Ninguna rentabilidad está garantizada y las inversiones pueden bajar.</Notice>

            <ProportionalBar
              label="Plan B"
              total={25}
              items={[
                { name: "Cine con sus amigos", amount: 8 },
                { name: "Merienda", amount: 7 },
                { name: "Guardar para el viaje", amount: 10 },
              ]}
            />

            <Result label="Te cuesta" value="15 h de trabajo" note="90 € ÷ 6 €/h" />
            <Breakdown
              rows={[
                { label: "Ingresos", value: "60 €" },
                { label: "Ahorro (20 %)", value: "12 €" },
                { label: "Para gastar", value: "48 €", strong: true },
              ]}
            />
            <FieldDemo />
            <OptionDemo />
          </div>
        </Block>
      </Container>
    </>
  );
}
