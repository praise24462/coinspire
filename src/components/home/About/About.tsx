"use client";

import React from "react";
import styles from "./about.module.scss";
import Hero from "./Hero";
import Offerings from "./Offerings";
import Timeline from "./Timeline";
// import Team from "./Team";
import Testimonials from "./Testimonials";
import CTA from "./CTA";

export default function About() {
  return (
    <div className={styles.page}>
      <Hero />
      <main>
        <Offerings />
        <Timeline />
        {/* <Team /> */}
        <Testimonials />
        <CTA />
      </main>
    </div>
  );
}
