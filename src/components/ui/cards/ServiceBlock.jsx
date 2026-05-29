import Image from "next/image";
import Link from "next/link";

export default function ServiceBlock({ id, num, image, alt, title, description, features, isReversed }) {
  return (
    <section
      id={id}
      className={`py-24 ${isReversed ? "bg-bone" : "bg-paper"}`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div
          className="grid items-center gap-16"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
            direction: isReversed ? "rtl" : "ltr",
          }}
        >
          <div className="relative overflow-hidden rounded-sm shadow-xl" style={{ aspectRatio: "4/3", direction: "ltr" }}>
            <Image
              src={image}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <span
              className="absolute bottom-4 left-4 flex flex-col leading-none"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="text-white/90 font-bold" style={{ fontSize: "2.5rem" }}>{num}</span>
              <span className="text-white/50 uppercase tracking-widest" style={{ fontSize: "0.65rem" }}>din 04</span>
            </span>
          </div>

          <div style={{ direction: "ltr" }}>
            <span
              className="inline-flex items-center gap-2 mb-4 uppercase tracking-[0.18em] text-brand-red"
              style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", fontWeight: 600 }}
            >
              <span className="w-6 h-px bg-brand-red" />
              Serviciul {num}
            </span>

            <h2
              className="uppercase leading-none tracking-tight mb-4 text-ink"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.4rem,5vw,4.5rem)", fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              {title}
              <span className="text-brand-red">.</span>
            </h2>

            <p className="text-gray-700 leading-relaxed mb-8" style={{ fontSize: "1.05rem" }}>
              {description}
            </p>

            <div className="mb-8">
              <h3
                className="uppercase tracking-[0.12em] text-ink mb-4"
                style={{ fontFamily: "var(--font-heading)", fontSize: "0.75rem", fontWeight: 600 }}
              >
                Ce acoperim
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                {features.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700" style={{ fontSize: "0.95rem" }}>
                    <span className="w-4 h-px bg-brand-red shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 flex-wrap">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-7 py-4 bg-brand-red text-white uppercase tracking-[0.1em] font-semibold transition-all duration-300 hover:bg-ink hover:-translate-y-0.5"
                style={{ fontFamily: "var(--font-heading)", fontSize: "0.9rem", border: "2px solid #c9a14e" }}
              >
                Solicită ofertă gratuită
              </Link>
              <a
                href="tel:+37369585859"
                className="inline-flex items-center justify-center px-7 py-4 bg-transparent text-ink uppercase tracking-[0.1em] font-semibold transition-all duration-300 hover:bg-ink hover:text-white hover:-translate-y-0.5"
                style={{ fontFamily: "var(--font-heading)", fontSize: "0.9rem", border: "2px solid #161a1e" }}
              >
                Sună +373 69 585 859
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
