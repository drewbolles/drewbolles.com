# Menu — design spec

**Date:** 2026-07-27
**Route:** drewbolles.com/menu
**Status:** Approved pending review

## Purpose

Replace the printed daily menu on the fridge. A public page that shows this week's
breakfast/lunch/dinner for Drew, rotates lunch and dinner so the cooking stays
interesting, keeps every day inside cut macros, and produces a weekly shopping list.

## Goals and targets

- Goal: cut from 220 lb to 195–200 lb (~12–15% BF) at 6'0", lifting 3x/week, ~10k steps/day.
- Daily target: **2,000–2,300 kcal, 180–210 g protein**. Fixed in data, not configurable.
  Verified against Mifflin-St Jeor (~2,900 kcal maintenance), NIH deficit guidance
  (600–900 kcal/day → ~1.2–1.8 lb/week), and ISSN/Helms protein research (1.8–2.7 g/kg
  favored while cutting).
- All recipes and quantities sized for **one serving** (Drew only).

## Decisions

| Decision | Choice |
|---|---|
| Content source | Curated pool of variants, typed data in the repo |
| Week selection | Deterministic, seeded by ISO year + week — no database |
| Access | Public, read-only. No auth, no backend state |
| Macros | Fixed targets; variants authored inside per-meal bands |
| Shopping list | Its own page, `/menu/shopping` |
| Host | Inside the existing drewbolles.com Next.js 16 app |

## Meal structure

- **Breakfast** — fully fixed, no rotation: eggs + one smoothie recipe (milk, frozen
  fruit, whey, honey, spinach). The smoothie carries micronutrients for recovery,
  hormone support, and MPS alongside its macros.
- **Lunch** — salad + meat. ~10 variants rotating protein, greens, dressing, toppings.
  Cottage cheese may appear as a side.
- **Dinner** — meat + starch. ~10 variants rotating protein, starch (potatoes, white
  rice), and a side (vegetable or cottage cheese).

### Macro bands (per meal, authored — not computed)

| Meal | kcal | Protein |
|---|---|---|
| Breakfast | 550–650 | 55–65 g |
| Lunch | 600–700 | 60–70 g |
| Dinner | 850–950 | 65–75 g |

The bands sum to exactly the daily target (2,000–2,300 kcal, 180–210 g), so any
combination of in-band variants lands in range — rotation can never break the
totals. A unit test asserts every variant sits inside its band; that test is the
enforced invariant. Author macros against USDA FoodData Central values.

## Data model

Typed TS files under `app/menu/data/`. Shape (illustrative, final types may narrow):

```ts
type Ingredient = {
  name: string;
  quantity: number;
  unit: string; // 'g' | 'oz' | 'cup' | ...
  aisle: 'produce' | 'meat' | 'dairy' | 'pantry' | 'frozen';
};

type MealVariant = {
  id: string;
  name: string;
  protein: 'chicken' | 'beef' | 'pork' | 'turkey' | 'salmon' | 'shrimp' | ...;
  ingredients: Ingredient[];
  steps: string[];
  macros: { kcal: number; protein: number; carbs: number; fat: number };
};
```

Pools: `breakfast` (1 entry + smoothie flavors), `lunchVariants`, `dinnerVariants`.

## Rotation

One pure function in `app/menu/lib/`:

```ts
getWeekMenu(weekStart: Date, pools: Pools, overrides?: Overrides): WeekMenu
```

- Seeded PRNG from ISO year + week number. Same week → same menu, everywhere.
- Constraints: no protein two days in a row (lunch pool and dinner pool each);
  lunch protein ≠ dinner protein on the same day.
- `overrides` is a map of day/meal → variant id. Unused in v1; it is the seam for a
  later "swap today's meal" feature.
- Pure and unit-tested: determinism, constraint satisfaction, band totals.

Shopping list aggregation is a second pure function: WeekMenu → ingredients summed
across the week, grouped by aisle.

## Pages

- **`/menu`** — the week at a glance. Seven days, today highlighted, each meal
  tappable to expand recipe steps + macros. Daily kcal/protein totals per day.
  Link to the shopping list.
- **`/menu/shopping`** — aggregated list for the visible week, grouped by aisle,
  print-friendly. `?week=next` on both pages shows the following week (Sunday
  shopping ahead of the Monday rollover).

Server components, Tailwind 4, matching the site's existing look. No new runtime
dependencies.

## Rendering

- Server-rendered with `revalidate = 3600` so the week rolls over without a deploy.
- "Today" computed against a hardcoded timezone constant (one line to change).
- Weeks start Monday (ISO).

## Testing

Add **Vitest** (dev dependency only — the repo has no test runner). Unit tests for:

- `getWeekMenu`: deterministic for a given week; constraints hold across many weeks.
- Data invariant: every variant's macros sit inside its meal band (this is what
  guarantees daily sums stay in the target range).
- Shopping aggregation: quantities sum correctly across duplicate ingredients.

No E2E; the pages are thin views over pure functions.

## Out of scope (v1)

- Swapping/rerolling meals (seam exists via `overrides`)
- Checkable shopping list state
- Auth, database, user settings
- Portion scaling / adjustable targets
