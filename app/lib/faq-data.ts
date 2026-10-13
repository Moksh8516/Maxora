export interface FAQItem {
  question: string;
  answer: string;
}

export const homepageFaqs: FAQItem[] = [
  {
    question: "What's the typical timeline for a web development project?",
    answer:
      "Project timelines vary based on complexity. A custom website takes 2-4 weeks, while complex web applications or custom ERPs can take 6-12 weeks. We deliver in agile milestone sprints with transparent staging reviews.",
  },
  {
    question: "How much does custom software development cost?",
    answer:
      "Each project is scoped individually based on your technical requirements, deliverables, and timeline. We provide clear, milestone-driven estimates after an initial discovery consultation with zero recurring per-seat fees.",
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer:
      "Yes, we provide comprehensive maintenance plans including security updates, performance monitoring, technical support, and feature enhancements.",
  },
  {
    question: "What technologies and integrations do you specialize in?",
    answer:
      "We specialize in modern technologies including Next.js, React, Node.js, TypeScript, React Native, Flutter, and PostgreSQL. We integrate payment gateways (Razorpay, Stripe, UPI), CRM webhooks, and WhatsApp Business APIs.",
  },
  {
    question: "How do you ensure project quality and success?",
    answer:
      "We follow agile methodologies, conduct rigorous testing, ensure sub-2-second Core Web Vitals performance, and guarantee 100% intellectual property and code ownership upon completion.",
  },
  {
    question: "Can you collaborate with our existing team or regional businesses?",
    answer:
      "Yes. We collaborate with in-house teams globally via video and phone, and provide direct technical discovery consultations for businesses across the Patiala and Punjab region.",
  },
];
