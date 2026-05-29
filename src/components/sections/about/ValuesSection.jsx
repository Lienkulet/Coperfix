const VALUES = [
  { num: "01 /", title: "Orientați spre client",      desc: "Fiecare proiect este construit în jurul obiectivelor, termenului și bugetului tău, nu al nostru. Ascultăm mai întâi și construim după." },
  { num: "02 /", title: "Reputație",                  desc: "Un rating perfect de 5 stele Google de la clienți care ne-au încredințat copertinele, terasele și gardurile lor. Luăm asta în serios." },
  { num: "03 /", title: "Afacere de Familie & Locală", desc: "Echipa noastră conduce compania direct. Niciun call center, niciun intermediar. Doar o echipă locală din Chișinău care se implică." },
  { num: "04 /", title: "Autorizați & Asigurați",     desc: "Pe deplin autorizați, garantați și asigurați. Proiectul tău este protejat de la prima ofertă până la predarea finală." },
  { num: "05 /", title: "Serviciu Personalizat",      desc: "Nicio soluție standard. Fiecare copertină, terasă și gard este adaptată casei tale, materialelor și nevoilor specifice." },
];

function ValueRow({ num, title, desc }) {
  return (
    <div
      className="grid items-center border-t border-black/10 last:border-b last:border-black/10"
      style={{ gridTemplateColumns: "80px 1fr 2fr", gap: "clamp(1rem,3vw,2rem)", padding: "1.75rem 0" }}
    >
      <span
        style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 700, fontSize: "clamp(1.5rem,3vw,2rem)", color: "#c9a14e", lineHeight: 1 }}
      >
        {num}
      </span>
      <h3
        className="text-ink uppercase leading-tight"
        style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 700, letterSpacing: "0.01em" }}
      >
        {title}
      </h3>
      <p className="text-gray-700 leading-relaxed" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
        {desc}
      </p>
    </div>
  );
}

export default function ValuesSection() {
  return (
    <section className="py-24 bg-bone">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mb-12">
          <span
            className="inline-flex items-center gap-2 mb-4 uppercase tracking-[0.18em] text-brand-red"
            style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", fontWeight: 600 }}
          >
            <span className="w-6 h-px bg-brand-red" />
            De ce ne aleg clienții
          </span>
          <h2
            className="text-ink uppercase leading-none tracking-tight"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.2rem,5vw,4rem)", fontWeight: 700, letterSpacing: "-0.01em" }}
          >
            Ce promitem.
          </h2>
        </div>

        <div className="flex flex-col">
          {VALUES.map((v) => (
            <ValueRow key={v.num} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
}
