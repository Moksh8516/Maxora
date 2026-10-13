// app/Services/ai-automation/page.tsx
import type { Metadata } from "next";
import AiAutomationClient from "./AiAutomationClient";
import { JsonLd } from "../../components/seo/StructuredData";

export const metadata: Metadata = {
  title: "AI & Automation Services in India | Voice Agents, WhatsApp Bots & Lead Workflows",
  description:
    "Deploy natural AI voice agents, 24/7 intelligent WhatsApp bots, and autonomous lead automation pipelines with Maxora Technology. Cut response times and scale business operations.",
  alternates: {
    canonical: "/Services/ai-automation",
  },
  openGraph: {
    title: "AI & Automation Services | Voice Agents, WhatsApp Bots & Lead Pipelines",
    description:
      "Automate customer calls, WhatsApp inquiries, lead qualification, and business workflows with custom AI solutions engineered by Maxora Technology.",
    url: "/Services/ai-automation",
    siteName: "Maxora Technology",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI & Automation Solutions - Maxora Technology",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Automation Services | Maxora Technology",
    description:
      "Scale business operations with AI voice assistants, WhatsApp automation bots, and autonomous lead pipelines.",
    images: ["/og-image.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://maxoratechnology.com/Services/ai-automation/#service",
      name: "AI & Automation Services",
      serviceType: "Artificial Intelligence & Business Automation Engineering",
      provider: {
        "@type": "Organization",
        "@id": "https://maxoratechnology.com/#organization",
        name: "Maxora Technology",
      },
      url: "https://maxoratechnology.com/Services/ai-automation",
      description:
        "Custom development of conversational AI voice agents, intelligent WhatsApp support bots, autonomous lead routing pipelines, and document extraction workflows.",
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
        name: "AI and Automation Capabilities",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Voice Assistants & Inbound Phone Agents",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Intelligent WhatsApp AI Bots & Support Agents",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Autonomous Lead Automation & CRM Routing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom LLM Agents & Document Extraction Workflows",
            },
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://maxoratechnology.com/Services/ai-automation/#breadcrumb",
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
          name: "AI & Automation",
          item: "https://maxoratechnology.com/Services/ai-automation",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://maxoratechnology.com/Services/ai-automation/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do AI voice assistants sound? Do they sound robotic?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Modern AI voice agents sound remarkably human, complete with natural pacing, breathing pauses, emotional inflection, and sub-500ms response latencies. Most callers cannot distinguish them from a trained human receptionist.",
          },
        },
        {
          "@type": "Question",
          name: "Can the WhatsApp bot handle official business verification and green tick?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We build directly on the official Meta WhatsApp Business Cloud API. We guide you through Meta Business Verification and ensure compliance with Meta's messaging policies and template guidelines.",
          },
        },
        {
          "@type": "Question",
          name: "What happens when an AI voice or chat agent encounters a question it doesn't know?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our agents are built with strict guardrails against hallucinations. When an inquiry falls outside its knowledge boundaries, the agent politely informs the caller or user and immediately transfers the conversation to a human team member or creates an urgent CRM ticket.",
          },
        },
        {
          "@type": "Question",
          name: "How does lead automation improve our conversion rates?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Industry data shows responding to an inbound lead within 60 seconds increases conversion rates by over 300%. Our lead automation triggers instant personalized WhatsApp and phone follow-ups the moment an ad form or website inquiry is submitted.",
          },
        },
        {
          "@type": "Question",
          name: "How is pricing scoped for AI and automation systems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every automation system is scoped based on your specific requirements: number of channels (Voice, WhatsApp, Web), integration complexity (CRM, ERP, inventory), and expected conversation volume. We provide clear milestone-based pricing with zero hidden vendor lock-in.",
          },
        },
      ],
    },
  ],
};

export default function AiAutomationPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <AiAutomationClient />
    </>
  );
}
