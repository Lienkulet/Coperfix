const STEPS = [
  {
    num: "01",
    title: "Free Estimate",
    desc: "Give us a call. We'll come out, assess the work, and put an honest number on it. No fees, no pressure.",
  },
  {
    num: "02",
    title: "Clear Scope",
    desc: "We walk you through the materials, the timeline, and exactly what's included. No vague line items.",
  },
  {
    num: "03",
    title: "Quality Build",
    desc: "Rafael and the family crew get to work. Clean job sites, honest communication, no disappearing acts.",
  },
  {
    num: "04",
    title: "Walkthrough",
    desc: "We don't leave until you're happy. Final inspection, clean up, and a handshake. The way it should be.",
  },
];

export default function ServicesProcessSection() {
  return (
    <section className="py-24 bg-ink">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span
            className="inline-flex items-center justify-center gap-2 mb-4 uppercase tracking-[0.18em] text-brand-red"
            style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", fontWeight: 600 }}
          >
            <span className="w-6 h-px bg-brand-red" />
            How we work
          </span>
          <h2
            className="uppercase leading-none tracking-tight text-white"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.2rem,5vw,4rem)", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Four steps,<br />
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", textTransform: "none", color: "#C7252A" }}>one conversation.</span>
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ num, title, desc }) => (
            <div key={num} className="border-t border-white/15 pt-8">
              <span
                className="block mb-4 text-brand-red leading-none"
                style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "3rem", fontWeight: 700 }}
              >
                {num}
              </span>
              <h3
                className="uppercase text-white mb-3"
                style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.02em" }}
              >
                {title}
              </h3>
              <p className="text-white/60 leading-relaxed" style={{ fontSize: "0.95rem" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
