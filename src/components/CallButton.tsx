import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CallButton = () => {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setVisible(false), 6000); // hide text after 4s
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="tel:+91 9417488062"
      aria-label="Call Owner"
      className="fixed bottom-10 md:bottom-8 right-6 z-50"
    >
      <div className="flex items-center space-x-3">
       
        {/* Text label (desktop only, fades out after delay) */}
         <span
          className={`hidden md:inline-flex items-center whitespace-nowrap px-3 py-1 rounded-full shadow-md text-white bg-blue-700 transition-all duration-500 ease-out transform ${
            mounted && visible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-2 pointer-events-none"
          }`}
        >
          Call Now
        </span>

         {/* Round call button */}
        <Button
          variant="default"
          size="icon"
          className="h-12 w-12 p-0 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg flex items-center justify-center"
        >
          <Phone className="w-6 h-6" />
        </Button>

       
       
      </div>
    </a>
  );
};

export default CallButton;
