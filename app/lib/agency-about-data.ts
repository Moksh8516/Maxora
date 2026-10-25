// app/lib/agency-about-data.ts
import {
  Code2,
  Smartphone,
  Workflow,
  Database,
  Search,
  Layout,
  Hammer,
  Rocket,
  LifeBuoy,
  Target,
  Clock,
  Sparkles,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

export const aboutMetadata = {
  title: "About Our Team & Philosophy | Maxora Technology",
  description:
    "We build fast websites, mobile apps, and custom business software. Learn how we work with founders and growing companies.",
};

export const aboutHeroContent = {
  badge: "About Maxora Technology",
  heading: "We build digital products that help your business ",
  headingAccent: "grow faster",
  subheading:
    "From fast websites and mobile apps to custom dashboards and automated workflows, we turn your ideas into reliable software your team and customers enjoy using.",
  primaryCtaText: "Let's talk about your project",
  primaryCtaHref: "/contact",
  secondaryCtaText: "See how we work",
  secondaryCtaHref: "#our-approach",
};

export const ourExperienceContent = {
  tag: "What We Build",
  heading: "Practical software for your everyday business",
  description:
    "We help companies replace slow spreadsheets, outdated website templates, and disconnected tools with custom software built around the way you actually work.",
  areas: [
    {
      icon: Code2,
      title: "Websites & Web Apps",
      description:
        "Fast, search-ready websites and online portals built with modern frameworks so your visitors get an instant, smooth experience on any device.",
    },
    {
      icon: Database,
      title: "Custom CRM & Business Tools",
      description:
        "Centralize customer inquiries, inventory, and sales records in one clean dashboard without paying expensive monthly per-user software fees.",
    },
    {
      icon: Workflow,
      title: "Automated Workflows & Integrations",
      description:
        "Connect WhatsApp, payment gateways, and everyday business tools so information moves automatically without manual copy-and-pasting.",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description:
        "Reliable iOS and Android apps with clean design, push notifications, and fast performance built for your customers or field team.",
    },
  ],
};

export const whyWeFocusContent = {
  tag: "Our Philosophy",
  heading: "Why we focus on building software that works",
  description:
    "Many agencies try to sell everything at once. We stay focused on design, development, and workflow automation because building high-quality software requires dedicated technical attention.",
  points: [
    {
      title: "Practical solutions for real business needs",
      text: "We build tools that save your team hours every week, reduce customer drop-off, and bring in qualified leads.",
    },
    {
      title: "Speed and reliability on every device",
      text: "Every website and application is tested for sub-2-second load times, clean code standards, and smooth performance on desktop and mobile.",
    },
    {
      title: "Direct communication with developers",
      text: "You talk directly with the engineers working on your project. Decisions happen quickly, questions get answered clearly, and nothing gets lost in translation.",
    },
  ],
};

export const ourApproachSteps = {
  tag: "How We Work",
  heading: "A simple, transparent process from start to launch",
  subheading:
    "You always know what is being built, what comes next, and when you will test it in action.",
  steps: [
    {
      number: "01",
      title: "Listen & Understand",
      icon: Search,
      description:
        "We learn how your business operates, what challenges you are facing, and what a successful outcome looks like.",
      timeframe: "Discovery",
    },
    {
      number: "02",
      title: "Plan & Prototype",
      icon: Layout,
      description:
        "We outline the scope, timeline, and design wireframes so everyone agrees on the plan before coding begins.",
      timeframe: "Planning",
    },
    {
      number: "03",
      title: "Build in Milestones",
      icon: Hammer,
      description:
        "We develop your project in clear stages, sharing working demos along the way so you can test features and provide feedback.",
      timeframe: "Development",
    },
    {
      number: "04",
      title: "Test & Launch",
      icon: Rocket,
      description:
        "We run thorough testing across phones, tablets, and browsers, set up secure hosting, and guide your team through launching.",
      timeframe: "Deployment",
    },
    {
      number: "05",
      title: "Support & Ongoing Care",
      icon: LifeBuoy,
      description:
        "We stay by your side after launch to monitor performance, handle updates, and support your team as your business grows.",
      timeframe: "Support",
    },
  ],
};

export const whatWeBelieveValues = {
  tag: "Our Values",
  heading: "What matters to us when we build for you",
  values: [
    {
      icon: Target,
      title: "Clarity over complexity",
      description:
        "Technology should make running your business easier, not more confusing. We write clean code and explain things in plain English.",
    },
    {
      icon: Clock,
      title: "Respect for your timeline",
      description:
        "We set realistic deadlines, agree on the scope upfront, and keep you informed every week on project progress.",
    },
    {
      icon: Sparkles,
      title: "Care in every detail",
      description:
        "From mobile responsiveness to fast load times, we build software designed to leave a great impression on your customers.",
    },
    {
      icon: HeartHandshake,
      title: "Long-term relationships",
      description:
        "We measure our success by how well your product performs months and years after launch, not just the day we deploy.",
    },
  ],
};

export const whyChooseUsPoints = {
  tag: "Why Choose Us",
  heading: "Why businesses choose to partner with us",
  subheading:
    "We combine modern engineering standards with responsive, dedicated support.",
  points: [
    {
      title: "Direct collaboration with developers",
      description:
        "Skip the middleman runaround. You speak directly to the engineers writing your code and designing your screens.",
    },
    {
      title: "Fast performance on every screen",
      description:
        "Every site and application is optimized to load under 2 seconds, helping you convert visitors and rank higher in search.",
    },
    {
      title: "Working demos you test early",
      description:
        "You see working versions of your software throughout development, so you never have to guess what is being built.",
    },
    {
      title: "Tailored to your exact workflow",
      description:
        "Everything is customized to match how your team and customers actually work, without forcing you into rigid templates.",
    },
    {
      title: "Reliable ongoing support",
      description:
        "We help you keep your site, applications, and integrations running smoothly as your business scales.",
    },
  ],
};

export const aboutFinalCta = {
  tag: "Start a Conversation",
  heading: "Have a project you want to bring to life?",
  description:
    "Tell us about your business, your goals, and what you are looking to build. We will discuss your options and help you plan the right next step.",
  buttonText: "Let's connect",
  buttonHref: "/contact",
};
