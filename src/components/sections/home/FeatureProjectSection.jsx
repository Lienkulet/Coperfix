import Image from "next/image";
import Link from "next/link";

const CHECKLIST = [
  "Ofertă gratuită, fără presiune",
  "Echipă proprie. Fără subcontractanți",
  "Autorizat, garantat & asigurat",
  "Rating 5.0 Google de la clienți locali",
];

export default function FeatureProjectSection() {
  return (
    <section className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid gap-16 items-center" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))" }}>

          <div className="relative overflow-hidden rounded-sm" style={{ aspectRatio: "4/5" }}>
            <Image
              src="/rd-drone-1.jpg"
              alt="Deck replacement by R & D Perez Construction"
              fill
              className="object-cover"
              sizes="(max-width: 860px) 100vw, 50vw"
            />
            <span
              className="absolute bottom-5 left-5 bg-ink text-white uppercase tracking-[0.2em] px-4 py-2.5"
              style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem" }}
            >
              Proiect · Copertină auto
            </span>
          </div>

          <div>
            <span
              className="inline-flex items-center gap-2 mb-4 uppercase tracking-[0.18em] text-brand-red"
              style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", fontWeight: 600 }}
            >
              <span className="w-6 h-px bg-brand-red" />
              Abordarea noastră
            </span>

            <h2
              className="text-ink uppercase leading-none tracking-tight mb-6"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,4.5vw,3.5rem)", fontWeight: 700 }}
            >
              Ascultăm mai întâi.
              <br />
              <span className="text-brand-red" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", textTransform: "none" }}>
                Apoi construim.
              </span>
            </h2>

            <p className="text-gray-700 leading-[1.75] mb-4" style={{ fontSize: "1rem" }}>
              Fiecare estimare începe cu o discuție despre ce ai nevoie cu adevărat, bugetul tău și care este
              cea mai bună soluție pentru proprietatea ta. Uneori aceasta înseamnă o înlocuire completă. Uneori o reparație inteligentă.
            </p>
            <p className="text-gray-700 leading-[1.75]" style={{ fontSize: "1rem" }}>
              Îți spunem direct în orice caz. Asta înseamnă să fii o afacere de familie.
            </p>

            <ul className="mt-6 mb-8 flex flex-col gap-3">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink" style={{ fontSize: "0.95rem" }}>
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-red text-white text-xs font-bold shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-ink text-ink uppercase tracking-widest font-semibold transition-all duration-200 hover:bg-ink hover:text-white"
              style={{ fontFamily: "var(--font-heading)", fontSize: "0.82rem" }}
            >
              Cunoaște povestea noastră
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
