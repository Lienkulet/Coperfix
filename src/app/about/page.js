import AboutHeroSection     from "@/components/sections/AboutHeroSection";
import AboutStorySection    from "@/components/sections/AboutStorySection";
import AboutFamilySection   from "@/components/sections/AboutFamilySection";
import AboutPullquoteSection from "@/components/sections/AboutPullquoteSection";
import AboutPhotobandSection from "@/components/sections/AboutPhotobandSection";
import AboutValuesSection   from "@/components/sections/AboutValuesSection";
import AboutSpecSection     from "@/components/sections/AboutSpecSection";
import AboutTrioSection     from "@/components/sections/AboutTrioSection";
import AboutStatsSection    from "@/components/sections/AboutStatsSection";
import AboutCtaSection      from "@/components/sections/AboutCtaSection";

export const metadata = {
  title: "About | R & D Perez Construction",
  description:
    "Rafael Perez and family built R & D Perez Construction to deliver honest, quality roofing, deck, fence, and masonry work across Beaverton, Oregon.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutStorySection />
      <AboutFamilySection />
      <AboutPullquoteSection />
      <AboutPhotobandSection />
      <AboutValuesSection />
      <AboutSpecSection />
      <AboutTrioSection />
      <AboutStatsSection />
      <AboutCtaSection />
    </>
  );
}
