export function Header() {
  return (
    <header className="flex items-center justify-between w-full px-6 md:px-12 py-8 relative z-10">
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
    </header>
  );
}
