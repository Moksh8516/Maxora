// app/components/templates/ServicePageTemplate.tsx
"use client";

import React from "react";
import type { ServiceContent } from "@/content/services";

// The 11 Section Components in strict specified order
import ServiceHero from "@/app/components/section/service/ServiceHero";
import ServiceDetailPanel from "@/app/components/section/service/ServiceDetailPanel";
import ProblemList from "@/app/components/section/service/ProblemList";
import ProcessSteps from "@/app/components/section/service/ProcessSteps";
import ExampleCard from "@/app/components/section/service/ExampleCard";
import AudienceList from "@/app/components/section/service/AudienceList";
import PricingNote from "@/app/components/section/service/PricingNote";
import OwnershipSupport from "@/app/components/section/service/OwnershipSupport";
import ServiceFAQ from "@/app/components/section/service/ServiceFAQ";
import RelatedServices from "@/app/components/section/service/RelatedServices";
import ClosingCTA from "@/app/components/section/service/ClosingCTA";

interface ServicePageTemplateProps {
  service: ServiceContent;
}

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <main className="relative overflow-hidden bg-white dark:bg-[#050A15] text-[#050A15] dark:text-[#F4F7FC] transition-colors duration-300">
      {/* 1. ServiceHero: Headline, benefit, two CTAs */}
      <ServiceHero service={service} />

      {/* 2. ServiceDetailPanel: Icon, tag, benefit box, checklist (variant full) */}
      <ServiceDetailPanel service={service} variant="full" />

      {/* 3. ProblemList: Three or four buyer problems */}
      <ProblemList service={service} />

      {/* 4. ProcessSteps: Four numbered steps */}
      <ProcessSteps service={service} />

      {/* 5. ExampleCard: Example system or case study */}
      <ExampleCard service={service} />

      {/* 6. AudienceList: Two or three business types */}
      <AudienceList service={service} />

      {/* 7. PricingNote: Starts from and duration with [CONFIRM] */}
      <PricingNote service={service} />

      {/* 8. OwnershipSupport: What the buyer owns and how support works */}
      <OwnershipSupport service={service} />

      {/* 9. ServiceFAQ: FAQ block for the page with accessible accordion */}
      <ServiceFAQ service={service} />

      {/* 10. RelatedServices: Two or three links to related services */}
      <RelatedServices service={service} />

      {/* 11. ClosingCTA: Primary and secondary CTA, and builtWith tech footer */}
      <ClosingCTA service={service} />
    </main>
  );
}
