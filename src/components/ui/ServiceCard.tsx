import React from "react";
import Image from "next/image";
import { Clock, Wallet } from "lucide-react";
import { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  onLearnMore: (service: Service) => void;
}

const ServiceCard = React.memo(({ service, onLearnMore }: ServiceCardProps) => {
  return (
    <section
      id={service.id}
      className="rounded-lg shadow-md bg-card flex flex-col justify-between overflow-hidden text-left"
    >
      <div>
        <div>
          <Image
            src={`/images/${service.image}`}
            alt={service.title}
            className="w-full h-48 brightness-75 object-cover object-[50%_35%]"
            width={500}
            height={500}
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">
              {service.title}
            </h3>
            <p className="line-clamp-2">
              {service.description}
            </p>
            <button
              className="text-primary hover:underline mt-2 block p-0 bg-transparent border-none cursor-pointer"
              onClick={() => onLearnMore(service)}
            >
              Lue lisää
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center pb-2">
          <Wallet className="h-4 w-4 mr-2 text-muted-foreground" />
          <p className="text-sm text-muted-foreground m-0">
            Hinta: {service.price}
          </p>
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
          <p className="text-sm m-0">
            Ajanvaraus: {service.duration}
          </p>
        </div>
      </div>
    </section>
  );
});

ServiceCard.displayName = "ServiceCard";

export default ServiceCard;