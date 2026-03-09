"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button/Button";
import styles from "./about.module.scss";

export default function Hero() {
  const metrics = [
    { id: "coverage", label: "Markets", value: 512 },
    { id: "speed", label: "Updates/min", value: 12 },
  ];

  const [counts, setCounts] = useState(() => metrics.map(() => 0));
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const duration = 1000;
    const start = performance.now();

    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 4);
      setCounts(metrics.map((m) => Math.round(m.value * eased)));
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  return (
    <section className={styles.heroSection} aria-labelledby="hero-title">
      {/* Animated background */}
      <div className={styles.heroBg}>
        <div className={styles.bgOrb1}></div>
        <div className={styles.bgOrb2}></div>
        <div className={styles.bgGrid}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.heroLayout}>
          <div className={styles.heroText}>
            <h1 id="hero-title" className={styles.heroTitle}>COINSPIRE</h1>
            <p className={styles.heroSubtitle}>Real-time market insight for informed traders.</p>
            <p className={styles.heroDescription}>
              Aggregates live pricing and market trends into one unified platform.
              Built for speed. Designed for clarity.
            </p>

            <div className={styles.heroCTA}>
              <Link href="/calculator"><Button variant="primary">Explore Tools</Button></Link>
            </div>

            <div className={styles.metricsList} role="list" aria-label="Platform statistics">
              {metrics.map((m, i) => (
                <div key={m.id} className={styles.metricItem} role="listitem">
                  <span className={styles.number}>{counts[i]}</span>
                  <span className={styles.label}>{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.heroVisual} aria-hidden>
            <div className={styles.mockupCard}>
              <div className={styles.mockupHeader}>
                <div className={styles.mockupDot}></div>
                <div className={styles.mockupDot}></div>
                <div className={styles.mockupDot}></div>
              </div>
              <div className={styles.mockupContent}>
                <div className={styles.mockupLine}></div>
                <div className={styles.mockupLine}></div>
                <div className={styles.mockupLine}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
