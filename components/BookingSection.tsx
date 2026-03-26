"use client";

import { useEffect } from "react";
import SectionWrapper from "./SectionWrapper";
import { CALENDLY_URL } from "@/lib/constants";

export default function BookingSection() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const isPlaceholder = CALENDLY_URL.includes("your-username");

  return (
    <SectionWrapper id="booking" background="white">
      <div className="text-center mb-10 fade-in-section">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Schedule
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Pick your slot
        </h2>
        <p className="mt-4 text-gray-500 max-w-md mx-auto">
          Choose a time that works for you. You&apos;ll get a calendar invite with
          the video call link.
        </p>
      </div>

      <div className="fade-in-section">
        {isPlaceholder ? (
          // Placeholder when Calendly URL is not set
          <div className="bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 h-96 flex flex-col items-center justify-center text-center p-8">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-700 text-lg">Calendly calendar will appear here</h3>
            <p className="text-gray-400 text-sm mt-2 max-w-sm">
              Replace <code className="bg-gray-100 px-1 rounded text-xs">CALENDLY_URL</code> in{" "}
              <code className="bg-gray-100 px-1 rounded text-xs">lib/constants.ts</code> with your
              Calendly scheduling link.
            </p>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-sm text-gray-900 underline underline-offset-2"
            >
              Create a free Calendly account →
            </a>
          </div>
        ) : (
          // Real Calendly embed
          <div
            className="calendly-inline-widget rounded-2xl overflow-hidden shadow-sm border border-gray-100"
            data-url={`${CALENDLY_URL}?hide_event_type_details=0&hide_gdpr_banner=1&primary_color=111827`}
            style={{ minWidth: "320px", height: "700px" }}
          />
        )}
      </div>
    </SectionWrapper>
  );
}
