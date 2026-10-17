import { factSchema, type Fact } from "./schema";

/**
 * Mirror of docs/fuentes.md (tests/content.test.ts checks they agree).
 * `source` is the official page shown to learners; `verifiedIn` records the
 * literal reproduction used by the owner when it was not the official page.
 */

const ET = "https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430";
const LGSS = "https://www.boe.es/buscar/act.php?id=BOE-A-2015-11724";
const AEAT_MANUAL = "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos";
const CUOTA_DIFERENCIAL = `${AEAT_MANUAL}/manuales-practicos/irpf-2025/c18-cuota-liquida-resultante-autoliquidacion/cuota-diferencial.html`;
const OBLIGADOS = `${AEAT_MANUAL}/manuales-practicos/irpf-2025/c01-campana-declaracion-renta/quienes-estan-obligados-presentar-declaracion-irpf/delimitacion-obligacion-declarar-irpf.html`;
const NOTA_RENTA =
  "https://sede.agenciatributaria.gob.es/static_files/Sede/Actualidad/Notas_prensa/2026/NP_Inicio_Campana_renta_2025.pdf";

const raw: Fact[] = [
  {
    id: "F-01",
    claim: "La edad mínima general para trabajar es 16 años.",
    status: "texto legal",
    annual: false,
    checkedAt: "11/10/2026",
    source: { label: "BOE · Estatuto de los Trabajadores, art. 6", url: ET },
    verifiedIn: "https://loentiendo.com/articulo-6-del-estatuto-de-los-trabajadores/",
  },
  {
    id: "F-02",
    claim:
      "Entre 16 y 18 años, si no estás emancipado, necesitas el consentimiento de tus padres o tutores para firmar un contrato de trabajo.",
    status: "texto legal",
    annual: false,
    checkedAt: "11/10/2026",
    source: { label: "BOE · Estatuto de los Trabajadores, art. 7", url: ET },
    verifiedIn: "https://loentiendo.com/articulo-7-del-estatuto-de-los-trabajadores/",
  },
  {
    id: "F-03",
    claim:
      "Los menores de 16 solo pueden intervenir en espectáculos públicos, en casos excepcionales y con autorización por escrito de la autoridad laboral.",
    status: "texto legal",
    annual: false,
    checkedAt: "17/10/2026",
    source: { label: "BOE · Estatuto de los Trabajadores, art. 6.4", url: ET },
    verifiedIn: "https://loentiendo.com/articulo-6-del-estatuto-de-los-trabajadores/",
  },
  {
    id: "F-04",
    claim: "Los menores de 18 no pueden hacer trabajo nocturno, horas extra ni trabajos peligrosos.",
    status: "texto legal",
    annual: false,
    checkedAt: "11/10/2026",
    source: { label: "BOE · Estatuto de los Trabajadores, art. 6", url: ET },
    verifiedIn: "https://loentiendo.com/articulo-6-del-estatuto-de-los-trabajadores/",
  },
  {
    id: "F-05",
    claim:
      "Los menores de 18 no pueden hacer más de 8 horas diarias de trabajo efectivo, incluida la formación; si la jornada continuada pasa de 4 horas y media, tienen derecho a un descanso mínimo de 30 minutos.",
    status: "texto legal",
    annual: false,
    checkedAt: "17/10/2026",
    source: { label: "BOE · Estatuto de los Trabajadores, art. 34", url: ET },
    verifiedIn: "https://iberley.es/legislacion/articulo-34-estatuto-trabajadores",
  },
  {
    id: "F-06",
    claim: "Un contrato de trabajo puede ser indefinido (sin fecha de fin) o temporal (con fecha de fin).",
    status: "oficial",
    annual: false,
    checkedAt: null,
    source: { label: "BOE · Estatuto de los Trabajadores", url: ET },
  },
  {
    id: "F-07",
    claim:
      "Puede pactarse un periodo de prueba, con una duración máxima legal, durante el cual cualquiera de las dos partes puede terminar la relación.",
    status: "texto legal",
    annual: false,
    checkedAt: "12/10/2026",
    source: { label: "BOE · Estatuto de los Trabajadores, art. 14", url: ET },
    verifiedIn: "https://loentiendo.com/articulo-14-del-estatuto-de-los-trabajadores/",
  },
  {
    id: "F-08",
    claim: "La solicitud de alta en la Seguridad Social tiene que presentarse antes de que empieces a trabajar.",
    status: "oficial",
    annual: false,
    checkedAt: "17/10/2026",
    source: { label: "Tesorería General de la Seguridad Social, folleto oficial", url: "https://www.seg-social.es/descarga/es/387" },
  },
  {
    id: "F-09",
    claim:
      "Hay dos pagas extra al año, una en Navidad y otra cuando fije el convenio; solo se reparten en las 12 mensualidades si lo acuerda el convenio.",
    status: "texto legal",
    annual: false,
    checkedAt: "12/10/2026",
    source: { label: "BOE · Estatuto de los Trabajadores, art. 31", url: ET },
    verifiedIn: "https://loentiendo.com/el-articulo-31-del-estatuto-pagas-extraordinarias/",
  },
  {
    id: "F-10",
    claim: "La nómina tiene un modelo oficial con devengos, deducciones y «líquido total a percibir».",
    status: "texto legal",
    annual: false,
    checkedAt: "12/10/2026",
    source: { label: "BOE · Orden ESS/2098/2014", url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2014-11637" },
    verifiedIn: "https://legado.elnotario.es/images/pdf/LEST-N58-14-OrdenESS-20982014.pdf",
  },
  {
    id: "F-11",
    claim:
      "La acción protectora de la Seguridad Social incluye, entre otras, asistencia sanitaria, incapacidad temporal, nacimiento y cuidado de menor, desempleo y jubilación.",
    status: "texto legal",
    annual: false,
    checkedAt: "17/10/2026",
    source: { label: "BOE · Ley General de la Seguridad Social, art. 42", url: LGSS },
    verifiedIn: "https://www.uma.es/media/tinyimages/file/RDL_8_2015_LGSS.pdf",
  },
  {
    id: "F-12",
    claim: "La retención de IRPF de la nómina es un pago a cuenta (un adelanto) del impuesto anual, que se descuenta en la declaración.",
    status: "oficial",
    annual: false,
    checkedAt: "12/10/2026",
    source: { label: "Agencia Tributaria · Manual práctico de Renta, cuota diferencial", url: CUOTA_DIFERENCIAL },
  },
  {
    id: "F-13",
    claim: "Además de lo que te descuentan a ti, la empresa también cotiza por ti, y su parte es mayor que la tuya.",
    status: "mutua colaboradora",
    annual: true,
    checkedAt: "12/10/2026",
    source: { label: "Seguridad Social · bases y tipos de cotización", url: "https://www.seg-social.es/" },
    verifiedIn: "https://www.asepeyo.es/wp-content/uploads/Bases-tipos-cotizacion-2026-ES.pdf",
  },
  {
    id: "F-14",
    claim: "En contratos de duración inferior a un año, la retención de IRPF no puede ser menor del 2 %.",
    status: "oficial",
    annual: false,
    checkedAt: "12/10/2026",
    source: {
      label: "BOE · Real Decreto 31/2023 (art. 86.2 del Reglamento del IRPF)",
      url: "https://boe.es/boe/dias/2023/01/25/pdfs/BOE-A-2023-2023.pdf",
    },
  },
  {
    id: "F-15",
    claim:
      "El informe de vida laboral lo emite gratis la Tesorería General de la Seguridad Social, recoge los periodos de alta y se obtiene por internet o en la app Import@ss.",
    status: "oficial",
    annual: false,
    checkedAt: "17/10/2026",
    source: {
      label: "La Moncloa · Cómo solicitar el informe de vida laboral",
      url: "https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/inclusion/Paginas/2024/solicitar-informe-vida-laboral-online.aspx",
    },
  },
  {
    id: "F-16",
    claim:
      "El IRPF es progresivo y va por tramos (escala estatal más autonómica): cada tipo se aplica solo a la parte de la base que cae en su tramo.",
    status: "oficial",
    annual: true,
    checkedAt: "12/10/2026",
    source: {
      label: "Agencia Tributaria · Manual práctico de Renta, gravamen estatal",
      url: `${AEAT_MANUAL}/manuales-practicos/irpf-2025/c15-calculo-impuesto-determinacion-cuotas-integras/gravamen-base-liquidable-general/gravamen-estatal.html`,
    },
  },
  {
    id: "F-17",
    claim:
      "En la declaración se restan las retenciones ya pagadas; la diferencia sale a pagar o a devolver (cuota diferencial).",
    status: "oficial",
    annual: false,
    checkedAt: "12/10/2026",
    source: { label: "Agencia Tributaria · Manual práctico de Renta, cuota diferencial", url: CUOTA_DIFERENCIAL },
  },
  {
    id: "F-18",
    claim: "La declaración se presenta una vez al año, en una campaña sobre los ingresos del año anterior, con fechas que cambian cada año.",
    status: "oficial",
    annual: true,
    checkedAt: "11/10/2026",
    source: { label: "Agencia Tributaria · Nota de inicio de la campaña de Renta", url: NOTA_RENTA },
  },
  {
    id: "F-19",
    claim: "Estar obligado a declarar depende de cuánto ganes y de cuántos pagadores tengas.",
    status: "oficial",
    annual: true,
    checkedAt: "17/10/2026",
    source: { label: "Agencia Tributaria · Obligación de declarar", url: OBLIGADOS },
  },
  {
    id: "F-20",
    claim: "Aunque no estés obligado, puedes presentar la declaración para pedir que te devuelvan lo retenido.",
    status: "oficial",
    annual: false,
    checkedAt: "17/10/2026",
    source: { label: "Agencia Tributaria · Obligación de declarar", url: OBLIGADOS },
  },
  {
    id: "F-21",
    claim:
      "Con ingresos de trabajo bajos, el impuesto suele quedar en 0 € gracias a la reducción por rendimientos del trabajo y al mínimo del contribuyente, y se devuelve toda la retención.",
    status: "oficial",
    annual: true,
    checkedAt: "11/10/2026",
    source: {
      label: "Agencia Tributaria · Reducción por obtención de rendimientos del trabajo",
      url: `${AEAT_MANUAL}/manuales-ayuda-presentacion/irpf-2025/7-cumplimentacion-irpf/7_1-rendimientos-trabajo-personal/7_1_6-reduccion-obtencion-rendimientos-trabajo.html`,
    },
  },
  {
    id: "F-22",
    claim:
      "Tus padres pueden aplicar un mínimo por descendientes por ti, que pueden perder si ganas por encima de cierto límite o presentas tu propia declaración por encima de otro.",
    status: "oficial",
    annual: true,
    checkedAt: "11/10/2026",
    source: {
      label: "Agencia Tributaria · Mínimo por descendientes",
      url: `${AEAT_MANUAL}/manuales-practicos/irpf-2025/c14-adecuacion-impuesto-circunstancias-personales/minimo-descendientes/concepto-requisitos-descendientes.html`,
    },
  },
  {
    id: "F-23",
    claim:
      "La declaración se hace en Renta Web; para entrar puedes identificarte con Cl@ve, con un número de referencia o con certificado digital.",
    status: "oficial",
    annual: false,
    checkedAt: "11/10/2026",
    source: { label: "Agencia Tributaria · Nota de inicio de la campaña de Renta", url: NOTA_RENTA },
  },
];

export const facts: ReadonlyArray<Fact> = raw.map((f) => factSchema.parse(f));

export const factById = new Map(facts.map((f) => [f.id, f]));

export const isVerified = (id: string) => {
  const f = factById.get(id);
  return f !== undefined && f.status !== "pendiente";
};
