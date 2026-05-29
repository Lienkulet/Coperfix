import QuoteCard from "@/components/ui/cards/QuoteCard";

const QUOTES = [
  {
    quote: "Am avut o experiență minunată cu echipa Coperfix, care ne-a înlocuit copertina. Au făcut recomandări în funcție de nevoile și bugetul nostru, cu siguranța ca prioritate.",
    name: "Aqtos Girma",
    role: "Recenzie Google",
  },
  {
    quote: "Suntem foarte mulțumiți de echipa Coperfix pentru reparațiile efectuate la proprietatea noastră. Echipa este extraordinară în ceea ce face!",
    name: "Marina",
    role: "Recenzie Google",
  },
  {
    quote: "Echipa Coperfix a fost profesionistă, minuțioasă și o plăcere să lucrezi cu ei. Recomand cu căldură pentru oricine caută lucrări de calitate.",
    name: "Henry",
    role: "Recenzie Google",
  },
];

export default function QuotesSection() {
  return (
    <section className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-14">
          <span
            className="inline-flex items-center justify-center gap-2 mb-4 uppercase tracking-[0.18em] text-brand-red"
            style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", fontWeight: 600 }}
          >
            <span className="w-6 h-px bg-brand-red" />
            Ce spun clienții
            <span className="w-6 h-px bg-brand-red" />
          </span>
          <h2
            className="text-ink uppercase leading-none tracking-tight"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 700 }}
          >
            Un perfect <span className="text-brand-red">5.0</span>,
            <br />
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", textTransform: "none" }}>
              la fiecare recenzie.
            </span>
          </h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {QUOTES.map((q) => (
            <QuoteCard key={q.name} {...q} />
          ))}
        </div>
      </div>
    </section>
  );
}
