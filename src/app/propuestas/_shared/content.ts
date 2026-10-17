/** Shared copy for the phase-2 design proposals (taken from docs/temario.md). */

export const home = {
  eyebrow: "Formación financiera para jóvenes de 14 a 18 años",
  title: "Entiende tu dinero antes de que otros decidan por ti.",
  lead: "Cursos cortos con ejemplos reales, herramientas para practicar con tus cifras y un certificado al terminar. Sin registro, sin anuncios y sin venderte nada.",
  primary: "Empezar el primer curso",
  secondary: "Ver los cursos",
  resume: {
    label: "Continúa donde lo dejaste",
    course: "Fundamentos del dinero",
    lesson: "Tu presupuesto: ingresos, gastos y ahorro",
    number: "1.3",
    minutes: 8,
    done: 2,
    total: 6,
  },
  courses: [
    {
      number: 1,
      title: "Fundamentos del dinero",
      description:
        "Para qué sirve el dinero, cómo decidir en qué gastarlo, hacer un presupuesto y ahorrar con una meta.",
      lessons: 6,
      minutes: 43,
      done: 2,
    },
    {
      number: 2,
      title: "Tu primer sueldo",
      description:
        "Contrato, sueldo bruto y neto, cómo leer una nómina, impuestos y la declaración de la Renta.",
      lessons: 5,
      minutes: 36,
      done: 0,
    },
  ],
  tools: [
    {
      title: "Horas de trabajo",
      description: "Cuántas horas de trabajo te cuesta lo que quieres comprar.",
      lesson: "Lección 1.2",
    },
    {
      title: "Presupuesto",
      description: "Reparte tus ingresos y ajusta el ahorro del 0 % al 50 %.",
      lesson: "Lección 1.3",
    },
    {
      title: "Meta de ahorro",
      description: "Cuánto apartar cada semana para llegar a tiempo.",
      lesson: "Lección 1.4",
    },
    {
      title: "Interés compuesto",
      description: "Cómo crece el dinero con el tiempo. Una simulación, no una promesa.",
      lesson: "Lección 1.6",
    },
  ],
  steps: [
    {
      title: "Aprende en 5 a 8 minutos",
      text: "Cada lección explica una idea con un ejemplo de tu vida y cifras claras.",
    },
    {
      title: "Practica con tus cifras",
      text: "Preguntas con explicación y herramientas para probar con tu paga o tu sueldo.",
    },
    {
      title: "Demuestra lo que sabes",
      text: "Aprueba la evaluación final y descarga tu certificado de finalización.",
    },
  ],
  trust: {
    title: "Por qué puedes fiarte",
    points: [
      "Cada dato legal o fiscal está comprobado en fuentes oficiales, como el BOE, la Agencia Tributaria o la Seguridad Social, con su enlace y la fecha de consulta.",
      "Es formación, no asesoramiento. Nunca te recomendamos productos, bancos ni inversiones.",
      "Tu progreso se guarda solo en tu navegador. No hay cuentas ni recogemos datos.",
    ],
    link: "Fuentes y metodología",
  },
  families: {
    title: "Para familias y centros educativos",
    text: "Lecciones cortas que caben en una tutoría, con un temario publicado y preguntas que comprueban si se ha entendido. Sin registro y sin datos personales.",
    link: "Ver el temario completo",
  },
  upcoming: ["Tu primera cuenta y tu primera tarjeta", "Comprar con cabeza", "Qué es invertir"],
} as const;

export const lesson = {
  course: "Fundamentos del dinero",
  number: "1.2",
  index: 2,
  total: 6,
  minutes: 7,
  title: "Necesidades, deseos y coste de oportunidad",
  objective:
    "Distinguir necesidades de deseos y valorar cada compra por lo que dejas de hacer con ese dinero.",
  intro:
    "Cada vez que gastas, eliges. Y elegir una cosa siempre significa renunciar a otra. Esta lección va de ver esa renuncia antes de pagar.",
  concept: {
    term: "Coste de oportunidad",
    definition:
      "Es lo que de verdad te cuesta algo: la mejor alternativa a la que renuncias al elegirlo.",
  },
  example: {
    title: "Los 25 € de Hugo",
    setup: "Hugo cumple 15 años y le regalan 25 €. Duda entre dos planes.",
    options: [
      { label: "Plan A", items: [{ name: "Pase de temporada de su juego", amount: 20 }] },
      {
        label: "Plan B",
        items: [
          { name: "Cine con sus amigos", amount: 8 },
          { name: "Merienda", amount: 7 },
          { name: "Guardar para el viaje de fin de curso", amount: 10 },
        ],
      },
    ],
    takeaway:
      "Si elige el pase, renuncia a la tarde con sus amigos y a los 10 € del viaje. Ninguna opción es la buena: lo importante es ver las dos antes de decidir.",
    hours: { price: 20, rate: 8, result: "2,5" },
    hoursNote: "Si Hugo cobra 8 € por hora de clases de repaso (cifra inventada), el pase le cuesta 2,5 horas.",
  },
  keyFact: "El precio de algo es lo que pagas. Su coste es todo aquello a lo que renuncias.",
  question: {
    prompt:
      "Tienes 15 €. Dudas entre una camiseta y guardarlos para una excursión dentro de un mes. Compras la camiseta. ¿Cuál es tu coste de oportunidad?",
    options: [
      "No poder usar esos 15 € para la excursión",
      "Los 15 € que costó la camiseta",
      "Ninguno, porque ya tienes la camiseta",
    ],
  },
  steps: ["Idea", "Ejemplo", "Dato clave", "Practica", "Preguntas", "Reto"],
  currentStep: 1,
} as const;

export const euro = (value: number) =>
  new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
