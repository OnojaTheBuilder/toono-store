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
    <div className="min-h-screen bg-ivory text-ink">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-2">
        <div>
          <span className="text-sm uppercase tracking-[0.2em] text-clay">Get in touch</span>
          <h1 className="mt-4 font-serif text-5xl">We're easy to reach.</h1>
          <p className="mt-6 text-lg text-ink/60">
            Question about a piece, an order, or sizing? Send a note and you'll
            hear back from a real person, usually within a day.
          </p>

          <div className="mt-10 space-y-5">
            <div>
              <p className="text-sm text-ink0">Email</p>
              <p className="text-lg">hello@toono.example</p>
            </div>
            <div>
              <p className="text-sm text-ink0">Based in</p>
              <p className="text-lg">Canada, shipping worldwide</p>
            </div>
            <div>
              <p className="text-sm text-ink0">Hours</p>
              <p className="text-lg">Mon–Fri, 9am–6pm ET</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-ink/10 bg-white/50 p-8">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-clay text-2xl text-ivory">✓</div>
              <h3 className="font-serif text-2xl">Message sent</h3>
              <p className="mt-2 text-ink/60">Thanks {form.name}. We'll be in touch soon.</p>
            </div>
          ) : (
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm text-ink/60">Name</label>
                <input
                  value={form.name}
                  onChange={update("name")}
                  className="w-full rounded-xl border border-ink/15 bg-ivory px-4 py-3 text-ink outline-none focus:border-emerald-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-ink/60">Email</label>
                <input
                  value={form.email}
                  onChange={update("email")}
                  className="w-full rounded-xl border border-ink/15 bg-ivory px-4 py-3 text-ink outline-none focus:border-emerald-400"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-ink/60">Message</label>
                <textarea
                  value={form.message}
                  onChange={update("message")}
                  rows={4}
                  className="w-full rounded-xl border border-ink/15 bg-ivory px-4 py-3 text-ink outline-none focus:border-emerald-400"
                  placeholder="How can we help?"
                />
              </div>
              <button
                onClick={submit}
                className="w-full rounded-full bg-neutral-50 py-4 font-semibold text-ivory transition-transform active:scale-[0.98] hover:bg-clay"
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
