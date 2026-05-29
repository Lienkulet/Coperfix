export default function StorySection() {
  return (
    <section className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div
          className="grid gap-16"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gridTemplateRows: "auto" }}
        >
          <div>
            <span
              className="inline-flex items-center gap-2 mb-4 uppercase tracking-[0.18em] text-brand-red"
              style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", fontWeight: 600 }}
            >
              <span className="w-6 h-px bg-brand-red" />
              Povestea noastră
            </span>
            <h2
              className="text-ink uppercase leading-none tracking-tight"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.2rem,4.5vw,3.5rem)", fontWeight: 700, letterSpacing: "-0.01em" }}
            >
              Dedicați<br />depășirii<br />așteptărilor.
            </h2>
          </div>

          <div>
            <p
              className="leading-relaxed mb-6 pl-5 border-l-[3px] border-brand-red"
              style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.4rem", lineHeight: 1.55, color: "#161a1e" }}
            >
              Am fondat Coperfix pentru că credem că lucrările de exterior — copertine, terase, balcoane, garduri, parcari auto — trebuie făcute <em style={{ fontStyle: "italic", color: "#c9a14e" }}>bine</em>, de oameni cărora le pasă cu adevărat de rezultat.
            </p>
            <p className="text-gray-700 leading-relaxed mb-5" style={{ fontSize: "1.02rem", lineHeight: 1.8 }}>
              Această filozofie nu s-a schimbat. Echipa noastră gestionează estimarea. Echipa noastră execută lucrarea. Și când treaba e gata, tot noi facem recepția finală.
            </p>
            <p className="text-gray-700 leading-relaxed mb-5" style={{ fontSize: "1.02rem", lineHeight: 1.8 }}>
              Ne specializăm în <strong style={{ color: "#161a1e", fontWeight: 600 }}>copertine, terase, balcoane, garduri, parcari auto</strong>. Fie că este vorba de o copertină nouă, o terasă acoperită, un gard complet sau o pergolă bioclimatică, o facem cu aceeași precizie și responsabilitate.
            </p>
            <p className="text-gray-700 leading-relaxed" style={{ fontSize: "1.02rem", lineHeight: 1.8 }}>
              Pentru clienți, asta înseamnă recomandări oneste, prețuri transparente și o echipă care apare când spune că apare. Pentru comunitate, înseamnă o afacere mică din Chișinău care face treabă reală pentru cartierul în care trăim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
