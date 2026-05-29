import Image from "next/image";
import Link from "next/link";

const CHIPS = [
  { label: "Copertine", href: "/services#roofing"  },
  { label: "Terase",    href: "/services#decks"    },
  { label: "Garduri",   href: "/services#fences"   },
  { label: "Pergole",   href: "/services#masonry"  },
];

export default function HeroSection() {
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
              Ce facem
            </span>

            <h1
              className="uppercase leading-none tracking-tight mb-6 text-ink"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.8rem,7vw,6rem)", fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              Patru servicii.<br />
              <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", textTransform: "none", color: "#c9a14e" }}>Făcute temeinic.</span>
            </h1>

            <p className="text-gray-700 leading-relaxed mb-10" style={{ fontSize: "1.1rem", maxWidth: "500px" }}>
              Păstrăm un portofoliu intenționat — copertine, terase, balcoane, garduri, parcari auto — astfel încât lucrarea rămâne în casă și calitatea rămâne constantă.
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
