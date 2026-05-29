import CheckIcon from "@/components/icons/CheckIcon";

const SPECS = [
  {
    title: "Întreținere preventivă & Inspecție",
    items: [
      "Inspecții copertine, terase & garduri",
      "Detectarea scurgerilor & deteriorărilor",
      "Curățarea jgheaburilor & scurgerilor",
      "Îndepărtarea mușchiului & resturilor",
      "Recomandări pentru siguranță & longevitate",
    ],
  },
  {
    title: "Consultație gratuită & Planificarea proiectului",
    items: [
      "Evaluarea amplasamentului",
      "Consultație de design",
      "Orientare în selecția materialelor",
      "Estimări de cost",
      "Planificarea termenului de execuție",
      "Soluții personalizate",
    ],
  },
];

function SpecCard({ title, items }) {
  return (
    <div className="p-8 bg-bone border border-black/06" style={{ borderTop: "4px solid #c9a14e" }}>
      <h3
        className="text-ink uppercase leading-tight mb-5"
        style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", fontWeight: 700, letterSpacing: "0.01em" }}
      >
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3 text-gray-700" style={{ fontSize: "0.95rem" }}>
            <CheckIcon className="text-brand-red shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SpecSection() {
  return (
    <section className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center justify-center gap-2 mb-4 uppercase tracking-[0.18em] text-brand-red"
            style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", fontWeight: 600 }}
          >
            <span className="w-6 h-px bg-brand-red" />
            Dincolo de construcție
          </span>
          <h2
            className="text-ink uppercase leading-none tracking-tight mb-4"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.2rem,5vw,4rem)", fontWeight: 700, letterSpacing: "-0.01em" }}
          >
            Ne ocupăm și de<br />
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", textTransform: "none", color: "#c9a14e" }}>detaliile mici.</span>
          </h2>
          <p className="text-gray-700 mx-auto leading-relaxed" style={{ fontSize: "1.05rem", maxWidth: "560px" }}>
            Inspecții, planificare, selecție materiale și întreținere. Lucrurile mici care mențin proiectele pe drumul cel bun și proprietățile protejate mult timp după ce plecăm.
          </p>
        </div>

        <div className="grid gap-8" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))" }}>
          {SPECS.map((spec) => (
            <SpecCard key={spec.title} {...spec} />
          ))}
        </div>
      </div>
    </section>
  );
}
