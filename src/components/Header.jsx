import { useCart } from "../context/CartContext";

const CATEGORIES = ["All", "Women", "Hair", "Men"];

export default function Header({ activeCat, onCategory, onHome, onNavigate }) {
  const { count, openCart } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Wordmark */}
        <button onClick={onHome} className="font-serif text-2xl tracking-[0.3em] text-neutral-50">
          TOONO
        </button>

        {/* Category + page nav */}
        <nav className="hidden gap-8 md:flex">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => onCategory(c)}
              className={`text-sm uppercase tracking-wider transition-colors ${
                activeCat === c ? "text-emerald-400" : "text-neutral-400 hover:text-neutral-50"
              }`}
            >
              {c}
            </button>
          ))}
          <button onClick={() => onNavigate({ page: "about" })} className="text-sm uppercase tracking-wider text-neutral-400 hover:text-neutral-50">About</button>
          <button onClick={() => onNavigate({ page: "contact" })} className="text-sm uppercase tracking-wider text-neutral-400 hover:text-neutral-50">Contact</button>
          <button onClick={() => onNavigate({ page: "logistics" })} className="text-sm uppercase tracking-wider text-emerald-400 hover:text-emerald-300">Logistics</button>
        </nav>

        {/* Cart */}
        <button
          onClick={openCart}
          className="relative flex items-center gap-2 rounded-full bg-neutral-50 px-5 py-2.5 text-sm font-semibold text-neutral-950 transition-transform active:scale-95"
        >
          Bag
          {count > 0 && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400 text-xs">
              {count}
            </span>
          )}
        </button>
      </div>

      {/* Mobile nav row */}
      <nav className="flex gap-6 overflow-x-auto px-6 pb-3 md:hidden">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => onCategory(c)}
            className={`whitespace-nowrap text-sm uppercase tracking-wider ${
              activeCat === c ? "text-emerald-400" : "text-neutral-400"
            }`}
          >
            {c}
          </button>
        ))}
        <button onClick={() => onNavigate({ page: "about" })} className="whitespace-nowrap text-sm uppercase tracking-wider text-neutral-400">About</button>
        <button onClick={() => onNavigate({ page: "contact" })} className="whitespace-nowrap text-sm uppercase tracking-wider text-neutral-400">Contact</button>
        <button onClick={() => onNavigate({ page: "logistics" })} className="whitespace-nowrap text-sm uppercase tracking-wider text-emerald-400">Logistics</button>
      </nav>
    </header>
  );
}