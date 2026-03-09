"use client";

import React from "react";
import Link from "next/link";
import styles from "./footer.module.scss";

const footerLinks = {
  product: [
    { label: "Prices", href: "/prices" },
    { label: "Calculator", href: "/calculator" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Learn", href: "/learn" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: "X", label: "Twitter", href: "https://twitter.com" },
  { icon: "T", label: "Telegram", href: "https://telegram.org" },
  { icon: "in", label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Footer() {
  return (
    
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoIcon}>
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="14" stroke="url(#footerLogoGrad)" strokeWidth="2.5" />
                  <path d="M16 8V24M12 12L16 8L20 12M12 20L16 24L20 20" stroke="url(#footerLogoGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="16" cy="16" r="3" fill="url(#footerLogoGrad)" />
                  <defs>
                    <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#6366F1" />
                      <stop offset="1" stopColor="#10B981" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className={styles.logoText}>COINSPIRE</span>
            </Link>
            <p className={styles.description}>
              Your all-in-one platform for real-time crypto prices, profit calculators, and educational resources.
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Product</h4>
              <ul className={styles.list}>
                {footerLinks.product.map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.href} className={styles.link}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Company</h4>
              <ul className={styles.list}>
                {footerLinks.company.map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.href} className={styles.link}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Legal</h4>
              <ul className={styles.list}>
                {footerLinks.legal.map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.href} className={styles.link}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div> {/* end .links */}
        </div> {/* end .top */}

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} COINSPIRE. All rights reserved.
          </p>

          <div className={styles.social}>
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div> {/* end .bottom */}
      </div> {/* end .container */}
    </footer>
  );
}
