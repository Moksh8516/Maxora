// app/components/seo/LandingPageSchema.tsx
import React from "react";
import { siteConfig } from "@/app/lib/site-config";
import { JsonLd } from "@/app/components/seo/StructuredData";
import type { LandingPageData } from "@/content/landing-pages/types";

interface LandingPageSchemaProps {
  data: LandingPageData;
}

export default function LandingPageSchema({ data }: LandingPageSchemaProps) {
  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "https://maxoratechnology.com"
  ).replace(/\/$/, "");

  const pageUrl = `${siteUrl}/${data.slug}`;

  // 1. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}/#breadcrumb`,
    itemListElement: data.breadcrumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.name,
      item: crumb.href.startsWith("http") ? crumb.href : `${siteUrl}${crumb.href}`,
    })),
  };

  // 2. Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}/#service`,
    name: data.primaryKeyword,
    serviceType: data.serviceType,
    description: data.seo.description,
    url: pageUrl,
    provider: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteConfig.name,
      url: siteUrl,
      telephone: siteConfig.contact.phoneTel,
      email: siteConfig.contact.email,
    },
    areaServed: data.isCityPage && data.city
      ? [
          {
            "@type": "City",
            name: data.city,
          },
          {
            "@type": "AdministrativeArea",
            name: "Punjab",
          },
          {
            "@type": "Country",
            name: "India",
          },
        ]
      : [
          {
            "@type": "Country",
            name: "India",
          },
          {
            "@type": "AdministrativeArea",
            name: "Worldwide",
          },
        ],
  };

  // 3. FAQPage Schema (Strictly matches visible FAQ text)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}/#faq`,
    mainEntity: data.faqs.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  // 4. LocalBusiness / ProfessionalService (City pages only)
  const localBusinessSchema = data.isCityPage
    ? {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#localservice-${data.city?.toLowerCase() || "patiala"}`,
        name: `${siteConfig.name} - ${data.city || "Patiala"}`,
        legalName: siteConfig.legalName,
        url: pageUrl,
        telephone: siteConfig.contact.phoneTel,
        email: siteConfig.contact.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: data.city || "Patiala",
          addressRegion: "Punjab",
          addressCountry: "IN",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        priceRange: "$$",
      }
    : null;

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      {localBusinessSchema && <JsonLd data={localBusinessSchema} />}
    </>
  );
}
