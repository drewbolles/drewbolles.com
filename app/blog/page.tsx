import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing — Drew Bolles",
  description: "Articles on frontend engineering, product, and AI.",
};

interface PostsByYear {
  [key: number]: typeof posts;
}

export default function BlogPage() {
  const posts = getAllPosts();

  // Group posts by year
  const postsByYear: PostsByYear = posts.reduce(
    (acc, post) => {
      const year = new Date(post.date).getFullYear();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(post);
      return acc;
    },
    {} as PostsByYear
  );

  const years = Object.keys(postsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative w-full bg-background overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(95, 163, 255, 0.06) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            backgroundPosition: "0 0",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 70% 30%, rgba(74, 158, 255, 0.05) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(0, 212, 170, 0.03) 0%, transparent 50%)",
          }}
        />
        <Header />
        <div className="relative px-6 md:px-12 pt-28 pb-20 flex flex-col gap-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-[-0.02em] leading-[1.1]">
            Writing
          </h1>
          <p className="text-base text-muted leading-relaxed">
            Thoughts on frontend, product, and AI
          </p>
        </div>
      </section>

      {/* Blog posts list */}
      <section className="w-full px-6 md:px-12 py-20">
        <div className="flex flex-col gap-20 max-w-5xl mx-auto">
          {years.map((year) => (
            <div key={year} className="flex flex-col gap-8">
              {/* Year header */}
              <div className="flex items-baseline gap-4 pb-4 border-b border-border">
                <span className="font-mono text-base font-bold text-accent-primary">
                  {year}
                </span>
                <span className="font-mono text-xs text-muted">
                  {postsByYear[year].length} article{postsByYear[year].length !== 1 ? "s" : ""}
                </span>
              </div>

              {/* Posts for this year */}
              <div className="flex flex-col border-t border-border">
                {postsByYear[year].map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex items-start gap-4 py-6 px-4 -mx-4 border-b border-border hover:bg-surface transition-colors rounded"
                  >
                    <span className="font-mono text-accent-primary text-sm mt-0.5 flex-shrink-0">
                      &gt;
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-primary transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed mt-1.5">
                        {post.description}
                      </p>
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-muted group-hover:text-accent-primary transition-colors flex-shrink-0 mt-1"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
