import { LucideIcon } from 'lucide-react';

export type ServiceType = 'terapia' | 'hieronta' | 'sokerointi';

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  price: string;
  duration: string;
  type: ServiceType;
}

export interface NewsArticle {
  title: string;
  excerpt: string;
  thumbnail: string;
  date: string;
}

export interface ServicePreview {
  title: string;
  description: string;
  icon: LucideIcon;
}

// Component Props Types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonVariant {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}