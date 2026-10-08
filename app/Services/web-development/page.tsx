// app/services/web-development/page.tsx
import type { Metadata } from "next";
import WebDevelopmentClient from "./WebDevelopmentClient";
import { JsonLd } from "../../components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Custom Web Development Services | Next.js & React Apps | Maxora Technology",
  description:
    "Build high-performance, scalable web applications with Maxora Technology. Expert Next.js, React, TypeScript, and modern backend engineering with SEO and security built in.",
  keywords: [
    "custom web development",
    "Next.js web development",
    "React development agency",
    "TypeScript web applications",
    "enterprise web development",
    "frontend backend development",
    "Maxora Technology web development",
  ],
  alternates: {
    canonical: "/services/web-development",
  },
  openGraph: {
    title: "Custom Web Development Services | Maxora Technology",
    description:
      "Modern, scalable web applications engineered with Next.js, React, and TypeScript. Optimized for high speed, Core Web Vitals, and search visibility.",
    url: "/services/web-development",
    siteName: "Maxora Technology",
    images: [
      {
        url: "/light logo.png",
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
    images: ["/light logo.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://maxoratechnology.com/services/web-development/#service",
      name: "Custom Web Development Services",
      serviceType: "Web Application Development",
      provider: {
        "@type": "Organization",
        "@id": "https://maxoratechnology.com/#organization",
        name: "Maxora Technology",
      },
      url: "https://maxoratechnology.com/services/web-development",
      description:
        "Custom web application development using Next.js, React, TypeScript, Node.js, and modern cloud databases with attention to Core Web Vitals performance, security, and scalability.",
      areaServed: [
        {
          "@type": "Country",
          name: "Worldwide",
        },
        {
          "@type": "Country",
          name: "India",
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
      "@id": "https://maxoratechnology.com/services/web-development/#breadcrumb",
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
          item: "https://maxoratechnology.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Web Development",
          item: "https://maxoratechnology.com/services/web-development",
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
