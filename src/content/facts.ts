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
const MEMORIA_2018 = "https://clientebancario.bde.es/f/webcb/RCL/PodemosAyudarte/InformesActividad/Memoria2018usonoautorizadotarjeta.pdf";
const CONSUMO_DOCS = "https://portal-cec.consumo.gob.es/sites/default/files/documentos";
const NOTA_REBAJAS = `${CONSUMO_DOCS}/NI_Rebajas_2025.pdf`;
const FOLLETO_DESISTIMIENTO = `${CONSUMO_DOCS}/FOLLETO_DERECHO_DESISTIMIENTO_JULIO_2026.pdf`;
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
    id: "F-30",
    claim:
      "Si pierdes la tarjeta o te la roban, por las operaciones hechas antes de avisar al banco respondes como máximo de 50 €, salvo fraude o negligencia grave. Hay que avisar al banco inmediatamente.",
    status: "oficial",
    annual: false,
    checkedAt: "26/10/2026",
    source: { label: "Banco de España · Uso fraudulento de tarjetas", url: `${BDE}pcb/es/menu-horizontal/productosservici/serviciospago/tarjetas/guia-textual/uso-fraudulento/` },
  },
  {
    id: "F-41",
    claim:
      "Un menor puede tener una cuenta a su nombre y el dinero es suyo. Sus representantes legales, normalmente los padres, deben estar presentes al abrirla y pueden operar en ella. Algunas entidades permiten usar tarjeta a partir de cierta edad; las condiciones dependen de cada banco.",
    status: "oficial",
    annual: false,
    checkedAt: "26/10/2026",
    source: { label: "Banco de España · Cuentas antes de los 18", url: `${BDE}pcb/es/blog/cuentas-antes-de-los-18.html` },
  },
  {
    id: "F-42",
    claim: "La cuenta de pago básica es para cualquier persona que resida legalmente en la UE y tiene una comisión máxima limitada.",
    status: "oficial",
    annual: true,
    checkedAt: "26/10/2026",
    source: {
      label: "Banco de España · Cuenta de pago básica",
      url: "https://www.bde.es/f/webbe/INF/MenuHorizontal/AreasActuacion/conducta/ficheros/Sesion2Tripticocuentadepagobasica.pdf",
    },
  },
  {
    id: "F-43",
    claim: "Si el banco quiere cambiar las condiciones en tu contra, por ejemplo subir una comisión, tiene que avisarte con al menos dos meses de antelación.",
    status: "oficial",
    annual: false,
    checkedAt: "26/10/2026",
    source: {
      label: "Banco de España · ¿Pueden las entidades cambiar las condiciones de tu cuenta?",
      url: `${BDE}pcb/es/blog/pueden-las-entidades-financieras-cambiar-las-condiciones-de-tu-cuenta.html`,
    },
  },
  {
    id: "F-44",
    claim: "Tienes como máximo 13 meses desde el cargo para comunicar al banco una operación que no autorizaste.",
    status: "oficial",
    annual: false,
    checkedAt: "26/10/2026",
    source: { label: "Banco de España · Memoria de Reclamaciones 2018, uso no autorizado de tarjetas", url: MEMORIA_2018 },
  },
  {
    id: "F-45",
    claim:
      "En los pagos por internet, la autenticación reforzada usa al menos dos de estos tres elementos: algo que sabes (PIN o contraseña), algo que tienes (tu móvil) y algo que eres (huella o cara).",
    status: "oficial",
    annual: false,
    checkedAt: "26/10/2026",
    source: { label: "AEPD · Identificación en los servicios de pago online (29/12/2020)", url: "https://www.aepd.es/prensa-y-comunicacion/blog/identificacion-servicios-pago-online" },
  },
  {
    id: "F-46",
    claim:
      "Los bancos que ofrecen transferencias en euros deben ofrecer también las inmediatas, sin cobrar más que por las ordinarias, y verificar gratis que el nombre del beneficiario coincide con el IBAN.",
    status: "oficial",
    annual: false,
    checkedAt: "26/10/2026",
    source: {
      label: "Ministerio de Consumo · Nuevas normas para transferencias inmediatas (05/09/2024)",
      url: "https://portal-cec.consumo.gob.es/es/comunicacion/noticias/2024/nuevas-normas-para-hacer-transferencias-inmediatas-sin-cargos-extras",
    },
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
  {
    id: "F-59",
    claim:
      "Puedes pedir la hoja de reclamaciones en el establecimiento y reclamar en la oficina de consumo de tu ayuntamiento o de tu comunidad, que intenta mediar con la empresa. Si la empresa está adherida, puedes ir al arbitraje de consumo, que es gratuito pero voluntario para la empresa. El procedimiento puede variar según tu comunidad.",
    status: "oficial",
    annual: false,
    checkedAt: "26/10/2026",
    source: { label: "Comunidad de Madrid · Reclamaciones de consumo", url: "https://www.comunidad.madrid/node/73694" },
  },
  {
    id: "F-60",
    claim: "La TAE se calcula con el tipo de interés más las comisiones y otros gastos, y sirve para comparar ofertas.",
    status: "oficial",
    annual: false,
    checkedAt: "26/10/2026",
    source: {
      label: "Banco de España · Cálculo de la TAE de un préstamo personal",
      url: `${BDE}pcb/es/menu-horizontal/podemosayudarte/simuladores/calculo_tae_prestamo_personal.html`,
    },
  },
  {
    id: "F-61",
    claim:
      "Con una tarjeta revolving, al menos cada trimestre el banco debe indicarte la fecha estimada en la que terminarás de pagar con tu cuota actual y cuánto acabarás pagando en total.",
    status: "oficial",
    annual: false,
    checkedAt: "26/10/2026",
    source: {
      label: "Banco de España · Qué información puedes solicitar si tienes una tarjeta revolving (02/06/2022)",
      url: `${BDE}pcb/es/blog/que-informacion-puedes-solicitar-si-dispones-de-una-tarjeta-revolving-.html`,
    },
  },
  {
    id: "F-62",
    claim:
      "Tienes 14 días naturales para desistir de un préstamo al consumo, sin dar explicaciones y sin penalización; devuelves el capital y los intereses de los días que lo tuviste.",
    status: "oficial",
    annual: false,
    checkedAt: "26/10/2026",
    source: {
      label: "Banco de España · El derecho de desistimiento de los préstamos al consumo (15/04/2021)",
      url: `${BDE}pcb/es/blog/el-derecho-de-desistimiento-de-los-prestamos-al-consumo.html`,
    },
  },
  {
    id: "F-64",
    claim:
      "Para incluirte en un fichero de morosos, la deuda debe ser cierta, vencida, exigible e impagada y de más de 50 €; antes deben informarte y requerirte el pago, y puedes estar en él como máximo 5 años.",
    status: "oficial",
    annual: false,
    checkedAt: "26/10/2026",
    source: {
      label: "AEPD · Requisitos para incluir a una persona en un fichero de solvencia",
      url: "https://www.aepd.es/preguntas-frecuentes/7-solvencia-patrimonial/FAQ-0701-que-requisitos-son-necesarios-para-incluir-a-una-persona-fisica-en-un-tratamiento-de-solvencia-patrimonial-y-credito",
    },
  },
  {
    id: "F-53",
    claim:
      "En las rebajas, el precio rebajado debe mostrarse junto al anterior, que es el más bajo de los últimos 30 días. Los productos rebajados no pueden estar deteriorados y mantienen la misma garantía.",
    status: "oficial",
    annual: false,
    checkedAt: "26/10/2026",
    source: { label: "Ministerio de Consumo · Nota informativa sobre rebajas (03/01/2025)", url: NOTA_REBAJAS },
  },
  {
    id: "F-28",
    claim: "En las compras a distancia tienes 14 días naturales para desistir sin dar explicaciones.",
    status: "oficial",
    annual: false,
    checkedAt: "26/10/2026",
    source: { label: "Ministerio de Consumo · Folleto sobre el derecho de desistimiento (julio de 2026)", url: FOLLETO_DESISTIMIENTO },
  },
  {
    id: "F-54",
    claim:
      "Hay excepciones al desistimiento, como los productos personalizados o el contenido digital sin soporte material cuando ya ha empezado a ejecutarse con tu consentimiento previo.",
    status: "oficial",
    annual: false,
    checkedAt: "26/10/2026",
    source: { label: "Ministerio de Consumo · Folleto sobre el derecho de desistimiento (julio de 2026)", url: FOLLETO_DESISTIMIENTO },
  },
  {
    id: "F-29",
    claim:
      "Los productos nuevos tienen una garantía legal de 3 años (desde enero de 2022). Si salen defectuosos eliges reparación o sustitución; si no es posible o sigue fallando, rebaja del precio o devolución del dinero.",
    status: "oficial",
    annual: false,
    checkedAt: "26/10/2026",
    source: { label: "Comunidad de Madrid · Garantía y protección en tus compras", url: "https://www.comunidad.madrid/servicios/consumo/garantia-proteccion-compras" },
  },
  {
    id: "F-55",
    claim:
      "Las tiendas físicas no están obligadas a aceptar devoluciones de productos sin defecto; si las aceptan, deben informar de sus condiciones.",
    status: "oficial",
    annual: false,
    checkedAt: "26/10/2026",
    source: { label: "Ministerio de Consumo · Folleto sobre el derecho de desistimiento (julio de 2026)", url: FOLLETO_DESISTIMIENTO },
  },
  {
    id: "F-56",
    claim: "Puedes darte de baja de un servicio de la misma forma en que lo contrataste, sin penalizaciones ni trabas desproporcionadas.",
    status: "oficial",
    annual: false,
    checkedAt: "26/10/2026",
    source: {
      label: "Ministerio de Consumo · Análisis del texto refundido de la ley de consumidores (art. 62.3)",
      url: "https://www.dsca.gob.es/sites/default/files/consumo_masinfo/analisisTextoRefundido.pdf",
    },
  },
  {
    id: "F-58",
    claim:
      "Si un influencer te enseña algo porque una marca se lo pide, tiene que indicar dentro del propio vídeo que es publicidad, con palabras como «publicidad» o «publi». Un hashtag o una etiqueta fuera del vídeo no basta.",
    status: "oficial",
    annual: false,
    checkedAt: "26/10/2026",
    source: { label: "CNMC · Requerimientos a influencers (03/06/2026)", url: "https://www.cnmc.es/prensa/requerimientos-influencer-20260603" },
  },
];

/**
 * Pending facts cited by draft courses (src/content/drafts/). Kept out of `facts`, so nothing
 * published can cite them. Once the owner verifies one, it moves to `raw` with its real status.
 */
const CREDITO_CONSUMO = "https://www.boe.es/buscar/act.php?id=BOE-A-2011-11032";
const pendingFact = (id: string, claim: string, label: string, url: string): Fact => ({
  id,
  claim,
  status: "pendiente",
  annual: false,
  checkedAt: null,
  source: { label, url },
});

const pending: Fact[] = [
  pendingFact("F-57", "«Compra ahora, paga después» y pagar a plazos son formas de crédito.", "BOE · Ley 16/2011 de contratos de crédito al consumo", CREDITO_CONSUMO),
  pendingFact("F-65", "Antes de invertir en un fondo tienen que darte un documento con sus datos fundamentales, que incluye los costes y el nivel de riesgo.", "CNMV · Guías del inversor", "https://www.cnmv.es/"),
  pendingFact("F-66", "Antes de venderte algunos productos de inversión, la entidad debe evaluar si son adecuados para ti (test de conveniencia o de idoneidad).", "CNMV · Guías del inversor", "https://www.cnmv.es/"),
  pendingFact("F-67", "Los proveedores de servicios de criptoactivos en la UE necesitan autorización según el Reglamento MiCA.", "EUR-Lex · Reglamento (UE) 2023/1114 (MiCA)", "https://eur-lex.europa.eu/eli/reg/2023/1114/oj"),
  pendingFact("F-68", "La publicidad de criptoactivos en España debe incluir advertencias sobre sus riesgos.", "CNMV · Circular 1/2022 sobre publicidad de criptoactivos", "https://www.cnmv.es/"),
  pendingFact("F-33", "En España, la inflación se mide con el IPC, que elabora el INE.", "INE · Índice de Precios de Consumo", "https://www.ine.es/"),
  pendingFact("F-69", "El Banco Central Europeo decide los tipos de interés oficiales de la zona del euro y su objetivo es una inflación del 2 % a medio plazo.", "Banco Central Europeo", "https://www.ecb.europa.eu/"),
  pendingFact("F-70", "El paro se mide con la Encuesta de Población Activa (EPA) del INE; una persona parada es la que no tiene trabajo, lo busca y está disponible para trabajar.", "INE · Encuesta de Población Activa", "https://www.ine.es/"),
  pendingFact("F-71", "El PIB mide el valor de todo lo que produce un país en un periodo, y en España lo calcula el INE.", "INE · Contabilidad Nacional", "https://www.ine.es/"),
];

export const facts: ReadonlyArray<Fact> = raw.map((f) => factSchema.parse(f));

export const pendingFacts: ReadonlyArray<Fact> = pending.map((f) => factSchema.parse(f));

export const factById = new Map(facts.map((f) => [f.id, f]));

export const isVerified = (id: string) => {
  const f = factById.get(id);
  return f !== undefined && f.status !== "pendiente";
};
