const ITEMS = ["Roofing", "Decks", "Fences", "Masonry", "Family Owned", "5 Star Rated", "Beaverton OR"];

function Dot() {
  return (
    <svg className="text-brand-red shrink-0" width="8" height="8" viewBox="0 0 8 8">
      <circle cx="4" cy="4" r="4" fill="currentColor" />
    </svg>
  );
}

export default function MarqueeSection() {
  return (
    <div
      className="bg-ink overflow-hidden py-5"
      style={{ borderTop: "3px solid #C7252A", borderBottom: "3px solid #C7252A" }}
    >
      <div className="marquee-track flex w-max" style={{ willChange: "transform" }}>
        {[0, 1, 2].map((groupIdx) => (
          <div key={groupIdx} className="flex shrink-0 items-center">
            {ITEMS.map((item, i) => (
              <span
                key={`${groupIdx}-${i}`}
                className="inline-flex items-center gap-8 pr-8"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.8rem,3.5vw,3rem)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  color: i % 2 === 0 ? "#fff" : "transparent",
                  WebkitTextStroke: i % 2 !== 0 ? "1.5px #C7252A" : undefined,
                }}
              >
                {item}
                <Dot />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
