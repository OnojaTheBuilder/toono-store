export default function OrderConfirmation({ total, onHome }) {
  const orderNo = "TOONO-" + Math.floor(100000 + Math.random() * 900000);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ivory px-6 text-center text-ink">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-clay text-3xl text-ivory">✓</div>
      <h1 className="font-serif text-5xl">Order placed.</h1>
      <p className="mt-4 max-w-md text-lg text-ink/60">
        Thanks for shopping TOONO. A confirmation is on its way to your inbox.
      </p>
      <div className="mt-8 rounded-2xl border border-ink/10 px-8 py-5">
        <p className="text-sm text-ink0">Order number</p>
        <p className="font-mono text-xl text-clay">{orderNo}</p>
        {total != null && <p className="mt-2 text-sm text-ink/60">Total paid: ${total.toFixed(2)}</p>}
      </div>
      <button onClick={onHome} className="mt-10 rounded-full bg-neutral-50 px-8 py-4 font-semibold text-ivory hover:bg-clay">
        Continue shopping
      </button>
    </div>
  );
}