import { factById } from "./facts";

/** Figures shown on the home page. Each one cites a verified fact (tested). */
export const pisa = {
  fact: "F-40",
  year: 2022,
  stats: [
    { value: "17,1 %", text: "de los alumnos de 15 años en España no alcanza el nivel básico de competencia financiera." },
    { value: "4,7 %", text: "llega al nivel más alto. La media de los países de la OCDE es del 10,6 %." },
  ],
} as const;

export const homeFactIds: ReadonlyArray<string> = [pisa.fact];

export const pisaSource = () => factById.get(pisa.fact)!.source;

/** «Por qué existe Finaula»: first-person story, signed without a name. */
export const founderStory = {
  title: "Por qué existe Finaula",
  paragraphs: [
    "Tengo 15 años y estudio en un instituto en España.",
    "En clase me enseñan muchas cosas: ecuaciones, historia, literatura, biología. Está bien. Pero hay preguntas que nadie me ha contestado.",
    "¿Qué es una nómina? ¿Por qué lo que cobras no es lo que pone en el contrato? ¿Cómo se ahorra para algo de verdad? ¿Cómo sabes que un mensaje es una estafa antes de pulsar el enlace?",
    "Son cosas que todos vamos a necesitar, algunos muy pronto. Y casi siempre se aprenden tarde, solos o equivocándose.",
    "No quería esperar a equivocarme. Así que decidí crear la formación que me habría gustado tener: cursos cortos, claros y sin letra pequeña. Con cada dato comprobado en fuentes oficiales. Sin venderte nada.",
    "Eso es Finaula. No es un banco ni una app de inversiones. Es lo que me habría gustado que me explicaran en clase.",
  ],
  signature: "El fundador",
} as const;
