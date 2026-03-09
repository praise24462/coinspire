"use client";

import React from "react";
import Link from "next/link";
import styles from "./hero.module.scss";
import Button from "@/components/ui/Button/Button";

// icon
import { FaRocket } from "react-icons/fa";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.gradient1}></div>
        <div className={styles.gradient2}></div>
        <div className={styles.grid}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.badge}>
          <FaRocket className={styles.badgeIcon} />
          <span>The Future of Crypto Tracking</span>
        </div>
        
        <h1 className={styles.title}>
          Track Crypto Prices in Real-Time
        </h1>
        
        <p className={styles.description}>
          Your all-in-one platform for real‑time market data, profit calculators, and crypto education.
        </p>
        
        <div className={styles.ctas}>
          <Link href="/prices">
            <Button variant="primary" size="lg">
              View Prices
            </Button>
          </Link>
          <Link href="/calculator">
            <Button variant="secondary" size="lg">
              Use Calculator
            </Button>
          </Link>
        </div>
        
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>500+</span>
            <span className={styles.statLabel}>Cryptocurrencies</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.stat}>
            <span className={styles.statValue}>20+</span>
            <span className={styles.statLabel}>Exchanges</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.stat}>
            <span className={styles.statValue}>24/7</span>
            <span className={styles.statLabel}>Live Updates</span>
          </div>
        </div>
      </div>
    </section>
  );
}
