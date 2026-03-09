"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/home/Navbar/Navbar";
import Footer from "@/components/home/Footer/Footer";
import styles from "./learn.module.scss";
import Button from "@/components/ui/Button/Button";
import Card from "@/components/ui/Card/Card";
import { FaChartBar } from "react-icons/fa";
import { FaBook, FaChartLine, FaLock, FaRocket, FaGem, FaBell } from "react-icons/fa";

const categories = [
  { id: "basics", label: "Crypto Basics", icon: <FaBook />, count: 12 },
  { id: "trading", label: "Trading Guide", icon: <FaChartLine />, count: 8 },
  { id: "security", label: "Security", icon: <FaLock />, count: 6 },
];

const articles = [
  {
    id: 1,
    title: "Getting Started with Cryptocurrency",
    description: "Learn the basics of cryptocurrency and how to get started with your first investment.",
    category: "basics",
    readTime: "5 min read",
    icon: <FaRocket />,
  },
  {
    id: 3,
    title: "Crypto Security Best Practices",
    description: "Protect your assets with these essential security tips and best practices.",
    category: "security",
    readTime: "6 min read",
    icon: <FaLock />,
  },
  {
    id: 4,
    title: "How to Read Crypto Charts",
    description: "Master the art of reading cryptocurrency charts and making informed decisions.",
    category: "trading",
    readTime: "10 min read",
    icon: <FaChartBar />,
  },
  {
    id: 5,
    title: "What is USDT and Why It Matters",
    description: "Understanding stablecoins and their role in the crypto ecosystem.",
    category: "basics",
    readTime: "4 min read",
    icon: <FaGem />,
  },
  {
    id: 6,
    title: "Avoiding Crypto Scams",
    description: "Learn how to identify and avoid common cryptocurrency scams.",
    category: "security",
    readTime: "7 min read",
    icon: <FaBell />,
  },
];

export default function LearnPage() {
  const [activeCategory, setActiveCategory] = React.useState("all");

  const filteredArticles = activeCategory === "all" 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <div>
      <Navbar />

      <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>Learn Crypto</h1>
        <p className={styles.subtitle}>
          Educational resources to help you understand cryptocurrency and trading
        </p>
      </div>

      {/* Categories */}
      <div className={styles.categories}>
        <button 
          className={`${styles.categoryBtn} ${activeCategory === "all" ? styles.active : ""}`}
          onClick={() => setActiveCategory("all")}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`${styles.categoryBtn} ${activeCategory === cat.id ? styles.active : ""}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            <span>{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className={styles.articlesGrid}>
        {filteredArticles.map((article) => (
          <Card key={article.id} variant="interactive" padding="lg" className={styles.articleCard}>
            <div className={styles.articleIcon}>{article.icon}</div>
            <div className={styles.articleMeta}>
              <span className={styles.readTime}>{article.readTime}</span>
            </div>
            <h3 className={styles.articleTitle}>{article.title}</h3>
            <p className={styles.articleDescription}>{article.description}</p>
            <Link href={`/learn/${article.id}`} className={styles.readMore}>
              Read Article →
            </Link>
          </Card>
        ))}
      </div>

      {/* Newsletter */}
      <div className={styles.newsletter}>
        <Card variant="default" padding="lg" className={styles.newsletterCard}>
          <div className={styles.newsletterContent}>
            <h2 className={styles.newsletterTitle}>Stay Updated</h2>
            <p className={styles.newsletterDescription}>
              Subscribe to our newsletter for the latest crypto news and market insights.
            </p>
            <div className={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className={styles.emailInput}
              />
              <Button variant="primary">Subscribe</Button>
            </div>
          </div>
        </Card>
      </div>

      <Footer />
      </div> {/* end .page */}
    </div>
  );
}

