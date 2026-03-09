"use client";

import React from "react";
import styles from "./about.module.scss";

const team = [
  {
    name: "Amina Yusuf",
    role: "Founder & CEO",
    bio: "Blockchain engineer. Building for emerging markets.",
  },
  {
    name: "David Okonkwo",
    role: "Head of Product",
    bio: "Ex-Fintech. Obsessed with trader experience.",
  },
  {
    name: "Zainab Hassan",
    role: "Lead Developer",
    bio: "Full-stack engineer. Real-time systems specialist.",
  },
];

export default function Team() {
  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Our Team</h2>
          <p>Small team. Deep market expertise.</p>
        </div>

        <div className={styles.teamGrid}>
          {team.map((person) => (
            <div key={person.name} className={styles.teamMember}>
              <div className={styles.memberAvatar}>{person.name.split(" ").map((n) => n[0]).join("")}</div>
              <h3 className={styles.memberName}>{person.name}</h3>
              <p className={styles.memberRole}>{person.role}</p>
              <p className={styles.memberBio}>{person.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
