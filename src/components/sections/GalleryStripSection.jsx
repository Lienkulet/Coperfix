import Link from "next/link";
import GalleryItem from "@/components/ui/cards/GalleryItem";

const GALLERY = [
  { src: "/rd-drone-4.jpg",       alt: "Dark architectural shingle",    category: "Roofing",  title: "Dark architectural shingle"    },
  { src: "/rd-drone-1.jpg",       alt: "Wraparound deck w/ composite",  category: "Decks",    title: "Wraparound deck w/ composite"  },
  { src: "/fence-1.jpg",          alt: "Cedar fence w/ pergola cap",    category: "Fences",   title: "Cedar fence w/ pergola cap"    },
  { src: "/rd-drone-2.jpg",       alt: "Multi level composite deck",    category: "Decks",    title: "Multi level composite deck"    },
  { src: "/chimney-1.jpg",        alt: "Red brick chimney rebuild",      category: "Masonry",  title: "Red brick chimney rebuild"     },
  { src: "/fence-2.jpg",          alt: "Shadowbox cedar fence",         category: "Fences",   title: "Shadowbox cedar fence"         },
  { src: "/roof-aerial-gray.jpg", alt: "Gray architectural aerial",     category: "Roofing",  title: "Gray architectural aerial"     },
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
              Recent work
            </span>
            <h2
              className="text-ink uppercase leading-none tracking-tight"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 700 }}
            >
              A few jobs
              <br />
              <span className="text-brand-red" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", textTransform: "none" }}>
                we&apos;re proud of.
              </span>
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-ink text-ink uppercase tracking-widest font-semibold transition-all duration-200 hover:bg-ink hover:text-white text-sm shrink-0"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            See All Work →
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
