import { describe, expect, it } from "vitest";
import { getShoppingList } from "./shopping";
import type { MealVariant, WeekMenu } from "./types";

function meal(id: string, ingredients: MealVariant["ingredients"]): MealVariant {
  return {
    id,
    name: id,
    protein: "chicken",
    ingredients,
    steps: [],
    macros: { kcal: 600, protein: 60, carbs: 20, fat: 25 },
  };
}

const chickenMeal = meal("m1", [
  { name: "chicken breast", quantity: 200, unit: "g cooked", aisle: "meat" },
  { name: "olive oil", quantity: 1, unit: "tbsp", aisle: "pantry" },
]);
const eggMeal = meal("m2", [
  { name: "large eggs", quantity: 3, unit: "eggs", aisle: "dairy" },
  { name: "olive oil", quantity: 0.5, unit: "tbsp", aisle: "pantry" },
]);

const week: WeekMenu = {
  weekStart: "2026-07-27",
  days: [
    { date: "2026-07-27", breakfast: eggMeal, lunch: chickenMeal, dinner: chickenMeal },
    { date: "2026-07-28", breakfast: eggMeal, lunch: chickenMeal, dinner: chickenMeal },
  ],
};

describe("getShoppingList", () => {
  it("sums duplicate ingredients across the week", () => {
    const groups = getShoppingList(week);
    const pantry = groups.find((g) => g.aisle === "pantry");
    expect(pantry?.items).toEqual([
      { name: "olive oil", quantity: 5, unit: "tbsp", aisle: "pantry" },
    ]);
    const meat = groups.find((g) => g.aisle === "meat");
    expect(meat?.items).toEqual([
      { name: "chicken breast", quantity: 800, unit: "g cooked", aisle: "meat" },
    ]);
  });

  it("counts breakfast every day", () => {
    const dairy = getShoppingList(week).find((g) => g.aisle === "dairy");
    expect(dairy?.items).toEqual([
      { name: "large eggs", quantity: 6, unit: "eggs", aisle: "dairy" },
    ]);
  });

  it("omits empty aisles and orders groups for the store walk", () => {
    const groups = getShoppingList(week);
    expect(groups.map((g) => g.aisle)).toEqual(["meat", "dairy", "pantry"]);
  });
});
