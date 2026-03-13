import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Staff Software Engineer with over a decade of experience specializing in React, TypeScript, and frontend architecture.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About — Drew Bolles",
    description:
      "Staff Software Engineer with over a decade of experience specializing in React, TypeScript, and frontend architecture.",
    url: "/about",
  },
};

const experience = [
  {
    company: "Trellis Technologies",
    title: "Staff Software Engineer",
    period: "2020 — Present",
    description: "Building frontend systems and AI-powered product experiences.",
  },
  {
    company: "NCR Corporation",
    title: "Senior UI Engineer",
    period: "2017 — 2020",
    description: "Led teams building internal software tools for NCR development teams using React and modern technologies.",
  },
  {
    company: "Chapter Three",
    title: "Front-end Drupal Developer",
    period: "2014 — 2017",
    description: "Built high-end Drupal sites and applications, focusing on frontend architecture and JavaScript.",
  },
  {
    company: "Designzillas, LLC",
    title: "Senior Drupal Developer & Front-end Architect",
    period: "2012 — 2014",
    description: "Developed Drupal and PHP-based applications, established technical direction, and mentored teams on best practices.",
  },
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Drew Bolles",
  url: "https://www.drewbolles.com",
  jobTitle: "Staff Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Trellis Technologies",
  },
  sameAs: [
    "https://x.com/drewbolles",
    "https://linkedin.com/in/drewbolles",
    "https://github.com/drewbolles",
  ],
  knowsAbout: [
    "React",
    "TypeScript",
    "Frontend Engineering",
    "Web Performance",
    "AI Applications",
  ],
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
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
            About
          </h1>
          <p className="text-base text-muted leading-relaxed">
            A bit about me and how I got here
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="w-full py-20">
        <div className="flex flex-col gap-20 max-w-5xl mx-auto px-6 md:px-12">
          {/* Bio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-accent-primary text-sm">&gt;</span>
                <span className="font-mono text-xs text-muted-light uppercase tracking-wide">
                  whoami
                </span>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-base text-foreground-muted leading-relaxed">
                  Hi, I'm Drew. I began my voyage into web development when I was about 10, building sites with GeoCities before moving into coding layouts in tables. Fast forward a few years, and I'm still plodding about in HTML & CSS, reading A List Apart, and developing fan sites for my favorite shows.
                </p>
                <p className="text-base text-foreground-muted leading-relaxed">
                  I pride myself on being a responsible web developer, striving to solve problems by putting people first.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-accent-primary text-sm">&gt;</span>
                <span className="font-mono text-xs text-muted-light uppercase tracking-wide">
                  focus
                </span>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-base text-foreground-muted leading-relaxed">
                  My primary areas of interest lie in front-end development, performance, and JavaScript applications.
                </p>
                <p className="text-base text-foreground-muted leading-relaxed">
                  All sites and applications should be fast, beautiful, and accessible. I truly believe in providing all users the best experience possible.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <span className="font-mono text-accent-primary text-sm">&gt;</span>
              <span className="font-mono text-xs text-muted-light uppercase tracking-wide">
                history
              </span>
            </div>
            <div className="flex flex-col border-l border-border ml-2">
              {experience.map((job, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-3 pl-6 py-6 relative border-b border-border last:border-b-0"
                >
                  <div className="absolute left-0 top-8 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-accent-primary" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base font-semibold text-foreground">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-accent-primary">
                        {job.company}
                      </span>
                      <span className="font-mono text-xs text-muted">
                        {job.period}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="flex flex-col gap-6 p-8 border border-border rounded-lg bg-surface">
            <div className="flex items-center gap-3">
              <span className="font-mono text-accent-primary text-sm">&gt;</span>
              <span className="font-mono text-xs text-muted-light uppercase tracking-wide">
                contact
              </span>
            </div>
            <p className="text-base text-foreground-muted leading-relaxed">
              Want to get in touch? I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:drew@drewbolles.com"
                className="flex items-center gap-2 px-4 py-2 border border-border rounded hover:border-accent-primary hover:bg-accent-primary/5 transition-all group"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted group-hover:text-accent-primary transition-colors"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="font-mono text-xs text-muted group-hover:text-accent-primary transition-colors">
                  Email
                </span>
              </a>
              <a
                href="https://x.com/drewbolles"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-border rounded hover:border-accent-primary hover:bg-accent-primary/5 transition-all group"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-muted group-hover:text-accent-primary transition-colors"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="font-mono text-xs text-muted group-hover:text-accent-primary transition-colors">
                  X
                </span>
              </a>
              <a
                href="https://linkedin.com/in/drewbolles"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-border rounded hover:border-accent-primary hover:bg-accent-primary/5 transition-all group"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-muted group-hover:text-accent-primary transition-colors"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="font-mono text-xs text-muted group-hover:text-accent-primary transition-colors">
                  LinkedIn
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
