"use client";

import { useState } from "react";
import WorkCard from "@/components/ui/cards/WorkCard";

const FILTER_CATEGORIES = [
  { key: "all",     label: "All"     },
  { key: "roofing", label: "Roofing" },
  { key: "decks",   label: "Decks"   },
  { key: "fences",  label: "Fences"  },
  { key: "masonry", label: "Masonry" },
];

const WORK_PROJECTS = [
  { src: "/rd-drone-4.jpg",       alt: "Dark Shingle Replacement",   category: "Roofing", title: "Dark Shingle Replacement",   detail: "Aerial view · complete",       tall: true  },
  { src: "/rd-drone-5.jpg",       alt: "Install In Progress",        category: "Roofing", title: "Install In Progress",        detail: "Underlayment stage",           tall: false },
  { src: "/roof-new.jpg",         alt: "New Architectural Shingle",  category: "Roofing", title: "New Architectural Shingle",  detail: "Clean finish · sunny day",     tall: false },
  { src: "/roof-aerial-gray.jpg", alt: "Gray Architectural Aerial",  category: "Roofing", title: "Gray Architectural Aerial",  detail: "Wide overhead view",           tall: true  },
  { src: "/roof-closeup.jpg",     alt: "Ridge Detail",               category: "Roofing", title: "Ridge Detail",               detail: "Close up gray shingle",        tall: true  },
  { src: "/rd-project-2.jpg",     alt: "Gray Shingle Roof",          category: "Roofing", title: "Gray Shingle Roof",          detail: "Aerial · complete",            tall: false },
  { src: "/rd-project-3.png",     alt: "Neighborhood Overview",      category: "Roofing", title: "Neighborhood Overview",      detail: "Multi home roof area",         tall: false },
  { src: "/rd-drone-1.jpg",       alt: "Composite Deck w/ Fire Pit", category: "Decks",   title: "Composite Deck w/ Fire Pit", detail: "Full replacement · railings",  tall: true  },
  { src: "/rd-drone-2.jpg",       alt: "Multi Level Deck",           category: "Decks",   title: "Multi Level Deck",           detail: "Wraparound build",             tall: true  },
  { src: "/rd-drone-3.jpg",       alt: "Backyard Deck",              category: "Decks",   title: "Backyard Deck",              detail: "Composite + railing install",  tall: false },
  { src: "/rd-drone-7.jpg",       alt: "Entry Stairs & Landing",     category: "Decks",   title: "Entry Stairs & Landing",     detail: "Wood stairs build",            tall: false },
  { src: "/deck-composite.jpg",   alt: "Gray Composite Steps",       category: "Decks",   title: "Gray Composite Steps",       detail: "Deck + stair replacement",     tall: true  },
  { src: "/fence-1.jpg",          alt: "Cedar & Metal Fence",        category: "Fences",  title: "Cedar & Metal Fence",        detail: "Pergola cap install",          tall: true  },
  { src: "/fence-2.jpg",          alt: "Shadowbox Cedar Fence",      category: "Fences",  title: "Shadowbox Cedar Fence",      detail: "New install · perspective",    tall: false },
  { src: "/fence-3.jpg",          alt: "Privacy Cedar Fence",        category: "Fences",  title: "Privacy Cedar Fence",        detail: "Tall backyard build",          tall: false },
  { src: "/fence-5.jpg",          alt: "Backyard Fence Surround",    category: "Fences",  title: "Backyard Fence Surround",    detail: "Full yard perimeter",          tall: true  },
  { src: "/fence-4.jpg",          alt: "Wood Fence Build",           category: "Fences",  title: "Wood Fence Build",           detail: "Post to panel install",        tall: true  },
  { src: "/rd-project-1.jpg",     alt: "Tall Brick Chimney",         category: "Masonry", title: "Tall Brick Chimney",         detail: "Flashing + crown work",        tall: false },
  { src: "/chimney-1.jpg",        alt: "Red Brick Chimney",          category: "Masonry", title: "Red Brick Chimney",          detail: "Full rebuild",                 tall: false },
  { src: "/chimney-2.jpg",        alt: "Chimney w/ New Crown",       category: "Masonry", title: "Chimney w/ New Crown",       detail: "Crown + cap install",          tall: true  },
  { src: "/chimney-3.jpg",        alt: "Brick Chimney Restore",      category: "Masonry", title: "Brick Chimney Restore",      detail: "Clean crown + cap",            tall: true  },
];

export default function WorkGallerySection() {
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
              Filter:
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
                  borderColor: activeFilter === key ? "#C7252A" : "rgba(0,0,0,0.12)",
                  background: activeFilter === key ? "#C7252A" : "transparent",
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
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "#C7252A" }}>
              More coming soon.
            </span>{" "}
            Rafael&apos;s always on a roof, a deck, or a fence line somewhere.
          </p>
        </div>
      </section>
    </>
  );
}
