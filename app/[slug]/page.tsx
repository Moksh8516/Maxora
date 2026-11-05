// app/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceLandingPage from "@/app/components/templates/ServiceLandingPage";
import LandingPageSchema from "@/app/components/seo/LandingPageSchema";
import { getLandingPageBySlug, getAllLandingPageSlugs } from "@/content/landing-pages";

interface DynamicLandingPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllLandingPageSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: DynamicLandingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const pageData = getLandingPageBySlug(slug);

  if (!pageData) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: pageData.seo.title,
    description: pageData.seo.description,
    alternates: {
      canonical: pageData.seo.canonical,
    },
    openGraph: {
      title: pageData.seo.title,
      description: pageData.seo.description,
      url: pageData.seo.canonical,
      siteName: "Maxora Technology",
      locale: "en_IN",
      images: [
        {
          url: pageData.seo.ogImage || "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${pageData.primaryKeyword} - Maxora Technology`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageData.seo.title,
      description: pageData.seo.description,
      images: [pageData.seo.ogImage || "/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function DynamicLandingPage({ params }: DynamicLandingPageProps) {
  const { slug } = await params;
  const pageData = getLandingPageBySlug(slug);

  if (!pageData) {
    notFound();
  }

  return (
    <main>
      <LandingPageSchema data={pageData} />
      <ServiceLandingPage data={pageData} />
    </main>
  );
}
