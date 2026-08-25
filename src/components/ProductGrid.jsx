import { getByCategory } from "../data/mockProducts";

export default function ProductGrid({ category, onOpen }) {
  const items = getByCategory(category);

  return (
    <section className="bg-[#faf8f4] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-serif text-4xl text-neutral-900 lg:text-5xl">
            {category === "All" ? "The collection" : category}
          </h2>
          <span className="text-sm text-neutral-500">{items.length} pieces</span>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {items.map((p, i) => (
            <button
              key={p.id}
              onClick={() => onOpen(p.slug)}
              className={`group text-left ${i === 0 ? "col-span-2 row-span-2 md:col-span-2" : ""}`}
            >
              <div className="relative overflow-hidden rounded-2xl border border-neutral-200">
                <div className={`${i === 0 ? "aspect-[4/3]" : "aspect-[3/4]"} overflow-hidden`}>
                  <img
                    src={p.media[0]}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-900 backdrop-blur">
                  {p.badge}
                </span>
              </div>
              <div className="mt-3">
                <h3 className="font-medium text-neutral-900">{p.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-neutral-900">${p.price.toFixed(2)}</span>
                  <span className="text-xs text-neutral-400 line-through">${p.compareAt.toFixed(2)}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}