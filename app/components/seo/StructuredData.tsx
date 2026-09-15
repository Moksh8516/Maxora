const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://maxoratechnology.com"
).replace(/\/$/, "");

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Maxora Technology",
      url: siteUrl,
      logo: `${siteUrl}/icon.png`,
      email: "info@maxoratechnology.com",
      telephone: "+917814950023",
      sameAs: [
        "https://facebook.com/maxora.technology",
        "https://instagram.com/maxora.technology",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Maxora Technology",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Maxora Technology | Premium IT Solutions & Digital Innovation",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
