"use client";

import { useState } from "react";
import WorkCard from "@/components/ui/cards/WorkCard";

const FILTER_CATEGORIES = [
  { key: "all",     label: "Toate"     },
  { key: "roofing", label: "Copertine" },
  { key: "decks",   label: "Terase"    },
  { key: "fences",  label: "Garduri"   },
  { key: "masonry", label: "Structuri" },
];

const WORK_PROJECTS = [
  { src: "/rd-drone-4.jpg",       alt: "Înlocuire copertină închisă",        category: "Roofing", title: "Înlocuire copertină închisă",        detail: "Vedere aeriană · complet",       tall: true  },
  { src: "/rd-drone-5.jpg",       alt: "Montaj în desfășurare",              category: "Roofing", title: "Montaj în desfășurare",              detail: "Etapa de structură",             tall: false },
  { src: "/roof-new.jpg",         alt: "Copertină nouă arhitecturală",       category: "Roofing", title: "Copertină nouă arhitecturală",       detail: "Finisaj curat · zi însorită",    tall: false },
  { src: "/roof-aerial-gray.jpg", alt: "Copertină gri · vedere aeriană",     category: "Roofing", title: "Copertină gri · vedere aeriană",     detail: "Vedere panoramică",              tall: true  },
  { src: "/roof-closeup.jpg",     alt: "Detaliu creastă",                    category: "Roofing", title: "Detaliu creastă",                    detail: "Prim-plan șindrilă gri",         tall: true  },
  { src: "/rd-project-2.jpg",     alt: "Copertină gri",                      category: "Roofing", title: "Copertină gri",                      detail: "Aerian · complet",               tall: false },
  { src: "/rd-project-3.png",     alt: "Vedere de ansamblu",                 category: "Roofing", title: "Vedere de ansamblu",                 detail: "Zonă rezidențială",              tall: false },
  { src: "/rd-drone-1.jpg",       alt: "Terasă compozit cu vatră",           category: "Decks",   title: "Terasă compozit cu vatră",           detail: "Înlocuire completă · balustrade", tall: true  },
  { src: "/rd-drone-2.jpg",       alt: "Terasă pe mai multe niveluri",       category: "Decks",   title: "Terasă pe mai multe niveluri",       detail: "Construcție înconjurătoare",     tall: true  },
  { src: "/rd-drone-3.jpg",       alt: "Terasă în curte",                    category: "Decks",   title: "Terasă în curte",                    detail: "Compozit + montaj balustrade",   tall: false },
  { src: "/rd-drone-7.jpg",       alt: "Scări de intrare & podest",          category: "Decks",   title: "Scări de intrare & podest",          detail: "Construcție scări din lemn",     tall: false },
  { src: "/deck-composite.jpg",   alt: "Trepte compozit gri",                category: "Decks",   title: "Trepte compozit gri",                detail: "Înlocuire terasă + scări",       tall: true  },
  { src: "/fence-1.jpg",          alt: "Gard cedru & metal",                 category: "Fences",  title: "Gard cedru & metal",                 detail: "Montaj capac pergolă",           tall: true  },
  { src: "/fence-2.jpg",          alt: "Gard shadowbox cedru",               category: "Fences",  title: "Gard shadowbox cedru",               detail: "Montaj nou · perspectivă",       tall: false },
  { src: "/fence-3.jpg",          alt: "Gard de confidențialitate cedru",    category: "Fences",  title: "Gard de confidențialitate cedru",    detail: "Construcție înaltă în curte",    tall: false },
  { src: "/fence-5.jpg",          alt: "Gard complet curte",                 category: "Fences",  title: "Gard complet curte",                 detail: "Perimetru complet",              tall: true  },
  { src: "/fence-4.jpg",          alt: "Construcție gard din lemn",          category: "Fences",  title: "Construcție gard din lemn",          detail: "Montaj de la stâlp la panou",    tall: true  },
  { src: "/rd-project-1.jpg",     alt: "Coș de fum înalt din cărămidă",     category: "Masonry", title: "Coș de fum înalt din cărămidă",     detail: "Lucrări de tencuire & coroană",  tall: false },
  { src: "/chimney-1.jpg",        alt: "Coș de fum cărămidă roșie",         category: "Masonry", title: "Coș de fum cărămidă roșie",         detail: "Reconstrucție completă",         tall: false },
  { src: "/chimney-2.jpg",        alt: "Coș de fum cu coroană nouă",        category: "Masonry", title: "Coș de fum cu coroană nouă",        detail: "Montaj coroană & capac",         tall: true  },
  { src: "/chimney-3.jpg",        alt: "Restaurare coș de fum",             category: "Masonry", title: "Restaurare coș de fum",             detail: "Coroană & capac curate",         tall: true  },
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visible = WORK_PROJECTS.filter(
    (p) => activeFilter === "all" || p.category.toLowerCase() === activeFilter
  );

  return (
    <>
      {/* Sticky filter bar */}
      <div className="bg-paper border-b border-black/[0.08] sticky z-50" style={{ top: 76 }}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex gap-2 flex-wrap items-center">
            <span
              className="mr-2 text-gray-500 uppercase tracking-[0.22em]"
              style={{ fontFamily: "var(--font-heading)", fontSize: "0.75rem" }}
            >
              Filtru:
            </span>
            {FILTER_CATEGORIES.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveFilter(key)}
                className="uppercase tracking-[0.1em] transition-all duration-200 cursor-pointer"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  padding: "0.55rem 1.1rem",
                  border: "1.5px solid",
                  borderColor: activeFilter === key ? "#c9a14e" : "rgba(0,0,0,0.12)",
                  background: activeFilter === key ? "#c9a14e" : "transparent",
                  color: activeFilter === key ? "#fff" : "#111",
                  borderRadius: 0,
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery grid */}
      <section className="bg-paper" style={{ padding: "clamp(3rem,6vw,5rem) 0 clamp(3rem,5vw,4rem)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="work-gallery-grid">
            {visible.map((project) => (
              <WorkCard key={project.src} {...project} />
            ))}
          </div>
          <p className="text-center mt-12 text-gray-500" style={{ fontSize: "0.95rem", letterSpacing: "0.02em" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "#c9a14e" }}>
              Mai urmează.
            </span>{" "}
            Echipa noastră este mereu pe un șantier undeva în Moldova.
          </p>
        </div>
      </section>
    </>
  );
}
