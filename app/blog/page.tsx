import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock3, User, Sparkles } from "lucide-react";
import { JsonLd } from "../components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Engineering Insights & Software Development Guides",
  description:
    "Practical guides and technical insights from Maxora Technology on custom web development, mobile app architecture, CRM/ERP automation, and digital scaling in India.",
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

const posts = [
  {
    category: "Web Development",
    title: "What a growing business should expect from its first website",
    excerpt:
      "A useful first website should make your offer clear, earn trust, and create a simple path to enquiry. Here is how to prioritise the work before adding complexity.",
    date: "September 9, 2026",
    readTime: "5 min read",
    author: "Maxora Engineering Team",
    serviceLink: "/services/web-development",
    serviceLabel: "Explore Web Development",
  },
  {
    category: "Enterprise Software",
    title: "When custom software is worth the investment",
    excerpt:
      "Custom software is not automatically the right answer. We look at the operational signals that make a tailored workflow more valuable than another disconnected tool.",
    date: "September 9, 2026",
    readTime: "6 min read",
    author: "Maxora Engineering Team",
    serviceLink: "/services/crm-erp",
    serviceLabel: "Explore CRM & ERP Systems",
  },
  {
    category: "Automation",
    title: "Start small: a practical path to business automation",
    excerpt:
      "The best automation opportunities are often repetitive handoffs, follow-ups, and data entry. A focused first workflow can create learning without creating unnecessary risk.",
    date: "September 9, 2026",
    readTime: "4 min read",
    author: "Maxora Engineering Team",
    serviceLink: "/services/crm-erp",
    serviceLabel: "Learn About Automation",
  },
  {
    category: "CMS & Speed",
    title: "WordPress vs Custom Next.js: Website Cost & ROI Comparison in India",
    excerpt:
      "Comparing total cost of ownership, PageSpeed scores, security maintenance, and lead conversion rates between custom Next.js builds and standard WordPress themes.",
    date: "October 2026",
    readTime: "7 min read",
    author: "Maxora Engineering Team",
    badge: "Buyer Guide",
    serviceLink: "/services/wordpress",
    serviceLabel: "Compare WordPress Options",
  },
  {
    category: "Real Estate Tech",
    title: "Custom CRM vs Commercial SaaS for Indian Real Estate Agencies",
    excerpt:
      "Why real estate brokers and property agencies lose leads on generic SaaS platforms and how custom lead pipelines with WhatsApp automation increase site visits.",
    date: "October 2026",
    readTime: "6 min read",
    author: "Maxora Engineering Team",
    badge: "Case Study",
    serviceLink: "/portfolio",
    serviceLabel: "View Real Estate CRM Demo",
  },
  {
    category: "Mobile Architecture",
    title: "Why Startups Choose Cross-Platform Apps (Flutter & React Native) in 2026",
    excerpt:
      "How early-stage companies cut development costs in half and reach iOS and Android users simultaneously without compromising on 60fps native performance.",
    date: "October 2026",
    readTime: "5 min read",
    author: "Maxora Engineering Team",
    badge: "Technical Guide",
    serviceLink: "/services/app-development",
    serviceLabel: "Explore Mobile App Services",
  },
];

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
      blogPost: posts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        datePublished: "2026-10-01",
        author: {
          "@type": "Organization",
          name: post.author,
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
            {posts.map((post) => (
              <article
                key={post.title}
                className="surface-card flex h-full flex-col p-7 hover:border-blue-500/50 transition-colors"
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
                <h2 className="mb-3 text-xl font-bold leading-snug text-gray-900 dark:text-white">
                  {post.title}
                </h2>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {post.excerpt}
                </p>

                <div className="mb-4">
                  <Link
                    href={post.serviceLink}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span>{post.serviceLabel}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 pt-4 text-xs text-gray-500 dark:border-gray-800 dark:text-gray-400">
                  <span className="inline-flex items-center gap-1">
                    <User className="h-3.5 w-3.5" />
                    {post.author}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock3 className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
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
