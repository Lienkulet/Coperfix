import Link from "next/link";
import Image from "next/image";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@/components/icons";

const RED = "#c9a14e";

const navLinks = [
  { label: "Acasă",    href: "/" },
  { label: "Despre noi", href: "/about" },
  { label: "Servicii", href: "/services/roof-services" },
  { label: "Lucrări",  href: "/work" },
  { label: "Contact",  href: "/contact" },
];

const serviceLinks = [
  { label: "Copertine auto",       href: "/services/roof-services" },
  { label: "Terase acoperite",     href: "/services/deck-services" },
  { label: "Pergole bioclimatice", href: "/services/fence-services" },
  { label: "Garduri & porți",      href: "/services/masonry-services" },
];

function ColHeading({ children }) {
  return (
    <div className="mb-5">
      <h3
        className="text-sm font-bold tracking-[0.2em] uppercase mb-2"
        style={{ color: RED, fontFamily: "var(--font-oswald)" }}
      >
        {children}
      </h3>
      <div className="w-8 h-0.5" style={{ backgroundColor: RED }} />
    </div>
  );
}

export default function Footer() {
  return (
    <footer>
      {/* ── CTA strip ── */}
      <div style={{ backgroundColor: RED }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-1"
              style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-oswald)" }}
            >
              Gata să începi?
            </p>
            <p
              className="text-4xl lg:text-5xl text-white leading-tight"
              style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
            >
              Sună-ne direct.
            </p>
          </div>
          <a
            href="tel:+37369585859"
            className="flex items-center gap-3 text-white transition-opacity duration-150 hover:opacity-80"
          >
            <PhoneIcon className="w-8 h-8 shrink-0" />
            <span
              className="text-4xl lg:text-5xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              +373 69 585 859
            </span>
          </a>
        </div>
      </div>

      {/* ── Main dark footer ── */}
      <div style={{ backgroundColor: "#111111" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div>
            <Link href="/" className="inline-block mb-5" aria-label="Coperfix acasă">
              <Image
                src="/coperfix.png"
                alt="R & D Perez Construction LLC"
                width={160}
                height={80}
                className="w-36 h-auto object-contain"
              />
            </Link>
            <p
              className="text-base leading-relaxed font-semibold mb-3"
              style={{ color: "#d1d5db", fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
            >
              Afacere de familie dedicată depășirii așteptărilor.
            </p>
            <p
              className="text-xs font-semibold tracking-[0.18em] uppercase"
              style={{ color: "#6b7280", fontFamily: "var(--font-oswald)" }}
            >
              Servicii în Chișinău și toată Moldova
            </p>
          </div>

          {/* Navigate */}
          <div>
            <ColHeading>Navigare</ColHeading>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-150 hover:text-white"
                    style={{ color: "#9ca3af" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <ColHeading>Servicii</ColHeading>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-150 hover:text-white"
                    style={{ color: "#9ca3af" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <ColHeading>Contact</ColHeading>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-sm" style={{ color: "#9ca3af" }}>
                <MapPinIcon />
                <span>Chișinău, MD</span>
              </li>
              <li>
                <a
                  href="tel:+37369585859"
                  className="flex items-start gap-2.5 text-sm transition-colors duration-150 hover:text-white"
                  style={{ color: "#9ca3af" }}
                >
                  <PhoneIcon className="w-4 h-4 shrink-0 mt-0.5" />
                  +373 69 585 859
                </a>
              </li>
              <li>
                <a
                  href="mailto:office@coperfix.md"
                  className="flex items-start gap-2.5 text-sm transition-colors duration-150 hover:text-white break-all"
                  style={{ color: "#9ca3af" }}
                >
                  <EnvelopeIcon />
                  office@coperfix.md
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid #222" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs" style={{ color: "#4b5563" }}>
            <p>&copy; 2026 Coperfix. Toate drepturile rezervate.</p>
            <Link
              href="/privacy"
              className="transition-colors duration-150 hover:text-white"
              style={{ color: "#6b7280" }}
            >
              Privacy Policy
            </Link>
            <p
              className="tracking-[0.12em] uppercase"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Autorizat, Garantat &amp; Asigurat &middot; Chișinău, Moldova
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
