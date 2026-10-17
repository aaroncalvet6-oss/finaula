import { ChoiceCard } from "./Choice";

const messages = [
  {
    text: "SMS: «Su cuenta ha sido bloqueada por seguridad. Verifique sus datos aquí: enlace».",
    correct: 0,
    explanation: "Prisa, miedo y un enlace para meter datos: las tres señales del smishing.",
  },
  {
    text: "Tu madre te escribe desde su número de siempre: «¿Te recojo a las 8 en la puerta del instituto?».",
    correct: 1,
    explanation: "Es un número conocido y no te pide ni dinero ni datos.",
  },
  {
    text: "Correo: «¡Has ganado un móvil! Solo paga 1,99 € de envío con tu tarjeta».",
    correct: 0,
    explanation: "Un premio que no has pedido y un pago pequeño para conseguir los datos de tu tarjeta.",
  },
  {
    text: "WhatsApp de un número nuevo: «Soy Dani, he cambiado de móvil. Hazme un Bizum de 50 €, es urgente».",
    correct: 0,
    explanation: "La estafa del «número nuevo». Llama al número de siempre antes de enviar nada.",
  },
  {
    text: "La app de tu juego, dentro del propio juego, te avisa de que la tienda tiene ofertas este fin de semana.",
    correct: 1,
    explanation: "No es una estafa, aunque sí publicidad: pasa el precio a euros antes de comprar nada.",
  },
  {
    text: "DM en redes: «Gana 500 € a la semana desde casa. Solo necesitas prestarnos tu cuenta para recibir pagos».",
    correct: 0,
    explanation: "Nadie te paga por prestar tu cuenta. Es una forma de usarte para mover dinero de otros.",
  },
] as const;

export function ScamOrNot() {
  return (
    <ol className="space-y-3">
      {messages.map((m, i) => (
        <ChoiceCard
          key={m.text}
          index={i}
          text={m.text}
          options={["Es una estafa", "Parece normal"]}
          correct={m.correct}
          explanation={m.explanation}
        />
      ))}
    </ol>
  );
}
