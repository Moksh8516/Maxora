import type { MetadataRoute } from "next";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://maxoratechnology.com"
).replace(/\/$/, "");

const publicRoutes = [
  "/",
  "/about",
  "/blog",
  "/careers",
  "/contact",
  "/privacy",
  "/terms",
  "/Services",
  "/service/App-development",
  "/service/Crm-erp",
  "/service/Ecommerce",
  "/service/web-development",
  "/service/Wordpress",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
