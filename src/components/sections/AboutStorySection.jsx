export default function AboutStorySection() {
  return (
    <section className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div
          className="grid gap-16"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gridTemplateRows: "auto" }}
        >
          <div>
            <span
              className="inline-flex items-center gap-2 mb-4 uppercase tracking-[0.18em] text-brand-red"
              style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", fontWeight: 600 }}
            >
              <span className="w-6 h-px bg-brand-red" />
              Our story
            </span>
            <h2
              className="text-ink uppercase leading-none tracking-tight"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.2rem,4.5vw,3.5rem)", fontWeight: 700, letterSpacing: "-0.01em" }}
            >
              Dedicated to<br />exceeding<br />expectations.
            </h2>
          </div>

          <div>
            <p
              className="leading-relaxed mb-6 pl-5 border-l-[3px] border-brand-red"
              style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.4rem", lineHeight: 1.55, color: "#161a1e" }}
            >
              We started R &amp; D Perez Construction because we believe exterior work — roofs, decks, fences, chimneys — should be done <em style={{ fontStyle: "italic", color: "#C7252A" }}>right</em>, by people who actually care about the finished product.
            </p>
            <p className="text-gray-700 leading-relaxed mb-5" style={{ fontSize: "1.02rem", lineHeight: 1.8 }}>
              That philosophy hasn&apos;t changed. Rafael runs the estimate. Rafael and his family run the crew. And when the job&apos;s done, it&apos;s Rafael who does the walkthrough.
            </p>
            <p className="text-gray-700 leading-relaxed mb-5" style={{ fontSize: "1.02rem", lineHeight: 1.8 }}>
              We specialize in <strong style={{ color: "#161a1e", fontWeight: 600 }}>roofing, decks, fences, and masonry</strong>. Whether it&apos;s a complete roof replacement, a new composite deck, a full fence install, or the occasional chimney tuck point that comes up during roofing work, we handle it with the same precision and accountability.
            </p>
            <p className="text-gray-700 leading-relaxed" style={{ fontSize: "1.02rem", lineHeight: 1.8 }}>
              For homeowners, that means honest recommendations, transparent pricing, and a crew that shows up when we say we will. For the community, it means a small Beaverton business doing real work for the neighborhood we live in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
