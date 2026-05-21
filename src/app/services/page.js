import ServicesHeroSection   from "@/components/sections/ServicesHeroSection";
import ServicesBlocksSection from "@/components/sections/ServicesBlocksSection";
import ServicesProcessSection from "@/components/sections/ServicesProcessSection";
import ServicesCtaSection    from "@/components/sections/ServicesCtaSection";

export const metadata = {
  title: "Services | R & D Perez Construction",
  description:
    "Roofing, decks, fences, and masonry in Beaverton, Oregon. Complete replacements, repairs, and specialty work from a family owned crew.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <ServicesBlocksSection />
      <ServicesProcessSection />
      <ServicesCtaSection />
    </>
  );
}
