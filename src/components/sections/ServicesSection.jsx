import ServiceRow from "@/components/ui/cards/ServiceRow";

const SERVICES = [
  {
    num: "01",
    href: "/services#roofing",
    image: "/rd-drone-4.jpg",
    alt: "Roofing",
    name: "Roofing",
    description: "Complete roof replacements, leak repairs, storm damage, moss removal, and skylights. Built to stand up to Oregon weather.",
  },
  {
    num: "02",
    href: "/services#decks",
    image: "/rd-drone-1.jpg",
    alt: "Decks",
    name: "Decks",
    description: "Custom deck installations, replacements, and repairs. Full framing, railings, staining, and sealing for decks built to last.",
  },
  {
    num: "03",
    href: "/services#fences",
    image: "/fence-services.jpg",
    alt: "Fences",
    name: "Fences",
    description: "Wood and vinyl fences, pergolas, gates, and retaining walls. New installs, replacements, and repairs from posts to panels.",
  },
  {
    num: "04",
    href: "/services#masonry",
    image: "/chimney-1.jpg",
    alt: "Masonry",
    name: "Masonry",
    description: "Chimney repairs, tuck pointing, retaining walls, and sealant application. Precision masonry work when your roof or property calls for it.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-ink">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <div
          className="grid gap-12 items-end mb-12 pb-8"
          style={{ gridTemplateColumns: "1.4fr 1fr", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div>
            <span
              className="inline-flex items-center gap-2 mb-4 uppercase tracking-[0.18em] text-brand-red"
              style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", fontWeight: 600 }}
            >
              <span className="w-6 h-px bg-brand-red" />
              What we do
            </span>
            <h2
              className="text-white uppercase leading-none tracking-tight"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 700 }}
            >
              Four things.
              <br />
              <span className="text-brand-red" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", textTransform: "none" }}>
                Done right.
              </span>
            </h2>
          </div>
          <p className="text-white/65 leading-relaxed" style={{ fontSize: "1rem" }}>
            We keep our scope tight so we can keep our quality high. Every project is handled by Rafael and the crew, start to finish.
          </p>
        </div>

        <div className="flex flex-col">
          {SERVICES.map((s) => (
            <ServiceRow key={s.num} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
