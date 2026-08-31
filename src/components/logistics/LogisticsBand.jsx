export default function LogisticsBand({ onOpen }) {
  return (
    <section className="bg-slate-900 px-6 py-20 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="text-sm uppercase tracking-[0.2em] text-emerald-400">Also from TOONO</span>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl">Need it delivered?</h2>
          <p className="mt-5 max-w-md text-lg text-slate-300">
            TOONO Logistics moves your packages across the region. Get an instant
            quote and book a pickup in minutes, handled door to door.
          </p>
          <button
            onClick={onOpen}
            className="mt-8 rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-900 transition-transform active:scale-95 hover:bg-emerald-400"
          >
            Get a delivery quote →
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[
            { n: "Instant", l: "quotes" },
            { n: "Door", l: "to door" },
            { n: "Same-day", l: "local runs" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
              <p className="text-xl font-bold text-emerald-400">{s.n}</p>
              <p className="mt-1 text-xs text-slate-400">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}