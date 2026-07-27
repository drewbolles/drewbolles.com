import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HeroBackground } from "../components/HeroBackground";
import { MealDetails } from "./components/MealDetails";
import { pools } from "./data/pools";
import { addDays, getWeekStart, TIMEZONE, todayInTimeZone } from "./lib/dates";
import { getDayTotals, getWeekMenu } from "./lib/rotation";

export const metadata: Metadata = {
  title: "Menu",
  description: "This week's menu — breakfast, lunch, and dinner.",
  alternates: { canonical: "/menu" },
};

const dayFormatter = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});

function formatDay(isoDate: string): string {
  return dayFormatter.format(new Date(`${isoDate}T00:00:00Z`));
}

function resolveWeekStart(searchWeek: string | undefined, now: Date): string {
  const today = todayInTimeZone(now, TIMEZONE);
  const current = getWeekStart(today);
  return searchWeek === "next" ? addDays(current, 7) : current;
}

export default async function MenuPage({
  searchParams,
}: {
  searchParams: Promise<{ week?: string }>;
}) {
  const { week } = await searchParams;
  const now = new Date();
  const today = todayInTimeZone(now, TIMEZONE);
  const weekStart = resolveWeekStart(week, now);
  const isNextWeek = week === "next";
  const menu = getWeekMenu(weekStart, pools);

  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <HeroBackground>
          <Header />
          <div className="relative px-6 md:px-12 pt-28 pb-20 flex flex-col gap-4 max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-[-0.02em] leading-[1.1]">
              Menu
            </h1>
            <p className="text-base text-muted leading-relaxed">
              {isNextWeek ? "Next week" : "This week"}, starting{" "}
              {formatDay(menu.weekStart)}
            </p>
          </div>
        </HeroBackground>

        <section className="w-full py-12">
          <div className="flex flex-col gap-10 max-w-5xl mx-auto px-6 md:px-12">
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={isNextWeek ? "/menu" : "/menu?week=next"}
                className="font-mono text-xs text-accent-primary hover:underline"
              >
                {isNextWeek ? "← this week" : "next week →"}
              </Link>
              <Link
                href={isNextWeek ? "/menu/shopping?week=next" : "/menu/shopping"}
                className="font-mono text-xs text-accent-primary hover:underline"
              >
                shopping list →
              </Link>
            </div>

            <div className="flex flex-col gap-8">
              {menu.days.map((day) => {
                const totals = getDayTotals(day);
                const isToday = day.date === today;
                return (
                  <div key={day.date} className="flex flex-col gap-3">
                    <div className="flex items-baseline justify-between gap-3">
                      <h2 className="text-base font-semibold text-foreground">
                        {formatDay(day.date)}
                        {isToday && (
                          <span className="ml-2 font-mono text-[10px] text-accent-primary uppercase tracking-wide">
                            today
                          </span>
                        )}
                      </h2>
                      <span className="font-mono text-xs text-muted whitespace-nowrap">
                        {totals.kcal} kcal · {totals.protein}g protein
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <MealDetails slot="breakfast" meal={day.breakfast} />
                      <MealDetails slot="lunch" meal={day.lunch} />
                      <MealDetails slot="dinner" meal={day.dinner} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
