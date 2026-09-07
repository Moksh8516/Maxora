import { FaWhatsapp } from "react-icons/fa";

const whatsappUrl =
  "https://wa.me/917814950023?text=Hello%20Maxora%20Technology%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Maxora Technology on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-900/20 transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
    >
      <FaWhatsapp className="h-8 w-8" aria-hidden="true" />
    </a>
  );
}
