import { describe, expect, it } from "vitest";
import { addDays } from "../lib/dates";
import { getWeekMenu } from "../lib/rotation";
import { MACRO_BANDS } from "../lib/types";
import type { MacroBand, MealVariant } from "../lib/types";
import { pools } from "./pools";

const STARCH_PATTERN =
  /\b(rice|potato|potatoes|wheat|bread|pasta|croutons?|chickpeas?|flour|oats?|noodles?)\b/i;

function expectInBand(variant: MealVariant, band: MacroBand) {
  const { kcal, protein, carbs } = variant.macros;
  expect(kcal, `${variant.id} kcal`).toBeGreaterThanOrEqual(band.kcal[0]);
  expect(kcal, `${variant.id} kcal`).toBeLessThanOrEqual(band.kcal[1]);
  const roundedProtein = Math.round(protein);
  expect(roundedProtein, `${variant.id} protein`).toBeGreaterThanOrEqual(
    band.protein[0],
  );
  expect(roundedProtein, `${variant.id} protein`).toBeLessThanOrEqual(
    band.protein[1],
  );
  const roundedCarbs = Math.round(carbs);
  expect(roundedCarbs, `${variant.id} carbs`).toBeGreaterThanOrEqual(
    band.carbs[0],
  );
  expect(roundedCarbs, `${variant.id} carbs`).toBeLessThanOrEqual(band.carbs[1]);
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

  it("per-meal bands sum to the daily targets", () => {
    const meals = [
      MACRO_BANDS.breakfast,
      MACRO_BANDS.lunch,
      MACRO_BANDS.dinner,
    ] as const;
    const kcalMin = meals.reduce((sum, band) => sum + band.kcal[0], 0);
    const kcalMax = meals.reduce((sum, band) => sum + band.kcal[1], 0);
    const proteinMin = meals.reduce((sum, band) => sum + band.protein[0], 0);
    const proteinMax = meals.reduce((sum, band) => sum + band.protein[1], 0);
    const carbsMin = meals.reduce((sum, band) => sum + band.carbs[0], 0);
    const carbsMax = meals.reduce((sum, band) => sum + band.carbs[1], 0);
    expect(kcalMin).toBe(2000);
    expect(kcalMax).toBe(2300);
    expect(proteinMin).toBe(180);
    expect(proteinMax).toBe(210);
    expect(carbsMin).toBe(70);
    expect(carbsMax).toBe(100);
  });

  it("pools have enough protein diversity for the constraints", () => {
    const lunchProteins = new Set(pools.lunches.map((v) => v.protein));
    const dinnerProteins = new Set(pools.dinners.map((v) => v.protein));
    expect(lunchProteins.size).toBeGreaterThanOrEqual(4);
    expect(dinnerProteins.size).toBeGreaterThanOrEqual(4);
  });

  it("meals contain no rice, wheat, or starch staples", () => {
    const variants = [pools.breakfast, ...pools.lunches, ...pools.dinners];
    for (const variant of variants) {
      for (const ingredient of variant.ingredients) {
        expect(
          ingredient.name,
          `${variant.id} ${ingredient.name}`,
        ).not.toMatch(STARCH_PATTERN);
      }
    }
  });

  it("cooked vegetable sides use the frozen aisle (not produce)", () => {
    const frozenSides = [
      "frozen broccoli",
      "frozen green beans",
      "frozen asparagus",
      "frozen stir-fry vegetables",
    ];
    for (const dinner of pools.dinners) {
      for (const ingredient of dinner.ingredients) {
        if (frozenSides.includes(ingredient.name)) {
          expect(ingredient.aisle, `${dinner.id} ${ingredient.name}`).toBe(
            "frozen",
          );
        }
      }
    }
  });

  it("dinner vegetable sides never steam or boil as the cook method", () => {
    for (const dinner of pools.dinners) {
      for (const step of dinner.steps) {
        expect(step, `${dinner.id} step`).not.toMatch(/\b(Steam|Boil) the\b/);
      }
    }
  });

  it("real pools satisfy rotation constraints across 200 weeks", () => {
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
      weekStart = addDays(weekStart, 7);
    }
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
