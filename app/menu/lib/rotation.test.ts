import { describe, expect, it } from "vitest";
import { getDayTotals, getWeekMenu } from "./rotation";
import type { MealVariant, Pools, Protein } from "./types";

function variant(id: string, protein: Protein): MealVariant {
  return {
    id,
    name: id,
    protein,
    ingredients: [],
    steps: [],
    macros: { kcal: 600, protein: 60, carbs: 20, fat: 25 },
  };
}

const pools: Pools = {
  breakfast: variant("breakfast", "eggs"),
  lunches: [
    variant("l-chicken-1", "chicken"),
    variant("l-turkey", "turkey"),
    variant("l-beef", "beef"),
    variant("l-salmon", "salmon"),
    variant("l-shrimp", "shrimp"),
    variant("l-tuna", "tuna"),
    variant("l-chicken-2", "chicken"),
    variant("l-chicken-3", "chicken"),
  ],
  dinners: [
    variant("d-beef-1", "beef"),
    variant("d-chicken", "chicken"),
    variant("d-lamb", "lamb"),
    variant("d-salmon", "salmon"),
    variant("d-turkey", "turkey"),
    variant("d-beef-2", "beef"),
    variant("d-shrimp", "shrimp"),
    variant("d-beef-3", "beef"),
  ],
};

describe("getWeekMenu", () => {
  it("is deterministic for the same week", () => {
    const a = getWeekMenu("2026-07-27", pools);
    const b = getWeekMenu("2026-07-27", pools);
    expect(a).toEqual(b);
  });

  it("differs between weeks", () => {
    const a = getWeekMenu("2026-07-27", pools);
    const b = getWeekMenu("2026-08-03", pools);
    const aIds = a.days.map((d) => `${d.lunch.id}/${d.dinner.id}`);
    const bIds = b.days.map((d) => `${d.lunch.id}/${d.dinner.id}`);
    expect(aIds).not.toEqual(bIds);
  });

  it("returns 7 days with correct dates and fixed breakfast", () => {
    const week = getWeekMenu("2026-07-27", pools);
    expect(week.days).toHaveLength(7);
    expect(week.days[0].date).toBe("2026-07-27");
    expect(week.days[6].date).toBe("2026-08-02");
    for (const day of week.days) {
      expect(day.breakfast.id).toBe("breakfast");
    }
  });

  it("holds protein constraints across 200 weeks", () => {
    let weekStart = "2026-01-05";
    for (let i = 0; i < 200; i++) {
      const week = getWeekMenu(weekStart, pools);
      for (let d = 0; d < 7; d++) {
        const day = week.days[d];
        expect(day.lunch.protein).not.toBe(day.dinner.protein);
        if (d > 0) {
          const prev = week.days[d - 1];
          expect(day.lunch.protein).not.toBe(prev.lunch.protein);
          expect(day.dinner.protein).not.toBe(prev.dinner.protein);
        }
      }
      weekStart = addDaysForTest(weekStart, 7);
    }
  });

  it("applies overrides by date", () => {
    const week = getWeekMenu("2026-07-27", pools, {
      "2026-07-29": { lunch: "l-tuna", dinner: "d-lamb" },
    });
    const wednesday = week.days[2];
    expect(wednesday.lunch.id).toBe("l-tuna");
    expect(wednesday.dinner.id).toBe("d-lamb");
  });

  it("ignores overrides with unknown ids", () => {
    const plain = getWeekMenu("2026-07-27", pools);
    const overridden = getWeekMenu("2026-07-27", pools, {
      "2026-07-29": { lunch: "does-not-exist" },
    });
    expect(overridden).toEqual(plain);
  });

  it("throws a descriptive error when a pool lacks protein diversity", () => {
    const lowDiversity: Pools = {
      breakfast: pools.breakfast,
      lunches: [variant("l-a", "beef"), variant("l-b", "beef")],
      dinners: [variant("d-a", "beef"), variant("d-b", "beef")],
    };
    expect(() => getWeekMenu("2026-07-27", lowDiversity)).toThrow(
      /cannot satisfy rotation constraints/,
    );
  });

  it("fish appears on Friday and only on Friday", () => {
    const fishProteins = ["salmon", "tuna", "shrimp"];
    let weekStart = "2026-01-05";
    for (let i = 0; i < 100; i++) {
      const week = getWeekMenu(weekStart, pools);
      for (let d = 0; d < 7; d++) {
        const day = week.days[d];
        if (d === 4) {
          expect(fishProteins).toContain(day.lunch.protein);
          expect(fishProteins).toContain(day.dinner.protein);
        } else {
          expect(fishProteins).not.toContain(day.lunch.protein);
          expect(fishProteins).not.toContain(day.dinner.protein);
        }
      }
      weekStart = addDaysForTest(weekStart, 7);
    }
  });
});

describe("getDayTotals", () => {
  it("sums all three meals", () => {
    const week = getWeekMenu("2026-07-27", pools);
    const totals = getDayTotals(week.days[0]);
    expect(totals).toEqual({ kcal: 1800, protein: 180, carbs: 60, fat: 75 });
  });
});

function addDaysForTest(isoDate: string, days: number): string {
  const [y, m, d] = isoDate.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d + days)).toISOString().slice(0, 10);
}
