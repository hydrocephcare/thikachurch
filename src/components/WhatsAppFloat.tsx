import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142_70%_45%)] text-primary-foreground flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-150"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
