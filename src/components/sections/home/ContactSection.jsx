"use client";

import { useState } from "react";
import Image from "next/image";
import PhoneIcon from "@/components/icons/PhoneIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import CheckCircleIcon from "@/components/icons/CheckCircleIcon";

const SERVICES = ["Copertine auto", "Terasă acoperită", "Pergolă bioclimatică", "Garduri & porți", "Mai multe servicii", "Altceva"];

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
        style={{ bottom: "-200px", left: "-150px", width: "520px", height: "520px", background: "radial-gradient(circle, rgba(201,161,78,0.25) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative">
        <div className="grid gap-16 items-start" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))" }}>

          {/* Left — info */}
          <div>
            <figure className="mb-8 relative max-w-xs overflow-hidden rounded-sm shadow-2xl">
              <Image src="/familytest.jpg" alt="Rafael Perez with his family" width={320} height={400} className="w-full object-cover block" style={{ aspectRatio: "4/5" }} />
              <figcaption
                className="absolute left-3 bottom-3 bg-brand-red text-white uppercase tracking-[0.2em] px-3 py-1.5"
                style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem" }}
              >
                Echipa Coperfix
              </figcaption>
            </figure>

            <span
              className="inline-flex items-center gap-2 mb-4 uppercase tracking-[0.18em] text-brand-red"
              style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", fontWeight: 600 }}
            >
              <span className="w-6 h-px bg-brand-red" />
              Ofertă gratuită
            </span>

            <h2
              className="text-white uppercase leading-none tracking-tight mb-4"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 700 }}
            >
              Spune-ne despre
              <br />
              <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", textTransform: "none" }}>proiectul tău.</span>
            </h2>

            <p className="text-white/65 leading-relaxed mb-8" style={{ fontSize: "1rem" }}>
              Contactează-ne oricând. Răspundem în 24 de ore, iar ofertele sunt întotdeauna gratuite. Nicio presiune.
            </p>

            <div className="flex flex-col gap-3">
              <ContactChannel href="tel:+37369585859" icon={<PhoneIcon className="w-5 h-5" />} label="Telefon" value="+373 69 585 859" />
              <ContactChannel href="mailto:office@coperfix.md" icon={<EmailIcon className="w-5 h-5" />} label="Email" value="office@coperfix.md" />
              <ContactChannel isStatic icon={<LocationIcon className="w-5 h-5" />} label="Localizare" value="Chișinău, MD" />
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-paper p-8 rounded-sm shadow-2xl">
            {status === "success" ? (
              <div className="text-center py-10">
                <CheckCircleIcon className="mx-auto mb-4 text-green-500" size={48} />
                <p className="text-ink text-lg leading-relaxed">Mulțumim că ne-ai contactat! Te vom suna în scurt timp.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <input type="hidden" name="_subject" value="Cerere nouă de pe site Coperfix" />
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                {[
                  { id: "name",  label: "Nume *",  type: "text",  placeholder: "Numele tău complet", required: true,  autoComplete: "name"  },
                  { id: "email", label: "Email *", type: "email", placeholder: "your@email.com",    required: true,  autoComplete: "email" },
                  { id: "phone", label: "Telefon", type: "tel",   placeholder: "+373 ...",           required: false, autoComplete: "tel"   },
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
                  <label htmlFor="service" className="text-ink font-semibold text-sm tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>Serviciu de interes</label>
                  <select id="service" name="service" defaultValue="" className="w-full px-3.5 py-3 border border-black/15 bg-white text-ink focus:outline-none focus:border-ink rounded-sm" style={{ fontSize: "16px" }}>
                    <option value="" disabled>Selectează un serviciu...</option>
                    {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-ink font-semibold text-sm tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>Mesaj</label>
                  <textarea id="message" name="message" rows={4} placeholder="Spune-ne despre proiectul tău..." className="w-full px-3.5 py-3 border border-black/15 bg-white text-ink focus:outline-none focus:border-ink rounded-sm resize-y" style={{ fontSize: "16px", minHeight: "100px" }} />
                </div>

                {status === "error" && (
                  <p className="text-red-600 text-sm">Ceva nu a mers bine. Încearcă din nou sau sună la +373 69 585 859.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 bg-ink text-white uppercase tracking-widest font-semibold transition-all duration-200 hover:opacity-85 disabled:opacity-60 disabled:cursor-wait"
                  style={{ fontFamily: "var(--font-heading)", fontSize: "0.95rem" }}
                >
                  {status === "submitting" ? "Se trimite…" : "Trimite mesajul"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
