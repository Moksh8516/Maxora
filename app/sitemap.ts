import type { MetadataRoute } from "next";
import { blogPosts } from "./lib/blog-data";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://maxoratechnology.com"
).replace(/\/$/, "");

const now = new Date().toISOString();

const publicRoutes: {
  path: string;
  changeFrequency:
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";
  priority: number;
  lastModified: string;
}[] = [
    { path: "/", changeFrequency: "weekly", priority: 1.0, lastModified: now },
    {
      path: "/ai-visibility-check",
      changeFrequency: "weekly",
      priority: 0.9,
      lastModified: now,
    },
    {
      path: "/Services",
      changeFrequency: "weekly",
      priority: 0.9,
      lastModified: now,
    },
    {
      path: "/Services/web-development",
      changeFrequency: "monthly",
      priority: 0.85,
      lastModified: now,
    },
    {
      path: "/Services/app-development",
      changeFrequency: "monthly",
      priority: 0.85,
      lastModified: now,
    },
    {
      path: "/Services/crm-erp",
      changeFrequency: "monthly",
      priority: 0.85,
      lastModified: now,
    },
    {
      path: "/Services/ecommerce",
      changeFrequency: "monthly",
      priority: 0.85,
      lastModified: now,
    },
    {
      path: "/Services/wordpress",
      changeFrequency: "monthly",
      priority: 0.85,
      lastModified: now,
    },
    {
      path: "/Services/seo-aeo",
      changeFrequency: "monthly",
      priority: 0.85,
      lastModified: now,
    },
    {
      path: "/Services/ai-automation",
      changeFrequency: "monthly",
      priority: 0.85,
      lastModified: now,
    },
    {
      path: "/about",
      changeFrequency: "monthly",
      priority: 0.7,
      lastModified: now,
    },
    {
      path: "/blog",
      changeFrequency: "weekly",
      priority: 0.75,
      lastModified: now,
    },
    {
      path: "/careers",
      changeFrequency: "monthly",
      priority: 0.6,
      lastModified: now,
    },
    {
      path: "/portfolio",
      changeFrequency: "monthly",
      priority: 0.75,
      lastModified: now,
    },
    {
      path: "/contact",
      changeFrequency: "monthly",
      priority: 0.8,
      lastModified: now,
    },
    {
      path: "/privacy",
      changeFrequency: "yearly",
      priority: 0.3,
      lastModified: now,
    },
    {
      path: "/terms",
      changeFrequency: "yearly",
      priority: 0.3,
      lastModified: now,
    },
  ];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = publicRoutes.map(
    ({ path, changeFrequency, priority, lastModified }) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(lastModified),
      changeFrequency,
      priority,
    }),
  );

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.datePublished),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
