"use client";

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import {
  RAZORPAY_KEY_ID,
  SESSION_PRICE_PAISE,
  SESSION_PRICE_INR,
  COACH_NAME,
} from "@/lib/constants";

// Extend Window interface for Razorpay
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: any;
  }
}

type PaymentStatus = "idle" | "loading" | "success" | "failure";

export default function PaymentSection() {
  const [status, setStatus] = useState<PaymentStatus>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const loadRazorpay = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setStatus("loading");

    const loaded = await loadRazorpay();
    if (!loaded) {
      setStatus("failure");
      return;
    }

    const options = {
      key: RAZORPAY_KEY_ID,
      amount: SESSION_PRICE_PAISE,
      currency: "INR",
      name: COACH_NAME,
      description: "Mock Interview + Feedback Session",
      image: "", // Add your logo URL here
      prefill: {
        name,
        email,
      },
      theme: {
        color: "#111827",
      },
      handler: () => {
        setStatus("success");
        // Scroll to booking section after payment
        setTimeout(() => {
          const bookingSection = document.getElementById("booking");
          if (bookingSection) {
            bookingSection.scrollIntoView({ behavior: "smooth" });
          }
        }, 1500);
      },
      modal: {
        ondismiss: () => {
          if (status === "loading") setStatus("idle");
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", () => setStatus("failure"));
    rzp.open();
  };

  return (
    <SectionWrapper id="payment" background="gray">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-10 fade-in-section">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
            Get started
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Book your session
          </h2>
          <p className="mt-4 text-gray-500">
            Pay securely, then pick your slot on the next screen.
          </p>
        </div>

        {/* Payment card */}
        <div className="fade-in-section bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          {/* Summary */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-900">
                  Mock Interview + Feedback
                </p>
                <p className="text-sm text-gray-400 mt-1">45-min live session</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">
                  ₹{SESSION_PRICE_INR}
                </p>
                <p className="text-xs text-gray-400">incl. GST</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Structured feedback",
                "Written summary",
                "STAR framework",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Success state */}
          {status === "success" && (
            <div className="p-8 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Payment successful!</h3>
              <p className="text-gray-500 text-sm mt-2">
                Scrolling you to the booking calendar...
              </p>
            </div>
          )}

          {/* Failure state */}
          {status === "failure" && (
            <div className="p-6 bg-red-50 border-t border-red-100">
              <p className="text-red-600 text-sm font-medium">
                Payment failed. Please try again or contact us on WhatsApp.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 text-sm text-red-700 underline"
              >
                Try again
              </button>
            </div>
          )}

          {/* Form */}
          {(status === "idle" || status === "loading") && (
            <form onSubmit={handlePayment} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-gray-900 text-white font-semibold py-4 rounded-xl hover:bg-gray-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>Pay ₹{SESSION_PRICE_INR} & Book Slot</>
                )}
              </button>

              <p className="text-center text-xs text-gray-400">
                Secured by Razorpay · 256-bit SSL encryption
              </p>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
