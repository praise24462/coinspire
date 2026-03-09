import styles from "./PriceCard.module.scss";

export default function PriceCard({ coin }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={coin.image} alt={coin.name} width={32} />
        <h3>{coin.name}</h3>
      </div>

      <div className={styles.price}>
        ${coin.current_price.toLocaleString()}
      </div>

      <div
        className={
          coin.price_change_percentage_24h > 0
            ? styles.green
            : styles.red
        }
      >
        {coin.price_change_percentage_24h.toFixed(2)}%
      </div>
    </div>
  );
}