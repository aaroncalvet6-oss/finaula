/** Compound interest simulation with optional monthly contributions. */
export interface CompoundInput {
  initial: number;
  monthly: number;
  /** Annual rate as a fraction: 0.05 = 5 %. Can be 0 or negative. */
  annualRate: number;
  years: number;
}

export interface CompoundPoint {
  year: number;
  /** Money put in so far (initial + contributions). */
  contributed: number;
  /** Total value at the end of the year. */
  value: number;
  /** value − contributed (negative if the rate is negative). */
  interest: number;
}

export const MAX_YEARS = 60;

/** Monthly compounding; contributions at the end of each month. */
export function compoundSeries({ initial, monthly, annualRate, years }: CompoundInput): CompoundPoint[] {
  const safe = (n: number) => (Number.isFinite(n) ? n : 0);
  const p0 = Math.max(0, safe(initial));
  const m = Math.max(0, safe(monthly));
  const rate = Math.min(1, Math.max(-0.99, safe(annualRate)));
  const n = Math.min(MAX_YEARS, Math.max(0, Math.floor(safe(years))));
  const monthlyRate = (1 + rate) ** (1 / 12) - 1;

  const points: CompoundPoint[] = [{ year: 0, contributed: p0, value: p0, interest: 0 }];
  let value = p0;
  let contributed = p0;
  for (let year = 1; year <= n; year++) {
    for (let month = 0; month < 12; month++) {
      value = value * (1 + monthlyRate) + m;
      contributed += m;
    }
    points.push({ year, contributed: round2(contributed), value: round2(value), interest: round2(value - contributed) });
  }
  return points;
}

/** Yearly compounding of a single amount: amount × (1 + rate)^years. */
export function compoundAmount(amount: number, annualRate: number, years: number): number {
  return round2(amount * (1 + annualRate) ** years);
}

/** Simple interest of a single amount: interest only on the original amount. */
export function simpleAmount(amount: number, annualRate: number, years: number): number {
  return round2(amount * (1 + annualRate * years));
}

export function round2(n: number): number {
  return Math.round((n + Number.EPSILON) * 100) / 100;
}
