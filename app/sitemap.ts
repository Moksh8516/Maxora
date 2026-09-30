import type { MetadataRoute } from "next";

const siteUrl = (
  process.env.SITE_URL || "https://maxoratechnology.com"
).replace(/\/$/, "");

const publicRoutes: {
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/Services", changeFrequency: "monthly", priority: 0.9 },
  {
    path: "/service/web-development",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/service/App-development",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { path: "/service/Crm-erp", changeFrequency: "monthly", priority: 0.8 },
  { path: "/service/Ecommerce", changeFrequency: "monthly", priority: 0.8 },
  { path: "/service/Wordpress", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/careers", changeFrequency: "monthly", priority: 0.5 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    changeFrequency,
    priority,
  }));
}
