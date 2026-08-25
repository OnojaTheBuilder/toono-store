export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <span className="text-sm uppercase tracking-[0.2em] text-emerald-400">Our story</span>
        <h1 className="mt-4 font-serif text-5xl lg:text-6xl">
          Built by a family,<br />
          <span className="italic text-emerald-400">for people with taste.</span>
        </h1>

        <div className="mt-10 space-y-6 text-lg leading-relaxed text-neutral-400">
          <p>
            TOONO started at a kitchen table in Canada, with a simple idea: bring
            together the pieces our family actually loved wearing and using, and
            offer them without the markup you'd pay elsewhere.
          </p>
          <p>
            What began as a small edit of women's fashion has grown into a curated
            mix across fashion, hair, and men's essentials. Every piece earns its
            place. If we wouldn't wear it ourselves, it doesn't go up.
          </p>
          <p>
            We're small, we're independent, and we answer every message ourselves.
            That's the whole promise: good pieces, fair prices, real people behind
            the screen.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { n: "4", l: "Curated categories" },
            { n: "100%", l: "Family-run" },
            { n: "24h", l: "Reply time" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-white/10 p-6 text-center">
              <p className="font-serif text-4xl text-emerald-400">{s.n}</p>
              <p className="mt-2 text-sm text-neutral-400">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}