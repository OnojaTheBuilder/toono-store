export default function PromoGrid({ onCategory, onSearch }) {
  return (
    <section className="bg-ivory px-4 pt-4 pb-2">
      <div className="mx-auto max-w-7xl grid grid-cols-2 gap-3 lg:grid-cols-4">
        {/* Big lead promo spans 2 cols */}
        <button onClick={() => onCategory("All")}
          className="relative col-span-2 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-6 text-left text-white min-h-[180px] flex flex-col justify-end">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-100">New here?</span>
          <h3 className="mt-1 font-serif text-3xl leading-tight">Up to 60% off<br/>your first haul</h3>
          <span className="mt-2 text-sm font-semibold underline">Shop all deals →</span>
        </button>

        <button onClick={() => onCategory("Electronics")}
          className="relative overflow-hidden rounded-2xl bg-white p-5 text-left text-white min-h-[180px] flex flex-col justify-end border border-ink/10">
          <span className="text-3xl">🎧</span>
          <h3 className="mt-2 font-semibold">Tech under $50</h3>
          <span className="mt-1 text-xs text-clay font-semibold">Shop now →</span>
        </button>

        <button onClick={() => onCategory("Home & Living")}
          className="relative overflow-hidden rounded-2xl bg-white p-5 text-left text-white min-h-[180px] flex flex-col justify-end border border-ink/10">
          <span className="text-3xl">🏠</span>
          <h3 className="mt-2 font-semibold">Home refresh</h3>
          <span className="mt-1 text-xs text-clay font-semibold">Shop now →</span>
        </button>
      </div>
    </section>
  );
}