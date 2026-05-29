export default function PullquoteSection() {
  return (
    <section
      className="bg-brand-red text-white text-center"
      style={{ padding: "clamp(3rem,6vw,5rem) 0" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <figure>
          <blockquote
            className="text-white leading-snug mx-auto"
            style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 700, fontSize: "clamp(1.5rem,3.5vw,2.5rem)", lineHeight: 1.3, maxWidth: "820px" }}
          >
            &ldquo;Am făcut recomandări în funcție de nevoile și bugetul lor, cu siguranța ca prioritate.&rdquo;
          </blockquote>
          <figcaption className="mt-8 flex flex-col items-center gap-1">
            <span
              className="text-white uppercase tracking-[0.04em]"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.05rem" }}
            >
              Coperfix
            </span>
            <span
              className="uppercase tracking-[0.2em]"
              style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.75)" }}
            >
              Proprietar &amp; Coordonator
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
