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
      "@type": ["Organization", "ProfessionalService"],
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
      image: `${siteUrl}/og-image.png`,
      email: "info@maxoratechnology.com",
      telephone: "+917719545464",
      description:
        "Maxora Technology is a digital agency providing custom web development, mobile applications, CRM/ERP systems, and eCommerce solutions for growing businesses.",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Punjab",
        addressCountry: "IN",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
        {
          "@type": "Country",
          name: "Worldwide",
        },
      ],
      sameAs: [
        "https://facebook.com/maxora.technology",
        "https://instagram.com/maxora.technology",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+917719545464",
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
        "Custom Web Development, Mobile Apps, WordPress & CRM/ERP Systems",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en",
    },
  ],
};

export function JsonLd({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
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
