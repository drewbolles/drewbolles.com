import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { HeroBackground } from "../../components/HeroBackground";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { components } from "./mdx-components";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const url = `/blog/${slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      publishedTime: new Date(post.date).toISOString(),
      authors: ["Drew Bolles"],
      images: post.image
        ? [{ url: post.image, width: 1200, height: 630, alt: post.title }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
    },
  };
}

async function compileMDX(source: string) {
  const { default: MDXContent } = await evaluate(source, {
    ...runtime,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "one-dark-pro",
          keepBackground: true,
        },
      ],
    ],
  });
  return MDXContent;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const MDXContent = await compileMDX(post.content);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      "@type": "Person",
      name: "Drew Bolles",
      url: "https://www.drewbolles.com",
    },
    publisher: {
      "@type": "Person",
      name: "Drew Bolles",
      url: "https://www.drewbolles.com",
    },
    url: `https://www.drewbolles.com/blog/${slug}`,
    ...(post.image && {
      image: `https://www.drewbolles.com${post.image}`,
    }),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.drewbolles.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.drewbolles.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://www.drewbolles.com/blog/${slug}`,
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero */}
      <main>
      <HeroBackground>
        <Header />
        <div className="relative px-6 md:px-12 pt-28 pb-16 flex flex-col gap-6 max-w-5xl mx-auto">
          <Link
            href="/blog"
            className="flex items-center gap-2 font-mono text-xs text-muted hover:text-accent-primary transition-colors w-fit"
          >
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
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to writing
          </Link>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground tracking-[-0.02em] leading-[1.15] max-w-3xl">
            {post.title}
          </h1>
          <span className="font-mono text-xs text-muted-light">
            {post.readingTime}
          </span>
        </div>
      </HeroBackground>

      {post.image && (
        <div className="max-w-3xl mx-auto px-6 md:px-12 -mt-4">
          <div className="relative aspect-[1200/630] w-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>
      )}

      <article className="w-full py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <MDXContent components={components} />
          
          {/* Share section */}
          <div className="mt-16 pt-12 border-t border-border">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs text-muted-light uppercase tracking-wide">
                  Share this article
                </span>
                <p className="text-sm text-muted">
                  Found this useful? Share it with others who might enjoy it.
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  href={`https://x.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://www.drewbolles.com/blog/${slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 border border-border rounded hover:border-accent-primary hover:bg-accent-primary/5 transition-all group"
                  aria-label="Share on X"
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
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://www.drewbolles.com/blog/${slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 border border-border rounded hover:border-accent-primary hover:bg-accent-primary/5 transition-all group"
                  aria-label="Share on LinkedIn"
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      </main>
      <Footer />
    </div>
  );
}
