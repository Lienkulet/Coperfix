const VALUES = [
  { num: "01 /", title: "Client Focused",        desc: "Every project is built around your goals, your timeline, and your budget, not ours. We listen first and build second." },
  { num: "02 /", title: "Reputation",             desc: "A perfect 5 star Google rating from homeowners who trusted us with their roof, deck, fence, or chimney. We take that seriously." },
  { num: "03 /", title: "Family Owned & Local",   desc: "Rafael and his family run this company themselves. No call center, no middlemen. Just a local Beaverton crew that cares." },
  { num: "04 /", title: "Licensed & Insured",     desc: "Fully licensed, bonded, and insured in Oregon. Your project is protected from the first estimate to the final handshake." },
  { num: "05 /", title: "Personalized Service",   desc: "No cookie cutter jobs. Every roof, deck, and fence is tailored to your home, your materials, and your specific needs." },
];

function ValueRow({ num, title, desc }) {
  return (
    <div
      className="grid items-center border-t border-black/10 last:border-b last:border-black/10"
      style={{ gridTemplateColumns: "80px 1fr 2fr", gap: "clamp(1rem,3vw,2rem)", padding: "1.75rem 0" }}
    >
      <span
        style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 700, fontSize: "clamp(1.5rem,3vw,2rem)", color: "#C7252A", lineHeight: 1 }}
      >
        {num}
      </span>
      <h3
        className="text-ink uppercase leading-tight"
        style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 700, letterSpacing: "0.01em" }}
      >
        {title}
      </h3>
      <p className="text-gray-700 leading-relaxed" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
        {desc}
      </p>
    </div>
  );
}

export default function AboutValuesSection() {
  return (
    <section className="py-24 bg-bone">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mb-12">
          <span
            className="inline-flex items-center gap-2 mb-4 uppercase tracking-[0.18em] text-brand-red"
            style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", fontWeight: 600 }}
          >
            <span className="w-6 h-px bg-brand-red" />
            Why homeowners hire us
          </span>
          <h2
            className="text-ink uppercase leading-none tracking-tight"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.2rem,5vw,4rem)", fontWeight: 700, letterSpacing: "-0.01em" }}
          >
            What we promise.
          </h2>
        </div>

        <div className="flex flex-col">
          {VALUES.map((v) => (
            <ValueRow key={v.num} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
}
