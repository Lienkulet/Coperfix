import Link from "next/link";

export default function ServicesCtaSection() {
  return (
    <section className="py-24 bg-bone">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <span
            className="inline-flex items-center justify-center gap-2 mb-4 uppercase tracking-[0.18em] text-brand-red"
            style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", fontWeight: 600 }}
          >
            <span className="w-6 h-px bg-brand-red" />
            Ready?
          </span>

          <h2
            className="text-ink uppercase leading-none tracking-tight mb-4"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.2rem,5vw,4rem)", fontWeight: 700, letterSpacing: "-0.01em" }}
          >
            Not sure where<br />
            to start?{" "}
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", textTransform: "none", color: "#C7252A" }}>Just ask.</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mx-auto mb-10" style={{ fontSize: "1.05rem", maxWidth: "480px" }}>
            Call Rafael direct or drop a message. We&apos;ll take it from there.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-9 py-5 bg-brand-red text-white uppercase tracking-[0.1em] font-semibold transition-all duration-300 hover:bg-ink hover:-translate-y-0.5"
              style={{ fontFamily: "var(--font-heading)", fontSize: "0.95rem", border: "2px solid #C7252A" }}
            >
              Request Free Estimate
            </Link>
            <a
              href="tel:+15419923126"
              className="inline-flex items-center justify-center px-9 py-5 bg-transparent text-ink uppercase tracking-[0.1em] font-semibold transition-all duration-300 hover:bg-ink hover:text-white hover:-translate-y-0.5"
              style={{ fontFamily: "var(--font-heading)", fontSize: "0.95rem", border: "2px solid #161a1e" }}
            >
              (541) 992-3126
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
