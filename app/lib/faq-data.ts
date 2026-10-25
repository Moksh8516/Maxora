// app/lib/faq-data.ts

export interface FAQItem {
  question: string;
  answer: string;
}

export const homepageFaqs: FAQItem[] = [
  {
    question: "What kinds of projects do you build?",
    answer:
      "We design and build custom websites, iOS and Android mobile apps, online eCommerce stores, tailored CRM and ERP business tools, and WhatsApp workflow automations for growing companies.",
  },
  {
    question: "How does your pricing work?",
    answer:
      "We provide clear, fixed-price quotes based on your exact requirements before development starts. You receive an itemized project scope with milestone stages, so you know the full cost with no hidden fees or surprise retainer charges.",
  },
  {
    question: "How long does a project take from start to finish?",
    answer:
      "Project timelines depend on what you need built. High-performance business websites usually take 2 to 4 weeks. Mobile apps and eCommerce stores take 4 to 8 weeks. Custom business management portals take 6 to 12 weeks. We deliver in weekly milestone stages with working demos.",
  },
  {
    question: "How do we see progress and provide feedback during development?",
    answer:
      "You speak directly with the engineers building your software. Every week, we share a clickable working demo so you can test features on your phone or laptop and request adjustments before the final launch.",
  },
  {
    question: "Can you build a custom CRM or business portal without per-seat fees?",
    answer:
      "Yes. Commercial SaaS tools charge expensive monthly subscription fees for every employee you add. We build custom dashboards tailored to your exact workflow, where your entire team can log in without paying monthly per-user licensing fees.",
  },
  {
    question: "Do you help with domain setup, secure hosting, and launching?",
    answer:
      "Yes. We take care of domain configuration, setup on fast and secure cloud servers, and full launch testing across phones, tablets, and desktop browsers so your site or application is ready for customers.",
  },
  {
    question: "What happens after launch? Do you provide maintenance and updates?",
    answer:
      "Yes. We offer reliable ongoing maintenance packages to monitor server performance, install security updates, and add new features as your business expands.",
  },
  {
    question: "How do we get started on a project together?",
    answer:
      "Simply click Let's connect and tell us about what you want to build. We will review your goals, share practical options, and provide a clear written estimate and timeline.",
  },
];
