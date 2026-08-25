export default function OrderConfirmation({ total, onHome }) {
  const orderNo = "TOONO-" + Math.floor(100000 + Math.random() * 900000);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 px-6 text-center text-neutral-50">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400 text-3xl text-neutral-950">✓</div>
      <h1 className="font-serif text-5xl">Order placed.</h1>
      <p className="mt-4 max-w-md text-lg text-neutral-400">
        Thanks for shopping TOONO. A confirmation is on its way to your inbox.
      </p>
      <div className="mt-8 rounded-2xl border border-white/10 px-8 py-5">
        <p className="text-sm text-neutral-500">Order number</p>
        <p className="font-mono text-xl text-emerald-400">{orderNo}</p>
        {total != null && <p className="mt-2 text-sm text-neutral-400">Total paid: ${total.toFixed(2)}</p>}
      </div>
      <button onClick={onHome} className="mt-10 rounded-full bg-neutral-50 px-8 py-4 font-semibold text-neutral-950 hover:bg-emerald-400">
        Continue shopping
      </button>
    </div>
  );
}