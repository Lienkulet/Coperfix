"use client";

import { useState } from "react";
import Link from "next/link";
import PhoneIcon from "@/components/icons/PhoneIcon";
import PlusIcon from "@/components/icons/PlusIcon";

const FAQS = [
  {
    num: "Q01",
    q: "What are your service areas?",
    a: "We're based in Beaverton, Oregon and serve Beaverton and the surrounding Portland metro communities. If you're not sure whether we come out your way, just give us a call. We'll let you know.",
  },
  {
    num: "Q02",
    q: "Do you provide free estimates?",
    a: "Yes. Every estimate is free and there's no pressure to book. We'll inspect the work, walk you through our recommendation, and give you an honest quote.",
  },
  {
    num: "Q03",
    q: "Do you use subcontractors or in house crews?",
    a: "We use our own in house, family run crew. When you hire R & D Perez, the people who do the work are the people you met at the estimate. That's how we keep quality consistent.",
  },
  {
    num: "Q04",
    q: "Are you licensed, bonded, and insured?",
    a: "Yes. R & D Perez Construction LLC is fully licensed, bonded, and insured in the state of Oregon for your protection and peace of mind.",
  },
  {
    num: "Q05",
    q: "How do you determine pricing for your services?",
    a: "Pricing is based on the scope of work, materials, and the size of the project. Every estimate is transparent. You'll see the line items, and we're happy to walk you through them.",
  },
  {
    num: "Q06",
    q: "How do I get in contact with you?",
    a: "Give us a call at (541) 992-3126, email rdperezconstruction@gmail.com, or fill out the contact form on this site. We usually respond within 24 hours.",
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
              Got questions?
            </span>
            <h2
              className="text-ink uppercase leading-none tracking-tight mb-4"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700 }}
            >
              Let&apos;s clear it up.
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6" style={{ fontSize: "1rem" }}>
              Straight answers to the stuff homeowners ask us most often.
            </p>
            <Link
              href="tel:+15419923126"
              className="inline-flex items-center gap-2.5 px-4 py-3 bg-ink text-white uppercase tracking-wider font-semibold transition-colors duration-200 hover:bg-brand-red"
              style={{ fontFamily: "var(--font-heading)", fontSize: "0.82rem" }}
            >
              <PhoneIcon className="w-4 h-4" />
              Still unsure? Call: (541) 992-3126
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
