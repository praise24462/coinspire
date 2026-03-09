"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button/Button";
import styles from "./about.module.scss";

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
        <h2>Ready to trade smarter?</h2>
        <p>Join traders across Africa using COINSPIRE to find better rates and opportunities.</p>
        <div className={styles.ctaActions}>
          {/* Sign up button removed per request */}
          <Link href="/calculator"><Button variant="ghost">Try tools</Button></Link>
        </div>
      </div>
    </section>
  );
}
