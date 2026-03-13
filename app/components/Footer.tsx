export function Footer() {
  return (
    <footer className="w-full bg-surface-alt border-t border-border">
      <div className="flex items-center justify-between px-6 md:px-12 py-6 font-mono text-sm text-muted-light">
        <div className="flex items-center gap-4">
          <span className="text-foreground">
            <span className="text-accent-primary">$</span> drew
          </span>
          <span className="text-border">•</span>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/drewbolles"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent-primary transition-colors"
              aria-label="GitHub"
            >
              github
            </a>
            <span className="text-border">•</span>
            <a
              href="https://linkedin.com/in/drewbolles"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent-primary transition-colors"
              aria-label="LinkedIn"
            >
              linkedin
            </a>
            <span className="text-border">•</span>
            <a
              href="https://x.com/drewbolles"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent-primary transition-colors"
              aria-label="X"
            >
              x
            </a>
          </div>
        </div>
        <span className="text-muted-light">© 2026</span>
      </div>
    </footer>
  );
}
