import type { Metadata } from "next";
import AiVisibilityCheckClient from "./AiVisibilityCheckClient";
import { JsonLd } from "../components/seo/StructuredData";
import { aiVisibilityContent } from "../lib/ai-visibility-data";

export const metadata: Metadata = {
  title: "Free AI Visibility Check | Maxora Technology",
  description:
    "Check whether ChatGPT, Perplexity, and Google AI Overviews recommend your business. Free technical audit and citation breakdown by Maxora Technology.",
  alternates: {
    canonical: "/ai-visibility-check",
  },
  openGraph: {
    title: "Free AI Visibility Check | Maxora Technology",
    description:
      "Does ChatGPT recommend your company? Request a free AI visibility audit and technical citation analysis from Maxora Technology.",
    url: "/ai-visibility-check",
    siteName: "Maxora Technology",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free AI Visibility Check - Maxora Technology",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Visibility Check | Maxora Technology",
    description:
      "Find out if ChatGPT, Perplexity, and Google AI Overviews cite your business over competitors.",
    images: ["/og-image.png"],
  },
};

const aiVisibilityFaqSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://maxoratechnology.com/ai-visibility-check/#webpage",
      url: "https://maxoratechnology.com/ai-visibility-check",
      name: "Free AI Visibility Check | Maxora Technology",
      description:
        "Check whether ChatGPT, Perplexity, and Google AI Overviews recommend your business.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://maxoratechnology.com/#website",
      },
      about: {
        "@type": "Organization",
        "@id": "https://maxoratechnology.com/#organization",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://maxoratechnology.com/ai-visibility-check/#faq",
      mainEntity: aiVisibilityContent.faqs.map((faq) => ({
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

export default function AiVisibilityCheckPage() {
  return (
    <>
      <JsonLd data={aiVisibilityFaqSchema} />
      <AiVisibilityCheckClient />
    </>
  );
}
