const TILES = [
  {
    cat: "Women",
    label: "Women's Edit",
    blurb: "Dresses, jewellery, and pieces that turn heads.",
    img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=900&q=80",
  },
  {
    cat: "Hair",
    label: "Hair",
    blurb: "Extensions and pieces for length, body, and shine.",
    img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=900&q=80",
  },
  {
    cat: "Men",
    label: "Men's",
    blurb: "Layers and essentials that quietly pull a fit together.",
    img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=900&q=80",
  },
];

export default function CategoryTiles({ onCategory }) {
  return (
    <section className="bg-[#f5f2ec] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <span className="text-sm uppercase tracking-[0.2em] text-amber-700">Shop by category</span>
          <h2 className="mt-3 font-serif text-4xl text-neutral-900 lg:text-5xl">Find your thing.</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {TILES.map((t) => (
            <button
              key={t.cat}
              onClick={() => onCategory(t.cat)}
              className="group relative overflow-hidden rounded-3xl text-left"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={t.img}
                  alt={t.label}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl text-white">{t.label}</h3>
                <p className="mt-1 text-sm text-neutral-200">{t.blurb}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-emerald-300 transition-transform group-hover:translate-x-1">
                  Shop now →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}