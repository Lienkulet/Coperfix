"use client";

import { useState } from "react";
import Image from "next/image";
import PhoneIcon from "@/components/icons/PhoneIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import LocationIcon from "@/components/icons/LocationIcon";

const SERVICES = ["Roofing", "Decks", "Fences", "Masonry / Chimney", "Multiple Services", "Other"];

function ContactChannel({ href, icon, label, value, isStatic }) {
  const inner = (
    <div className="flex items-center gap-4 p-4 border border-white/07 transition-all duration-300"
      style={{ background: "rgba(255,255,255,0.04)" }}>
      <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-brand-red text-white shrink-0 transition-colors duration-300">
        {icon}
      </span>
      <span className="flex flex-col">
        <span className="text-white/55 uppercase tracking-[0.18em]" style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem" }}>{label}</span>
        <span className="text-white font-semibold tracking-wide" style={{ fontFamily: "var(--font-heading)", fontSize: "1.05rem" }}>{value}</span>
      </span>
    </div>
  );

  if (isStatic) return <div>{inner}</div>;
  return (
    <a href={href} className="group block hover:translate-x-1.5 transition-transform duration-300">
      {inner}
    </a>
  );
}

export default function ContactSection() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("https://formspree.io/f/xkokegka", {
        method: "POST",
        body: new FormData(e.target),
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 bg-ink relative overflow-hidden">
      <div
        className="absolute pointer-events-none"
        style={{ bottom: "-200px", left: "-150px", width: "520px", height: "520px", background: "radial-gradient(circle, rgba(199,37,42,0.25) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative">
        <div className="grid gap-16 items-start" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))" }}>

          {/* Left — info */}
          <div>
            <figure className="mb-8 relative max-w-xs overflow-hidden rounded-sm shadow-2xl">
              <Image src="/family.jpg" alt="Rafael Perez with his family" width={320} height={400} className="w-full object-cover block" style={{ aspectRatio: "4/5" }} />
              <figcaption
                className="absolute left-3 bottom-3 bg-brand-red text-white uppercase tracking-[0.2em] px-3 py-1.5"
                style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem" }}
              >
                Rafael &amp; family
              </figcaption>
            </figure>

            <span
              className="inline-flex items-center gap-2 mb-4 uppercase tracking-[0.18em] text-brand-red"
              style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", fontWeight: 600 }}
            >
              <span className="w-6 h-px bg-brand-red" />
              Free estimate
            </span>

            <h2
              className="text-white uppercase leading-none tracking-tight mb-4"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 700 }}
            >
              Tell us about
              <br />
              <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", textTransform: "none" }}>your project.</span>
            </h2>

            <p className="text-white/65 leading-relaxed mb-8" style={{ fontSize: "1rem" }}>
              Reach out however works for you. We respond within 24 hours and our estimates are always free. No pressure to book.
            </p>

            <div className="flex flex-col gap-3">
              <ContactChannel href="tel:+15419923126" icon={<PhoneIcon className="w-5 h-5" />} label="Call" value="(541) 992-3126" />
              <ContactChannel href="mailto:rdperezconstruction@gmail.com" icon={<EmailIcon className="w-5 h-5" />} label="Email" value="rdperezconstruction@gmail.com" />
              <ContactChannel isStatic icon={<LocationIcon className="w-5 h-5" />} label="Based in" value="Beaverton, OR" />
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-paper p-8 rounded-sm shadow-2xl">
            {status === "success" ? (
              <div className="text-center py-10">
                <svg className="mx-auto mb-4 text-green-500" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <p className="text-ink text-lg leading-relaxed">Thanks for reaching out! We&apos;ll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <input type="hidden" name="_subject" value="New R & D Perez Construction Website Lead" />
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                {[
                  { id: "name",  label: "Name *",  type: "text",  placeholder: "Your full name",    required: true,  autoComplete: "name"  },
                  { id: "email", label: "Email *", type: "email", placeholder: "your@email.com",    required: true,  autoComplete: "email" },
                  { id: "phone", label: "Phone",   type: "tel",   placeholder: "(541) 555-1234",    required: false, autoComplete: "tel"   },
                ].map(({ id, label, type, placeholder, required, autoComplete }) => (
                  <div key={id} className="flex flex-col gap-1.5">
                    <label htmlFor={id} className="text-ink font-semibold text-sm tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>{label}</label>
                    <input
                      id={id} name={id} type={type} placeholder={placeholder}
                      required={required} autoComplete={autoComplete}
                      className="w-full px-3.5 py-3 border border-black/15 bg-white text-ink focus:outline-none focus:border-ink focus:ring-2 focus:ring-black/5 rounded-sm"
                      style={{ fontSize: "16px" }}
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="text-ink font-semibold text-sm tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>Service Interest</label>
                  <select id="service" name="service" defaultValue="" className="w-full px-3.5 py-3 border border-black/15 bg-white text-ink focus:outline-none focus:border-ink rounded-sm" style={{ fontSize: "16px" }}>
                    <option value="" disabled>Select a service...</option>
                    {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-ink font-semibold text-sm tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>Message</label>
                  <textarea id="message" name="message" rows={4} placeholder="Tell us about your project..." className="w-full px-3.5 py-3 border border-black/15 bg-white text-ink focus:outline-none focus:border-ink rounded-sm resize-y" style={{ fontSize: "16px", minHeight: "100px" }} />
                </div>

                {status === "error" && (
                  <p className="text-red-600 text-sm">Something went wrong. Please try again or call (541) 992-3126.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 bg-ink text-white uppercase tracking-widest font-semibold transition-all duration-200 hover:opacity-85 disabled:opacity-60 disabled:cursor-wait"
                  style={{ fontFamily: "var(--font-heading)", fontSize: "0.95rem" }}
                >
                  {status === "submitting" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
