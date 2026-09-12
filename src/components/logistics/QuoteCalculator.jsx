import { useState } from "react";
import { ZONES, SIZE_TIERS, LOCATIONS, distanceKm, calcPrice, PRICING } from "../../data/pricing";

export default function QuoteCalculator({ onBook }) {
  const [model, setModel] = useState("distance"); // default to the real model now
  const [zone, setZone] = useState(ZONES[0].id);
  const [from, setFrom] = useState(LOCATIONS[0].name);
  const [to, setTo] = useState(LOCATIONS[1].name);
  const [size, setSize] = useState(SIZE_TIERS[0].id);
  const [quote, setQuote] = useState(null);

  const sizeTier = SIZE_TIERS.find((s) => s.id === size);

  const calculate = () => {
    if (model === "zone") {
      const z = ZONES.find((x) => x.id === zone);
      const total = +(z.price * sizeTier.multiplier).toFixed(2);
      setQuote({ total, detail: z.name, sizeName: sizeTier.name });
    } else {
      const a = LOCATIONS.find((l) => l.name === from);
      const b = LOCATIONS.find((l) => l.name === to);
      const km = distanceKm(a, b);
      const total = calcPrice(km, sizeTier.multiplier);
      const detail = `${km} km · $${PRICING.baseFee} base + $${PRICING.ratePerKm}/km`;
      setQuote({ total, detail, sizeName: sizeTier.name });
    }
  };

  const field = "w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-900/10 sm:p-8">
      <div className="mb-6 inline-flex rounded-full bg-slate-100 p-1">
        <button onClick={() => { setModel("distance"); setQuote(null); }}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${model === "distance" ? "bg-[#0f1b2d] text-white shadow" : "text-slate-500"}`}>
          Distance pricing
        </button>
        <button onClick={() => { setModel("zone"); setQuote(null); }}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${model === "zone" ? "bg-[#0f1b2d] text-white shadow" : "text-slate-500"}`}>
          Zone pricing
        </button>
      </div>

      <div className="space-y-4">
        {model === "zone" ? (
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Destination zone</label>
            <select value={zone} onChange={(e) => setZone(e.target.value)} className={field}>
              {ZONES.map((z) => <option key={z.id} value={z.id}>{z.name} — ${z.price}</option>)}
            </select>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Pick up from</label>
              <select value={from} onChange={(e) => setFrom(e.target.value)} className={field}>
                {LOCATIONS.map((l) => <option key={l.name}>{l.name}</option>)}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Deliver to</label>
              <select value={to} onChange={(e) => setTo(e.target.value)} className={field}>
                {LOCATIONS.map((l) => <option key={l.name}>{l.name}</option>)}
              </select>
            </div>
          </div>
        )}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Package size</label>
          <select value={size} onChange={(e) => setSize(e.target.value)} className={field}>
            {SIZE_TIERS.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
        </div>

        <button onClick={calculate}
          className="w-full rounded-xl bg-blue-500 py-4 font-semibold text-white transition-transform active:scale-[0.98] hover:bg-blue-600">
          Get instant quote
        </button>
      </div>

      {quote && (
        <div className="mt-6 rounded-2xl bg-[#0f1b2d] p-6 text-white">
          <p className="text-sm text-blue-200">Estimated price</p>
          <p className="mt-1 text-4xl font-bold">${quote.total.toFixed(2)}</p>
          <p className="mt-2 text-sm text-slate-400">{quote.detail} · {quote.sizeName}</p>
          <button onClick={() => onBook(quote.total)}
            className="mt-5 w-full rounded-xl bg-white py-3 font-semibold text-[#0f1b2d] transition-transform active:scale-[0.98] hover:bg-blue-50">
            Book this delivery →
          </button>
        </div>
      )}
    </div>
  );
}