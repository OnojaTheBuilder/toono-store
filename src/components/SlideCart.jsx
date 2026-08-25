import { useCart } from "../context/CartContext";
import { getAll } from "../data/mockProducts";

export default function SlideCart({ onCheckout }) {
    const {
        items, subtotal, count, isOpen, closeCart,
        setQty, removeItem, freeShipRemaining, freeShipProgress, addItem,
    } = useCart();

    const inCartIds = new Set(items.map((l) => l.id));
    const upsells = getAll().filter((p) => !inCartIds.has(p.id)).slice(0, 2);
    const qualifies = freeShipRemaining === 0;

    return (
        <>
            <div
                onClick={closeCart}
                className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"
                    }`}
            />

            <aside
                className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-neutral-950 text-neutral-50 shadow-2xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between border-b border-white/10 p-5">
                    <h2 className="font-serif text-xl">Your bag ({count})</h2>
                    <button onClick={closeCart} className="text-2xl text-neutral-400 hover:text-white">✕</button>
                </div>

                <div className="border-b border-white/10 p-5">
                    <p className="text-sm text-neutral-300">
                        {qualifies ? (
                            <span className="font-semibold text-emerald-400">You've unlocked free shipping.</span>
                        ) : (
                            <>
                                Add <span className="font-semibold text-emerald-400">${freeShipRemaining.toFixed(2)}</span> more for free shipping.
                            </>
                        )}
                    </p>
                    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
                        <div
                            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-300 transition-all duration-500"
                            style={{ width: `${freeShipProgress}%` }}
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-5">
                    {items.length === 0 ? (
                        <div className="flex h-full flex-col items-center justify-center text-center text-neutral-500">
                            <p className="text-lg">Your bag is empty.</p>
                            <p className="text-sm">Add something you'll actually reach for.</p>
                        </div>
                    ) : (
                        <ul className="space-y-4">
                            {items.map((l) => (
                                <li key={l.key} className="flex gap-4">
                                    <img src={l.image} alt={l.name} className="h-24 w-20 rounded-xl object-cover" />
                                    <div className="flex flex-1 flex-col">
                                        <div className="flex justify-between">
                                            <p className="font-medium">{l.name}</p>
                                            <button onClick={() => removeItem(l.key)} className="text-sm text-neutral-500 hover:text-red-400">
                                                Remove
                                            </button>
                                        </div>
                                        <p className="text-sm text-neutral-500">{l.color} · {l.size}</p>
                                        <div className="mt-auto flex items-center justify-between">
                                            <div className="flex items-center gap-3 rounded-full border border-white/15 px-3 py-1">
                                                <button onClick={() => setQty(l.key, l.qty - 1)} className="text-lg">−</button>
                                                <span className="w-6 text-center text-sm">{l.qty}</span>
                                                <button onClick={() => setQty(l.key, l.qty + 1)} className="text-lg">+</button>
                                            </div>
                                            <span className="font-semibold">${(l.price * l.qty).toFixed(2)}</span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}

                    {items.length > 0 && upsells.length > 0 && (
                        <div className="mt-8 border-t border-white/10 pt-6">
                            <p className="mb-4 text-sm font-medium text-neutral-300">Complete the look</p>
                            <div className="space-y-3">
                                {upsells.map((u) => (
                                    <div key={u.id} className="flex items-center gap-3">
                                        <img src={u.media[0]} alt={u.name} className="h-14 w-14 rounded-lg object-cover" />
                                        <div className="flex-1">
                                            <p className="text-sm font-medium">{u.name}</p>
                                            <p className="text-sm text-neutral-500">${u.price.toFixed(2)}</p>
                                        </div>
                                        <button
                                            onClick={() => addItem(u, u.colors[0].name, u.sizes[0])}
                                            className="rounded-full border border-white/20 px-4 py-1.5 text-sm hover:bg-white/5"
                                        >
                                            Add
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {items.length > 0 && (
                    <div className="border-t border-white/10 p-5">
                        <div className="mb-4 flex justify-between text-lg">
                            <span className="text-neutral-400">Subtotal</span>
                            <span className="font-semibold">${subtotal.toFixed(2)}</span>
                        </div>
                        <button
                            onClick={() => { closeCart(); onCheckout(); }}
                            className="w-full rounded-full bg-emerald-400 py-4 font-semibold text-neutral-950 transition-transform active:scale-[0.98]"
                        >
                            Checkout · ${subtotal.toFixed(2)}
                        </button>
                        <p className="mt-3 text-center text-xs text-neutral-500">
                            Taxes and shipping calculated at checkout.
                        </p>
                    </div>
                )}
            </aside>
        </>
    );
}