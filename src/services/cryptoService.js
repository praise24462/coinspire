export async function getCryptoPrices() {
  const endpoint = "/api/crypto-prices";

  try {
    const res = await fetch(endpoint);
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`API returned ${res.status}: ${text}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching crypto prices:", error);
    // rethrow so caller can display message
    throw error;
  }
}