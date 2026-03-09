"use client";

import React, { useState, useEffect } from "react";
import styles from "./prices.module.scss";
import Navbar from "@/components/home/Navbar/Navbar";
import Footer from "@/components/home/Footer/Footer";
import Input from "@/components/ui/Input/Input";
import Badge from "@/components/ui/Badge/Badge";
import Loader from "@/components/ui/Loader/Loader";
import { getCryptoPrices } from "@/services/cryptoService";

// icons
import { FaSearch, FaExclamationTriangle } from "react-icons/fa";

const categories = ["All", "Top Gainers", "Top Losers", "High Volume", "Most Volatile"];

interface Crypto {
  id?: string;
  symbol?: string;
  name?: string;
  market_cap?: number;
  total_volume?: number;
  price_change_percentage_24h?: number;
  [key: string]: any;
}

export default function PricesPage() {

  const [cryptoData, setCryptoData] = useState<Crypto[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        setLoading(true);
        const data = await getCryptoPrices();
        setCryptoData(data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch prices:", err);
        setError("Failed to load cryptocurrency prices");
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
  }, []);

  const formatMarketCap = (value: number | null | undefined): string => {
    if (value == null) return "N/A";
    if (value >= 1e12) return (value / 1e12).toFixed(2) + "T";
    if (value >= 1e9) return (value / 1e9).toFixed(2) + "B";
    if (value >= 1e6) return (value / 1e6).toFixed(2) + "M";
    return value.toFixed(2);
  };

  const computeStats = () => {
    const totalMarketCap = cryptoData.reduce<number>((acc, c) => acc + (c.market_cap || 0), 0);
    const totalVolume = cryptoData.reduce<number>((acc, c) => acc + (c.total_volume || 0), 0);
    const btc = cryptoData.find(c => c.symbol?.toLowerCase() === "btc");
    const btcDominance = btc ? (btc.market_cap || 0) / totalMarketCap * 100 : 0;
    return {
      totalMarketCap,
      totalVolume,
      btcDominance
    };
  };

  const { totalMarketCap, totalVolume, btcDominance } = computeStats();

  const filteredCrypto = cryptoData.filter((crypto) => {
    const term = searchTerm.toLowerCase();
    const name = crypto.name?.toLowerCase() ?? "";
    const symbol = crypto.symbol?.toLowerCase() ?? "";
    return name.includes(term) || symbol.includes(term);
  });

  const getFilteredByCategory = () => {
    const sorted = [...filteredCrypto];
    
    switch (activeCategory) {
      case "Top Gainers":
        return sorted.sort((a, b) => (b.price_change_percentage_24h || 0) - (a.price_change_percentage_24h || 0)).slice(0, 20);
      case "Top Losers":
        return sorted.sort((a, b) => (a.price_change_percentage_24h || 0) - (b.price_change_percentage_24h || 0)).slice(0, 20);
      case "High Volume":
        return sorted.sort((a, b) => (b.total_volume || 0) - (a.total_volume || 0)).slice(0, 20);
      case "Most Volatile":
        return sorted.sort((a, b) => Math.abs(b.price_change_percentage_24h || 0) - Math.abs(a.price_change_percentage_24h || 0)).slice(0, 20);
      default:
        return filteredCrypto;
    }
  };

  const filteredByCategory = getFilteredByCategory();

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.headerContent}>
              <h1 className={styles.title}>Crypto Prices</h1>
              <p className={styles.subtitle}>
                Live market data powered by CoinGecko
              </p>
            </div>
          </div>

          {/* Search and Filters */}
          <div className={styles.controls}>
            <div className={styles.searchWrapper}>
              <Input
                type="text"
                placeholder="Search cryptocurrencies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                leftIcon={<FaSearch />}
              />
            </div>

            <div className={styles.categories}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`${styles.categoryBtn} ${
                    activeCategory === category ? styles.active : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Market Stats */}
          <div className={styles.marketStats}>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Total Market Cap</span>
              <span className={styles.statValue}>
                ${formatMarketCap(totalMarketCap)}
              </span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>24h Volume</span>
              <span className={styles.statValue}>
                ${formatMarketCap(totalVolume)}
              </span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>BTC Dominance</span>
              <span className={styles.statValue}>
                {btcDominance.toFixed(2)}%
              </span>
            </div>
          </div>

          {/* Content area */}
          {loading && (
            <div className={styles.emptyState}>
              <Loader label="Fetching prices" />
            </div>
          )}

          {error && !loading && (
            <div className={styles.emptyState}>
              <span className={styles.emptyIcon}><FaExclamationTriangle /></span>
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && (
            <>
              {filteredByCategory.length === 0 && (
                <div className={styles.emptyState}>
                  <span className={styles.emptyIcon}><FaSearch /></span>
                  <p>No results for &quot;{searchTerm}&quot;.</p>
                </div>
              )}

              <div className={styles.grid}>
                {filteredByCategory.map((crypto) => (
                  <div key={crypto.id} className={styles.card}>
                    <img
                      src={crypto.image}
                      alt={crypto.name}
                      className={styles.cardImage}
                    />
                    <div className={styles.cardInfo}>
                      <h3 className={styles.cardTitle}>
                        {crypto.name}{" "}
                        <span className={styles.symbol}>
                          {crypto.symbol ? crypto.symbol.toUpperCase() : ""}
                        </span>
                      </h3>
                      <p className={styles.cardPrice}>
                        ${crypto.current_price?.toLocaleString()}
                      </p>
                      <Badge
                        variant={
                          (crypto.price_change_percentage_24h ?? 0) >= 0
                            ? "success"
                            : "error"
                        }
                      >
                        {(crypto.price_change_percentage_24h ?? 0) >= 0 ? "↑" : "↓"}{" "}
                        {Math.abs(
                          crypto.price_change_percentage_24h ?? 0
                        ).toFixed(2)}
                        %
                      </Badge>
                      <p className={styles.cardMeta}>
                        Mkt Cap: ${formatMarketCap(crypto.market_cap)}
                      </p>
                      <p className={styles.cardMeta}>
                        Vol: ${formatMarketCap(crypto.total_volume)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
