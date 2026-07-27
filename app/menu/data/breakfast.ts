import type { MealVariant } from "../lib/types";

export const breakfast = {
  id: "b-eggs-smoothie",
  name: "Eggs + power smoothie",
  protein: "eggs",
  ingredients: [
    { name: "large eggs", quantity: 3, unit: "eggs", aisle: "dairy" },
    { name: "whey protein", quantity: 1.5, unit: "scoops", aisle: "pantry" },
    { name: "skim milk", quantity: 1, unit: "cup", aisle: "dairy" },
    { name: "banana", quantity: 0.5, unit: "banana", aisle: "produce" },
    { name: "frozen mixed berries", quantity: 0.5, unit: "cup", aisle: "frozen" },
    { name: "honey", quantity: 1, unit: "tbsp", aisle: "pantry" },
    { name: "baby spinach", quantity: 1, unit: "cup", aisle: "produce" },
  ],
  steps: [
    "Scramble or fry 3 eggs in a nonstick pan with cooking spray.",
    "Blend milk, whey, banana, berries, spinach, and honey until smooth.",
  ],
  macros: { kcal: 640, protein: 65, carbs: 58, fat: 18 },
} satisfies MealVariant;
