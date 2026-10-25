// app/Services/ecommerce/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EcommerceClient from "./EcommerceClient";
import { JsonLd } from "@/app/components/seo/StructuredData";
import { getServiceBySlug, buildFaqSchema } from "@/content/services";

const service = getServiceBySlug("ecommerce")!;

export const metadata: Metadata = {
  title: service.seo.title,
  description: service.seo.description,
  alternates: {
    canonical: `/Services/${service.slug}`,
  },
  openGraph: {
    title: `${service.seo.title} | Maxora Technology`,
    description: service.seo.description,
    url: `/Services/${service.slug}`,
    siteName: "Maxora Technology",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${service.title} - Maxora Technology`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${service.seo.title} | Maxora Technology`,
    description: service.seo.description,
    images: ["/og-image.png"],
  },
};

export default function EcommercePage() {
  if (!service) notFound();
  const faqSchema = buildFaqSchema(service.faqs, `/Services/${service.slug}`);

  return (
    <>
      <JsonLd data={faqSchema} />
      <EcommerceClient />
    </>
  );
}
