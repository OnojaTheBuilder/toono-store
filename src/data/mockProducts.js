// TOONO demo data. Placeholder images from Unsplash.
// Swap for the client's real photos later. Categories mirror his mix:
// Women's fashion, Hair, Men's.

export const products = [
  {
    id: 1,
    slug: "aurelia-silk-slip-dress",
    name: "Aurelia Silk Slip Dress",
    tagline: "The dress that does the talking.",
    price: 78.0,
    compareAt: 130.0,
    category: "Women",
    rating: 4.8,
    reviewCount: 142,
    stock: 6,
    badge: "Bestseller",
    shipCutoffHour: 17,
    story:
      "Bias-cut, oyster-smooth, and cut to move with you. The kind of piece that turns a plain evening into an occasion.",
    media: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&q=80",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=1200&q=80",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=1200&q=80",
    ],
    colors: [
      { name: "Champagne", hex: "#e8d5b5" },
      { name: "Onyx", hex: "#111111" },
      { name: "Rosewood", hex: "#7a4a48" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    highlights: ["Free shipping over $100", "30-day returns", "True to size"],
  },
  {
    id: 2,
    slug: "halo-clip-in-extensions",
    name: "Halo Clip-In Extensions",
    tagline: "Length and body in sixty seconds.",
    price: 64.0,
    compareAt: 99.0,
    category: "Hair",
    rating: 4.9,
    reviewCount: 308,
    stock: 9,
    badge: "New drop",
    shipCutoffHour: 17,
    story:
      "One-piece halo design, no clips, no damage. Real-feel fibre that blends in and stays put all day.",
    media: [
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=1200&q=80",
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=1200&q=80",
    ],
    colors: [
      { name: "Jet Black", hex: "#0d0d0d" },
      { name: "Chestnut", hex: "#6b4423" },
      { name: "Honey", hex: "#b5895b" },
    ],
    sizes: ['14"', '18"', '22"'],
    highlights: ["Free shipping over $100", "Heat-safe to 180°C", "Reusable"],
  },
  {
    id: 3,
    slug: "meridian-mens-overshirt",
    name: "Meridian Men's Overshirt",
    tagline: "Throw it on. Look sorted.",
    price: 82.0,
    compareAt: 135.0,
    category: "Men",
    rating: 4.7,
    reviewCount: 96,
    stock: 11,
    badge: "Almost gone",
    shipCutoffHour: 17,
    story:
      "Structured cotton twill that layers over a tee or under a coat. The piece that quietly pulls a fit together.",
    media: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=1200&q=80",
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=1200&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1200&q=80",
    ],
    colors: [
      { name: "Olive", hex: "#4a5320" },
      { name: "Stone", hex: "#a89f91" },
      { name: "Charcoal", hex: "#36393d" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    highlights: ["Free shipping over $100", "Heavyweight cotton", "Relaxed fit"],
  },
  {
    id: 4,
    slug: "seraphine-gold-hoops",
    name: "Seraphine Gold Hoops",
    tagline: "The finishing touch, every time.",
    price: 38.0,
    compareAt: 65.0,
    category: "Women",
    rating: 4.8,
    reviewCount: 187,
    stock: 14,
    badge: "Restocked",
    shipCutoffHour: 17,
    story:
      "Lightweight, tarnish-resistant, and the exact weight that lets you forget you're wearing them.",
    media: [
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=1200&q=80",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1200&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80",
    ],
    colors: [
      { name: "Gold", hex: "#d4af37" },
      { name: "Silver", hex: "#c0c0c0" },
    ],
    sizes: ["Small", "Medium", "Large"],
    highlights: ["Free shipping over $100", "Tarnish-resistant", "Hypoallergenic"],
  },
];

export const getProduct = (slug) => products.find((p) => p.slug === slug);
export const getAll = () => products;
export const getByCategory = (cat) =>
  cat === "All" ? products : products.filter((p) => p.category === cat);

export const socialProof = [
  { name: "Amara in Toronto", action: "just bought the Aurelia Slip Dress" },
  { name: "Chloe from Vancouver", action: "added Halo Extensions to cart" },
  { name: "Daniel in Calgary", action: "copped the Meridian Overshirt" },
  { name: "Priya from Montreal", action: "is viewing this right now" },
  { name: "Sarah in Ottawa", action: "left a 5-star review" },
];

export const FREE_SHIP_THRESHOLD = 100;