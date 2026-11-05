// content/landing-pages/types.ts
import type { ElementType } from "react";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export interface PainPoint {
  iconName: string;
  title: string;
  description: string;
}

export interface BenefitItem {
  iconName: string;
  title: string;
  outcome: string;
}

export interface Differentiator {
  title: string;
  meaning: string;
}

export interface ComparisonRow {
  feature: string;
  maxora: string;
  typicalAgency: string;
  freelancer: string;
  diyBuilder: string;
}

export interface IndustryItem {
  name: string;
  description: string;
  tag?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  clientAction: string;
  clientGets: string;
}

export interface PackageItem {
  name: string;
  isPopular?: boolean;
  priceNote: string;
  tagline: string;
  inclusions: string[];
  whatsappMessage: string;
}

export interface ResultItem {
  iconName: string;
  title: string;
  description: string;
}

export interface LocalAreaServed {
  city: string;
  areas: string[];
  meetingOptions: string[];
  localAdvantage: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface RelatedLink {
  title: string;
  href: string;
  description: string;
}

export interface TechnicalNote {
  title: string;
  details: string[];
}

export interface Batch2OptionalBlocks {
  demoFlow?: {
    caption: string;
    steps: { sender: "user" | "bot" | "system"; text: string; time?: string }[];
  };
  automationTasks?: { title: string; desc: string; iconName: string }[];
  beforeAfter?: { before: string[]; after: string[] };
  toolsIntegrated?: { name: string; category: string }[];
  humanInControlPoints?: string[];
  safetyAndPrivacy?: {
    dataSafety: string;
    dpdpCompliance: string;
    whatsappOfficialRules: string;
    metaPricingNotice: string;
    humanReviewNotice: string;
  };
  pilotOffer?: {
    title: string;
    steps: string[];
    timelineNotice: string;
  };
  glossary?: { term: string; definition: string }[];
}

export interface LandingPageData {
  slug: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  seo: {
    title: string;
    description: string;
    canonical: string;
    ogImage?: string;
  };
  serviceType: string;
  isCityPage?: boolean;
  city?: string;
  breadcrumbs: BreadcrumbItem[];
  hero: {
    badge: string;
    h1: string;
    subheading: string;
    primaryCtaText: string;
    whatsappPrefilledText: string;
    trustPromises: string[];
    heroVisual?: {
      type: "mockup" | "graphic";
      caption: string;
    };
  };
  quickAnswer: {
    question: string;
    answer: string;
  };
  painPoints: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: PainPoint[];
  };
  benefits: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: BenefitItem[];
  };
  whyMaxora: {
    sectionTitle: string;
    sectionSubtitle: string;
    differentiators: Differentiator[];
    comparison: {
      title: string;
      subtitle: string;
      rows: ComparisonRow[];
    };
  };
  industries: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: IndustryItem[];
  };
  process: {
    sectionTitle: string;
    sectionSubtitle: string;
    steps: ProcessStep[];
  };
  packages: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: PackageItem[];
  };
  expectedResults: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: ResultItem[];
  };
  localSection?: LocalAreaServed;
  faqs: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: FAQItem[];
  };
  relatedServices: {
    sectionTitle: string;
    sectionSubtitle: string;
    links: RelatedLink[];
  };
  technicalNote?: TechnicalNote;
  batch2?: Batch2OptionalBlocks;
}
