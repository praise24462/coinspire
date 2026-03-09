"use client";

import React from "react";
import styles from "./about.module.scss";

export default function Testimonials() {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>What Traders Say</h2>
          <p>Real feedback from real users.</p>
        </div>

        <div className={styles.testimonialGrid}>
          <blockquote className={styles.testCard}>
            “Coinspire helped me spot an arbitrage opportunity within minutes — saved me hours of research.”
            <cite>— Ada, Professional Trader</cite>
          </blockquote>

          <blockquote className={styles.testCard}>
            “Clean UI, instant calculations — great for quick decision making.”
            <cite>— Sade, Retail Trader</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
