export default function QuoteCard({ quote, name, role }) {
  return (
    <figure className="relative pt-10 flex flex-col h-full">
      <span
        className="absolute top-0 -left-1 text-brand-red/30 leading-none select-none"
        aria-hidden="true"
        style={{ fontFamily: "var(--font-serif)", fontSize: "7rem", fontWeight: 900, lineHeight: 1 }}
      >
        "
      </span>

      <blockquote
        className="flex-1 text-ink mb-6 relative z-10"
        style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.1rem", lineHeight: 1.6 }}
      >
        {quote}
      </blockquote>

      <figcaption className="flex flex-col gap-1 pt-4 border-t border-black/10">
        <span className="text-brand-red tracking-wider text-sm" aria-hidden="true">★★★★★</span>
        <span
          className="text-ink uppercase tracking-wide"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.9rem" }}
        >
          {name}
        </span>
        <span className="text-gray-500 tracking-wide" style={{ fontSize: "0.75rem" }}>{role}</span>
      </figcaption>
    </figure>
  );
}
