import type { MealVariant } from "../lib/types";

const mealLabels = {
  breakfast: "Breakfast",
  lunch: "Lunch",
  dinner: "Dinner",
} as const;

type Props = {
  slot: keyof typeof mealLabels;
  meal: MealVariant;
};

export function MealDetails({ slot, meal }: Props) {
  return (
    <details className="group border border-border rounded bg-surface">
      <summary className="flex flex-col gap-1 px-4 py-3 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <span className="font-mono text-[10px] text-muted-light uppercase tracking-wide">
          {mealLabels[slot]}
        </span>
        <span className="text-sm font-medium text-foreground">
          {meal.name}
        </span>
        <span className="font-mono text-xs text-muted">
          {meal.macros.kcal} kcal · {meal.macros.protein}g P
        </span>
      </summary>
      <div className="flex flex-col gap-4 px-4 pb-4 pt-1 border-t border-border">
        <div className="flex gap-4 font-mono text-xs text-muted">
          <span>{meal.macros.carbs}g carbs</span>
          <span>{meal.macros.fat}g fat</span>
        </div>
        <ul className="flex flex-col gap-1">
          {meal.ingredients.map((ingredient) => (
            <li
              key={`${ingredient.name}-${ingredient.unit}`}
              className="text-sm text-foreground-muted"
            >
              {ingredient.quantity} {ingredient.unit} {ingredient.name}
            </li>
          ))}
        </ul>
        {meal.seasonings && meal.seasonings.length > 0 && (
          <p className="text-xs text-muted leading-relaxed">
            <span className="font-mono uppercase tracking-wide text-[10px] text-muted-light">
              Seasonings:{" "}
            </span>
            {meal.seasonings.join(", ")}
          </p>
        )}
        <ol className="flex flex-col gap-2 list-decimal list-inside">
          {meal.steps.map((step) => (
            <li key={step} className="text-sm text-foreground-muted leading-relaxed">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </details>
  );
}
