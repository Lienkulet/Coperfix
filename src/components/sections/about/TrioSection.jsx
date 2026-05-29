import Image from "next/image";

const TRIO = [
  { src: "/rd-drone-4.jpg",  alt: "Înlocuire copertină arhitecturală închisă",  caption: "Copertine" },
  { src: "/rd-drone-1.jpg",  alt: "Terasă înconjurătoare compozit cu vatră",    caption: "Terase"    },
  { src: "/chimney-1.jpg",   alt: "Reconstrucție coș de fum cărămidă roșie",    caption: "Structuri" },
];

function TrioItem({ src, alt, caption }) {
  return (
    <figure className="relative overflow-hidden rounded-sm group" style={{ aspectRatio: "4/5" }}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        loading="lazy"
      />
      <figcaption
        className="absolute left-4 bottom-4 px-3 py-2 bg-ink text-white uppercase tracking-[0.2em]"
        style={{ fontFamily: "var(--font-heading)", fontSize: "0.78rem" }}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

export default function TrioSection() {
  return (
    <section className="py-24 bg-bone">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center justify-center gap-2 mb-4 uppercase tracking-[0.18em] text-brand-red"
            style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", fontWeight: 600 }}
          >
            <span className="w-6 h-px bg-brand-red" />
            Meseria noastră
          </span>
          <h2
            className="text-ink uppercase leading-none tracking-tight"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.2rem,5vw,4rem)", fontWeight: 700, letterSpacing: "-0.01em" }}
          >
            Fiecare proiect,<br />
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", textTransform: "none", color: "#c9a14e" }}>cu numele nostru pe el.</span>
          </h2>
        </div>

        <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))" }}>
          {TRIO.map((item) => (
            <TrioItem key={item.src} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
