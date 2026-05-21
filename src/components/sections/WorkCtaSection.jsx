import Link from "next/link";

const PROJECT_NUMBER = 19;
const PHONE_DISPLAY  = "(541) 992-3126";
const PHONE_HREF     = "tel:+15419923126";

export default function WorkCtaSection() {
  return (
    <section className="bg-bone" style={{ padding: "clamp(4rem,9vw,7rem) 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-[720px] mx-auto">
          <span
            className="inline-flex items-center justify-center gap-3 mb-4 text-brand-red uppercase tracking-[0.28em]"
            style={{ fontFamily: "var(--font-heading)", fontSize: "0.78rem", fontWeight: 600 }}
          >
            <span className="w-8 h-px bg-brand-red" />
            Ready to build?
          </span>
          <h2
            className="uppercase text-ink mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.2rem,5vw,4rem)",
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.01em",
            }}
          >
            Let&apos;s make yours
            <br />
            <span
              className="text-brand-red"
              style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", textTransform: "none" }}
            >
              project #{PROJECT_NUMBER}.
            </span>
          </h2>
          <p
            className="text-gray-700 mx-auto mb-8"
            style={{ fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 560 }}
          >
            Free estimate, honest scope, in house family crew. Call Rafael or drop us a message.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-9 py-[18px] bg-brand-red border-2 border-brand-red text-white uppercase tracking-[0.1em] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:border-ink"
              style={{ fontFamily: "var(--font-heading)", fontSize: "0.95rem" }}
            >
              Get a Free Estimate
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center px-9 py-[18px] bg-transparent border-2 border-ink text-ink uppercase tracking-[0.1em] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-white"
              style={{ fontFamily: "var(--font-heading)", fontSize: "0.95rem" }}
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
