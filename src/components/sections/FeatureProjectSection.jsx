import Image from "next/image";
import Link from "next/link";

const CHECKLIST = [
  "Free, no pressure estimates",
  "In house crew. No subs",
  "Licensed, bonded & insured in Oregon",
  "5.0 Google rating from local homeowners",
];

export default function FeatureProjectSection() {
  return (
    <section className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid gap-16 items-center" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))" }}>

          <div className="relative overflow-hidden rounded-sm" style={{ aspectRatio: "4/5" }}>
            <Image
              src="/rd-drone-1.jpg"
              alt="Deck replacement by R & D Perez Construction"
              fill
              className="object-cover"
              sizes="(max-width: 860px) 100vw, 50vw"
            />
            <span
              className="absolute bottom-5 left-5 bg-ink text-white uppercase tracking-[0.2em] px-4 py-2.5"
              style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem" }}
            >
              Featured · Deck Replacement
            </span>
          </div>

          <div>
            <span
              className="inline-flex items-center gap-2 mb-4 uppercase tracking-[0.18em] text-brand-red"
              style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", fontWeight: 600 }}
            >
              <span className="w-6 h-px bg-brand-red" />
              Our approach
            </span>

            <h2
              className="text-ink uppercase leading-none tracking-tight mb-6"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,4.5vw,3.5rem)", fontWeight: 700 }}
            >
              We listen first.
              <br />
              <span className="text-brand-red" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", textTransform: "none" }}>
                Then we build.
              </span>
            </h2>

            <p className="text-gray-700 leading-[1.75] mb-4" style={{ fontSize: "1rem" }}>
              Every estimate starts with a conversation about what you actually need, your budget, and what
              the right call is for your home. Sometimes that&apos;s a full replacement. Sometimes it&apos;s a smart repair.
            </p>
            <p className="text-gray-700 leading-[1.75]" style={{ fontSize: "1rem" }}>
              We&apos;ll tell you straight either way. That&apos;s what it means to be family owned.
            </p>

            <ul className="mt-6 mb-8 flex flex-col gap-3">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink" style={{ fontSize: "0.95rem" }}>
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-red text-white text-xs font-bold shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-ink text-ink uppercase tracking-widest font-semibold transition-all duration-200 hover:bg-ink hover:text-white"
              style={{ fontFamily: "var(--font-heading)", fontSize: "0.82rem" }}
            >
              Meet Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
