import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SectionHeading } from "./components/SectionHeading";

const focusAreas = [
  {
    title: "Frontend",
    description:
      "Architecting scalable component systems, design systems, and performance-critical interfaces with React and TypeScript.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Product",
    description:
      "Bridging engineering and product strategy to ship features that solve real user problems with pragmatic delivery.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    title: "AI",
    description:
      "Building AI-powered interfaces and integrating large language models into product experiences that feel natural and useful.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="M4.93 19.07l2.83-2.83" />
        <path d="M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
];

const posts = [
  {
    date: "2024.11",
    title: "Privacy-focused analytics alternatives to Google Analytics",
    description:
      "A deep dive into Plausible, Fathom, and Umami — privacy-respecting analytics tools that give you the insights you need without trading your visitors' data. Includes setup guides, pricing comparisons, and migration tips.",
    featured: true,
  },
  {
    date: "2024.08",
    title: "Vercel vs Netlify: choosing a hosting platform in 2024",
    description:
      "A practical comparison of pricing, DX, and performance for modern web apps.",
  },
  {
    date: "2024.05",
    title: "Adding syntax highlighting and RSS to a Next.js blog",
    description:
      "Integrating rehype-pretty-code and generating RSS feeds for a modern blog.",
  },
  {
    date: "2024.02",
    title: "Why I pay for software instead of trading my data",
    description:
      "An argument for choosing paid tools that respect your privacy over free alternatives.",
  },
  {
    date: "2023.11",
    title: "Building a modern personal site with Next.js and MDX",
    description:
      "How I rebuilt this site using the App Router, Tailwind, and content collections.",
  },
];

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export default function Home() {
  const featuredPost = posts.find((p) => p.featured);
  const otherPosts = posts.filter((p) => !p.featured);

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
        <div className="relative px-6 md:px-12 pt-32 pb-32 flex flex-col gap-8 max-w-4xl">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-[-0.02em] leading-[1.1]">
              Drew Bolles
            </h1>
            <p className="text-2xl md:text-4xl text-accent-primary font-semibold tracking-wide">
              Software Engineer
            </p>
          </div>
          <p className="font-mono text-sm text-muted leading-relaxed max-w-xl">
            <span className="text-accent-secondary">&gt;</span> Building frontend systems, product interfaces, and AI-powered experiences at Trellis Technologies
          </p>
          <div className="w-12 h-px bg-gradient-to-r from-accent-primary to-transparent mt-4" />
        </div>
      </section>

      {/* Focus */}
      <section id="about" className="w-full px-6 md:px-12 py-28">
        <div className="flex flex-col gap-16">
          <SectionHeading number="01" label="Focus" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="flex flex-col gap-4 p-6 border border-border hover:border-accent-primary/40 rounded-lg bg-surface hover:bg-surface-hover transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="text-accent-primary group-hover:text-accent-secondary transition-colors">
                    {area.icon}
                  </div>
                  <h3 className="text-base font-semibold text-foreground tracking-tight">
                    {area.title}
                  </h3>
                </div>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Writing */}
      <section
        id="writing"
        className="w-full px-6 md:px-12 py-28 bg-surface-alt"
      >
        <div className="flex flex-col gap-16">
          <SectionHeading
            number="02"
            label="Writing"
            action={{ label: "All articles", href: "/blog" }}
          />

          {/* Featured post */}
          {featuredPost && (
            <a
              href="#"
              className="group flex flex-col gap-6 p-8 bg-surface border border-border hover:border-accent-primary/40 rounded-lg hover:bg-surface-hover transition-all"
            >
              <span className="font-mono text-[10px] font-bold text-accent-primary bg-accent-primary/10 px-2.5 py-1 rounded w-fit">
                LATEST
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight leading-tight max-w-2xl">
                {featuredPost.title}
              </h3>
              <p className="text-base text-foreground-muted leading-relaxed max-w-2xl">
                {featuredPost.description}
              </p>
              <span className="flex items-center gap-2 text-sm font-medium text-accent-primary group-hover:gap-3 transition-all w-fit">
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
            </a>
          )}

          {/* Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {otherPosts.map((post) => (
              <a
                key={post.title}
                href="#"
                className="group flex flex-col gap-3 p-6 bg-surface border border-border hover:border-accent-primary/40 rounded-lg hover:bg-surface-hover transition-all"
              >
                <h4 className="text-base font-semibold text-foreground leading-snug group-hover:text-accent-primary transition-colors">
                  {post.title}
                </h4>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  {post.description}
                </p>
                <span className="flex items-center gap-1.5 text-xs font-medium text-accent-primary group-hover:gap-2 transition-all w-fit">
                  Read
                  <ArrowUpRight />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
