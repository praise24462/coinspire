"use client";

import React from "react";
import styles from "./features.module.scss";
import Card from "@/components/ui/Card/Card";

// icons
import { FaChartBar, FaExchangeAlt, FaCalculator, FaChartLine } from "react-icons/fa";

const features = [
  {
    icon: <FaChartBar />,
    title: "Real-Time Crypto Prices",
    description: "Track prices of 500+ cryptocurrencies with live updates from major exchanges worldwide.",
  },

  {
    icon: <FaCalculator />,
    title: "Profit Calculator",
    description: "Calculate your potential profits with our easy-to-use trading calculator and profit tools.",
  },
  {
    icon: <FaChartLine />,
    title: "Market Analytics",
    description: "Get insights and analysis on crypto trends to make informed trading decisions.",
  },
];

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Features</span>
          <h2 className={styles.title}>Everything You Need to Trade Crypto</h2>
          <p className={styles.subtitle}>
            Powerful tools and features designed to make your crypto trading experience seamless and profitable.
          </p>
        </div>
        
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <Card key={index} variant="interactive" padding="lg" className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
