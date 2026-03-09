import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "COINSPIRE - Real-Time Crypto Prices",
  description: "Track live cryptocurrency prices, calculate profits, and learn about crypto.",
  keywords: ["crypto", "bitcoin", "ethereum", "usd", "prices", "trading"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
