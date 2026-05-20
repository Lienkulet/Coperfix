import Image from "next/image";

export default function GalleryItem({ src, alt, category, title }) {
  return (
    <div className="relative shrink-0 overflow-hidden rounded-sm cursor-pointer group"
      style={{ flex: "0 0 clamp(280px,28vw,420px)", aspectRatio: "4/5" }}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 280px, 28vw"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-5"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)" }}>
        <span
          className="text-brand-red mb-1 uppercase tracking-widest"
          style={{ fontFamily: "var(--font-heading)", fontSize: "0.68rem" }}
        >
          {category}
        </span>
        <span
          className="text-white"
          style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 700, fontSize: "1.1rem", lineHeight: 1.25 }}
        >
          {title}
        </span>
      </div>
    </div>
  );
}
