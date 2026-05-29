const REVIEW = {
  quote: "Echipa și familia Coperfix sunt extraordinare în ceea ce fac. Au făcut recomandări în funcție de nevoile și bugetul nostru, cu siguranța ca prioritate.",
  rating: "5.0",
  count: 18,
};

export default function ReviewBand() {
  return (
    <section
      className="bg-ink text-white text-center relative overflow-hidden"
      style={{ padding: "clamp(3rem,6vw,5rem) 0" }}
    >
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-red" />
      <div className="max-w-7xl mx-auto px-6">
        <figure className="max-w-[820px] mx-auto">
          <span
            className="block text-brand-red mb-6"
            style={{ letterSpacing: "0.2em", fontSize: "1.3rem" }}
            aria-hidden="true"
          >
            ★★★★★
          </span>
          <blockquote
            className="text-white mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(1.3rem,2.5vw,2rem)",
              fontWeight: 700,
              lineHeight: 1.4,
            }}
          >
            &ldquo;{REVIEW.quote}&rdquo;
          </blockquote>
          <figcaption
            className="uppercase tracking-[0.2em] text-white/65"
            style={{ fontFamily: "var(--font-heading)", fontSize: "0.8rem" }}
          >
            Recenzii Google verificate ·{" "}
            <strong className="text-brand-red">{REVIEW.rating}</strong> medie ·{" "}
            {REVIEW.count} recenzii
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
