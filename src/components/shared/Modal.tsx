import React from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg max-h-[90%] w-screen md:max-w-lg relative m-4 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-0 right-0 bg-card rounded-lg text-gray-500 hover:text-gray-700"
          onClick={onClose}
          aria-label="Sulje"
        >
          <X className="size-8"/>
        </button>
        <div className="text-left overflow-y-auto max-h-[80vh]">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
