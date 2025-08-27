import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

const HeroSection = React.memo(({ 
  title, 
  description, 
  ctaText, 
  ctaLink, 
  backgroundImage 
}: HeroSectionProps) => {
  return (
    <section className="relative top-0 w-screen h-[75vh] flex items-center justify-center text-center text-card overflow-hidden">
      <Image
        src={backgroundImage}
        alt="Hero background"
        fill
        priority
        className="object-cover object-[50%_20%] brightness-75"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-10"></div>
      <div className="relative z-20 px-4 rounded-lg">
        <h1 className="text-card">{title}</h1>
        <p className="text-card mb-12">
          {description}
        </p>
        <Link href={ctaLink} className="bg-primary text-card px-24 py-4 rounded-lg font-semibold hover:bg-hover transition-colors duration-300">
          {ctaText}
        </Link>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;