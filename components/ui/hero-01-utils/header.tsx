"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

export interface NavigationSection {
  title: string;
  href: string;
  isActive?: boolean;
}

export default function Header({
  navigationData = [],
}: {
  navigationData: NavigationSection[];
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex items-center justify-center px-4">
      <div className="w-full max-w-6xl flex items-center justify-between px-4 py-2.5 rounded-full bg-background/80 dark:bg-[#070e1f]/80 backdrop-blur-xl border border-border/80 shadow-lg shadow-black/5">
        {/* Logo / Brand Name */}
        <Link href="/" className="flex items-center gap-2 pl-2">
          <span className="font-heading font-extrabold text-lg tracking-tight text-foreground">
            shadcn<span className="text-blue-500">space.</span>
          </span>
        </Link>

        {/* Center Pill Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-muted/60 dark:bg-white/5 p-1 rounded-full border border-border/40">
          {navigationData.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                item.isActive
                  ? "bg-foreground text-background shadow-xs"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-foreground text-background hover:opacity-90 transition-opacity shadow-xs"
          >
            <span>Let&apos;s Collaborate</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-foreground hover:bg-muted"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-16 inset-x-4 p-4 rounded-2xl bg-background border border-border shadow-2xl md:hidden flex flex-col gap-2">
          {navigationData.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
