import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "917888828694"; // update if needed
  const message = "Hello! I want to know more about your services.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  // visible: controls opacity/transform of the label
  const [visible, setVisible] = useState(true);
  // mounted: prevents SSR/hydration mismatches (animations only after client mount)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setVisible(false), 6000); // hide after 4s
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-10 md:bottom-8 left-6 z-50"
    >
      <div className="flex items-center space-x-3">
        {/* Icon button */}
        <Button
          variant="default"
          size="icon"
          className="h-12 w-12 p-0 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg flex items-center justify-center"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>

        {/* Label: hidden on small screens, visible on md+.
            We keep it mounted and toggle opacity/translate for a smooth transition. */}
        <span
          className={`hidden md:inline-flex items-center whitespace-nowrap px-3 py-1 rounded-full shadow-md text-white bg-green-600 transition-all duration-500 ease-out transform ${
            mounted && visible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-2 pointer-events-none"
          }`}
          aria-hidden={!visible}
        >
          Chat with Owner
        </span>
      </div>
    </a>
  );
};

export default WhatsAppButton;
