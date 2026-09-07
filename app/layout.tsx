// app/layout.jsx
import { ThemeProvider } from "./components/theme/ThemeProvider";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppFloat from "./components/ui/WhatsAppFloat";
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

export const metadata = {
  title: "Maxora Technology | Premium IT Solutions & Digital Innovation",
  description:
    "Transform your business with cutting-edge App Development, Web Solutions, eCommerce, and Custom CRM/ERP systems. Global IT services with enterprise-grade quality.",
  keywords:
    "IT solutions, app development, web development, WordPress, Shopify, Wix, CRM, ERP, digital transformation",
  icons: {},
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="theme-preference"
        >
          <div className="relative min-h-screen">
            <div className="relative z-10">
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
