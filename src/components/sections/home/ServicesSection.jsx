import ServiceRow from "@/components/ui/cards/ServiceRow";

const SERVICES = [
  {
    num: "01",
    href: "/services#roofing",
    image: "/rd-drone-4.jpg",
    alt: "Copertine auto",
    name: "Copertine auto",
    description: "Structuri din aluminiu sau metal vopsit electrostatic pentru 1, 2 sau 4 mașini. Rezistente la zăpadă, vânt și UV.",
  },
  {
    num: "02",
    href: "/services#decks",
    image: "/rd-drone-1.jpg",
    alt: "Terase acoperite",
    name: "Terase acoperite",
    description: "Spații exterioare acoperite, utilizabile tot anul, cu opțiuni de pereți din sticlă glisantă sau lambriu metalic.",
  },
  {
    num: "03",
    href: "/services#fences",
    image: "/fence-services.jpg",
    alt: "Pergole bioclimatice",
    name: "Pergole bioclimatice",
    description: "Lamele rotative pentru control total al luminii și ventilației, cu telecomandă sau senzori de ploaie.",
  },
  {
    num: "04",
    href: "/services#masonry",
    image: "/chimney-1.jpg",
    alt: "Garduri & porți",
    name: "Garduri & porți",
    description: "Lambriu metalic, porți glisante sau batante, automatizare inclusă. Asortate cu copertina.",
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
              Ce facem
            </span>
            <h2
              className="text-white uppercase leading-none tracking-tight"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 700 }}
            >
              Patru specialități.
              <br />
              <span className="text-brand-red" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", textTransform: "none" }}>
                Făcute cum trebuie.
              </span>
            </h2>
          </div>
          <p className="text-white/65 leading-relaxed" style={{ fontSize: "1rem" }}>
            Păstrăm un portofoliu restrâns pentru a menține calitatea ridicată. Fiecare proiect este gestionat de echipa noastră, de la început până la final.
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
