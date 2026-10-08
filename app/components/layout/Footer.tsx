// components/layout/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
}

export default function Footer() {
  const footerLinks: Record<string, FooterLink[]> = {
    Services: [
      { label: "App Development", href: "/Services/app-development" },
      { label: "Web Development", href: "/Services/web-development" },
      { label: "WordPress Solutions", href: "/Services/wordpress" },
      { label: "eCommerce Platforms", href: "/Services/ecommerce" },
      { label: "Custom CRM/ERP", href: "/Services/crm-erp" },
      { label: "SEO & AI Optimization", href: "/Services/seo-aeo" },
    ],
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Portfolio & Work", href: "/portfolio" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  };

  const socialLinks: SocialLink[] = [
    {
      icon: FaFacebookF,
      href: "https://facebook.com/maxora.technology",
      label: "Facebook",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/maxora.technology",
      label: "Instagram",
    },
  ];

  const contactInfo = [
    { icon: Mail, text: "info@maxoratechnology.com" },
    { icon: Phone, text: "(+91) 7719545464" },
    { icon: MapPin, text: "Punjab, India (Serving India & Worldwide)" },
  ];

  return (
    <footer className="relative mt-auto border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/light logo.png"
                alt="Maxora Technology"
                width={220}
                height={64}
                className="h-12 w-auto object-contain dark:hidden"
              />
              <Image
                src="/dark logo.png"
                alt="Maxora Technology"
                width={220}
                height={64}
                className="hidden h-12 w-auto object-contain dark:block"
              />
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
              Custom web, mobile app, and enterprise software engineering for growing businesses.
            </p>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <info.icon className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {info.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Maxora Technology. All rights
              reserved.
            </div>
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
