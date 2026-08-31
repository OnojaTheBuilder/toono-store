import { CATEGORIES } from "../data/mockProducts";

const TILE_IMG = {
  Electronics: "photo-1498049794561-7780e7231661",
  "Home & Living": "photo-1586023492125-27b2c045efd7",
  Fashion: "photo-1445205170230-053b83016050",
  Beauty: "photo-1596462502278-27bfdc403348",
  Gadgets: "photo-1512686096451-a15c19314d59",
  Fitness: "photo-1517836357463-d25dfeac3438",
  Kids: "photo-1558877385-8c1b8e6e5b9e",
  Pets: "photo-1583512603805-3cc6b41f3edb",
};

export default function CategoryTiles({ onCategory }) {
  const cats = CATEGORIES.filter((c) => c !== "All");
  return (
    <section className="bg-[#f5f2ec] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <span className="text-sm uppercase tracking-[0.2em] text-amber-700">Browse departments</span>
          <h2 className="mt-3 font-serif text-4xl text-neutral-900 lg:text-5xl">Shop by category</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {cats.map((c) => (
            <button key={c} onClick={() => onCategory(c)} className="group relative overflow-hidden rounded-3xl text-left">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={`https://images.unsplash.com/${TILE_IMG[c]}?w=700&q=80`} alt={c}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-serif text-xl text-white">{c}</h3>
                <span className="mt-1 inline-block text-sm font-semibold text-emerald-300 transition-transform group-hover:translate-x-1">Shop →</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}