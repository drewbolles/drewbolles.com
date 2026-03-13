import Link from "next/link";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SectionHeading } from "./components/SectionHeading";
import { getAllPosts } from "@/lib/posts";

const focusAreas = [
  {
    title: "Frontend",
    description:
      "Architecting scalable component systems, design systems, and performance-critical interfaces with React and TypeScript.",
    iconBg: "bg-accent-light",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2563EB"
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
    iconBg: "bg-[#FFF7ED]",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#EA580C"
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
    iconBg: "bg-[#F0FDF4]",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#16A34A"
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

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}`;
}

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
  const allPosts = getAllPosts();
  const featuredPost = allPosts[0];
  const otherPosts = allPosts.slice(1, 5);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative w-full bg-hero-bg overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 70% 30%, rgba(37, 99, 235, 0.12) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(37, 99, 235, 0.06) 0%, transparent 50%)",
          }}
        />
        <Header />
        <div className="relative px-6 md:px-[180px] pt-24 pb-28 flex flex-col gap-8">
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="font-mono text-[13px] text-white/45 tracking-wide">
              Available for select projects
            </span>
          </div>
          <h1 className="text-5xl md:text-[80px] font-bold text-white tracking-[-0.04em] leading-[1.05] max-w-[900px]">
            Staff Software Engineer
          </h1>
          <p className="text-xl text-white/55 leading-8 max-w-[560px]">
            Building frontend systems, product interfaces, and AI-powered
            experiences at Trellis Technologies.
          </p>
          <div className="w-16 h-[3px] bg-accent rounded-sm" />
        </div>
      </section>

      {/* Focus */}
      <section id="about" className="w-full px-6 md:px-[180px] py-24">
        <div className="flex flex-col gap-14">
          <SectionHeading number="01" label="Focus" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="flex flex-col gap-5 p-8 border border-border rounded-xl bg-surface"
              >
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-[10px] ${area.iconBg}`}
                >
                  {area.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground tracking-tight">
                  {area.title}
                </h3>
                <p className="text-[15px] text-muted leading-relaxed">
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
        className="w-full px-6 md:px-[180px] py-24 bg-surface-alt"
      >
        <div className="flex flex-col gap-14">
          <SectionHeading
            number="02"
            label="Writing"
            action={{ label: "All articles", href: "/blog" }}
          />

          {/* Featured post */}
          {featuredPost && (
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group flex flex-col gap-6 p-8 md:p-10 bg-surface border border-border rounded-2xl hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] font-medium text-accent bg-accent-light px-2.5 py-1 rounded-md">
                  Latest
                </span>
                <span className="font-mono text-[13px] text-muted-light">
                  {formatDate(featuredPost.date)}
                </span>
              </div>
              <h3 className="text-2xl md:text-[28px] font-bold text-foreground tracking-tight leading-tight max-w-[720px]">
                {featuredPost.title}
              </h3>
              <p className="text-base text-muted leading-relaxed max-w-[720px]">
                {featuredPost.description}
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

          {/* Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {otherPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-4 p-7 bg-surface border border-border rounded-xl hover:border-accent/30 transition-colors"
              >
                <span className="font-mono text-xs text-muted-light">
                  {formatDate(post.date)}
                </span>
                <h4 className="text-[17px] font-semibold text-foreground leading-snug">
                  {post.title}
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  {post.description}
                </p>
                <span className="flex items-center gap-1.5 text-[13px] font-medium text-accent">
                  Read
                  <ArrowUpRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
