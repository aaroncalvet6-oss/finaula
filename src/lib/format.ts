/** Spanish number formatting helpers. */

const euro0 = new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
const euro2 = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const number1 = new Intl.NumberFormat("es-ES", { maximumFractionDigits: 1 });
const number2 = new Intl.NumberFormat("es-ES", { maximumFractionDigits: 2 });

/** 25 → "25 €"; 2.5 → "2,50 €" (decimals only when needed). */
export function formatEuro(value: number): string {
  return Number.isInteger(value) ? euro0.format(value) : euro2.format(value);
}

/** Always two decimals: 162.889 → "162,89 €". */
export function formatEuroCents(value: number): string {
  return euro2.format(value);
}

export function formatNumber(value: number, decimals: 1 | 2 = 1): string {
  return (decimals === 1 ? number1 : number2).format(value);
}

export function formatPercent(value: number): string {
  // Non-breaking space so "%" never wraps away from the number.
  return `${number1.format(value)}\u00a0%`;
}
