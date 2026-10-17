/** How many hours of work a price represents at a given hourly rate. */
export interface WorkHoursResult {
  /** Decimal hours, e.g. 2.5 */
  hours: number;
  /** Whole hours and remaining minutes, e.g. { h: 2, min: 30 } */
  h: number;
  min: number;
}

export function workHours(price: number, hourlyRate: number): WorkHoursResult | null {
  if (!Number.isFinite(price) || !Number.isFinite(hourlyRate)) return null;
  if (price < 0 || hourlyRate <= 0) return null;
  const hours = price / hourlyRate;
  let h = Math.floor(hours);
  let min = Math.round((hours - h) * 60);
  if (min === 60) {
    h += 1;
    min = 0;
  }
  return { hours, h, min };
}
