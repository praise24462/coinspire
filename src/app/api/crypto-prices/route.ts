import type { NextRequest } from "next/server";

// Server-side API that proxies the CoinGecko request.  This avoids CORS errors when
// fetching from the browser and allows us to hide the actual URL if desired.

export async function GET(req: NextRequest) {
  try {
    const coingeckoUrl =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false";

    const res = await fetch(coingeckoUrl);
    if (!res.ok) {
      return new Response(JSON.stringify({ error: "Bad response from CoinGecko" }), {
        status: res.status,
        headers: { "Content-Type": "application/json" },
      });
    }

    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("/api/crypto-prices error", err);
    return new Response(JSON.stringify({ error: "Unable to fetch data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}