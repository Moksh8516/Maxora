import type { Metadata } from "next";
import Hero from "./components/section/Hero";
import WhyMaxora from "./components/section/WhyMaxora";
import Services from "./components/section/Services";
import PopularSolutionsStrip from "./components/section/PopularSolutionsStrip";
import FAQ from "./components/section/FAQ";
import { homepageFaqs } from "./lib/faq-data";
import { JsonLd } from "./components/seo/StructuredData";
import { siteConfig } from "./lib/site-config";

export const metadata: Metadata = {
  title: "Custom Web & App Development Company",
  description:
    "Based in Patiala, Punjab, India. Maxora Technology builds custom websites, mobile apps, CRM/ERP systems, and scalable eCommerce platforms for clients worldwide.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Custom Web & App Development Company | Maxora Technology",
    description:
      "Based in Patiala, Punjab, India. Custom web and mobile app development, scalable eCommerce, and bespoke CRM/ERP systems for clients worldwide.",
    url: "/",
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maxora Technology - Custom Web and App Development",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web & App Development Company | Maxora Technology",
    description:
      "Based in Patiala, Punjab, India. Custom web applications, mobile apps, and CRM/ERP systems for growing businesses worldwide.",
    images: ["/og-image.png"],
  },
};

const homePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://maxoratechnology.com/#webpage",
      url: "https://maxoratechnology.com/",
      name: "Custom Web & App Development Company | Maxora Technology",
      description:
        "Based in Patiala, Punjab, India. Maxora Technology builds custom websites, mobile applications, CRM/ERP systems, and scalable eCommerce platforms for growing businesses worldwide.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://maxoratechnology.com/#website",
      },
      about: {
        "@type": "Organization",
        "@id": "https://maxoratechnology.com/#organization",
      },
      inLanguage: "en",
    },
    {
      "@type": "Organization",
      "@id": "https://maxoratechnology.com/#organization",
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: siteConfig.url,
      email: siteConfig.contact.email,
      telephone: siteConfig.contact.phoneTel,
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://maxoratechnology.com/#localservice",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.contact.phoneTel,
      email: siteConfig.contact.email,
      areaServed: siteConfig.serviceTowns.map((town) => ({
        "@type": "City",
        name: town,
      })),
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://maxoratechnology.com/#faq",
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

export default function Home() {
  return (
    <>
      <JsonLd data={homePageSchema} />
      <Hero />
      <WhyMaxora />
      <Services />
      <PopularSolutionsStrip />
      <FAQ />
    </>
  );
}

