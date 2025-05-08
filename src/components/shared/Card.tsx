import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => (
  <div className={`bg-card p-6 rounded-lg shadow-sm ${className}`}>
    {children}
  </div>
);

export default Card;
