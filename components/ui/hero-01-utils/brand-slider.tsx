"use client";

import React from "react";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

export interface BrandList {
  name: string;
  image?: string;
  lightimg?: string;
  icon?: React.ReactNode;
}

export default function BrandSlider({
  brandList = [],
}: {
  brandList: BrandList[];
}) {
  return (
    <section className="w-full pb-16 pt-4">
      {/* Divider with Center Text */}
      <div className="max-w-6xl mx-auto px-4 flex items-center gap-4 mb-8">
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
          Loved by 1000+ big and small brands around the world
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Marquee Brand Slider */}
      <div className="max-w-6xl mx-auto px-4">
        <Marquee duration={35} pauseOnHover={true} className="py-2">
          {brandList.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center gap-2 px-8 opacity-70 hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground"
            >
              {brand.icon ? (
                <div className="flex items-center gap-2">
                  <span className="text-foreground">{brand.icon}</span>
                  <span className="text-sm font-bold tracking-tight text-foreground font-heading">
                    {brand.name}
                  </span>
                </div>
              ) : brand.image ? (
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={120}
                  height={32}
                  className="h-7 w-auto object-contain dark:invert"
                  unoptimized
                />
              ) : (
                <span className="text-sm font-bold tracking-tight text-foreground font-heading">
                  {brand.name}
                </span>
              )}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
