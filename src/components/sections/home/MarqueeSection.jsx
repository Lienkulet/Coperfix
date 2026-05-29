import DotIcon from "@/components/icons/DotIcon";

const ITEMS = ["Copertine", "Terase", "Balcoane", "Garduri", "Parcari Auto", "Afacere de Familie", "5 Stele"];

export default function MarqueeSection() {
  return (
    <div
      className="bg-ink overflow-hidden py-5"
      style={{ borderTop: "3px solid #c9a14e", borderBottom: "3px solid #c9a14e" }}
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
                  WebkitTextStroke: i % 2 !== 0 ? "1.5px #c9a14e" : undefined,
                }}
              >
                {item}
                <DotIcon />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
