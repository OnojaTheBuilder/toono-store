import { getDeals } from "../data/mockProducts";

export default function DealsRow({ onOpen }) {
  const items = getDeals();
  return (
    <section className="bg-[#faf8f4] px-6 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-red-600">🔥 Today's deals</span>
            <h2 className="mt-1 font-serif text-3xl text-neutral-900 lg:text-4xl">Biggest savings</h2>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {items.map((p) => {
            const off = Math.round(((p.compareAt - p.price) / p.compareAt) * 100);
            return (
              <button key={p.id} onClick={() => onOpen(p.slug)} className="group w-44 shrink-0 text-left sm:w-52">
                <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                  <div className="aspect-square overflow-hidden">
                    <img src={p.media[0]} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <span className="absolute left-2 top-2 rounded-full bg-red-600 px-2.5 py-1 text-xs font-bold text-white">-{off}%</span>
                </div>
                <h3 className="mt-2 line-clamp-1 text-sm font-medium text-neutral-900">{p.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-base font-bold text-red-600">${p.price.toFixed(2)}</span>
                  <span className="text-xs text-neutral-400 line-through">${p.compareAt.toFixed(2)}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}