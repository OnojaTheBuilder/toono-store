import { getTrending } from "../data/mockProducts";

export default function TrendingRow({ onOpen }) {
  const items = getTrending();
  return (
    <section className="bg-white px-6 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Trending now</span>
          <h2 className="mt-1 font-serif text-3xl text-neutral-900 lg:text-4xl">What everyone's buying</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {items.map((p) => (
            <button key={p.id} onClick={() => onOpen(p.slug)} className="group w-44 shrink-0 text-left sm:w-52">
              <div className="relative overflow-hidden rounded-2xl border border-neutral-200">
                <div className="aspect-square overflow-hidden">
                  <img src={p.media[0]} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <span className="absolute left-2 top-2 rounded-full bg-neutral-900/85 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">{p.badge}</span>
              </div>
              <h3 className="mt-2 line-clamp-1 text-sm font-medium text-neutral-900">{p.name}</h3>
              <div className="flex items-center gap-1 text-xs text-amber-500">★ <span className="text-neutral-500">{p.rating} ({p.reviewCount})</span></div>
              <span className="text-base font-bold text-neutral-900">${p.price.toFixed(2)}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}