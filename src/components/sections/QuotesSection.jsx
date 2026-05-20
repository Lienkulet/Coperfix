import QuoteCard from "@/components/ui/cards/QuoteCard";

const QUOTES = [
  {
    quote: "We had a wonderful experience with Rafael and his team/family who replaced our aging deck. He made recommendations based on our needs and budget, with safety as the priority.",
    name: "Aqtos Girma",
    role: "Google Review",
  },
  {
    quote: "We're so happy with Rafael from R&D Perez Construction LLC for the much needed repairs on our home. Rafael and his team are amazing at what they do!",
    name: "Marina",
    role: "Google Review",
  },
  {
    quote: "Rafael and his team were professional, thorough, and a pleasure to work with. Highly recommend R & D Perez Construction for anyone looking for quality work.",
    name: "Henry",
    role: "Google Review",
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
            What homeowners say
            <span className="w-6 h-px bg-brand-red" />
          </span>
          <h2
            className="text-ink uppercase leading-none tracking-tight"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 700 }}
          >
            A perfect <span className="text-brand-red">5.0</span>,
            <br />
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", textTransform: "none" }}>
              every single review.
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
