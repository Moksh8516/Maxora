import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock3, User, Sparkles } from "lucide-react";
import { JsonLd } from "../components/seo/StructuredData";
import { blogPosts } from "../lib/blog-data";

export const metadata: Metadata = {
  title: "Software Engineering & Web Insights",
  description:
    "Practical guides and engineering insights from Maxora Technology on custom web development, mobile apps, CRM/ERP architecture, and digital growth.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Engineering Insights & Software Development Guides | Maxora Technology",
    description:
      "Articles and deep dives into web performance, modern app engineering, and automation for growing businesses.",
    url: "/blog",
    siteName: "Maxora Technology",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maxora Technology Blog",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Insights & Software Development Guides | Maxora Technology",
    description:
      "Clear, practical guides about building and scaling modern digital products.",
    images: ["/og-image.png"],
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": "https://maxoratechnology.com/blog/#blog",
      url: "https://maxoratechnology.com/blog",
      name: "The Maxora Technology Journal",
      description:
        "Practical engineering and strategy notes on web development, mobile apps, automation, and enterprise software.",
      publisher: {
        "@type": "Organization",
        "@id": "https://maxoratechnology.com/#organization",
        name: "Maxora Technology",
      },
      blogPost: blogPosts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.datePublished,
        url: `https://maxoratechnology.com/blog/${post.slug}`,
        author: {
          "@type": "Organization",
          name: post.author.name,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://maxoratechnology.com/blog/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://maxoratechnology.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://maxoratechnology.com/blog",
        },
      ],
    },
  ],
};

export default function BlogPage() {
  return (
    <>
      <JsonLd data={blogSchema} />
      <section className="relative overflow-hidden py-28 lg:py-36">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 via-transparent to-cyan-50/40 dark:from-blue-950/30 dark:via-transparent dark:to-cyan-950/20" />
        <div className="absolute -left-20 top-28 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400">
              <BookOpen className="h-4 w-4" />
              The Maxora Journal
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Practical ideas for growing online.
            </h1>
            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
              Clear, useful notes about websites, apps, automation, and the
              decisions that make digital work more valuable.
            </p>
          </header>

          <div className="mx-auto mt-16 grid max-w-6xl gap-7 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="surface-card flex h-full flex-col p-7 hover:border-blue-500/50 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-blue-600 dark:text-blue-400">
                  <span>{post.category}</span>
                  {post.badge ? (
                    <span className="rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 px-2.5 py-1 text-[11px] font-bold">
                      {post.badge}
                    </span>
                  ) : (
                    <span className="rounded-full bg-blue-500/10 px-2 py-1">
                      Article
                    </span>
                  )}
                </div>

                <h2 className="mb-3 text-xl font-bold leading-snug text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {post.excerpt}
                </p>

                <div className="mb-6 flex flex-col gap-2 border-t border-gray-100 dark:border-gray-800/80 pt-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href={post.serviceLink}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span>{post.serviceLabel}</span>
                  </Link>
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 pt-4 text-xs text-gray-500 dark:border-gray-800 dark:text-gray-400">
                  <span className="inline-flex items-center gap-1">
                    <User className="h-3.5 w-3.5" />
                    {post.author.name}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock3 className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              Discuss a project idea with our team
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
