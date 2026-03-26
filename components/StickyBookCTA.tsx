"use client";

import { useState, useEffect } from "react";
import { SESSION_PRICE_INR } from "@/lib/constants";

export default function StickyBookCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after user scrolls past hero (roughly 600px)
      setVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <a
        href="#payment"
        className="flex items-center gap-3 bg-gray-900 text-white font-semibold px-6 py-3.5 rounded-full shadow-2xl hover:bg-gray-700 transition-colors text-sm"
      >
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        Book a Session — ₹{SESSION_PRICE_INR}
      </a>
    </div>
  );
}
