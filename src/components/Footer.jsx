export default function Footer({ onNavigate }) {
  return (
    <footer className="border-t border-ink/10 bg-ivory px-6 py-16 text-ink/60">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <button
              onClick={() => onNavigate({ page: "home" })}
              className="font-serif text-2xl tracking-[0.3em] text-ink"
            >
              TOONO
            </button>
            <p className="mt-4 max-w-xs text-sm">
              Fashion, hair, and essentials for people who notice the details.
              Shipped from Canada, worn everywhere.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate({ page: "home", category: "Women" })} className="hover:text-clay">Women</button></li>
              <li><button onClick={() => onNavigate({ page: "home", category: "Hair" })} className="hover:text-clay">Hair</button></li>
              <li><button onClick={() => onNavigate({ page: "home", category: "Men" })} className="hover:text-clay">Men</button></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate({ page: "about" })} className="hover:text-clay">About</button></li>
              <li><button onClick={() => onNavigate({ page: "contact" })} className="hover:text-clay">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-ink0">Shipping &amp; returns</span></li>
              <li><span className="text-ink0">Size guide</span></li>
              <li><span className="text-ink0">Track order</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-ink/10 pt-6 text-xs sm:flex-row">
          <span>© {new Date().getFullYear()} TOONO. All rights reserved.</span>
          <span className="text-neutral-600">Preview build. Placeholder content.</span>
        </div>
      </div>
    </footer>
  );
}