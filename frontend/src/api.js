import { bikes as localBikes, getBike as getLocalBike } from "./pages/bikes";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";

const mergeWithLocal = (bike) => {
  if (!bike?.slug) return bike;
  const local = getLocalBike(bike.slug);
  if (!local) return bike;
  return {
    ...local,
    ...bike,
    spec: { ...(local.spec || {}), ...(bike.spec || {}) },
  };
};

const withFallback = (data) => {
  if (!Array.isArray(data) || data.length === 0) return localBikes;
  return data.map(mergeWithLocal);
};

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
    const data = await res.json();
    return mergeWithLocal(data);
  } catch (err) {
    const fallback = getLocalBike(slug);
    if (fallback) return fallback;
    throw err;
  }
}
