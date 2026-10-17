/** Seeded randomness for assessments: random per attempt, reproducible in tests. */

/** mulberry32 PRNG: returns a function producing floats in [0, 1). */
export function seededRandom(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Fisher–Yates shuffle (returns a new array). */
export function shuffle<T>(items: ReadonlyArray<T>, random: () => number): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export interface BankQuestion {
  id: string;
  prompt: string;
  correct: string;
  distractors: ReadonlyArray<string>;
}

export interface DrawnQuestion<Q extends BankQuestion> {
  question: Q;
  /** Options in display order. */
  options: string[];
  /** Index of the correct option in `options`. */
  correctIndex: number;
}

/** Picks `count` questions at random and shuffles each one's options. */
export function drawAttempt<Q extends BankQuestion>(bank: ReadonlyArray<Q>, count: number, seed: number): DrawnQuestion<Q>[] {
  if (count > bank.length) throw new Error(`Bank has ${bank.length} questions, ${count} requested`);
  const random = seededRandom(seed);
  return shuffle(bank, random)
    .slice(0, count)
    .map((question) => {
      const options = shuffle([question.correct, ...question.distractors], random);
      return { question, options, correctIndex: options.indexOf(question.correct) };
    });
}

export function score(drawn: ReadonlyArray<{ correctIndex: number }>, answers: ReadonlyArray<number | null>): number {
  return drawn.reduce((s, d, i) => s + (answers[i] === d.correctIndex ? 1 : 0), 0);
}
