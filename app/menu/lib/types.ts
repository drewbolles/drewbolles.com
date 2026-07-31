export type Aisle = "produce" | "meat" | "dairy" | "pantry" | "frozen";

export type Protein = "chicken" | "beef" | "salmon" | "tuna" | "eggs";

export type Ingredient = {
  name: string;
  quantity: number;
  unit: string;
  aisle: Aisle;
};

export type Macros = {
  kcal: number;
  protein: number;
  carbs: number;
  fat: number;
};

export type MealVariant = {
  id: string;
  name: string;
  protein: Protein;
  ingredients: Ingredient[];
  seasonings?: string[];
  steps: string[];
  macros: Macros;
};

export type Pools = {
  breakfast: MealVariant;
  lunches: MealVariant[];
  dinners: MealVariant[];
};

export type DayMenu = {
  date: string;
  breakfast: MealVariant;
  lunch: MealVariant;
  dinner: MealVariant;
};

export type WeekMenu = {
  weekStart: string;
  days: DayMenu[];
};

export type WeekOverrides = Record<
  string,
  { lunch?: string; dinner?: string }
>;

export type MacroBand = {
  kcal: [number, number];
  protein: [number, number];
};

export const MACRO_BANDS = {
  breakfast: { kcal: [550, 650], protein: [55, 65] },
  lunch: { kcal: [600, 700], protein: [60, 70] },
  dinner: { kcal: [850, 950], protein: [65, 75] },
} satisfies Record<string, MacroBand>;
