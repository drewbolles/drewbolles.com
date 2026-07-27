import { addDays, getISOWeek } from "./dates";
import type {
  DayMenu,
  Macros,
  MealVariant,
  Pools,
  Protein,
  WeekMenu,
  WeekOverrides,
} from "./types";

const FISH_PROTEINS = ["salmon", "tuna"] as const;
const FISH_DAY_INDEX = 4; // Friday; weeks start Monday

function isFishProtein(protein: Protein): boolean {
  return (FISH_PROTEINS as readonly string[]).includes(protein);
}

function mulberry32(seed: number): () => number {
  let state = seed;
  return function () {
    state |= 0;
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededShuffle<T>(items: readonly T[], rand: () => number): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pickMeals(
  pool: readonly MealVariant[],
  rand: () => number,
  blockedByDay: readonly (Protein | null)[],
): MealVariant[] {
  const picks: MealVariant[] = [];
  let queue = seededShuffle(pool, rand);
  for (let day = 0; day < 7; day++) {
    const prevProtein = picks[day - 1]?.protein ?? null;
    const isValid = (v: MealVariant) =>
      v.protein !== prevProtein &&
      v.protein !== blockedByDay[day] &&
      (day === FISH_DAY_INDEX) === isFishProtein(v.protein);
    let idx = queue.findIndex(isValid);
    if (idx === -1) {
      queue = [...queue, ...seededShuffle(pool, rand)];
      idx = queue.findIndex(isValid);
    }
    if (idx === -1) {
      throw new Error(
        `Meal pool cannot satisfy rotation constraints for day ${day}`,
      );
    }
    picks.push(queue[idx]);
    queue.splice(idx, 1);
    if (queue.length === 0) {
      queue = seededShuffle(pool, rand);
    }
  }
  return picks;
}

function resolveOverride(
  pool: readonly MealVariant[],
  id: string | undefined,
): MealVariant | undefined {
  if (!id) return undefined;
  return pool.find((v) => v.id === id);
}

export function getWeekMenu(
  weekStart: string,
  pools: Pools,
  overrides: WeekOverrides = {},
): WeekMenu {
  const { year, week } = getISOWeek(weekStart);
  const rand = mulberry32(year * 100 + week);
  const lunches = pickMeals(pools.lunches, rand, Array(7).fill(null));
  const dinners = pickMeals(
    pools.dinners,
    rand,
    lunches.map((l) => l.protein),
  );
  const days: DayMenu[] = Array.from({ length: 7 }, (_, i) => {
    const date = addDays(weekStart, i);
    const dayOverride = overrides[date];
    return {
      date,
      breakfast: pools.breakfast,
      lunch: resolveOverride(pools.lunches, dayOverride?.lunch) ?? lunches[i],
      dinner:
        resolveOverride(pools.dinners, dayOverride?.dinner) ?? dinners[i],
    };
  });
  return { weekStart, days };
}

export function getDayTotals(day: DayMenu): Macros {
  const meals = [day.breakfast, day.lunch, day.dinner];
  return meals.reduce(
    (acc, meal) => ({
      kcal: acc.kcal + meal.macros.kcal,
      protein: acc.protein + meal.macros.protein,
      carbs: acc.carbs + meal.macros.carbs,
      fat: acc.fat + meal.macros.fat,
    }),
    { kcal: 0, protein: 0, carbs: 0, fat: 0 },
  );
}
