// components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Zap } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";

interface NavLink {
  name: string;
  href: string;
  dropdown?: boolean;
}

// interface Service {
//   name: string;
//   href: string;
// }

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/Services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full py-4 z-50 transition-all duration-300 ${
        scrolled
          ? "shadow-lg bg-(--glass-bg) backdrop-blur-(--glass-blur)"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" fill="white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-heading tracking-tight text-gray-900 dark:text-white">
                Maxora
              </span>
              <span className="text-sm font-medium gradient-text">
                Technology
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                    <span>{link.name}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ),
            )}

            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <ThemeToggle />
              <Link
                href="/Contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover-lift shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-4">
            {/* Theme Toggle */}
            <ThemeToggle />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white/10 dark:bg-black/10"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden glass-effect bg-white rounded-xl mt-4 p-4 animate-in slide-in-from-top duration-200">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-black/20"
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-black/20"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/Contact"
                className="block mt-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold text-center hover-lift"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
