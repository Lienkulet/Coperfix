import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="py-20 bg-bone relative overflow-hidden"
      style={{ paddingTop: "clamp(3rem,6vw,5rem)", paddingBottom: "clamp(3rem,6vw,5rem)" }}
    >
      <div
        className="absolute pointer-events-none"
        style={{ top: "-120px", left: "-120px", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(199,37,42,0.10) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative">
        <div
          className="grid items-center gap-16"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))" }}
        >
          <div>
            <span
              className="inline-flex items-center gap-2 mb-4 uppercase tracking-[0.18em] text-brand-red"
              style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", fontWeight: 600 }}
            >
              <span className="w-6 h-px bg-brand-red" />
              Despre noi
            </span>

            <h1
              className="uppercase leading-none tracking-tight mb-6 text-ink"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.8rem,7vw,6rem)", fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              O familie.<br />
              <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", textTransform: "none", color: "#c9a14e" }}>O meserie.</span><br />
              O promisiune locală.
            </h1>

            <p className="text-gray-700 leading-relaxed" style={{ fontSize: "1.1rem", maxWidth: "520px" }}>
              Coperfix este o afacere de familie specializată în copertine și construcții metalice ușoare pentru exterior. Construim copertine, terase, balcoane, garduri, parcari auto, iar fiecare proiect îl tratăm personal, cu numele nostru pe el.
            </p>
          </div>

          <div className="overflow-hidden rounded-sm shadow-2xl" style={{ aspectRatio: "4/5" }}>
            <Image
              src="/rd-drone-2.jpg"
              alt="Deck project by R &D Perez Construction"
              width={600}
              height={750}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
