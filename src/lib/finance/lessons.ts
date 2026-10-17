import { round2 } from "./compound";

/** Price per unit (e.g. per can or per kilo). */
export function unitPrice(price: number, units: number): number | null {
  if (!(units > 0) || !(price >= 0)) return null;
  return price / units;
}

/** Real cost of an in-game item when currency is only sold in fixed packs. */
export function packCost(itemCost: number, packSize: number, packPrice: number) {
  if (!(packSize > 0) || !(itemCost >= 0) || !(packPrice >= 0)) return null;
  const packs = Math.ceil(itemCost / packSize);
  return {
    packs,
    paid: round2(packs * packPrice),
    fairPrice: round2((itemCost * packPrice) / packSize),
    leftover: packs * packSize - itemCost,
  };
}

/** Yearly gross from a monthly gross and number of payments (12 or 14). */
export function annualGross(monthly: number, payments: number): number {
  return round2(Math.max(0, monthly) * Math.max(0, payments));
}

export interface Bracket {
  /** Upper limit of the bracket; Infinity for the last one. */
  upTo: number;
  rate: number;
}

/** Progressive tax: each rate applies only to the part of income inside its bracket. */
export function progressiveTax(income: number, brackets: ReadonlyArray<Bracket>) {
  let remaining = Math.max(0, income);
  let lower = 0;
  let total = 0;
  const parts: { from: number; to: number; amount: number; rate: number; tax: number }[] = [];
  for (const b of brackets) {
    if (remaining <= 0) break;
    const size = b.upTo - lower;
    const amount = Math.min(remaining, size);
    const tax = amount * b.rate;
    parts.push({ from: lower, to: lower + amount, amount, rate: b.rate, tax: round2(tax) });
    total += tax;
    remaining -= amount;
    lower = b.upTo;
  }
  const t = round2(total);
  return { total: t, parts, averageRate: income > 0 ? t / income : 0 };
}

/** Annual return result: positive = to pay, negative = refund. */
export function taxReturnResult(taxDue: number, withheld: number) {
  const diff = round2(Math.max(0, taxDue) - Math.max(0, withheld));
  return { diff, outcome: diff > 0 ? "pagar" : diff < 0 ? "devolver" : "cero" } as const;
}

/** Price after `years` of constant inflation. */
export function priceWithInflation(price: number, rate: number, years: number): number {
  return round2(price * (1 + rate) ** years);
}
