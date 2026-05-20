import Link from "next/link";
import Image from "next/image";

const RED = "#C7252A";

function PhoneIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  );
}

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Services", href: "/services/roof-services" },
  { label: "Work",     href: "/work" },
  { label: "Contact",  href: "/contact" },
];

const serviceLinks = [
  { label: "Roofing",  href: "/services/roof-services" },
  { label: "Decks",    href: "/services/deck-services" },
  { label: "Fences",   href: "/services/fence-services" },
  { label: "Masonry",  href: "/services/masonry-services" },
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
              Ready to start?
            </p>
            <p
              className="text-4xl lg:text-5xl text-white leading-tight"
              style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
            >
              Call Rafael direct.
            </p>
          </div>
          <a
            href="tel:+15419923126"
            className="flex items-center gap-3 text-white transition-opacity duration-150 hover:opacity-80"
          >
            <PhoneIcon className="w-8 h-8 shrink-0" />
            <span
              className="text-4xl lg:text-5xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              (541) 992-3126
            </span>
          </a>
        </div>
      </div>

      {/* ── Main dark footer ── */}
      <div style={{ backgroundColor: "#111111" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div>
            <Link href="/" className="inline-block mb-5" aria-label="R & D Perez Construction home">
              <Image
                src="/testlogo.png"
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
              Family owned construction company dedicated to exceeding expectations.
            </p>
            <p
              className="text-xs font-semibold tracking-[0.18em] uppercase"
              style={{ color: "#6b7280", fontFamily: "var(--font-oswald)" }}
            >
              Serving Beaverton and the surrounding area
            </p>
          </div>

          {/* Navigate */}
          <div>
            <ColHeading>Navigate</ColHeading>
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
            <ColHeading>Services</ColHeading>
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
                <span>Beaverton, OR</span>
              </li>
              <li>
                <a
                  href="tel:+15419923126"
                  className="flex items-start gap-2.5 text-sm transition-colors duration-150 hover:text-white"
                  style={{ color: "#9ca3af" }}
                >
                  <PhoneIcon className="w-4 h-4 shrink-0 mt-0.5" />
                  (541) 992-3126
                </a>
              </li>
              <li>
                <a
                  href="mailto:rdperezconstruction@gmail.com"
                  className="flex items-start gap-2.5 text-sm transition-colors duration-150 hover:text-white break-all"
                  style={{ color: "#9ca3af" }}
                >
                  <EnvelopeIcon />
                  rdperezconstruction@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid #222" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs" style={{ color: "#4b5563" }}>
            <p>&copy; 2026 R & D Perez Construction LLC. All rights reserved.</p>
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
              Licensed, Bonded &amp; Insured &middot; Oregon CCB #254171
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
