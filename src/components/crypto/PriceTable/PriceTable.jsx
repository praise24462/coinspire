"use client";

import { useEffect, useState } from "react";
import { getCryptoPrices } from "@/services/cryptoService";
import Loader from "@/components/ui/Loader/Loader";
import styles from "./PriceTable.module.scss";

export default function PriceTable() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await getCryptoPrices();
        setCoins(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching coins:", err);
        setError("Unable to load price data");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <Loader label="Loading prices..." />;
  }

  if (error) {
    return <div className={styles.table}>{error}</div>;
  }

  return (
    <div className={styles.table}>
      <div className={styles.header}>
        <span>Coin</span>
        <span>Price</span>
        <span>24h Change</span>
        <span>Market Cap</span>
      </div>

      {coins.map((coin) => (
        <div key={coin.id} className={styles.row}>
          <div className={styles.coin}>
            <img src={coin.image} width="20" />
            {coin.name}
          </div>

          <span>${coin.current_price?.toLocaleString()}</span>

          <span
            className={
              coin.price_change_percentage_24h > 0
                ? styles.green
                : styles.red
            }
          >
            {coin.price_change_percentage_24h?.toFixed(2)}%
          </span>

          <span>${coin.market_cap?.toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
}
