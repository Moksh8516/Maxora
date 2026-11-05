// app/components/section/PopularSolutionsStrip.tsx
import Link from "next/link";
import { ArrowRight, Sparkles, MapPin, CheckCircle2 } from "lucide-react";
import { getAllLandingPages } from "@/content/landing-pages";

export default function PopularSolutionsStrip() {
  const pages = getAllLandingPages();

  return (
    <section className="py-16 bg-[#F8FAFC] dark:bg-[#070E1E] border-y border-gray-200/80 dark:border-white/5 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#056BFF]/10 text-[#056BFF] dark:text-[#00D5F2] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Popular Solutions by City & Need</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 dark:text-white mb-3">
            Specialized Development & Automation Hubs
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-[#AFC5E1]">
            Explore tailored websites, custom CRM systems, and WhatsApp automation for local and nationwide businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {pages.map((p) => (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              className="group p-4 rounded-xl bg-white dark:bg-[#09152C] border border-gray-200/80 dark:border-white/10 hover:border-[#056BFF] dark:hover:border-[#00D5F2] transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#056BFF] dark:text-[#00D5F2] mb-1.5">
                  {p.isCityPage ? (
                    <>
                      <MapPin className="w-3 h-3 shrink-0" />
                      <span>{p.city} Hub</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-3 h-3 shrink-0" />
                      <span>Specialized</span>
                    </>
                  )}
                </div>
                <h3 className="text-xs font-bold text-gray-900 dark:text-white group-hover:text-[#056BFF] dark:group-hover:text-[#00D5F2] transition-colors line-clamp-2 leading-snug">
                  {p.primaryKeyword}
                </h3>
              </div>

              <div className="mt-3 pt-2 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-[11px] font-semibold text-gray-500 dark:text-gray-400 group-hover:text-[#056BFF] dark:group-hover:text-[#00D5F2]">
                <span>View solution</span>
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
