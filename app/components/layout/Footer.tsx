// components/layout/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "../../lib/site-config";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

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
      { label: "Web Development", href: "/Services/web-development" },
      { label: "App Development", href: "/Services/app-development" },
      { label: "eCommerce Platforms", href: "/Services/ecommerce" },
      { label: "WordPress Solutions", href: "/Services/wordpress" },
      { label: "Custom CRM & ERP", href: "/Services/crm-erp" },
      { label: "AI & Automation", href: "/Services/ai-automation" },
      { label: "SEO & AI Optimization", href: "/Services/seo-aeo" },
      { label: "Free AI Visibility Check", href: "/ai-visibility-check" },
    ],
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Portfolio & Work", href: "/portfolio" },
      { label: "Blog & Insights", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Us", href: "/contact" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  };

  const socialLinks: SocialLink[] = [
    {
      icon: FaFacebookF,
      href: siteConfig.social.facebook,
      label: "Facebook",
    },
    {
      icon: FaInstagram,
      href: siteConfig.social.instagram,
      label: "Instagram",
    },
    ...(siteConfig.social.linkedin
      ? [
        {
          icon: FaLinkedinIn,
          href: siteConfig.social.linkedin,
          label: "LinkedIn",
        },
      ]
      : []),
  ];

  const contactInfo = [
    { icon: MapPin, text: `${siteConfig.legalName}, Patiala, Punjab, India` },
    ...(siteConfig.contact.publicAddress
      ? [{ icon: MapPin, text: siteConfig.contact.publicAddress }]
      : []),
    { icon: Clock, text: siteConfig.contact.hours },
    { icon: Mail, text: siteConfig.contact.email },
    { icon: Phone, text: siteConfig.contact.phoneDisplay },
  ];

  return (
    <footer className="relative bg-[#F8FAFC] dark:bg-[#050A15] text-[#050A15] dark:text-[#F4F7FC] mt-auto overflow-hidden transition-colors duration-300 border-t border-gray-200/80 dark:border-white/10">
      {/* Background Glow in Dark Mode */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-t from-blue-400/5 via-cyan-400/5 to-transparent dark:from-[#056BFF]/15 dark:via-[#00D5F2]/10 dark:to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/light logo.png"
                alt="Maxora Technology"
                width={200}
                height={56}
                className="h-11 w-auto object-contain dark:hidden"
              />
              <Image
                src="/dark logo.png"
                alt="Maxora Technology"
                width={200}
                height={56}
                className="hidden h-11 w-auto object-contain dark:block"
              />
            </Link>
            <p className="text-gray-600 dark:text-[#AFC5E1] text-xs sm:text-sm leading-relaxed mb-6 max-w-sm">
              Custom web, mobile application, CRM/ERP systems, and AI automation engineering.
              Based in Patiala, Punjab, India. Building scalable software for ambitious companies worldwide.
            </p>

            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <info.icon className="w-4 h-4 text-[#056BFF] dark:text-[#00D5F2] shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-[#AFC5E1]">{info.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
              Services & Capabilities
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {footerLinks.Services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-[#AFC5E1] hover:text-[#056BFF] dark:hover:text-[#00D5F2] transition-colors text-xs flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.Company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-[#AFC5E1] hover:text-[#056BFF] dark:hover:text-[#00D5F2] transition-colors text-xs"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
              Legal & Compliance
            </h4>
            <ul className="space-y-2.5 mb-6">
              {footerLinks.Legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-[#AFC5E1] hover:text-[#056BFF] dark:hover:text-[#00D5F2] transition-colors text-xs"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* <div className="flex items-center gap-1.5 text-[11px] text-gray-600 dark:text-[#AFC5E1]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>100% Code Ownership</span>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-gray-500 dark:text-[#AFC5E1]">
            © {new Date().getFullYear()} Maxora Technology. All rights reserved. Registered in Punjab, India.
          </div>

          {/* Social Profiles */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-[#056BFF] hover:text-white text-gray-600 dark:text-[#AFC5E1] flex items-center justify-center transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
