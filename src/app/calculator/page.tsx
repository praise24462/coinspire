"use client";

import { useState } from "react";
import Navbar from "@/components/home/Navbar/Navbar";
import Footer from "@/components/home/Footer/Footer";
import Card from "@/components/ui/Card/Card";

import ProfitCalculator from "@/components/calculator/ProfitCalculator";
import InvestmentCalculator from "@/components/calculator/InvestmentCalculator";

// icons
import { FaChartLine, FaMoneyBill } from "react-icons/fa";

import styles from "./calculator.module.scss";

type CalculatorMode = "profit" | "investment";

const modeInfo = {
  profit: {
    title: "How the Crypto Profit Calculator Works",
    description: "The Crypto Profit Calculator is a simple tool designed to help people figure out how much money they might make (or lose) when trading cryptocurrencies. Think of it like a basic math helper for buying and selling digital coins like Bitcoin or Ethereum. People buy cryptocurrencies at one price and hope to sell them later at a higher price to make a profit. But prices change a lot, and there are fees involved (like transaction costs). This calculator lets you plug in some numbers to see what your profit or loss might be before you actually trade. It's just a calculator. It doesn't predict prices. Crypto is volatile, so use it as a guide, not a guarantee.",
    steps: ["Enter amount of coins", "Set your buy price", "Set your sell price", "View your profit"],
    tips: ["Account for trading fees", "ROI over 100% means doubling your money"],
  },
  investment: {
    title: "Investment Growth",
    steps: ["Enter initial investment", "Set expected annual return", "Choose time period", "See future value"],
    tips: ["Compound interest boosts long-term gains", "Crypto is volatile - diversify"],
  },
};

export default function CalculatorPage() {
  const [mode, setMode] = useState<CalculatorMode>("profit");

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Crypto Calculator</h1>
            <p className={styles.subtitle}>Calculate profits and project returns using live prices.</p>
          </div>

          <div className={styles.modeSelector}>
            <button className={`${styles.modeBtn} ${mode === "profit" ? styles.active : ""}`} onClick={() => setMode("profit")}>
              <FaChartLine className={styles.modeIcon} />
              <span>Profit</span>
            </button>
            <button className={`${styles.modeBtn} ${mode === "investment" ? styles.active : ""}`} onClick={() => setMode("investment")}>
              <FaMoneyBill className={styles.modeIcon} />
              <span>Investment</span>
            </button>
          </div>

          <div key={mode} className={styles.calculatorArea}>
            {mode === "profit" && <ProfitCalculator />}
            {mode === "investment" && <InvestmentCalculator />}
          </div>

          <Card className={styles.infoCard}>
            <h3 className={styles.infoTitle}>{modeInfo[mode].title}</h3>
            {modeInfo[mode].description && (
              <p className={styles.infoDescription}>{modeInfo[mode].description}</p>
            )}
            <div className={styles.infoGrid}>
              {modeInfo[mode].steps.map((step, idx) => (
                <div className={styles.infoItem} key={idx}>
                  <span className={styles.infoNumber}>{idx + 1}</span>
                  <span className={styles.infoText}>{step}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
