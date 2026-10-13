// app/contact/page.tsx
import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { JsonLd } from "../components/seo/StructuredData";

import { siteConfig } from "../lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us | Request a Consultation",
  description:
    "Connect with Maxora Technology for custom web development, mobile apps, CRM/ERP systems, and e-commerce solutions. Fast response within 24 business hours.",
  keywords: [
    "contact Maxora Technology",
    "hire software developers",
    "web development quote",
    "app development consultation",
    "custom software consultation",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Request a Consultation | Maxora Technology",
    description:
      "Ready to start your next software or web project? Connect with the Maxora Technology engineering team today.",
    url: "/contact",
    siteName: "Maxora Technology",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Maxora Technology",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Request a Consultation | Maxora Technology",
    description:
      "Schedule a technical consultation for your web, app, or enterprise software project.",
    images: ["/og-image.png"],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://maxoratechnology.com/contact/#webpage",
      url: "https://maxoratechnology.com/contact",
      name: "Contact Maxora Technology",
      description:
        "Get in touch with the Maxora Technology engineering team for web development, app development, CRM/ERP, and e-commerce solutions.",
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
            name: "Contact",
            item: "https://maxoratechnology.com/contact",
          },
        ],
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://maxoratechnology.com/#professionalservice",
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: siteConfig.url,
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      openingHours: ["Mo-Fr 09:00-18:00"],
      areaServed: [
        {
          "@type": "AdministrativeArea",
          name: "Worldwide",
        },
        ...siteConfig.serviceTowns.map((town) => ({
          "@type": "City",
          name: town,
        })),
      ],
      priceRange: "$$",
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <ContactClient />
    </>
  );
}
