import { getByCategory, getAll } from "../data/mockProducts";

export default function DenseGrid({ category, search = "", onOpen, onClearSearch, title }) {
  let items;
  let heading = title || "Explore all";

  if (search) {
    const q = search.toLowerCase();
    items = getAll().filter(
      (p) => p.name.toLowerCase().includes(q) ||
             p.category.toLowerCase().includes(q) ||
             p.tagline.toLowerCase().includes(q)
    );
    heading = `Results for "${search}"`;
  } else {
    items = getByCategory(category);
    if (category !== "All") heading = category;
  }

  return (
    <section className="bg-neutral-950 px-4 py-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-lg font-bold text-white">{heading}</h2>
          <span className="text-xs text-neutral-500">{items.length} items</span>
        </div>

        {items.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/15 p-12 text-center">
            <p className="text-neutral-400">Nothing matched that.</p>
            <button onClick={onClearSearch} className="mt-3 rounded-full bg-white px-5 py-2 text-sm font-semibold text-neutral-950">Browse everything</button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
            {items.map((p) => {
              const off = Math.round(((p.compareAt - p.price) / p.compareAt) * 100);
              return (
                <button key={p.id} onClick={() => onOpen(p.slug)} className="group text-left">
                  <div className="relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
                    <div className="aspect-square overflow-hidden">
                      <img src={p.media[0]} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <span className="absolute left-1.5 top-1.5 rounded bg-red-600 px-1.5 py-0.5 text-[10px] font-bold text-white">-{off}%</span>
                  </div>
                  <div className="mt-1.5">
                    <p className="line-clamp-2 text-xs leading-tight text-neutral-300">{p.name}</p>
                    <div className="mt-1 flex items-baseline gap-1">
                      <span className="text-sm font-bold text-white">${p.price.toFixed(2)}</span>
                      <span className="text-[10px] text-neutral-500 line-through">${p.compareAt.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center gap-0.5 text-[10px] text-amber-500">★ <span className="text-neutral-500">{p.rating} · {p.reviewCount} sold</span></div>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}