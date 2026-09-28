const MESSAGES = [
  "Free shipping on orders over $100",
  "New season pieces just landed",
  "30-day easy returns, always",
  "Shipping from Canada, worldwide",
];

export default function AnnouncementBar() {
  return (
    <div className="overflow-hidden bg-ivory py-2.5 text-xs uppercase tracking-[0.15em] text-ink/70">
      <div className="flex animate-[marquee_28s_linear_infinite] whitespace-nowrap">
        {[...MESSAGES, ...MESSAGES, ...MESSAGES].map((m, i) => (
          <span key={i} className="mx-8 flex items-center gap-8">
            {m} <span className="text-clay">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}