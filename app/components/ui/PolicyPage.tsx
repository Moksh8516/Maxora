import Link from "next/link";
import { ArrowRight, FileText, ShieldCheck } from "lucide-react";

interface PolicySection {
  title: string;
  content: React.ReactNode;
}

interface PolicyPageProps {
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated: string;
  sections: PolicySection[];
}

export default function PolicyPage({
  eyebrow,
  title,
  description,
  lastUpdated,
  sections,
}: PolicyPageProps) {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 via-transparent to-cyan-50/40 dark:from-blue-950/30 dark:via-transparent dark:to-cyan-950/20" />
      <div className="absolute -right-24 top-32 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -left-24 bottom-16 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="mb-12 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400">
            <ShieldCheck className="h-4 w-4" />
            {eyebrow}
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            {title}
          </h1>
          <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
            {description}
          </p>
          <p className="mt-5 text-sm text-gray-500 dark:text-gray-400">
            Last updated: {lastUpdated}
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
          <article className="surface-card p-6 sm:p-10">
            <div className="space-y-10 text-gray-600 dark:text-gray-300 [&_a]:font-medium [&_a]:text-blue-600 [&_a]:underline-offset-4 [&_a]:hover:underline [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:dark:text-white [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-2 [&_p]:leading-7 [&_ul]:mt-3 [&_ul]:space-y-2">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2>{section.title}</h2>
                  {section.content}
                </section>
              ))}
            </div>
          </article>

          <aside className="h-fit space-y-5 lg:sticky lg:top-28">
            <div className="glass-effect p-6">
              <FileText className="mb-4 h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                Questions about this policy?
              </h2>
              <p className="mb-5 text-sm leading-6 text-gray-600 dark:text-gray-300">
                We are happy to explain how these terms apply to your project or
                information.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400"
              >
                Contact Maxora
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="px-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
              This page describes Maxora Technology&apos;s current practices in
              plain language. It is not a substitute for legal advice.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
