// app/thank-you/page.tsx
import type { Metadata } from "next";
import ThankYouClient from "./ThankYouClient";

export const metadata: Metadata = {
  title: "Thank You | Request Received",
  description: "We have received your project inquiry and will contact you via WhatsApp shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}
