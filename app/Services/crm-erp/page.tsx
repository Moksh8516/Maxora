// app/Services/crm-erp/page.tsx
import type { Metadata } from "next";
import CrmErpClient from "./CrmErpClient";
import { JsonLd } from "../../components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Custom CRM & ERP Development",
  description:
    "Custom CRM and ERP software development company in India. We engineer tailored business management systems, workflow automation, and centralized data portals.",
  alternates: {
    canonical: "/Services/crm-erp",
  },
  openGraph: {
    title: "Custom CRM & ERP Development | Maxora Technology",
    description:
      "Automate workflows, unify business data, and scale your operations with tailored CRM/ERP systems designed by Maxora Technology.",
    url: "/Services/crm-erp",
    siteName: "Maxora Technology",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Custom CRM & ERP Development - Maxora Technology",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom CRM & ERP Development | Maxora Technology",
    description:
      "Scalable, secure, and intuitive business management software tailored to your organization.",
    images: ["/og-image.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://maxoratechnology.com/Services/crm-erp/#service",
      name: "Custom CRM & ERP Software Development",
      serviceType: "Enterprise Software Engineering",
      provider: {
        "@type": "Organization",
        "@id": "https://maxoratechnology.com/#organization",
        name: "Maxora Technology",
      },
      url: "https://maxoratechnology.com/Services/crm-erp",
      description:
        "Custom development of Customer Relationship Management (CRM) and Enterprise Resource Planning (ERP) systems with workflow automation, analytics dashboards, and multi-system integration.",
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
      "@id": "https://maxoratechnology.com/Services/crm-erp/#breadcrumb",
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
          name: "CRM & ERP Development",
          item: "https://maxoratechnology.com/Services/crm-erp",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://maxoratechnology.com/Services/crm-erp/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why should we invest in custom CRM/ERP software over Salesforce or Zoho?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Custom software gives you 100% ownership with zero per-user monthly subscription fees. It matches your exact workflow without forcing your team to adapt to rigid third-party structures.",
          },
        },
        {
          "@type": "Question",
          name: "How do you protect sensitive company and financial data?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We implement granular role-based permissions (RBAC), secure HTTPS/TLS encryption, database encryption at rest, multi-factor authentication (MFA), and detailed activity audit logs.",
          },
        },
        {
          "@type": "Question",
          name: "Can the custom CRM/ERP connect with our existing tools and WhatsApp?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we build custom API integrations to connect with payment gateways, WhatsApp Business API, email servers, accounting software (like Tally or QuickBooks), and customer portals.",
          },
        },
        {
          "@type": "Question",
          name: "How long does custom business software take to build and deploy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A modular MVP CRM/ERP typically takes 6 to 12 weeks. We build modularly so your team can begin using core features early while secondary modules are developed.",
          },
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
