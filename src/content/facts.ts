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

const BDE = "https://clientebancario.bde.es/";
const SPOOFING = `${BDE}pcb/es/blog/suplantacion-de-sms-y-del-identificador-de-llamadas.html`;

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
    checkedAt: "17/10/2026",
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
  {
    id: "F-40",
    claim:
      "PISA 2022, competencia financiera, alumnos de 15 años: en España el 17,1 % no alcanza el nivel básico (nivel 2) y solo el 4,7 % llega al nivel más alto, frente al 10,6 % de media de la OCDE.",
    status: "oficial",
    annual: false,
    checkedAt: "19/10/2026",
    source: {
      label: "INEE · Ministerio de Educación, PISA 2022 competencia financiera",
      url: "https://www.educacionfpydeportes.gob.es/inee/gl/dam/jcr:e66d3044-4c8b-42a5-9504-0a79975aa4c3/r2-1.pdf",
    },
  },  {
    id: "F-31",
    claim:
      "El 017 de INCIBE es gratuito y confidencial (también por WhatsApp, en el 900 116 117) y te asesora, pero no sirve para denunciar. Las estafas se denuncian ante la policía: Policía Nacional, Guardia Civil o, en tu comunidad, Mossos d'Esquadra o Ertzaintza.",
    status: "oficial",
    annual: false,
    checkedAt: "26/10/2026",
    source: {
      label: "La Moncloa · El teléfono 017 de ayuda en ciberseguridad (14/07/2026)",
      url: "https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/transformacion-digital-y-funcion-publica/Paginas/2026/140726-telefono-017-ayuda-ciberseguridad.aspx",
    },
  },
  {
    id: "F-32",
    claim:
      "Las «mulas de dinero» son, en muchos casos, responsables de un delito de blanqueo de capitales, y las captan con falsas ofertas de trabajo en redes sociales.",
    status: "oficial",
    annual: false,
    checkedAt: "26/10/2026",
    source: {
      label: "Ministerio del Interior · Acción contra el blanqueo a través de mulas de dinero (05/12/2022)",
      url: "https://www.interior.gob.es/opencms/es/detalle/articulo/La-Policia-Nacional-detiene-a-52-personas-en-Espana-en-el-marco-de-una-accion-global-contra-el-blanqueo-de-capitales-a-traves-de-mulas-de-dinero/",
    },
  },
  {
    id: "F-34",
    claim: "El Fondo de Garantía de Depósitos protege el dinero depositado en un banco hasta 100.000 € por titular y entidad.",
    status: "oficial",
    annual: false,
    checkedAt: "26/10/2026",
    source: { label: "Banco de España · ¿Cuánto cubre el FGD?", url: `${BDE}pcb/es/blog/cuanto-cubre-el-fgd-.html` },
  },
  {
    id: "F-35",
    claim:
      "La CNMV publica advertencias sobre entidades que ofrecen inversiones sin estar autorizadas, y registros oficiales para comprobar si una entidad lo está.",
    status: "oficial",
    annual: false,
    checkedAt: "26/10/2026",
    source: { label: "CNMV · Advertencias", url: "https://www.cnmv.es/portal/Advertencias" },
  },
  {
    id: "F-47",
    claim:
      "Para reclamar a un banco, primero es obligatorio reclamar a su servicio de atención al cliente; si no estás de acuerdo o no contesta en plazo (15 días hábiles en servicios de pago, un mes en el resto para consumidores), puedes acudir al Banco de España.",
    status: "oficial",
    annual: false,
    checkedAt: "26/10/2026",
    source: {
      label: "Banco de España · Cómo presentar una reclamación",
      url: `${BDE}pcb/es/menu-horizontal/podemosayudarte/consultasreclama/comorealizarrecl/`,
    },
  },
  {
    id: "F-49",
    claim:
      "Tu banco nunca te pedirá tus contraseñas o claves completas, ni por correo ni por SMS. Y no necesita ningún código tuyo para cancelar una operación: si te lo piden por teléfono, sospecha.",
    status: "oficial",
    annual: false,
    checkedAt: "26/10/2026",
    source: { label: "Banco de España · Suplantación de SMS y del identificador de llamadas", url: SPOOFING },
  },
  {
    id: "F-50",
    claim: "Los SMS y las llamadas pueden mostrar un número o un nombre falsos, aunque parezcan los de tu banco («spoofing»).",
    status: "oficial",
    annual: false,
    checkedAt: "26/10/2026",
    source: { label: "Banco de España · Suplantación de SMS y del identificador de llamadas", url: SPOOFING },
  },
  {
    id: "F-51",
    claim: "Con el «Bizum inverso», al aceptar una solicitud de dinero estás enviando dinero, no recibiéndolo.",
    status: "oficial",
    annual: false,
    checkedAt: "26/10/2026",
    source: { label: "Banco de España · Estafas por Bizum", url: `${BDE}pcb/es/blog/estafas-por-bizum.html` },
  },
  {
    id: "F-52",
    claim: "Crear, dirigir o promocionar un plan de venta piramidal es desleal por engañoso en cualquier circunstancia.",
    status: "texto legal",
    annual: false,
    checkedAt: "26/10/2026",
    source: { label: "BOE · Ley 3/1991 de Competencia Desleal, art. 24", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1991-628#a24" },
    verifiedIn: "https://papelea.com/es/leyes/ley-de-competencia-desleal/capitulo-iii",
  },
];

/**
 * Pending facts cited by draft courses (src/content/drafts/). Kept out of `facts`, so nothing
 * published can cite them. Once the owner verifies one, it moves to `raw` with its real status.
 */
const PAGOS = "https://www.boe.es/buscar/act.php?id=BOE-A-2018-16036";
const CC = "https://www.boe.es/buscar/act.php?id=BOE-A-1889-4763";
const pendingFact = (id: string, claim: string, label: string, url: string, annual = false): Fact => ({
  id,
  claim,
  status: "pendiente",
  annual,
  checkedAt: null,
  source: { label, url },
});

const pending: Fact[] = [
  pendingFact("F-30", "Si pierdes la tarjeta o te la roban y hay pagos que no autorizaste, tu responsabilidad tiene un límite legal (salvo fraude o negligencia grave), siempre que avises a tu banco sin demora.", "BOE · Real Decreto-ley 19/2018 de servicios de pago, arts. 41 y 46", PAGOS),
  pendingFact("F-41", "Un menor puede tener una cuenta a su nombre, pero la abren y la gestionan sus padres o tutores; cada banco fija sus condiciones.", "Banco de España · Portal del Cliente Bancario", BDE),
  pendingFact("F-42", "Existe la cuenta de pago básica: cualquier persona que resida legalmente en la UE tiene derecho a ella y sus comisiones tienen un límite.", "Banco de España · Portal del Cliente Bancario", BDE, true),
  pendingFact("F-43", "El banco tiene que informarte de las comisiones antes de contratar y avisarte con antelación si las cambia.", "BOE · Orden EHA/2899/2011 de transparencia bancaria", "https://www.boe.es/buscar/act.php?id=BOE-A-2011-16804"),
  pendingFact("F-44", "Hay un plazo máximo para comunicar al banco una operación que no autorizaste.", "BOE · Real Decreto-ley 19/2018, art. 43", PAGOS),
  pendingFact("F-45", "En los pagos por internet el banco debe aplicar una autenticación reforzada, por ejemplo un código en el móvil además de la tarjeta.", "BOE · Real Decreto-ley 19/2018, art. 68", PAGOS),
  pendingFact("F-46", "Las transferencias inmediatas en euros deben ofrecerse en la UE y el banco debe comprobar que el nombre del beneficiario coincide con el IBAN antes de enviarla.", "EUR-Lex · Reglamento (UE) 2024/886", "https://eur-lex.europa.eu/eli/reg/2024/886/oj"),
  pendingFact("F-48", "Para contratar una tarjeta de crédito hace falta capacidad para obligarte por un préstamo; un menor no emancipado no puede hacerlo por sí solo.", "BOE · Código Civil, arts. 322 y 1263", CC),
];

export const facts: ReadonlyArray<Fact> = raw.map((f) => factSchema.parse(f));

export const pendingFacts: ReadonlyArray<Fact> = pending.map((f) => factSchema.parse(f));

export const factById = new Map(facts.map((f) => [f.id, f]));

export const isVerified = (id: string) => {
  const f = factById.get(id);
  return f !== undefined && f.status !== "pendiente";
};
