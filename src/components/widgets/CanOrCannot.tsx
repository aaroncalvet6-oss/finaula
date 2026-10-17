import { ChoiceCard } from "./Choice";

const cases = [
  {
    text: "Nora, 15 años, quiere trabajar este verano reponiendo en un supermercado.",
    correct: 1,
    explanation: "La edad general para trabajar es 16 años.",
  },
  {
    text: "Iker, 16 años, no emancipado, firma con el permiso de sus padres un contrato de mañanas en una tienda.",
    correct: 0,
    explanation: "Con 16 y 17 años se puede, con el consentimiento de los padres o tutores.",
  },
  {
    text: "Sara, 17 años, acepta cerrar un bar a las 2 de la madrugada los fines de semana.",
    correct: 1,
    explanation: "Los menores de 18 no pueden trabajar de noche.",
  },
  {
    text: "Hugo, 17 años, trabaja 5 horas seguidas y su jefe le dice que no hay descanso.",
    correct: 1,
    explanation: "Si la jornada seguida pasa de 4 horas y media, tiene derecho a un descanso de al menos 30 minutos.",
  },
  {
    text: "Lucía, 16 años, con permiso de sus padres, trabaja 4 horas al día en una heladería con contrato y alta.",
    correct: 0,
    explanation: "Edad, permiso, horario y alta en regla.",
  },
] as const;

export function CanOrCannot() {
  return (
    <ol className="space-y-3">
      {cases.map((c, i) => (
        <ChoiceCard
          key={c.text}
          index={i}
          text={c.text}
          options={["Es legal", "No es legal"]}
          correct={c.correct}
          explanation={c.explanation}
        />
      ))}
    </ol>
  );
}
