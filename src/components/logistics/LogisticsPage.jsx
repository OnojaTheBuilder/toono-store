import { useState, useRef } from "react";
import { BUSINESS, STATS, COVERAGE, TESTIMONIALS, FAQ } from "../../data/pricing";
import Logo from "./Logo";
import QuoteCalculator from "./QuoteCalculator";
import BookingForm from "./BookingForm";

const STEPS = [
  { n: "1", t: "Get a quote", d: "Enter where it's going and the package size. Price is instant." },
  { n: "2", t: "Book a pickup", d: "Fill in sender, receiver, and when you need it collected." },
  { n: "3", t: "We deliver", d: "Picked up and delivered, handled door to door." },
];

const FEATURES = [
  { t: "Same-day options", d: "Local runs collected and delivered the same day." },
  { t: "Owner-operated", d: "Handled directly, not passed down a chain of contractors." },
  { t: "Upfront pricing", d: "See the price before you book. No surprise fees." },
  { t: "Careful handling", d: "Your goods treated like they're our own." },
];

// Fake tracking states for the mockup lookup.
const FAKE_TRACK = {
  steps: ["Order received", "Picked up", "In transit", "Out for delivery", "Delivered"],
  current: 2,
};

export default function LogisticsPage({ onBackToStore }) {
  const [stage, setStage] = useState("quote");
  const [price, setPrice] = useState(null);
  const [trackId, setTrackId] = useState("");
  const [tracked, setTracked] = useState(null);
  const bookRef = useRef(null);
  const trackRef = useRef(null);

  const goBook = (p) => {
    setPrice(p);
    setStage("book");
    setTimeout(() => bookRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  const runTrack = () => {
    if (trackId.trim()) setTracked(FAKE_TRACK);
  };

  return (
    <div className="min-h-screen bg-[#f6f7f9] text-[#0f1b2d]">
      {/* Top bar */}
      <div className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Logo />
          <div className="flex items-center gap-5">
            <a href="#track" onClick={() => trackRef.current?.scrollIntoView({ behavior: "smooth" })}
              className="hidden text-sm font-medium text-slate-600 hover:text-[#0f1b2d] sm:block">Track</a>
            <button onClick={onBackToStore} className="text-sm font-medium text-slate-500 hover:text-[#0f1b2d]">
              ← Back to store
            </button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#0f1b2d] text-white">
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=80"
          alt="Delivery truck"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1b2d] via-[#0f1b2d]/80 to-transparent" />
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <span className="inline-block rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-300">
              Serving {BUSINESS.area}
            </span>
            <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight lg:text-6xl">
              {BUSINESS.tagline}
            </h1>
            <p className="mt-5 max-w-md text-lg text-slate-300">
              Fast, reliable pickup and delivery across the region. Get a price in
              seconds, book a pickup in minutes.
            </p>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-400">
              <span>📞 {BUSINESS.phone}</span>
              <span>🕑 {BUSINESS.hours}</span>
            </div>
          </div>
          <QuoteCalculator onBook={goBook} />
        </div>
      </section>

      
      {/* Stats */}
      <section className="bg-[#0f1b2d] px-6 py-12 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.l} className="text-center">
              <p className="text-3xl font-extrabold text-blue-400 lg:text-4xl">{s.n}</p>
              <p className="mt-1 text-sm text-slate-400">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold lg:text-4xl">How it works</h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-2xl border border-slate-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-lg font-bold text-white">{s.n}</div>
              <h3 className="mt-5 text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us + image */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl">
            <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&q=80" alt="Delivery van" className="h-full w-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold lg:text-4xl">Why TOONO Logistics</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <div key={f.t}>
                  <div className="mb-3 h-1 w-10 rounded bg-blue-500" />
                  <h3 className="font-semibold">{f.t}</h3>
                  <p className="mt-1 text-sm text-slate-600">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold lg:text-4xl">Where we deliver</h2>
          <p className="mt-3 text-slate-600">Covering {COVERAGE.length} cities across {BUSINESS.area}, and growing.</p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {COVERAGE.map((c) => (
            <span key={c} className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700">
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Tracking mockup */}
      <section ref={trackRef} id="track" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold lg:text-4xl">Track a package</h2>
            <p className="mt-3 text-slate-600">Enter your tracking number to see where it is.</p>
          </div>

          <div className="mx-auto mt-8 flex max-w-lg gap-3">
            <input value={trackId} onChange={(e) => setTrackId(e.target.value)}
              placeholder="e.g. TOONO-482910"
              className="flex-1 rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
            <button onClick={runTrack} className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-600">
              Track
            </button>
          </div>

          {tracked && (
            <div className="mt-10 rounded-3xl border border-slate-200 bg-[#f6f7f9] p-8">
              <p className="text-sm text-slate-500">Tracking {trackId || "TOONO-482910"}</p>
              <div className="mt-6 space-y-0">
                {tracked.steps.map((step, i) => {
                  const done = i <= tracked.current;
                  const active = i === tracked.current;
                  return (
                    <div key={step} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${done ? "bg-blue-500 text-white" : "bg-slate-300 text-white"}`}>
                          {done ? "✓" : i + 1}
                        </div>
                        {i < tracked.steps.length - 1 && (
                          <div className={`h-10 w-0.5 ${i < tracked.current ? "bg-blue-500" : "bg-slate-300"}`} />
                        )}
                      </div>
                      <div className="pb-6">
                        <p className={`font-semibold ${active ? "text-blue-600" : done ? "text-[#0f1b2d]" : "text-slate-400"}`}>{step}</p>
                        {active && <p className="text-sm text-slate-500">Your package is on the move.</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="mt-2 text-xs text-slate-400">Demo tracking. Live tracking connects to real orders later.</p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold lg:text-4xl">Trusted by senders</h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="rounded-3xl border border-slate-200 bg-white p-8">
              <div className="mb-4 text-blue-500">★★★★★</div>
              <p className="text-slate-700">“{t.text}”</p>
              <div className="mt-6">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking */}
      <section ref={bookRef} className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-2xl px-6 py-20">
          {stage === "done" ? (
            <div className="rounded-3xl border border-slate-200 bg-[#f6f7f9] p-10 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-white">✓</div>
              <h3 className="text-2xl font-bold">Pickup requested</h3>
              <p className="mt-2 text-slate-600">
                Thanks. Your request is in and the driver will confirm shortly. Reference #{Math.floor(100000 + Math.random() * 900000)}.
              </p>
              <button onClick={() => { setStage("quote"); setPrice(null); }} className="mt-6 rounded-xl bg-[#0f1b2d] px-6 py-3 font-semibold text-white">
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
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-200 bg-[#f6f7f9]">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-center text-3xl font-bold lg:text-4xl">Questions, answered</h2>
          <div className="mt-10 space-y-3">
            {FAQ.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-slate-200 bg-white p-5">
                <summary className="cursor-pointer list-none font-semibold marker:content-none">
                  <span className="flex items-center justify-between">
                    {item.q}
                    <span className="text-blue-500 transition-transform group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Footer */}
      <section className="bg-[#0f1b2d] px-6 py-20 text-center text-white">
        <h2 className="text-4xl font-extrabold lg:text-5xl">Ready to send something?</h2>
        <p className="mt-4 text-slate-300">Get an instant quote and book a pickup in minutes.</p>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-8 rounded-full bg-blue-500 px-8 py-4 font-semibold text-white hover:bg-blue-600">
          Get a quote →
        </button>
      </section>

      <footer className="bg-[#0b1421] px-6 py-12 text-center text-sm text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4">
          <Logo light />
          <p>{BUSINESS.phone} · {BUSINESS.email}</p>
          <p>{BUSINESS.hours} · {BUSINESS.area}</p>
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} TOONO Logistics. Preview build.</p>
        </div>
      </footer>
    </div>
  );
}