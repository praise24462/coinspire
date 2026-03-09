"use client";

import React from "react";
import styles from "./Card.module.scss";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "interactive" | "bordered";
  padding?: "none" | "sm" | "md" | "lg";
  onClick?: () => void;
}

export default function Card({
  children,
  className = "",
  variant = "default",
  padding = "md",
  onClick,
}: CardProps) {
  const classes = [
    styles.card,
    styles[variant],
    styles[`padding-${padding}`],
    onClick ? styles.clickable : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
}

// Card Header Component
interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
}

export function CardHeader({ children, className = "", action }: CardHeaderProps) {
  return (
    <div className={`${styles.header} ${className}`}>
      <div className={styles.headerContent}>{children}</div>
      {action && <div className={styles.headerAction}>{action}</div>}
    </div>
  );
}

// Card Title Component
interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({ children, className = "" }: CardTitleProps) {
  return <h3 className={`${styles.title} ${className}`}>{children}</h3>;
}

// Card Description Component
interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function CardDescription({ children, className = "" }: CardDescriptionProps) {
  return <p className={`${styles.description} ${className}`}>{children}</p>;
}

// Card Content Component
interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={`${styles.content} ${className}`}>{children}</div>;
}

// Card Footer Component
interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function CardFooter({ children, className = "" }: CardFooterProps) {
  return <div className={`${styles.footer} ${className}`}>{children}</div>;
}
