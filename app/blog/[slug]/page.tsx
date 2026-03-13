import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
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
  return {
    title: `${post.title} — Drew Bolles`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.image ? [{ url: post.image }] : [],
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
          <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-[-0.02em] leading-[1.15] max-w-3xl">
            {post.title}
          </h1>
          <span className="font-mono text-xs text-muted-light">
            {post.readingTime}
          </span>
        </div>
      </section>

      {post.image && (
        <div className="w-full px-6 md:px-12">
          <div className="max-w-3xl mx-auto -mt-4">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={630}
              className="rounded-lg w-full object-cover"
              priority
            />
          </div>
        </div>
      )}

      <article className="w-full px-6 md:px-12 py-16">
        <div className="max-w-3xl mx-auto">
          <MDXContent components={components} />
        </div>
      </article>

      <Footer />
    </div>
  );
}
