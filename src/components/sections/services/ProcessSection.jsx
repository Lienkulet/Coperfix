const STEPS = [
  {
    num: "01",
    title: "Ofertă gratuită",
    desc: "Sună-ne. Venim, evaluăm lucrarea și îți oferim un preț corect. Fără costuri, fără presiune.",
  },
  {
    num: "02",
    title: "Scop clar",
    desc: "Îți prezentăm materialele, termenul și exact ce este inclus. Nicio linie vagă în ofertă.",
  },
  {
    num: "03",
    title: "Execuție de calitate",
    desc: "Echipa noastră se apucă de lucru. Șantiere curate, comunicare onestă, nicio dispariție neașteptată.",
  },
  {
    num: "04",
    title: "Predare",
    desc: "Nu plecăm până nu ești mulțumit. Inspecție finală, curățenie și predarea cu garanție scrisă.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-ink">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span
            className="inline-flex items-center justify-center gap-2 mb-4 uppercase tracking-[0.18em] text-brand-red"
            style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", fontWeight: 600 }}
          >
            <span className="w-6 h-px bg-brand-red" />
            Cum lucrăm
          </span>
          <h2
            className="uppercase leading-none tracking-tight text-white"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.2rem,5vw,4rem)", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Patru pași,<br />
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", textTransform: "none", color: "#c9a14e" }}>o singură discuție.</span>
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ num, title, desc }) => (
            <div key={num} className="border-t border-white/15 pt-8">
              <span
                className="block mb-4 text-brand-red leading-none"
                style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "3rem", fontWeight: 700 }}
              >
                {num}
              </span>
              <h3
                className="uppercase text-white mb-3"
                style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.02em" }}
              >
                {title}
              </h3>
              <p className="text-white/60 leading-relaxed" style={{ fontSize: "0.95rem" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
