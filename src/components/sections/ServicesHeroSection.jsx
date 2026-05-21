import Image from "next/image";
import Link from "next/link";

const CHIPS = [
  { label: "Roofing",  href: "/services#roofing"  },
  { label: "Decks",   href: "/services#decks"    },
  { label: "Fences",  href: "/services#fences"   },
  { label: "Masonry", href: "/services#masonry"  },
];

export default function ServicesHeroSection() {
  return (
    <section className="bg-bone overflow-hidden" style={{ paddingTop: "clamp(3.5rem,7vw,6rem)", paddingBottom: "clamp(3.5rem,7vw,6rem)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div
          className="grid items-center gap-16"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))" }}
        >
          <div>
            <span
              className="inline-flex items-center gap-2 mb-4 uppercase tracking-[0.18em] text-brand-red"
              style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", fontWeight: 600 }}
            >
              <span className="w-6 h-px bg-brand-red" />
              What we do
            </span>

            <h1
              className="uppercase leading-none tracking-tight mb-6 text-ink"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.8rem,7vw,6rem)", fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              Four services.<br />
              <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", textTransform: "none", color: "#C7252A" }}>Done thoroughly.</span>
            </h1>

            <p className="text-gray-700 leading-relaxed mb-10" style={{ fontSize: "1.1rem", maxWidth: "500px" }}>
              We keep our scope intentional — roofing, decks, fences, and masonry — so the work stays in house and the quality stays consistent.
            </p>

            <div className="flex flex-wrap gap-3">
              {CHIPS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-ink/20 text-ink uppercase tracking-[0.1em] transition-all duration-200 hover:border-brand-red hover:text-brand-red"
                  style={{ fontFamily: "var(--font-heading)", fontSize: "0.8rem", fontWeight: 600 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-sm shadow-2xl" style={{ aspectRatio: "4/3" }}>
            <Image
              src="/rd-project-2.jpg"
              alt="Aerial view of a recently completed roofing project"
              width={800}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
