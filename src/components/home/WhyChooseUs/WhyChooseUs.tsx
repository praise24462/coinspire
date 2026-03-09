"use client";

import React from "react";
import styles from "./whyChooseUs.module.scss";

import { FaBolt, FaLock, FaGem, FaGlobe } from "react-icons/fa";

const benefits = [
  {
    icon: <FaBolt />,
    title: "Lightning Fast",
    description: "Get real-time price updates instantly. No more waiting for outdated information.",
  },
  {
    icon: <FaLock />,
    title: "Secure & Private",
    description: "Your data stays private. We don't require any personal information to use our tracking tools.",
  },
  {
    icon: <FaGem />,
    title: "Profit Calculators",
    description: "Use built-in tools to model trades and investments quickly and accurately.",
  },
  {
    icon: <FaGlobe />,
    title: "Always Available",
    description: "Access our platform from anywhere in the world, 24/7, on any device.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Why Choose COINSPIRE</span>
          <h2 className={styles.title}>Trading Crypto Made Simple</h2>
          <p className={styles.subtitle}>
            We combine powerful features with an intuitive interface to give you the best crypto trading experience.
          </p>
        </div>
        
        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{benefit.icon}</span>
              </div>
              <div className={styles.content}>
                <h3 className={styles.itemTitle}>{benefit.title}</h3>
                <p className={styles.itemDescription}>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
