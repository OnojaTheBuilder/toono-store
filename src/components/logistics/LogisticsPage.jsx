import { useState, useRef } from "react";
import { BUSINESS, STATS, COVERAGE, TESTIMONIALS, FAQ } from "../../data/pricing";
import Logo from "./Logo";
import QuoteCalculator from "./QuoteCalculator";
import BookingForm from "./BookingForm";

const STEPS = [
  { n: "1", t: "Get a quote", d: "Enter where it's going and the size. Price is instant.", img: "photo-1553413077-190dd305871c" },
  { n: "2", t: "Book a pickup", d: "Sender, receiver, and when you need it collected.", img: "photo-1586528116311-ad8dd3c8310d" },
  { n: "3", t: "We deliver", d: "Picked up and delivered, door to door.", img: "photo-1601584115197-04ecc0da31d7" },
];

const SERVICES = [
  { t: "Courier & delivery", img: "photo-1601584115197-04ecc0da31d7" },
  { t: "Order fulfilment", img: "photo-1553413077-190dd305871c" },
  { t: "Warehousing & storage", img: "photo-1586528116311-ad8dd3c8310d" },
  { t: "Bulk & furniture moves", img: "photo-1600518464441-9154a4dea21b" },
];

const img = (id, w = 900) => `https://images.unsplash.com/${id}?w=${w}&q=80`;

const FAKE_TRACK = { steps: ["Order received", "Picked up", "In transit", "Out for delivery", "Delivered"], current: 2 };

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
  const runTrack = () => { if (trackId.trim()) setTracked(FAKE_TRACK); };

  return (
    <div className="min-h-screen bg-[#f6f7f9] text-[#0f1b2d]">
      {/* Top bar */}
      <div className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Logo />
          <div className="flex items-center gap-5">
            <button onClick={() => trackRef.current?.scrollIntoView({ behavior: "smooth" })} className="hidden text-sm font-medium text-slate-600 hover:text-[#0f1b2d] sm:block">Track</button>
            <button onClick={onBackToStore} className="text-sm font-medium text-slate-500 hover:text-[#0f1b2d]">← Back to store</button>
          </div>
        </div>
      </div>

      {/* HERO — big image, quote box overlapping */}
      <section className="relative">
        <div className="relative h-[520px] w-full overflow-hidden lg:h-[560px]">
          <img src={img("photo-1601584115197-04ecc0da31d7", 1600)} alt="Delivery truck on the road" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1b2d] via-[#0f1b2d]/85 to-[#0f1b2d]/30" />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-6xl items-center px-6">
              <div className="max-w-xl text-white">
                <span className="inline-block rounded-full bg-blue-500/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-200">Serving {BUSINESS.area}</span>
                <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] tracking-tight lg:text-7xl">{BUSINESS.tagline}</h1>
                <p className="mt-5 max-w-md text-lg text-slate-300">Fast, careful pickup and delivery across the region. Instant quotes, door to door.</p>
                <div className="mt-7 flex flex-wrap gap-6 text-sm text-slate-300">
                  <span>📞 {BUSINESS.phone}</span>
                  <span>🕑 {BUSINESS.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Quote box overlapping the hero bottom */}
        <div className="mx-auto -mt-20 max-w-6xl px-6 lg:-mt-28">
          <div className="ml-auto lg:w-[440px]">
            <QuoteCalculator onBook={goBook} />
          </div>
        </div>
      </section>

      {/* STATS band */}
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

      {/* HOW IT WORKS — now with imagery */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold lg:text-4xl">How it works</h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="relative h-40 overflow-hidden">
                <img src={img(s.img, 600)} alt={s.t} className="h-full w-full object-cover" />
                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 font-bold text-white shadow-lg">{s.n}</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES — photo tiles instead of text list */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold lg:text-4xl">What we move</h2>
          <p className="mt-2 text-slate-600">From a single parcel to a full truck.</p>
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <div key={s.t} className="group relative overflow-hidden rounded-2xl">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={img(s.img, 500)} alt={s.t} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1b2d]/90 via-[#0f1b2d]/10 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 font-semibold text-white">{s.t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold lg:text-4xl">Where we deliver</h2>
        <p className="mt-3 text-slate-600">{COVERAGE.length} cities across {BUSINESS.area}, and growing.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {COVERAGE.map((c) => (
            <span key={c} className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700">{c}</span>
          ))}
        </div>
      </section>

      {/* TRACKING */}
      <section ref={trackRef} className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold lg:text-4xl">Track a package</h2>
            <p className="mt-3 text-slate-600">Enter your tracking number to see where it is.</p>
          </div>
          <div className="mx-auto mt-8 flex max-w-lg gap-3">
            <input value={trackId} onChange={(e) => setTrackId(e.target.value)} placeholder="e.g. TOONO-482910"
              className="flex-1 rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
            <button onClick={runTrack} className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-600">Track</button>
          </div>
          {tracked && (
            <div className="mt-10 rounded-3xl border border-slate-200 bg-[#f6f7f9] p-8">
              <p className="text-sm text-slate-500">Tracking {trackId || "TOONO-482910"}</p>
              <div className="mt-6">
                {tracked.steps.map((step, i) => {
                  const done = i <= tracked.current, active = i === tracked.current;
                  return (
                    <div key={step} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${done ? "bg-blue-500 text-white" : "bg-slate-300 text-white"}`}>{done ? "✓" : i + 1}</div>
                        {i < tracked.steps.length - 1 && <div className={`h-10 w-0.5 ${i < tracked.current ? "bg-blue-500" : "bg-slate-300"}`} />}
                      </div>
                      <div className="pb-6">
                        <p className={`font-semibold ${active ? "text-blue-600" : done ? "text-[#0f1b2d]" : "text-slate-400"}`}>{step}</p>
                        {active && <p className="text-sm text-slate-500">Your package is on the move.</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="mt-2 text-xs text-slate-400">Demo tracking. Connects to real orders later.</p>
            </div>
          )}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold lg:text-4xl">Trusted by senders</h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="rounded-3xl border border-slate-200 bg-white p-8">
              <div className="mb-4 text-blue-500">★★★★★</div>
              <p className="text-slate-700">“{t.text}”</p>
              <div className="mt-6"><p className="font-semibold">{t.name}</p><p className="text-sm text-slate-500">{t.role}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING */}
      <section ref={bookRef} className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-2xl px-6 py-20">
          {stage === "done" ? (
            <div className="rounded-3xl border border-slate-200 bg-[#f6f7f9] p-10 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-white">✓</div>
              <h3 className="text-2xl font-bold">Pickup requested</h3>
              <p className="mt-2 text-slate-600">Thanks. The driver will confirm shortly. Reference #{Math.floor(100000 + Math.random() * 900000)}.</p>
              <button onClick={() => { setStage("quote"); setPrice(null); }} className="mt-6 rounded-xl bg-[#0f1b2d] px-6 py-3 font-semibold text-white">Book another</button>
            </div>
          ) : stage === "book" ? (
            <BookingForm quotedPrice={price} onDone={() => setStage("done")} />
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">Get a quote above, then book your pickup here.</div>
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
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold marker:content-none">
                  {item.q}<span className="text-blue-500 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + FOOTER */}
      <section className="relative overflow-hidden bg-[#0f1b2d] px-6 py-24 text-center text-white">
        <img src={img("photo-1586528116311-ad8dd3c8310d", 1400)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="relative">
          <h2 className="text-4xl font-extrabold lg:text-5xl">Ready to send something?</h2>
          <p className="mt-4 text-slate-300">Instant quote, pickup booked in minutes.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="mt-8 rounded-full bg-blue-500 px-8 py-4 font-semibold text-white hover:bg-blue-600">Get a quote →</button>
        </div>
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