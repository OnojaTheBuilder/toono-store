import { useCart } from "../context/CartContext";
import { CATEGORIES } from "../data/mockProducts";

export default function Header({ activeCat, onCategory, onHome, onNavigate }) {
  const { count, openCart } = useCart();
  const cats = CATEGORIES;

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/90 backdrop-blur-md">
      {/* Top row */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button onClick={onHome} className="font-serif text-2xl tracking-[0.3em] text-neutral-50">TOONO</button>

        {/* Desktop page nav */}
        <nav className="hidden gap-6 md:flex">
          <button onClick={onHome} className="text-sm uppercase tracking-wider text-neutral-400 hover:text-neutral-50">Home</button>
          <button onClick={() => onNavigate({ page: "about" })} className="text-sm uppercase tracking-wider text-neutral-400 hover:text-neutral-50">About</button>
          <button onClick={() => onNavigate({ page: "contact" })} className="text-sm uppercase tracking-wider text-neutral-400 hover:text-neutral-50">Contact</button>
          <button onClick={() => onNavigate({ page: "logistics" })} className="rounded-full bg-emerald-400 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-neutral-950 transition-transform active:scale-95 hover:bg-emerald-300">Logistics</button>
        </nav>

        <div className="flex items-center gap-2">
          {/* Mobile-only Logistics button, always visible next to cart */}
          <button onClick={() => onNavigate({ page: "logistics" })}
            className="rounded-full bg-emerald-400 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-950 md:hidden">
            Logistics
          </button>

          <button onClick={openCart} className="relative flex items-center gap-2 rounded-full bg-neutral-50 px-5 py-2.5 text-sm font-semibold text-neutral-950 transition-transform active:scale-95">
            Cart
            {count > 0 && <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400 text-xs">{count}</span>}
          </button>
        </div>
      </div>

      {/* Mobile page links row (About / Contact / Home) */}
      <div className="flex gap-5 border-t border-white/5 px-6 py-2 md:hidden">
        <button onClick={onHome} className="text-sm text-neutral-400">Home</button>
        <button onClick={() => onNavigate({ page: "about" })} className="text-sm text-neutral-400">About</button>
        <button onClick={() => onNavigate({ page: "contact" })} className="text-sm text-neutral-400">Contact</button>
      </div>

      {/* Department strip (all sizes) */}
      <nav className="flex gap-5 overflow-x-auto border-t border-white/5 px-6 py-2.5">
        {cats.map((c) => (
          <button key={c} onClick={() => onCategory(c)}
            className={`whitespace-nowrap text-sm tracking-wide transition-colors ${
              activeCat === c ? "font-semibold text-emerald-400" : "text-neutral-400 hover:text-neutral-50"
            }`}>
            {c}
          </button>
        ))}
      </nav>
    </header>
  );
}