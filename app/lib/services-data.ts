export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subheading: string;
  intro: string;
  whoItsFor: string[];
  deliverables: {
    title: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  techStack: string[];
  faqs: ServiceFAQ[];
}

export const servicesData: Record<string, ServiceData> = {
  "web-development": {
    slug: "web-development",
    metaTitle: "Web Development Company in India | Next.js & React",
    metaDescription:
      "Custom web development company in India building high-speed Next.js and React applications for growing businesses. Clean code, SEO, and scalable backends.",
    h1: "Custom Web Development Company in India",
    subheading:
      "Modern, high-performance web applications engineered with Next.js, React, and TypeScript for businesses in India and worldwide.",
    intro:
      "Maxora Technology is a web development company in India providing full-stack web engineering for ambitious businesses. We build custom websites, client portals, SaaS applications, and web platforms designed for speed, search visibility, and reliability. By using modern architectures like Next.js Server Components, Tailwind CSS, and headless backends, we eliminate bloated templates and deliver web products that load in under two seconds, convert visitors, and scale without technical debt.",
    whoItsFor: [
      "Growing companies that have outgrown rigid website builders and need custom functionality.",
      "SaaS founders and startups requiring scalable frontend interfaces with robust backend APIs.",
      "B2B service providers needing fast, accessible lead-generation websites with built-in SEO.",
      "Businesses seeking to modernize legacy web applications to modern Next.js and React architectures.",
    ],
    deliverables: [
      {
        title: "Custom Next.js & React Frontend",
        description:
          "Bespoke, responsive user interfaces developed with React, Next.js, and TypeScript. Optimized for sub-second page loads, mobile usability, and zero layout shift.",
      },
      {
        title: "API & Backend Architecture",
        description:
          "Secure REST and GraphQL APIs engineered using Node.js, Express, PostgreSQL, and MongoDB, complete with role-based access control and third-party integrations.",
      },
      {
        title: "Built-In Technical SEO & Web Vitals",
        description:
          "Every web application is engineered with semantic HTML5, automated Schema.org structured data, dynamic XML sitemaps, open-graph metadata, and 90+ PageSpeed scores.",
      },
      {
        title: "Cloud Deployment & CI/CD Pipelines",
        description:
          "Automated cloud infrastructure setup on Vercel, AWS, or DigitalOcean, ensuring continuous deployment, SSL security, and automated database backups.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Architecture Planning",
        description:
          "We analyze your user workflows, business requirements, and technical constraints to draft a clear system architecture and project roadmap.",
      },
      {
        step: "02",
        title: "UI/UX & Component Design",
        description:
          "We design accessible, responsive design systems and wireframes that reflect your brand identity and guide visitors toward clear conversion actions.",
      },
      {
        step: "03",
        title: "Full-Stack Development & Testing",
        description:
          "Our engineers develop frontend and backend components with clean, typed code, conducting cross-browser testing and performance audits continuously.",
      },
      {
        step: "04",
        title: "Launch, Monitoring & Handoff",
        description:
          "We deploy your production application to high-availability servers, verify domain and analytics connections, and provide full administrative documentation.",
      },
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "REST & GraphQL",
      "Docker & AWS",
    ],
    faqs: [
      {
        question: "Why should we build a custom website instead of using WordPress or Wix?",
        answer:
          "Custom web development with Next.js and React provides unmatched speed, full design flexibility, enterprise-grade security, and complete ownership of your codebase without plugin vulnerabilities or licensing fees.",
      },
      {
        question: "How long does a typical custom web development project take?",
        answer:
          "Most custom web development projects take between 4 to 8 weeks depending on scope, custom integrations, and data migration needs. We provide a milestone-driven schedule during project scoping.",
      },
      {
        question: "Will our website be optimized for mobile devices and search engines?",
        answer:
          "Yes. All web applications engineered by Maxora Technology are fully responsive across smartphones, tablets, and desktops, and include technical SEO, schema markup, and Core Web Vitals optimization.",
      },
      {
        question: "Do you offer post-launch support and maintenance?",
        answer:
          "Yes, we provide ongoing technical support, security patches, framework updates, and feature enhancements to ensure your digital products remain fast and reliable.",
      },
    ],
  },
  "app-development": {
    slug: "app-development",
    metaTitle: "Mobile App Development Company India | iOS & Android",
    metaDescription:
      "Mobile app development company in India building native and cross-platform apps using Flutter and React Native. Fast, secure, and user-centric mobile apps.",
    h1: "Mobile App Development Company in India",
    subheading:
      "Native and cross-platform mobile apps for iOS and Android built with Flutter and React Native for growing businesses.",
    intro:
      "Maxora Technology is an Indian mobile app development company creating intuitive, high-performance applications for iOS and Android. Whether you require a cross-platform Flutter application or a React Native product, we engineer mobile software that delivers native-feel performance, smooth animations, and secure cloud synchronization. We guide businesses through the entire lifecycle from product conception and UI design to Google Play Store and Apple App Store deployment.",
    whoItsFor: [
      "Businesses wanting to engage mobile customers with a dedicated iOS and Android application.",
      "Startups launching MVP mobile products with unified cross-platform codebases.",
      "Enterprises requiring mobile field tools, internal logistics apps, or customer portals.",
      "Companies upgrading outdated mobile apps with modern frameworks and real-time features.",
    ],
    deliverables: [
      {
        title: "Cross-Platform App Development",
        description:
          "Single-codebase mobile applications built with Flutter or React Native, reducing development time while maintaining 60fps native performance on both iOS and Android.",
      },
      {
        title: "Mobile UI/UX Design",
        description:
          "Human-centered mobile interface designs following Apple Human Interface Guidelines and Google Material Design principles.",
      },
      {
        title: "Backend & Real-Time Sync",
        description:
          "Cloud backends with Firebase, Node.js, or PostgreSQL for user authentication, offline caching, push notifications, and payment gateways.",
      },
      {
        title: "App Store Publishing & Compliance",
        description:
          "Complete handling of Apple App Store and Google Play Store review processes, metadata configuration, asset preparation, and security compliance.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Product Scoping & User Flow",
        description:
          "We define key features, user personas, screen journeys, and technical integrations to ensure a lean, effective mobile product.",
      },
      {
        step: "02",
        title: "Interactive Prototype Design",
        description:
          "We build clickable prototypes allowing you to test the mobile user experience before coding begins.",
      },
      {
        step: "03",
        title: "Sprint Development & QA",
        description:
          "We build frontend interfaces and backend APIs iteratively, testing on real physical iOS and Android hardware across diverse screen resolutions.",
      },
      {
        step: "04",
        title: "Store Submission & Launch",
        description:
          "We prepare store listings, screenshots, privacy policies, and submit the application for official app store approvals.",
      },
    ],
    techStack: [
      "Flutter",
      "React Native",
      "Dart",
      "TypeScript",
      "Firebase",
      "Node.js",
      "Redux / Bloc",
      "Stripe / Razorpay",
      "SQLite / Hive",
      "App Store Connect",
    ],
    faqs: [
      {
        question: "Should we build our app using Flutter, React Native, or Native code?",
        answer:
          "For 90% of business applications, cross-platform frameworks like Flutter or React Native offer significant cost and time savings with virtually identical performance to native development.",
      },
      {
        question: "Do you publish our app to the App Store and Google Play Store?",
        answer:
          "Yes, we manage the complete submission process including store listings, privacy compliance, review feedback, and release management under your developer accounts.",
      },
      {
        question: "How do you ensure data security in mobile apps?",
        answer:
          "We implement encrypted on-device storage, HTTPS API communication with token-based JWT authentication, biometric login options, and secure payment processing.",
      },
      {
        question: "Can the mobile app work offline without internet?",
        answer:
          "Yes, we build local caching mechanisms using SQLite or Hive so users can access core content offline and sync data automatically when connectivity returns.",
      },
    ],
  },
  "wordpress": {
    slug: "wordpress",
    metaTitle: "WordPress Development Services India | Custom Themes",
    metaDescription:
      "Expert WordPress development company in India. Custom Gutenberg block themes, WooCommerce stores, speed optimization, and secure plugin engineering.",
    h1: "Custom WordPress Development Services in India",
    subheading:
      "High-speed, custom Gutenberg themes and WooCommerce stores built for marketing flexibility, security, and search performance.",
    intro:
      "Maxora Technology provides custom WordPress development services in India for businesses seeking fast, secure, and editor-friendly websites. We do not rely on bloated visual page builders that slow down your website. Instead, we build clean, bespoke Gutenberg block themes, tailor-made WooCommerce stores, and lightweight plugins. Our custom WordPress builds achieve 90+ PageSpeed scores, provide simple content publishing workflows, and maintain enterprise-grade security.",
    whoItsFor: [
      "Marketing teams needing an intuitive, flexible block editor to publish landing pages without developer dependency.",
      "Companies with slow, bloated WordPress sites needing clean theme re-engineering and speed optimization.",
      "Online retailers requiring customized WooCommerce checkouts, inventory sync, and payment integrations.",
      "Publishers and content creators needing structured post architectures with high search engine rankings.",
    ],
    deliverables: [
      {
        title: "Bespoke Gutenberg Block Themes",
        description:
          "Custom modular block themes built specifically for your brand identity. Lightweight PHP and React components that eliminate heavy third-party builder plugins.",
      },
      {
        title: "WooCommerce E-Commerce Solutions",
        description:
          "Custom WooCommerce store builds with frictionless cart and checkout flows, local Indian and international payment gateways, and automated inventory management.",
      },
      {
        title: "Core Web Vitals & Speed Optimization",
        description:
          "Complete performance audits, asset minification, Redis object caching, database indexing, and WebP image optimization to achieve top PageSpeed scores.",
      },
      {
        title: "Security Hardening & Maintenance",
        description:
          "Two-factor authentication setup, firewall configuration, automated off-site backups, and ongoing security patching against vulnerabilities.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Requirements & Content Modeling",
        description:
          "We map your page layouts, custom post types, editorial fields, and SEO requirements to structure an intuitive WordPress admin interface.",
      },
      {
        step: "02",
        title: "Custom Block & Theme Coding",
        description:
          "We develop clean, standards-compliant Gutenberg blocks and templates using PHP, JavaScript, and Tailwind CSS.",
      },
      {
        step: "03",
        title: "Performance & SEO Configuration",
        description:
          "We configure Schema.org markup, XML sitemaps, caching layers, and responsive images to maximize search crawlability.",
      },
      {
        step: "04",
        title: "Content Migration & Team Training",
        description:
          "We migrate your existing content securely and conduct a video walkthrough to train your team on managing the site.",
      },
    ],
    techStack: [
      "WordPress",
      "PHP 8+",
      "Gutenberg / React",
      "WooCommerce",
      "MySQL",
      "Tailwind CSS",
      "Redis Caching",
      "WP REST API",
      "Cloudflare CDN",
      "Razorpay / Stripe",
    ],
    faqs: [
      {
        question: "Why do you recommend custom Gutenberg themes over Elementor or Divi?",
        answer:
          "Custom Gutenberg themes generate significantly cleaner HTML and CSS, resulting in page load times under 1.5 seconds, higher Google rankings, and lower long-term maintenance costs.",
      },
      {
        question: "Can you migrate our existing WordPress content to a new custom theme?",
        answer:
          "Yes, we safely migrate your posts, pages, images, taxonomies, and SEO metadata with 301 redirect mappings to ensure zero loss of organic search traffic.",
      },
      {
        question: "Is WordPress secure for business websites?",
        answer:
          "When built with custom code, strict file permissions, two-factor authentication, and maintained with regular updates, WordPress is an extremely secure and robust CMS.",
      },
      {
        question: "Can we manage and edit all website content ourselves?",
        answer:
          "Yes. We design the Gutenberg editing experience so your marketing team can easily create new pages, edit text, swap images, and publish blogs without touching code.",
      },
    ],
  },
  "ecommerce": {
    slug: "ecommerce",
    metaTitle: "E-Commerce Development Company India | Shopify & Custom",
    metaDescription:
      "E-commerce development company in India building high-converting online stores with Shopify, WooCommerce, and custom headless commerce architectures.",
    h1: "E-Commerce Development Company in India",
    subheading:
      "High-converting, lightning-fast online stores engineered with Shopify, WooCommerce, and headless commerce architectures.",
    intro:
      "Maxora Technology is an e-commerce development company in India helping direct-to-consumer (D2C) brands and B2B merchants scale their online sales. We combine conversion-focused UI design with rock-solid checkout engineering. From custom Shopify Liquid themes and custom WooCommerce platforms to headless Next.js commerce stores, we build online shopping experiences optimized for speed, average order value (AOV), and multi-currency international transactions.",
    whoItsFor: [
      "Retail brands seeking a custom Shopify or WooCommerce store that stands out from template competitors.",
      "D2C brands scaling ad traffic that require sub-second mobile checkouts to maximize conversion rates.",
      "B2B wholesalers requiring custom pricing tiers, bulk order matrices, and gated customer portals.",
      "Enterprises migrating away from outdated commerce platforms to modern headless architectures.",
    ],
    deliverables: [
      {
        title: "Shopify & Shopify Plus Development",
        description:
          "Bespoke Shopify theme development, custom app integrations, checkout customizations, and Storefront API headless builds.",
      },
      {
        title: "WooCommerce Custom Engineering",
        description:
          "High-performance WooCommerce storefronts with custom product configurators, subscription engines, and automated order routing.",
      },
      {
        title: "Payment Gateway & Tax Integration",
        description:
          "Seamless integration with Razorpay, Cashfree, Stripe, PayPal, Apple Pay, and automated GST/VAT tax calculations.",
      },
      {
        title: "E-Commerce Conversion Rate Optimization",
        description:
          "Optimized product detail pages (PDP), one-page checkout flows, upsell algorithms, and abandoned cart recovery mechanisms.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Catalog & Business Flow Strategy",
        description:
          "We analyze your product variants, payment gateways, shipping rules, and ERP integrations to plan the optimal commerce structure.",
      },
      {
        step: "02",
        title: "Conversion-Focused Store Design",
        description:
          "We design mobile-first product pages, cart drawers, and category filters focused on reducing friction and increasing order conversions.",
      },
      {
        step: "03",
        title: "Custom Theme & Checkout Development",
        description:
          "We develop fast, clean templates and connect required inventory, analytics, and payment infrastructure.",
      },
      {
        step: "04",
        title: "Payment QA, Launch & Optimization",
        description:
          "We perform end-to-end sandbox and live transaction testing across devices before launching with comprehensive GA4 tracking.",
      },
    ],
    techStack: [
      "Shopify",
      "Liquid",
      "WooCommerce",
      "Next.js Commerce",
      "Stripe",
      "Razorpay",
      "Node.js",
      "Tailwind CSS",
      "Google Analytics 4",
      "Klaviyo",
    ],
    faqs: [
      {
        question: "Which e-commerce platform is best for our business: Shopify or WooCommerce?",
        answer:
          "Shopify is ideal for businesses wanting an all-in-one hosted solution with minimal server management. WooCommerce is best for brands requiring complete customizability, open-source ownership, and lower monthly software fees.",
      },
      {
        question: "Can you integrate local Indian payment gateways like UPI and Razorpay?",
        answer:
          "Yes, we integrate all major Indian payment solutions including UPI, Razorpay, Cashfree, PayU, and Paytm alongside international processors like Stripe and PayPal.",
      },
      {
        question: "How do you optimize online stores for mobile shoppers?",
        answer:
          "We implement sticky add-to-cart buttons, fast slide-out carts, compressed WebP media, one-click checkout options, and thumb-friendly navigation to ensure high mobile conversion rates.",
      },
      {
        question: "Can our store sync inventory automatically with our accounting or ERP software?",
        answer:
          "Yes, we build custom API connectors to sync real-time stock levels, orders, and customer data directly with your ERP, CRM, or warehouse management system.",
      },
    ],
  },
  "crm-erp": {
    slug: "crm-erp",
    metaTitle: "Custom CRM & ERP Software Development India",
    metaDescription:
      "Custom CRM and ERP software development company in India. We engineer tailored business management systems, workflow automation, and centralized data portals.",
    h1: "Custom CRM & ERP Software Development in India",
    subheading:
      "Tailored business management software, workflow automation, and central data systems built for growing organizations in India and globally.",
    intro:
      "Maxora Technology is a custom CRM and ERP software development company in India helping organizations streamline operations and eliminate repetitive manual workflows. Off-the-shelf software often imposes rigid processes and expensive monthly per-user licensing fees. We engineer bespoke business systems tailored to your specific operational logic, incorporating custom sales pipelines, inventory management, automated billing, and executive analytics dashboards.",
    whoItsFor: [
      "Businesses struggling with disconnected spreadsheets, manual handoffs, and data silos across departments.",
      "Organizations paying expensive per-seat SaaS subscriptions for software with unused, rigid features.",
      "Service and manufacturing companies requiring tailored operational workflows, quotes, and job tracking.",
      "Companies needing a secure, centralized administrative portal to manage distributed teams and client data.",
    ],
    deliverables: [
      {
        title: "Custom CRM & Lead Pipelines",
        description:
          "Tailored customer relationship management systems with visual deal boards, automated lead assignment, communication history, and follow-up alerts.",
      },
      {
        title: "ERP & Operations Portals",
        description:
          "Centralized platforms for inventory tracking, purchase orders, vendor management, invoicing, and cross-department resource scheduling.",
      },
      {
        title: "Workflow Automation & Logic Engines",
        description:
          "Automated status triggers, multi-stage approval flows, customer SMS/email notifications, and automatic PDF invoice generation.",
      },
      {
        title: "Executive Dashboards & Analytics",
        description:
          "Real-time operational reporting, revenue forecasting, employee productivity metrics, and custom exportable reports.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Business Process Mapping",
        description:
          "We analyze your operational bottlenecks, team responsibilities, and data flows to design a blueprint that matches your exact company procedures.",
      },
      {
        step: "02",
        title: "Database & Security Architecture",
        description:
          "We design normalized relational database schemas with role-based access control (RBAC), end-to-end encryption, and audit logging.",
      },
      {
        step: "03",
        title: "Agile Development & User Testing",
        description:
          "We build modular system features iteratively, testing each operational component directly with your key staff members.",
      },
      {
        step: "04",
        title: "Data Migration, Deployment & Training",
        description:
          "We migrate your existing spreadsheet data, deploy to secure dedicated cloud servers, and conduct comprehensive team onboarding.",
      },
    ],
    techStack: [
      "Node.js",
      "React / Next.js",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "AWS / GCP",
      "Tailwind CSS",
      "REST & Webhooks",
    ],
    faqs: [
      {
        question: "Why should we invest in custom CRM/ERP software over Salesforce or Zoho?",
        answer:
          "Custom software gives you 100% ownership with zero per-user monthly subscription fees. It matches your exact workflow without forcing your team to adapt to rigid third-party structures.",
      },
      {
        question: "How do you protect sensitive company and financial data?",
        answer:
          "We implement granular role-based permissions (RBAC), secure HTTPS/TLS encryption, database encryption at rest, multi-factor authentication (MFA), and detailed activity audit logs.",
      },
      {
        question: "Can the custom CRM/ERP connect with our existing tools and WhatsApp?",
        answer:
          "Yes, we build custom API integrations to connect with payment gateways, WhatsApp Business API, email servers, accounting software (like Tally or QuickBooks), and customer portals.",
      },
      {
        question: "How long does custom business software take to build and deploy?",
        answer:
          "A modular MVP CRM/ERP typically takes 6 to 12 weeks. We build modularly so your team can begin using core features early while secondary modules are developed.",
      },
    ],
  },
  "seo-aeo": {
    slug: "seo-aeo",
    metaTitle: "Technical SEO & AEO (AI Engine Optimization) Services India",
    metaDescription:
      "Strengthen your search visibility and build a technical foundation for AI engine discovery. Technical SEO, Schema markup, Core Web Vitals engineering, and LLM content structuring in India.",
    h1: "Technical SEO & AI Answer Engine Optimization (AEO)",
    subheading:
      "Improve your website's search visibility and build the technical foundation AI engines need to discover, understand, and surface your business across Google, ChatGPT, Perplexity, and AI Overviews.",
    intro:
      "Maxora Technology provides modern Technical SEO and Answer Engine Optimization (AEO/GEO) for ambitious businesses in India and worldwide. The search landscape has fundamentally evolved: traditional SEO ranks your pages on Google, while AEO optimizes your brand to be cited and recommended by AI engines like ChatGPT, Claude, Perplexity, and Google AI Overviews. We build rock-solid technical foundations, sub-second Core Web Vitals, semantic Schema.org JSON-LD, agent-readable files (llms.txt), and extractable content passages that ensure your business captures high-intent traffic across traditional and generative search.",
    whoItsFor: [
      "Companies experiencing traffic drops due to Google AI Overviews and zero-click search results.",
      "SaaS, B2B, and high-ticket service companies wanting to be shortlisted and recommended by AI buying agents.",
      "Businesses with slow websites, poor Core Web Vitals, or crawlability issues holding back organic rankings.",
      "Brands wanting to establish undisputed topical authority and entity consensus across the web.",
    ],
    deliverables: [
      {
        title: "Technical SEO & Core Web Vitals Engineering",
        description:
          "Full codebase audits to eliminate render-blocking scripts, resolve layout shift (CLS), optimize Largest Contentful Paint (LCP) under 1.8s, and configure optimal server caching.",
      },
      {
        title: "AEO & Generative Engine Optimization (GEO)",
        description:
          "Structuring content into extractable standalone answer blocks, natural-language definition lists, and comparison matrices engineered for LLM passage retrieval.",
      },
      {
        title: "Advanced Schema.org & Entity Graph",
        description:
          "Custom JSON-LD implementation for Organization, ProfessionalService, FAQPage, HowTo, Product, and ItemList schema to feed search engines explicit entity relationships.",
      },
      {
        title: "Agent Readiness & llms.txt Implementation",
        description:
          "Authoring and deploying llms.txt, machine-readable pricing specifications (pricing.md), and clean accessibility trees allowing autonomous AI agents to parse and recommend your services.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Technical & AI Visibility Audit",
        description:
          "We benchmark your current Google rankings, crawl budget, Core Web Vitals scores, and test 20+ key prompts across ChatGPT, Perplexity, and Google AI Overviews.",
      },
      {
        step: "02",
        title: "Schema & Architecture Structuring",
        description:
          "We inject semantic JSON-LD structured data, fix indexation bottlenecks, and generate dynamic XML sitemaps and machine-readable context files.",
      },
      {
        step: "03",
        title: "Content Extractability Refactor",
        description:
          "We restructure high-value service and landing pages with clear answer summaries, factual statistics, comparison tables, and natural-language FAQs.",
      },
      {
        step: "04",
        title: "Entity Authority & Continuous Monitoring",
        description:
          "We harmonize your brand positioning across third-party entity sources and monitor both organic SERP performance and AI citation frequency.",
      },
    ],
    techStack: [
      "Google Search Console",
      "Google AI Overviews",
      "Perplexity AI",
      "ChatGPT Search",
      "Schema.org JSON-LD",
      "llms.txt Standard",
      "PageSpeed Insights",
      "Core Web Vitals",
      "Next.js Metadata",
      "Semrush / Ahrefs",
    ],
    faqs: [
      {
        question: "What is the difference between traditional SEO and AEO (Answer Engine Optimization)?",
        answer:
          "Traditional SEO focuses on ranking web pages in search engine result lists. AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) structure and position your content so AI assistants like ChatGPT, Perplexity, and Google AI Overviews extract and cite your brand as an authoritative, direct answer to buyer queries.",
      },
      {
        question: "How do we get our business cited in ChatGPT and Google AI Overviews?",
        answer:
          "AI models select sources that provide clear direct answer passages, structured Schema.org entity data, reliable technical performance, and verified brand consensus across authoritative third-party platforms.",
      },
      {
        question: "Will technical SEO and AEO improve our existing website traffic?",
        answer:
          "Technical SEO resolves crawl bottlenecks, optimizes Core Web Vitals, and structures content for both organic search queries and generative answer engines to safeguard visibility.",
      },
      {
        question: "What is llms.txt and does our company website need it?",
        answer:
          "llms.txt is an emerging standard that provides a clean, Markdown-formatted summary of your company, services, and technical capabilities so autonomous AI agents can parse and recommend your business without executing complex client scripts.",
      },
    ],
  },
  "ai-automation": {
    slug: "ai-automation",
    metaTitle: "AI & Automation Services in India | Voice Agents, WhatsApp Bots & Lead Pipelines",
    metaDescription:
      "Scale business operations with AI voice assistants, WhatsApp automation bots, intelligent lead pipelines, and custom autonomous AI workflows from Maxora Technology.",
    h1: "AI & Automation Services for Modern Businesses",
    subheading:
      "Deploy natural AI voice agents, 24/7 WhatsApp AI bots, and autonomous lead workflows that cut overhead and respond to buyers in seconds.",
    intro:
      "Maxora Technology builds intelligent AI voice agents, custom WhatsApp conversational bots, and automated lead response engines that work around the clock. By combining modern Large Language Models (LLMs), real-time speech synthesis, and workflow orchestration engines, we help businesses eliminate repetitive manual tasks, qualify leads instantly, and deliver human-grade customer support without scaling headcount.",
    whoItsFor: [
      "Businesses losing high-intent leads due to slow response times or unanswered after-hours phone calls.",
      "Service providers, real estate firms, and clinics needing automated appointment booking and client intake.",
      "eCommerce and D2C brands wanting 24/7 WhatsApp support, instant order tracking, and AI-driven product recommendations.",
      "Sales teams looking to automate lead enrichment, CRM data entry, and multi-channel follow-up sequences.",
    ],
    deliverables: [
      {
        title: "AI Voice Assistants & Inbound Phone Agents",
        description:
          "Ultra-realistic conversational voice agents powered by modern speech engines (Vapi, Retell, ElevenLabs, Twilio) that answer customer calls, qualify buyer intent, book calendar appointments, and route complex cases to live representatives.",
      },
      {
        title: "Intelligent WhatsApp AI Bots & Support Agents",
        description:
          "Official WhatsApp Business Cloud API integrations equipped with custom RAG knowledge retrieval. Answers customer questions from your company docs, sends product catalogs, calculates quotes, and collects lead details seamlessly.",
      },
      {
        title: "Autonomous Lead Automation & CRM Routing",
        description:
          "Instant lead ingestion from Meta Ads, Google Ads, website forms, and landing pages. Automatically enriches contact data, scores lead intent, triggers immediate WhatsApp/SMS/Email notifications, and syncs directly into your CRM.",
      },
      {
        title: "Custom LLM Agents & Document Extraction",
        description:
          "Autonomous microservices that extract structured data from unstructured invoices, PDFs, emails, and contracts, pushing verified data straight to your database or ERP with zero manual copy-pasting.",
      },
      {
        title: "Multi-Platform Workflow Orchestration",
        description:
          "Robust backend automation pipelines engineered using n8n, Make, Zapier, or custom Node/Python microservices connecting your marketing, sales, accounting, and communication channels.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Workflow Audit & Opportunity Mapping",
        description:
          "We analyze your current communication channels, manual bottlenecks, and repetitive staff tasks to design an automation architecture with clear ROI.",
      },
      {
        step: "02",
        title: "Knowledge Base & Agent Prompt Engineering",
        description:
          "We ingest your company documentation, FAQs, pricing guidelines, and brand tone into structured vector databases and hardened system prompts with safety guardrails.",
      },
      {
        step: "03",
        title: "Integration & Webhook Architecture",
        description:
          "We connect the AI agents to your telephony (Twilio), WhatsApp API, CRM, calendar systems (Google/Calendly), and databases with end-to-end failover handling.",
      },
      {
        step: "04",
        title: "Testing, Deployment & Continuous Optimization",
        description:
          "We run extensive edge-case testing, monitor conversational transcripts, refine responses based on real user interactions, and ensure 99.9% uptime.",
      },
    ],
    techStack: [
      "OpenAI GPT-4o / Claude 3.5 Sonnet",
      "Google Gemini / Perplexity AI",
      "Sarvam AI (Indic & Hindi Voice Models)",
      "Vapi / Retell AI (Voice Agents)",
      "ElevenLabs (Voice Synthesis)",
      "Twilio / VoIP SIP Trunking",
      "WhatsApp Business Cloud API",
      "n8n / Pabbly Connect / Make / Zapier",
      "LangChain / LlamaIndex",
      "PostgreSQL / pgvector (RAG)",
      "Node.js & Python Webhooks",
      "HubSpot / Salesforce / Custom CRM",
    ],
    faqs: [
      {
        question: "How do AI voice assistants sound? Do they sound like robots?",
        answer:
          "Modern AI voice agents sound remarkably human, complete with natural pacing, breathing pauses, emotional inflection, and sub-500ms response latencies. Most callers cannot distinguish them from a trained human receptionist.",
      },
      {
        question: "Can the WhatsApp bot handle official business verification and green tick?",
        answer:
          "Yes. We build directly on the official Meta WhatsApp Business Cloud API. We guide you through Meta Business Verification and ensure compliance with Meta's messaging policies and template guidelines.",
      },
      {
        question: "What happens when an AI voice or chat agent encounters a question it doesn't know?",
        answer:
          "Our agents are built with strict guardrails against hallucinations. When an inquiry falls outside its knowledge boundaries, the agent politely informs the caller or user and immediately transfers the conversation to a human team member or creates an urgent CRM ticket.",
      },
      {
        question: "How does lead automation improve our conversion rates?",
        answer:
          "Industry data shows responding to an inbound lead within 60 seconds increases conversion rates by over 300%. Our lead automation triggers instant personalized WhatsApp and phone follow-ups the moment an ad form or website inquiry is submitted.",
      },
      {
        question: "How is pricing scoped for AI and automation systems?",
        answer:
          "Every automation system is scoped based on your specific requirements: number of channels (Voice, WhatsApp, Web), integration complexity (CRM, ERP, inventory), and expected conversation volume. We provide clear milestone-based pricing with zero hidden vendor lock-in.",
      },
    ],
  },
};
