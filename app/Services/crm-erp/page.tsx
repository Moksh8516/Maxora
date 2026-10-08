// app/services/crm-erp/page.tsx
import type { Metadata } from "next";
import CrmErpClient from "./CrmErpClient";
import { JsonLd } from "../../components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Custom CRM & ERP Software Development | Maxora Technology",
  description:
    "Streamline enterprise workflows with custom CRM and ERP systems built by Maxora Technology. Scalable business automation, real-time analytics, and secure integrations.",
  keywords: [
    "custom CRM development",
    "custom ERP software",
    "enterprise workflow automation",
    "business management software",
    "ERP integration services",
    "Maxora Technology CRM ERP",
  ],
  alternates: {
    canonical: "/services/crm-erp",
  },
  openGraph: {
    title: "Custom CRM & ERP Software Development | Maxora Technology",
    description:
      "Automate workflows, unify business data, and scale your operations with tailored CRM/ERP systems designed by Maxora Technology.",
    url: "/services/crm-erp",
    siteName: "Maxora Technology",
    images: [
      {
        url: "/light logo.png",
        width: 1200,
        height: 630,
        alt: "Custom CRM & ERP Development - Maxora Technology",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom CRM & ERP Software Development | Maxora Technology",
    description:
      "Scalable, secure, and intuitive business management software tailored to your organization.",
    images: ["/light logo.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://maxoratechnology.com/services/crm-erp/#service",
      name: "Custom CRM & ERP Software Development",
      serviceType: "Enterprise Software Engineering",
      provider: {
        "@type": "Organization",
        "@id": "https://maxoratechnology.com/#organization",
        name: "Maxora Technology",
      },
      url: "https://maxoratechnology.com/services/crm-erp",
      description:
        "Custom development of Customer Relationship Management (CRM) and Enterprise Resource Planning (ERP) systems with workflow automation, analytics dashboards, and multi-system integration.",
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
        name: "CRM and ERP Capabilities",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Sales Pipeline & CRM Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Enterprise ERP & Inventory Systems",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Business Workflow Automation & Integrations",
            },
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://maxoratechnology.com/services/crm-erp/#breadcrumb",
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
          name: "CRM & ERP Development",
          item: "https://maxoratechnology.com/services/crm-erp",
        },
      ],
    },
  ],
};

export default function CrmErpPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <CrmErpClient />
    </>
  );
}
