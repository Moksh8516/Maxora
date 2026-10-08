// app/Services/seo-aeo/SeoAeoClient.tsx
"use client";

import ServicePageTemplate from "../../components/templates/ServicePageTemplate";
import { servicesData } from "../../lib/services-data";

export default function SeoAeoClient() {
  const data = servicesData["seo-aeo"];
  return <ServicePageTemplate data={data} />;
}
