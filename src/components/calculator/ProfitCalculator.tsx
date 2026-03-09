"use client";

import { useState } from "react";
import styles from "./ProfitCalculator.module.scss";
import Input from "@/components/ui/Input/Input";
import Button from "@/components/ui/Button/Button";
import Card from "@/components/ui/Card/Card";

export default function ProfitCalculator() {
  const [buyPrice, setBuyPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState<{
    initialInvestment: number;
    finalAmount: number;
    profit: number;
    profitPercentage: number;
  } | null>(null);

  const calculateProfit = () => {
    const buy = parseFloat(buyPrice);
    const sell = parseFloat(sellPrice);
    const amt = parseFloat(amount);

    if (isNaN(buy) || isNaN(sell) || isNaN(amt) || buy === 0) {
      return;
    }

    const initialInvestment = amt * buy;
    const finalAmount = amt * sell;
    const profit = finalAmount - initialInvestment;
    const profitPercentage = (profit / initialInvestment) * 100;

    setResult({
      initialInvestment,
      finalAmount,
      profit,
      profitPercentage,
    });
  };

  const resetCalculator = () => {
    setBuyPrice("");
    setSellPrice("");
    setAmount("");
    setResult(null);
  };

  return (
    <Card className={styles.calculator} padding="lg">
      <h2>Crypto Profit Calculator</h2>

      <div className={styles.inputs}>
        <Input
          label="Buy Price (USD)"
          type="number"
          placeholder="e.g. 30000"
          value={buyPrice}
          onChange={(e) => setBuyPrice(e.target.value)}
          leftIcon={<span>$</span>}
          fullWidth
        />

        <Input
          label="Sell Price (USD)"
          type="number"
          placeholder="e.g. 35000"
          value={sellPrice}
          onChange={(e) => setSellPrice(e.target.value)}
          leftIcon={<span>$</span>}
          fullWidth
        />

        <Input
          label="Amount (Coins)"
          type="number"
          placeholder="e.g. 0.5"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          fullWidth
        />
      </div>

      <div className={styles.actions}>
        <Button variant="primary" onClick={calculateProfit}>
          Calculate
        </Button>
        <Button variant="ghost" onClick={resetCalculator}>
          Reset
        </Button>
      </div>

      {result && (
        <div className={styles.result}>
          <div>
            <strong>Initial:</strong>{' '}
            ${result.initialInvestment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <div>
            <strong>Final:</strong>{' '}
            ${result.finalAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <div>
            <strong>Profit/Loss:</strong>{' '}
            <span className={result.profit >= 0 ? styles.positive : styles.negative}>
              {result.profit >= 0 ? '+' : ''}${result.profit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>
          <div>
            <strong>ROI:</strong>{' '}
            <span className={result.profitPercentage >= 0 ? styles.positive : styles.negative}>
              {result.profitPercentage >= 0 ? '+' : ''}{result.profitPercentage.toFixed(2)}%
            </span>
          </div>
        </div>
      )}
    </Card>
  );
}