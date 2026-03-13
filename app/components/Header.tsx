export function Header() {
  return (
    <header className="w-full bg-background/50 backdrop-blur-sm border-b border-border/30 sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 md:px-12 py-8 max-w-4xl mx-auto w-full">
        <span className="font-mono text-base font-semibold text-foreground tracking-tight">
          <span className="text-accent-primary">$</span> drew
        </span>
        <nav className="flex gap-8 items-center">
          <a
            href="#about"
            className="font-mono text-xs text-muted hover:text-accent-primary transition-colors"
          >
            about
          </a>
          <a
            href="#writing"
            className="font-mono text-xs text-muted hover:text-accent-primary transition-colors"
          >
            blog
          </a>
        </nav>
      </div>
    </header>
  );
}
