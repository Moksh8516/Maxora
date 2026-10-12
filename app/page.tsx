import type { Metadata } from "next";
import Hero from "./components/section/Hero";
import WhyMaxora from "./components/section/WhyMaxora";
import Services from "./components/section/Services";
import { JsonLd } from "./components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Custom Web & App Development Company",
  description:
    "Maxora Technology builds high-performance custom websites, mobile applications, CRM/ERP systems, and scalable eCommerce platforms for growing businesses worldwide.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Custom Web & App Development Company | Maxora Technology",
    description:
      "Transform your business with custom web and mobile app development, scalable eCommerce, and bespoke CRM/ERP systems. Worldwide engineering.",
    url: "/",
    siteName: "Maxora Technology",
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
      "Custom web applications, iOS/Android mobile apps, and custom CRM/ERP systems tailored for growing businesses worldwide.",
    images: ["/og-image.png"],
  },
};

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://maxoratechnology.com/#webpage",
  url: "https://maxoratechnology.com/",
  name: "Custom Web & App Development Company | Maxora Technology",
  description:
    "Maxora Technology builds high-performance custom websites, mobile applications, CRM/ERP systems, and scalable eCommerce platforms for growing businesses worldwide.",
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
      <WhyMaxora />
      <Services />
    </>
  );
}

