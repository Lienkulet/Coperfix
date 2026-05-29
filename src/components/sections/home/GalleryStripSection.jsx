import Link from "next/link";
import GalleryItem from "@/components/ui/cards/GalleryItem";

const GALLERY = [
  { src: "/rd-drone-4.jpg",       alt: "Copertină arhitecturală închisă",  category: "Copertine",  title: "Copertină arhitecturală închisă"  },
  { src: "/rd-drone-1.jpg",       alt: "Terasă înconjurătoare compozit",   category: "Terase",     title: "Terasă înconjurătoare compozit"   },
  { src: "/fence-1.jpg",          alt: "Gard cedru cu capac pergolă",      category: "Garduri",    title: "Gard cedru cu capac pergolă"      },
  { src: "/rd-drone-2.jpg",       alt: "Terasă compozit pe mai multe niveluri", category: "Terase", title: "Terasă compozit pe mai multe niveluri" },
  { src: "/chimney-1.jpg",        alt: "Reconstrucție coș de fum cărămidă roșie", category: "Structuri", title: "Reconstrucție coș de fum cărămidă roșie" },
  { src: "/fence-2.jpg",          alt: "Gard shadowbox cedru",             category: "Garduri",    title: "Gard shadowbox cedru"             },
  { src: "/roof-aerial-gray.jpg", alt: "Copertină gri vedere aeriană",     category: "Copertine",  title: "Copertină gri vedere aeriană"     },
];

export default function GalleryStripSection() {
  return (
    <section className="py-20 bg-paper overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-10">
        <div className="flex justify-between items-end gap-8 flex-wrap">
          <div>
            <span
              className="inline-flex items-center gap-2 mb-4 uppercase tracking-[0.18em] text-brand-red"
              style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", fontWeight: 600 }}
            >
              <span className="w-6 h-px bg-brand-red" />
              Lucrări recente
            </span>
            <h2
              className="text-ink uppercase leading-none tracking-tight"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 700 }}
            >
              Câteva lucrări
              <br />
              <span className="text-brand-red" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", textTransform: "none" }}>
                de care suntem mândri.
              </span>
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-ink text-ink uppercase tracking-widest font-semibold transition-all duration-200 hover:bg-ink hover:text-white text-sm shrink-0"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Vezi toate lucrările →
          </Link>
        </div>
      </div>

      <div
        className="gallery-scroll flex gap-4 overflow-x-auto px-5 sm:px-8 lg:px-12 pb-4"
        style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
      >
        {GALLERY.map((item) => (
          <GalleryItem key={item.src} {...item} />
        ))}
      </div>
    </section>
  );
}
