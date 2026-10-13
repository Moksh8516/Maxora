// components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
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
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full py-4 z-50 transition-all duration-300 ${scrolled
        ? "shadow-lg bg-(--glass-bg) backdrop-blur-(--glass-blur)"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/light logo.png"
              alt="Maxora Technology"
              width={220}
              height={64}
              priority
              className="h-12 w-auto object-contain dark:hidden"
            />
            <Image
              src="/dark logo.png"
              alt="Maxora Technology"
              width={220}
              height={64}
              priority
              className="hidden h-12 w-auto object-contain dark:block"
            />
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
                href="/contact"
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
                href="/contact"
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
