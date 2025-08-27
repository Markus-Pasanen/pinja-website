import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
}

const Card = React.memo(({ children, className, padding = 'md' }: CardProps) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <div className={cn(
      "bg-card text-left rounded-lg shadow-sm",
      paddingClasses[padding],
      className
    )}>
      {children}
    </div>
  );
});

Card.displayName = "Card";

export default Card;
