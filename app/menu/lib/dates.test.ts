import { describe, expect, it } from "vitest";
import {
  addDays,
  formatDayLabel,
  getISOWeek,
  getWeekStart,
  todayInTimeZone,
} from "./dates";

describe("todayInTimeZone", () => {
  it("returns the date in the given timezone, not UTC", () => {
    // 2026-07-28T03:00 UTC is still 2026-07-27 in New York (UTC-4)
    const now = new Date("2026-07-28T03:00:00Z");
    expect(todayInTimeZone(now, "America/New_York")).toBe("2026-07-27");
    expect(todayInTimeZone(now, "UTC")).toBe("2026-07-28");
  });
});

describe("getWeekStart", () => {
  it("returns the Monday of the week", () => {
    expect(getWeekStart("2026-07-27")).toBe("2026-07-27"); // a Monday
    expect(getWeekStart("2026-07-30")).toBe("2026-07-27"); // Thursday
    expect(getWeekStart("2026-08-02")).toBe("2026-07-27"); // Sunday
  });
});

describe("addDays", () => {
  it("adds days across month boundaries", () => {
    expect(addDays("2026-07-27", 6)).toBe("2026-08-02");
    expect(addDays("2026-07-27", 7)).toBe("2026-08-03");
  });
});

describe("getISOWeek", () => {
  it("computes ISO week numbers", () => {
    expect(getISOWeek("2026-07-27")).toEqual({ year: 2026, week: 31 });
    // ISO edge: Jan 1 2027 is a Friday, belongs to 2026-W53
    expect(getISOWeek("2027-01-01")).toEqual({ year: 2026, week: 53 });
  });

  it("gives consecutive weeks different values", () => {
    expect(getISOWeek("2026-07-27")).not.toEqual(getISOWeek("2026-08-03"));
  });
});

describe("formatDayLabel", () => {
  it("formats an ISO date as a weekday + month + day label", () => {
    expect(formatDayLabel("2026-07-27")).toBe("Monday, Jul 27");
  });
});
