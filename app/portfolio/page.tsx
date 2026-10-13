// app/portfolio/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, FolderGit2 } from "lucide-react";
import { JsonLd } from "../components/seo/StructuredData";
import { portfolioContent } from "../lib/portfolio-data";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",
  description:
    "Explore custom websites, mobile applications, and enterprise systems engineered by Maxora Technology for ambitious companies in India and worldwide.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio & Case Studies | Maxora Technology",
    description:
      "Explore software architectures, web applications, and live interactive systems engineered by Maxora Technology.",
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
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Case Studies | Maxora Technology",
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
      name: "Portfolio & Case Studies | Maxora Technology",
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
              <span>{portfolioContent.header.badge}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-heading mb-6 tracking-tight">
              {portfolioContent.header.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {portfolioContent.header.description}
            </p>
          </header>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
            {portfolioContent.caseStudies.map((project) => (
              <div
                key={project.id}
                className="rounded-3xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800/80 overflow-hidden shadow-lg flex flex-col justify-between hover:-translate-y-1 transition-all"
              >
                <div>
                  {/* Screenshot Thumbnail */}
                  <div className="relative w-full h-52 bg-slate-950 overflow-hidden border-b border-gray-100 dark:border-gray-800">
                    <Image
                      src={project.screenshotUrl}
                      alt={project.screenshotAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                    {project.isLiveDemo && (
                      <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-500 text-white shadow-md">
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        Live Demo
                      </span>
                    )}
                  </div>

                  <div className="p-7">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-2">
                      {project.industry}
                    </span>

                    <h2 className="text-2xl font-bold font-heading mb-3 text-gray-900 dark:text-white">
                      {project.projectName}
                    </h2>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">
                      {project.whatWeBuilt}
                    </p>

                    {/* Tech used badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techUsed.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>


                  </div>
                </div>

                <div className="p-7 pt-0">
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
                      <span>Inquire About Similar Architecture</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* TODO(owner): Add approved client work / REAL_LOCAL_PROOF as individual /work/<slug> pages when client names and case studies are approved. Omitted to avoid fabricating client proof. */}

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
