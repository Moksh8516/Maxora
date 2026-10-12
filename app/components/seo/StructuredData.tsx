import React from "react";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://maxoratechnology.com"
).replace(/\/$/, "");

import { siteConfig } from "../../lib/site-config";

export const defaultOrganizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${siteUrl}/#organization`,
      name: siteConfig.name,
      legalName: siteConfig.legalName,
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
      email: siteConfig.contact.email,
      telephone: siteConfig.contact.phoneTel,
      description: siteConfig.description,
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
          "@type": "AdministrativeArea",
          name: "Worldwide",
        },
      ],
      sameAs: [
        siteConfig.social.facebook,
        siteConfig.social.instagram,
        ...(siteConfig.social.linkedin ? [siteConfig.social.linkedin] : []),
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: siteConfig.contact.phoneTel,
          contactType: "customer service",
          email: siteConfig.contact.email,
          availableLanguage: ["English", "Hindi", "Punjabi"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en",
    },
    ...siteConfig.services.map((service) => ({
      "@type": "Service",
      "@id": `${siteUrl}${service.href}/#service`,
      name: service.title,
      description: service.description,
      provider: { "@id": `${siteUrl}/#organization` },
      url: `${siteUrl}${service.href}`,
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
    })),
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
