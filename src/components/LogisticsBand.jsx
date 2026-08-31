export default function LogisticsBand({ onOpen }) {
  return (
    <section className="relative overflow-hidden bg-[#0f1b2d] px-6 py-24 text-white">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=80"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f1b2d] via-[#0f1b2d]/90 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300">
            Also from TOONO
          </span>
          <h2 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight lg:text-7xl">
            Need it<br />delivered?
          </h2>
          <p className="mt-6 max-w-lg text-xl text-slate-300">
            TOONO Logistics moves your packages across Ontario. Instant quotes,
            careful handling, delivered door to door by people who take it
            seriously.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpen}
              className="rounded-full bg-blue-500 px-8 py-4 text-base font-semibold text-white transition-transform active:scale-95 hover:bg-blue-600"
            >
              Get a delivery quote →
            </button>
            <button
              onClick={onOpen}
              className="rounded-full border border-white/25 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Track a package
            </button>
          </div>

          <div className="mt-12 flex flex-wrap gap-8">
            {[
              { n: "Instant", l: "online quotes" },
              { n: "Same-day", l: "local delivery" },
              { n: "Door to door", l: "every time" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-2xl font-bold text-blue-400">{s.n}</p>
                <p className="text-sm text-slate-400">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}