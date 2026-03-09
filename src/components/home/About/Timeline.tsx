"use client";

import React from "react";
import styles from "./about.module.scss";

const steps = [
  { number: "01", title: "Collect", description: "Aggregate raw market data from trusted sources." },
  { number: "02", title: "Normalize", description: "Standardize and clean feeds for accurate comparisons." },
  { number: "03", title: "Analyze", description: "Surface best opportunities and market trends in real-time." },
  { number: "04", title: "Deliver", description: "Present insights via dashboards, alerts, and trading tools." },
];

export default function Timeline() {
  return (
    <section className={styles.timelineSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>How It Works</h2>
          <p>A transparent pipeline from data to decision.</p>
        </div>

        <div className={styles.timelineSteps}>
          {steps.map((step) => (
            <div key={step.number} className={styles.timelineStep}>
              <div className={styles.stepBadge}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
              {parseInt(step.number) < steps.length && <div className={styles.stepArrow}>→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
