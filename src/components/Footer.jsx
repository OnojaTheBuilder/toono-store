export default function Footer({ onNavigate }) {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 px-6 py-16 text-neutral-400">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <button
              onClick={() => onNavigate({ page: "home" })}
              className="font-serif text-2xl tracking-[0.3em] text-neutral-50"
            >
              TOONO
            </button>
            <p className="mt-4 max-w-xs text-sm">
              Fashion, hair, and essentials for people who notice the details.
              Shipped from Canada, worn everywhere.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-50">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate({ page: "home", category: "Women" })} className="hover:text-emerald-400">Women</button></li>
              <li><button onClick={() => onNavigate({ page: "home", category: "Hair" })} className="hover:text-emerald-400">Hair</button></li>
              <li><button onClick={() => onNavigate({ page: "home", category: "Men" })} className="hover:text-emerald-400">Men</button></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-50">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate({ page: "about" })} className="hover:text-emerald-400">About</button></li>
              <li><button onClick={() => onNavigate({ page: "contact" })} className="hover:text-emerald-400">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-50">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-neutral-500">Shipping &amp; returns</span></li>
              <li><span className="text-neutral-500">Size guide</span></li>
              <li><span className="text-neutral-500">Track order</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row">
          <span>© {new Date().getFullYear()} TOONO. All rights reserved.</span>
          <span className="text-neutral-600">Preview build. Placeholder content.</span>
        </div>
      </div>
    </footer>
  );
}