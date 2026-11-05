import type { MetadataRoute } from "next";
import { blogPosts } from "./lib/blog-data";
import { getAllLandingPages } from "@/content/landing-pages";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://maxoratechnology.com"
).replace(/\/$/, "");

// Static-page lastModified: set to a known content date rather than using
// `new Date()` (which would misreport every static page as modified on every
// build). Update SITE_BUILD_DATE when significant static content changes ship.
const SITE_BUILD_DATE = "2026-10-08";

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
    { path: "/", changeFrequency: "weekly", priority: 1.0, lastModified: SITE_BUILD_DATE },
    {
      path: "/ai-visibility-check",
      changeFrequency: "weekly",
      priority: 0.9,
      lastModified: SITE_BUILD_DATE,
    },
    {
      path: "/Services",
      changeFrequency: "weekly",
      priority: 0.9,
      lastModified: SITE_BUILD_DATE,
    },
    {
      path: "/Services/web-development",
      changeFrequency: "monthly",
      priority: 0.85,
      lastModified: SITE_BUILD_DATE,
    },
    {
      path: "/Services/app-development",
      changeFrequency: "monthly",
      priority: 0.85,
      lastModified: SITE_BUILD_DATE,
    },
    {
      path: "/Services/crm-erp",
      changeFrequency: "monthly",
      priority: 0.85,
      lastModified: SITE_BUILD_DATE,
    },
    {
      path: "/Services/ecommerce",
      changeFrequency: "monthly",
      priority: 0.85,
      lastModified: SITE_BUILD_DATE,
    },
    {
      path: "/Services/wordpress",
      changeFrequency: "monthly",
      priority: 0.85,
      lastModified: SITE_BUILD_DATE,
    },
    {
      path: "/Services/seo-aeo",
      changeFrequency: "monthly",
      priority: 0.85,
      lastModified: SITE_BUILD_DATE,
    },
    {
      path: "/Services/ai-automation",
      changeFrequency: "monthly",
      priority: 0.85,
      lastModified: SITE_BUILD_DATE,
    },
    {
      path: "/about",
      changeFrequency: "monthly",
      priority: 0.7,
      lastModified: SITE_BUILD_DATE,
    },
    {
      path: "/blog",
      changeFrequency: "weekly",
      priority: 0.75,
      lastModified: SITE_BUILD_DATE,
    },
    {
      path: "/careers",
      changeFrequency: "monthly",
      priority: 0.6,
      lastModified: SITE_BUILD_DATE,
    },
    {
      path: "/portfolio",
      changeFrequency: "monthly",
      priority: 0.75,
      lastModified: SITE_BUILD_DATE,
    },
    {
      path: "/contact",
      changeFrequency: "monthly",
      priority: 0.8,
      lastModified: SITE_BUILD_DATE,
    },
    {
      path: "/privacy",
      changeFrequency: "yearly",
      priority: 0.3,
      lastModified: SITE_BUILD_DATE,
    },
    {
      path: "/terms",
      changeFrequency: "yearly",
      priority: 0.3,
      lastModified: SITE_BUILD_DATE,
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

  const landingEntries: MetadataRoute.Sitemap = getAllLandingPages().map((page) => ({
    url: `${siteUrl}/${page.slug}`,
    lastModified: new Date(SITE_BUILD_DATE),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...staticEntries, ...blogEntries, ...landingEntries];
}
