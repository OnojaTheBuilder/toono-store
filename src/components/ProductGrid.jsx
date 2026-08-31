import { getByCategory, getAll } from "../data/mockProducts";

export default function ProductGrid({ category, search = "", onOpen, onClearSearch }) {
  let items;
  let heading;

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
    heading = category === "All" ? "All products" : category;
  }

  return (
    <section className="bg-[#faf8f4] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-serif text-4xl text-neutral-900 lg:text-5xl">{heading}</h2>
          <span className="text-sm text-neutral-500">{items.length} items</span>
        </div>

        {items.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-neutral-300 bg-white p-16 text-center">
            <p className="text-lg text-neutral-600">Nothing matched that.</p>
            <button onClick={onClearSearch} className="mt-4 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white">
              Browse everything
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {items.map((p) => (
              <button key={p.id} onClick={() => onOpen(p.slug)} className="group text-left">
                <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                  <div className="aspect-square overflow-hidden">
                    <img src={p.media[0]} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-900 backdrop-blur">{p.badge}</span>
                </div>
                <div className="mt-3">
                  <h3 className="line-clamp-1 font-medium text-neutral-900">{p.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-amber-500">★ <span className="text-neutral-500">{p.rating} ({p.reviewCount})</span></div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-bold text-neutral-900">${p.price.toFixed(2)}</span>
                    <span className="text-xs text-neutral-400 line-through">${p.compareAt.toFixed(2)}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}