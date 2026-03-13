import type { MDXComponents } from "mdx/types";
import Image from "next/image";

export const components: MDXComponents = {
  h2: (props) => (
    <h2
      className="text-2xl font-bold text-foreground tracking-tight mt-12 mb-4"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-xl font-semibold text-foreground tracking-tight mt-10 mb-3"
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className="text-lg font-semibold text-foreground tracking-tight mt-8 mb-2"
      {...props}
    />
  ),
  p: (props) => (
    <p className="text-base text-muted leading-[1.8] mb-6" {...props} />
  ),
  a: (props) => (
    <a
      className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="list-disc pl-6 mb-6 space-y-2 text-muted" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal pl-6 mb-6 space-y-2 text-muted" {...props} />
  ),
  li: (props) => <li className="text-base leading-[1.8]" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-3 border-accent pl-6 my-6 italic text-muted"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="rounded-xl overflow-x-auto p-5 my-6 text-sm leading-relaxed bg-hero-bg"
      {...props}
    />
  ),
  code: (props) => {
    const isInline = typeof props.children === "string";
    if (isInline) {
      return (
        <code
          className="font-mono text-[0.9em] bg-surface-alt px-1.5 py-0.5 rounded"
          {...props}
        />
      );
    }
    return <code {...props} />;
  },
  img: (props) => {
    const { src, alt, title } = props as React.ImgHTMLAttributes<HTMLImageElement>;
    if (!src || typeof src !== "string") return null;
    if (src.startsWith("/")) {
      return (
        <Image
          src={src}
          alt={alt || ""}
          title={title}
          width={720}
          height={400}
          className="rounded-xl w-full my-6"
        />
      );
    }
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt || ""}
        title={title}
        className="rounded-xl w-full my-6"
      />
    );
  },
  strong: (props) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  em: (props) => <em className="italic" {...props} />,
  hr: () => <hr className="my-12 border-border" />,
};
