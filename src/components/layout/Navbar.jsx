"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const RED      = "#c9a14e";
const INK      = "#111111";
const HEADER_H = 76;

const NAV_LINKS = [
  { label: "Acasă",    href: "/"        },
  { label: "Despre noi", href: "/about" },
  { label: "Servicii", href: "/services"},
  { label: "Lucrări",  href: "/work"    },
];

export default function Navbar() {
  const pathname      = usePathname();
  const isHeroPage    = pathname === "/";

  const [scrolled,  setScrolled]  = useState(false);
  const [pastHero,  setPastHero]  = useState(!isHeroPage);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    if (!isHeroPage) { setPastHero(true); setScrolled(false); return; }

    function onScroll() {
      const y    = window.scrollY;
      const hero = document.querySelector(".hero-section");
      const threshold = hero ? hero.offsetHeight - HEADER_H : window.innerHeight * 0.8;
      setScrolled(y > 8);
      setPastHero(y > threshold);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHeroPage]);

  /* lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* close menu on route change */
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const transparent = isHeroPage && !pastHero;

  const headerStyle = {
    position:   pastHero || !isHeroPage ? "sticky" : "fixed",
    top:        0,
    left:       0,
    right:      0,
    zIndex:     900,
    height:     `${HEADER_H}px`,
    background: transparent ? "transparent" : "#ffffff",
    borderBottom: transparent ? "1px solid transparent" : "1px solid rgba(0,0,0,0.08)",
    boxShadow:  scrolled && pastHero ? "0 10px 30px -16px rgba(0,0,0,0.2)" : "none",
    transition: "background 0.4s, box-shadow 0.3s, border-color 0.4s",
  };

  return (
    <>
      <header style={headerStyle}>
        {/* Red gradient underline — hidden when transparent */}
        {!transparent && (
          <div style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #3d2800 0%, #c9a14e 50%, #3d2800 100%)" }} />
        )}

        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group" aria-label="Coperfix Copertine la comandă">
            <Image
              src="/coper-logo.png"
              alt="Coperfix logo"
              width={56}
              height={56}
              className="h-14 w-auto object-contain transition-transform duration-300 group-hover:-rotate-3"
              priority
            />
            <div className="hidden sm:flex flex-col leading-none">
              <span
                className="font-bold uppercase tracking-wide"
                style={{ fontFamily: "var(--font-heading)", fontSize: "1.15rem", letterSpacing: "0.02em", color: transparent ? "#fff" : INK }}
              >
                Coperfix
              </span>
              <span
                className="uppercase mt-0.5"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", letterSpacing: "0.25em", color: transparent ? "rgba(255,255,255,0.72)" : "#7a7a7a" }}
              >
                Copertine la comandă
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative py-2 font-medium uppercase tracking-[0.08em] transition-colors duration-200 group"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.9rem",
                    color: active ? RED : transparent ? "#fff" : INK,
                  }}
                  onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = RED; }}
                  onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = transparent ? "#fff" : INK; }}
                >
                  {link.label}
                  {/* Red underline on hover */}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-0.5 bg-brand-red transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>
              );
            })}

            <Link
              href="/#contact"
              className="ml-2 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "10px 18px",
                background: RED,
                color: "#fff",
                border: `2px solid ${RED}`,
                lineHeight: 1,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = INK; e.currentTarget.style.borderColor = INK; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = RED; e.currentTarget.style.borderColor = RED; }}
            >
              Ofertă gratuită
            </Link>
          </nav>

          {/* Burger */}
          <button
            className="lg:hidden flex flex-col justify-center gap-1.25 w-7.5 h-7.5 z-1001"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-full rounded-sm transition-all duration-300"
                style={{
                  height: "2.5px",
                  background: transparent ? "#fff" : INK,
                  transform:
                    menuOpen
                      ? i === 0 ? "translateY(7.5px) rotate(45deg)"
                      : i === 1 ? "scaleX(0)"
                      : "translateY(-7.5px) rotate(-45deg)"
                      : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Side rail — visible only after past-hero on desktop */}
      {pastHero && (
        <a
          href="tel:+37369585859"
          aria-label="Sună +373 69 585 859"
          className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-800 items-center justify-center bg-brand-red text-white hover:bg-ink transition-all duration-300 hover:pr-3.5"
          style={{
            padding: "14px 10px",
            writingMode: "vertical-rl",
            borderRadius: "2px 0 0 2px",
            boxShadow: "-2px 0 16px rgba(0,0,0,0.25)",
          }}
        >
          <span
            className="rotate-180 inline-block uppercase tracking-[0.2em]"
            style={{ fontFamily: "var(--font-heading)", fontSize: "0.78rem", fontWeight: 600 }}
          >
            Sună +373 69 585 859
          </span>
        </a>
      )}

      {/* Mobile menu — full-screen dark overlay */}
      <div
        className="lg:hidden fixed inset-0 z-850 bg-ink overflow-y-auto transition-all duration-300"
        style={{
          opacity:     menuOpen ? 1 : 0,
          visibility:  menuOpen ? "visible" : "hidden",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col min-h-full px-6" style={{ paddingTop: `${HEADER_H + 40}px`, paddingBottom: "40px" }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-4 border-b border-white/07 text-white uppercase transition-colors duration-200 hover:text-brand-red"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "2rem", letterSpacing: "0.02em" }}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/#contact"
            className="mt-8 text-center py-4 text-white uppercase tracking-widest font-semibold"
            style={{ fontFamily: "var(--font-heading)", fontSize: "0.85rem", background: RED }}
          >
            Ofertă gratuită
          </Link>

          <div className="mt-auto pt-10 flex flex-col gap-2">
            <a href="tel:+37369585859" className="text-white/70 tracking-wide hover:text-white transition-colors" style={{ fontSize: "1rem" }}>
              +373 69 585 859
            </a>
            <a href="mailto:office@coperfix.md" className="text-white/70 tracking-wide hover:text-white transition-colors" style={{ fontSize: "1rem" }}>
              office@coperfix.md
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
