import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section className="bg-neutral-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-4xl lg:text-5xl">Get first look at every drop.</h2>
        <p className="mt-4 text-neutral-400">
          Join the list for early access and members-only pricing. No spam, ever.
        </p>
        {done ? (
          <p className="mt-8 font-medium text-emerald-400">You're in. Watch your inbox.</p>
        ) : (
          <div className="mx-auto mt-8 flex max-w-md gap-3">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 rounded-full border border-white/15 bg-neutral-900 px-5 py-3.5 text-white outline-none focus:border-emerald-400"
            />
            <button
              onClick={() => email && setDone(true)}
              className="rounded-full bg-emerald-400 px-6 py-3.5 font-semibold text-neutral-950 transition-transform active:scale-95"
            >
              Join
            </button>
          </div>
        )}
      </div>
    </section>
  );
}