import { useState } from "react";
import { CATEGORIES } from "../data/mockProducts";

const ICONS = {
  Electronics: "🎧", "Home & Living": "🏠", Fashion: "👜", Beauty: "💄",
  Gadgets: "📱", Fitness: "🏋️", Kids: "🧸", Pets: "🐾",
};

export default function MarketHero({ onCategory, onSearch }) {
  const [q, setQ] = useState("");
  const cats = CATEGORIES.filter((c) => c !== "All");

  const submit = () => onSearch(q.trim());

  return (
    <section className="bg-gradient-to-b from-neutral-950 to-neutral-900 px-6 pt-14 pb-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Everything you need,<br />
            <span className="italic text-clay">one place.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-ink/60">
            Thousands of products across tech, home, beauty, and more. Fair prices,
            fast shipping, delivered to your door.
          </p>
        </div>

        {/* Search bar */}
        <div className="mx-auto mt-8 flex max-w-2xl overflow-hidden rounded-full border border-ink/15 bg-white/5 p-1.5">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            placeholder="Search for anything…"
            className="flex-1 bg-transparent px-5 py-3 text-white placeholder-neutral-500 outline-none"
          />
          <button onClick={submit} className="rounded-full bg-clay px-7 py-3 font-semibold text-ivory transition-transform active:scale-95">
            Search
          </button>
        </div>

        {/* Category launch tiles */}
        <div className="mt-10 grid grid-cols-4 gap-3 sm:gap-4 lg:grid-cols-8">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => onCategory(c)}
              className="group flex flex-col items-center gap-2 rounded-2xl border border-ink/10 bg-white/5 p-4 transition-colors hover:border-emerald-400/50 hover:bg-white/10"
            >
              <span className="text-2xl">{ICONS[c]}</span>
              <span className="text-center text-xs font-medium text-ink/70 group-hover:text-white">{c}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}