import Link from "next/link";

const TRANSFORMATION_VIDEO = "https://customer-f1c0lq96bzugmlg4.cloudflarestream.com/86f2644d2079ab41e2727cc12c39df96/downloads/default.mp4";

const CHECKLIST = [
  "Demontare completă și inspecția structurii",
  "Montaj structură nouă din aluminiu",
  "Construită să reziste decenii în orice vreme",
];

export default function TransformationSection() {
  return (
    <section className="py-24 bg-bone">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid gap-16 items-center" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))" }}>

          <div className="relative rounded-sm overflow-hidden shadow-2xl" style={{ aspectRatio: "16/10", background: "#161a1e" }}>
            <video
              className="w-full h-full object-cover block"
              autoPlay muted loop playsInline preload="metadata"
              poster="/rd-drone-4.jpg"
              src={TRANSFORMATION_VIDEO}
            />
            <span
              className="absolute top-4 left-4 bg-brand-red text-white uppercase tracking-[0.18em] px-3.5 py-2 inline-flex items-center gap-1.5"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.72rem" }}
            >
              Before <span className="text-sm">→</span> After
            </span>
          </div>

          <div>
            <span
              className="inline-flex items-center gap-2 mb-4 uppercase tracking-[0.18em] text-brand-red"
              style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", fontWeight: 600 }}
            >
              <span className="w-6 h-px bg-brand-red" />
              Proiect real
            </span>

            <h2
              className="text-ink uppercase leading-none tracking-tight mb-5"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,4.2vw,3.2rem)", fontWeight: 700 }}
            >
              Copertina veche înlăturată.
              <br />
              <span className="text-brand-red" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", textTransform: "none" }}>
                Copertina nouă montată.
              </span>
            </h2>

            <p className="text-gray-700 leading-[1.7] mb-4 max-w-[480px]" style={{ fontSize: "1rem" }}>
              Această proprietate din Chișinău ne-a fost adusă cu copertina veche deteriorată, ajunsă la
              capătul duratei de viață. Am demontat structura veche, am inspectat fiecare punct slab și am
              montat o structură nouă din aluminiu, construită să reziste decenii.
            </p>
            <p className="text-gray-700 leading-[1.7]" style={{ fontSize: "1rem" }}>
              Urmărește transformarea în timp real. Aceeași proprietate, acoperire complet nouă.
            </p>

            <ul className="mt-5 mb-7 flex flex-col gap-2">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-ink-soft" style={{ fontSize: "0.95rem" }}>
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-red text-white text-xs font-bold shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-red text-white uppercase tracking-widest font-semibold transition-colors duration-200 hover:bg-brand-red-dark"
                style={{ fontFamily: "var(--font-heading)", fontSize: "0.82rem" }}
              >
                Solicită ofertă gratuită
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-ink text-ink uppercase tracking-widest font-semibold transition-all duration-200 hover:bg-ink hover:text-white"
                style={{ fontFamily: "var(--font-heading)", fontSize: "0.82rem" }}
              >
                Vezi mai multe lucrări
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
