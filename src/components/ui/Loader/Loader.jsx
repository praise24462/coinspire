import React from "react";
import styles from "./Loader.module.scss";

export default function Loader({ size = 40, className = "", label = "" }) {
  const style = { width: `${size}px`, height: `${size}px` };

  return (
    <div className={`${styles.wrapper} ${className}`} role="status" aria-busy="true">
      <div className={styles.spinner} style={style} />
      {label ? <span className={styles.label}>{label}</span> : null}
    </div>
  );
}