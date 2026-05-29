import Image from "next/image";
import Link from "next/link";

export default function FamilySection() {
  return (
    <section className="py-24 bg-bone">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div
          className="grid gap-16 items-center"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))" }}
        >
          <div className="overflow-hidden rounded-sm shadow-2xl group" style={{ aspectRatio: "4/5" }}>
            <Image
              src="/familytest.jpg"
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
              Cunoaște echipa
            </span>

            <h2
              className="text-ink uppercase leading-none tracking-tight mb-6"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.2rem,4.5vw,3.5rem)", fontWeight: 700, letterSpacing: "-0.01em" }}
            >
              Aceștia sunt<br />
              <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", textTransform: "none", color: "#c9a14e" }}>cei care vin.</span>
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4" style={{ fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "480px" }}>
              Când spunem afacere de familie, chiar asta înseamnă. Echipa noastră este motivul pentru care această afacere există și motivul pentru care fiecare proiect este dus la bun sfârșit.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8" style={{ fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "480px" }}>
              Nu angajezi un call center. Angajezi echipa Coperfix.
            </p>

            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand-red text-white uppercase tracking-[0.1em] font-semibold transition-all duration-300 hover:bg-ink hover:-translate-y-0.5"
              style={{ fontFamily: "var(--font-heading)", fontSize: "0.85rem" }}
            >
              Solicită ofertă gratuită
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
