const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";

export async function fetchBikes() {
  const res = await fetch(`${API_BASE}/api/bikes`);
  if (!res.ok) throw new Error("Failed to fetch bikes");
  return res.json();
}

export async function fetchBike(slug) {
  const res = await fetch(`${API_BASE}/api/bikes/${slug}`);
  if (!res.ok) throw new Error("Failed to fetch bike");
  return res.json();
}
