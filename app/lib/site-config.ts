// app/lib/site-config.ts
export const siteConfig = {
  name: "Maxora Technology",
  legalName: "Maxora Technology",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "https://maxoratechnology.com"
  ).replace(/\/$/, ""),
  description:
    "Custom web and mobile app development, CRM/ERP systems, eCommerce platforms, and technical SEO/AEO solutions for growing businesses worldwide.",
  contact: {
    phone: "+91 7719545464",
    phoneDisplay: "(+91) 7719545464",
    phoneTel: "+917719545464",
    email: "info@maxoratechnology.com",
    address: "Punjab, India",
    addressDisplay: "Punjab, India (Serving India & Worldwide)",
    whatsapp: "+917719545464",
    whatsappLink: "https://wa.me/917719545464?text=Hello%20Maxora%20Technology%2C%20I%20would%20like%20to%20discuss%20a%20project.",
    supportHours: "Mon-Fri: 9AM-6PM IST (Fast Email & WhatsApp Support)",
  },
  social: {
    facebook: "https://facebook.com/maxora.technology",
    instagram: "https://instagram.com/maxora.technology",
    linkedin: "https://www.linkedin.com/company/maxoratechnology/",
    x: null,
  },
  // TODO(owner): Add Udyam registration number/text when available
  udyamRegistration: null,
  services: [
    {
      title: "App Development",
      href: "/Services/app-development",
      description: "Native and cross-platform mobile apps for iOS and Android.",
    },
    {
      title: "Web Development",
      href: "/Services/web-development",
      description: "High-performance web applications built with Next.js and React.",
    },
    {
      title: "WordPress Solutions",
      href: "/Services/wordpress",
      description: "Custom Gutenberg block themes and speed-optimized WordPress setups.",
    },
    {
      title: "eCommerce Platforms",
      href: "/Services/ecommerce",
      description: "High-converting online stores built on Shopify, WooCommerce, and headless commerce.",
    },
    {
      title: "Custom CRM/ERP",
      href: "/Services/crm-erp",
      description: "Bespoke business management systems with zero per-seat monthly license fees.",
    },
    {
      title: "SEO & AI Optimization",
      href: "/Services/seo-aeo",
      description: "Technical SEO, Core Web Vitals optimization, and AEO for Google AI Overviews and ChatGPT.",
    },
  ],
};
