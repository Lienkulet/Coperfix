import {
  HeroSection,
  StorySection,
  FamilySection,
  PullquoteSection,
  PhotobandSection,
  ValuesSection,
  SpecSection,
  TrioSection,
  StatsSection,
  CtaSection,
} from "@/components/sections/about";

export const metadata = {
  title: "Despre noi | Coperfix",
  description:
    "Echipa Coperfix construiește copertine pentru terase, balcoane, garduri, parcari auto în Moldova. Aflați povestea noastră, valorile și angajamentul față de fiecare proiect.",
};

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <FamilySection />
      <PullquoteSection />
      <PhotobandSection />
      <ValuesSection />
      <SpecSection />
      <TrioSection />
      <StatsSection />
      <CtaSection />
    </>
  );
}
