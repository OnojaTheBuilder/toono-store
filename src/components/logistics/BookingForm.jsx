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

  const submit = () => {
    // Preview only. Real version: POST to Formspree/EmailJS so the client
    // gets the order by email. No backend needed.
    if (canSubmit) onDone();
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8">
      <h3 className="text-xl font-bold text-slate-900">Book your pickup</h3>
      {quotedPrice != null && (
        <p className="mt-1 text-sm text-slate-500">Quoted price: <span className="font-semibold text-slate-900">${quotedPrice.toFixed(2)}</span></p>
      )}

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2 text-sm font-semibold uppercase tracking-wide text-slate-400">Sender</div>
        <input value={form.senderName} onChange={update("senderName")} placeholder="Sender name"
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900" />
        <input value={form.senderPhone} onChange={update("senderPhone")} placeholder="Sender phone"
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900" />
        <input value={form.pickup} onChange={update("pickup")} placeholder="Pickup address"
          className="sm:col-span-2 rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900" />

        <div className="sm:col-span-2 mt-2 text-sm font-semibold uppercase tracking-wide text-slate-400">Receiver</div>
        <input value={form.receiverName} onChange={update("receiverName")} placeholder="Receiver name"
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900" />
        <input value={form.receiverPhone} onChange={update("receiverPhone")} placeholder="Receiver phone"
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900" />
        <input value={form.dropoff} onChange={update("dropoff")} placeholder="Delivery address"
          className="sm:col-span-2 rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900" />

        <div className="sm:col-span-2 mt-2 text-sm font-semibold uppercase tracking-wide text-slate-400">Details</div>
        <input type="date" value={form.date} onChange={update("date")}
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900" />
        <input value={form.notes} onChange={update("notes")} placeholder="Notes (optional)"
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900" />
      </div>

      <button
        onClick={submit}
        disabled={!canSubmit}
        className="mt-6 w-full rounded-xl bg-slate-900 py-4 font-semibold text-white transition-transform active:scale-[0.98] hover:bg-slate-800 disabled:opacity-40"
      >
        Request pickup
      </button>
      <p className="mt-3 text-center text-xs text-slate-400">
        Preview only. In the live site this sends the order straight to the driver.
      </p>
    </div>
  );
}