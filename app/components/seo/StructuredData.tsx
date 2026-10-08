import React from "react";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://maxoratechnology.com"
).replace(/\/$/, "");

export const defaultOrganizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Maxora Technology",
      legalName: "Maxora Technology",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#logo`,
        url: `${siteUrl}/light%20logo.png`,
        contentUrl: `${siteUrl}/light%20logo.png`,
        caption: "Maxora Technology Logo",
        width: "500",
        height: "150",
      },
      image: `${siteUrl}/light%20logo.png`,
      email: "info@maxoratechnology.com",
      telephone: "+917814950023",
      description:
        "Maxora Technology is a digital agency providing custom web development, mobile application development, AI-powered CRM/ERP business systems, and eCommerce solutions for growing businesses worldwide.",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Punjab",
        addressCountry: "IN",
      },
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
      sameAs: [
        "https://facebook.com/maxora.technology",
        "https://instagram.com/maxora.technology",
        "https://linkedin.com",
        "https://x.com",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+917814950023",
          contactType: "customer service",
          email: "info@maxoratechnology.com",
          availableLanguage: ["English", "Hindi", "Punjabi"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Maxora Technology",
      description:
        "Custom Web Development, Mobile Apps, CRM/ERP & Cloud Solutions",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en",
    },
  ],
};

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function StructuredData() {
  return <JsonLd data={defaultOrganizationSchema} />;
}

