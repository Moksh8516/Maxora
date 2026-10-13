// app/Services/app-development/page.tsx
import type { Metadata } from "next";
import AppDevelopmentClient from "./AppDevelopmentClient";
import { JsonLd } from "../../components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Mobile App Development Services",
  description:
    "Mobile app development company in India building native and cross-platform apps using Flutter and React Native. Fast, secure, and user-centric mobile apps.",
  alternates: {
    canonical: "/Services/app-development",
  },
  openGraph: {
    title: "Mobile App Development Services | Maxora Technology",
    description:
      "Native and cross-platform mobile apps for iOS and Android. High-performance, App Store compliant, and built for scalable engagement.",
    url: "/Services/app-development",
    siteName: "Maxora Technology",
    images: [
      {
        url: "/og-image.png",
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
    images: ["/og-image.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://maxoratechnology.com/Services/app-development/#service",
      name: "Mobile App Development Services",
      serviceType: "Mobile Application Development",
      provider: {
        "@type": "Organization",
        "@id": "https://maxoratechnology.com/#organization",
        name: "Maxora Technology",
      },
      url: "https://maxoratechnology.com/Services/app-development",
      description:
        "End-to-end mobile application development for iOS and Android platforms using Swift, Kotlin, React Native, and Flutter, with offline capabilities and cloud integration.",
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
      "@id": "https://maxoratechnology.com/Services/app-development/#breadcrumb",
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
          name: "App Development",
          item: "https://maxoratechnology.com/Services/app-development",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://maxoratechnology.com/Services/app-development/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Should we build our app using Flutter, React Native, or Native code?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For 90% of business applications, cross-platform frameworks like Flutter or React Native offer significant cost and time savings with virtually identical performance to native development.",
          },
        },
        {
          "@type": "Question",
          name: "Do you publish our app to the App Store and Google Play Store?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we manage the complete submission process including store listings, privacy compliance, review feedback, and release management under your developer accounts.",
          },
        },
        {
          "@type": "Question",
          name: "How do you ensure data security in mobile apps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We implement encrypted on-device storage, HTTPS API communication with token-based JWT authentication, biometric login options, and secure payment processing.",
          },
        },
        {
          "@type": "Question",
          name: "Can the mobile app work offline without internet?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we build local caching mechanisms using SQLite or Hive so users can access core content offline and sync data automatically when connectivity returns.",
          },
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
