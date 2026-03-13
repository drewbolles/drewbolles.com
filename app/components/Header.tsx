export function Header() {
  return (
    <header className="flex items-center justify-between w-full px-6 md:px-[180px] py-7 relative z-10">
      <span className="text-lg font-semibold text-white tracking-tight">
        Drew Bolles
      </span>
      <nav className="flex gap-8 items-center">
        <a
          href="#about"
          className="font-mono text-[13px] text-white/50 hover:text-white/80 transition-colors"
        >
          about
        </a>
        <a
          href="/blog"
          className="font-mono text-[13px] text-white/50 hover:text-white/80 transition-colors"
        >
          blog
        </a>
      </nav>
    </header>
  );
}
