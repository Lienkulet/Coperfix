import ServiceBlock from "@/components/ui/cards/ServiceBlock";

const SERVICES = [
  {
    id: "roofing",
    num: "01",
    image: "/rd-drone-4.jpg",
    alt: "Roofing by R & D Perez Construction",
    title: "Roofing",
    description: "Complete roof replacements, leak repairs, storm damage, moss removal, and skylights. Built to stand up to Oregon weather.",
    features: [
      "Roof Replacement",
      "Leak Repairs",
      "Storm Damage",
      "Maintenance & Debris Removal",
      "Moss Removal",
      "Skylights",
    ],
    isReversed: false,
  },
  {
    id: "decks",
    num: "02",
    image: "/rd-drone-1.jpg",
    alt: "Decks by R & D Perez Construction",
    title: "Decks",
    description: "Custom deck installations, replacements, and repairs. Full framing, railings, staining, and sealing for decks built to last.",
    features: [
      "Deck Installation",
      "Deck Replacement",
      "Deck Repairs",
      "Framing & Structural Work",
      "Railing Installation",
      "Staining & Sealing",
    ],
    isReversed: true,
  },
  {
    id: "fences",
    num: "03",
    image: "/fence-services.jpg",
    alt: "Fences by R & D Perez Construction",
    title: "Fences",
    description: "Wood and vinyl fences, pergolas, gates, and retaining walls. New installs, replacements, and repairs from posts to panels.",
    features: [
      "Fence Installation",
      "Fence Replacement",
      "Fence Repairs",
      "Wood & Vinyl",
      "Gates & Hardware",
      "Staining & Sealing",
    ],
    isReversed: false,
  },
  {
    id: "masonry",
    num: "04",
    image: "/chimney-1.jpg",
    alt: "Masonry by R & D Perez Construction",
    title: "Masonry",
    description: "Chimney repairs, tuck pointing, retaining walls, and sealant application. Precision masonry work when your roof or property calls for it.",
    features: [
      "Chimney Repairs",
      "Tuck Pointing",
      "Retaining Walls",
      "Sealant Application",
      "Repairs & Restoration",
    ],
    isReversed: true,
  },
];

export default function ServicesBlocksSection() {
  return (
    <>
      {SERVICES.map((service) => (
        <ServiceBlock key={service.id} {...service} />
      ))}
    </>
  );
}
