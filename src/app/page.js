import HeroSection           from "@/components/sections/HeroSection";
import MarqueeSection        from "@/components/sections/MarqueeSection";
import IntroSection          from "@/components/sections/IntroSection";
import ServicesSection       from "@/components/sections/ServicesSection";
import FeatureProjectSection from "@/components/sections/FeatureProjectSection";
import TransformationSection from "@/components/sections/TransformationSection";
import GalleryStripSection   from "@/components/sections/GalleryStripSection";
import QuotesSection         from "@/components/sections/QuotesSection";
import FaqSection            from "@/components/sections/FaqSection";
import ContactSection        from "@/components/sections/ContactSection";


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
