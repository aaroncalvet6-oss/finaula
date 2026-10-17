import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { TextLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Typography";
import { site } from "@/config/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacidad y uso educativo",
  description: "Finaula no tiene cuentas, ni analítica, ni cookies de terceros. Es formación, no asesoramiento financiero.",
  path: "/legal/",
});

function Block({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className="border-t border-line pt-6">
      <h2 id={id} className="text-h3 font-semibold">
        {title}
      </h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

export default function LegalPage() {
  return (
    <main>
      <Container width="reading" className="pt-10">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-3 text-h1 font-semibold tracking-[-0.025em]">Privacidad y uso educativo</h1>
        <p className="mt-3 text-lead text-muted">Lo importante, en corto: no recogemos tus datos y no te recomendamos productos.</p>

        <div className="mt-10 space-y-10">
          <Block id="privacidad" title="Privacidad">
            <p>Finaula no tiene cuentas de usuario, no usa analítica, no usa cookies de terceros y no recoge datos personales.</p>
            <p>
              Tu progreso, tus resultados y el nombre que escribas para el certificado se guardan solo en tu navegador, en el
              almacenamiento local, con las claves <code className="font-mono">finaula:progress</code> y{" "}
              <code className="font-mono">finaula:profile</code>. Nunca se envían a ningún servidor. Puedes borrarlos desde tu{" "}
              <TextLink href="/perfil/" className="min-h-0">
                perfil
              </TextLink>{" "}
              o desde los ajustes de tu navegador.
            </p>
            <p>
              Lo que escribes en las herramientas se calcula en tu dispositivo y no se guarda. Las fuentes tipográficas se sirven
              desde la propia web, sin llamadas a servicios externos.
            </p>
            <p>
              La web se aloja en GitHub Pages. Como cualquier servidor, el servicio de alojamiento puede tratar datos técnicos de la
              conexión, como la dirección IP, para servir la página y protegerla. Finaula no tiene acceso a esos datos ni los usa.
            </p>
          </Block>

          <Block id="uso" title="Uso educativo">
            <p>
              Finaula es un proyecto de formación financiera para jóvenes de 14 a 18 años. Es educación, no asesoramiento
              financiero: no recomendamos productos, entidades ni inversiones concretas.
            </p>
            <p>
              Las cifras de los ejemplos y de las herramientas son orientativas o inventadas para practicar. Ninguna rentabilidad
              está garantizada y las inversiones pueden bajar. Antes de una decisión importante, consulta la fuente oficial y habla
              con un adulto de confianza.
            </p>
            <p>
              Los datos legales y fiscales se comprueban en fuentes oficiales con fecha de consulta. Las normas cambian: si algo no
              coincide, vale lo que diga la fuente oficial enlazada.{" "}
              <TextLink href="/fuentes/" className="min-h-0">
                Fuentes y metodología
              </TextLink>
            </p>
          </Block>

          <Block id="certificados" title="Certificados">
            <p>
              Los certificados acreditan que has terminado un curso de Finaula y aprobado su evaluación final. No tienen validez
              académica oficial.
            </p>
          </Block>

          {site.contactEmail ? (
            <Block id="contacto" title="Contacto">
              <p>
                Para dudas o para avisar de un error:{" "}
                <a href={`mailto:${site.contactEmail}`} className="font-semibold text-accent-text underline underline-offset-4">
                  {site.contactEmail}
                </a>
              </p>
            </Block>
          ) : null}
        </div>
      </Container>
    </main>
  );
}
