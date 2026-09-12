// ALL logistics pricing lives here. Client sends real numbers, edit this file.

// --- PRICING MODEL ---
// price = max(minimumCharge, baseFee + straightLineKm * roadFactor * ratePerKm) * sizeMultiplier
// Return trip is baked into ratePerKm (rate set high enough to cover the drive back).
export const PRICING = {
  baseFee: 5,          // client's callout fee to arrive
  ratePerKm: 2.0,      // per km, includes return-trip cost
  roadFactor: 1.3,     // approximates real road distance from straight-line
  minimumCharge: 15,   // no job is worth less than this
};

// Zone pricing kept as an alternative the client can still preview.
export const ZONES = [
  { id: "local", name: "Within city", price: 15 },
  { id: "near", name: "Neighbouring town (under 30km)", price: 30 },
  { id: "regional", name: "Regional (30–100km)", price: 60 },
  { id: "long", name: "Long distance (100km+)", price: 120 },
];

export const SIZE_TIERS = [
  { id: "small", name: "Small (envelope / shoebox)", multiplier: 1 },
  { id: "medium", name: "Medium (carry-on size)", multiplier: 1.4 },
  { id: "large", name: "Large (suitcase+)", multiplier: 1.9 },
  { id: "xl", name: "Extra large (furniture / bulk)", multiplier: 2.6 },
];

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

// The main quote formula. Straight-line distance in, price out.
export function calcPrice(km, sizeMultiplier) {
  const { baseFee, ratePerKm, roadFactor, minimumCharge } = PRICING;
  const distanceCost = km * roadFactor * ratePerKm;
  const beforeMin = baseFee + distanceCost;
  const withMin = Math.max(minimumCharge, beforeMin);
  return +(withMin * sizeMultiplier).toFixed(2);
}

export const BUSINESS = {
  name: "TOONO Logistics",
  tagline: "Deliveries, done properly.",
  phone: "+1 (000) 000-0000",
  email: "orders@toono.example",
  hours: "Mon–Sat, 7am–8pm ET",
  area: "Ontario, Canada",
};

export const STATS = [
  { n: "2,400+", l: "Deliveries completed" },
  { n: "8", l: "Cities covered" },
  { n: "99%", l: "On-time rate" },
  { n: "<24h", l: "Avg. turnaround" },
];

export const COVERAGE = [
  "Toronto", "Mississauga", "Hamilton", "Kitchener",
  "London", "Ottawa", "Kingston", "Barrie",
];

export const TESTIMONIALS = [
  { name: "Bola A.", role: "Small business owner", text: "I ship my orders through TOONO every week. Always on time, always careful. Feels like having my own delivery guy." },
  { name: "Grace M.", role: "Boutique owner", text: "The quote is instant and the price is fair. No hidden fees, no runaround. Booking takes a minute." },
  { name: "Kevin T.", role: "Regular customer", text: "Sent furniture across the region and it arrived without a scratch. Genuinely reliable service." },
];

export const FAQ = [
  { q: "How fast can you deliver?", a: "Local runs are often same-day if booked before noon. Regional and long-distance deliveries are typically next day, confirmed when you book." },
  { q: "How is the price calculated?", a: "A base callout fee plus a per-kilometre rate for the trip, adjusted for package size. There's a minimum charge on very short runs. You see the full price before you book, no surprise fees." },
  { q: "What can you carry?", a: "Documents, parcels, and larger items right up to furniture. Pick the size that matches your item, or send a note if you're unsure." },
  { q: "How do I pay?", a: "For now, payment is arranged directly on pickup or delivery. Online payment is coming soon." },
  { q: "Do you handle fragile items?", a: "Yes. Flag it in your booking notes and it's handled with extra care, start to finish." },
];