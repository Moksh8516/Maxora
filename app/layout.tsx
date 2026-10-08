// app/layout.tsx
import type { Metadata } from "next";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppFloat from "./components/ui/WhatsAppFloat";
import GoogleAnalytics from "./components/analytics/GoogleAnalytics";
import StructuredData from "./components/seo/StructuredData";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://maxoratechnology.com"
).replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Web & App Development Company in India | Maxora Technology",
    template: "%s | Maxora Technology",
  },
  description:
    "Custom websites, mobile apps, WordPress, eCommerce and CRM/ERP systems for growing businesses. Based in India, working worldwide. Free consultation.",
  authors: [{ name: "Maxora Technology", url: siteUrl }],
  creator: "Maxora Technology",
  publisher: "Maxora Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Maxora Technology",
    title: "Web & App Development Company in India | Maxora Technology",
    description:
      "Custom websites, mobile apps, WordPress, eCommerce and CRM/ERP systems for growing businesses. Based in India, working worldwide. Free consultation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maxora Technology - Web & App Development Company in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web & App Development Company in India | Maxora Technology",
    description:
      "Custom websites, mobile apps, WordPress, eCommerce and CRM/ERP systems for growing businesses. Based in India, working worldwide.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="font-sans antialiased bg-bg-primary text-text-primary transition-colors duration-300">
        <StructuredData />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="theme-preference"
        >
          <div className="relative min-h-screen">
            <div className="relative z-10">
              <GoogleAnalytics />
              <Navbar />
              <main>{children}</main>
              <Footer />
              <WhatsAppFloat />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
