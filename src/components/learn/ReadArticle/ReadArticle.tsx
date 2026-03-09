"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import styles from "./readArticle.module.scss";
import Button from "@/components/ui/Button/Button";
import { articlesData } from "@/data/articles";

interface Article {
  id: string | number;
  title: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  thumbnail?: string;
  icon: string;
  excerpt: string;
  content: {
    sections: Array<{
      heading: string;
      content: string[];
    }>;
  };
  relatedArticles: Array<{
    id: string | number;
    title: string;
  }>;
}

export default function ReadArticle({ articleId }: { articleId: string }) {
  const [activeSection, setActiveSection] = useState(0);

  const article = useMemo<Article | null>(() => {
    const found = articlesData.find(a => a.id.toString() === articleId);
    return found || null;
  }, [articleId]);

  if (!article) {
    return (
      <div className={styles.notFound}>
        <div className={styles.container}>
          <h1>Article Not Found</h1>
          <p>The article you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          <Link href="/learn">
            <Button variant="primary">Back to Learn</Button>
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      basics: "#818CF8",
      trading: "#10B981",
      security: "#EF4444",
    };
    return colors[category] || "#6366F1";
  };

  return (
    <div className={styles.articlePage}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className={styles.container}>
          <Link href="/learn">Learn</Link>
          <span className={styles.separator}>/</span>
          <span>{article.title}</span>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Main Article */}
          <div className={styles.mainArticle}>
            {/* Header */}
            <header className={styles.header}>
              <div className={styles.iconBox}>{article.icon}</div>
              
              <h1 className={styles.title}>{article.title}</h1>
              
              <p className={styles.excerpt}>{article.excerpt}</p>

              {/* Meta Info */}
              <div className={styles.meta}>
                <div className={styles.metaLeft}>
                  <div className={styles.author}>
                    <div className={styles.avatar}>{article.author.charAt(0)}</div>
                    <div className={styles.authorInfo}>
                      <div className={styles.authorName}>{article.author}</div>
                      <div className={styles.authorDate}>{article.date}</div>
                    </div>
                  </div>
                </div>
                
                <div className={styles.metaRight}>
                  <span 
                    className={styles.category}
                    style={{ backgroundColor: getCategoryColor(article.category) + "20", color: getCategoryColor(article.category) }}
                  >
                    {article.category.charAt(0).toUpperCase() + article.category.slice(1).replace(/([A-Z])/g, ' $1')}
                  </span>
                  <span className={styles.readTime}>⏱️ {article.readTime}</span>
                </div>
              </div>
            </header>

            {/* Share & Actions */}
            <div className={styles.actions}>
              <div className={styles.share}>
                <button className={styles.shareBtn} title="Share on Twitter">𝕏</button>
                <button className={styles.shareBtn} title="Share on Facebook">f</button>
                <button className={styles.shareBtn} title="Copy Link">🔗</button>
              </div>
            </div>

            {/* Article Content */}
            <div className={styles.articleBody}>
              {article.content.sections.map((section, index) => (
                <section key={index} className={styles.section}>
                  <h2 className={styles.sectionHeading}>{section.heading}</h2>
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className={styles.paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </div>

            {/* Tags */}
            <div className={styles.tags}>
              {["Cryptocurrency", "Trading", "Investment"].map((tag, idx) => (
                <Link key={idx} href={`/learn?tag=${tag}`} className={styles.tag}>
                  #{tag}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className={styles.ctaBox}>
              <h3>Ready to Trade?</h3>
              <p>Start tracking crypto prices with Coinspire today.</p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {/* Table of Contents */}
            <div className={styles.toc}>
              <h3 className={styles.tocTitle}>In This Article</h3>
              <ul className={styles.tocList}>
                {article.content.sections.map((section, index) => (
                  <li key={index} className={activeSection === index ? styles.active : ""}>
                    <button
                      onClick={() => {
                        setActiveSection(index);
                        const element = document.querySelectorAll(`.${styles.section}`)[index];
                        element?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {section.heading}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Articles */}
            {article.relatedArticles.length > 0 && (
              <div className={styles.relatedBox}>
                <h3 className={styles.relatedTitle}>Related Articles</h3>
                <ul className={styles.relatedList}>
                  {article.relatedArticles.map((related) => (
                    <li key={related.id}>
                      <Link href={`/learn/${related.id}`} className={styles.relatedLink}>
                        {related.title}
                        <span className={styles.arrow}>→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Newsletter CTA */}
            <div className={styles.newsletterBox}>
              <h4>Stay Updated</h4>
              <p>Get the latest crypto insights delivered to your inbox.</p>
              <input type="email" placeholder="Your email" className={styles.emailInput} />
              <Button variant="primary" size="sm" fullWidth={true}>Subscribe</Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
