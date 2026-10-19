import type { Course } from "../schema";

export const tuPrimerSueldo: Course = {
  slug: "tu-primer-sueldo",
  number: 2,
  title: "Tu primer sueldo",
  area: "Trabajo e ingresos",
  summary:
    "Qué necesitas para trabajar, la diferencia entre sueldo bruto y neto, cómo leer una nómina, adónde van tus descuentos y por qué te pueden devolver dinero en la Renta.",
  tagline: "Aprenderás qué necesitas para trabajar, a leer una nómina y por qué te pueden devolver dinero en la Renta.",
  audience: "Para personas de 15 a 18 años que piensan en su primer trabajo, por ejemplo uno de verano.",
  objectives: [
    "Saber desde qué edad puedes trabajar y qué te protege si eres menor.",
    "Entender la diferencia entre sueldo bruto y sueldo neto.",
    "Leer una nómina y comprobar que las cuentas cuadran.",
    "Saber para qué sirven las cotizaciones y cómo funcionan los tramos del IRPF.",
    "Entender la declaración de la Renta y por qué te pueden devolver dinero.",
  ],
  motif: "bars",
  tone: "soft",
  lessons: [
    {
      slug: "tu-primer-trabajo",
      number: "2.1",
      title: "Tu primer trabajo: edad, permisos y contrato",
      minutes: 7,
      status: "published",
      objective:
        "Saber desde qué edad puedes trabajar, qué permisos necesitas, qué te protege si eres menor y qué tiene que dejar claro tu contrato.",
      facts: ["F-01", "F-02", "F-03", "F-04", "F-05", "F-06", "F-07", "F-08"],
      explanation: [
        {
          type: "p",
          text: "Un trabajo de verano puede ser tu primer sueldo. Antes de aceptar, conviene saber qué dice la ley cuando eres menor de edad.",
        },
        { type: "h", text: "Desde qué edad" },
        {
          type: "p",
          text: "En España, la edad general para trabajar es 16 años. Entre los 16 y los 18, si no estás emancipado, necesitas el permiso de tus padres o tutores. Antes de los 16, solo en espectáculos públicos, en casos excepcionales y con autorización por escrito de la autoridad laboral.",
        },
        {
          type: "concept",
          term: "Emancipado",
          text: "Un menor que ya puede actuar casi como un adulto, sin depender del permiso de sus padres para muchas cosas.",
        },
        { type: "h", text: "Lo que te protege si eres menor" },
        {
          type: "p",
          text: "Si tienes menos de 18 años, hay límites que no se pueden saltar: no puedes trabajar de noche, ni hacer horas extra, ni hacer trabajos peligrosos.",
        },
        {
          type: "p",
          text: "Además, no puedes trabajar más de 8 horas al día, contando la formación. Y si trabajas más de 4 horas y media seguidas, tienes derecho a un descanso de al menos 30 minutos.",
        },
        { type: "h", text: "El contrato y el alta" },
        {
          type: "p",
          text: "El contrato pone por escrito lo que habéis acordado: tareas, horario, sueldo y duración. Puede ser indefinido, sin fecha de fin, o temporal, con fecha de fin.",
        },
        {
          type: "concept",
          term: "Periodo de prueba",
          text: "Un tiempo al principio del contrato, con un máximo que fija la ley, en el que tanto tú como la empresa podéis terminar la relación.",
        },
        {
          type: "p",
          text: "Antes de que empieces a trabajar, la empresa tiene que pedir tu alta en la Seguridad Social. Trabajar sin contrato y sin alta te deja sin esa protección.",
        },
      ],
      example: {
        title: "La heladería de Carla",
        blocks: [
          {
            type: "p",
            text: "Carla tiene 16 años y le ofrecen trabajar en una heladería en julio y agosto, por las mañanas, 4 horas al día. Antes de empezar, comprueba cuatro cosas:",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Que el contrato es temporal, de dos meses, y que dice horario, tareas y sueldo.",
              "Que sus padres firman su consentimiento.",
              "Que el horario es de mañana, no de noche, y que no le piden horas extra.",
              "Que la empresa pide su alta en la Seguridad Social antes del primer día.",
            ],
          },
        ],
      },
      keyFact: "Con 16 y 17 años puedes trabajar, pero con permiso de tus padres y con límites que te protegen.",
      practice: {
        intro: "Cinco chicos y chicas de 15 a 17 años reciben una oferta. Decide en cada caso si es legal.",
        widgets: ["canOrCannot"],
      },
      keyIdeas: [
        "La edad general para trabajar es 16 años; hasta los 18, con permiso de tus padres.",
        "Si eres menor: ni noche, ni horas extra, ni trabajos peligrosos.",
        "Contrato por escrito y alta en la Seguridad Social antes de empezar.",
      ],
      questions: [
        {
          id: "2.1-q1",
          prompt: "Leo tiene 15 años y le ofrecen trabajar en un supermercado este verano. ¿Puede?",
          options: ["No: la edad general para trabajar es 16 años.", "Sí, si sus padres firman.", "Sí, porque solo es en verano."],
          correct: 0,
          explanation:
            "El permiso de los padres es para los 16 y 17 años. Antes de los 16, solo se permiten espectáculos públicos, en casos excepcionales y con autorización.",
          hint: "Piensa primero en la edad, y después en para qué edades sirve el permiso de los padres.",
          facts: ["F-01", "F-03"],
        },
        {
          id: "2.1-q2",
          prompt: "Marta tiene 17 años y su jefe le pide quedarse dos horas extra un sábado. ¿Qué dice la ley?",
          options: ["Siendo menor de 18, no puede hacer horas extra.", "Puede, si se las pagan.", "Puede, si sus padres están de acuerdo."],
          correct: 0,
          explanation:
            "Es una protección para menores que no depende de que paguen más ni del permiso de los padres.",
          hint: "Recuerda los tres límites que tienen los menores de 18.",
          facts: ["F-04"],
        },
        {
          id: "2.1-q3",
          prompt: "¿Qué te protege más si algo sale mal en el trabajo?",
          options: ["Tener contrato y estar de alta en la Seguridad Social.", "Un acuerdo de palabra con el jefe.", "Cobrar en efectivo."],
          correct: 0,
          explanation:
            "El contrato prueba lo que se acordó y el alta te da cobertura. De palabra, todo depende de la buena fe.",
          hint: "¿Qué opción deja algo por escrito y te da cobertura?",
          facts: ["F-08"],
        },
      ],
      challenge:
        "Busca una oferta de trabajo de verano real. Apunta qué datos da (horario, sueldo, duración, tipo de contrato) y escribe las preguntas que harías sobre lo que falta.",
    },
    {
      slug: "bruto-y-neto",
      number: "2.2",
      title: "Sueldo bruto y sueldo neto",
      minutes: 7,
      status: "published",
      objective:
        "Entender la diferencia entre lo que dice tu contrato (bruto) y lo que llega a tu cuenta (neto), y comparar ofertas con 12 o 14 pagas.",
      facts: ["F-09", "F-10", "F-11", "F-12"],
      tool: "horas-de-trabajo",
      explanation: [
        {
          type: "p",
          text: "Tu contrato dice una cifra y a tu cuenta llega otra más baja. No es un error: es la diferencia entre bruto y neto.",
        },
        { type: "h", text: "Bruto y neto" },
        {
          type: "concept",
          term: "Sueldo bruto",
          text: "Todo lo que te paga la empresa antes de descuentos.",
        },
        {
          type: "concept",
          term: "Sueldo neto",
          text: "Lo que recibes después de restar tus cotizaciones a la Seguridad Social y la retención de IRPF. En la nómina se llama «líquido».",
        },
        { type: "h", text: "Los descuentos no desaparecen" },
        {
          type: "p",
          text: "Las cotizaciones son lo que pagas a la Seguridad Social. Te dan derecho a prestaciones como la jubilación, la baja por enfermedad o el paro.",
        },
        {
          type: "concept",
          term: "Retención de IRPF",
          text: "Un adelanto de tu impuesto sobre lo que ganas en el año. IRPF significa impuesto sobre la renta de las personas físicas.",
        },
        { type: "h", text: "12 o 14 pagas" },
        {
          type: "p",
          text: "Hay dos pagas extra al año, una en Navidad y otra cuando fije el convenio. Se cobran aparte o, si el convenio lo acuerda, repartidas en las 12 mensualidades. Por eso, para comparar ofertas, usa siempre la misma medida: el bruto anual.",
        },
        {
          type: "concept",
          term: "Convenio",
          text: "Un acuerdo entre empresas y trabajadores de un sector que fija condiciones como sueldos, pagas o vacaciones.",
        },
      ],
      example: {
        title: "Las dos ofertas de Javier",
        blocks: [
          { type: "p", text: "A Javier le ofrecen dos trabajos. Las cifras son inventadas para el ejemplo." },
          {
            type: "table",
            caption: "Bruto anual de cada oferta",
            head: ["Oferta", "Al mes", "Pagas", "Al año"],
            rows: [
              ["A", "1.200 €", "14", "16.800 €"],
              ["B", "1.400 €", "12", "16.800 €"],
            ],
          },
          {
            type: "p",
            text: "Parecen distintas, pero al año pagan lo mismo. La B cobra más cada mes porque lleva las pagas extra repartidas.",
          },
          {
            type: "calc",
            label: "Del bruto al neto (cifras inventadas)",
            value: "1.200 € − 150 € = 1.050 €",
            note: "Si en un mes le descontaran 150 € entre cotizaciones y retención, de 1.200 € brutos le llegarían 1.050 € netos.",
          },
        ],
      },
      keyFact: "Compara siempre en bruto anual: mensual × número de pagas.",
      practice: {
        intro: "Compara dos ofertas con distinto número de pagas y mira cuál paga más al año.",
        widgets: ["offerCompare"],
      },
      keyIdeas: [
        "Neto = bruto − cotizaciones − retención de IRPF.",
        "Las cotizaciones te dan derecho a prestaciones; la retención es un adelanto del impuesto.",
        "Para comparar ofertas, usa el bruto anual.",
      ],
      questions: [
        {
          id: "2.2-q1",
          prompt: "Tu contrato dice 1.000 € brutos al mes. ¿Cuánto te llegará a la cuenta?",
          options: [
            "Algo menos, porque se restan las cotizaciones y la retención.",
            "Exactamente 1.000 €.",
            "Más de 1.000 €, por las pagas extra.",
          ],
          correct: 0,
          explanation: "El bruto es antes de descuentos. Lo que te llega es el neto.",
          hint: "¿El bruto es antes o después de los descuentos?",
          facts: ["F-10"],
        },
        {
          id: "2.2-q2",
          prompt: "Oferta A: 1.050 € en 14 pagas. Oferta B: 1.200 € en 12 pagas. ¿Cuál paga más al año?",
          options: ["La A: 14.700 € frente a 14.400 €.", "La B, porque cobra más cada mes.", "Las dos pagan lo mismo."],
          correct: 0,
          explanation:
            "1.050 × 14 = 14.700 € y 1.200 × 12 = 14.400 €. El sueldo de cada mes engaña si no miras cuántas pagas hay.",
          hint: "Multiplica cada sueldo mensual por su número de pagas.",
          facts: [],
        },
        {
          id: "2.2-q3",
          prompt: "¿Qué es la retención de IRPF de tu nómina?",
          options: [
            "Un adelanto de tu impuesto anual que la empresa paga a Hacienda por ti.",
            "Una multa por cobrar poco.",
            "Dinero que se queda la empresa.",
          ],
          correct: 0,
          explanation:
            "Es un pago por adelantado. Al hacer la declaración se ajusta con lo que de verdad te tocaba pagar.",
          hint: "Piensa en la palabra «adelanto».",
          facts: ["F-12"],
        },
      ],
      challenge:
        "Pregunta a un adulto de confianza, solo si quiere contártelo, cuántas pagas cobra y si en su nómina hay mucha diferencia entre bruto y neto.",
    },
    {
      slug: "como-leer-una-nomina",
      number: "2.3",
      title: "Cómo leer una nómina",
      minutes: 7,
      status: "published",
      objective: "Encontrar en una nómina sus partes principales y comprobar que las cuentas cuadran.",
      facts: ["F-09", "F-10", "F-13"],
      explanation: [
        {
          type: "p",
          text: "Cada mes, junto con el sueldo, la empresa te da un documento con todas las cuentas: la nómina. Saber leerla te permite comprobar que te pagan bien.",
        },
        { type: "h", text: "Las cuatro partes" },
        {
          type: "p",
          text: "La nómina, o recibo de salarios, tiene un modelo oficial con cuatro partes:",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Cabecera: datos de la empresa y del trabajador, y el periodo que se paga.",
            "Devengos: lo que ganas.",
            "Deducciones: lo que te descuentan.",
            "Líquido total a percibir: lo que cobras.",
          ],
        },
        { type: "h", text: "Qué va en cada parte" },
        {
          type: "p",
          text: "En los devengos van el salario base, los complementos y, si se reparten, la parte proporcional de las pagas extra (prorrata). En las deducciones van tus cotizaciones y la retención de IRPF.",
        },
        {
          type: "concept",
          term: "Prorrata",
          text: "La parte de las pagas extra que se reparte en cada mensualidad, en lugar de cobrarla de golpe.",
        },
        {
          type: "p",
          text: "También suele aparecer lo que cotiza la empresa por ti. Esa parte no se resta de tu sueldo.",
        },
        { type: "h", text: "Revisa cada nómina" },
        {
          type: "p",
          text: "Comprueba el periodo, las horas, que tu nombre y tu categoría estén bien y que el líquido coincida con lo que te llega al banco. Si algo no cuadra, pregunta a la empresa con la nómina delante.",
        },
      ],
      example: {
        title: "La nómina de julio de Carla",
        blocks: [
          { type: "p", text: "Todas las cifras son inventadas para practicar." },
          {
            type: "table",
            caption: "Nómina de ejemplo",
            head: ["Parte", "Concepto", "Importe"],
            rows: [
              ["Devengos", "Salario base", "900,00 €"],
              ["Devengos", "Prorrata de pagas extra", "150,00 €"],
              ["", "Total devengado", "1.050,00 €"],
              ["Deducciones", "Cotizaciones del trabajador", "70,00 €"],
              ["Deducciones", "Retención de IRPF", "21,00 €"],
              ["", "Total deducciones", "91,00 €"],
              ["", "Líquido total a percibir", "959,00 €"],
            ],
            strong: [2, 5, 6],
          },
          { type: "calc", label: "Comprobación", value: "1.050 € − 91 € = 959 €", note: "Es lo que le tiene que llegar a la cuenta." },
        ],
      },
      keyFact: "Líquido = total devengado − total deducciones.",
      practice: {
        intro: "Toca cada parte de la nómina para ver qué es, y calcula tú el líquido.",
        widgets: ["payslip"],
      },
      keyIdeas: [
        "Cuatro partes: cabecera, devengos, deducciones y líquido.",
        "Las cotizaciones y el IRPF van en las deducciones.",
        "Comprueba que el líquido coincide con lo que te ingresan.",
      ],
      questions: [
        {
          id: "2.3-q1",
          prompt: "¿Qué parte de la nómina dice cuánto te llega a la cuenta?",
          options: ["El líquido total a percibir.", "El total devengado.", "El salario base."],
          correct: 0,
          explanation: "El total devengado es el bruto. El líquido es lo que queda tras las deducciones.",
          hint: "Busca lo que queda después de los descuentos.",
          facts: ["F-10"],
        },
        {
          id: "2.3-q2",
          prompt: "Total devengado: 1.000 €. Total deducciones: 85 €. ¿Cuál es el líquido?",
          options: ["915 €.", "1.085 €.", "85 €."],
          correct: 0,
          explanation: "Las deducciones se restan: 1.000 − 85 = 915 €.",
          hint: "Las deducciones, ¿se suman o se restan?",
          facts: [],
        },
        {
          id: "2.3-q3",
          prompt: "Te ingresan menos de lo que dice el líquido de tu nómina. ¿Qué haces?",
          options: ["Preguntar a la empresa con la nómina delante.", "Nada, seguro que es normal.", "Dejar de ir a trabajar."],
          correct: 0,
          explanation:
            "El líquido es lo que te tienen que pagar. Si no coincide, hay que aclararlo, y la nómina es tu prueba.",
          hint: "¿Qué documento demuestra lo que te tienen que pagar?",
          facts: [],
        },
      ],
      challenge:
        "Con la nómina de ejemplo de la lección, señala cada parte y rehaz la cuenta del líquido sin mirar la solución.",
    },
    {
      slug: "cotizaciones-y-retencion",
      number: "2.4",
      title: "Cotizaciones y retención: adónde va lo que te descuentan",
      minutes: 8,
      status: "published",
      objective:
        "Entender qué son las cotizaciones y el IRPF, para qué sirven y por qué la retención no es el impuesto final.",
      facts: ["F-11", "F-12", "F-13", "F-14", "F-15", "F-16", "F-17"],
      explanation: [
        {
          type: "p",
          text: "Ya sabes que de tu sueldo se descuentan cotizaciones y una retención. Ahora toca entender adónde va ese dinero.",
        },
        { type: "h", text: "Cotizaciones" },
        {
          type: "p",
          text: "Las cotizaciones son pagos a la Seguridad Social que hacéis tú y tu empresa, y la empresa pone más que tú. Te dan derecho a prestaciones como la jubilación, la baja por enfermedad o el paro.",
        },
        {
          type: "concept",
          term: "Informe de vida laboral",
          text: "Un documento gratuito de la Seguridad Social que recoge los periodos en que has estado de alta. Se pide por internet o en la app Import@ss.",
        },
        { type: "h", text: "El IRPF va por tramos" },
        {
          type: "p",
          text: "El IRPF es el impuesto sobre lo que ganas en un año. Es progresivo: va por tramos, y cada porcentaje se aplica solo a la parte de lo que ganas que cae en su tramo. Los tramos reales cambian cada año, así que aquí usamos unos inventados.",
        },
        {
          type: "concept",
          term: "Progresivo",
          text: "Que quien gana más paga un porcentaje mayor, pero solo sobre la parte que supera cada límite.",
        },
        { type: "h", text: "La retención es un adelanto" },
        {
          type: "p",
          text: "La retención se paga mes a mes, por adelantado. En contratos de menos de un año, no puede ser menor del 2 %. En la declaración se compara lo retenido con lo que de verdad te tocaba pagar: si te retuvieron de más, te devuelven la diferencia, y si fue de menos, pagas lo que falta.",
        },
      ],
      example: {
        title: "El mito de «subir de tramo»",
        blocks: [
          {
            type: "p",
            text: "Imagina un impuesto con dos tramos. Son cifras inventadas, no las reales: hasta 10.000 € se paga un 10 %, y lo que pase de 10.000 €, un 20 %.",
          },
          {
            type: "table",
            caption: "Si ganas 12.000 € en un año (tramos inventados)",
            head: ["Parte de lo que ganas", "Porcentaje", "Impuesto"],
            rows: [
              ["Primeros 10.000 €", "10 %", "1.000 €"],
              ["Siguientes 2.000 €", "20 %", "400 €"],
              ["Total", "11,7 % de media", "1.400 €"],
            ],
            strong: [2],
          },
          {
            type: "p",
            text: "Si ganas 10.001 €, solo ese último euro paga el 20 %. Pagas 1.000,20 €, no 2.000,20 €.",
          },
          { type: "calc", label: "Con 10.001 €", value: "1.000 € + 0,20 € = 1.000,20 €" },
        ],
      },
      keyFact: "Subir de tramo solo encarece la parte que entra en el tramo nuevo. Ganar más nunca te deja con menos por culpa de los tramos.",
      practice: {
        intro: "Mueve el sueldo y mira qué parte cae en cada tramo. La escala es inventada.",
        widgets: ["brackets"],
      },
      keyIdeas: [
        "Cotizan tú y tu empresa; te dan derecho a prestaciones.",
        "El IRPF va por tramos: cada porcentaje, solo a su parte.",
        "La retención es un adelanto que se ajusta en la declaración.",
      ],
      questions: [
        {
          id: "2.4-q1",
          prompt:
            "Con estos tramos inventados (hasta 10.000 € al 10 % y el resto al 20 %), ¿cuánto se paga por 11.000 €?",
          options: ["1.200 €.", "2.200 €.", "1.100 €."],
          correct: 0,
          explanation:
            "10.000 × 10 % = 1.000 € y 1.000 × 20 % = 200 €. 2.200 € sería aplicar el 20 % a todo, que es justo el error del mito.",
          hint: "Calcula por separado la parte de cada tramo y luego súmalas.",
          facts: [],
        },
        {
          id: "2.4-q2",
          prompt: "«Si me suben el sueldo, paso de tramo y cobro menos». ¿Es cierto?",
          options: [
            "No: el porcentaje más alto solo afecta a la parte que entra en el tramo nuevo.",
            "Sí, siempre.",
            "Solo si eres menor de edad.",
          ],
          correct: 0,
          explanation:
            "Cada tramo tiene su porcentaje. El dinero que ya estaba en tramos más bajos sigue pagando lo mismo.",
          hint: "¿A qué parte del sueldo se aplica el porcentaje del tramo nuevo?",
          facts: ["F-16"],
        },
        {
          id: "2.4-q3",
          prompt: "¿Quién pone más en las cotizaciones a la Seguridad Social por tu sueldo?",
          options: ["La empresa.", "Tú.", "Los dos ponen lo mismo."],
          correct: 0,
          explanation:
            "Además de lo que te descuentan a ti, la empresa cotiza por ti, y su parte es mayor.",
          hint: "Recuerda que la empresa también cotiza por ti.",
          facts: ["F-13"],
        },
      ],
      challenge:
        "Explícale a alguien de casa, con el ejemplo de los tramos, por qué subir de tramo no hace cobrar menos. Si te cuesta explicarlo, vuelve a la calculadora.",
    },
    {
      slug: "la-declaracion-de-la-renta",
      number: "2.5",
      title: "La declaración de la Renta, y por qué te pueden devolver dinero",
      minutes: 7,
      status: "published",
      objective:
        "Entender qué es la declaración de la Renta, cuándo se presenta y por qué alguien con un trabajo de verano suele recuperar lo que le retuvieron.",
      facts: ["F-14", "F-17", "F-18", "F-19", "F-20", "F-21", "F-22", "F-23"],
      explanation: [
        {
          type: "p",
          text: "Cada año, millones de personas hacen la declaración de la Renta. Si has trabajado, aunque sea un verano, esto también va contigo.",
        },
        { type: "h", text: "Qué es" },
        {
          type: "concept",
          term: "Declaración de la Renta",
          text: "Un resumen anual de lo que ganaste el año anterior y de lo que ya adelantaste con las retenciones. El resultado sale a pagar o a devolver.",
        },
        {
          type: "p",
          text: "Se presenta una vez al año, en una campaña con fechas que cambian cada año. Por eso no las ponemos aquí: búscalas en la web de la Agencia Tributaria.",
        },
        { type: "h", text: "¿Tienes que presentarla?" },
        {
          type: "p",
          text: "No todo el mundo está obligado: depende de cuánto ganes y de cuántos pagadores tengas. Aunque no estés obligado, puedes presentarla, por ejemplo para que te devuelvan lo que te retuvieron.",
        },
        { type: "h", text: "Por qué te pueden devolver dinero" },
        {
          type: "p",
          text: "Con ingresos bajos, como un trabajo de verano, el impuesto suele quedar en 0 € y te devuelven toda la retención.",
        },
        {
          type: "p",
          text: "Pero tu declaración puede afectar a la de tus padres, que pueden aplicar una rebaja por tenerte a cargo, el mínimo por descendientes. Decididlo juntos.",
        },
        {
          type: "p",
          text: "Se hace en Renta Web, en la sede de la Agencia Tributaria. Para entrar puedes identificarte con Cl@ve, con un número de referencia o con certificado digital.",
        },
      ],
      example: {
        title: "La devolución de Carla",
        blocks: [
          {
            type: "p",
            text: "Carla ganó 2.100 € brutos en su trabajo de verano y le retuvieron 42 € de IRPF. Son cifras inventadas para el ejemplo.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Al hacer la declaración, su impuesto del año sale 0 €, porque sus ingresos son bajos.",
              "Ya había adelantado 42 €.",
              "Resultado: le devuelven 42 €.",
            ],
          },
          { type: "calc", label: "Resultado de la declaración", value: "0 € − 42 € = −42 € → te devuelven 42 €" },
          {
            type: "p",
            text: "Antes de presentarla, Carla lo habla con sus padres para saber si les afecta en su propia declaración.",
          },
        ],
      },
      keyFact: "Si lo que te retuvieron es más de lo que te tocaba pagar, la diferencia te la devuelven.",
      practice: {
        intro: "Escribe lo que te retuvieron y el impuesto del año, y mira si sale a pagar o a devolver.",
        widgets: ["taxReturn"],
      },
      keyIdeas: [
        "La Renta resume el año: lo que debías frente a lo que ya adelantaste.",
        "Aunque no estés obligado, presentarla puede devolverte la retención.",
        "Habla antes con tus padres: tu declaración puede afectar a la suya.",
      ],
      questions: [
        {
          id: "2.5-q1",
          prompt: "Te retuvieron 50 € y tu impuesto real del año es 0 €. ¿Qué pasa en la declaración?",
          options: ["Te devuelven 50 €.", "Pagas 50 €.", "No pasa nada."],
          correct: 0,
          explanation: "La retención era un adelanto. Si no tocaba pagar nada, te devuelven todo el adelanto.",
          hint: "La retención era un adelanto. ¿Qué pasa con un adelanto que no hacía falta?",
          facts: ["F-17"],
        },
        {
          id: "2.5-q2",
          prompt: "No estás obligado a declarar, pero te retuvieron dinero. ¿Por qué te podría interesar presentar la declaración?",
          options: ["Para recuperar lo que te retuvieron.", "Para pagar más impuestos.", "No te interesa nunca."],
          correct: 0,
          explanation: "Si no la presentas, ese adelanto no se te devuelve.",
          hint: "¿Qué pasa con tu retención si no presentas nada?",
          facts: ["F-20"],
        },
        {
          id: "2.5-q3",
          prompt: "¿Por qué conviene hablarlo con tus padres antes de presentar tu declaración?",
          options: [
            "Porque tu declaración puede cambiar lo que ellos pagan en la suya.",
            "Porque los menores no pueden presentarla.",
            "Porque ellos tienen que firmarla por ti.",
          ],
          correct: 0,
          explanation:
            "Tus padres pueden aplicar en su declaración una rebaja por tenerte a cargo, y tus ingresos o tu declaración pueden hacer que la pierdan.",
          hint: "Piensa en la rebaja que tus padres pueden aplicar por ti.",
          facts: ["F-22"],
        },
      ],
      challenge:
        "Busca con un adulto, en la web de la Agencia Tributaria, la página de la campaña de Renta de este año. Apunta cuándo empieza y cuándo termina.",
    },
  ],
  assessment: {
    count: 8,
    passMark: 6,
    bank: [
      {
        id: "E2-01",
        lesson: "2.1",
        facts: ["F-02"],
        prompt: "Pablo tiene 16 años, no está emancipado y le ofrecen un contrato. ¿Qué necesita además de su firma?",
        correct: "El consentimiento de sus padres o tutores.",
        distractors: ["Nada más.", "Un certificado del instituto."],
        explanation: "Entre los 16 y los 18 años, sin emancipación, hace falta el permiso de los padres o tutores.",
      },
      {
        id: "E2-02",
        lesson: "2.1",
        facts: ["F-04"],
        prompt: "A Laura, de 17 años, le ofrecen un turno de noche en un bar. ¿Puede aceptarlo?",
        correct: "No: los menores de 18 no pueden trabajar de noche.",
        distractors: ["Sí, si se lo pagan más.", "Sí, si es solo en verano."],
        explanation: "Es una protección para menores que no depende del sueldo ni de la época del año.",
      },
      {
        id: "E2-03",
        lesson: "2.1",
        facts: ["F-08"],
        prompt: "Te proponen trabajar el verano «sin papeles, que es más fácil». ¿Qué pierdes?",
        correct: "El contrato y el alta en la Seguridad Social, con la protección que te dan.",
        distractors: ["Nada, porque cobras lo mismo.", "Solo pierdes las vacaciones."],
        explanation: "Sin alta no tienes cobertura. Sin contrato, no hay prueba de lo que se acordó.",
      },
      {
        id: "E2-04",
        lesson: "2.1",
        facts: ["F-07"],
        prompt: "Durante el periodo de prueba de un contrato, ¿qué es cierto?",
        correct: "Cualquiera de las dos partes puede terminar la relación.",
        distractors: ["Solo la empresa puede terminarla.", "No se cobra."],
        explanation: "En el periodo de prueba, tanto tú como la empresa podéis poner fin a la relación.",
      },
      {
        id: "E2-05",
        lesson: "2.3",
        facts: ["F-10"],
        prompt: "Tu total devengado es 1.100 € y tus deducciones suman 90 €. ¿Cuánto cobras?",
        correct: "1.010 €.",
        distractors: ["1.190 €.", "1.100 €."],
        explanation: "Líquido = devengado − deducciones = 1.100 − 90 = 1.010 €.",
      },
      {
        id: "E2-06",
        lesson: "2.2",
        facts: ["F-09"],
        prompt: "Una oferta paga 18.200 € brutos al año en 14 pagas. ¿Cuánto es cada paga bruta?",
        correct: "1.300 €.",
        distractors: ["1.516,67 €.", "1.400 €."],
        explanation: "18.200 ÷ 14 = 1.300 €. 1.516,67 € sería dividir entre 12 pagas.",
      },
      {
        id: "E2-07",
        lesson: "2.3",
        facts: ["F-10"],
        prompt: "¿En qué parte de la nómina aparece la retención de IRPF?",
        correct: "En las deducciones.",
        distractors: ["En los devengos.", "En los datos de la empresa."],
        explanation: "Es un descuento sobre lo que ganas, así que va en las deducciones.",
      },
      {
        id: "E2-08",
        lesson: "2.4",
        facts: ["F-16"],
        prompt:
          "Con unos tramos inventados (hasta 12.000 € al 15 % y el resto al 25 %), ¿cuánto se paga por 14.000 €?",
        correct: "2.300 €.",
        distractors: ["3.500 €.", "2.100 €."],
        explanation: "12.000 × 15 % = 1.800 € y 2.000 × 25 % = 500 €. 3.500 € sería aplicar el 25 % a todo.",
      },
      {
        id: "E2-09",
        lesson: "2.4",
        facts: ["F-12"],
        prompt: "La retención de IRPF de tu nómina es…",
        correct: "Un adelanto de tu impuesto anual.",
        distractors: ["El impuesto final, que ya no cambia.", "Un ahorro que te guarda la empresa."],
        explanation: "Es un pago a cuenta. En la declaración se ajusta con lo que te tocaba pagar.",
      },
      {
        id: "E2-10",
        lesson: "2.5",
        facts: ["F-17"],
        prompt: "En tu declaración, el impuesto del año es 120 € y ya te retuvieron 200 €. ¿Qué pasa?",
        correct: "Te devuelven 80 €.",
        distractors: ["Pagas 80 €.", "Pagas 120 €."],
        explanation: "Adelantaste 200 € y solo debías 120 €: te devuelven 200 − 120 = 80 €.",
      },
      {
        id: "E2-11",
        lesson: "2.5",
        facts: ["F-22"],
        prompt: "¿Por qué conviene hablar con tus padres antes de presentar tu propia declaración?",
        correct: "Porque puede cambiar la rebaja que ellos aplican por tenerte a cargo.",
        distractors: ["Porque los menores no pueden declarar.", "Porque la tienen que firmar ellos."],
        explanation: "Tus ingresos o tu declaración pueden hacer que tus padres pierdan el mínimo por descendientes.",
      },
      {
        id: "E2-12",
        lesson: "2.4",
        facts: ["F-11"],
        prompt: "¿Para qué cuentan las cotizaciones que te descuentan?",
        correct: "Para tu derecho a prestaciones como el paro o la jubilación.",
        distractors: ["Para pagar tu sueldo.", "Para nada, son un gasto perdido."],
        explanation: "Cotizar te da derecho a prestaciones de la Seguridad Social.",
      },
    ],
  },
};
