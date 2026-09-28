import { useState, useEffect } from "react";
import { getDeals } from "../data/mockProducts";

function useCountdown() {
  const [t, setT] = useState("");
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const end = new Date();
      end.setHours(23, 59, 59, 0); // ends midnight, resets daily
      const diff = end - now;
      const h = String(Math.floor(diff / 3.6e6)).padStart(2, "0");
      const m = String(Math.floor((diff % 3.6e6) / 6e4)).padStart(2, "0");
      const s = String(Math.floor((diff % 6e4) / 1e3)).padStart(2, "0");
      setT(`${h}:${m}:${s}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

export default function FlashDeals({ onOpen }) {
  const items = getDeals();
  const t = useCountdown();
  return (
    <section className="bg-ivory px-4 py-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex items-center justify-between rounded-xl bg-gradient-to-r from-red-600 to-orange-500 px-4 py-3">
          <div className="flex items-center gap-2 text-white">
            <span className="text-lg">⚡</span>
            <h2 className="font-bold uppercase tracking-wide">Deals of the day</h2>
          </div>
          <div className="flex items-center gap-2 text-white">
            <span className="text-xs">Ends in</span>
            <span className="rounded bg-black/30 px-2 py-1 font-mono text-sm font-bold">{t}</span>
          </div>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {items.map((p) => {
            const off = Math.round(((p.compareAt - p.price) / p.compareAt) * 100);
            return (
              <button key={p.id} onClick={() => onOpen(p.slug)} className="group w-36 shrink-0 text-left sm:w-40">
                <div className="relative overflow-hidden rounded-xl border border-ink/10 bg-white">
                  <div className="aspect-square overflow-hidden">
                    <img src={p.media[0]} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <span className="absolute left-1.5 top-1.5 rounded bg-red-600 px-1.5 py-0.5 text-[10px] font-bold text-white">-{off}%</span>
                </div>
                <p className="mt-1.5 line-clamp-1 text-xs text-ink/70">{p.name}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold text-red-400">${p.price.toFixed(2)}</span>
                  <span className="text-[10px] text-ink0 line-through">${p.compareAt.toFixed(2)}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}