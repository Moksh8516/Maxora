// components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Code,
  Smartphone,
  ShoppingCart,
  Layout,
  Database,
  Bot,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "../ui/ThemeToggle";

interface ServiceItem {
  name: string;
  href: string;
  desc: string;
  icon: React.ElementType;
}

const serviceItems: ServiceItem[] = [
  {
    name: "Web Development",
    href: "/Services/web-development",
    desc: "Next.js & React high-performance applications",
    icon: Code,
  },
  {
    name: "Mobile App Development",
    href: "/Services/app-development",
    desc: "iOS & Android native and cross-platform apps",
    icon: Smartphone,
  },
  {
    name: "eCommerce Platforms",
    href: "/Services/ecommerce",
    desc: "Shopify, WooCommerce & custom headless stores",
    icon: ShoppingCart,
  },
  {
    name: "WordPress Solutions",
    href: "/Services/wordpress",
    desc: "Custom Gutenberg block themes & speed optimization",
    icon: Layout,
  },
  {
    name: "Custom CRM & ERP",
    href: "/Services/crm-erp",
    desc: "Tailored business software with zero per-seat fees",
    icon: Database,
  },
  {
    name: "AI & Automation",
    href: "/Services/ai-automation",
    desc: "Autonomous workflows & smart WhatsApp integrations",
    icon: Bot,
  },
  {
    name: "Technical SEO & AEO",
    href: "/Services/seo-aeo",
    desc: "Search engine & AI Answer engine optimization",
    icon: Sparkles,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 z-50 flex flex-col items-center px-4 sm:px-6 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className={`w-full max-w-7xl flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 pointer-events-auto ${
          scrolled
            ? "bg-white/90 dark:bg-[#070e1f]/90 backdrop-blur-2xl border border-gray-200/90 dark:border-white/10 shadow-xl shadow-slate-900/5 dark:shadow-2xl dark:shadow-black/70"
            : "bg-white/70 dark:bg-[#070e1f]/75 backdrop-blur-xl border border-gray-200/60 dark:border-white/5 shadow-md shadow-slate-900/5"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-3 group relative z-10 pl-1"
          aria-label="Maxora Technology Home"
        >
          <Image
            src="/light logo.png"
            alt="Maxora Technology"
            width={180}
            height={50}
            priority
            className="h-8 sm:h-9 w-auto object-contain dark:hidden transition-transform duration-200 group-hover:scale-[1.02]"
          />
          <Image
            src="/dark logo.png"
            alt="Maxora Technology"
            width={180}
            height={50}
            priority
            className="hidden h-8 sm:h-9 w-auto object-contain dark:block transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </Link>

        {/* Center Pill Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1 bg-muted/60 dark:bg-white/5 p-1 rounded-full border border-border/40 backdrop-blur-md">
          <Link
            href="/"
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
              pathname === "/"
                ? "bg-foreground text-background shadow-xs font-bold"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
            }`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((prev) => !prev)}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                pathname.startsWith("/Services")
                  ? "bg-foreground text-background shadow-xs font-bold"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
              }`}
              aria-expanded={servicesOpen}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] p-4 rounded-2xl bg-white dark:bg-[#080F21] border border-gray-200 dark:border-white/10 shadow-2xl backdrop-blur-2xl"
                >
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100 dark:border-gray-800">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-[#00D5F2]">
                      Our Engineering Capabilities
                    </span>
                    <Link
                      href="/Services"
                      className="text-xs font-semibold text-gray-500 hover:text-blue-600 dark:hover:text-[#00D5F2] flex items-center gap-1 transition-colors"
                    >
                      All Services <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setServicesOpen(false)}
                        className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 dark:hover:bg-white/5 transition-colors"
                      >
                        <div className="p-2 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-[#00D5F2] group-hover/item:scale-105 transition-transform">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-900 dark:text-white group-hover/item:text-blue-600 dark:group-hover/item:text-[#00D5F2] transition-colors">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-1">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/about"
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
              pathname === "/about"
                ? "bg-foreground text-background shadow-xs font-bold"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
            }`}
          >
            About
          </Link>

          <Link
            href="/portfolio"
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
              pathname === "/portfolio"
                ? "bg-foreground text-background shadow-xs font-bold"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
            }`}
          >
            Portfolio
          </Link>

          <Link
            href="/contact"
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
              pathname === "/contact"
                ? "bg-foreground text-background shadow-xs font-bold"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Right CTA & Controls */}
        <div className="flex items-center space-x-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-xs tracking-wide uppercase text-white bg-gradient-to-r from-[#056BFF] to-[#00D5F2] hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Let&apos;s Connect</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden pointer-events-auto overflow-hidden mt-3 w-full max-w-7xl rounded-2xl bg-white dark:bg-[#070E1F] border border-gray-200 dark:border-white/10 shadow-2xl p-5"
          >
            <div className="space-y-3">
              <Link
                href="/"
                className="block px-3 py-2 text-sm font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 text-gray-900 dark:text-white"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <div className="border-t border-gray-100 dark:border-gray-800 pt-2">
                <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-[#00D5F2]">
                  Services
                </div>
                <div className="grid grid-cols-1 gap-1 mt-1 pl-2">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-white/5"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="w-3.5 h-3.5 text-blue-600 dark:text-[#00D5F2]" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-100 dark:border-gray-800 pt-2 space-y-1">
                <Link
                  href="/portfolio"
                  className="block px-3 py-2 text-sm font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 text-gray-900 dark:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Portfolio
                </Link>
                <Link
                  href="/about"
                  className="block px-3 py-2 text-sm font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 text-gray-900 dark:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-sm font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 text-gray-900 dark:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>

              <Link
                href="/contact"
                className="block w-full py-3 mt-4 text-center text-xs font-bold tracking-wider uppercase rounded-xl text-white bg-gradient-to-r from-[#056BFF] to-[#00D5F2] shadow-md shadow-blue-500/20"
                onClick={() => setIsOpen(false)}
              >
                Let&apos;s Connect
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
