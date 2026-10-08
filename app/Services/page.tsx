// app/services/page.tsx
import type { Metadata } from "next";
import ServicesHero from "../components/section/ServiceHero";
import ServiceListings from "../components/section/ServiceListings";
import Process from "../components/section/Process";
import FAQ from "../components/section/FAQ";
import CTA from "../components/section/CTA";
import { JsonLd } from "../components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Digital Services & Custom Software Solutions",
  description:
    "Explore Maxora Technology's full suite of enterprise digital solutions: custom web apps, iOS/Android mobile development, AI CRM/ERP, and eCommerce systems.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Digital Services & Custom Software Solutions | Maxora Technology",
    description:
      "Enterprise-grade custom web applications, mobile apps, AI CRM/ERP systems, and scalable eCommerce platforms built for growing businesses.",
    url: "/services",
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
      "Discover our comprehensive digital solutions: web apps, mobile apps, custom CRM/ERP, eCommerce, and WordPress development.",
    images: ["/og-image.png"],
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://maxoratechnology.com/services/#webpage",
      url: "https://maxoratechnology.com/services",
      name: "Digital Services & Software Solutions | Maxora Technology",
      description:
        "Comprehensive digital services including web development, mobile apps, eCommerce, custom CRM/ERP, and WordPress solutions.",
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
          url: "https://maxoratechnology.com/services/web-development",
          description: "Modern, high-performance web applications built with Next.js, React, and TypeScript.",
        },
        {
          "@type": "Service",
          name: "Mobile App Development",
          url: "https://maxoratechnology.com/services/app-development",
          description: "Native iOS & Android mobile applications and cross-platform solutions with React Native and Flutter.",
        },
        {
          "@type": "Service",
          name: "Custom CRM & ERP Systems",
          url: "https://maxoratechnology.com/services/crm-erp",
          description: "AI-enhanced business management systems, workflow automation, and predictive analytics.",
        },
        {
          "@type": "Service",
          name: "eCommerce Development",
          url: "https://maxoratechnology.com/services/ecommerce",
          description: "Scalable online stores with custom Next.js, Shopify, and WooCommerce architectures.",
        },
        {
          "@type": "Service",
          name: "WordPress Development",
          url: "https://maxoratechnology.com/services/wordpress",
          description: "Bespoke WordPress theme development, plugins, speed optimization, and security management.",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://maxoratechnology.com/services/#breadcrumb",
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
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://maxoratechnology.com/services/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What's the typical timeline for a web development project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Project timelines vary based on complexity. A simple website takes 4-6 weeks, while complex web applications can take 3-6 months. We provide detailed timelines during our discovery phase.",
          },
        },
        {
          "@type": "Question",
          name: "How much does custom software development cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Custom software projects range from $15,000 for basic solutions to $100,000+ for enterprise systems. We offer transparent pricing and provide detailed quotes after understanding your requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer ongoing maintenance and support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we provide comprehensive maintenance plans including security updates, performance monitoring, technical support, and feature enhancements.",
          },
        },
        {
          "@type": "Question",
          name: "What technologies do you specialize in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We specialize in modern technologies including Next.js, React, Node.js, Python, React Native, AWS, and various databases. We choose the right stack based on your project requirements.",
          },
        },
        {
          "@type": "Question",
          name: "How do you ensure project quality and success?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We follow agile methodologies, conduct regular testing, provide progress updates, and involve clients throughout the development process to ensure alignment with expectations.",
          },
        },
        {
          "@type": "Question",
          name: "Can you work with our existing team?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. We often collaborate with in-house teams, providing specialized expertise and integrating seamlessly with your existing workflow and processes.",
          },
        },
      ],
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
