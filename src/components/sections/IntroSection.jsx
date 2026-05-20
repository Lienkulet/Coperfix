const STATS = [
  { val: "5.0",  label: "Google Rating"   },
  { val: "18+",  label: "5 Star Reviews"  },
  { val: "100%", label: "Family Owned"    },
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
            <Kicker>Who we are</Kicker>
            <h2
              className="text-ink uppercase leading-[1.02] tracking-tight"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 700 }}
            >
              A small family crew,
              <br />
              <span className="text-brand-red" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", textTransform: "none" }}>
                doing real work,
              </span>
              <br />
              with a straight answer every time.
            </h2>
          </div>

          <div>
            <p className="text-gray-700 leading-[1.8] mb-5" style={{ fontSize: "1.02rem" }}>
              R &amp; D Perez Construction is a <strong className="text-ink font-semibold">family owned</strong> exterior
              contractor based in Beaverton, Oregon. Rafael and his crew handle every project from the first
              estimate to the final handshake. No subcontractors, no call centers.
            </p>
            <p className="text-gray-700 leading-[1.8]" style={{ fontSize: "1.02rem" }}>
              We specialize in <strong className="text-ink font-semibold">roofing, decks, fences, and masonry</strong>.
              Whether it&apos;s a full replacement, a quick repair, or a chimney tuck point that comes up during
              roofing work, we do it with precision and treat every home like it&apos;s our own.
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
