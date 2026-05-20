import Image from "next/image";
import Link from "next/link";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";

const HERO_VIDEO = "https://customer-f1c0lq96bzugmlg4.cloudflarestream.com/af389676e9c1fc522c73913f1aa5c084/downloads/default.mp4";
const LICENSE    = "Licensed, Bonded & Insured · Oregon CCB #254171";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white text-center" style={{ padding: "clamp(4rem,8vw,6rem) 1.5rem" }}>

      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay muted loop playsInline preload="auto"
          src={HERO_VIDEO}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.30) 30%, rgba(0,0,0,0.45) 70%, rgba(0,0,0,0.75) 100%)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-7">
        <div className="hero-logo" style={{ width: "clamp(200px,28vw,360px)" }}>
          <Image
            src="/Untitled design (14).png"
            alt="R & D Perez Construction LLC"
            width={360}
            height={360}
            className="w-full h-auto drop-shadow-2xl"
            priority
          />
        </div>

        <Link
          href="/#contact"
          className="hero-cta inline-flex items-center justify-center px-10 py-5 bg-brand-red hover:bg-white border-2 border-brand-red text-white hover:text-brand-red font-semibold uppercase tracking-[0.14em] transition-all duration-300"
          style={{ fontFamily: "var(--font-heading)", fontSize: "0.95rem", boxShadow: "0 12px 36px -10px rgba(0,0,0,0.5)" }}
        >
          Get a Free Estimate
        </Link>

        <p
          className="hero-badge text-white/82 uppercase tracking-[0.18em]"
          style={{ fontFamily: "var(--font-heading)", fontSize: "0.78rem", textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
        >
          {LICENSE}
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-scroll absolute bottom-7 left-1/2 z-10 flex flex-col items-center gap-1.5 text-white/60"
        aria-hidden="true"
      >
        <span className="uppercase tracking-[0.28em]" style={{ fontFamily: "var(--font-heading)", fontSize: "0.68rem" }}>Scroll</span>
        <ArrowDownIcon className="w-4 h-5" />
      </div>
    </section>
  );
}
