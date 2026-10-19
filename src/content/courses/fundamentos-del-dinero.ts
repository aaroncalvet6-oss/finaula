import type { Course } from "../schema";

export const fundamentosDelDinero: Course = {
  slug: "fundamentos-del-dinero",
  number: 1,
  title: "Fundamentos del dinero",
  area: "Tu dinero hoy",
  summary:
    "Para qué sirve el dinero, cómo decidir en qué gastarlo, hacer un presupuesto, ahorrar con una meta, pagar en digital sin caer en trampas y por qué el tiempo cambia lo que vale tu dinero.",
  tagline: "Aprenderás a decidir en qué gastar, a hacer un presupuesto, a ahorrar con una meta y a no caer en trampas.",
  audience: "Para cualquier persona de 14 a 18 años. No necesitas saber nada antes.",
  objectives: [
    "Entender para qué sirve el dinero y por qué tiene valor.",
    "Decidir mejor tus compras con el coste de oportunidad.",
    "Hacer tu propio presupuesto y ahorrar primero.",
    "Convertir lo que quieres en una meta de ahorro realista.",
    "Pagar en digital y reconocer las estafas más comunes.",
    "Entender la inflación y el interés compuesto, y por qué ninguna rentabilidad está garantizada.",
  ],
  motif: "coins",
  tone: "alt",
  lessons: [
    {
      slug: "que-es-el-dinero",
      number: "1.1",
      title: "Qué es el dinero y para qué sirve",
      minutes: 6,
      status: "published",
      objective: "Entender las tres funciones del dinero y por qué un billete o un saldo en el móvil valen algo.",
      facts: [],
      explanation: [
        {
          type: "p",
          text: "Usas dinero casi todos los días: para el bus, para un bocadillo o para una compra en el móvil. Pero ¿qué es exactamente y por qué vale algo?",
        },
        { type: "h", text: "Tres trabajos a la vez" },
        {
          type: "p",
          text: "El dinero sirve para tres cosas. Para intercambiar cosas sin hacer trueque: es un medio de cambio. Para comparar lo que vale cada cosa con la misma medida: es una unidad de cuenta. Y para guardar valor y usarlo más tarde: es un depósito de valor.",
        },
        {
          type: "concept",
          term: "Trueque",
          text: "Cambiar una cosa por otra directamente, sin dinero. Por ejemplo, tu sudadera por los auriculares de otra persona.",
        },
        { type: "h", text: "Vale porque todos confiamos en él" },
        {
          type: "p",
          text: "Un billete de 20 € no vale por el papel. Vale porque cualquier tienda te lo acepta y tú sabes que podrás usarlo mañana. Sin esa confianza, sería solo papel o un número en una pantalla.",
        },
        { type: "h", text: "El dinero digital también es dinero" },
        {
          type: "p",
          text: "La tarjeta, Bizum o el saldo de una app son dinero igual que el efectivo. Que no lo veas salir de tu mano no significa que gastes menos: cuando pagas, ese dinero se va.",
        },
      ],
      example: {
        title: "Los auriculares de Lucía",
        blocks: [
          {
            type: "p",
            text: "Lucía tiene una sudadera que ya no se pone y quiere unos auriculares de 30 €.",
          },
          {
            type: "p",
            text: "Sin dinero, tendría que encontrar a alguien que tenga esos auriculares y que además quiera justo su sudadera. Es muy difícil que pase.",
          },
          {
            type: "p",
            text: "Con dinero, vende la sudadera en una app de segunda mano y junta lo que saca con parte de su paga:",
          },
          {
            type: "bars",
            total: 30,
            groups: [
              {
                label: "Auriculares",
                items: [
                  { name: "Venta de la sudadera", amount: 18 },
                  { name: "De su paga", amount: 12 },
                ],
              },
            ],
          },
          {
            type: "p",
            text: "El dinero hace de puente: quien compra la sudadera no necesita tener auriculares.",
          },
        ],
      },
      keyFact:
        "Con trueque, las dos personas tienen que querer lo que tiene la otra. El dinero hace innecesaria esa «doble coincidencia».",
      practice: {
        intro: "Compara dos paquetes del mismo producto y mira cuál sale más barato por unidad. Es el dinero funcionando como unidad de cuenta.",
        widgets: ["unitPrice"],
      },
      keyIdeas: [
        "El dinero sirve para intercambiar, para comparar y para guardar valor.",
        "Vale porque todos confiamos en que otros lo aceptarán.",
        "Pagar en digital es gastar dinero real, aunque no lo veas.",
      ],
      questions: [
        {
          id: "1.1-q1",
          prompt:
            "Marcos quiere cambiar su balón por un videojuego, pero quien tiene el videojuego no quiere balones. ¿Qué problema resolvería el dinero?",
          options: [
            "No haría falta encontrar a alguien que quiera justo lo que tú tienes.",
            "El videojuego pasaría a costar menos.",
            "El balón pasaría a valer más.",
          ],
          correct: 0,
          explanation:
            "Marcos podría vender el balón a cualquiera y usar el dinero para comprar el videojuego. El dinero no cambia lo que vale cada cosa: quita la necesidad de que los dos quieran lo que tiene el otro.",
          hint: "Piensa en qué necesita Marcos que pase para conseguir el videojuego sin dinero.",
          facts: [],
        },
        {
          id: "1.1-q2",
          prompt: "Un paquete de 6 latas cuesta 4,20 € y uno de 4 latas cuesta 3 €. ¿Cuál sale más barato por lata?",
          options: [
            "El de 6 latas: 0,70 € por lata frente a 0,75 €.",
            "El de 4 latas, porque cuesta menos.",
            "Los dos salen igual.",
          ],
          correct: 0,
          explanation:
            "Hay que dividir el precio entre las latas: 4,20 ÷ 6 = 0,70 € y 3 ÷ 4 = 0,75 €. Pagar menos en total no significa pagar menos por unidad.",
          hint: "Divide el precio de cada paquete entre el número de latas.",
          facts: [],
        },
        {
          id: "1.1-q3",
          prompt: "Pagas 10 € con Bizum en lugar de con un billete. ¿Qué cambia en tu dinero?",
          options: [
            "Nada: en los dos casos tienes 10 € menos.",
            "Gastas menos, porque no sale de tu cartera.",
            "No cuenta como gasto hasta final de mes.",
          ],
          correct: 0,
          explanation:
            "El dinero digital es dinero real. Sale de una cuenta en lugar de una cartera, pero el resultado es el mismo.",
          hint: "¿De dónde sale el dinero cuando pagas con el móvil?",
          facts: [],
        },
      ],
      challenge:
        "Durante una semana, apunta cada vez que uses dinero y si fue en efectivo o en digital. El domingo suma cada columna. ¿Con cuál gastaste más sin darte cuenta?",
    },
    {
      slug: "coste-de-oportunidad",
      number: "1.2",
      title: "Necesidades, deseos y coste de oportunidad",
      minutes: 7,
      status: "published",
      objective: "Distinguir necesidades de deseos y valorar cada compra por lo que dejas de hacer con ese dinero.",
      facts: [],
      tool: "horas-de-trabajo",
      explanation: [
        {
          type: "p",
          text: "Cada vez que gastas, eliges. Y elegir una cosa siempre significa renunciar a otra. Esta lección va de ver esa renuncia antes de pagar.",
        },
        { type: "h", text: "Necesidad o deseo" },
        {
          type: "p",
          text: "Una necesidad es algo que te hace falta para vivir o para cumplir con tus obligaciones, como comer o ir al instituto. Un deseo es algo que te apetece, pero sin lo que puedes vivir.",
        },
        {
          type: "p",
          text: "La misma cosa puede ser una u otra según el caso. Unas zapatillas para Educación Física cuando las tuyas están rotas son una necesidad. El quinto par es un deseo.",
        },
        { type: "h", text: "Lo que de verdad cuesta algo" },
        {
          type: "concept",
          term: "Coste de oportunidad",
          text: "Es lo que de verdad te cuesta algo: la mejor alternativa a la que renuncias al elegirlo.",
        },
        {
          type: "p",
          text: "Si gastas 20 € en algo, no solo pagas 20 €. También «pagas» con todo lo que ya no podrás hacer con ese dinero.",
        },
        { type: "h", text: "Pasa los precios a tiempo" },
        {
          type: "p",
          text: "Un truco útil: convierte el precio en horas de trabajo. Si ganas 6 € por hora cuidando a tu primo, unas zapatillas de 90 € son 15 horas de tu tiempo. Visto así, es más fácil decidir.",
        },
      ],
      example: {
        title: "Los 25 € de Hugo",
        blocks: [
          { type: "p", text: "Hugo cumple 15 años y le regalan 25 €. Duda entre dos planes." },
          {
            type: "bars",
            total: 25,
            groups: [
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
          },
          {
            type: "p",
            text: "Si elige el pase, renuncia a la tarde con sus amigos y a los 10 € del viaje. Si elige el cine, renuncia al pase. Ninguna opción es la buena: lo importante es ver las dos antes de decidir.",
          },
          {
            type: "calc",
            label: "En horas de trabajo",
            value: "20 € ÷ 8 €/h = 2,5 h",
            note: "Si Hugo cobra 8 € por hora de clases de repaso (cifra inventada), el pase le cuesta 2,5 horas.",
          },
        ],
      },
      keyFact: "El precio de algo es lo que pagas. Su coste es todo aquello a lo que renuncias.",
      practice: {
        intro: "Escribe un precio y lo que ganas por hora, y mira cuántas horas te cuesta.",
        widgets: ["workHours"],
      },
      keyIdeas: [
        "Necesidad: te hace falta. Deseo: te apetece. Depende del caso.",
        "El coste de oportunidad es la mejor alternativa a la que renuncias.",
        "Pasar los precios a horas de trabajo ayuda a decidir.",
      ],
      questions: [
        {
          id: "1.2-q1",
          prompt:
            "Necesitas el abono de transporte para ir al instituto y también quieres una funda nueva para el móvil, pero solo te llega para una de las dos cosas. ¿Cuál es la necesidad?",
          options: ["El abono de transporte.", "La funda del móvil.", "Las dos por igual."],
          correct: 0,
          explanation:
            "Sin abono no puedes ir a clase, que es una obligación. Sin funda nueva sigues teniendo móvil.",
          hint: "¿Sin cuál de las dos no podrías cumplir con una obligación?",
          facts: [],
        },
        {
          id: "1.2-q2",
          prompt:
            "Tienes 15 €. Dudas entre una camiseta y guardarlos para una excursión dentro de un mes. Compras la camiseta. ¿Cuál es tu coste de oportunidad?",
          options: [
            "No poder usar esos 15 € para la excursión.",
            "Los 15 € que costó la camiseta.",
            "Ninguno, porque ya tienes la camiseta.",
          ],
          correct: 0,
          explanation:
            "El coste de oportunidad no es el precio. Es la alternativa a la que renuncias, en este caso la excursión.",
          hint: "El coste de oportunidad no es lo que pagas, sino aquello a lo que renuncias.",
          facts: [],
        },
        {
          id: "1.2-q3",
          prompt: "Ganas 7 € por hora. Un videojuego cuesta 63 €. ¿Cuántas horas de trabajo te cuesta?",
          options: ["9 horas.", "7 horas.", "56 horas."],
          correct: 0,
          explanation: "63 ÷ 7 = 9. Para pasar un precio a horas, divide el precio entre lo que ganas por hora.",
          hint: "Divide el precio entre lo que ganas en una hora.",
          facts: [],
        },
        {
          id: "1.2-q4",
          prompt: "¿Por qué pensar «solo son 2 €» puede ser una trampa en las compras dentro de un juego?",
          options: [
            "Porque muchas compras pequeñas suman mucho y no las comparas con otras opciones.",
            "Porque 2 € siempre es demasiado caro.",
            "Porque las compras pequeñas no se pueden pagar con tarjeta.",
          ],
          correct: 0,
          explanation:
            "2 € cada semana son más de 100 € al año. Cada compra pequeña también tiene su coste de oportunidad.",
          hint: "Piensa en cuánto suman 2 € cada semana durante un año.",
          facts: [],
        },
      ],
      challenge:
        "Elige algo que quieras comprar. Calcula cuántas horas de trabajo o semanas de paga te cuesta y escribe otra cosa que podrías hacer con ese dinero. Espera 48 horas antes de decidir.",
    },
    {
      slug: "tu-presupuesto",
      number: "1.3",
      title: "Tu presupuesto: ingresos, gastos y ahorro",
      minutes: 8,
      status: "published",
      objective: "Hacer un presupuesto mensual sencillo con tu paga y otros ingresos, y decidir cuánto ahorrar.",
      facts: [],
      tool: "presupuesto",
      explanation: [
        {
          type: "p",
          text: "Si el dinero se te acaba antes de que acabe el mes, no siempre es porque tengas poco. Muchas veces es porque no tienes un plan.",
        },
        { type: "h", text: "Un plan antes de gastar" },
        {
          type: "concept",
          term: "Presupuesto",
          text: "Un plan de lo que entra (ingresos), lo que sale (gastos) y lo que apartas (ahorro). Se hace antes de gastar, no después.",
        },
        { type: "h", text: "Gastos fijos y variables" },
        {
          type: "p",
          text: "Los gastos fijos se repiten cada mes y casi no cambian, como una suscripción o la recarga del móvil. Los gastos variables cambian según el mes, como las salidas o los caprichos. Lo que puedes ajustar está casi siempre en los variables.",
        },
        { type: "h", text: "Ahorra primero" },
        {
          type: "p",
          text: "Aparta el ahorro en cuanto recibas el dinero, en lugar de guardar lo que sobre al final, que suele ser nada. Y si gastas más de lo que entra, solo hay dos salidas: gastar menos o ingresar más.",
        },
        {
          type: "concept",
          term: "Porcentaje",
          text: "Una parte de cada 100. Ahorrar un 20 % significa apartar 20 € de cada 100 € que recibes: 2 de cada 10.",
        },
      ],
      example: {
        title: "El mes de Nerea",
        blocks: [
          {
            type: "p",
            text: "Nerea tiene 16 años. Cada mes recibe 40 € de paga y gana 20 € cuidando a su vecina pequeña dos tardes. En total, 60 €.",
          },
          {
            type: "table",
            caption: "Gastos de Nerea al mes",
            head: ["Concepto", "Tipo", "Al mes"],
            rows: [
              ["Música en streaming, cuenta compartida", "Fijo", "4 €"],
              ["Recarga del móvil", "Fijo", "10 €"],
              ["Salidas con amigos", "Variable", "30 €"],
              ["Caprichos", "Variable", "10 €"],
              ["Total", "", "54 €"],
            ],
            strong: [4],
          },
          {
            type: "p",
            text: "Le sobran 6 €, un 10 % de lo que ingresa. Nerea quiere ahorrar un 20 %:",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "20 % de 60 € = 12 € de ahorro, que aparta el día que cobra.",
              "Le quedan 60 − 12 = 48 € para gastar. Quitando los fijos: 48 − 14 = 34 € para los variables.",
              "Antes gastaba 40 € en variables, así que recorta 6 €: una salida menos al mes.",
            ],
          },
        ],
      },
      keyFact: "Ahorrar un 20 % es apartar 2 de cada 10 euros. Si lo haces al cobrar, no compite con los caprichos.",
      practice: {
        intro: "Pon tus ingresos y gastos fijos y mueve el ahorro entre el 0 % y el 50 % para ver cuánto te queda para lo demás.",
        widgets: ["budget"],
      },
      keyIdeas: [
        "Un presupuesto es un plan de ingresos, gastos y ahorro, hecho antes de gastar.",
        "Lo que puedes ajustar está en los gastos variables.",
        "Ahorra primero; si gastas más de lo que entra, gasta menos o ingresa más.",
      ],
      questions: [
        {
          id: "1.3-q1",
          prompt: "¿Cuál de estos gastos es fijo?",
          options: ["Una suscripción de 5 € al mes.", "Ir al cine con tus amigos.", "El regalo de cumpleaños de una amiga."],
          correct: 0,
          explanation: "La suscripción se repite cada mes con el mismo importe. Las otras dos cambian o no se repiten.",
          hint: "Busca el gasto que se repite cada mes y casi no cambia.",
          facts: [],
        },
        {
          id: "1.3-q2",
          prompt: "Recibes 50 € y quieres ahorrar el 20 %. ¿Cuánto apartas y cuánto te queda para gastar?",
          options: ["Apartas 10 € y te quedan 40 €.", "Apartas 20 € y te quedan 30 €.", "Apartas 5 € y te quedan 45 €."],
          correct: 0,
          explanation: "El 20 % de 50 € es 50 × 0,20 = 10 €. El 20 % no son 20 €: son 20 € de cada 100.",
          hint: "El 20 % son 2 de cada 10 euros.",
          facts: [],
        },
        {
          id: "1.3-q3",
          prompt: "Según tu presupuesto, gastas 70 € al mes e ingresas 60 €. ¿Qué tienes que hacer?",
          options: [
            "Reducir gastos o aumentar ingresos hasta cubrir esos 10 €.",
            "Pedir 10 € prestados cada mes.",
            "Nada, porque son solo 10 €.",
          ],
          correct: 0,
          explanation:
            "Si cada mes sale más de lo que entra, el agujero crece. Pedir prestado solo lo aplaza y, además, luego hay que devolverlo.",
          hint: "¿Qué pasa si el mismo agujero se repite todos los meses?",
          facts: [],
        },
        {
          id: "1.3-q4",
          prompt: "¿Por qué conviene apartar el ahorro al principio del mes?",
          options: [
            "Porque si esperas al final, lo normal es que no sobre nada.",
            "Porque al principio del mes el dinero vale más.",
            "Porque así puedes gastar más.",
          ],
          correct: 0,
          explanation:
            "El dinero que tienes a mano se acaba gastando. Si apartas el ahorro primero, ya no compite con los caprichos.",
          hint: "Piensa en qué suele quedar en tu cartera a final de mes.",
          facts: [],
        },
      ],
      challenge:
        "Haz tu presupuesto del mes que viene con la herramienta. Al final del mes, compara lo que planeaste con lo que gastaste de verdad y apunta una cosa que cambiarías.",
    },
    {
      slug: "ahorrar-con-una-meta",
      number: "1.4",
      title: "Ahorrar con una meta",
      minutes: 6,
      status: "published",
      objective: "Convertir algo que quieres en una meta de ahorro concreta, con cantidad, plazo y aportación periódica.",
      facts: [],
      tool: "meta-de-ahorro",
      explanation: [
        {
          type: "p",
          text: "«Tengo que ahorrar» casi nunca funciona. Lo que funciona es saber para qué, cuánto y para cuándo.",
        },
        { type: "h", text: "Una meta concreta" },
        {
          type: "p",
          text: "Una meta útil dice qué, cuánto y para cuándo. «Ahorrar» no es una meta. «180 € para una bici de segunda mano en junio» sí lo es.",
        },
        { type: "h", text: "Divide la meta entre el tiempo" },
        {
          type: "concept",
          term: "Aportación",
          text: "Lo que apartas cada semana o cada mes para llegar a tu meta.",
        },
        {
          type: "p",
          text: "Lo que te falta, dividido entre las semanas que quedan, te dice cuánto apartar cada semana. Si sale demasiado, tienes tres palancas: alargar el plazo, bajar la cantidad o buscar más ingresos.",
        },
        { type: "h", text: "Separa y protégete" },
        {
          type: "p",
          text: "Guarda el dinero de la meta aparte del dinero para gastar, por ejemplo en otra hucha o en otra cuenta. Y ten un pequeño fondo para imprevistos, para que el primer problema no se coma tu meta.",
        },
      ],
      example: {
        title: "El móvil de Iván",
        blocks: [
          { type: "p", text: "Iván quiere un móvil reacondicionado de 240 €. Ya tiene 60 € de su cumpleaños." },
          {
            type: "list",
            ordered: true,
            items: [
              "Le faltan 240 − 60 = 180 €.",
              "Quiere tenerlo en 20 semanas: 180 ÷ 20 = 9 € por semana.",
              "Su paga es de 10 € a la semana. Si aparta 9 €, solo le queda 1 € para todo lo demás. No es realista.",
              "Alarga el plazo a 30 semanas: 180 ÷ 30 = 6 € por semana. Le quedan 4 € a la semana y llega a la meta.",
            ],
          },
          { type: "calc", label: "Su plan", value: "180 € ÷ 30 sem = 6 €/sem" },
        ],
      },
      keyFact: "Aportación = (meta − lo que ya tienes) ÷ semanas que quedan.",
      practice: {
        intro: "Pon tu meta, lo que ya tienes y el plazo, y mira cuánto tienes que apartar.",
        widgets: ["savingsGoal"],
      },
      keyIdeas: [
        "Una meta útil dice qué, cuánto y para cuándo.",
        "Lo que falta entre el tiempo que queda da tu aportación.",
        "Separa el dinero de la meta y ten un fondo para imprevistos.",
      ],
      questions: [
        {
          id: "1.4-q1",
          prompt: "¿Cuál de estas metas de ahorro está bien definida?",
          options: [
            "«Juntar 120 € para unos cascos antes del 1 de marzo».",
            "«Ahorrar más este año».",
            "«Comprarme algo cuando tenga dinero».",
          ],
          correct: 0,
          explanation:
            "Solo la primera dice qué, cuánto y para cuándo. Con eso ya puedes calcular cuánto apartar cada semana.",
          hint: "Busca la que responde a qué, cuánto y para cuándo.",
          facts: [],
        },
        {
          id: "1.4-q2",
          prompt: "Quieres juntar 200 €, ya tienes 50 € y te quedan 10 semanas. ¿Cuánto tienes que ahorrar cada semana?",
          options: ["15 €.", "20 €.", "25 €."],
          correct: 0,
          explanation: "Te faltan 200 − 50 = 150 €, y 150 ÷ 10 = 15 €. Lo que ya tienes se resta antes de dividir.",
          hint: "Primero calcula cuánto te falta.",
          facts: [],
        },
        {
          id: "1.4-q3",
          prompt: "Te sale que necesitas ahorrar cada semana más de lo que recibes. ¿Qué arregla el plan?",
          options: [
            "Alargar el plazo, bajar la cantidad o buscar más ingresos.",
            "Seguir igual y ahorrar lo que sobre.",
            "Ahorrar solo las semanas que te acuerdes.",
          ],
          correct: 0,
          explanation:
            "Un plan imposible se abandona. Hay que cambiar una de las tres piezas: cuánto, cuándo o cuánto ingresas.",
          hint: "Un plan imposible no se cumple. ¿Qué piezas del plan puedes mover?",
          facts: [],
        },
        {
          id: "1.4-q4",
          prompt: "¿Para qué sirve un fondo para imprevistos?",
          options: [
            "Para pagar un gasto inesperado sin tocar el dinero de tu meta.",
            "Para gastarlo en caprichos.",
            "Para no tener que hacer presupuesto.",
          ],
          correct: 0,
          explanation:
            "Si se te rompen los cascos o pierdes el abono, pagas con ese fondo y tu meta sigue intacta.",
          hint: "Piensa qué pasa con tu meta si surge un gasto que no esperabas.",
          facts: [],
        },
      ],
      challenge:
        "Define una meta real: qué, cuánto y para cuándo. Calcula tu aportación con la herramienta y apártala la próxima vez que recibas dinero.",
    },
    {
      slug: "dinero-digital",
      number: "1.5",
      title: "Dinero digital: tarjeta, Bizum, compras en juegos y estafas",
      minutes: 8,
      status: "published",
      objective: "Pagar en digital sabiendo qué pasa con tu dinero, y reconocer las trampas y estafas más comunes.",
      facts: [],
      explanation: [
        {
          type: "p",
          text: "Pagar con el móvil es rápido y cómodo. Justo por eso conviene saber qué pasa con tu dinero y dónde están las trampas.",
        },
        { type: "h", text: "Es dinero real" },
        {
          type: "p",
          text: "Pagar con tarjeta, móvil o Bizum es gastar dinero real de una cuenta. Como no tocas los billetes, cuesta más notar cuánto gastas. Revisa tus movimientos una vez por semana.",
        },
        { type: "h", text: "Las monedas de los juegos" },
        {
          type: "p",
          text: "Las gemas, monedas o puntos de los juegos esconden el precio real. Antes de comprar, pásalo a euros. Además, casi nunca venden la cantidad justa, así que acabas comprando de más.",
        },
        {
          type: "concept",
          term: "Caja botín",
          text: "Pagar por un premio al azar dentro de un juego. Sabes lo que pagas, pero no lo que te va a tocar.",
        },
        { type: "h", text: "Cómo funcionan las estafas" },
        {
          type: "p",
          text: "Las estafas buscan que actúes con prisa y des tus datos: «tu cuenta va a ser bloqueada», premios que no has pedido, chollos imposibles o alguien que se hace pasar por un amigo y te pide un Bizum urgente.",
        },
        {
          type: "concept",
          term: "Phishing y smishing",
          text: "Engaños para robarte datos o dinero con un mensaje que parece de alguien de confianza. Si llega por correo se llama phishing; si llega por SMS, smishing.",
        },
        {
          type: "p",
          text: "La regla: no des nunca tus claves ni códigos a nadie. Para, y compruébalo por otro canal que ya conocías.",
        },
      ],
      example: {
        title: "La skin de Álex",
        blocks: [
          {
            type: "p",
            text: "Álex tiene 14 años. En su juego, 1.000 gemas cuestan 9,99 €. La skin que quiere cuesta 1.200 gemas, y no venden paquetes más pequeños.",
          },
          {
            type: "list",
            items: [
              "Tiene que comprar dos paquetes: 2 × 9,99 € = 19,98 €.",
              "La skin «vale» 1.200 gemas, unos 11,99 €. Pero Álex paga 19,98 €.",
              "Le sobran 800 gemas, que le empujan a gastar más para aprovecharlas.",
            ],
          },
          { type: "calc", label: "Lo que paga de verdad", value: "2 × 9,99 € = 19,98 €" },
          {
            type: "p",
            text: "Esa misma semana le llega un WhatsApp desde un número desconocido: «Hola, soy Dani, se me ha roto el móvil y este es mi número nuevo. ¿Me haces un Bizum de 50 €? Es urgente». Álex llama al número de siempre de Dani. Dani no sabía nada: era una estafa.",
          },
        ],
      },
      keyFact:
        "Los paquetes de moneda virtual casi nunca coinciden con lo que cuestan los objetos. Por eso casi siempre acabas pagando más de lo que vale lo que quieres.",
      practice: {
        intro: "Primero, calcula cuánto pagas de verdad por un objeto de un juego. Después, decide si cada mensaje es una estafa.",
        widgets: ["gameCurrency", "scamOrNot"],
      },
      keyIdeas: [
        "Pagar en digital es gastar dinero real: revisa tus movimientos.",
        "Pasa las monedas de los juegos a euros antes de comprar.",
        "Prisa y petición de datos son señales de estafa: comprueba por otro canal.",
      ],
      questions: [
        {
          id: "1.5-q1",
          prompt:
            "En un juego, 500 monedas cuestan 4,99 €. El objeto que quieres cuesta 750 monedas y solo venden paquetes de 500. ¿Cuánto pagas de verdad?",
          options: ["9,98 €.", "7,49 €.", "4,99 €."],
          correct: 0,
          explanation:
            "Con un paquete no llegas, así que necesitas dos: 2 × 4,99 € = 9,98 €. Los 7,49 € serían el precio si pudieras comprar monedas sueltas.",
          hint: "¿Cuántos paquetes de 500 necesitas para llegar a 750?",
          facts: [],
        },
        {
          id: "1.5-q2",
          prompt:
            "Te llega un SMS: «Su cuenta será bloqueada hoy. Entre en este enlace para verificar sus datos». ¿Qué haces?",
          options: [
            "No pulsar el enlace y comprobarlo en la app o en el teléfono habitual del banco.",
            "Pulsar el enlace rápido, para que no te bloqueen.",
            "Contestar al SMS preguntando si es verdad.",
          ],
          correct: 0,
          explanation:
            "La prisa y el enlace son las dos señales de alarma. Si contestas, confirmas que tu número está activo. Compruébalo siempre por un canal que ya conocías.",
          hint: "Busca las dos señales de alarma del mensaje.",
          facts: [],
        },
        {
          id: "1.5-q3",
          prompt: "Un amigo te escribe desde un número nuevo y te pide un Bizum urgente. ¿Qué es lo más sensato?",
          options: ["Llamarle a su número de siempre antes de enviar nada.", "Enviarlo, porque es tu amigo.", "Enviar solo la mitad."],
          correct: 0,
          explanation:
            "La estafa del «número nuevo» funciona porque nadie lo comprueba. Una llamada al número de siempre lo aclara en un minuto.",
          hint: "¿Cómo puedes saber que de verdad es tu amigo?",
          facts: [],
        },
        {
          id: "1.5-q4",
          prompt: "¿Por qué es más fácil gastar de más con el móvil que con billetes?",
          options: [
            "Porque no ves salir el dinero y pagar es muy rápido.",
            "Porque los pagos con el móvil son más baratos.",
            "Porque el dinero digital no se acaba.",
          ],
          correct: 0,
          explanation:
            "Cuantos menos pasos tiene un pago, menos piensas antes de hacerlo. Por eso hay que revisar los movimientos.",
          hint: "Compara lo que notas al pagar con billetes y al pagar con el móvil.",
          facts: [],
        },
      ],
      challenge:
        "Revisa con tu familia los movimientos de la última semana de la tarjeta o la app que uses, o el historial de compras de tu juego. Suma lo gastado en compras pequeñas y compáralo con lo que creías haber gastado.",
    },
    {
      slug: "inflacion-e-interes-compuesto",
      number: "1.6",
      title: "El tiempo y el dinero: inflación e interés compuesto",
      minutes: 8,
      status: "published",
      objective:
        "Entender por qué el dinero guardado pierde poder de compra con la inflación y cómo funciona el interés compuesto, sabiendo que ninguna rentabilidad está garantizada.",
      facts: [],
      tool: "interes-compuesto",
      explanation: [
        {
          type: "p",
          text: "El dinero no solo se gasta o se guarda: con el tiempo, también cambia lo que vale. A veces a tu favor y a veces en tu contra.",
        },
        { type: "h", text: "Inflación" },
        {
          type: "concept",
          term: "Inflación",
          text: "La subida general de los precios con el tiempo. Si los precios suben, con el mismo dinero compras menos.",
        },
        {
          type: "p",
          text: "Lo que importa no es cuántos euros tienes, sino lo que puedes comprar con ellos. A eso se le llama poder adquisitivo.",
        },
        { type: "h", text: "Interés compuesto" },
        {
          type: "concept",
          term: "Interés",
          text: "Lo que te pagan por dejar tu dinero a otros, o lo que pagas tú cuando te prestan.",
        },
        {
          type: "p",
          text: "Con interés compuesto, los intereses se suman a lo que tenías y al año siguiente también generan intereses. Cuanto más tiempo pasa, más se nota. Y funciona igual con las deudas, pero en tu contra.",
        },
        { type: "h", text: "Rentabilidad y riesgo" },
        {
          type: "concept",
          term: "Rentabilidad",
          text: "Lo que ganas o pierdes con tu dinero, en porcentaje.",
        },
        {
          type: "p",
          text: "Una rentabilidad más alta casi siempre viene con más riesgo. Ninguna rentabilidad está garantizada: las inversiones pueden bajar, y puedes recuperar menos de lo que pusiste. Si alguien te promete ganancias altas y seguras, desconfía.",
        },
      ],
      example: {
        title: "Los 100 € de Sara",
        blocks: [
          {
            type: "p",
            text: "Sara guarda 100 € de su cumpleaños. Imagina que consigue un 5 % al año. Es una cifra inventada para el ejemplo: no es una previsión ni está garantizada.",
          },
          {
            type: "table",
            caption: "100 € al 5 % anual (ejemplo)",
            head: ["Año", "Interés simple", "Interés compuesto"],
            rows: [
              ["1", "105,00 €", "105,00 €"],
              ["2", "110,00 €", "110,25 €"],
              ["3", "115,00 €", "115,76 €"],
              ["10", "150,00 €", "162,89 €"],
              ["20", "200,00 €", "265,33 €"],
            ],
          },
          {
            type: "p",
            text: "Con interés simple, solo los 100 € del principio generan intereses. Con interés compuesto, también los intereses ya ganados. Al principio la diferencia son céntimos; con los años, pesa más que lo del principio.",
          },
          {
            type: "p",
            text: "Ahora, la inflación. Un bocadillo cuesta hoy 3 €. Si los precios subieran un 3 % al año (otra cifra inventada), dentro de 5 años costaría unos 3,48 €. Si Sara guarda sus 100 € en un cajón, seguirá teniendo 100 €, pero le alcanzarán para menos bocadillos.",
          },
          { type: "calc", label: "El bocadillo dentro de 5 años", value: "3 € × 1,03⁵ ≈ 3,48 €" },
        ],
      },
      keyFact:
        "Con interés compuesto, el tiempo pesa más que la cantidad. Pero el efecto también existe al revés: una inversión que baja, o una deuda que no pagas, también se acumula.",
      practice: {
        intro: "Prueba distintas cantidades, intereses y plazos. Es una simulación: ninguna rentabilidad está garantizada y las inversiones pueden bajar.",
        widgets: ["compound"],
      },
      keyIdeas: [
        "La inflación hace que el mismo dinero compre menos.",
        "Con interés compuesto, los intereses generan intereses: el tiempo es lo que más pesa.",
        "Más rentabilidad suele significar más riesgo. Nada está garantizado.",
      ],
      questions: [
        {
          id: "1.6-q1",
          prompt: "Tienes 50 € guardados en una caja durante años, y mientras tanto los precios suben. ¿Qué pasa?",
          options: [
            "Sigues teniendo 50 €, pero puedes comprar menos con ellos.",
            "Tus 50 € se convierten en más dinero.",
            "No pasa nada, porque no los has gastado.",
          ],
          correct: 0,
          explanation: "El número de euros no cambia, pero los precios sí. Por eso pierdes poder adquisitivo.",
          hint: "Piensa en lo que podrás comprar con esos 50 € cuando los precios hayan subido.",
          facts: [],
        },
        {
          id: "1.6-q2",
          prompt: "Pones 100 € a un 10 % anual con interés compuesto (cifra de ejemplo). ¿Cuánto tienes después de 2 años?",
          options: ["121 €.", "120 €.", "110 €."],
          correct: 0,
          explanation:
            "El primer año, 100 + 10 = 110 €. El segundo, el 10 % se calcula sobre 110 €: 110 + 11 = 121 €. 120 € sería con interés simple.",
          hint: "El segundo año, el 10 % se calcula sobre lo que tenías al acabar el primero.",
          facts: [],
        },
        {
          id: "1.6-q3",
          prompt: "Alguien en redes te ofrece «un 20 % al mes garantizado y sin riesgo». ¿Qué piensas?",
          options: [
            "Es una señal de alarma: no existen ganancias altas sin riesgo.",
            "Es una buena oportunidad si entras pronto.",
            "Es seguro si lo dice mucha gente.",
          ],
          correct: 0,
          explanation:
            "Rentabilidad alta y riesgo van juntos. Una promesa de ganancias altas y seguras es la marca típica de un fraude.",
          hint: "¿Qué suele venir con una rentabilidad alta?",
          facts: [],
        },
        {
          id: "1.6-q4",
          prompt: "¿Por qué empezar pronto importa tanto con el interés compuesto?",
          options: [
            "Porque los intereses tienen más tiempo para generar más intereses.",
            "Porque a los jóvenes les pagan más interés.",
            "Porque al principio no hay riesgo.",
          ],
          correct: 0,
          explanation: "El efecto crece con cada año que pasa. El riesgo, en cambio, existe a cualquier edad.",
          hint: "¿Qué hace crecer más el efecto del interés compuesto?",
          facts: [],
        },
      ],
      challenge:
        "Con la herramienta de interés compuesto, compara ahorrar 10 € al mes desde los 16 hasta los 36 años con hacerlo desde los 26 hasta los 36, con el mismo interés de ejemplo. Apunta la diferencia y explica con tus palabras por qué ocurre.",
    },
  ],
  assessment: {
    count: 10,
    passMark: 7,
    bank: [
      {
        id: "E1-01",
        lesson: "1.1",
        facts: [],
        prompt: "Sofía vende su patinete viejo por 40 € y con ese dinero compra entradas para un concierto. ¿Qué función del dinero ha usado?",
        correct: "Medio de cambio.",
        distractors: ["Unidad de cuenta.", "Depósito de valor."],
        explanation: "Ha usado el dinero para pasar de una cosa (el patinete) a otra (las entradas) sin hacer trueque.",
      },
      {
        id: "E1-02",
        lesson: "1.1",
        facts: [],
        prompt: "Una bolsa de cereales de 500 g cuesta 2,50 € y una de 750 g, 3,30 €. ¿Cuál sale más barata por kilo?",
        correct: "La de 750 g: 4,40 € el kilo frente a 5,00 €.",
        distractors: ["La de 500 g, porque cuesta menos.", "Las dos salen igual."],
        explanation: "2,50 ÷ 0,5 = 5,00 € el kilo y 3,30 ÷ 0,75 = 4,40 € el kilo. Hay que comparar con la misma medida.",
      },
      {
        id: "E1-03",
        lesson: "1.1",
        facts: [],
        prompt: "Guardas 30 € en un cajón para gastarlos en verano. ¿Qué función cumple ese dinero?",
        correct: "Depósito de valor.",
        distractors: ["Medio de cambio.", "Unidad de cuenta."],
        explanation: "Guardas el dinero ahora para usarlo más tarde.",
      },
      {
        id: "E1-04",
        lesson: "1.2",
        facts: [],
        prompt:
          "Tienes 20 €. Puedes ir con tu clase a un parque de atracciones (20 €) o comprar un juego (20 €). Eliges el juego. ¿Cuál es tu coste de oportunidad?",
        correct: "La excursión al parque con tu clase.",
        distractors: ["Los 20 € del juego.", "Nada, porque has gastado lo mismo."],
        explanation: "El coste de oportunidad es la alternativa a la que renuncias, no el precio.",
      },
      {
        id: "E1-05",
        lesson: "1.2",
        facts: [],
        prompt: "Ganas 6 € por hora paseando perros. Unos auriculares cuestan 45 €. ¿Cuántas horas de trabajo te cuestan?",
        correct: "7,5 horas.",
        distractors: ["6 horas.", "39 horas."],
        explanation: "45 ÷ 6 = 7,5. Para pasar un precio a horas, se divide entre lo que ganas por hora.",
      },
      {
        id: "E1-06",
        lesson: "1.6",
        facts: [],
        prompt: "Pones 200 € a un 10 % anual con interés compuesto (cifra de ejemplo). ¿Cuánto tienes después de 2 años?",
        correct: "242 €.",
        distractors: ["240 €.", "220 €."],
        explanation: "Año 1: 200 + 20 = 220 €. Año 2: 220 + 22 = 242 €. 240 € sería con interés simple.",
      },
      {
        id: "E1-07",
        lesson: "1.3",
        facts: [],
        prompt: "Recibes 80 € al mes y quieres ahorrar un 25 %. ¿Cuánto te queda para gastar?",
        correct: "60 €.",
        distractors: ["55 €.", "20 €."],
        explanation: "El 25 % de 80 € son 20 € de ahorro. Te quedan 80 − 20 = 60 €.",
      },
      {
        id: "E1-08",
        lesson: "1.3",
        facts: [],
        prompt: "Ingresas 50 € al mes, tus gastos fijos son 15 € y quieres ahorrar 10 €. ¿Cuánto puedes gastar en gastos variables?",
        correct: "25 €.",
        distractors: ["35 €.", "40 €."],
        explanation: "50 − 15 − 10 = 25 €. Se resta el ahorro antes de decidir los variables.",
      },
      {
        id: "E1-09",
        lesson: "1.3",
        facts: [],
        prompt: "Llevas tres meses gastando en salidas más de lo previsto. ¿Qué ajuste tiene más sentido?",
        correct: "Revisar y bajar ese gasto variable, o buscar más ingresos.",
        distractors: ["Dejar de ahorrar para siempre.", "Dejar de apuntar los gastos."],
        explanation: "Lo que más se puede ajustar son los gastos variables. Dejar de mirar no arregla el problema.",
      },
      {
        id: "E1-10",
        lesson: "1.4",
        facts: [],
        prompt: "Quieres juntar 300 €, ya tienes 60 € y te quedan 12 semanas. ¿Cuánto tienes que ahorrar cada semana?",
        correct: "20 €.",
        distractors: ["25 €.", "30 €."],
        explanation: "Faltan 300 − 60 = 240 €, y 240 ÷ 12 = 20 €.",
      },
      {
        id: "E1-11",
        lesson: "1.4",
        facts: [],
        prompt:
          "Se te rompe el móvil y tienes que pagar la reparación. Si tienes un fondo para imprevistos, ¿qué pasa con tu meta de ahorro?",
        correct: "Sigue intacta, porque pagas con el fondo.",
        distractors: ["Desaparece igualmente.", "Tienes que empezarla de cero."],
        explanation: "Para eso sirve el fondo: absorbe el golpe sin tocar el dinero de la meta.",
      },
      {
        id: "E1-12",
        lesson: "1.5",
        facts: [],
        prompt: "Una caja botín de un juego cuesta 2 € y puede darte un objeto raro. ¿Qué sabes seguro antes de comprarla?",
        correct: "Lo que vas a pagar, pero no lo que vas a recibir.",
        distractors: ["Que te tocará algo que vale más de 2 €.", "Que tarde o temprano te tocará el objeto raro."],
        explanation: "En una caja botín el premio es al azar. Solo el precio es seguro.",
      },
      {
        id: "E1-13",
        lesson: "1.5",
        facts: [],
        prompt:
          "Te llega un correo: has ganado un móvil y solo tienes que pagar 1,99 € de envío con tu tarjeta. ¿Qué es lo más probable?",
        correct: "Que sea una estafa para conseguir los datos de tu tarjeta.",
        distractors: ["Que sea un premio real.", "Que no pase nada por 1,99 €."],
        explanation:
          "Un premio que no has pedido y un pago pequeño para «liberarlo» son señales típicas de phishing. El objetivo son los datos de tu tarjeta.",
      },
      {
        id: "E1-14",
        lesson: "1.6",
        facts: [],
        prompt:
          "Los precios suben un 4 % en un año (cifra de ejemplo). Tus 100 € guardados en casa siguen siendo 100 €. ¿Qué ha pasado?",
        correct: "Puedes comprar menos cosas que antes.",
        distractors: ["Tienes más dinero que antes.", "Nada, porque el dinero no ha cambiado."],
        explanation: "Los euros son los mismos, pero tu poder adquisitivo ha bajado.",
      },
      {
        id: "E1-15",
        lesson: "1.6",
        facts: [],
        prompt: "Alguien te dice que, con su inversión, «en el peor de los casos ganarás un 8 %». ¿Qué es correcto?",
        correct: "Ninguna inversión con riesgo garantiza ganancias: podrías recuperar menos de lo que pusiste.",
        distractors: ["Es seguro, porque te dice el peor caso.", "Es seguro si la inversión es conocida."],
        explanation: "Las inversiones pueden bajar. Una garantía de ganancias altas es una señal de alarma.",
      },
    ],
  },
};
