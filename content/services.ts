// content/services.ts
import {
  Globe,
  Smartphone,
  ShoppingCart,
  Layout,
  Database,
  Bot,
  Sparkles,
} from "lucide-react";

export type ExampleLabel = "Live demo" | "Sample" | "Case study";

export interface ServiceExample {
  label: ExampleLabel;
  title: string;
  description: string;
  url?: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceAudience {
  title: string;
  description: string;
}

export interface ServicePricing {
  startsFrom: string;
  duration: string;
}

export interface ServiceFAQItem {
  question: string;
  answer: string;
}

export interface ServiceSEO {
  title: string;
  description: string;
}

export interface ServiceContent {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  iconName: "Globe" | "Smartphone" | "ShoppingCart" | "Layout" | "Database" | "Bot" | "Sparkles";
  tag: string;
  accent: string;
  headlineBenefit: string;
  checklist: [string, string, string, string];
  problems: string[];
  process: [ServiceProcessStep, ServiceProcessStep, ServiceProcessStep, ServiceProcessStep];
  examples: ServiceExample[];
  audiences: ServiceAudience[];
  pricing: ServicePricing;
  ownership: string;
  faqs: ServiceFAQItem[];
  relatedSlugs: string[];
  builtWith: string[];
  seo: ServiceSEO;
}

export const services: ServiceContent[] = [
  {
    slug: "web-development",
    number: "01",
    title: "Web Development",
    subtitle: "Custom websites and web applications built for speed, conversions, and long-term reliability.",
    iconName: "Globe",
    tag: "Core Engineering",
    accent: "from-blue-600 to-cyan-500",
    headlineBenefit: "A fast, custom web application built to convert visitors into inquiries and run smoothly without ongoing maintenance headaches.",
    checklist: [
      "Pages load in under two seconds so visitors stay on your site",
      "Clean layouts that look sharp and work naturally on every phone and screen",
      "Direct inquiry forms and WhatsApp buttons connected straight to your team",
      "Straightforward admin screens so your team can update text and images easily",
    ],
    problems: [
      "Visitors leave your current site because pages take several seconds to load on mobile connections.",
      "Off-the-shelf templates look generic, break after routine updates, and limit your business growth.",
      "Inquiries slip through the cracks because forms fail silently or lack instant mobile notifications.",
      "Simple content edits require hiring an outside agency for every small paragraph change.",
    ],
    process: [
      {
        step: "01",
        title: "Discovery and Scope",
        description: "We review your business goals, target audience, and required features to create a clear milestone plan.",
      },
      {
        step: "02",
        title: "Screen Design and Walkthrough",
        description: "We design clean, intuitive layouts for mobile and desktop, refining every screen with your direct feedback.",
      },
      {
        step: "03",
        title: "Engineering and Milestones",
        description: "We develop your web application in structured weekly sprints, sharing working previews at each stage.",
      },
      {
        step: "04",
        title: "Testing and Launch",
        description: "We verify page speed, test every form across multiple devices, connect your domain, and launch smoothly.",
      },
    ],
    examples: [
      {
        label: "Sample",
        title: "Commercial Property Discovery Platform",
        description: "A fast property listing portal featuring interactive location filters, floor plan previews, and instant WhatsApp inquiry routing.",
        url: "/portfolio",
      },
      {
        label: "Live demo",
        title: "Corporate Client Portal & Resource Hub",
        description: "A password-protected client dashboard where account holders review project milestones, download invoices, and message support.",
        url: "/portfolio",
      },
    ],
    audiences: [
      {
        title: "Established Service Companies",
        description: "Businesses upgrading from older template sites to generate consistent, qualified inquiries from search and referral traffic.",
      },
      {
        title: "Product Founders & Startups",
        description: "Founders launching a modern digital product who need a polished web presence and an interactive customer dashboard.",
      },
      {
        title: "Regional Consultancies",
        description: "Professional practices needing a credible digital home that showcases client results and coordinates calendar bookings.",
      },
    ],
    pricing: {
      startsFrom: "[CONFIRM]",
      duration: "[CONFIRM]",
    },
    ownership: "You own 100% of the intellectual property, source code, design files, and deployment accounts upon project completion. There are zero recurring per-user software license fees or proprietary platform lock-ins. Every project includes 30 days of post-launch monitoring, warranty bug fixing, and recorded training videos for your team.",
    faqs: [
      {
        question: "Why should we build a custom website instead of using WordPress or Wix?",
        answer: "Custom web development provides sub-two-second page load times, custom design and workflows tailored to your business, enterprise security, and 100% code ownership with zero monthly per-user software license fees.",
      },
      {
        question: "How long does a custom web development project take to launch?",
        answer: "Most custom web projects take between 4 to 8 weeks depending on scope, custom workflows, and the number of distinct page templates. We establish clear milestone deliverables at kickoff so you always know when each section will be ready for review.",
      },
      {
        question: "Can our team update website content without writing code?",
        answer: "Yes. We configure an easy-to-use content management system with visual blocks and custom fields tailored to your content. Your team can publish blog posts, add team members, update case studies, and change text independently.",
      },
      {
        question: "Will the new website be optimized for mobile phones and search engines?",
        answer: "Every website we engineer is built mobile-first and tested on real iOS and Android devices. We implement proper heading structure, fast loading assets, metadata, and structured schema so search engines can read and index your pages accurately.",
      },
      {
        question: "Do you help with domain connection and server setup?",
        answer: "Yes. We handle DNS configuration, SSL security certificates, and cloud hosting setup. We configure everything under your company accounts so you maintain full ownership and administrative control.",
      },
      {
        question: "What happens after the website goes live?",
        answer: "We provide 30 days of complimentary post-launch support to monitor performance, resolve unexpected issues, and assist your team. We also offer ongoing monthly maintenance packages covering backups, security updates, and regular improvements.",
      },
    ],
    relatedSlugs: ["app-development", "seo-aeo", "ecommerce"],
    builtWith: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    seo: {
      title: "Custom Web Development Services | Maxora Technology",
      description: "Custom web development services engineered for speed, search visibility, and high conversion. Fast Next.js and React applications for growing companies.",
    },
  },
  {
    slug: "app-development",
    number: "02",
    title: "Mobile App Development",
    subtitle: "High-speed iOS and Android mobile apps engineered with a single shared codebase.",
    iconName: "Smartphone",
    tag: "High Growth",
    accent: "from-purple-600 to-blue-500",
    headlineBenefit: "A responsive mobile app that works reliably across iPhone and Android devices, keeping your business connected with customers.",
    checklist: [
      "Smooth performance on both iOS and Android devices from a unified codebase",
      "Instant push notifications to re-engage customers with timely announcements",
      "Secure login options including biometric Face ID, fingerprint, and one-time passwords",
      "Complete guidance through Apple App Store and Google Play Store submission",
    ],
    problems: [
      "Maintaining two separate native codebases for iPhone and Android doubles development costs and slows feature updates.",
      "Mobile web browsers cannot send reliable push notifications or leverage native device hardware efficiently.",
      "Apps get rejected during app store reviews because they fail compliance, privacy, or performance guidelines.",
      "Users abandon sluggish apps that crash when switching between cellular and Wi-Fi networks.",
    ],
    process: [
      {
        step: "01",
        title: "Product Architecture",
        description: "We map user journeys, outline core features, and define the data structures required for real-time mobile syncing.",
      },
      {
        step: "02",
        title: "Mobile UX Design",
        description: "We design native-feeling screens, touch targets, and tab flows that adhere to Apple Human Interface and Google Material guidelines.",
      },
      {
        step: "03",
        title: "Cross-Platform Engineering",
        description: "We build your app with shared logic, offline caching, and secure backend connections for instant data retrieval.",
      },
      {
        step: "04",
        title: "Store Submission & Launch",
        description: "We generate store screenshots, prepare privacy compliance documents, and manage publishing to Apple App Store and Google Play.",
      },
    ],
    examples: [
      {
        label: "Sample",
        title: "Field Operations & Dispatch Mobile App",
        description: "An Android and iOS app allowing field technicians to receive daily job routes, record customer signatures, and update job statuses offline.",
        url: "/portfolio",
      },
      {
        label: "Live demo",
        title: "Member Community & Event Booking App",
        description: "A cross-platform mobile community app featuring event RSVPs, QR code ticketing, member directories, and group push notifications.",
        url: "/portfolio",
      },
    ],
    audiences: [
      {
        title: "On-Demand & Delivery Services",
        description: "Companies coordinating drivers, technicians, or couriers who require real-time job dispatches and GPS navigation.",
      },
      {
        title: "Subscription & Membership Brands",
        description: "Organizations building an engaged community through recurring member benefits, private feeds, and mobile alerts.",
      },
      {
        title: "Retail & Consumer Businesses",
        description: "Merchants wanting direct mobile access to repeat buyers without paying high commission fees on third-party aggregator apps.",
      },
    ],
    pricing: {
      startsFrom: "[CONFIRM]",
      duration: "[CONFIRM]",
    },
    ownership: "You retain full ownership of the mobile application source code, app store listings, signing keys, and backend cloud infrastructure. We configure all Google Play and Apple Developer accounts in your company name so you never depend on an outside agency to maintain your app. Post-launch support includes release monitoring and operating system compatibility updates.",
    faqs: [
      {
        question: "Do you build native apps or cross-platform apps?",
        answer: "We specialize in modern cross-platform development using Flutter and React Native. This enables your business to launch on both the Apple App Store and Google Play Store simultaneously from a single codebase, saving significant time and long-term maintenance costs.",
      },
      {
        question: "Who handles the Apple and Google app store submission process?",
        answer: "We handle the entire submission process on your behalf. We prepare the required store metadata, screenshots, privacy policies, and app builds, and work directly through the review process until your app is approved and live.",
      },
      {
        question: "Can the mobile app work when users do not have internet connection?",
        answer: "Yes. We engineer offline data caching so users can view critical information, compose drafts, or log activity while offline. The application automatically synchronizes data once an internet connection is re-established.",
      },
      {
        question: "How do push notifications work in the app?",
        answer: "We integrate enterprise push notification services that allow you to send targeted announcements, transaction receipts, and marketing updates directly to users based on their activity, location, or account status.",
      },
      {
        question: "Can the mobile app connect with our existing website and database?",
        answer: "Yes. We engineer secure REST or GraphQL API connectors so user logins, customer profiles, product orders, and booking data stay perfectly synchronized across your website and mobile applications.",
      },
      {
        question: "How do you handle future iOS and Android operating system upgrades?",
        answer: "We build using clean, modern SDK standards. Our post-launch maintenance plans include ongoing OS compatibility testing and version updates whenever Apple or Google release major annual updates.",
      },
    ],
    relatedSlugs: ["web-development", "crm-erp", "ai-automation"],
    builtWith: ["React Native", "Flutter", "TypeScript", "Node.js", "Firebase", "PostgreSQL"],
    seo: {
      title: "Custom Mobile App Development | Maxora Technology",
      description: "High-performance iOS and Android mobile app development. Cross-platform engineering with Flutter and React Native for modern businesses.",
    },
  },
  {
    slug: "ecommerce",
    number: "03",
    title: "eCommerce Solutions",
    subtitle: "High-converting online stores built for quick checkout, live inventory, and multi-currency sales.",
    iconName: "ShoppingCart",
    tag: "Revenue Engine",
    accent: "from-cyan-600 to-blue-500",
    headlineBenefit: "An online store engineered to minimize checkout friction, manage stock accurately, and turn casual shoppers into repeat buyers.",
    checklist: [
      "Streamlined checkout flow that reduces abandoned shopping carts on smartphones",
      "Integration with popular regional and global payment gateways including UPI, cards, and wallets",
      "Real-time inventory synchronization across your storefront, warehouse, and marketplaces",
      "Automated order confirmation emails and WhatsApp delivery tracking updates",
    ],
    problems: [
      "Shoppers abandon carts on mobile devices due to slow page loads and complicated multi-step checkout forms.",
      "Inventory errors cause out-of-stock items to be sold, creating disappointed customers and refund overhead.",
      "Payment gateway failures or lack of local payment methods like UPI cost merchants high-intent purchases.",
      "High platform transaction fees and rigid templates eat into gross profit margins as order volume scales.",
    ],
    process: [
      {
        step: "01",
        title: "Store Strategy and Catalog Architecture",
        description: "We analyze your product catalog, shipping tiers, tax rules, and payment gateways to structure the ideal store architecture.",
      },
      {
        step: "02",
        title: "Conversion-Focused Storefront Design",
        description: "We design product detail pages, filter drawers, and one-page checkout experiences focused on mobile conversion rates.",
      },
      {
        step: "03",
        title: "Payments, Inventory, and Shipping Integration",
        description: "We integrate payment providers, configure inventory webhooks, and connect automated shipping label and courier systems.",
      },
      {
        step: "04",
        title: "Checkout Auditing and Store Launch",
        description: "We run live payment tests, verify order receipts, stress test checkout speeds, and switch your domain to go live smoothly.",
      },
    ],
    examples: [
      {
        label: "Sample",
        title: "Specialty Consumer Goods Storefront",
        description: "A custom direct-to-consumer store with multi-currency selector, one-click WhatsApp inquiries, and automated courier tracking integration.",
        url: "/portfolio",
      },
      {
        label: "Live demo",
        title: "B2B Wholesale Ordering & Invoice Portal",
        description: "A wholesale ordering platform featuring custom tiered pricing, minimum order quantities, and automated GST invoice generation.",
        url: "/portfolio",
      },
    ],
    audiences: [
      {
        title: "Direct-to-Consumer Brands",
        description: "Retail brands seeking a distinct, fast digital storefront that reflects their identity without generic template limitations.",
      },
      {
        title: "B2B Wholesalers & Distributors",
        description: "Distributors wanting to replace manual phone and email ordering with a self-service wholesale portal with bulk pricing.",
      },
      {
        title: "Retail Stores Going Digital",
        description: "Brick-and-mortar merchants expanding into online selling with centralized stock control and automated shipping.",
      },
    ],
    pricing: {
      startsFrom: "[CONFIRM]",
      duration: "[CONFIRM]",
    },
    ownership: "You maintain full administrative control and ownership over your store catalog, customer database, payment processor accounts, and custom theme code. We never charge percentage fees on your sales revenue. Post-launch support includes transaction monitoring, holiday traffic preparation, and store optimization.",
    faqs: [
      {
        question: "Which eCommerce platforms do you work with?",
        answer: "We build custom storefronts on Shopify, WooCommerce, and modern headless architectures depending on your catalog size, operational workflows, and growth plans. We advise on the best platform for your specific business model.",
      },
      {
        question: "What payment gateways can be integrated?",
        answer: "We integrate Razorpay, Stripe, Cashfree, PayPal, and regional bank gateways supporting credit cards, debit cards, net banking, UPI, and Cash on Delivery (COD) with automated fraud verification.",
      },
      {
        question: "Can the store connect with our existing shipping partners?",
        answer: "Yes. We connect courier and logistics aggregators such as Shiprocket, Delhivery, Bluedart, and DHL to automate shipping label printing, dispatch notifications, and live customer tracking links.",
      },
      {
        question: "How do you help prevent abandoned carts?",
        answer: "We engineer one-click checkout flows, guest checkout options, auto-filling address fields, transparent shipping calculation, and automated cart recovery notifications via email and WhatsApp.",
      },
      {
        question: "Can our online store automatically sync stock levels with our warehouse or ERP?",
        answer: "Yes. We build custom API connectors to sync real-time stock levels, purchase orders, and customer accounts directly between your eCommerce storefront, warehouse, and accounting systems.",
      },
      {
        question: "Can we sell products in multiple currencies with localized pricing?",
        answer: "Yes. We configure automatic geolocation to display prices in local currencies (INR, USD, EUR, GBP, AED) and process international transactions via global payment processors like Stripe.",
      },
    ],
    relatedSlugs: ["web-development", "wordpress", "crm-erp"],
    builtWith: ["Shopify Liquid", "WooCommerce", "Next.js", "Tailwind CSS", "Stripe API", "Razorpay"],
    seo: {
      title: "Custom eCommerce Development Services | Maxora Technology",
      description: "High-converting custom eCommerce storefronts built for speed, secure payments, and seamless inventory management. Shopify and headless stores.",
    },
  },
  {
    slug: "wordpress",
    number: "04",
    title: "WordPress Solutions",
    subtitle: "Custom, lightweight Gutenberg block themes built for performance, security, and easy team editing.",
    iconName: "Layout",
    tag: "Content Platform",
    accent: "from-teal-600 to-cyan-500",
    headlineBenefit: "A clean, custom WordPress website that loads fast, stays secure, and lets your marketing team publish pages without developer help.",
    checklist: [
      "Custom Gutenberg blocks tailored specifically to your brand layout and content",
      "No bulky visual builder plugins that slow down page load speeds or break site styles",
      "Hardened server security configuration, automated daily backups, and malware firewalls",
      "High performance scores that pass search engine mobile usability checks",
    ],
    problems: [
      "Older WordPress websites burdened with twenty third-party plugins crash whenever WordPress releases an update.",
      "Heavy visual page builders produce bloated code, leading to frustrating 5+ second load times on mobile devices.",
      "Non-technical team members struggle with confusing dashboards and accidentally break layout spacing when editing text.",
      "Unpatched themes and plugins leave websites vulnerable to security exploits and spam injection.",
    ],
    process: [
      {
        step: "01",
        title: "Content Structure and Audit",
        description: "We review your existing site content, identify redundant plugins, and plan a streamlined block architecture.",
      },
      {
        step: "02",
        title: "Custom Block Design",
        description: "We design reusable, brand-consistent content blocks for heroes, testimonials, features, and case studies.",
      },
      {
        step: "03",
        title: "Theme Engineering & Optimization",
        description: "We code a lightweight custom theme from scratch, eliminating unnecessary scripts and maximizing page speed.",
      },
      {
        step: "04",
        title: "Security Hardening and Training",
        description: "We lock down login security, set up automated off-site backups, and record walkthrough videos for your editorial staff.",
      },
    ],
    examples: [
      {
        label: "Sample",
        title: "Editorial Publication & Media Portal",
        description: "A high-traffic news and article platform featuring modular editorial blocks, author archives, and sub-second page loads.",
        url: "/portfolio",
      },
      {
        label: "Case study",
        title: "Corporate Services Re-Platforming",
        description: "Migrated a 40-page legacy WordPress site away from bloated page builders to a custom block theme, cutting page weight by 70%.",
        url: "/portfolio",
      },
    ],
    audiences: [
      {
        title: "Marketing & Editorial Teams",
        description: "Teams that publish articles, whitepapers, and landing pages weekly and need an intuitive, reliable editor.",
      },
      {
        title: "Professional Service Firms",
        description: "Law firms, accounting practices, and consultancies needing a credible corporate presence that loads instantly.",
      },
      {
        title: "Companies Rebuilding Legacy Sites",
        description: "Organizations stuck with an outdated, unmaintained WordPress installation that has become slow and insecure.",
      },
    ],
    pricing: {
      startsFrom: "[CONFIRM]",
      duration: "[CONFIRM]",
    },
    ownership: "You own the entire WordPress codebase, database, custom theme files, and hosting credentials. We provide clean, modular PHP and JavaScript code free from proprietary theme frameworks. Every project includes comprehensive security lockdown, daily backup setup, and editorial onboarding.",
    faqs: [
      {
        question: "Why do you use custom Gutenberg blocks instead of Elementor or Divi?",
        answer: "Visual page builder plugins inject thousands of lines of unnecessary code into every page, slowing down your site and making future upgrades risky. Custom Gutenberg blocks load only the code needed for that specific section, resulting in faster load times and an easier editing experience.",
      },
      {
        question: "Can you migrate content from our existing WordPress website?",
        answer: "Yes. We migrate your existing blog posts, pages, images, author profiles, and URL structures cleanly to the new theme while ensuring all existing links and SEO rankings remain intact.",
      },
      {
        question: "How do you protect WordPress sites from security vulnerabilities?",
        answer: "We minimize plugin usage, configure server-level security headers, enforce two-factor authentication for administrators, change default login paths, and establish automated daily cloud backups.",
      },
      {
        question: "Is WordPress still a good choice for modern business websites?",
        answer: "When built properly with a custom, lightweight theme, WordPress remains one of the world's most versatile and user-friendly content management systems, particularly for content-heavy marketing teams.",
      },
      {
        question: "Can our marketing team publish new landing pages without developer assistance?",
        answer: "Yes. We configure modular, reusable Gutenberg content blocks so your marketing staff can create new landing pages, change text, swap hero graphics, and publish case studies independently without breaking spacing or design consistency.",
      },
      {
        question: "How fast will our custom WordPress website load on mobile connections?",
        answer: "By completely avoiding bloated visual page builder plugins and implementing WebP image optimization, server caching, and lightweight CSS, our custom themes routinely load in under 1.5 seconds and score 90+ on Google PageSpeed Insights.",
      },
    ],
    relatedSlugs: ["web-development", "seo-aeo", "ecommerce"],
    builtWith: ["WordPress Core", "Custom Gutenberg Blocks", "PHP", "Tailwind CSS", "MySQL", "WP REST API"],
    seo: {
      title: "Custom WordPress Development | Maxora Technology",
      description: "Custom WordPress development with lightweight Gutenberg block themes. High-speed, secure, and easy for non-technical teams to edit.",
    },
  },
  {
    slug: "crm-erp",
    number: "05",
    title: "Custom CRM & ERP",
    subtitle: "Bespoke business management systems tailored to your exact workflows with zero per-user monthly licensing fees.",
    iconName: "Database",
    tag: "Operational Scale",
    accent: "from-blue-600 to-indigo-600",
    headlineBenefit: "A unified software platform that connects your customer inquiries, orders, inventory, and billing in one reliable place.",
    checklist: [
      "Tailored exactly to your operational steps so your team adopts the tool without confusion",
      "No escalating per-seat monthly subscription fees as your team expands over time",
      "Role-based access permissions so staff only see the information relevant to their responsibilities",
      "Instant WhatsApp notifications, automated invoice generation, and exportable financial reports",
    ],
    problems: [
      "Commercial off-the-shelf software charges expensive per-user monthly fees that multiply as your company grows.",
      "Off-the-shelf systems force your staff to adapt their daily operations to rigid, generic software screens.",
      "Critical customer data is scattered across separate WhatsApp chats, paper files, and disconnected spreadsheets.",
      "Managers spend hours every week manually copying numbers between systems to generate basic status reports.",
    ],
    process: [
      {
        step: "01",
        title: "Operational Workflow Mapping",
        description: "We shadow your daily processes to map exactly how leads enter, how quotes are issued, and how orders move to fulfillment.",
      },
      {
        step: "02",
        title: "Database and Pipeline Design",
        description: "We structure relational data models, role permissions, and notification triggers tailored to your team's hierarchy.",
      },
      {
        step: "03",
        title: "Module Engineering and Testing",
        description: "We build dedicated modules for leads, accounts, inventory, and invoicing, validating each module with your core staff.",
      },
      {
        step: "04",
        title: "Data Migration and Deployment",
        description: "We import your historical records from spreadsheets, host the system on your private secure server, and train your staff.",
      },
    ],
    examples: [
      {
        label: "Sample",
        title: "Real Estate Pipeline & Broker Management System",
        description: "A centralized CRM managing property leads, site visit schedules, broker commissions, and automated WhatsApp follow-ups.",
        url: "/portfolio",
      },
      {
        label: "Case study",
        title: "Multi-Warehouse Inventory & Order Portal",
        description: "Replaced four disconnected spreadsheets with a bespoke ERP managing real-time stock levels, purchase orders, and GST billing.",
        url: "/portfolio",
      },
    ],
    audiences: [
      {
        title: "Growing Mid-Sized Businesses",
        description: "Companies with 10 to 100+ team members who have hit the operational ceiling of Excel sheets and shared folders.",
      },
      {
        title: "Real Estate & Property Developers",
        description: "Agencies requiring structured lead assignment, automated customer communication, and sales commission tracking.",
      },
      {
        title: "Manufacturing & Distribution Firms",
        description: "Suppliers managing complex orders, raw material inventory, dealer pricing tiers, and delivery dispatches.",
      },
    ],
    pricing: {
      startsFrom: "[CONFIRM]",
      duration: "[CONFIRM]",
    },
    ownership: "Your organization holds 100% intellectual property ownership of the CRM/ERP software and database. The system is hosted directly on your private cloud server with encrypted backups. You never pay recurring software licensing costs per user, allowing your staff to scale freely.",
    faqs: [
      {
        question: "How is a custom CRM better than Salesforce, Zoho, or HubSpot?",
        answer: "Off-the-shelf tools charge monthly fees for every employee, restrict customization behind higher subscription tiers, and force you into generic workflows. A custom CRM is designed around your exact procedures, integrates directly with your existing tools, and incurs zero monthly per-user license fees.",
      },
      {
        question: "Can our existing spreadsheet data be migrated into the new system?",
        answer: "Yes. We clean, format, and import your historical customer contacts, past invoices, order logs, and inventory data so your team starts with complete information from day one.",
      },
      {
        question: "Can we control what each employee is allowed to view or edit?",
        answer: "Yes. We implement comprehensive role-based access controls. For example, sales staff see only their assigned prospects, accountants view invoicing modules, and managers access company-wide reporting.",
      },
      {
        question: "Where is our customer data stored and how is it secured?",
        answer: "Your database is hosted on your private cloud instance (AWS, DigitalOcean, or private VPS) with database encryption at rest, secure SSL transmission, and automated daily off-site backups.",
      },
      {
        question: "Can the custom CRM/ERP connect with our WhatsApp and existing accounting software?",
        answer: "Yes. We build custom API integrations to connect directly with the official WhatsApp Business API, payment gateways, and accounting software (like Tally or Zoho Books) to automate alerts and sync ledger records.",
      },
      {
        question: "How long does custom business management software take to build and deploy?",
        answer: "An initial production MVP typically takes 6 to 10 weeks. Because we build modularly, your team can begin using core lead management or inventory modules early while secondary workflows are finalized.",
      },
    ],
    relatedSlugs: ["ai-automation", "web-development", "app-development"],
    builtWith: ["Node.js", "Next.js", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "Docker"],
    seo: {
      title: "Custom CRM & ERP Development | Maxora Technology",
      description: "Custom CRM and ERP systems tailored to your business operations. Zero per-user monthly license fees, automated workflows, and total data ownership.",
    },
  },
  {
    slug: "ai-automation",
    number: "06",
    title: "AI and Automation",
    subtitle: "Automate repetitive data entry, customer conversations, and cross-tool workflows to save hundreds of hours.",
    iconName: "Bot",
    tag: "Workflow Efficiency",
    accent: "from-indigo-600 to-cyan-500",
    headlineBenefit: "Reliable automated workflows that handle routine customer questions, route leads instantly, and eliminate manual paperwork.",
    checklist: [
      "Automated WhatsApp and web chat assistants answering common customer questions around the clock",
      "Instant routing of new sales leads into your CRM with staff notifications via email and messaging",
      "Automated extraction of text, line items, and totals from invoices and PDF documents",
      "Seamless data synchronization connecting your website, spreadsheets, email, and internal databases",
    ],
    problems: [
      "Staff spend hours every day manually copying data between emails, spreadsheets, and accounting software.",
      "High-intent sales prospects go cold because customer inquiries sit unanswered outside of business hours.",
      "Manual data entry leads to frequent typos, lost receipts, and delayed customer fulfillment.",
      "Teams are overwhelmed by repetitive customer questions that could be resolved instantly through automation.",
    ],
    process: [
      {
        step: "01",
        title: "Bottleneck Identification",
        description: "We audit your team's repetitive tasks to identify which operational bottlenecks will yield the highest return through automation.",
      },
      {
        step: "02",
        title: "Logic and Integration Architecture",
        description: "We map trigger conditions, data transformation steps, and fallback safety rules across your connected tools.",
      },
      {
        step: "03",
        title: "Automation Construction and Safety Tests",
        description: "We build and test the workflows with sample data, ensuring edge cases and exceptions are handled safely.",
      },
      {
        step: "04",
        title: "Deployment and Team Walkthrough",
        description: "We activate the workflows in production, establish error monitoring alerts, and train your staff on the new processes.",
      },
    ],
    examples: [
      {
        label: "Live demo",
        title: "WhatsApp Business Lead Qualification Bot",
        description: "An automated WhatsApp assistant that greets prospective buyers, answers FAQs, collects project details, and alerts the sales team.",
        url: "/portfolio",
      },
      {
        label: "Sample",
        title: "Automated Invoice & Document Extraction Pipeline",
        description: "A secure workflow that monitors an accounts inbox, extracts billing details from attached PDFs, and creates draft bills in accounting.",
        url: "/portfolio",
      },
    ],
    audiences: [
      {
        title: "High-Volume Service Providers",
        description: "Companies receiving dozens of customer inquiries daily who need instant qualification and automated booking.",
      },
      {
        title: "Operational & Logistics Teams",
        description: "Businesses managing order statuses, delivery confirmations, and cross-platform inventory synchronization.",
      },
      {
        title: "Administrative & Accounting Departments",
        description: "Offices seeking to eliminate manual document reconciliation, receipt filing, and invoice data entry.",
      },
    ],
    pricing: {
      startsFrom: "[CONFIRM]",
      duration: "[CONFIRM]",
    },
    ownership: "You maintain complete ownership of all automation scripts, API keys, webhook configurations, and database triggers. We configure connections directly under your company accounts, providing step-by-step documentation so your internal team understands how every workflow operates.",
    faqs: [
      {
        question: "What types of business tasks can be automated?",
        answer: "We automate lead notifications, customer onboarding emails, WhatsApp inquiry responses, invoice parsing, spreadsheet updates, appointment reminders, and cross-application database syncing.",
      },
      {
        question: "Do we need technical staff to maintain automated workflows?",
        answer: "No. We build automations with clear error notifications and straightforward control panels. If a third-party service experiences downtime or an unexpected format appears, the system alerts you with specific details.",
      },
      {
        question: "Can automation integrate with our official WhatsApp Business number?",
        answer: "Yes. We integrate with the official WhatsApp Business Cloud API, enabling automated customer verification, order tracking, and support triage on your verified business number.",
      },
      {
        question: "How do you ensure automated systems do not give inaccurate answers?",
        answer: "We implement strict guardrails. Automated assistants are trained only on your verified business facts and documentation, with automated escalations to human team members when a question falls outside defined boundaries.",
      },
      {
        question: "How natural do AI voice assistants sound when answering customer calls?",
        answer: "Modern AI voice agents feature sub-500ms conversational response latencies, natural vocal pauses, and emotional inflection. Callers can schedule appointments, inquire about services, and get transferred to human staff seamlessly.",
      },
      {
        question: "How quickly does lead automation respond to incoming web inquiries or ads?",
        answer: "Our automated pipelines trigger within 30 to 60 seconds of form submission. The system enriches lead details, sends a verified WhatsApp greeting, and notifies your sales team with key buyer context.",
      },
    ],
    relatedSlugs: ["crm-erp", "web-development", "seo-aeo"],
    builtWith: ["Python", "Node.js", "OpenAI API", "WhatsApp Cloud API", "PostgreSQL", "n8n"],
    seo: {
      title: "Business AI & Workflow Automation | Maxora Technology",
      description: "Automate repetitive business workflows, customer messaging, and document extraction. Custom AI automation and WhatsApp integrations.",
    },
  },
  {
    slug: "seo-aeo",
    number: "07",
    title: "Technical SEO and AEO",
    subtitle: "Engineered search engine visibility and AI answer engine optimization for growing brands.",
    iconName: "Sparkles",
    tag: "Modern Search",
    accent: "from-cyan-500 to-blue-600",
    headlineBenefit: "A technically sound digital foundation that helps your business rank on Google and get cited by modern AI search assistants.",
    checklist: [
      "Structured Schema.org markup so search engines understand your exact services and credentials",
      "Implementation of modern AI discovery standards including machine-readable site content",
      "Sub-two-second page load speeds that easily satisfy Google Core Web Vitals requirements",
      "Clean heading structures and clear semantic HTML that search bots index without crawl errors",
    ],
    problems: [
      "Your website fails Google Core Web Vitals speed tests, pushing your business down in search results.",
      "Modern AI assistants like ChatGPT and Perplexity provide answers to prospective buyers without ever citing your company.",
      "Search crawlers waste time parsing broken JavaScript, missing critical pages and newly published content.",
      "Missing Schema.org structured data causes search listings to appear plain without star ratings or rich snippets.",
    ],
    process: [
      {
        step: "01",
        title: "Technical and Entity Audit",
        description: "We audit your site's crawl efficiency, Core Web Vitals, entity relationships, and indexing health across search engines.",
      },
      {
        step: "02",
        title: "Code and Speed Optimization",
        description: "We optimize heavy images, remove render-blocking code, and clean up HTML structures to ensure instant loading.",
      },
      {
        step: "03",
        title: "Structured Data Implementation",
        description: "We engineer JSON-LD graphs for your Organization, Services, and FAQs to earn rich search features.",
      },
      {
        step: "04",
        title: "AI Readiness & Monitoring",
        description: "We set up machine-readable site endpoints and monitoring dashboards to track search impressions and AI citation retrieval.",
      },
    ],
    examples: [
      {
        label: "Sample",
        title: "Enterprise Structured Data & Entity Graph",
        description: "A comprehensive JSON-LD schema implementation linking multi-location services, credentials, and executive profiles for rich Google search cards.",
        url: "/portfolio",
      },
      {
        label: "Case study",
        title: "Core Web Vitals & AI Discovery Overhaul",
        description: "Optimized a B2B service platform from 42 to 96 on mobile PageSpeed, achieving top-three rankings for high-intent regional keywords.",
        url: "/portfolio",
      },
    ],
    audiences: [
      {
        title: "High-Intent B2B Providers",
        description: "Companies whose customers conduct thorough research on Google and AI assistants before picking a provider.",
      },
      {
        title: "Regional & Multi-City Businesses",
        description: "Organizations competing for qualified local client inquiries in competitive geographic markets.",
      },
      {
        title: "Websites Experiencing Traffic Drops",
        description: "Businesses whose organic search traffic declined after recent Google algorithm updates or technological deprecations.",
      },
    ],
    pricing: {
      startsFrom: "[CONFIRM]",
      duration: "[CONFIRM]",
    },
    ownership: "All technical audits, schema code, machine-readable discovery files, and search console configuration belong entirely to your company. We provide transparent documentation explaining every technical change made, so your internal team can maintain high visibility over the long term.",
    faqs: [
      {
        question: "What is Answer Engine Optimization (AEO) and why does it matter?",
        answer: "AEO is the practice of optimizing your website content and technical structure so AI search engines—such as ChatGPT, Perplexity, and Google AI Overviews—can easily read, understand, and cite your business as a trusted authority when users ask questions.",
      },
      {
        question: "How do you improve Google Core Web Vitals?",
        answer: "We resolve Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) by optimizing web fonts, compressing visual assets, leveraging modern server caching, and eliminating unused third-party JavaScript.",
      },
      {
        question: "Do you guarantee first-page Google rankings?",
        answer: "No reputable engineer can guarantee specific rank positions because search engine algorithms evaluate hundreds of factors. What we guarantee is a technically flawless foundation: lightning-fast speeds, zero crawl barriers, and semantic structured data that gives your business every technical advantage.",
      },
      {
        question: "What is Schema.org structured data and how does it help?",
        answer: "Schema markup is machine-readable code that explicitly tells search engines what your business is, what services you offer, where you operate, and what clients say. This enables Google to display enhanced rich snippets like review stars, FAQs, and price ranges in search results.",
      },
      {
        question: "How do we get our business cited in ChatGPT, Perplexity, and Google AI Overviews?",
        answer: "AI models select sources that provide clear direct answer passages, structured Schema.org entity graphs, fast Core Web Vitals, and verified brand consensus across authoritative third-party platforms.",
      },
      {
        question: "What is the llms.txt standard and does our website need it?",
        answer: "llms.txt is a modern standard that provides an agent-readable Markdown summary of your company, services, and technical capabilities so autonomous AI agents and LLM crawlers can accurately parse and recommend your business.",
      },
    ],
    relatedSlugs: ["web-development", "wordpress", "ai-automation"],
    builtWith: ["Schema.org JSON-LD", "llms.txt Standard", "Next.js Metadata API", "Google Search Console", "PageSpeed Insights"],
    seo: {
      title: "Technical SEO & AEO Services | Maxora Technology",
      description: "Technical SEO and AI Answer Engine Optimization (AEO). Optimize Core Web Vitals, Schema.org structured data, and citations across AI search engines.",
    },
  },
];

export function getServiceBySlug(slug: string): ServiceContent | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}

export function getRelatedServices(currentSlug: string): ServiceContent[] {
  const current = getServiceBySlug(currentSlug);
  if (!current) return [];
  return current.relatedSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is ServiceContent => Boolean(s));
}

export function buildFaqSchema(faqs: ServiceFAQItem[], canonicalPath: string) {
  const siteUrl = "https://maxoratechnology.com";
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}${canonicalPath}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
