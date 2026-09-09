import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, HeartHandshake, Sparkles } from "lucide-react";

export const metadata = {
  title: "Careers | Maxora Technology",
  description: "Explore opportunities to grow with Maxora Technology, a focused digital agency building practical solutions for growing businesses.",
};

const principles = [
  {
    icon: Sparkles,
    title: "Build with purpose",
    description: "We choose useful work that helps a real business move forward, not technology for its own sake.",
  },
  {
    icon: HeartHandshake,
    title: "Work closely",
    description: "Our small-team environment keeps communication direct, thoughtful, and close to the people we serve.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Keep learning",
    description: "We value curiosity, honest feedback, and steady improvement across design, engineering, and delivery.",
  },
];

export default function CareersPage() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 via-transparent to-cyan-50/40 dark:from-blue-950/30 dark:via-transparent dark:to-cyan-950/20" />
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400">
            <BriefcaseBusiness className="h-4 w-4" />
            Careers at Maxora
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Grow with a team that is still building.
          </h1>
          <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
            Maxora is a growing digital agency for people who enjoy ownership, clear communication, and work that makes a visible difference for clients.
          </p>
        </header>

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <div key={principle.title} className="surface-card p-7 transition-transform duration-300 hover:-translate-y-1">
                <div className="mb-5 inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-600 dark:text-blue-400">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{principle.title}</h2>
                <p className="leading-7 text-gray-600 dark:text-gray-300">{principle.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-[1px] shadow-xl shadow-blue-500/10">
          <div className="rounded-[23px] bg-white p-8 dark:bg-slate-950 sm:p-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">Open opportunities</p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">We are building our first core team.</h2>
            <p className="mb-7 max-w-2xl leading-7 text-gray-600 dark:text-gray-300">
              We do not have a public vacancy to announce today. That is an honest snapshot of our current stage, not a promise of roles we cannot support. If your work aligns with web development, mobile apps, product design, automation, or client delivery, introduce yourself and we will keep your details for a relevant future opportunity with your permission.
            </p>
            <Link href="mailto:info@maxoratechnology.com?subject=Future%20opportunity%20at%20Maxora" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg">
              Introduce yourself
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
