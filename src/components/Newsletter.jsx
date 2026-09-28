import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section className="bg-ivory px-6 py-20 text-white">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-4xl lg:text-5xl">Get first look at every drop.</h2>
        <p className="mt-4 text-ink/60">
          Join the list for early access and members-only pricing. No spam, ever.
        </p>
        {done ? (
          <p className="mt-8 font-medium text-clay">You're in. Watch your inbox.</p>
        ) : (
          <div className="mx-auto mt-8 flex max-w-md gap-3">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 rounded-full border border-ink/15 bg-white px-5 py-3.5 text-white outline-none focus:border-emerald-400"
            />
            <button
              onClick={() => email && setDone(true)}
              className="rounded-full bg-clay px-6 py-3.5 font-semibold text-ivory transition-transform active:scale-95"
            >
              Join
            </button>
          </div>
        )}
      </div>
    </section>
  );
}