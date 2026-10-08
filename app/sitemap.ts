import type { MetadataRoute } from "next";

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
    path: "/services",
    changeFrequency: "weekly",
    priority: 0.9,
    lastModified: now,
  },
  {
    path: "/services/web-development",
    changeFrequency: "monthly",
    priority: 0.85,
    lastModified: now,
  },
  {
    path: "/services/app-development",
    changeFrequency: "monthly",
    priority: 0.85,
    lastModified: now,
  },
  {
    path: "/services/crm-erp",
    changeFrequency: "monthly",
    priority: 0.85,
    lastModified: now,
  },
  {
    path: "/services/ecommerce",
    changeFrequency: "monthly",
    priority: 0.85,
    lastModified: now,
  },
  {
    path: "/services/wordpress",
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
    priority: 0.7,
    lastModified: now,
  },
  {
    path: "/careers",
    changeFrequency: "monthly",
    priority: 0.6,
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
  return publicRoutes.map(
    ({ path, changeFrequency, priority, lastModified }) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(lastModified),
      changeFrequency,
      priority,
    }),
  );
}
