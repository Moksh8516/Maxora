// app/services/wordpress/page.tsx
import type { Metadata } from "next";
import WordpressClient from "./WordpressClient";
import { JsonLd } from "../../components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Custom WordPress Development Services | Themes & Speed | Maxora Technology",
  description:
    "Expert custom WordPress development by Maxora Technology. Custom Gutenberg themes, high-performance WooCommerce stores, custom plugins, and enterprise security.",
  keywords: [
    "custom WordPress development",
    "WordPress Gutenberg theme developer",
    "WooCommerce development agency",
    "WordPress speed optimization",
    "headless WordPress Next.js",
    "Maxora Technology WordPress",
  ],
  alternates: {
    canonical: "/services/wordpress",
  },
  openGraph: {
    title: "Custom WordPress Development Services | Maxora Technology",
    description:
      "High-speed, lightweight, and secure WordPress websites tailored to your brand. Custom themes, WooCommerce, and plugin engineering.",
    url: "/services/wordpress",
    siteName: "Maxora Technology",
    images: [
      {
        url: "/light logo.png",
        width: 1200,
        height: 630,
        alt: "Custom WordPress Development - Maxora Technology",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom WordPress Development Services | Maxora Technology",
    description:
      "Fast, custom Gutenberg themes and secure WordPress solutions built for growth.",
    images: ["/light logo.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://maxoratechnology.com/services/wordpress/#service",
      name: "Custom WordPress Development Services",
      serviceType: "Content Management & Web Engineering",
      provider: {
        "@type": "Organization",
        "@id": "https://maxoratechnology.com/#organization",
        name: "Maxora Technology",
      },
      url: "https://maxoratechnology.com/services/wordpress",
      description:
        "Bespoke WordPress theme and plugin development, WooCommerce optimization, site speed enhancement, and headless WordPress architectures.",
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
        name: "WordPress Capabilities",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Gutenberg Block Themes",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom WordPress Plugin Engineering",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "WooCommerce Development & Optimization",
            },
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://maxoratechnology.com/services/wordpress/#breadcrumb",
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
          name: "WordPress Development",
          item: "https://maxoratechnology.com/services/wordpress",
        },
      ],
    },
  ],
};

export default function WordpressPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <WordpressClient />
    </>
  );
}
