import { useState, useRef } from "react";
import { BUSINESS, STATS, COVERAGE, TESTIMONIALS, FAQ } from "../../data/pricing";
import Logo from "./Logo";
import QuoteCalculator from "./QuoteCalculator";
import BookingForm from "./BookingForm";

const img = (id, w = 900) => `https://images.unsplash.com/${id}?w=${w}&q=80`;

// Service cards, each with its own image + description + CTA (Canada Cartage pattern).
const SERVICES = [
  { t: "Courier & Same-Day", d: "Urgent parcels picked up and delivered across the city, often same day.", img: "photo-1553413077-190dd305871c" },
  { t: "Order Fulfilment", d: "We pick, pack, and ship your online orders so you don't have to.", img: "photo-1586528116311-ad8dd3c8310d" },
  { t: "Warehousing & Storage", d: "Short or long-term storage with your stock ready to move when you are.", img: "photo-1553413077-190dd305871c" },
  { t: "Freight & Furniture", d: "Bulky items and full loads moved intact, from single pieces to a full truck.", img: "photo-1600518464441-9154a4dea21b" },
  { t: "Distribution Runs", d: "Scheduled multi-stop routes that keep your deliveries predictable.", img: "photo-1601584115197-04ecc0da31d7" },
  { t: "Intercity Transport", d: "Reliable point-to-point delivery between cities across the region.", img: "photo-1519003722824-194d4455a60c" },
];

const STEPS = [
  { n: "1", t: "Get a quote", d: "Enter where it's going and the size. Price is instant, no waiting on a callback." },
  { n: "2", t: "Book a pickup", d: "Give us sender, receiver, and when to collect. Two minutes, done." },
  { n: "3", t: "We deliver", d: "Your goods are collected and delivered, handled door to door." },
];

const WHY = [
  "Owner-operated, not a faceless chain of subcontractors",
  "Upfront pricing you see before you book",
  "Same-day options on local runs",
  "Your goods handled like they're our own",
];

const FAKE_TRACK = { steps: ["Order received", "Picked up", "In transit", "Out for delivery", "Delivered"], current: 2 };

export default function LogisticsPage({ onBackToStore }) {
  const [stage, setStage] = useState("quote");
  const [price, setPrice] = useState(null);
  const [trackId, setTrackId] = useState("");
  const [tracked, setTracked] = useState(null);
  const bookRef = useRef(null);
  const trackRef = useRef(null);

  const goBook = (p) => { setPrice(p); setStage("book"); setTimeout(() => bookRef.current?.scrollIntoView({ behavior: "smooth" }), 50); };
  const runTrack = () => { if (trackId.trim()) setTracked(FAKE_TRACK); };

  return (
    <div className="min-h-screen bg-white text-[#0f1b2d]">
      {/* Top bar */}
      <div className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Logo />
          <div className="hidden items-center gap-7 md:flex">
            <button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="text-sm font-medium text-slate-600 hover:text-[#0f1b2d]">Services</button>
            <button onClick={() => trackRef.current?.scrollIntoView({ behavior: "smooth" })} className="text-sm font-medium text-slate-600 hover:text-[#0f1b2d]">Track</button>
            <button onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })} className="text-sm font-medium text-slate-600 hover:text-[#0f1b2d]">FAQ</button>
            <button onClick={onBackToStore} className="text-sm font-medium text-slate-500 hover:text-[#0f1b2d]">← Store</button>
          </div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-600 md:hidden">Quote</button>
        </div>
      </div>

      {/* HERO */}
      <section className="relative">
        <div className="relative min-h-[560px] w-full overflow-hidden">
          <img src={img("photo-1601584115197-04ecc0da31d7", 1600)} alt="Delivery truck on the road" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1b2d] via-[#0f1b2d]/90 to-[#0f1b2d]/40" />
          <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:py-24">
            <div className="text-white">
              <span className="inline-block rounded-full bg-blue-500/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-200">Serving {BUSINESS.area}</span>
              <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] tracking-tight lg:text-7xl">{BUSINESS.tagline}</h1>
              <p className="mt-5 max-w-md text-lg text-slate-300">Fast, careful pickup and delivery across the region. Instant quotes, honest pricing, delivered door to door.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="rounded-full bg-white px-7 py-3.5 font-semibold text-[#0f1b2d] hover:bg-blue-50">Our services</button>
                <button onClick={() => trackRef.current?.scrollIntoView({ behavior: "smooth" })} className="rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white hover:bg-white/10">Track a package</button>
              </div>
            </div>
            <div className="lg:pl-6"><QuoteCalculator onBook={goBook} /></div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-slate-200 bg-[#f6f7f9] py-8">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Businesses that ship with us</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-lg font-bold text-slate-400">
            <span>Northline Retail</span><span>Maple &amp; Co.</span><span>Harbour Goods</span><span>CityFresh</span><span>Beacon Supply</span>
          </div>
          <p className="mt-3 text-center text-[11px] text-slate-400">Sample partners shown for preview.</p>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#0f1b2d] px-6 py-14 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.l} className="text-center">
              <p className="text-4xl font-extrabold text-blue-400 lg:text-5xl">{s.n}</p>
              <p className="mt-2 text-sm text-slate-400">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES — rich cards */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">What we do</span>
          <h2 className="mt-3 text-4xl font-bold lg:text-5xl">Every kind of delivery, one operator.</h2>
          <p className="mt-4 text-lg text-slate-600">From a single urgent parcel to a full truckload, handled with the same care.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.t} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-xl hover:shadow-slate-900/10">
              <div className="h-44 overflow-hidden">
                <img src={img(s.img, 600)} alt={s.t} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.d}</p>
                <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="mt-4 text-sm font-semibold text-blue-600 hover:text-blue-700">Get a quote →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US — two column with image */}
      <section className="border-y border-slate-200 bg-[#f6f7f9]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl">
            <img src={img("photo-1586528116311-ad8dd3c8310d", 1000)} alt="Loading a delivery van" className="h-full w-full object-cover" />
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">Why {BUSINESS.name}</span>
            <h2 className="mt-3 text-4xl font-bold lg:text-5xl">Delivery you don't have to chase.</h2>
            <p className="mt-4 text-lg text-slate-600">You get a real operator who answers, quotes fast, and treats your shipment like it matters. Because it does.</p>
            <ul className="mt-8 space-y-4">
              {WHY.map((w) => (
                <li key={w} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">✓</span>
                  <span className="text-slate-700">{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-center text-4xl font-bold lg:text-5xl">How it works</h2>
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-slate-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-lg font-bold text-white">{s.n}</div>
              <h3 className="mt-5 text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-slate-600">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COVERAGE */}
      <section className="border-y border-slate-200 bg-[#f6f7f9] px-6 py-24 text-center">
        <h2 className="text-4xl font-bold lg:text-5xl">Where we deliver</h2>
        <p className="mt-3 text-slate-600">{COVERAGE.length} cities across {BUSINESS.area}, and growing.</p>
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
          {COVERAGE.map((c) => (
            <span key={c} className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700">{c}</span>
          ))}
        </div>
      </section>

      {/* TRACKING */}
      <section ref={trackRef} className="mx-auto max-w-3xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold lg:text-5xl">Track a package</h2>
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
      </section>

      {/* TESTIMONIALS */}
      <section className="border-y border-slate-200 bg-[#f6f7f9] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-4xl font-bold lg:text-5xl">Trusted by senders</h2>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-3xl border border-slate-200 bg-white p-8">
                <div className="mb-4 text-blue-500">★★★★★</div>
                <p className="text-slate-700">“{t.text}”</p>
                <div className="mt-6"><p className="font-semibold">{t.name}</p><p className="text-sm text-slate-500">{t.role}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section ref={bookRef} className="mx-auto max-w-2xl px-6 py-24">
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
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-slate-200 bg-[#f6f7f9] px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-4xl font-bold lg:text-5xl">Questions, answered</h2>
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

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#0f1b2d] px-6 py-24 text-center text-white">
        <img src={img("photo-1586528116311-ad8dd3c8310d", 1400)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="relative">
          <h2 className="text-4xl font-extrabold lg:text-5xl">Ready to send something?</h2>
          <p className="mt-4 text-slate-300">Instant quote, pickup booked in minutes.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="mt-8 rounded-full bg-blue-500 px-8 py-4 font-semibold text-white hover:bg-blue-600">Get a quote →</button>
        </div>
      </section>

      <footer className="bg-[#0b1421] px-6 py-14 text-center text-sm text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4">
          <Logo light />
          <p>{BUSINESS.phone} · {BUSINESS.email}</p>
          <p>{BUSINESS.hours} · {BUSINESS.area}</p>
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} {BUSINESS.name}. Preview build.</p>
        </div>
      </footer>
    </div>
  );
}