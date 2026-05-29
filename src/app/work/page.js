import {
  HeroSection,
  GallerySection,
  ReviewBand,
  CtaSection,
} from "@/components/sections/work";

export const metadata = {
  title: "Lucrările noastre | Coperfix",
  description: "Galerie de proiecte reale — copertine, terase, balcoane, garduri, parcari auto executate de echipa Coperfix în Moldova.",
};

export default function WorkPage() {
  return (
    <>
      <HeroSection />
      <GallerySection />
      <ReviewBand />
      <CtaSection />
    </>
  );
}
