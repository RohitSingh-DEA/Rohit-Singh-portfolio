"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import WhatYoullLearn from "@/components/WhatYoullLearn";
import Services from "@/components/Services";
import VideoSection from "@/components/VideoSection";
import Testimonials from "@/components/Testimonials";
import PaymentSection from "@/components/PaymentSection";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyBookCTA from "@/components/StickyBookCTA";

export default function Home() {
  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    // Observe all fade-in sections
    const elements = document.querySelectorAll(".fade-in-section");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhoThisIsFor />
        <WhatYoullLearn />
        <Services />
        <VideoSection />
        <Testimonials />
        <PaymentSection />
        <BookingSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyBookCTA />
    </>
  );
}
