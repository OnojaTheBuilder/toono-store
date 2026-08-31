// TOONO Logistics wordmark + route mark. Pure SVG/text, fully editable.
export default function Logo({ light = false }) {
  const main = light ? "#ffffff" : "#0f1b2d";
  const sub = light ? "#93c5fd" : "#3b82f6";
  return (
    <div className="flex items-center gap-2.5">
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <rect width="34" height="34" rx="9" fill={sub} />
        <path d="M8 22 L14 12 L20 18 L26 10" stroke="#fff" strokeWidth="2.4"
          strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="8" cy="22" r="2.2" fill="#fff" />
        <circle cx="26" cy="10" r="2.2" fill="#fff" />
      </svg>
      <div className="leading-none">
        <span className="block text-lg font-extrabold tracking-tight" style={{ color: main }}>
          TOONO
        </span>
        <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.35em]" style={{ color: sub }}>
          Logistics
        </span>
      </div>
    </div>
  );
}