import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function CheckoutPage({ onBack, onPlaced }) {
  const { items, subtotal, freeShipRemaining } = useCart();
  const [form, setForm] = useState({
    email: "", name: "", address: "", city: "", province: "ON", postal: "", card: "",
  });
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const shipping = freeShipRemaining === 0 ? 0 : 9.99;
  // Canadian tax note: real store computes this per province in WooCommerce.
  const tax = +(subtotal * 0.13).toFixed(2); // demo: Ontario HST 13%
  const total = +(subtotal + shipping + tax).toFixed(2);

  const canPlace = form.email && form.name && form.address && form.card && items.length > 0;

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 text-neutral-50">
        <p className="text-lg text-neutral-400">Your bag is empty.</p>
        <button onClick={onBack} className="mt-4 rounded-full bg-neutral-50 px-6 py-3 font-semibold text-neutral-950">
          Back to shop
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-5">
        {/* Form */}
        <div className="lg:col-span-3">
          <button onClick={onBack} className="mb-6 text-sm text-neutral-400 hover:text-neutral-50">← Back</button>
          <h1 className="font-serif text-4xl">Checkout</h1>

          <div className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-200">
            Preview only. No real payment is taken. In the live store this is
            WooCommerce's secure checkout.
          </div>

          <div className="mt-8 space-y-8">
            <section>
              <h3 className="mb-4 font-medium">Contact</h3>
              <input value={form.email} onChange={update("email")} placeholder="Email"
                className="w-full rounded-xl border border-white/15 bg-neutral-950 px-4 py-3 outline-none focus:border-emerald-400" />
            </section>

            <section>
              <h3 className="mb-4 font-medium">Shipping address</h3>
              <div className="space-y-3">
                <input value={form.name} onChange={update("name")} placeholder="Full name"
                  className="w-full rounded-xl border border-white/15 bg-neutral-950 px-4 py-3 outline-none focus:border-emerald-400" />
                <input value={form.address} onChange={update("address")} placeholder="Street address"
                  className="w-full rounded-xl border border-white/15 bg-neutral-950 px-4 py-3 outline-none focus:border-emerald-400" />
                <div className="grid grid-cols-3 gap-3">
                  <input value={form.city} onChange={update("city")} placeholder="City"
                    className="rounded-xl border border-white/15 bg-neutral-950 px-4 py-3 outline-none focus:border-emerald-400" />
                  <select value={form.province} onChange={update("province")}
                    className="rounded-xl border border-white/15 bg-neutral-950 px-4 py-3 outline-none focus:border-emerald-400">
                    {["ON","QC","BC","AB","MB","SK","NS","NB","NL","PE"].map((p) => <option key={p}>{p}</option>)}
                  </select>
                  <input value={form.postal} onChange={update("postal")} placeholder="Postal"
                    className="rounded-xl border border-white/15 bg-neutral-950 px-4 py-3 outline-none focus:border-emerald-400" />
                </div>
              </div>
            </section>

            <section>
              <h3 className="mb-4 font-medium">Payment</h3>
              <input value={form.card} onChange={update("card")} placeholder="Card number (demo)"
                className="w-full rounded-xl border border-white/15 bg-neutral-950 px-4 py-3 outline-none focus:border-emerald-400" />
            </section>

            <button
              onClick={() => canPlace && onPlaced(total)}
              disabled={!canPlace}
              className="w-full rounded-full bg-emerald-400 py-4 font-semibold text-neutral-950 transition-transform active:scale-[0.98] disabled:opacity-40"
            >
              Place order · ${total.toFixed(2)}
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6">
            <h3 className="mb-4 font-medium">Order summary</h3>
            <ul className="space-y-4">
              {items.map((l) => (
                <li key={l.key} className="flex gap-3">
                  <img src={l.image} alt={l.name} className="h-16 w-14 rounded-lg object-cover" />
                  <div className="flex-1 text-sm">
                    <p className="font-medium">{l.name}</p>
                    <p className="text-neutral-500">{l.color} · {l.size} · ×{l.qty}</p>
                  </div>
                  <span className="text-sm font-semibold">${(l.price * l.qty).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2 border-t border-white/10 pt-4 text-sm">
              <div className="flex justify-between text-neutral-400"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between text-neutral-400"><span>Shipping</span><span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span></div>
              <div className="flex justify-between text-neutral-400"><span>Tax (est.)</span><span>${tax.toFixed(2)}</span></div>
              <div className="mt-2 flex justify-between border-t border-white/10 pt-3 text-lg font-semibold text-neutral-50">
                <span>Total</span><span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}