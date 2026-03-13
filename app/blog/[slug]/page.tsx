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

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
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
      <section className="relative w-full bg-hero-bg overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 70% 30%, rgba(37, 99, 235, 0.12) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(37, 99, 235, 0.06) 0%, transparent 50%)",
          }}
        />
        <Header />
        <div className="relative px-6 md:px-[180px] pt-16 pb-20 flex flex-col gap-5">
          <Link
            href="/blog"
            className="flex items-center gap-2 font-mono text-[13px] text-white/40 hover:text-white/70 transition-colors w-fit"
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
            Back to blog
          </Link>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[13px] text-white/40">
              {formatDate(post.date)}
            </span>
            <span className="font-mono text-[13px] text-white/40">
              {post.readingTime}
            </span>
          </div>
          <h1 className="text-3xl md:text-[48px] font-bold text-white tracking-[-0.04em] leading-[1.1] max-w-[800px]">
            {post.title}
          </h1>
        </div>
      </section>

      {post.image && (
        <div className="w-full px-6 md:px-[180px] -mt-4">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={630}
            className="rounded-2xl w-full max-w-[720px] object-cover"
            priority
          />
        </div>
      )}

      <article className="w-full px-6 md:px-[180px] py-16 max-w-[720px]">
        <MDXContent components={components} />
      </article>

      <Footer />
    </div>
  );
}
