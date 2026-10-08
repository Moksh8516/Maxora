import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock3 } from "lucide-react";
import { JsonLd } from "../components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Blog & Engineering Insights | Maxora Technology",
  description:
    "Practical insights and guides from Maxora Technology on custom web development, mobile app architecture, CRM/ERP automation, and digital scaling.",
  keywords: [
    "Maxora Technology blog",
    "web development insights",
    "app development guides",
    "custom software architecture",
    "business automation tips",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog & Engineering Insights | Maxora Technology",
    description:
      "Articles and deep dives into web performance, modern app engineering, and automation for growing businesses.",
    url: "/blog",
    siteName: "Maxora Technology",
    images: [
      {
        url: "/light logo.png",
        width: 1200,
        height: 630,
        alt: "Maxora Technology Blog",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Engineering Insights | Maxora Technology",
    description:
      "Clear, practical guides about building and scaling modern digital products.",
    images: ["/light logo.png"],
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
      blogPost: [
        {
          "@type": "BlogPosting",
          headline:
            "What a growing business should expect from its first website",
          description:
            "A useful first website should make your offer clear, earn trust, and create a simple path to enquiry.",
          datePublished: "2026-09-09",
          author: {
            "@type": "Organization",
            name: "Maxora Technology",
          },
        },
        {
          "@type": "BlogPosting",
          headline: "When custom software is worth the investment",
          description:
            "Operational signals that make a tailored workflow more valuable than another disconnected SaaS tool.",
          datePublished: "2026-09-09",
          author: {
            "@type": "Organization",
            name: "Maxora Technology",
          },
        },
        {
          "@type": "BlogPosting",
          headline: "Start small: a practical path to business automation",
          description:
            "A focused first workflow can create learning without creating unnecessary risk.",
          datePublished: "2026-09-09",
          author: {
            "@type": "Organization",
            name: "Maxora Technology",
          },
        },
      ],
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

const posts = [
  {
    category: "Digital foundations",
    title: "What a growing business should expect from its first website",
    excerpt:
      "A useful first website should make your offer clear, earn trust, and create a simple path to enquiry. Here is how to prioritise the work before adding complexity.",
    date: "September 9, 2026",
    readTime: "5 min read",
  },
  {
    category: "Product thinking",
    title: "When custom software is worth the investment",
    excerpt:
      "Custom software is not automatically the right answer. We look at the operational signals that make a tailored workflow more valuable than another disconnected tool.",
    date: "September 9, 2026",
    readTime: "6 min read",
  },
  {
    category: "Automation",
    title: "Start small: a practical path to business automation",
    excerpt:
      "The best automation opportunities are often repetitive handoffs, follow-ups, and data entry. A focused first workflow can create learning without creating unnecessary risk.",
    date: "September 9, 2026",
    readTime: "4 min read",
  },
];

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
            {posts.map((post) => (
              <article
                key={post.title}
                className="surface-card flex h-full flex-col p-7"
              >
                <div className="mb-8 flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-blue-600 dark:text-blue-400">
                  <span>{post.category}</span>
                  <span className="rounded-full bg-blue-500/10 px-2 py-1">
                    New
                  </span>
                </div>
                <h2 className="mb-4 text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                  {post.title}
                </h2>
                <p className="mb-8 flex-1 leading-7 text-gray-600 dark:text-gray-300">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between border-t border-gray-200 pt-5 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
                  <span>{post.date}</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-semibold text-blue-600 dark:text-blue-400"
            >
              Discuss an idea with our team
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
