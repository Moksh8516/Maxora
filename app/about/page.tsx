import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Compass,
  HeartHandshake,
  Lightbulb,
  MessageCircle,
  Rocket,
  Sparkles,
  Target,
  MapPin,
} from "lucide-react";
import { JsonLd } from "../components/seo/StructuredData";
import { siteConfig } from "../lib/site-config";

export const metadata: Metadata = {
  title: "About Our Team & Philosophy",
  description:
    "Learn how Maxora Technology builds scalable web applications, mobile apps, CRM/ERP platforms, and high-performance digital systems for ambitious companies.",
  keywords: [
    "about Maxora Technology",
    "software development agency India",
    "custom software development company",
    "full stack engineering team",
    "digital agency philosophy",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Maxora Technology | Digital Products & Engineering",
    description:
      "A dedicated engineering agency delivering thoughtful web applications, mobile platforms, and business automation software.",
    url: "/about",
    siteName: "Maxora Technology",
    images: [
      {
        url: "/light logo.png",
        width: 1200,
        height: 630,
        alt: "About Maxora Technology",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Maxora Technology | Digital Solutions",
    description:
      "Discover the engineering standards and philosophy behind Maxora Technology.",
    images: ["/light logo.png"],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://maxoratechnology.com/about/#webpage",
      url: "https://maxoratechnology.com/about",
      name: "About Maxora Technology",
      description:
        "Learn about Maxora Technology, our engineering principles, delivery methodologies, and mission to build scalable digital software.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://maxoratechnology.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About Us",
            item: "https://maxoratechnology.com/about",
          },
        ],
      },
      about: {
        "@type": "Organization",
        "@id": "https://maxoratechnology.com/#organization",
      },
    },
  ],
};

const principles = [
  {
    icon: Target,
    title: "Useful over flashy",
    description:
      "We focus on digital work that makes your business clearer, faster, or easier to run.",
  },
  {
    icon: MessageCircle,
    title: "Communication stays clear",
    description:
      "You should always know what we are working on, what comes next, and where decisions are needed.",
  },
  {
    icon: Lightbulb,
    title: "Start with the right problem",
    description:
      "Before recommending a solution, we understand the people, process, and outcome behind it.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership matters",
    description:
      "We work alongside you and build solutions that your team can actually use.",
  },
];

const steps = [
  [
    "01",
    "Listen",
    "We learn how your business works and what you want to improve.",
  ],
  [
    "02",
    "Shape",
    "We turn the opportunity into a clear scope and sensible next step.",
  ],
  [
    "03",
    "Build",
    "We design and develop with regular feedback, keeping the work aligned.",
  ],
  [
    "04",
    "Grow",
    "We help you launch thoughtfully and identify valuable improvements next.",
  ],
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutSchema} />
      <main className="relative overflow-hidden pt-20 text-gray-900 dark:text-gray-100">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/70 via-transparent to-cyan-50/50 dark:from-blue-950/30 dark:via-transparent dark:to-cyan-950/20" />
        <div className="absolute -right-32 top-40 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -left-32 top-[38rem] -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <section className="py-20 lg:py-32">
          <div className="container mx-auto grid items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                <Sparkles className="h-4 w-4" />
                About Maxora Technology
              </div>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                Software engineering and digital solutions built on clarity and craft.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-700 dark:text-gray-200 sm:text-xl">
                Maxora is a growing digital agency helping businesses turn good
                ideas into thoughtful websites, applications, automations, and
                custom digital systems.
              </p>
              <p className="mt-5 max-w-2xl leading-7 text-gray-600 dark:text-gray-300">
                We are building this company with a simple belief: technology
                should make progress feel more achievable, not more complicated.
                That means honest conversations, focused delivery, and solutions
                shaped around the way your business actually works.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  Start a conversation
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
                <Link
                  href="/Services"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white/60 px-7 py-4 font-semibold text-gray-800 transition hover:border-blue-300 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900/50 dark:text-gray-200 dark:hover:border-blue-500 dark:hover:text-blue-400"
                >
                  Explore our services
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/75 p-6 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/75 sm:p-8">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      Our direction
                    </p>
                    <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                      Make digital progress practical.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-3 text-white shadow-lg shadow-blue-500/25">
                    <Compass className="h-7 w-7" />
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    "Understand the challenge",
                    "Create a clear path",
                    "Build with care",
                    "Keep improving",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 rounded-xl border border-gray-200/80 bg-white/70 p-4 dark:border-gray-700/70 dark:bg-white/5"
                    >
                      <Check className="h-5 w-5 shrink-0 text-cyan-500" />
                      <span className="font-medium text-gray-800 dark:text-gray-200">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-7 flex items-center gap-3 border-t border-gray-200 pt-6 dark:border-gray-700">
                  <Rocket className="h-5 w-5 text-cyan-500" />
                  <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                    A focused approach for businesses ready to take their next
                    step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-gray-200/70 bg-white/40 py-20 dark:border-gray-800/70 dark:bg-gray-950/20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                What guides us
              </p>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-5xl">
                A small agency mindset with serious attention to your goals.
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-700 dark:text-gray-200">
                We are early in our journey, and that gives us room to stay close,
                move thoughtfully, and care deeply about the work we put into the
                world.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map((principle) => {
                const Icon = principle.icon;
                return (
                  <article
                    key={principle.title}
                    className="surface-card p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="mb-5 inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-600 dark:text-blue-400">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                      {principle.title}
                    </h3>
                    <p className="leading-7 text-gray-700 dark:text-gray-200">
                      {principle.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="container mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                What we are building
              </p>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-5xl">
                Real products, honest demos.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-8 text-gray-700 dark:text-gray-200">
                We also create focused product demos to explore useful solutions
                for specific industries and workflows.
              </p>
            </div>
            <a
              href="https://realestate.maxoratechnology.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-[1px] shadow-xl shadow-blue-500/15 transition hover:-translate-y-1"
            >
              <div className="flex h-full flex-col justify-between rounded-[23px] bg-white p-8 dark:bg-slate-950 sm:p-10">
                <div>
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-blue-600 dark:text-blue-400">
                      Live demo
                    </span>
                    <ArrowUpRight className="h-6 w-6 text-blue-600 transition group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-blue-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Real Estate CRM
                  </h3>
                  <p className="mt-4 leading-7 text-gray-700 dark:text-gray-200">
                    Explore our real-estate CRM demo for managing leads,
                    properties, follow-ups, and everyday sales workflows in one
                    focused experience.
                  </p>
                </div>
                <span className="mt-8 break-all text-sm font-semibold text-blue-600 dark:text-blue-400">
                  realestate.maxoratechnology.com
                </span>
              </div>
            </a>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="container mx-auto grid gap-14 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-8">
            <div className="lg:sticky lg:top-28">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                How we work
              </p>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-5xl">
                Clear steps. No mystery.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-8 text-gray-700 dark:text-gray-200">
                Good collaboration is visible from the first conversation to
                launch.
              </p>
            </div>
            <div className="space-y-5">
              {steps.map(([number, title, description]) => (
                <div
                  key={number}
                  className="flex gap-5 rounded-2xl border border-gray-200/80 bg-white/60 p-6 transition hover:border-blue-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900/50 dark:hover:border-blue-700 sm:gap-7 sm:p-7"
                >
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {number}
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                      {title}
                    </h3>
                    <p className="leading-7 text-gray-700 dark:text-gray-200">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Factual Company Overview & Regional Scope */}
        <section className="border-t border-gray-200/70 bg-white/40 py-20 dark:border-gray-800/70 dark:bg-gray-950/20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                <MapPin className="h-4 w-4" />
                <span>Headquarters & Service Scope</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                Based in Patiala, Serving Clients Worldwide
              </h2>
              <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <p>
                  Maxora Technology is an independent software development agency headquartered in Patiala, Punjab, India. We engineer custom web applications, mobile apps, CRM/ERP platforms, e-commerce storefronts, and technical search solutions.
                </p>
                <p>
                  While our engineering standards and project delivery model serve growing businesses worldwide, we also maintain dedicated regional collaboration for enterprises across {siteConfig.serviceTowns.join(", ")}.
                </p>
              </div>

              {/* TODO(owner): Add real team members (names, roles, photos) once provided. Omitted to avoid fabricating team data. */}
            </div>
          </div>
        </section>

        <section className="pb-24 lg:pb-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-8 text-center shadow-xl shadow-blue-500/20 sm:p-14">
              <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
              <div className="relative mx-auto max-w-2xl">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Have a problem worth solving?
                </h2>
                <p className="mt-4 text-lg leading-8 text-blue-50">
                  Tell us what you are building, improving, or trying to untangle.
                  We will start with a useful conversation.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-semibold text-blue-700 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  Talk to Maxora
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
