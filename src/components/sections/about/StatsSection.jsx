const STATS = [
  { val: "5.0",  label: "Rating Google"      },
  { val: "18+",  label: "Recenzii 5 Stele"   },
  { val: "100%", label: "Afacere de Familie"  },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-ink">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid text-center gap-8" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 160px), 1fr))" }}>
          {STATS.map(({ val, label }) => (
            <div key={label} className="flex flex-col gap-2">
              <span
                className="text-brand-red leading-none"
                style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(3rem,7vw,5.5rem)", fontWeight: 700, letterSpacing: "-0.02em" }}
              >
                {val}
              </span>
              <span
                className="uppercase tracking-[0.22em]"
                style={{ fontFamily: "var(--font-heading)", fontSize: "0.78rem", color: "rgba(255,255,255,0.6)" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
