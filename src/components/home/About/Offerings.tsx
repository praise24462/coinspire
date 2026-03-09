"use client";

import React from "react";
import styles from "./about.module.scss";
// icons
import { FaCoins, FaSyncAlt, FaChartBar, FaGraduationCap } from "react-icons/fa";

const offerings = [
  {
    icon: <FaCoins className={styles.offeringIconSvg} />,
    title: "Market Aggregation",
    description: "Real-time pricing for 500+ tokens across major exchanges in one view.",
  },
  {
    icon: <FaSyncAlt className={styles.offeringIconSvg} />,
    title: "Live Updates",
    description: "Stay ahead with constantly refreshed crypto price data.",
  },
  {
    icon: <FaChartBar className={styles.offeringIconSvg} />,
    title: "Profit Tools",
    description: "Built-in calculators for arbitrage, investment planning, and conversions.",
  },
  {
    icon: <FaGraduationCap className={styles.offeringIconSvg} />,
    title: "Trader Education",
    description: "Learn strategies, best practices, and market insights from experts.",
  },
];

export default function Offerings() {
  return (
    <section className={styles.offeringsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>What We Offer</h2>
          <p>Tools built specifically for African traders.</p>
        </div>

        <div className={styles.offeringsGrid}>
          {offerings.map((item, i) => (
            <div key={i} className={styles.offeringCard}>
              <div className={styles.offeringIcon}>{item.icon}</div>
              <h3 className={styles.offeringTitle}>{item.title}</h3>
              <p className={styles.offeringDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
