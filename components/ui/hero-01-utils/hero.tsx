"use client";

import React from "react";
import { ArrowUpRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface AvatarList {
  initials?: string;
  image?: string;
  bg?: string;
}

export default function HeroSection({
  avatarList = [],
}: {
  avatarList: AvatarList[];
}) {
  const fallbackAvatars: AvatarList[] = [
    { initials: "MT", bg: "bg-blue-600" },
    { initials: "AX", bg: "bg-cyan-600" },
    { initials: "SL", bg: "bg-indigo-600" },
    { initials: "DK", bg: "bg-slate-700" },
  ];

  const avatarsToRender = avatarList.length > 0 ? avatarList : fallbackAvatars;

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Main Heading with Italic / Serif Emphasis */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
          Building bold brands <br />
          with{" "}
          <span className="font-serif italic font-normal text-muted-foreground/90 dark:text-gray-300">
            thoughtful design
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
          At Maxora, we help companies engineer scalable digital products,
          guiding you from technical architecture to high-performance success.
        </p>

        {/* Action Button & Trust Avatars Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
          {/* Pill Button */}
          <Button
            asChild
            className="rounded-full px-7 py-6 text-sm font-semibold gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            <a href="#get-started">
              <span>Get Started</span>
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-background/20 text-current">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
          </Button>

          {/* Initials Badges + Stars (No fake team or external images) */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2.5 overflow-hidden py-1">
              {avatarsToRender.map((avatar, idx) => (
                <div
                  key={idx}
                  className={`relative inline-flex items-center justify-center w-9 h-9 rounded-full ring-2 ring-background text-xs font-bold text-white shadow-xs ${
                    avatar.bg ||
                    [
                      "bg-blue-600",
                      "bg-cyan-600",
                      "bg-indigo-600",
                      "bg-slate-700",
                    ][idx % 4]
                  }`}
                >
                  {avatar.initials || "MX"}
                </div>
              ))}
            </div>

            {/* Stars & Text */}
            <div className="flex flex-col items-start text-left">
              <div className="flex items-center gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-amber-500 text-amber-500"
                  />
                ))}
              </div>
              <span className="text-xs font-semibold text-foreground mt-0.5">
                Trusted by 100+ growing teams
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
