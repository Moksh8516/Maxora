import type { MetadataRoute } from "next";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://maxoratechnology.com"
).replace(/\/$/, "");

export default function robots(): MetadataRoute.Robots {
  const privatePaths = ["/api/", "/admin/", "/dashboard/", "/auth/"];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: privatePaths,
      },
      {
        userAgent: [
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "Claude-User",
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
        ],
        allow: "/",
        disallow: privatePaths,
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
