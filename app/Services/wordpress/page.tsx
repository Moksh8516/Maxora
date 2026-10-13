// app/Services/wordpress/page.tsx
import type { Metadata } from "next";
import WordpressClient from "./WordpressClient";
import { JsonLd } from "../../components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Custom WordPress Development",
  description:
    "Expert WordPress development company in India. Custom Gutenberg block themes, WooCommerce stores, speed optimization, and secure plugin engineering.",
  alternates: {
    canonical: "/Services/wordpress",
  },
  openGraph: {
    title: "Custom WordPress Development Services | Maxora Technology",
    description:
      "High-speed, lightweight, and secure WordPress websites tailored to your brand. Custom themes, WooCommerce, and plugin engineering.",
    url: "/Services/wordpress",
    siteName: "Maxora Technology",
    images: [
      {
        url: "/og-image.png",
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
    images: ["/og-image.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://maxoratechnology.com/Services/wordpress/#service",
      name: "Custom WordPress Development Services",
      serviceType: "Content Management & Web Engineering",
      provider: {
        "@type": "Organization",
        "@id": "https://maxoratechnology.com/#organization",
        name: "Maxora Technology",
      },
      url: "https://maxoratechnology.com/Services/wordpress",
      description:
        "Bespoke WordPress theme and plugin development, WooCommerce optimization, site speed enhancement, and headless WordPress architectures.",
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
      "@id": "https://maxoratechnology.com/Services/wordpress/#breadcrumb",
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
          name: "WordPress Development",
          item: "https://maxoratechnology.com/Services/wordpress",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://maxoratechnology.com/Services/wordpress/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why do you recommend custom Gutenberg themes over Elementor or Divi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Custom Gutenberg themes generate significantly cleaner HTML and CSS, resulting in page load times under 1.5 seconds, higher Google rankings, and lower long-term maintenance costs.",
          },
        },
        {
          "@type": "Question",
          name: "Can you migrate our existing WordPress content to a new custom theme?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we safely migrate your posts, pages, images, taxonomies, and SEO metadata with 301 redirect mappings to ensure zero loss of organic search traffic.",
          },
        },
        {
          "@type": "Question",
          name: "Is WordPress secure for business websites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "When built with custom code, strict file permissions, two-factor authentication, and maintained with regular updates, WordPress is an extremely secure and robust CMS.",
          },
        },
        {
          "@type": "Question",
          name: "Can we manage and edit all website content ourselves?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We design the Gutenberg editing experience so your marketing team can easily create new pages, edit text, swap images, and publish blogs without touching code.",
          },
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
