import type { Metadata } from "next";
import Hero from "./components/section/Hero";
import Services from "./components/section/Services";
import { JsonLd } from "./components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Maxora Technology | Custom Web & App Development, CRM & Cloud Solutions",
  description:
    "Maxora Technology builds high-performance custom websites, mobile applications, AI-powered CRM/ERP systems, and scalable eCommerce platforms for growing businesses worldwide.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Maxora Technology | Custom Web & App Development, CRM & Cloud Solutions",
    description:
      "Transform your business with cutting-edge App Development, Web Solutions, eCommerce, and Custom CRM/ERP systems. Global IT services with enterprise-grade quality.",
    url: "/",
    siteName: "Maxora Technology",
    images: [
      {
        url: "/light logo.png",
        width: 1200,
        height: 630,
        alt: "Maxora Technology - Digital Solutions & Software Engineering",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxora Technology | Custom Web & App Development, CRM & Cloud Solutions",
    description:
      "Custom web applications, iOS/Android mobile apps, and AI-powered CRM/ERP systems tailored for growing businesses.",
    images: ["/light logo.png"],
  },
};

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://maxoratechnology.com/#webpage",
  url: "https://maxoratechnology.com/",
  name: "Maxora Technology | Custom Web & App Development, CRM & Cloud Solutions",
  description:
    "Maxora Technology builds high-performance custom websites, mobile applications, AI-powered CRM/ERP systems, and scalable eCommerce platforms for growing businesses worldwide.",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://maxoratechnology.com/#website",
  },
  about: {
    "@type": "Organization",
    "@id": "https://maxoratechnology.com/#organization",
  },
  inLanguage: "en",
};

export default function Home() {
  return (
    <>
      <JsonLd data={homePageSchema} />
      <Hero />
      <Services />
    </>
  );
}

