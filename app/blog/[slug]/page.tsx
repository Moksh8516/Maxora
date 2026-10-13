// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Clock3,
  User,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  MessageSquare,
  Share2,
  Calendar,
} from "lucide-react";
import { blogPosts, BlogPost } from "../../lib/blog-data";
import { JsonLd } from "../../components/seo/StructuredData";
import { siteConfig } from "../../lib/site-config";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.seoTitle} | Maxora Technology`,
      description: post.seoDescription,
      url: `/blog/${post.slug}`,
      siteName: "Maxora Technology",
      type: "article",
      publishedTime: post.datePublished,
      authors: [post.author.name],
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.seoTitle} | Maxora Technology`,
      description: post.seoDescription,
      images: ["/og-image.png"],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const postSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `https://maxoratechnology.com/blog/${post.slug}/#article`,
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://maxoratechnology.com/#website",
        },
        headline: post.title,
        description: post.excerpt,
        datePublished: post.datePublished,
        dateModified: post.datePublished,
        mainEntityOfPage: `https://maxoratechnology.com/blog/${post.slug}`,
        author: {
          "@type": "Organization",
          name: post.author.name,
          url: "https://maxoratechnology.com/about",
        },
        publisher: {
          "@type": "Organization",
          "@id": "https://maxoratechnology.com/#organization",
          name: "Maxora Technology",
          logo: {
            "@type": "ImageObject",
            url: "https://maxoratechnology.com/og-image.png",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://maxoratechnology.com/blog/${post.slug}/#breadcrumb`,
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
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `https://maxoratechnology.com/blog/${post.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `https://maxoratechnology.com/blog/${post.slug}/#faq`,
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={postSchema} />
      <article className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-cyan-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-cyan-950/10 -z-10" />
        <div className="absolute top-24 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Back to Blog */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all engineering notes</span>
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4">
              <span>{post.category}</span>
              {post.badge && (
                <span className="rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 px-2.5 py-1 text-[11px] font-bold">
                  {post.badge}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 border-y border-gray-200/80 dark:border-gray-800/80 py-4">
              <span className="inline-flex items-center gap-2">
                <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="font-medium text-gray-900 dark:text-gray-200">
                  {post.author.name}
                </span>{" "}
                ({post.author.role})
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </header>

          {/* Key Summary (AEO Answer Block) */}
          <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Key Takeaway / Direct Summary</span>
            </div>
            <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
              {post.content.summary}
            </p>
          </div>

          {/* Table of Contents */}
          {post.tableOfContents && post.tableOfContents.length > 0 && (
            <nav className="mb-12 p-6 rounded-2xl bg-white/70 dark:bg-gray-900/70 border border-gray-200/70 dark:border-gray-800/70">
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
                Table of Contents
              </h2>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                {post.tableOfContents.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={`#${item.id}`}
                      className="hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors flex items-center gap-2"
                    >
                      <span className="text-blue-500 text-xs font-mono">
                        0{idx + 1}.
                      </span>
                      <span>{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Main Article Content */}
          <div className="space-y-12 text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
            {post.content.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-32">
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 dark:text-white mb-6">
                  {section.heading}
                </h2>

                {section.body.map((para, pIdx) => (
                  <p key={pIdx} className="mb-5 leading-relaxed">
                    {para}
                  </p>
                ))}

                {section.listItems && (
                  <ul className="my-6 space-y-3 pl-2">
                    {section.listItems.map((item, lIdx) => (
                      <li key={lIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.table && (
                  <div className="my-8 overflow-x-auto rounded-2xl border border-gray-200/80 dark:border-gray-800/80">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-gray-100 dark:bg-gray-800/80 text-gray-900 dark:text-white font-semibold">
                        <tr>
                          {section.table.headers.map((h, hIdx) => (
                            <th key={hIdx} className="p-4 border-b border-gray-200 dark:border-gray-700">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 dark:divide-gray-800 bg-white dark:bg-gray-900">
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="p-4">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {section.callout && (
                  <div className="my-6 p-6 rounded-2xl bg-blue-500/10 border-l-4 border-blue-500 text-gray-800 dark:text-gray-200 text-sm sm:text-base font-medium">
                    {section.callout.text}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Contextual Service Callout */}
          <div className="my-16 p-8 rounded-3xl bg-white dark:bg-gray-900 border border-blue-500/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
                Related Maxora Capability
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Need help engineering this for your business?
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Our team delivers end-to-end software, custom web apps, and technical optimization.
              </p>
            </div>
            <Link
              href={post.serviceLink}
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:shadow-lg transition-all"
            >
              <span>{post.serviceLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* FAQs Section */}
          {post.faqs && post.faqs.length > 0 && (
            <section className="my-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-3">
                <HelpCircle className="w-4 h-4" /> Q&A
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 dark:text-white mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {post.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800/80 shadow-sm"
                  >
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Consultation CTA */}
          <section className="rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-8 sm:p-12 text-center text-white shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-5">
              <MessageSquare className="w-7 h-7" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-3">
              Have a Project in Mind?
            </h2>
            <p className="text-base text-blue-50 max-w-xl mx-auto mb-8">
              Discuss your technical requirements, timeline, and goals directly with our engineers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white text-blue-700 font-bold hover:bg-blue-50 transition-all"
              >
                <span>Book Technical Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${siteConfig.contact.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border-2 border-white/60 text-white font-semibold hover:bg-white/10 transition-all"
              >
                <span>Call {siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
