// app/services/app-development/page.tsx
import type { Metadata } from "next";
import AppDevelopmentClient from "./AppDevelopmentClient";
import { JsonLd } from "../../components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Mobile App Development Services | iOS & Android Apps | Maxora Technology",
  description:
    "Custom mobile app development by Maxora Technology. Native iOS (Swift), Android (Kotlin), and cross-platform (React Native, Flutter) mobile applications engineered for high performance.",
  keywords: [
    "mobile app development services",
    "iOS app development",
    "Android app development",
    "React Native agency",
    "Flutter app development",
    "cross-platform mobile apps",
    "Maxora Technology mobile apps",
  ],
  alternates: {
    canonical: "/services/app-development",
  },
  openGraph: {
    title: "Mobile App Development Services | Maxora Technology",
    description:
      "Native and cross-platform mobile apps for iOS and Android. High-performance, App Store compliant, and built for scalable engagement.",
    url: "/services/app-development",
    siteName: "Maxora Technology",
    images: [
      {
        url: "/light logo.png",
        width: 1200,
        height: 630,
        alt: "Mobile App Development - Maxora Technology",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Services | Maxora Technology",
    description:
      "Enterprise iOS and Android mobile app development with React Native and Flutter.",
    images: ["/light logo.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://maxoratechnology.com/services/app-development/#service",
      name: "Mobile App Development Services",
      serviceType: "Mobile Application Development",
      provider: {
        "@type": "Organization",
        "@id": "https://maxoratechnology.com/#organization",
        name: "Maxora Technology",
      },
      url: "https://maxoratechnology.com/services/app-development",
      description:
        "End-to-end mobile application development for iOS and Android platforms using Swift, Kotlin, React Native, and Flutter, with offline capabilities and cloud integration.",
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
        name: "Mobile Development Capabilities",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "iOS Native App Development (Swift, SwiftUI)",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Android Native App Development (Kotlin, Jetpack Compose)",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cross-Platform App Development (React Native, Flutter)",
            },
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://maxoratechnology.com/services/app-development/#breadcrumb",
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
          name: "App Development",
          item: "https://maxoratechnology.com/services/app-development",
        },
      ],
    },
  ],
};

export default function AppDevelopmentPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <AppDevelopmentClient />
    </>
  );
}
