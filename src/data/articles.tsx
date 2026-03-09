import React from "react";
import { FaRocket, FaLock, FaChartBar, FaGem, FaBell } from "react-icons/fa";

export const articlesData = [
  {
    id: 1,
    title: "Getting Started with Cryptocurrency",
    category: "basics",
    readTime: "5 min read",
    author: "Sarah Chen",
    date: "March 1, 2026",
    icon: <FaRocket />,
    excerpt: "A beginner's guide to understanding cryptocurrency basics and making your first investment with confidence.",
    content: {
      sections: [
        {
          heading: "What is Cryptocurrency?",
          content: [
            "Cryptocurrency is a digital or virtual form of currency that uses cryptography for security. Unlike traditional currencies issued by governments, cryptocurrencies operate on decentralized networks called blockchains. Bitcoin, created in 2009, was the first cryptocurrency and paved the way for thousands of others.",
            "The key innovation of cryptocurrency is that it enables peer-to-peer transactions without the need for intermediaries like banks. This decentralization, combined with cryptographic security, makes cryptocurrencies secure and transparent."
          ]
        },
        {
          heading: "Why Should You Care About Crypto?",
          content: [
            "Cryptocurrencies offer several advantages over traditional financial systems. They provide faster cross-border transactions, lower fees for international transfers, and financial access to people without bank accounts. Additionally, cryptocurrencies have become attractive investment assets for diversifying portfolios.",
            "The crypto market operates 24/7, unlike traditional stock markets, allowing you to trade at any time. However, it's important to understand that crypto markets are highly volatile, and prices can fluctuate dramatically."
          ]
        },
        {
          heading: "Getting Your First Cryptocurrency",
          content: [
            "To get started with cryptocurrency, you'll need a digital wallet, which is like a bank account for crypto. You can then purchase cryptocurrency using fiat currency (regular money) through exchanges like Coinspire. Start small, do your research, and never invest more than you can afford to lose.",
            "Popular cryptocurrencies include Bitcoin (BTC), Ethereum (ETH), and stablecoins like USDT. Each has different use cases and characteristics. Bitcoin is often considered a store of value, while Ethereum powers smart contracts and decentralized applications."
          ]
        },
        {
          heading: "Key Takeaways for Beginners",
          content: [
            "• Cryptocurrency is decentralized digital money secured by cryptography",
            "• You need a wallet to store and buy cryptocurrencies",
            "• Start small and only invest what you can afford to lose",
            "• The crypto market is volatile but operates 24/7",
            "• Do thorough research before making any investment decisions",
            "• Consider using platforms like Coinspire to track prices and manage your portfolio"
          ]
        }
      ]
    },
    relatedArticles: [
      { id: 5, title: "What is USDT and Why It Matters" },
      { id: 3, title: "Crypto Security Best Practices" }
    ]
  },
  {
    id: 3,
    title: "Crypto Security Best Practices",
    category: "security",
    readTime: "6 min read",
    author: "Elena Rodriguez",
    date: "February 25, 2026",
    icon: <FaLock />,
    excerpt: "Essential security tips and best practices to protect your cryptocurrency assets from theft and fraud.",
    content: {
      sections: [
        {
          heading: "Understanding Cryptocurrency Security",
          content: [
            "Security in cryptocurrency is paramount because unlike traditional finance, there's no central authority to reverse fraudulent transactions. Once a transaction is confirmed on the blockchain, it cannot be undone. This means you are solely responsible for protecting your assets.",
            "The two main components of cryptocurrency security are securing your private keys and protecting against common attack vectors like phishing, malware, and social engineering."
          ]
        },
        {
          heading: "Wallet Security",
          content: [
            "Your cryptocurrency wallet is where you store your digital assets. There are several types of wallets, each with different security levels. Hardware wallets like Ledger and Trezor offer the highest security by keeping your private keys offline. Software wallets are convenient but more vulnerable to cyber attacks.",
            "Never share your private keys or seed phrases with anyone. Store your seed phrase in a secure location, preferably offline and in multiple physical locations. Consider using a hardware wallet for large amounts of cryptocurrency."
          ]
        },
        {
          heading: "Protecting Against Common Scams",
          content: [
            "Phishing is one of the most common attack vectors. Scammers create fake websites or send emails pretending to be legitimate cryptocurrency services. Always verify URLs before entering credentials, and never click links from unsolicited emails.",
            "Be wary of promises of guaranteed returns or exclusive investment opportunities. Legitimate cryptocurrency investments carry risks, and any platform promising guaranteed profits is likely a scam. Additionally, never download software or wallets from unofficial sources."
          ]
        },
        {
          heading: "Best Security Practices",
          content: [
            "• Use strong, unique passwords for all cryptocurrency accounts",
            "• Enable two-factor authentication (2FA) on all accounts",
            "• Keep your software and operating system updated",
            "• Use a hardware wallet for long-term storage of large amounts",
            "• Never share private keys, seed phrases, or sensitive information",
            "• Verify website URLs before entering credentials",
            "• Consider using a secure, dedicated device for cryptocurrency transactions",
            "• Regularly backup your wallet and store backups securely"
          ]
        }
      ]
    },
    relatedArticles: [
      { id: 6, title: "Avoiding Crypto Scams" },
      { id: 1, title: "Getting Started with Cryptocurrency" }
    ]
  },
  {
    id: 4,
    title: "How to Read Crypto Charts",
    category: "trading",
    readTime: "10 min read",
    author: "David Park",
    date: "February 22, 2026",
    icon: <FaChartBar />,
    excerpt: "Master the art of reading cryptocurrency price charts and technical analysis for better trading decisions.",
    content: {
      sections: [
        {
          heading: "Understanding Price Charts",
          content: [
            "Price charts are visual representations of cryptocurrency price movements over time. The most common type is the candlestick chart, which shows the opening, closing, high, and low prices for a specific time period. Each candlestick represents a time interval, such as 5 minutes, 1 hour, or 1 day.",
            "Candlesticks are colored green (bullish) when the closing price is higher than the opening price, and red (bearish) when the closing price is lower. The body of the candlestick shows the opening and closing range, while the wicks show the highest and lowest prices reached during that period."
          ]
        },
        {
          heading: "Key Chart Patterns",
          content: [
            "Common chart patterns include support and resistance levels, which are price points where the market tends to reverse direction. A support level is a price floor where buyers typically emerge, preventing further downside. Resistance is a price ceiling where sellers often emerge.",
            "Other important patterns include head and shoulders, double tops/bottoms, and triangles. These patterns can indicate potential price movements. However, remember that patterns are not guaranteed predictors; they're based on historical price behavior and market psychology."
          ]
        },
        {
          heading: "Technical Indicators",
          content: [
            "Technical indicators are mathematical calculations based on price and volume that help traders identify trends and potential entry/exit points. Popular indicators include Moving Averages, which smooth out price data to show the overall trend, and the Relative Strength Index (RSI), which measures momentum.",
            "The MACD (Moving Average Convergence Divergence) helps identify trend changes, while Bollinger Bands show volatility. These indicators should never be used in isolation; combine multiple indicators and perform thorough analysis before making trading decisions."
          ]
        },
        {
          heading: "Effective Trading Strategies",
          content: [
            "• Use multiple timeframes for analysis (daily, weekly, monthly)",
            "• Combine technical indicators with fundamental analysis",
            "• Define clear entry and exit points before trading",
            "• Use stop-loss orders to limit potential losses",
            "• Don't rely solely on chart patterns; they're not guaranteed",
            "• Keep a trading journal to track your decisions and results",
            "• Practice with small amounts before risking significant capital",
            "• Stay updated with news and events that affect crypto prices"
          ]
        }
      ]
    },
    relatedArticles: [
      { id: 1, title: "Getting Started with Cryptocurrency" },
    ]
  },
  {
    id: 5,
    title: "What is USDT and Why It Matters",
    category: "basics",
    readTime: "4 min read",
    author: "Lisa Wong",
    date: "February 20, 2026",
    icon: <FaGem />,
    excerpt: "Understanding stablecoins and the role of USDT in cryptocurrency trading and payments.",
    content: {
      sections: [
        {
          heading: "What is USDT?",
          content: [
            "USDT (Tether) is a stablecoin, a type of cryptocurrency designed to maintain a stable value relative to a fiat currency, in this case the US Dollar. Each USDT token is theoretically backed by one US Dollar held in reserve by Tether Limited.",
            "Stablecoins like USDT solve a major problem in cryptocurrency: price volatility. While Bitcoin and Ethereum prices fluctuate dramatically, USDT maintains a relatively stable value, making it ideal for trading pairs, payments, and storing value."
          ]
        },
        {
          heading: "Why USDT is Important",
          content: [
            "USDT is crucial for cryptocurrency trading because it acts as a bridge between fiat currency and cryptocurrencies. Most trading pairs on exchanges involve USDT or other stablecoins, allowing traders to quickly exit volatile positions without converting to fiat currency.",
            "USDT is also widely accepted for peer-to-peer payments and remittances, especially in countries with currency instability. Its value stability makes it ideal for cross-border transactions and business payments."
          ]
        },
        {
          heading: "USDT vs Other Stablecoins",
          content: [
            "While USDT is the most widely used stablecoin, alternatives like USDC (USD Coin), DAI, and BUSD also exist. USDC is backed by actual US Dollars and considered more transparent. DAI is a decentralized stablecoin backed by cryptocurrency collateral. Each has different characteristics and use cases.",
            "For most users and traders, USDT remains the default choice due to its liquidity and widespread acceptance across exchanges and platforms."
          ]
        }
      ]
    },
    relatedArticles: [
      { id: 1, title: "Getting Started with Cryptocurrency" },
    ]
  },
  {
    id: 6,
    title: "Avoiding Crypto Scams",
    category: "security",
    readTime: "7 min read",
    author: "James Anderson",
    date: "February 18, 2026",
    icon: <FaBell />,
    excerpt: "Learn how to identify and avoid common cryptocurrency scams and fraudulent schemes.",
    content: {
      sections: [
        {
          heading: "Common Types of Crypto Scams",
          content: [
            "Crypto scams come in many forms, but the most common include pump-and-dump schemes where investors artificially inflate a coin's price before selling for profit, leaving other investors with losses. Ponzi schemes promise unrealistic returns funded by new investors' money rather than actual profits.",
            "Fake exchanges and wallets are also prevalent. Scammers create convincing replicas of legitimate platforms to steal login credentials and funds. Phishing attacks use emails or messages that appear to be from trusted sources to extract personal information."
          ]
        },
        {
          heading: "Red Flags to Watch Out For",
          content: [
            "Be skeptical of guaranteed returns, celebrity endorsements, pressure to invest quickly, and requests to share private keys or seed phrases. Legitimate investment opportunities never guarantee returns, and real companies don't use celebrities to promote crypto investments.",
            "Vague project information, unverified team members, and promises of passive income with little effort are major red flags. Always research projects thoroughly before investing, and verify that team members are real and have legitimate backgrounds."
          ]
        },
        {
          heading: "How to Protect Yourself",
          content: [
            "Always use reputable exchanges and wallets. Check reviews, verify website authenticity, and look for security certifications. Be cautious of new or unknown projects, and invest only in cryptocurrencies with established teams and real use cases.",
            "Use hardware wallets for large amounts, enable two-factor authentication, and keep software updated. Be skeptical of unsolicited messages or investment opportunities, and never share sensitive information through email or messaging apps."
          ]
        },
        {
          heading: "What to Do If You're Scammed",
          content: [
            "• Report the scam to the platform immediately",
            "• Contact law enforcement and provide evidence",
            "• Document all communications and transaction details",
            "• Change all passwords and monitor accounts for unauthorized access",
            "• Consider using blockchain analysis to track stolen funds",
            "• Share your experience to warn others",
            "• Seek professional legal advice if large amounts were stolen"
          ]
        }
      ]
    },
    relatedArticles: [
      { id: 3, title: "Crypto Security Best Practices" },
      { id: 1, title: "Getting Started with Cryptocurrency" }
    ]
  }
];
