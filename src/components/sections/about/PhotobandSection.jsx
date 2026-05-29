import Image from "next/image";

export default function PhotobandSection() {
  return (
    <section className="bg-ink overflow-hidden">
      <div className="overflow-hidden group" style={{ aspectRatio: "21/9" }}>
        <Image
          src="/fence-about.jpg"
          alt="New cedar fence install by R &D Perez Construction"
          width={1920}
          height={823}
          className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
          loading="lazy"
        />
      </div>
    </section>
  );
}
