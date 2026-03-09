"use client";

import styles from "./navbar.module.scss";
import { FaBell } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className={styles.navbar}>

      {/* Left */}
      <div className={styles.left}>
        <h2>Dashboard</h2>
      </div>

      {/* Right */}
      <div className={styles.right}>

        {/* Search */}
        <input
          type="text"
          placeholder="Search coin..."
          className={styles.search}
        />

        {/* Notification */}
        <div className={styles.icon}>
          <FaBell />
        </div>

        {/* Profile */}
        <div className={styles.profile}>
          <div className={styles.avatar}>
            P
          </div>

          <div>
            <p className={styles.name}>Praise</p>
            <span className={styles.role}>User</span>
          </div>
        </div>

      </div>

    </div>
  );
}