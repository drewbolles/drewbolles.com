import { describe, expect, it } from "vitest";
import { MACRO_BANDS } from "../lib/types";
import type { MacroBand, MealVariant } from "../lib/types";
import { pools } from "./pools";

function expectInBand(variant: MealVariant, band: MacroBand) {
  const { kcal, protein } = variant.macros;
  expect(kcal, `${variant.id} kcal`).toBeGreaterThanOrEqual(band.kcal[0]);
  expect(kcal, `${variant.id} kcal`).toBeLessThanOrEqual(band.kcal[1]);
  const roundedProtein = Math.round(protein);
  expect(roundedProtein, `${variant.id} protein`).toBeGreaterThanOrEqual(
    band.protein[0],
  );
  expect(roundedProtein, `${variant.id} protein`).toBeLessThanOrEqual(
    band.protein[1],
  );
}

describe("macro bands", () => {
  it("breakfast is in band", () => {
    expectInBand(pools.breakfast, MACRO_BANDS.breakfast);
  });

  it("every lunch is in band", () => {
    expect(pools.lunches.length).toBeGreaterThanOrEqual(8);
    for (const lunch of pools.lunches) {
      expectInBand(lunch, MACRO_BANDS.lunch);
    }
  });

  it("every dinner is in band", () => {
    expect(pools.dinners.length).toBeGreaterThanOrEqual(8);
    for (const dinner of pools.dinners) {
      expectInBand(dinner, MACRO_BANDS.dinner);
    }
  });

  it("pools have enough protein diversity for the constraints", () => {
    const lunchProteins = new Set(pools.lunches.map((v) => v.protein));
    const dinnerProteins = new Set(pools.dinners.map((v) => v.protein));
    expect(lunchProteins.size).toBeGreaterThanOrEqual(4);
    expect(dinnerProteins.size).toBeGreaterThanOrEqual(4);
  });

  it("variant ids are unique", () => {
    const ids = [
      pools.breakfast.id,
      ...pools.lunches.map((v) => v.id),
      ...pools.dinners.map((v) => v.id),
    ];
    expect(new Set(ids).size).toBe(ids.length);
  });
});
