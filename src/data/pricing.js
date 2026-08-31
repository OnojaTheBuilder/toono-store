// ALL logistics pricing lives here. When the client sends real numbers,
// edit this file only.

// --- MODEL 1: ZONE PRICING (fixed price per area) ---
export const ZONES = [
  { id: "local", name: "Within city", price: 15 },
  { id: "near", name: "Neighbouring town (under 30km)", price: 30 },
  { id: "regional", name: "Regional (30–100km)", price: 60 },
  { id: "long", name: "Long distance (100km+)", price: 120 },
];

// --- MODEL 2: PER-KM PRICING ---
export const PER_KM = {
  baseFee: 10,
  ratePerKm: 1.5,
};

// Package size multipliers, applied on top of either model.
export const SIZE_TIERS = [
  { id: "small", name: "Small (envelope / shoebox)", multiplier: 1 },
  { id: "medium", name: "Medium (carry-on size)", multiplier: 1.4 },
  { id: "large", name: "Large (suitcase+)", multiplier: 1.9 },
];

// Demo locations for the per-km straight-line calc.
export const LOCATIONS = [
  { name: "Toronto, ON", lat: 43.6532, lng: -79.3832 },
  { name: "Mississauga, ON", lat: 43.589, lng: -79.6441 },
  { name: "Hamilton, ON", lat: 43.2557, lng: -79.8711 },
  { name: "Kitchener, ON", lat: 43.4516, lng: -80.4925 },
  { name: "London, ON", lat: 42.9849, lng: -81.2453 },
  { name: "Ottawa, ON", lat: 45.4215, lng: -75.6972 },
  { name: "Kingston, ON", lat: 44.2312, lng: -76.486 },
  { name: "Barrie, ON", lat: 44.3894, lng: -79.6903 },
];

// Straight-line (Haversine) distance in km. Swap for a routing API later.
export function distanceKm(a, b) {
  const R = 6371;
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return Math.round(2 * R * Math.asin(Math.sqrt(h)));
}

export const BUSINESS = {
  name: "TOONO Logistics",
  phone: "+1 (000) 000-0000",
  email: "orders@toono.example",
  hours: "Mon–Sat, 7am–8pm ET",
  area: "Ontario, Canada",
};