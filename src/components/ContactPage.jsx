import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = () => {
    // Preview only: no real send. Just show a confirmation state.
    if (form.name && form.email && form.message) setSent(true);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-2">
        <div>
          <span className="text-sm uppercase tracking-[0.2em] text-emerald-400">Get in touch</span>
          <h1 className="mt-4 font-serif text-5xl">We're easy to reach.</h1>
          <p className="mt-6 text-lg text-neutral-400">
            Question about a piece, an order, or sizing? Send a note and you'll
            hear back from a real person, usually within a day.
          </p>

          <div className="mt-10 space-y-5">
            <div>
              <p className="text-sm text-neutral-500">Email</p>
              <p className="text-lg">hello@toono.example</p>
            </div>
            <div>
              <p className="text-sm text-neutral-500">Based in</p>
              <p className="text-lg">Canada, shipping worldwide</p>
            </div>
            <div>
              <p className="text-sm text-neutral-500">Hours</p>
              <p className="text-lg">Mon–Fri, 9am–6pm ET</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-neutral-900/50 p-8">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400 text-2xl text-neutral-950">✓</div>
              <h3 className="font-serif text-2xl">Message sent</h3>
              <p className="mt-2 text-neutral-400">Thanks {form.name}. We'll be in touch soon.</p>
            </div>
          ) : (
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm text-neutral-400">Name</label>
                <input
                  value={form.name}
                  onChange={update("name")}
                  className="w-full rounded-xl border border-white/15 bg-neutral-950 px-4 py-3 text-neutral-50 outline-none focus:border-emerald-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-neutral-400">Email</label>
                <input
                  value={form.email}
                  onChange={update("email")}
                  className="w-full rounded-xl border border-white/15 bg-neutral-950 px-4 py-3 text-neutral-50 outline-none focus:border-emerald-400"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-neutral-400">Message</label>
                <textarea
                  value={form.message}
                  onChange={update("message")}
                  rows={4}
                  className="w-full rounded-xl border border-white/15 bg-neutral-950 px-4 py-3 text-neutral-50 outline-none focus:border-emerald-400"
                  placeholder="How can we help?"
                />
              </div>
              <button
                onClick={submit}
                className="w-full rounded-full bg-neutral-50 py-4 font-semibold text-neutral-950 transition-transform active:scale-[0.98] hover:bg-emerald-400"
              >
                Send message
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
