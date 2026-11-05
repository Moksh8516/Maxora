// content/landing-pages/index.ts
import type { LandingPageData } from "./types";
import { websiteDevelopmentCompanyInPatiala } from "./website-development-company-in-patiala";
import { websiteDevelopmentCompanyInLudhiana } from "./website-development-company-in-ludhiana";
import { websiteDevelopmentCompanyInChandigarh } from "./website-development-company-in-chandigarh";
import { affordableWebsiteDevelopmentCompanyInIndia } from "./affordable-website-development-company-in-india";
import { ecommerceWebsiteDevelopmentCompanyInIndia } from "./ecommerce-website-development-company-in-india";
import { mobileAppDevelopmentCompanyInPunjab } from "./mobile-app-development-company-in-punjab";
import { customCrmSoftwareForSmallBusiness } from "./custom-crm-software-for-small-business";
import { whatsappAutomationAndChatbotServicesInIndia } from "./whatsapp-automation-and-chatbot-services-in-india";
import { seoAndAiSearchOptimizationServicesInIndia } from "./seo-and-ai-search-optimization-services-in-india";
import { websiteRedesignServicesInIndia } from "./website-redesign-services-in-india";

export * from "./types";
export {
  websiteDevelopmentCompanyInPatiala,
  websiteDevelopmentCompanyInLudhiana,
  websiteDevelopmentCompanyInChandigarh,
  affordableWebsiteDevelopmentCompanyInIndia,
  ecommerceWebsiteDevelopmentCompanyInIndia,
  mobileAppDevelopmentCompanyInPunjab,
  customCrmSoftwareForSmallBusiness,
  whatsappAutomationAndChatbotServicesInIndia,
  seoAndAiSearchOptimizationServicesInIndia,
  websiteRedesignServicesInIndia,
};

export const landingPages: LandingPageData[] = [
  websiteDevelopmentCompanyInPatiala,
  websiteDevelopmentCompanyInLudhiana,
  websiteDevelopmentCompanyInChandigarh,
  affordableWebsiteDevelopmentCompanyInIndia,
  ecommerceWebsiteDevelopmentCompanyInIndia,
  mobileAppDevelopmentCompanyInPunjab,
  customCrmSoftwareForSmallBusiness,
  whatsappAutomationAndChatbotServicesInIndia,
  seoAndAiSearchOptimizationServicesInIndia,
  websiteRedesignServicesInIndia,
];

export function getAllLandingPages(): LandingPageData[] {
  return landingPages;
}

export function getAllLandingPageSlugs(): string[] {
  return landingPages.map((page) => page.slug);
}

export function getLandingPageBySlug(slug: string): LandingPageData | undefined {
  return landingPages.find((page) => page.slug === slug);
}
