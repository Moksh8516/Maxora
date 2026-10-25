import React from "react";
import HeroSection, { type AvatarList } from "@/components/ui/hero-01-utils/hero";
import Header, { type NavigationSection } from "@/components/ui/hero-01-utils/header";
import BrandSlider, {
  type BrandList,
} from "@/components/ui/hero-01-utils/brand-slider";

export default function AgencyHeroSection() {
  const avatarList: AvatarList[] = [
    { initials: "MT", bg: "bg-blue-600" },
    { initials: "AX", bg: "bg-cyan-600" },
    { initials: "SL", bg: "bg-indigo-600" },
    { initials: "DK", bg: "bg-slate-700" },
  ];

  // Navigation avoiding "Team" section per requirements
  const navigationData: NavigationSection[] = [
    {
      title: "Home",
      href: "/",
      isActive: true,
    },
    {
      title: "About us",
      href: "/about",
    },
    {
      title: "Services",
      href: "/Services",
    },
    {
      title: "Portfolio",
      href: "/portfolio",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  // Clean local SVG brand emblems (zero 21st.dev or unsplash external dependencies)
  const brandList: BrandList[] = [
    {
      name: "Next.js",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 180 180">
          <circle cx="90" cy="90" r="85" fill="none" stroke="currentColor" strokeWidth="10" />
          <path d="M149.5 149.5L65.5 45H45v90h15V69.5l74 94.5c5.3-4.3 10.5-9.2 15.5-14.5z" />
          <path d="M120 45h15v50h-15z" />
        </svg>
      ),
    },
    {
      name: "React",
      icon: (
        <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="1.5" viewBox="-11.5 -10.23174 23 20.46348">
          <circle cx="0" cy="0" r="2.05" fill="currentColor" />
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M1.5 0h21A1.5 1.5 0 0 1 24 1.5v21a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0zm10.75 14.5c0-1.87-1.12-2.73-3.23-3.25l-.83-.2c-1.1-.28-1.58-.68-1.58-1.4 0-.85.74-1.4 2-1.4 1.25 0 1.94.48 2.05 1.5H12c-.14-1.8-1.35-2.75-3.32-2.75-2.14 0-3.4 1.15-3.4 2.8 0 1.7 1.05 2.54 3.02 3.02l.83.2c1.23.3 1.7.75 1.7 1.54 0 .97-.84 1.55-2.2 1.55-1.54 0-2.33-.6-2.47-1.87H4.8c.13 2.15 1.48 3.1 3.75 3.1 2.37 0 3.7-1.12 3.7-2.94zm8.95-6.5h-5.9v1.4h2.2v8.6h1.5V9.4h2.2V8z" />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
        </svg>
      ),
    },
    {
      name: "Node.js",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0l11.085 6.4v12.8L12 25.6 0.915 19.2V6.4L12 0zm0 2.308L2.915 7.554v10.492L12 23.292l9.085-5.246V7.554L12 2.308z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative">
      <Header navigationData={navigationData} />
      <main>
        <HeroSection avatarList={avatarList} />
        <BrandSlider brandList={brandList} />
      </main>
    </div>
  );
}
