import { useState } from "react";
import { ZONES, PER_KM, SIZE_TIERS, LOCATIONS, distanceKm } from "../../data/pricing";

// Toggle between the two pricing models so the client can pick.
// Once he chooses, delete the other branch and the model toggle.
export default function QuoteCalculator({ onBook }) {
  const [model, setModel] = useState("zone"); // "zone" | "perkm"
  const [zone, setZone] = useState(ZONES[0].id);
  const [from, setFrom] = useState(LOCATIONS[0].name);
  const [to, setTo] = useState(LOCATIONS[1].name);
  const [size, setSize] = useState(SIZE_TIERS[0].id);
  const [quote, setQuote] = useState(null);

  const sizeTier = SIZE_TIERS.find((s) => s.id === size);

  const calculate = () => {
    let base = 0;
    let detail = "";

    if (model === "zone") {
      const z = ZONES.find((x) => x.id === zone);
      base = z.price;
      detail = z.name;
    } else {
      const a = LOCATIONS.find((l) => l.name === from);
      const b = LOCATIONS.find((l) => l.name === to);
      const km = distanceKm(a, b);
      base = PER_KM.baseFee + km * PER_KM.ratePerKm;
      detail = `${km} km · $${PER_KM.baseFee} base + $${PER_KM.ratePerKm}/km`;
    }

    const total = +(base * sizeTier.multiplier).toFixed(2);
    setQuote({ total, detail, sizeName: sizeTier.name });
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8">
      {/* Model toggle */}
      <div className="mb-6 inline-flex rounded-full bg-slate-100 p-1">
        <button
          onClick={() => { setModel("zone"); setQuote(null); }}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            model === "zone" ? "bg-white text-slate-900 shadow" : "text-slate-500"
          }`}
        >
          Zone pricing
        </button>
        <button
          onClick={() => { setModel("perkm"); setQuote(null); }}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            model === "perkm" ? "bg-white text-slate-900 shadow" : "text-slate-500"
          }`}
        >
          Distance pricing
        </button>
      </div>

      <div className="space-y-4">
        {model === "zone" ? (
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Destination zone</label>
            <select
              value={zone}
              onChange={(e) => setZone(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
            >
              {ZONES.map((z) => (
                <option key={z.id} value={z.id}>{z.name} — ${z.price}</option>
              ))}
            </select>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Pick up from</label>
              <select value={from} onChange={(e) => setFrom(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900">
                {LOCATIONS.map((l) => <option key={l.name}>{l.name}</option>)}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Deliver to</label>
              <select value={to} onChange={(e) => setTo(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900">
                {LOCATIONS.map((l) => <option key={l.name}>{l.name}</option>)}
              </select>
            </div>
          </div>
        )}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Package size</label>
          <select value={size} onChange={(e) => setSize(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900">
            {SIZE_TIERS.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
        </div>

        <button
          onClick={calculate}
          className="w-full rounded-xl bg-slate-900 py-4 font-semibold text-white transition-transform active:scale-[0.98] hover:bg-slate-800"
        >
          Get instant quote
        </button>
      </div>

      {quote && (
        <div className="mt-6 rounded-2xl bg-slate-900 p-6 text-white">
          <p className="text-sm text-slate-400">Estimated price</p>
          <p className="mt-1 text-4xl font-bold">${quote.total.toFixed(2)}</p>
          <p className="mt-2 text-sm text-slate-400">{quote.detail} · {quote.sizeName}</p>
          <button
            onClick={() => onBook(quote.total)}
            className="mt-5 w-full rounded-xl bg-white py-3 font-semibold text-slate-900 transition-transform active:scale-[0.98] hover:bg-slate-100"
          >
            Book this delivery →
          </button>
        </div>
      )}
    </div>
  );
}