"use client";

import React from "react";
import styles from "./Badge.module.scss";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning" | "error" | "info";
  size?: "sm" | "md";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  size = "md",
  className = "",
}: BadgeProps) {
  const classes = [styles.badge, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{children}</span>;
}
