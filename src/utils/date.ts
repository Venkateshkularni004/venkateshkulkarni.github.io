/**
 * Returns the number of years between the given date and the present.
 * 
 * @param date - The date to compare against.
 */
export function getYears(date: Date): number {
  const diff = new Date().getTime() - date.getTime();
  const milliseconds = 1000 * 60 * 60 * 24 * 365.25; // Accounting for leap years
  return Math.floor(diff / milliseconds);
}