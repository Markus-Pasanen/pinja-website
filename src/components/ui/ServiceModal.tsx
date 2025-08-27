import Image from "next/image";
import { Clock, Wallet } from "lucide-react";
import { Modal } from "@/components/shared";
import { Service } from "@/types";

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal = ({ service, isOpen, onClose }: ServiceModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {service && (
        <div className="flex flex-col h-full">
          <div className="w-full" style={{ height: "400px" }}>
            <Image
              src={`/images/${service.image}`}
              alt={service.title}
              className="w-full h-full rounded-t-lg object-cover object-top"
              style={{ display: "block", padding: 0, margin: 0 }}
              width={500}
              height={500}
            />
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <h2 className="text-2xl font-bold mb-2">
              {service.title}
            </h2>
            <p className="mb-4">{service.description}</p>
            <div className="flex items-center mb-2">
              <Wallet className="h-4 w-4 mr-2 text-muted-foreground" />
              <span className="text-sm">Hinta: {service.price}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
              <span className="text-sm">
                Ajanvaraus: {service.duration}
              </span>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ServiceModal;