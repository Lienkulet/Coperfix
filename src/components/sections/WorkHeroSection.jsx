export default function WorkHeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-bone"
      style={{ padding: "clamp(3rem,6vw,5rem) 0 clamp(2rem,4vw,3rem)" }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          top: -120,
          left: "40%",
          width: 420,
          height: 420,
          background: "radial-gradient(circle, rgba(199,37,42,0.1) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center max-w-[820px] mx-auto">
          <span
            className="inline-flex items-center justify-center gap-3 mb-4 text-brand-red uppercase tracking-[0.28em]"
            style={{ fontFamily: "var(--font-heading)", fontSize: "0.78rem", fontWeight: 600 }}
          >
            <span className="w-8 h-px bg-brand-red" />
            Our work
          </span>
          <h1
            className="uppercase text-ink mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(3rem,8vw,6.5rem)",
              fontWeight: 700,
              lineHeight: 0.94,
              letterSpacing: "-0.02em",
            }}
          >
            Projects we&apos;re
            <br />
            <span
              className="text-brand-red"
              style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", textTransform: "none" }}
            >
              proud of.
            </span>
          </h1>
          <p className="text-gray-700 mx-auto" style={{ fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 640 }}>
            Discover our craftsmanship through a curated collection of recent roofing, deck, fence, and masonry projects around Beaverton and the Portland metro.
          </p>
        </div>
      </div>
    </section>
  );
}
