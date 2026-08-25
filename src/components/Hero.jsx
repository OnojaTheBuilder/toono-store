import { useState, useEffect } from "react";
import { getAll } from "../data/mockProducts";

export default function Hero({ onExplore }) {
  const products = getAll();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % products.length), 4000);
    return () => clearInterval(t);
  }, [products.length]);

  const featured = products[active];

  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-neutral-950 text-neutral-50">
      <div className="pointer-events-none absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-emerald-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pt-16 pb-16 lg:grid-cols-12 lg:pt-24">
        <div className="lg:col-span-6 flex flex-col justify-center">
          <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-neutral-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            New season live
          </span>

          <h1 className="font-serif text-6xl leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.5rem]">
            Wear the
            <span className="block italic text-emerald-400">difference.</span>
          </h1>

          <p className="mt-6 max-w-md text-lg text-neutral-400">
            Fashion, hair, and essentials, chosen without compromise. For the
            people who notice the details everyone else misses.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onExplore(featured.slug)}
              className="group relative overflow-hidden rounded-full bg-neutral-50 px-8 py-4 text-sm font-semibold text-neutral-950 transition-transform active:scale-95"
            >
              <span className="relative z-10">Shop the drop</span>
              <span className="absolute inset-0 -translate-x-full bg-emerald-400 transition-transform duration-300 group-hover:translate-x-0" />
            </button>
            <button
              onClick={() => onExplore(featured.slug)}
              className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold transition-colors hover:bg-white/5"
            >
              View the piece
            </button>
          </div>

          <div className="mt-12 flex gap-2">
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1 rounded-full transition-all ${
                  i === active ? "w-10 bg-emerald-400" : "w-4 bg-white/20"
                }`}
                aria-label={`Feature ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 flex items-center justify-center">
          <button onClick={() => onExplore(featured.slug)} className="group relative w-full max-w-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10">
              {products.map((p, i) => (
                <img
                  key={p.id}
                  src={p.media[0]}
                  alt={p.name}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                    i === active ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <span className="mb-2 inline-block rounded-full bg-emerald-400 px-3 py-1 text-xs font-bold text-neutral-950">
                  {featured.badge}
                </span>
                <h3 className="font-serif text-2xl">{featured.name}</h3>
                <p className="text-sm text-neutral-300">{featured.tagline}</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-lg font-semibold">${featured.price.toFixed(2)}</span>
                  <span className="text-sm text-neutral-500 line-through">
                    ${featured.compareAt.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -left-4 top-8 rounded-2xl border border-white/10 bg-neutral-900/90 px-4 py-3 backdrop-blur transition-transform group-hover:-translate-y-1">
              <p className="text-xs text-neutral-400">Only</p>
              <p className="font-serif text-2xl text-emerald-400">{featured.stock} left</p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}