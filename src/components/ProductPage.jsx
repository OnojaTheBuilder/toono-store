import { useState, useEffect } from "react";
import { getProduct, socialProof } from "../data/mockProducts";
import { useCart } from "../context/CartContext";

function useShipCountdown(cutoffHour) {
  const [remaining, setRemaining] = useState("");
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const cutoff = new Date();
      cutoff.setHours(cutoffHour, 0, 0, 0);
      if (now > cutoff) cutoff.setDate(cutoff.getDate() + 1);
      const diff = cutoff - now;
      const h = String(Math.floor(diff / 3.6e6)).padStart(2, "0");
      const m = String(Math.floor((diff % 3.6e6) / 6e4)).padStart(2, "0");
      const s = String(Math.floor((diff % 6e4) / 1e3)).padStart(2, "0");
      setRemaining(`${h}:${m}:${s}`);
    };
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, [cutoffHour]);
  return remaining;
}

export default function ProductPage({ slug }) {
  const product = getProduct(slug);
  const { addItem } = useCart();

  const [mediaIdx, setMediaIdx] = useState(0);
  const [color, setColor] = useState(product?.colors[0]?.name);
  const [size, setSize] = useState(null);
  const [proofIdx, setProofIdx] = useState(0);
  const [showProof, setShowProof] = useState(false);

  const countdown = useShipCountdown(product?.shipCutoffHour ?? 17);

  useEffect(() => {
    const cycle = () => {
      setShowProof(true);
      setTimeout(() => setShowProof(false), 4000);
      setProofIdx((i) => (i + 1) % socialProof.length);
    };
    cycle();
    const t = setInterval(cycle, 6000);
    return () => clearInterval(t);
  }, []);

  if (!product) return <div className="p-10 text-center text-neutral-50">Product not found.</div>;

  const proof = socialProof[proofIdx];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-2">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10">
            <img src={product.media[mediaIdx]} alt={product.name} className="h-full w-full object-cover" />
            <span className="absolute left-4 top-4 rounded-full bg-emerald-400 px-3 py-1 text-xs font-bold text-neutral-950">
              {product.badge}
            </span>
          </div>
          <div className="mt-4 flex gap-3">
            {product.media.map((m, i) => (
              <button
                key={i}
                onClick={() => setMediaIdx(i)}
                className={`h-20 w-20 overflow-hidden rounded-xl border-2 transition-all ${
                  i === mediaIdx ? "border-emerald-400" : "border-transparent opacity-60"
                }`}
              >
                <img src={m} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-sm text-amber-400">
            {"★".repeat(Math.round(product.rating))}
            <span className="text-neutral-400">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          <h1 className="mt-3 font-serif text-4xl lg:text-5xl">{product.name}</h1>
          <p className="mt-2 text-lg text-neutral-400">{product.tagline}</p>

          <div className="mt-5 flex items-baseline gap-3">
            <span className="text-3xl font-semibold">${product.price.toFixed(2)}</span>
            <span className="text-lg text-neutral-500 line-through">${product.compareAt.toFixed(2)}</span>
            <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm font-semibold text-emerald-400">
              Save ${(product.compareAt - product.price).toFixed(2)}
            </span>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-4">
            <p className="text-sm text-amber-200">
              Order in <span className="font-mono font-bold">{countdown}</span> to ship today.
              Only <span className="font-bold">{product.stock}</span> left in stock.
            </p>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-amber-400"
                style={{ width: `${Math.min(100, (product.stock / 20) * 100)}%` }}
              />
            </div>
          </div>

          <div className="mt-8">
            <p className="mb-3 text-sm font-medium text-neutral-300">
              Color: <span className="text-neutral-500">{color}</span>
            </p>
            <div className="flex gap-3">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setColor(c.name)}
                  className={`h-10 w-10 rounded-full border-2 transition-transform active:scale-90 ${
                    color === c.name ? "border-emerald-400 scale-110" : "border-white/20"
                  }`}
                  style={{ backgroundColor: c.hex }}
                  aria-label={c.name}
                />
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="mb-3 text-sm font-medium text-neutral-300">Size</p>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`min-w-[3rem] rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                    size === s
                      ? "border-emerald-400 bg-emerald-400 text-neutral-950"
                      : "border-white/15 hover:border-white/40"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addItem(product, color, size || product.sizes[0])}
            className="mt-8 w-full rounded-full bg-neutral-50 py-4 text-base font-semibold text-neutral-950 transition-transform active:scale-[0.98] hover:bg-emerald-400"
          >
            Add to cart · ${product.price.toFixed(2)}
          </button>

          <ul className="mt-6 space-y-2">
            {product.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-sm text-neutral-400">
                <span className="text-emerald-400">✓</span> {h}
              </li>
            ))}
          </ul>

          <div className="mt-10 border-t border-white/10 pt-8">
            <h3 className="font-serif text-2xl">The story</h3>
            <p className="mt-3 leading-relaxed text-neutral-400">{product.story}</p>
          </div>
        </div>
      </div>

      <div
        className={`fixed bottom-6 left-6 z-40 flex items-center gap-3 rounded-2xl border border-white/10 bg-neutral-900/95 px-4 py-3 shadow-2xl backdrop-blur transition-all duration-500 ${
          showProof ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        <p className="text-sm">
          <span className="font-semibold">{proof.name}</span>{" "}
          <span className="text-neutral-400">{proof.action}</span>
        </p>
      </div>
    </div>
  );
}