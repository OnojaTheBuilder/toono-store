const ITEMS = [
  { icon: "✦", title: "Free shipping", text: "On all orders over $100" },
  { icon: "↺", title: "30-day returns", text: "No-questions-asked" },
  { icon: "✎", title: "Real support", text: "A person replies within 24h" },
  { icon: "✓", title: "Secure checkout", text: "Encrypted and protected" },
];

export default function TrustStrip() {
  return (
    <section className="bg-[#f5f2ec] px-6 py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
        {ITEMS.map((i) => (
          <div key={i.title} className="text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-lg text-emerald-400">
              {i.icon}
            </div>
            <h4 className="font-semibold text-neutral-900">{i.title}</h4>
            <p className="mt-1 text-sm text-neutral-500">{i.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}