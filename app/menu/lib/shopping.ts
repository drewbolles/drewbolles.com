import type { Aisle, Ingredient, WeekMenu } from "./types";

export type ShoppingGroup = { aisle: Aisle; items: Ingredient[] };

const AISLE_ORDER: Aisle[] = ["produce", "meat", "dairy", "frozen", "pantry"];

export function getShoppingList(week: WeekMenu): ShoppingGroup[] {
  const totals = new Map<string, Ingredient>();
  for (const day of week.days) {
    for (const meal of [day.breakfast, day.lunch, day.dinner]) {
      for (const ingredient of meal.ingredients) {
        const key = `${ingredient.name}|${ingredient.unit}`;
        const existing = totals.get(key);
        if (existing) {
          existing.quantity = Math.round((existing.quantity + ingredient.quantity) * 100) / 100;
        } else {
          totals.set(key, { ...ingredient });
        }
      }
    }
  }
  return AISLE_ORDER.map((aisle) => ({
    aisle,
    items: [...totals.values()]
      .filter((item) => item.aisle === aisle)
      .sort((a, b) => a.name.localeCompare(b.name)),
  })).filter((group) => group.items.length > 0);
}
