// app/contact/page.tsx
import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { JsonLd } from "../components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Contact Us | Request a Consultation | Maxora Technology",
  description:
    "Get in touch with Maxora Technology for web development, mobile apps, custom CRM/ERP, and ecommerce solutions. Response within 24 hours.",
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
    title: "Contact Maxora Technology | Get in Touch",
    description:
      "Ready to start your next software or web project? Connect with the Maxora Technology engineering team today.",
    url: "/contact",
    siteName: "Maxora Technology",
    images: [
      {
        url: "/light logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Maxora Technology",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Maxora Technology | Get in Touch",
    description:
      "Schedule a technical consultation for your web, app, or enterprise software project.",
    images: ["/light logo.png"],
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
      mainEntity: {
        "@type": "Organization",
        "@id": "https://maxoratechnology.com/#organization",
        name: "Maxora Technology",
        telephone: "+91-7814950023",
        email: "info@maxoratechnology.com",
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+91-7814950023",
            contactType: "customer service",
            email: "info@maxoratechnology.com",
            availableLanguage: ["English", "Hindi", "Punjabi"],
          },
        ],
      },
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
