"use client";

import React from "react";
import Navbar from "@/components/home/Navbar/Navbar";
import Hero from "@/components/home/Hero/Hero";
import Features from "@/components/home/Features/Features";
import WhyChooseUs from "@/components/home/WhyChooseUs/WhyChooseUs";
import CTA from "@/components/home/CTA/CTA";
import Footer from "@/components/home/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div id="features">
          <Features />
        </div>
        <div id="why-choose-us">
          <WhyChooseUs />
        </div>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
