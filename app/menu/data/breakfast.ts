import type { MealVariant } from "../lib/types";

export const breakfast = {
  id: "b-eggs-smoothie",
  name: "Eggs + berry smoothie",
  protein: "eggs",
  ingredients: [
    { name: "large eggs", quantity: 3, unit: "", aisle: "dairy" },
    { name: "butter", quantity: 2, unit: "tsp", aisle: "dairy" },
    { name: "whey protein", quantity: 1.5, unit: "scoop", aisle: "pantry" },
    { name: "whole milk", quantity: 0.75, unit: "cup", aisle: "dairy" },
    { name: "frozen mixed berries", quantity: 0.75, unit: "cup", aisle: "frozen" },
    { name: "baby spinach", quantity: 1, unit: "cup", aisle: "produce" },
  ],
  seasonings: [
    "kosher salt (¼ tsp)",
    "black pepper (⅛ tsp)",
    "hot sauce (optional)",
  ],
  steps: [
    "Blend the milk, whey protein, berries, and spinach until smooth and a bit thin — easier to drink in the morning. If it looks thick or spoonable, splash in a little more milk (or cold water) and blend again until it pours easily; pour into a glass and set aside.",
    "Crack the eggs into a bowl, season with the salt and pepper, and whisk until fully combined.",
    "Melt the butter in a nonstick pan over low-medium heat until it foams.",
    "Pour in the eggs and stir gently and continuously with a spatula, scraping the curds as they form.",
    "Pull the eggs off the heat while they still look slightly glossy and wet — they'll finish cooking from residual heat for a soft scramble. Finish with hot sauce if you like heat.",
  ],
  macros: { kcal: 637, protein: 63, carbs: 29, fat: 32 },
} satisfies MealVariant;
