const REVIEWS = [
  { name: "Amara O.", city: "Toronto", text: "The quality genuinely surprised me for the price. The dress is now my go-to for every event.", rating: 5 },
  { name: "Chloe M.", city: "Vancouver", text: "Ordered the hair extensions on a whim and they blend perfectly. Fast shipping too.", rating: 5 },
  { name: "Daniel K.", city: "Calgary", text: "The overshirt is a staple now. Fits exactly as described and looks more expensive than it was.", rating: 5 },
];

export default function Testimonials() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="text-sm uppercase tracking-[0.2em] text-amber-700">Loved by customers</span>
          <h2 className="mt-3 font-serif text-4xl text-neutral-900 lg:text-5xl">Don't take our word for it.</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <div key={r.name} className="rounded-3xl border border-neutral-200 bg-[#faf8f4] p-8">
              <div className="mb-4 text-amber-500">{"★".repeat(r.rating)}</div>
              <p className="text-neutral-700">“{r.text}”</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white">
                  {r.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">{r.name}</p>
                  <p className="text-xs text-neutral-500">{r.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}