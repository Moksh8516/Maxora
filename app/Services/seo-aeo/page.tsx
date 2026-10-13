// app/Services/seo-aeo/page.tsx
import type { Metadata } from "next";
import SeoAeoClient from "./SeoAeoClient";
import { JsonLd } from "../../components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Technical SEO & AEO Services in India",
  description:
    "Technical SEO and generative engine optimization in India. We engineer Core Web Vitals, Schema graphs, and content structure for Google and AI answer engines.",
  alternates: {
    canonical: "/Services/seo-aeo",
  },
  openGraph: {
    title: "Technical SEO & AEO Services in India | Maxora Technology",
    description:
      "Modern technical SEO, Core Web Vitals engineering, Schema JSON-LD, and generative engine optimization to capture Google and AI search visibility.",
    url: "/Services/seo-aeo",
    siteName: "Maxora Technology",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Technical SEO & AI Engine Optimization - Maxora Technology",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical SEO & AEO Services in India | Maxora Technology",
    description:
      "Optimize your website for Google Search and AI answer engines like ChatGPT and Perplexity.",
    images: ["/og-image.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://maxoratechnology.com/Services/seo-aeo/#service",
      name: "Technical SEO & AI Answer Engine Optimization (AEO)",
      serviceType: "Search Engine & AI Optimization Engineering",
      provider: {
        "@type": "Organization",
        "@id": "https://maxoratechnology.com/#organization",
        name: "Maxora Technology",
      },
      url: "https://maxoratechnology.com/Services/seo-aeo",
      description:
        "Full-stack Technical SEO and Generative Engine Optimization (GEO/AEO) ensuring fast Core Web Vitals, structured Schema.org data, extractable content passages, and citations across Google AI Overviews, ChatGPT, and Perplexity.",
      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
        {
          "@type": "AdministrativeArea",
          name: "Worldwide",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "SEO and AEO Capabilities",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Core Web Vitals & Technical Speed Optimization",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Generative Engine Optimization (AEO/GEO) & Answer Blocks",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Advanced Schema.org Entity Graph Implementation",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Agent Readiness & llms.txt Architecture",
            },
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://maxoratechnology.com/Services/seo-aeo/#breadcrumb",
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
          name: "Services",
          item: "https://maxoratechnology.com/Services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "SEO & AEO Services",
          item: "https://maxoratechnology.com/Services/seo-aeo",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://maxoratechnology.com/Services/seo-aeo/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the difference between traditional SEO and AEO (Answer Engine Optimization)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Traditional SEO focuses on ranking web pages in search engine result lists. AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) structure and position your content so AI assistants like ChatGPT, Perplexity, and Google AI Overviews extract and cite your brand as an authoritative, direct answer to buyer queries.",
          },
        },
        {
          "@type": "Question",
          name: "How do we get our business cited in ChatGPT and Google AI Overviews?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI models select sources that provide clear direct answer passages, structured Schema.org entity data, reliable technical performance, and verified brand consensus across authoritative third-party platforms.",
          },
        },
        {
          "@type": "Question",
          name: "Will technical SEO and AEO improve our existing website traffic?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Technical SEO resolves crawl bottlenecks, optimizes Core Web Vitals, and structures content for both organic search queries and generative answer engines to safeguard visibility.",
          },
        },
        {
          "@type": "Question",
          name: "What is llms.txt and does our company website need it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "llms.txt is an emerging standard that provides a clean, Markdown-formatted summary of your company, services, and technical capabilities so autonomous AI agents can parse and recommend your business without executing complex client scripts.",
          },
        },
      ],
    },
  ],
};

export default function SeoAeoPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <SeoAeoClient />
    </>
  );
}
