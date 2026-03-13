import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full bg-background overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(95, 163, 255, 0.06) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            backgroundPosition: "0 0",
          }}
        />
        <Header />
        <div className="relative px-6 md:px-12 pt-28 pb-20 flex flex-col gap-6 max-w-5xl mx-auto">
          <span className="font-mono text-xs text-accent-primary">
            404
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-[-0.02em] leading-[1.1]">
            Page not found
          </h1>
          <p className="text-base text-muted leading-relaxed max-w-lg">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 border border-border rounded hover:border-accent-primary hover:bg-accent-primary/5 transition-all group"
            >
              <span className="font-mono text-xs text-muted group-hover:text-accent-primary transition-colors">
                Home
              </span>
            </Link>
            <Link
              href="/blog"
              className="flex items-center gap-2 px-4 py-2 border border-border rounded hover:border-accent-primary hover:bg-accent-primary/5 transition-all group"
            >
              <span className="font-mono text-xs text-muted group-hover:text-accent-primary transition-colors">
                Blog
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
