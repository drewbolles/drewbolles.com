"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "about" },
  { href: "/blog", label: "writing" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-background/50 backdrop-blur-sm border-b border-border/30 sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 md:px-12 py-8 w-full max-w-5xl mx-auto">
        <Link
          href="/"
          className="font-mono text-base font-semibold text-foreground tracking-tight hover:text-accent-primary transition-colors"
        >
          <span className="text-accent-primary">$</span> drew
        </Link>
        <nav className="flex gap-8 items-center">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={`font-mono text-xs transition-colors relative group ${
                  isActive
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {isActive && (
                  <span className="absolute -left-3 text-accent-primary">
                    &gt;
                  </span>
                )}
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
