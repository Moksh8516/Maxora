// app/services/page.tsx
import ServicesHero from "../components/section/ServiceHero";
import ServiceListings from "../components/section/ServiceListings";
import Process from "../components/section/Process";
import FAQ from "../components/section/FAQ";
import CTA from "../components/section/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Maxora Technology",
  description:
    "Discover our comprehensive digital solutions including app development, web development, eCommerce, and custom software services.",
  keywords: [
    "web development",
    "app development",
    "eCommerce",
    "WordPress",
    "CRM",
    "ERP",
    "software services",
  ],
};

export default function ServicesPage() {
  return (
    <main className="pt-24">
      <ServicesHero />
      <ServiceListings />
      <Process />
      <FAQ />
      <CTA />
    </main>
  );
}
