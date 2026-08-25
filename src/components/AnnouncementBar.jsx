const MESSAGES = [
  "Free shipping on orders over $100",
  "New season pieces just landed",
  "30-day easy returns, always",
  "Shipping from Canada, worldwide",
];

export default function AnnouncementBar() {
  return (
    <div className="overflow-hidden bg-neutral-950 py-2.5 text-xs uppercase tracking-[0.15em] text-neutral-300">
      <div className="flex animate-[marquee_28s_linear_infinite] whitespace-nowrap">
        {[...MESSAGES, ...MESSAGES, ...MESSAGES].map((m, i) => (
          <span key={i} className="mx-8 flex items-center gap-8">
            {m} <span className="text-emerald-400">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}