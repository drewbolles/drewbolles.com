import type { MealVariant } from "../lib/types";

export const breakfast = {
  id: "b-eggs-smoothie",
  name: "Eggs + power smoothie",
  protein: "eggs",
  ingredients: [
    { name: "large eggs", quantity: 3, unit: "", aisle: "dairy" },
    { name: "whey protein", quantity: 1.5, unit: "scoop", aisle: "pantry" },
    { name: "skim milk", quantity: 1, unit: "cup", aisle: "dairy" },
    { name: "banana", quantity: 0.5, unit: "", aisle: "produce" },
    { name: "frozen mixed berries", quantity: 0.5, unit: "cup", aisle: "frozen" },
    { name: "honey", quantity: 1, unit: "tbsp", aisle: "pantry" },
    { name: "baby spinach", quantity: 1, unit: "cup", aisle: "produce" },
  ],
  seasonings: ["kosher salt", "black pepper", "hot sauce (optional)"],
  steps: [
    "Blend the milk, whey protein, banana, berries, spinach, and honey until smooth and a bit thin — easier to drink in the morning. If it looks thick or spoonable, splash in a little more milk (or cold water) and blend again until it pours easily; pour into a glass and set aside.",
    "Crack the eggs into a bowl, season with kosher salt and black pepper, and whisk until fully combined.",
    "Warm a nonstick pan over low-medium heat with a light coat of cooking spray.",
    "Pour in the eggs and stir gently and continuously with a spatula, scraping the curds as they form.",
    "Pull the eggs off the heat while they still look slightly glossy and wet — they'll finish cooking from residual heat for a soft scramble. Finish with hot sauce if you like heat.",
  ],
  macros: { kcal: 640, protein: 65, carbs: 58, fat: 18 },
} satisfies MealVariant;
