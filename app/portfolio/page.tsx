import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Sparkles, FolderGit2, CheckCircle } from "lucide-react";
import { JsonLd } from "../components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Portfolio & Product Demos",
  description:
    "Explore digital products, custom web applications, and live demos built by Maxora Technology for growing businesses.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio & Product Demos | Maxora Technology",
    description:
      "Explore digital products, custom web applications, and live demos built by Maxora Technology.",
    url: "/portfolio",
    siteName: "Maxora Technology",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maxora Technology Portfolio & Work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Product Demos | Maxora Technology",
    description: "Explore digital products and web applications built by Maxora Technology.",
    images: ["/og-image.png"],
  },
};

const portfolioSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://maxoratechnology.com/portfolio/#webpage",
      url: "https://maxoratechnology.com/portfolio",
      name: "Portfolio & Product Demos | Maxora Technology",
      description: "Digital products and custom software built by Maxora Technology.",
      breadcrumb: {
        "@type": "BreadcrumbList",
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
            name: "Portfolio",
            item: "https://maxoratechnology.com/portfolio",
          },
        ],
      },
    },
  ],
};

const projects = [
  {
    title: "Real Estate CRM & Lead Manager",
    category: "Custom Web Application",
    description:
      "A complete real estate lead management platform featuring property listings, automated agent follow-ups, and interactive sales pipeline dashboards.",
    demoUrl: "https://realestate.maxoratechnology.com",
    isLive: true,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "CRM", "Live Demo"],
  },
  {
    title: "BusinessOS Platform",
    category: "Enterprise System",
    description:
      "Modular operational system uniting sales, employee task workflows, and billing management. [TODO: Add client/product details upon confirmation]",
    isLive: false,
    tags: ["React", "Node.js", "PostgreSQL", "Workflow Engine"],
  },
  {
    title: "Review & Reputation Dashboard",
    category: "SaaS Product",
    description:
      "Centralized feedback and customer review management platform for multi-location businesses. [TODO: Add client/product details upon confirmation]",
    isLive: false,
    tags: ["Next.js", "Analytics", "API Integration"],
  },
];

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={portfolioSchema} />
      <main className="relative overflow-hidden pt-28 pb-24 lg:pt-36 lg:pb-32 text-gray-900 dark:text-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              <FolderGit2 className="w-4 h-4" />
              <span>Our Work & Demos</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-heading mb-6 tracking-tight">
              Selected Digital Products & Demos
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We design and build custom software that solves real operational bottlenecks. Explore our live demos and product architectures.
            </p>
          </header>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800/80 p-8 shadow-lg flex flex-col justify-between hover:-translate-y-1 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      {project.category}
                    </span>
                    {project.isLive && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-green-500/10 text-green-600 dark:text-green-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Live Demo
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl font-bold font-heading mb-3 text-gray-900 dark:text-white">
                    {project.title}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-between w-full p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold text-sm hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                    >
                      <span>Launch Interactive Demo</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  ) : (
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-between w-full p-3.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      <span>Inquire About This Architecture</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-8 sm:p-12 text-center text-white shadow-xl">
            <h2 className="text-3xl font-bold font-heading mb-4">
              Have a Custom Product in Mind?
            </h2>
            <p className="text-blue-50 max-w-xl mx-auto mb-8 text-lg">
              Let&apos;s discuss your business requirements, timeline, and system architecture.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-700 font-bold text-lg hover:bg-blue-50 transition-all"
            >
              <span>Schedule Technical Consultation</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
