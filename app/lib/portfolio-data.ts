// app/lib/portfolio-data.ts

export interface PortfolioCaseStudy {
  id: string;
  projectName: string;
  industry: string;
  whatWeBuilt: string;
  techUsed: string[];
  screenshotUrl: string;
  screenshotAlt: string;
  demoUrl?: string;
  isLiveDemo?: boolean;
  todoNote?: string;
}

export const portfolioContent = {
  header: {
    badge: "Case Studies & Demos",
    title: "Engineering Portfolio & Case Studies",
    description:
      "Explore software architectures, web applications, and live interactive systems engineered by Maxora Technology.",
  },
  caseStudies: [
    {
      id: "real-estate-crm",
      projectName: "Real Estate Property CRM & Lead Portal",
      industry: "Real Estate & Property Management",
      whatWeBuilt:
        "Engineered a centralized lead management platform with property inventory filters, automated WhatsApp routing, and visual deal pipeline boards.",
      techUsed: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "WhatsApp API"],
      screenshotUrl: "/og-image.png",
      screenshotAlt: "Maxora Technology Real Estate CRM Interface",
      demoUrl: "https://realestate.maxoratechnology.com",
      isLiveDemo: true,
    },
    {
      id: "case-study-placeholder-1",
      projectName: "Custom Headless E-Commerce Storefront",
      industry: "Retail & Consumer Goods",
      whatWeBuilt:
        "Sub-2-second headless storefront with localized UPI payment gateways, automated abandoned cart triggers, and instant search filtering.",
      techUsed: ["Next.js", "Shopify API", "Tailwind CSS", "Razorpay"],
      screenshotUrl: "/og-image.png",
      screenshotAlt: "E-Commerce Architecture Showcase",
      todoNote: "TODO(owner): Add real client name, verified deliverables, and high-res screenshot.",
    },
    {
      id: "case-study-placeholder-2",
      projectName: "Cross-Platform Field Operations Mobile App",
      industry: "Logistics & Field Services",
      whatWeBuilt:
        "Unified iOS and Android application with offline GPS logging, biometric authentication, and instant dispatch notifications.",
      techUsed: ["Flutter", "Dart", "Firebase", "Node.js API"],
      screenshotUrl: "/og-image.png",
      screenshotAlt: "Mobile Application Interface Showcase",
      todoNote: "TODO(owner): Add real client name, verified deliverables, and high-res screenshot.",
    },
    {
      id: "case-study-placeholder-3",
      projectName: "Enterprise Operations & Workflow System",
      industry: "Business Services & Manufacturing",
      whatWeBuilt:
        "Custom workflow management system replacing disconnected spreadsheets with role-based access control, billing automation, and audit trails.",
      techUsed: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      screenshotUrl: "/og-image.png",
      screenshotAlt: "Custom Enterprise Operations Dashboard",
      todoNote: "TODO(owner): Add real client name, verified deliverables, and high-res screenshot.",
    },
  ] as PortfolioCaseStudy[],
};
