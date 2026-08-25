import { getAll } from "../data/mockProducts";

// A horizontal-scroll "collection" strip on a light background.
export default function FeaturedStrip({ onOpen }) {
  const items = getAll();
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <span className="text-sm uppercase tracking-[0.2em] text-amber-700">Just landed</span>
            <h2 className="mt-3 font-serif text-4xl text-neutral-900 lg:text-5xl">New this season</h2>
          </div>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-4">
          {items.map((p) => (
            <button
              key={p.id}
              onClick={() => onOpen(p.slug)}
              className="group w-64 shrink-0 text-left"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={p.media[0]}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-900">
                  {p.badge}
                </span>
              </div>
              <h3 className="mt-3 font-medium text-neutral-900">{p.name}</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-semibold text-neutral-900">${p.price.toFixed(2)}</span>
                <span className="text-xs text-neutral-400 line-through">${p.compareAt.toFixed(2)}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}