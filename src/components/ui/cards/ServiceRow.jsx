import Image from "next/image";
import Link from "next/link";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

export default function ServiceRow({ num, href, image, alt, name, description }) {
  return (
    <Link
      href={href}
      className="service-row group grid items-center gap-6 py-8 border-b border-white/10 text-white transition-all duration-300"
      style={{ gridTemplateColumns: "80px 1.2fr 2fr" }}
    >
      <span
        className="text-brand-red leading-none"
        style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700 }}
      >
        {num}
      </span>

      <div className="aspect-[4/3] overflow-hidden rounded-sm">
        <Image
          src={image}
          alt={alt}
          width={320}
          height={240}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
        />
      </div>

      <div className="flex items-center justify-between gap-6">
        <div>
          <h3
            className="text-white uppercase leading-none mb-1.5"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem,3.5vw,2.75rem)", fontWeight: 700, letterSpacing: "-0.01em" }}
          >
            {name}
          </h3>
          <p className="text-white/65 leading-relaxed max-w-lg" style={{ fontSize: "0.95rem" }}>
            {description}
          </p>
        </div>
        <span className="shrink-0 text-white/35 transition-all duration-300 group-hover:text-brand-red group-hover:translate-x-2 group-hover:-rotate-45">
          <ArrowRightIcon className="w-7 h-7" />
        </span>
      </div>
    </Link>
  );
}
