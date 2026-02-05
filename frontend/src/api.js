import { bikes as localBikes, getBike as getLocalBike } from "./pages/bikes";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";

const withFallback = (data) =>
  Array.isArray(data) && data.length > 0 ? data : localBikes;

export async function fetchBikes() {
  try {
    const res = await fetch(`${API_BASE}/api/bikes`);
    if (!res.ok) throw new Error("Failed to fetch bikes");
    const data = await res.json();
    return withFallback(data);
  } catch (err) {
    console.warn("Falling back to local bikes data:", err.message);
    return localBikes;
  }
}

export async function fetchBike(slug) {
  try {
    const res = await fetch(`${API_BASE}/api/bikes/${slug}`);
    if (!res.ok) throw new Error("Failed to fetch bike");
    return res.json();
  } catch (err) {
    const fallback = getLocalBike(slug);
    if (fallback) return fallback;
    throw err;
  }
}
