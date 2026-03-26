"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white px-4 pt-16">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white pointer-events-none" />

      <div
        className={`relative z-10 text-center max-w-3xl mx-auto transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          Accepting new clients — limited slots
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
          Speak with clarity.
          <br />
          <span className="text-gray-400">Lead with confidence.</span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          I help professionals crack interviews and handle stakeholders with
          structured, confident communication.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#payment"
            className="w-full sm:w-auto bg-gray-900 text-white font-semibold px-8 py-4 rounded-xl hover:bg-gray-700 transition-colors text-base shadow-lg"
          >
            Book a Session — ₹499
          </a>
          <a
            href="#videos"
            className="w-full sm:w-auto border border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-colors text-base"
          >
            Watch Free Training
          </a>
        </div>

        {/* Social proof */}
        <p className="mt-8 text-sm text-gray-400">
          Trusted by professionals at top tech and consulting firms
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-300">
        <svg
          className="w-5 h-5 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
