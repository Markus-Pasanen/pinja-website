import React from 'react';
import Link from 'next/link';
import { ServicePreview } from '@/types';

interface ServicesPreviewSectionProps {
  services: ServicePreview[];
}

const ServicesPreviewSection = React.memo(({ services }: ServicesPreviewSectionProps) => {
  return (
    <section>
      <h2 className="text-center">Palveluni</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Link
            key={index}
            href="/palvelut"
            className="p-6 rounded-lg shadow-md bg-card hover:shadow-xl hover:brightness-90 transition duration-300 flex flex-col items-center"
          >
            <service.icon className="size-12 text-primary mb-4" />
            <h3>{service.title}</h3>
            <p className="text-muted-foreground">
              {service.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
});

ServicesPreviewSection.displayName = "ServicesPreviewSection";

export default ServicesPreviewSection;