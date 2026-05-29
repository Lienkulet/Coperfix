const STATS = [
  { val: "5.0",  label: "Rating Google"       },
  { val: "18+",  label: "Recenzii 5 Stele"    },
  { val: "100%", label: "Afacere de Familie"  },
];

function Kicker({ children }) {
  return (
    <span
      className="inline-flex items-center gap-2 mb-4 uppercase tracking-[0.18em] text-brand-red"
      style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", fontWeight: 600 }}
    >
      <span className="w-6 h-px bg-brand-red" />
      {children}
    </span>
  );
}

export default function IntroSection() {
  return (
    <section className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 items-center" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))" }}>

          <div>
            <Kicker>Cine suntem</Kicker>
            <h2
              className="text-ink uppercase leading-[1.02] tracking-tight"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 700 }}
            >
              O echipă mică de familie,
              <br />
              <span className="text-brand-red" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", textTransform: "none" }}>
                care face treabă serioasă,
              </span>
              <br />
              cu un răspuns sincer de fiecare dată.
            </h2>
          </div>

          <div>
            <p className="text-gray-700 leading-[1.8] mb-5" style={{ fontSize: "1.02rem" }}>
              Coperfix este o <strong className="text-ink font-semibold">afacere de familie</strong> specializată
              în copertine și construcții metalice ușoare pentru exterior, cu sediul în Chișinău. Echipa noastră
              gestionează fiecare proiect de la prima estimare până la predarea finală. Fără subcontractanți, fără call center.
            </p>
            <p className="text-gray-700 leading-[1.8]" style={{ fontSize: "1.02rem" }}>
              Ne specializăm în <strong className="text-ink font-semibold">copertine, terase, balcoane, garduri, parcari auto</strong>.
              Fie că este vorba de o înlocuire completă, o reparație rapidă sau o structură nouă, o facem cu
              precizie și tratăm fiecare proprietate ca pe a noastră.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-black/10">
              {STATS.map(({ val, label }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span
                    className="text-brand-red leading-none"
                    style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem,3.5vw,2.75rem)", fontWeight: 700, lineHeight: 1 }}
                  >
                    {val}
                  </span>
                  <span
                    className="text-gray-500 uppercase tracking-[0.15em]"
                    style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
