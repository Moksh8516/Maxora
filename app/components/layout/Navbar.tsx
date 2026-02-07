// components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, ChevronDown, Zap, Sun, Moon } from "lucide-react";

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
  const { theme, setTheme, resolvedTheme } = useTheme();

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

  // const services: Service[] = [
  //   { name: "App Development", href: "/services/app-development" },
  //   { name: "Web Development", href: "/services/web-development" },
  //   { name: "WordPress Solutions", href: "/services/wordpress" },
  //   { name: "eCommerce Platforms", href: "/services/ecommerce" },
  //   { name: "Custom CRM/ERP", href: "/services/crm-erp" },
  // ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const isDark = resolvedTheme === "dark";

  return (
    <nav
      className={`fixed top-0 w-full py-4 z-50 transition-all duration-300 ${
        scrolled
          ? "shadow-lg bg-[var(--glass-bg)] backdrop-blur-[var(--glass-blur)]"
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
                  {/* {servicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 glass-effect rounded-xl shadow-2xl p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-black/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )} */}
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
              {/* <button
                onClick={toggleTheme}
                className="relative w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors hover:bg-gray-300 dark:hover:bg-gray-700"
                aria-label="Toggle theme"
              >
                <div
                  className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-lg transition-transform duration-300 ${
                    isDark ? "left-7" : "left-1"
                  }`}
                >
                  {isDark ? (
                    <Moon className="w-3 h-3 text-gray-800 absolute top-0.5 left-0.5" />
                  ) : (
                    <Sun className="w-3 h-3 text-yellow-500 absolute top-0.5 left-0.5" />
                  )}
                </div>
              </button> */}

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
            {/* <button
              onClick={toggleTheme}
              className="relative w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors hover:bg-gray-300 dark:hover:bg-gray-700"
              aria-label="Toggle theme"
            >
              <div
                className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-lg transition-transform duration-300 ${
                  isDark ? "left-7" : "left-1"
                }`}
              >
                {isDark ? (
                  <Moon className="w-3 h-3 text-gray-800 absolute top-0.5 left-0.5" />
                ) : (
                  <Sun className="w-3 h-3 text-yellow-500 absolute top-0.5 left-0.5" />
                )}
              </div>
            </button> */}

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
          <div className="lg:hidden glass-effect rounded-xl mt-4 p-4 animate-in slide-in-from-top duration-200">
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
                      {/* {servicesOpen && (
                        <div className="ml-4 mt-2 space-y-2">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block px-4 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                              onClick={() => setIsOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )} */}
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
