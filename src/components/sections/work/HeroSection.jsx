export default function HeroSection() {
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
            Lucrările noastre
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
            Proiecte de care
            <br />
            <span
              className="text-brand-red"
              style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", textTransform: "none" }}
            >
              suntem mândri.
            </span>
          </h1>
          <p className="text-gray-700 mx-auto" style={{ fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 640 }}>
            Descoperiți măiestria noastră printr-o colecție de proiecte recente de copertine pentru terase, balcoane, garduri, parcari auto executate în toată Moldova.
          </p>
        </div>
      </div>
    </section>
  );
}
