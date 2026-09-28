import { useCart } from "../context/CartContext";
import { CATEGORIES } from "../data/mockProducts";

export default function Header({ activeCat, onCategory, onHome, onNavigate }) {
  const { count, openCart } = useCart();
  const cats = CATEGORIES;

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-ivory/90 backdrop-blur-md">
      {/* Top row */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button onClick={onHome} className="font-serif text-2xl tracking-[0.3em] text-ink">TOONO</button>

        {/* Desktop page nav */}
        <nav className="hidden gap-6 md:flex">
          <button onClick={onHome} className="text-sm uppercase tracking-wider text-ink/60 hover:text-ink">Home</button>
          <button onClick={() => onNavigate({ page: "about" })} className="text-sm uppercase tracking-wider text-ink/60 hover:text-ink">About</button>
          <button onClick={() => onNavigate({ page: "contact" })} className="text-sm uppercase tracking-wider text-ink/60 hover:text-ink">Contact</button>
          <button onClick={() => onNavigate({ page: "logistics" })} className="rounded-full bg-clay px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-ivory transition-transform active:scale-95 hover:bg-emerald-300">Logistics</button>
        </nav>

        <div className="flex items-center gap-2">
          {/* Mobile-only Logistics button, always visible next to cart */}
          <button onClick={() => onNavigate({ page: "logistics" })}
            className="rounded-full bg-clay px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-ivory md:hidden">
            Logistics
          </button>

          <button onClick={openCart} className="relative flex items-center gap-2 rounded-full bg-neutral-50 px-5 py-2.5 text-sm font-semibold text-ivory transition-transform active:scale-95">
            Cart
            {count > 0 && <span className="flex h-5 w-5 items-center justify-center rounded-full bg-clay text-xs">{count}</span>}
          </button>
        </div>
      </div>

      {/* Mobile page links row (About / Contact / Home) */}
      <div className="flex gap-5 border-t border-white/5 px-6 py-2 md:hidden">
        <button onClick={onHome} className="text-sm text-ink/60">Home</button>
        <button onClick={() => onNavigate({ page: "about" })} className="text-sm text-ink/60">About</button>
        <button onClick={() => onNavigate({ page: "contact" })} className="text-sm text-ink/60">Contact</button>
      </div>

      {/* Department strip (all sizes) */}
      <nav className="flex gap-5 overflow-x-auto border-t border-white/5 px-6 py-2.5">
        {cats.map((c) => (
          <button key={c} onClick={() => onCategory(c)}
            className={`whitespace-nowrap text-sm tracking-wide transition-colors ${
              activeCat === c ? "font-semibold text-clay" : "text-ink/60 hover:text-ink"
            }`}>
            {c}
          </button>
        ))}
      </nav>
    </header>
  );
}