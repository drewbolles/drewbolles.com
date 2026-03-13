import Link from "next/link";

export function Header() {
  return (
    <header className="w-full bg-background/50 backdrop-blur-sm border-b border-border/30 sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 md:px-12 py-8 w-full">
        <Link
          href="/"
          className="font-mono text-base font-semibold text-foreground tracking-tight hover:text-accent-primary transition-colors"
        >
          <span className="text-accent-primary">$</span> drew
        </Link>
        <nav className="flex gap-8 items-center">
          <a
            href="/about"
            className="font-mono text-xs text-muted hover:text-accent-primary transition-colors"
          >
            about
          </a>
          <a
            href="/blog"
            className="font-mono text-xs text-muted hover:text-accent-primary transition-colors"
          >
            writing
          </a>
        </nav>
      </div>
    </header>
  );
}
