import type { Metadata } from "next";
import ServicesHero from "../components/section/ServiceHero";
import ServiceListings from "../components/section/ServiceListings";
import Process from "../components/section/Process";
import FAQ from "../components/section/FAQ";
import CTA from "../components/section/CTA";
import { JsonLd } from "../components/seo/StructuredData";
import { homepageFaqs } from "../lib/faq-data";

export const metadata: Metadata = {
  title: "Digital Services & Custom Software Solutions | Maxora Technology",
  description:
    "Explore our custom digital services: fast websites, iOS and Android mobile apps, custom CRM & ERP systems, eCommerce storefronts, and automated workflows.",
  alternates: {
    canonical: "/Services",
  },
  openGraph: {
    title: "Digital Services & Custom Software Solutions | Maxora Technology",
    description:
      "Explore our custom digital services: fast websites, mobile apps, CRM/ERP platforms, and automated workflows built for growing companies.",
    url: "/Services",
    siteName: "Maxora Technology",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maxora Technology Digital Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Services & Custom Software Solutions | Maxora Technology",
    description:
      "Custom websites, mobile apps, tailored CRM/ERP systems, and automated workflows built for growing businesses.",
    images: ["/og-image.png"],
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://maxoratechnology.com/Services/#webpage",
      url: "https://maxoratechnology.com/Services",
      name: "Digital Services & Custom Software Solutions | Maxora Technology",
      description:
        "Comprehensive digital services including web development, mobile apps, eCommerce, custom CRM/ERP, and workflow automations.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://maxoratechnology.com/#website",
      },
      about: {
        "@type": "Organization",
        "@id": "https://maxoratechnology.com/#organization",
      },
      hasPart: [
        {
          "@type": "Service",
          name: "Custom Web Development",
          url: "https://maxoratechnology.com/Services/web-development",
          description: "Fast, search-ready web applications built with Next.js, React, and TypeScript.",
        },
        {
          "@type": "Service",
          name: "Mobile App Development",
          url: "https://maxoratechnology.com/Services/app-development",
          description: "Reliable iOS and Android mobile applications built with Flutter and React Native.",
        },
        {
          "@type": "Service",
          name: "Custom CRM & ERP Systems",
          url: "https://maxoratechnology.com/Services/crm-erp",
          description: "Tailored business management dashboards and automated lead pipelines with zero per-seat licensing fees.",
        },
        {
          "@type": "Service",
          name: "eCommerce Development",
          url: "https://maxoratechnology.com/Services/ecommerce",
          description: "Online stores with fast checkout, live inventory tracking, and secure payment processing.",
        },
        {
          "@type": "Service",
          name: "WordPress Development",
          url: "https://maxoratechnology.com/Services/wordpress",
          description: "Clean Gutenberg block themes, fast loading speeds, and simple content management for non-technical teams.",
        },
        {
          "@type": "Service",
          name: "Technical SEO & AEO Optimization",
          url: "https://maxoratechnology.com/Services/seo-aeo",
          description: "Google search optimization, Core Web Vitals performance, and structured data implementation for AI answers.",
        },
        {
          "@type": "Service",
          name: "AI & Automation Services",
          url: "https://maxoratechnology.com/Services/ai-automation",
          description: "Official WhatsApp customer support bots, automated lead notifications, and workflow integrations.",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://maxoratechnology.com/Services/#breadcrumb",
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
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://maxoratechnology.com/Services/#faq",
      mainEntity: homepageFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function ServicesPage() {
  return (
    <main className="pt-24">
      <JsonLd data={servicesSchema} />
      <ServicesHero />
      <ServiceListings />
      <Process />
      <FAQ />
      <CTA />
    </main>
  );
}
