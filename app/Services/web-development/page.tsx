// app/Services/web-development/page.tsx
import type { Metadata } from "next";
import WebDevelopmentClient from "./WebDevelopmentClient";
import { JsonLd } from "../../components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Custom Web Development Services",
  description:
    "Custom web development company in India building high-speed Next.js and React applications for growing businesses. Clean code, SEO, and scalable backends.",
  alternates: {
    canonical: "/Services/web-development",
  },
  openGraph: {
    title: "Custom Web Development Services | Maxora Technology",
    description:
      "Modern, scalable web applications engineered with Next.js, React, and TypeScript. Optimized for high speed, Core Web Vitals, and search visibility.",
    url: "/Services/web-development",
    siteName: "Maxora Technology",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Custom Web Development - Maxora Technology",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web Development Services | Maxora Technology",
    description:
      "Fast, accessible, and search-optimized custom web applications built for growing businesses.",
    images: ["/og-image.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://maxoratechnology.com/Services/web-development/#service",
      name: "Custom Web Development Services",
      serviceType: "Web Application Development",
      provider: {
        "@type": "Organization",
        "@id": "https://maxoratechnology.com/#organization",
        name: "Maxora Technology",
      },
      url: "https://maxoratechnology.com/Services/web-development",
      description:
        "Custom web application development using Next.js, React, TypeScript, Node.js, and modern cloud databases with attention to Core Web Vitals performance, security, and scalability.",
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
        name: "Web Development Capabilities",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Frontend Development (React, Next.js, TypeScript)",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Backend & API Engineering (Node.js, PostgreSQL, GraphQL)",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Full Stack Web Application Architecture",
            },
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://maxoratechnology.com/Services/web-development/#breadcrumb",
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
          name: "Web Development",
          item: "https://maxoratechnology.com/Services/web-development",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://maxoratechnology.com/Services/web-development/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why should we build a custom website instead of using WordPress or Wix?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Custom web development with Next.js and React provides unmatched speed, full design flexibility, enterprise-grade security, and complete ownership of your codebase without plugin vulnerabilities or licensing fees.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a typical custom web development project take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most custom web development projects take between 4 to 8 weeks depending on scope, custom integrations, and data migration needs. We provide a milestone-driven schedule during project scoping.",
          },
        },
        {
          "@type": "Question",
          name: "Will our website be optimized for mobile devices and search engines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. All web applications engineered by Maxora Technology are fully responsive across smartphones, tablets, and desktops, and include technical SEO, schema markup, and Core Web Vitals optimization.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer post-launch support and maintenance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we provide ongoing technical support, security patches, framework updates, and feature enhancements to ensure your digital products remain fast and reliable.",
          },
        },
      ],
    },
  ],
};

export default function WebDevelopmentPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <WebDevelopmentClient />
    </>
  );
}
