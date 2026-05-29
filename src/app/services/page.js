import {
  HeroSection,
  BlocksSection,
  ProcessSection,
  CtaSection,
} from "@/components/sections/services";

export const metadata = {
  title: "Servicii | Coperfix",
  description:
    "Copertine, terase, balcoane, garduri, parcari auto în Moldova. Execuție completă, de la proiectare la montaj, de o echipă proprie.",
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection />
      <BlocksSection />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
