"use client";

import { useState } from "react";
import Input from "@/components/ui/Input/Input";
import Button from "@/components/ui/Button/Button";
import Card from "@/components/ui/Card/Card";
import styles from "./InvestmentCalculator.module.scss";

export default function InvestmentCalculator() {
  const [initial, setInitial] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState<{
    finalAmount: number;
    profit: number;
    roi: number;
  } | null>(null);

  const calculate = () => {
    const initNum = parseFloat(initial);
    const r = parseFloat(rate);
    const y = parseFloat(years);

    if (isNaN(initNum) || isNaN(r) || isNaN(y)) {
      return;
    }

    const finalAmount = initNum * Math.pow(1 + r / 100, y);
    const profit = finalAmount - initNum;
    const roi = (profit / initNum) * 100;

    setResult({ finalAmount, profit, roi });
  };

  const reset = () => {
    setInitial("");
    setRate("");
    setYears("");
    setResult(null);
  };

  return (
    <Card className={styles.calculator} padding="lg">
      <h2>Investment Return</h2>
      <div className={styles.inputs}>
        <Input
          label="Initial Investment (USD)"
          type="number"
          value={initial}
          onChange={(e) => setInitial(e.target.value)}
          leftIcon={<span>$</span>}
          fullWidth
        />
        <Input
          label="Annual Return (%)"
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          fullWidth
        />
        <Input
          label="Years"
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          fullWidth
        />
      </div>
      <div className={styles.actions}>
        <Button variant="primary" onClick={calculate}>
          Calculate
        </Button>
        <Button variant="ghost" onClick={reset}>
          Reset
        </Button>
      </div>
      {result && (
        <div className={styles.result}>
          <div>
            <strong>Final Amount:</strong>{' '}
            ${result.finalAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <div>
            <strong>Profit:</strong>{' '}
            ${result.profit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <div>
            <strong>ROI:</strong>{' '}{result.roi.toFixed(2)}%
          </div>
        </div>
      )}
    </Card>
  );
}
