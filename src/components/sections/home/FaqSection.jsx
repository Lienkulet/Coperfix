"use client";

import { useState } from "react";
import Link from "next/link";
import PhoneIcon from "@/components/icons/PhoneIcon";
import PlusIcon from "@/components/icons/PlusIcon";

const FAQS = [
  {
    num: "Q01",
    q: "Care sunt zonele pe care le deserviți?",
    a: "Suntem bazați în Chișinău și acoperim toată Republica Moldova. Dacă nu ești sigur că ajungem la tine, sună-ne. Îți vom spune imediat.",
  },
  {
    num: "Q02",
    q: "Oferiți oferte gratuite?",
    a: "Da. Fiecare ofertă este gratuită și fără nicio obligație de a comanda. Venim, inspectăm lucrarea, îți explicăm recomandarea noastră și îți oferim un preț corect.",
  },
  {
    num: "Q03",
    q: "Folosiți subcontractanți sau echipă proprie?",
    a: "Folosim echipa noastră proprie. Când angajezi Coperfix, oamenii care execută lucrarea sunt cei pe care i-ai întâlnit la măsurare. Așa menținem calitatea constantă.",
  },
  {
    num: "Q04",
    q: "Sunteți autorizați, garantați și asigurați?",
    a: "Da. Coperfix este pe deplin autorizat, garantat și asigurat pentru protecția dumneavoastră și liniștea sufletească.",
  },
  {
    num: "Q05",
    q: "Cum stabiliți prețurile?",
    a: "Prețul se bazează pe volumul lucrării, materialele și dimensiunile proiectului. Fiecare ofertă este transparentă. Veți vedea toate pozițiile și suntem bucuroși să le explicăm.",
  },
  {
    num: "Q06",
    q: "Cum vă pot contacta?",
    a: "Sunați la +373 69 585 859, scrieți la office@coperfix.md sau completați formularul de contact de pe site. De obicei răspundem în 24 de ore.",
  },
];

function FaqItem({ num, q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-black/08 last:border-b last:border-black/08">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full grid items-center gap-6 text-left py-6 px-1 bg-transparent cursor-pointer"
        style={{ gridTemplateColumns: "auto 1fr auto" }}
      >
        <span
          className="text-brand-red"
          style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 700, fontSize: "1.1rem" }}
        >
          {num}
        </span>
        <span
          className="text-ink uppercase tracking-wide leading-tight"
          style={{ fontFamily: "var(--font-heading)", fontSize: "1.05rem", fontWeight: 500 }}
        >
          {q}
        </span>
        <span
          className={`flex items-center justify-center w-10 h-10 rounded-full border-[1.5px] border-ink transition-all duration-300 shrink-0 ${open ? "bg-brand-red border-brand-red text-white rotate-45" : "text-ink hover:bg-brand-red hover:border-brand-red hover:text-white"}`}
        >
          <PlusIcon className="w-5 h-5" />
        </span>
      </button>

      <div className={`faq-answer ${open ? "open" : ""}`}>
        <div className="pb-6 pl-[3.5rem] pr-1">
          <p className="text-gray-700 leading-[1.75]" style={{ fontSize: "0.95rem" }}>{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  return (
    <section className="py-24 bg-bone">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid gap-16" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))" }}>

          <div>
            <span
              className="inline-flex items-center gap-2 mb-4 uppercase tracking-[0.18em] text-brand-red"
              style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", fontWeight: 600 }}
            >
              <span className="w-6 h-px bg-brand-red" />
              Ai întrebări?
            </span>
            <h2
              className="text-ink uppercase leading-none tracking-tight mb-4"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700 }}
            >
              Hai să Discutăm
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6" style={{ fontSize: "1rem" }}>
              Răspunsuri clare la întrebările pe care ni le pun cel mai des clienții.
            </p>
            <Link
              href="tel:+37369585859"
              className="inline-flex items-center gap-2.5 px-4 py-3 bg-ink text-white uppercase tracking-wider font-semibold transition-colors duration-200 hover:bg-brand-red"
              style={{ fontFamily: "var(--font-heading)", fontSize: "0.82rem" }}
            >
              <PhoneIcon className="w-4 h-4" />
              Încă nesigur? Sună: +373 69 585 859
            </Link>
          </div>

          <div className="flex flex-col">
            {FAQS.map((faq) => (
              <FaqItem key={faq.num} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
