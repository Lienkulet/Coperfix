import Image from "next/image";
import Link from "next/link";

export default function AboutFamilySection() {
  return (
    <section className="py-24 bg-bone">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div
          className="grid gap-16 items-center"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))" }}
        >
          <div className="overflow-hidden rounded-sm shadow-2xl group" style={{ aspectRatio: "4/5" }}>
            <Image
              src="/family.jpg"
              alt="Rafael Perez with his family"
              width={600}
              height={750}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              loading="lazy"
            />
          </div>

          <div>
            <span
              className="inline-flex items-center gap-2 mb-4 uppercase tracking-[0.18em] text-brand-red"
              style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", fontWeight: 600 }}
            >
              <span className="w-6 h-px bg-brand-red" />
              Meet the family
            </span>

            <h2
              className="text-ink uppercase leading-none tracking-tight mb-6"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.2rem,4.5vw,3.5rem)", fontWeight: 700, letterSpacing: "-0.01em" }}
            >
              This is<br />
              <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", textTransform: "none", color: "#C7252A" }}>who shows up.</span>
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4" style={{ fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "480px" }}>
              When we say family owned, we mean it. Rafael, his wife, and their kids are the reason this business exists, and the reason every project gets done the right way.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8" style={{ fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "480px" }}>
              You&apos;re not hiring a call center. You&apos;re hiring the Perez family.
            </p>

            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand-red text-white uppercase tracking-[0.1em] font-semibold transition-all duration-300 hover:bg-ink hover:-translate-y-0.5"
              style={{ fontFamily: "var(--font-heading)", fontSize: "0.85rem" }}
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
