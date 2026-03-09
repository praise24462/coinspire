"use client";

import React from "react";
import Link from "next/link";
import styles from "./cta.module.scss";
import Button from "@/components/ui/Button/Button";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.background}>
        <div className={styles.glow}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Ready to Start Tracking Crypto?
          </h2>
          <p className={styles.description}>
            Join thousands of traders using Coinspire to track crypto prices in real time.
          </p>
          
          <div className={styles.actions}>
            <Link href="/prices">
              <Button variant="primary" size="lg">
                View Prices
              </Button>
            </Link>
            <Link href="/learn">
              <Button variant="ghost" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
