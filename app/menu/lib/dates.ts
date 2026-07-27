export const TIMEZONE = "America/New_York";

export function todayInTimeZone(now: Date, timeZone: string): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

function toUTCDate(isoDate: string): Date {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

export function getWeekStart(isoDate: string): string {
  const date = toUTCDate(isoDate);
  const dayNum = date.getUTCDay() || 7; // Mon=1 .. Sun=7
  date.setUTCDate(date.getUTCDate() - (dayNum - 1));
  return date.toISOString().slice(0, 10);
}

export function addDays(isoDate: string, days: number): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day + days))
    .toISOString()
    .slice(0, 10);
}

const dayLabelFormatter = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});

export function formatDayLabel(isoDate: string): string {
  return dayLabelFormatter.format(new Date(`${isoDate}T00:00:00Z`));
}

export function getISOWeek(isoDate: string): { year: number; week: number } {
  const date = toUTCDate(isoDate);
  const dayNum = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - dayNum);
  const isoYear = date.getUTCFullYear();
  const yearStart = new Date(Date.UTC(isoYear, 0, 1));
  const week = Math.ceil(
    ((date.getTime() - yearStart.getTime()) / 86400000 + 1) / 7,
  );
  return { year: isoYear, week };
}
