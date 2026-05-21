import WorkHeroSection    from "@/components/sections/WorkHeroSection";
import WorkGallerySection from "@/components/sections/WorkGallerySection";
import WorkReviewBand     from "@/components/sections/WorkReviewBand";
import WorkCtaSection     from "@/components/sections/WorkCtaSection";

export const metadata = {
  title: "Our Work | R & D Perez Construction",
  description: "A gallery of real roofing, deck, fence, and masonry projects completed by R & D Perez Construction in Beaverton, Oregon.",
};

export default function WorkPage() {
  return (
    <>
      <WorkHeroSection />
      <WorkGallerySection />
      <WorkReviewBand />
      <WorkCtaSection />
    </>
  );
}
