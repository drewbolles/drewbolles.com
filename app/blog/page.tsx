import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SectionHeading } from "../components/SectionHeading";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Drew Bolles",
  description:
    "Writing about frontend engineering, web performance, and building for the modern web.",
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full bg-hero-bg overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 70% 30%, rgba(37, 99, 235, 0.12) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(37, 99, 235, 0.06) 0%, transparent 50%)",
          }}
        />
        <Header />
        <div className="relative px-6 md:px-[180px] pt-16 pb-20">
          <h1 className="text-4xl md:text-[56px] font-bold text-white tracking-[-0.04em] leading-[1.1]">
            Blog
          </h1>
          <p className="mt-4 text-lg text-white/50 max-w-[480px]">
            Writing about frontend engineering, web performance, and the modern
            web.
          </p>
        </div>
      </section>

      <section className="w-full px-6 md:px-[180px] py-24">
        <div className="flex flex-col gap-14">
          <SectionHeading number="01" label="All Posts" />

          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group flex flex-col gap-6 p-8 md:p-10 bg-surface border border-border rounded-2xl hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] font-medium text-accent bg-accent-light px-2.5 py-1 rounded-md">
                  Latest
                </span>
                <span className="font-mono text-[13px] text-muted-light">
                  {formatDate(featured.date)}
                </span>
                <span className="font-mono text-[13px] text-muted-light">
                  {featured.readingTime}
                </span>
              </div>
              <h3 className="text-2xl md:text-[28px] font-bold text-foreground tracking-tight leading-tight max-w-[720px]">
                {featured.title}
              </h3>
              <p className="text-base text-muted leading-relaxed max-w-[720px]">
                {featured.description}
              </p>
              <span className="flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">
                Read article
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-4 p-7 bg-surface border border-border rounded-xl hover:border-accent/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-light">
                    {formatDate(post.date)}
                  </span>
                  <span className="font-mono text-xs text-muted-light">
                    {post.readingTime}
                  </span>
                </div>
                <h4 className="text-[17px] font-semibold text-foreground leading-snug">
                  {post.title}
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  {post.description}
                </p>
                <span className="flex items-center gap-1.5 text-[13px] font-medium text-accent">
                  Read
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
