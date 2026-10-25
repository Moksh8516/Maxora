// app/lib/portfolio-data.ts

export interface PortfolioCaseStudy {
  id: string;
  projectName: string;
  industry: string;
  category?: string;
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
    badge: "Selected Work",
    title: "Websites, Mobile Apps & Software Engineered for Growing Businesses",
    description:
      "Explore real products, customer portals, and internal tools built by Maxora Technology. Click into live interactive demos to see our work in action.",
  },
  caseStudies: [
    {
      id: "real-estate-crm",
      projectName: "Real Estate Property CRM & Lead Portal",
      industry: "Real Estate & Property Management",
      category: "CRM & ERP",
      whatWeBuilt:
        "A centralized platform for property brokers to manage listings, track customer inquiries, organize deal stages, and send instant WhatsApp messages to buyers.",
      techUsed: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "WhatsApp API"],
      screenshotUrl: "/portfolio/realestate-crm.png",
      screenshotAlt: "Maxora Technology Real Estate CRM Interface",
      demoUrl: "https://realestate.maxoratechnology.com",
      isLiveDemo: true,
    },
    {
      id: "lending-saas",
      projectName: "Commercial Credit & Loan Processing Platform",
      industry: "Fintech & Lending",
      category: "SaaS & Cloud",
      whatWeBuilt:
        "An online loan application portal that verifies customer documents, calculates financial risk scores, and routes loan approvals to the underwriting team.",
      techUsed: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
      screenshotUrl: "/portfolio/commercial-credit-saas.jpg",
      screenshotAlt: "Commercial Credit and Direct Lending Platform Interface",
    },
    {
      id: "travel-portal",
      projectName: "Luxury Travel Discovery & Booking Website",
      industry: "Travel & Hospitality",
      category: "Web Applications",
      whatWeBuilt:
        "An online booking experience with interactive destination maps, real-time room availability calendars, custom trip builders, and instant card payments.",
      techUsed: ["Next.js", "React", "Tailwind CSS", "Stripe", "Supabase"],
      screenshotUrl: "/portfolio/travel-maxora.png",
      screenshotAlt: "Luxury Travel Discovery and Booking Portal Interface",
    },
    {
      id: "smokehouse-bbq",
      projectName: "Artisan Smokehouse BBQ Online Store",
      industry: "eCommerce & Food",
      category: "eCommerce",
      whatWeBuilt:
        "A fast online food storefront with catering cost calculators, pickup date selection, custom meat cuts, and fast online checkout.",
      techUsed: ["Next.js", "Tailwind CSS", "Shopify Storefront API", "Razorpay"],
      screenshotUrl: "/portfolio/texas.gif",
      screenshotAlt: "Artisan Smokehouse BBQ Storefront Experience",
    },
    {
      id: "enterprise-erp",
      projectName: "Warehouse & Inventory Management Dashboard",
      industry: "Business Services & Logistics",
      category: "CRM & ERP",
      whatWeBuilt:
        "An operational dashboard for warehouse managers to monitor stock levels, scan incoming barcodes, create purchase orders, and manage staff roles.",
      techUsed: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
      screenshotUrl: "/portfolio/erp-dashboard.jpg",
      screenshotAlt: "Enterprise Supply and Warehouse ERP Dashboard",
    },
    {
      id: "mobile-wallet",
      projectName: "Personal Wealth & Investment Mobile App",
      industry: "Fintech & Mobile Apps",
      category: "Mobile Apps",
      whatWeBuilt:
        "A cross-platform iOS and Android app with fingerprint login, live investment tracking, portfolio notifications, and secure digital money transfers.",
      techUsed: ["Flutter", "Dart", "Firebase", "Node.js API", "WebSockets"],
      screenshotUrl: "/portfolio/mobile-fintech.jpg",
      screenshotAlt: "Wealth Management Mobile Wallet App UI",
    },
    {
      id: "himalayan-expeditions",
      projectName: "Mountain Trek & Adventure Booking Platform",
      industry: "Adventure & Tourism",
      category: "Web Applications",
      whatWeBuilt:
        "A trip planning portal with offline packing lists, local weather forecasts, guide permit management, and interactive photo galleries.",
      techUsed: ["Next.js", "TypeScript", "Tailwind CSS", "Mapbox GL", "Cloudflare"],
      screenshotUrl: "/portfolio/himalayan-expeditions.jpg",
      screenshotAlt: "Himalayan Mountain Expeditions Booking Platform",
    },
    {
      id: "botanical-skincare",
      projectName: "Organic Skincare Direct-to-Consumer Store",
      industry: "Beauty & eCommerce",
      category: "eCommerce",
      whatWeBuilt:
        "A fast online beauty store featuring an interactive skin-matching quiz, automatic monthly refills, customer reviews, and fast checkout on mobile.",
      techUsed: ["Next.js", "Shopify", "Tailwind CSS", "Stripe", "Quiz Funnel"],
      screenshotUrl: "/portfolio/botanical-skincare.jpg",
      screenshotAlt: "Organic Botanical Skincare D2C Storefront",
    },
    {
      id: "saas-dashboard",
      projectName: "Cloud Operations & System Monitoring Dashboard",
      industry: "Cloud Software & DevOps",
      category: "SaaS & Cloud",
      whatWeBuilt:
        "A real-time monitoring dashboard that tracks server uptime, alerts developers when errors occur, and generates clean monthly performance summaries.",
      techUsed: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Redis"],
      screenshotUrl: "/portfolio/saas-dashboard.jpg",
      screenshotAlt: "Cloud Analytics Observability Engine Interface",
    },
    {
      id: "luxury-villa-portal",
      projectName: "Private Vacation Villa Rental Marketplace",
      industry: "Real Estate & Rentals",
      category: "Web Applications",
      whatWeBuilt:
        "A luxury vacation rental marketplace featuring 360-degree virtual room tours, live calendar booking, security deposits, and direct host messaging.",
      techUsed: ["Next.js", "React", "Mapbox", "Stripe", "Supabase"],
      screenshotUrl: "/portfolio/luxury-villa-portal.jpg",
      screenshotAlt: "Private Luxury Villa Marketplace Portal",
    },
    {
      id: "food-delivery-app",
      projectName: "Food Ordering & Courier Dispatch Mobile App",
      industry: "Food Delivery & Logistics",
      category: "Mobile Apps",
      whatWeBuilt:
        "A mobile delivery app with real-time GPS courier tracking, restaurant menu customization, discount codes, and live delivery updates on customer phones.",
      techUsed: ["React Native", "TypeScript", "Node.js", "Google Maps API", "Socket.io"],
      screenshotUrl: "/portfolio/food-delivery-app.jpg",
      screenshotAlt: "On-Demand Gourmet Dispatch Mobile Interface",
    },
    {
      id: "coffee-store",
      projectName: "Specialty Coffee Roastery Online Shop",
      industry: "Food & Beverage eCommerce",
      category: "eCommerce",
      whatWeBuilt:
        "An online storefront for a boutique roastery featuring roast level selectors, recurring coffee bean subscriptions, customer loyalty points, and express checkout.",
      techUsed: ["Next.js", "Shopify Storefront API", "Tailwind CSS", "Stripe"],
      screenshotUrl: "/portfolio/coffee-store.jpg",
      screenshotAlt: "Artisanal Coffee Roastery eCommerce Storefront",
    },
    {
      id: "realestate-portal",
      projectName: "Commercial Real Estate Investor Portal",
      industry: "Commercial Property",
      category: "CRM & ERP",
      whatWeBuilt:
        "A property investment platform where investors evaluate commercial properties, calculate rental yields, review inspection files, and request private tours.",
      techUsed: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "AWS S3"],
      screenshotUrl: "/portfolio/realestate-portal.png",
      screenshotAlt: "Commercial Asset Listing Exchange Interface",
    },
  ] as PortfolioCaseStudy[],
};
