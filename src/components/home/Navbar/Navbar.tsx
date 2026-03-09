"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./navbar.module.scss";
import Button from "@/components/ui/Button/Button";

// lists are computed inside component based on auth state

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="14" stroke="url(#logoGrad)" strokeWidth="2.5" />
              <path d="M16 8V24M12 12L16 8L20 12M12 20L16 24L20 20" stroke="url(#logoGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="16" cy="16" r="3" fill="url(#logoGrad)" />
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6366F1" />
                  <stop offset="1" stopColor="#10B981" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className={styles.logoText}>COINSPIRE</span>
        </Link>

        <div className={styles.navLinks}>
          <>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
            <Link href="/prices" className={styles.navLink}>Prices</Link>
            <Link href="/calculator" className={styles.navLink}>Calculator</Link>
            <Link href="/learn" className={styles.navLink}>Learn</Link>
          </>
        </div>


        <button
          className={`${styles.mobileToggle} ${mobileMenuOpen ? styles.open : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ""}`}>
        <div className={styles.mobileContent}>
          <Link href="/" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link href="/prices" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Prices</Link>
          <Link href="/calculator" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Calculator</Link>
          <Link href="/learn" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Learn</Link>
        </div>
      </div>
    </nav>
  );
}

