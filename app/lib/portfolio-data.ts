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
    badge: "Portfolio & Architecture Demos",
    title: "Work & Sample Architectures",
    description:
      "Explore live products and sample system architectures built by Maxora Technology. Live demos are marked; architecture cards show capability and scope.",
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
      id: "sample-ecommerce",
      projectName: "Headless E-Commerce Storefront",
      industry: "Retail & D2C — Sample Architecture",
      whatWeBuilt:
        "Sample architecture: a sub-2-second headless storefront with UPI payment integration, abandoned-cart automation, and instant-search filtering. This demonstrates our e-commerce capability — contact us for client-specific details.",
      techUsed: ["Next.js", "Shopify API", "Tailwind CSS", "Razorpay"],
      screenshotUrl: "/og-image.png",
      screenshotAlt: "Headless E-Commerce Architecture — Maxora Technology",
    },
    {
      id: "sample-mobile-app",
      projectName: "Field Operations Mobile App",
      industry: "Logistics & Field Services — Sample Architecture",
      whatWeBuilt:
        "Sample architecture: cross-platform iOS and Android app with offline GPS logging, biometric authentication, and dispatch push notifications. This demonstrates our mobile capability — contact us for client-specific details.",
      techUsed: ["Flutter", "Dart", "Firebase", "Node.js API"],
      screenshotUrl: "/og-image.png",
      screenshotAlt: "Field Operations Mobile App Architecture — Maxora Technology",
    },
    {
      id: "sample-crm-erp",
      projectName: "Enterprise Workflow & Operations Portal",
      industry: "Business Services & Manufacturing — Sample Architecture",
      whatWeBuilt:
        "Sample architecture: custom workflow portal replacing disconnected spreadsheets, with role-based access control, billing automation, and full audit trails. This demonstrates our CRM/ERP capability — contact us for client-specific details.",
      techUsed: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      screenshotUrl: "/og-image.png",
      screenshotAlt: "Enterprise Operations Portal Architecture — Maxora Technology",
    },
  ] as PortfolioCaseStudy[],
};
