import { useState, useRef } from "react";
import { BUSINESS } from "../../data/pricing";
import QuoteCalculator from "./QuoteCalculator";
import BookingForm from "./BookingForm";

const STEPS = [
  { n: "1", t: "Get a quote", d: "Enter where it's going and the package size. Price is instant." },
  { n: "2", t: "Book a pickup", d: "Fill in sender, receiver, and when you need it collected." },
  { n: "3", t: "We deliver", d: "Your package is picked up and delivered, tracked door to door." },
];

const FEATURES = [
  { t: "Same-day options", d: "Local runs collected and delivered the same day." },
  { t: "Owner-operated", d: "Handled directly, not passed through a chain of contractors." },
  { t: "Fair, upfront pricing", d: "See the price before you book. No surprise fees." },
  { t: "Careful handling", d: "Your goods treated like they're our own." },
];

export default function LogisticsPage({ onBackToStore }) {
  const [stage, setStage] = useState("quote"); // "quote" | "book" | "done"
  const [price, setPrice] = useState(null);
  const bookRef = useRef(null);

  const goBook = (p) => {
    setPrice(p);
    setStage("book");
    setTimeout(() => bookRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top bar */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-extrabold tracking-tight">
            {BUSINESS.name}
          </span>
          <button onClick={onBackToStore} className="text-sm font-medium text-slate-500 hover:text-slate-900">
            ← Back to store
          </button>
        </div>
      </div>

      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-block rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
              {BUSINESS.area}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight lg:text-6xl">
              Deliveries, done<br />properly.
            </h1>
            <p className="mt-5 max-w-md text-lg text-slate-600">
              Fast, reliable pickup and delivery across {BUSINESS.area}. Get a
              price in seconds and book a pickup in minutes.
            </p>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">
              <span>📞 {BUSINESS.phone}</span>
              <span>🕑 {BUSINESS.hours}</span>
            </div>
          </div>
          <QuoteCalculator onBook={goBook} />
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-3xl font-bold">How it works</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-lg font-bold text-white">{s.n}</div>
              <h3 className="mt-4 text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold">Why {BUSINESS.name}</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div key={f.t}>
                <div className="mb-3 h-1 w-10 rounded bg-slate-900" />
                <h3 className="font-semibold">{f.t}</h3>
                <p className="mt-1 text-sm text-slate-600">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section ref={bookRef} className="mx-auto max-w-2xl px-6 py-16">
        {stage === "done" ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-white">✓</div>
            <h3 className="text-2xl font-bold">Pickup requested</h3>
            <p className="mt-2 text-slate-600">
              Thanks. Your request is in and the driver will confirm shortly. Reference #{Math.floor(100000 + Math.random() * 900000)}.
            </p>
            <button onClick={() => { setStage("quote"); setPrice(null); }}
              className="mt-6 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white">
              Book another
            </button>
          </div>
        ) : stage === "book" ? (
          <BookingForm quotedPrice={price} onDone={() => setStage("done")} />
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
            Get a quote above, then book your pickup here.
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-6 py-10 text-center text-sm text-slate-500">
        <p className="font-bold text-slate-900">{BUSINESS.name}</p>
        <p className="mt-2">{BUSINESS.phone} · {BUSINESS.email}</p>
        <p className="mt-1">{BUSINESS.hours} · {BUSINESS.area}</p>
      </footer>
    </div>
  );
}