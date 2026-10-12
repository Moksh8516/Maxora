// app/components/section/WhyMaxora.tsx
import { ShieldCheck, Lock, Route, Zap, Award } from "lucide-react";
import { whyMaxoraContent } from "../../lib/home-data";

const icons = [ShieldCheck, Lock, Route, Zap];

export default function WhyMaxora() {
  return (
    <section className="py-20 border-t border-gray-200/80 dark:border-gray-800/80 bg-gray-50/50 dark:bg-gray-900/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 mb-3">
            <span>{whyMaxoraContent.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-3">
            {whyMaxoraContent.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {whyMaxoraContent.subtitle}
          </p>

          {/* TODO(owner): Udyam-registered status */}
          {whyMaxoraContent.udyamStatus ? (
            <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
              <Award className="w-4 h-4" />
              <span>{whyMaxoraContent.udyamStatus}</span>
            </div>
          ) : (
            <div className="hidden" aria-hidden="true">
              {/* Udyam registration badge will display here once provided */}
            </div>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyMaxoraContent.points.map((point, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={point.title}
                className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                    {point.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
