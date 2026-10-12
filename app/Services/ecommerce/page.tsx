// app/services/ecommerce/page.tsx
import type { Metadata } from "next";
import EcommerceClient from "./EcommerceClient";
import { JsonLd } from "../../components/seo/StructuredData";

export const metadata: Metadata = {
  title: "E-Commerce Development Company India | Shopify & Custom Stores",
  description:
    "E-commerce development company in India building high-converting online stores with Shopify, WooCommerce, and custom headless commerce architectures.",
  alternates: {
    canonical: "/Services/ecommerce",
  },
  openGraph: {
    title: "E-Commerce Development Services | Maxora Technology",
    description:
      "High-speed, conversion-optimized e-commerce platforms engineered for growth. Custom Shopify, WooCommerce, and headless commerce solutions.",
    url: "/Services/ecommerce",
    siteName: "Maxora Technology",
    images: [
      {
        url: "/og-image.png",
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
    images: ["/og-image.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://maxoratechnology.com/Services/ecommerce/#service",
      name: "E-Commerce Development Services",
      serviceType: "Online Store & Commerce Engineering",
      provider: {
        "@type": "Organization",
        "@id": "https://maxoratechnology.com/#organization",
        name: "Maxora Technology",
      },
      url: "https://maxoratechnology.com/Services/ecommerce",
      description:
        "Full-featured e-commerce development including custom Shopify themes, WooCommerce setups, headless Next.js storefronts, payment gateways, and inventory automation.",
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
      "@id": "https://maxoratechnology.com/Services/ecommerce/#breadcrumb",
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
          name: "E-Commerce Development",
          item: "https://maxoratechnology.com/Services/ecommerce",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://maxoratechnology.com/Services/ecommerce/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which e-commerce platform is best for our business: Shopify or WooCommerce?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Shopify is ideal for businesses wanting an all-in-one hosted solution with minimal server management. WooCommerce is best for brands requiring complete customizability, open-source ownership, and lower monthly software fees.",
          },
        },
        {
          "@type": "Question",
          name: "Can you integrate local Indian payment gateways like UPI and Razorpay?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we integrate all major Indian payment solutions including UPI, Razorpay, Cashfree, PayU, and Paytm alongside international processors like Stripe and PayPal.",
          },
        },
        {
          "@type": "Question",
          name: "How do you optimize online stores for mobile shoppers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We implement sticky add-to-cart buttons, fast slide-out carts, compressed WebP media, one-click checkout options, and thumb-friendly navigation to ensure high mobile conversion rates.",
          },
        },
        {
          "@type": "Question",
          name: "Can our store sync inventory automatically with our accounting or ERP software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we build custom API connectors to sync real-time stock levels, orders, and customer data directly with your ERP, CRM, or warehouse management system.",
          },
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
