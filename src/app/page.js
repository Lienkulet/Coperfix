import {
  HeroSection,
  MarqueeSection,
  IntroSection,
  ServicesSection,
  FeatureProjectSection,
  TransformationSection,
  GalleryStripSection,
  QuotesSection,
  FaqSection,
  ContactSection,
} from "@/components/sections/home";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <IntroSection />
      <ServicesSection />
      <FeatureProjectSection />
      <TransformationSection />
      <GalleryStripSection />
      <QuotesSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
