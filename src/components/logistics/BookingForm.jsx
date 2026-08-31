import { useState } from "react";

export default function BookingForm({ quotedPrice, onDone }) {
  const [form, setForm] = useState({
    senderName: "", senderPhone: "", pickup: "",
    receiverName: "", receiverPhone: "", dropoff: "",
    date: "", notes: "",
  });
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const required = ["senderName", "senderPhone", "pickup", "receiverName", "receiverPhone", "dropoff", "date"];
  const canSubmit = required.every((k) => form[k].trim());
  const submit = () => { if (canSubmit) onDone(); };

  const field = "rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-900/10 sm:p-8">
      <h3 className="text-xl font-bold text-[#0f1b2d]">Book your pickup</h3>
      {quotedPrice != null && (
        <p className="mt-1 text-sm text-slate-500">Quoted price: <span className="font-semibold text-[#0f1b2d]">${quotedPrice.toFixed(2)}</span></p>
      )}

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2 text-sm font-semibold uppercase tracking-wide text-blue-500">Sender</div>
        <input value={form.senderName} onChange={update("senderName")} placeholder="Sender name" className={field} />
        <input value={form.senderPhone} onChange={update("senderPhone")} placeholder="Sender phone" className={field} />
        <input value={form.pickup} onChange={update("pickup")} placeholder="Pickup address" className={`sm:col-span-2 ${field}`} />

        <div className="sm:col-span-2 mt-2 text-sm font-semibold uppercase tracking-wide text-blue-500">Receiver</div>
        <input value={form.receiverName} onChange={update("receiverName")} placeholder="Receiver name" className={field} />
        <input value={form.receiverPhone} onChange={update("receiverPhone")} placeholder="Receiver phone" className={field} />
        <input value={form.dropoff} onChange={update("dropoff")} placeholder="Delivery address" className={`sm:col-span-2 ${field}`} />

        <div className="sm:col-span-2 mt-2 text-sm font-semibold uppercase tracking-wide text-blue-500">Details</div>
        <input type="date" value={form.date} onChange={update("date")} className={field} />
        <input value={form.notes} onChange={update("notes")} placeholder="Notes (optional)" className={field} />
      </div>

      <button onClick={submit} disabled={!canSubmit}
        className="mt-6 w-full rounded-xl bg-[#0f1b2d] py-4 font-semibold text-white transition-transform active:scale-[0.98] hover:bg-[#1a2942] disabled:opacity-40">
        Request pickup
      </button>
      <p className="mt-3 text-center text-xs text-slate-400">
        Preview only. In the live site this sends the order straight to the driver.
      </p>
    </div>
  );
}