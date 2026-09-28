export default function PromoBand({ onCategory }) {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 text-white">
      <img
        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <span className="text-sm uppercase tracking-[0.2em] text-clay">The TOONO promise</span>
        <h2 className="mt-4 font-serif text-4xl leading-tight lg:text-6xl">
          Curated by a family.<br />
          <span className="italic text-clay">Priced without the markup.</span>
        </h2>
        <p className="mt-6 max-w-xl text-lg text-ink/70">
          Every piece is chosen, not just listed. If we wouldn't wear it or use
          it ourselves, it doesn't make the cut.
        </p>
        <button
          onClick={() => onCategory("All")}
          className="mt-8 rounded-full bg-white px-8 py-4 text-sm font-semibold text-ivory transition-transform active:scale-95 hover:bg-clay"
        >
          Explore the collection
        </button>
      </div>
    </section>
  );
}