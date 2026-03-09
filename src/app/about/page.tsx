"use client";

import React from "react";
import Navbar from "@/components/home/Navbar/Navbar";
import About from "@/components/home/About/About";
import Footer from "@/components/home/Footer/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
}
