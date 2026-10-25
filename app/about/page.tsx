// app/about/page.tsx
import type { Metadata } from "next";
import { JsonLd } from "../components/seo/StructuredData";
import { siteConfig } from "../lib/site-config";
import { aboutMetadata } from "../lib/agency-about-data";

// Section Components
import AboutHero from "../components/section/about/AboutHero";
import OurExperience from "../components/section/about/OurExperience";
import WhyWeFocus from "../components/section/about/WhyWeFocus";
import OurApproach from "../components/section/about/OurApproach";
import WhatWeBelieve from "../components/section/about/WhatWeBelieve";
import WhyChooseUs from "../components/section/about/WhyChooseUs";
import SecurityConfidentiality from "../components/section/SecurityConfidentiality";
import AboutCta from "../components/section/about/AboutCta";

export const metadata: Metadata = {
  title: aboutMetadata.title,
  description: aboutMetadata.description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: aboutMetadata.title,
    description: aboutMetadata.description,
    url: "/about",
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - About Our Engineering Team`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: aboutMetadata.title,
    description: aboutMetadata.description,
    images: ["/og-image.png"],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://maxoratechnology.com/about/#webpage",
      url: "https://maxoratechnology.com/about",
      name: aboutMetadata.title,
      description: aboutMetadata.description,
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://maxoratechnology.com/#website",
      },
      about: {
        "@type": "Organization",
        "@id": "https://maxoratechnology.com/#organization",
      },
      inLanguage: "en",
    },
    {
      "@type": "Organization",
      "@id": "https://maxoratechnology.com/#organization",
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: siteConfig.url,
      email: siteConfig.contact.email,
      telephone: siteConfig.contact.phoneTel,
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutSchema} />
      <main className="relative min-h-screen">
        {/* 1. Intro hero */}
        <AboutHero />

        {/* 2. Our experience (text & icons only, NO team section or photos) */}
        <OurExperience />

        {/* 3. Why we focus */}
        <WhyWeFocus />

        {/* 4. Our approach (5 steps) */}
        <OurApproach />

        {/* 5. What we believe (4 values) */}
        <WhatWeBelieve />

        {/* 6. Why choose us (5 points) */}
        <WhyChooseUs />

        {/* 7. Security and confidentiality (reused component) */}
        <SecurityConfidentiality />

        {/* 8. Final call to action */}
        <AboutCta />
      </main>
    </>
  );
}
