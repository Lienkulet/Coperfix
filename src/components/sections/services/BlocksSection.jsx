import ServiceBlock from "@/components/ui/cards/ServiceBlock";

const SERVICES = [
  {
    id: "roofing",
    num: "01",
    image: "/rd-drone-4.jpg",
    alt: "Copertine auto Coperfix",
    title: "Copertine auto",
    description: "Structuri din aluminiu sau metal vopsit electrostatic pentru 1, 2 sau 4 mașini. Acoperișuri din policarbonat compact sau lambriu aluminiu. Rezistente la zăpadă, vânt și UV.",
    features: [
      "Copertină pentru 1 mașină",
      "Copertină pentru 2 mașini",
      "Copertină pentru 4 mașini",
      "Policarbonat compact",
      "Lambriu aluminiu",
      "Iluminare LED integrată",
    ],
    isReversed: false,
  },
  {
    id: "decks",
    num: "02",
    image: "/rd-drone-1.jpg",
    alt: "Terase acoperite Coperfix",
    title: "Terase acoperite",
    description: "Spații exterioare acoperite, utilizabile tot anul, cu pereți laterali opționali din sticlă glisantă sau lambriu metalic.",
    features: [
      "Montaj terasă nouă",
      "Înlocuire terasă existentă",
      "Reparații structurale",
      "Pereți din sticlă glisantă",
      "Lambriu metalic lateral",
      "Iluminare ambientală",
    ],
    isReversed: true,
  },
  {
    id: "fences",
    num: "03",
    image: "/fence-services.jpg",
    alt: "Pergole bioclimatice Coperfix",
    title: "Pergole bioclimatice",
    description: "Lamele rotative din aluminiu pentru control total al luminii și ventilației, cu telecomandă sau senzori de ploaie integrat.",
    features: [
      "Pergolă cu lamele rotative",
      "Telecomandă inclusă",
      "Senzori de ploaie",
      "Iluminare LED",
      "Structuri adosate",
      "Pergole autoportante",
    ],
    isReversed: false,
  },
  {
    id: "masonry",
    num: "04",
    image: "/chimney-1.jpg",
    alt: "Garduri & porți Coperfix",
    title: "Garduri & porți",
    description: "Lambriu metalic, porți glisante sau batante, automatizare Nice/Came inclusă. Asortate cu copertina pentru un aspect unitar.",
    features: [
      "Gard lambriu metalic",
      "Porți glisante",
      "Porți batante",
      "Automatizare inclusă",
      "Pietonal inclus",
      "Asortat copertinei",
    ],
    isReversed: true,
  },
];

export default function BlocksSection() {
  return (
    <>
      {SERVICES.map((service) => (
        <ServiceBlock key={service.id} {...service} />
      ))}
    </>
  );
}
