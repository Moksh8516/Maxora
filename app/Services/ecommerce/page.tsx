// app/services/ecommerce/page.tsx
import type { Metadata } from "next";
import EcommerceClient from "./EcommerceClient";
import { JsonLd } from "../../components/seo/StructuredData";

export const metadata: Metadata = {
  title: "E-Commerce Development Services | Shopify & Custom Stores | Maxora Technology",
  description:
    "Launch high-converting, lightning-fast online stores with Maxora Technology. Expert custom Shopify, WooCommerce, headless commerce, and payment integrations.",
  keywords: [
    "ecommerce development services",
    "Shopify developers",
    "WooCommerce custom development",
    "headless commerce agency",
    "online store development",
    "Maxora Technology ecommerce",
  ],
  alternates: {
    canonical: "/services/ecommerce",
  },
  openGraph: {
    title: "E-Commerce Development Services | Maxora Technology",
    description:
      "High-speed, conversion-optimized e-commerce platforms engineered for growth. Custom Shopify, WooCommerce, and headless commerce solutions.",
    url: "/services/ecommerce",
    siteName: "Maxora Technology",
    images: [
      {
        url: "/light logo.png",
        width: 1200,
        height: 630,
        alt: "E-Commerce Development Services - Maxora Technology",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Development Services | Maxora Technology",
    description:
      "Boost sales and conversion rates with secure, high-performance online stores built by Maxora Technology.",
    images: ["/light logo.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://maxoratechnology.com/services/ecommerce/#service",
      name: "E-Commerce Development Services",
      serviceType: "Online Store & Commerce Engineering",
      provider: {
        "@type": "Organization",
        "@id": "https://maxoratechnology.com/#organization",
        name: "Maxora Technology",
      },
      url: "https://maxoratechnology.com/services/ecommerce",
      description:
        "Full-featured e-commerce development including custom Shopify themes, WooCommerce setups, headless Next.js storefronts, payment gateways, and inventory automation.",
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
        name: "E-Commerce Capabilities",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Shopify & Shopify Plus Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "WooCommerce Customization & Optimization",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Headless E-Commerce with Next.js",
            },
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://maxoratechnology.com/services/ecommerce/#breadcrumb",
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
          name: "E-Commerce Development",
          item: "https://maxoratechnology.com/services/ecommerce",
        },
      ],
    },
  ],
};

export default function EcommercePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <EcommerceClient />
    </>
  );
}
