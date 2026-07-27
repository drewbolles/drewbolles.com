import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { HeroBackground } from "../../components/HeroBackground";
import { pools } from "../data/pools";
import {
  addDays,
  formatDayLabel,
  getWeekStart,
  TIMEZONE,
  todayInTimeZone,
} from "../lib/dates";
import { getWeekMenu } from "../lib/rotation";
import { getShoppingList } from "../lib/shopping";

export const metadata: Metadata = {
  title: "Shopping List",
  description: "Groceries for this week's menu.",
  alternates: { canonical: "/menu/shopping" },
};

export default async function ShoppingPage({
  searchParams,
}: {
  searchParams: Promise<{ week?: string }>;
}) {
  const { week } = await searchParams;
  const today = todayInTimeZone(new Date(), TIMEZONE);
  const currentWeekStart = getWeekStart(today);
  const isNextWeek = week === "next";
  const weekStart = isNextWeek ? addDays(currentWeekStart, 7) : currentWeekStart;
  const menu = getWeekMenu(weekStart, pools);
  const groups = getShoppingList(menu);

  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <div className="print:hidden">
          <HeroBackground>
            <Header />
            <div className="relative px-6 md:px-12 pt-28 pb-20 flex flex-col gap-4 max-w-5xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-[-0.02em] leading-[1.1]">
                Shopping List
              </h1>
              <p className="text-base text-muted leading-relaxed">
                {isNextWeek ? "Next week" : "This week"}, starting{" "}
                {formatDayLabel(weekStart)}
              </p>
            </div>
          </HeroBackground>
        </div>

        <section className="w-full py-12 print:py-0">
          <div className="flex flex-col gap-10 max-w-5xl mx-auto px-6 md:px-12">
            <div className="flex flex-wrap items-center gap-4 print:hidden">
              <Link
                href={isNextWeek ? "/menu?week=next" : "/menu"}
                className="font-mono text-xs text-accent-primary hover:underline"
              >
                ← menu
              </Link>
              <Link
                href={isNextWeek ? "/menu/shopping" : "/menu/shopping?week=next"}
                className="font-mono text-xs text-accent-primary hover:underline"
              >
                {isNextWeek ? "← this week" : "next week →"}
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {groups.map((group) => (
                <div key={group.aisle} className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-accent-primary text-sm">
                      &gt;
                    </span>
                    <h2 className="font-mono text-xs text-muted-light uppercase tracking-wide">
                      {group.aisle}
                    </h2>
                  </div>
                  <ul className="flex flex-col">
                    {group.items.map((item) => (
                      <li
                        key={`${item.name}-${item.unit}`}
                        className="flex justify-between gap-4 py-1.5 border-b border-border last:border-b-0 text-sm"
                      >
                        <span className="text-foreground-muted">{item.name}</span>
                        <span className="font-mono text-xs text-muted whitespace-nowrap">
                          {item.quantity} {item.unit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}
