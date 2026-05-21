import Image from "next/image";

export default function WorkCard({ src, alt, category, title, detail, tall }) {
  return (
    <article className={`group relative overflow-hidden bg-ink${tall ? " work-card-tall" : ""}`} style={{ borderRadius: 2 }}>
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
          sizes="(max-width: 480px) 100vw, (max-width: 780px) 50vw, (max-width: 1100px) 33vw, 25vw"
          loading="lazy"
        />
        <div
          className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.25) 45%, transparent 75%)" }}
        >
          <span
            className="block mb-1.5 text-brand-red uppercase tracking-[0.22em]"
            style={{ fontFamily: "var(--font-heading)", fontSize: "0.7rem" }}
          >
            {category}
          </span>
          <h3
            className="text-white uppercase leading-[1.15] mb-1"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.15rem" }}
          >
            {title}
          </h3>
          <span
            className="text-white/80"
            style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.85rem" }}
          >
            {detail}
          </span>
        </div>
      </div>
    </article>
  );
}
