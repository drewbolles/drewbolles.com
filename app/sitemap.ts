import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://www.drewbolles.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: "https://www.drewbolles.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.drewbolles.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.drewbolles.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogEntries,
  ];
}
