# 🧩 Component Documentation

[← Technical Guide](technical.md) | [Development Guidelines →](development.md) | [Deployment →](deployment.md)

## Table of Contents

- [Component Overview](#component-overview)
- [Layout Components](#layout-components)
- [Section Components](#section-components)
- [Shared Components](#shared-components)
- [UI Components](#ui-components)
- [Usage Examples](#usage-examples)
- [Styling Guidelines](#styling-guidelines)
- [Best Practices](#best-practices)

## Component Overview

Our component architecture follows a clear hierarchy designed for maintainability, reusability, and performance:

```
🏗️ Layout Components      # Global layout structure
├── 📄 Navbar            # Site navigation
└── 📄 Footer            # Site footer

🎯 Section Components     # Page-specific sections
├── 📄 HeroSection        # Hero banners
├── 📄 ServicesPreviewSection  # Service previews
└── 📄 NewsSection       # News articles

🔧 Shared Components      # Reusable utilities
├── 📄 Button            # Interactive buttons
├── 📄 Card              # Content containers
└── 📄 Modal             # Overlay dialogs

🎨 UI Components          # Specialized interfaces
├── 📄 ServiceCard       # Service display cards
└── 📄 ServiceModal      # Service detail modals
```

## Layout Components

### Navbar

**Purpose**: Site navigation with responsive mobile menu

**Location**: `src/components/layout/Navbar.tsx`

#### Props
```typescript
// No props - uses internal state and navigation context
```

#### Features
- ✅ Responsive design with mobile hamburger menu
- ✅ Sticky navigation on scroll
- ✅ Active page highlighting
- ✅ Smooth animations and transitions
- ✅ Social media links in mobile menu
- ✅ Accessibility support (ARIA labels)

#### Usage Example
```typescript
import { Navbar } from '@/components';

// Used in root layout - no props needed
<Navbar />
```

#### Styling
- Uses Tailwind classes with conditional styling
- Mobile-first responsive design
- Custom animations for menu transitions

---

### Footer

**Purpose**: Site footer with contact information and links

**Location**: `src/components/layout/Footer.tsx`

#### Props
```typescript
// No props - displays static content
```

#### Features
- ✅ Three-column layout (desktop) / stacked (mobile)
- ✅ Contact information with interactive links
- ✅ Social media integration
- ✅ Copyright information with dynamic year
- ✅ Responsive grid layout

#### Usage Example
```typescript
import { Footer } from '@/components';

// Used in root layout
<Footer />
```

---

## Section Components

### HeroSection

**Purpose**: Reusable hero banner for landing pages

**Location**: `src/components/sections/HeroSection.tsx`

#### Props
```typescript
interface HeroSectionProps {
  title: string;              // Main heading text
  description: string;        // Supporting description
  ctaText: string;           // Call-to-action button text
  ctaLink: string;           // Button destination URL
  backgroundImage: string;    // Background image path
}
```

#### Features
- ✅ Optimized background image with Next.js Image
- ✅ Overlay for text readability
- ✅ Responsive typography
- ✅ Priority loading for above-fold content
- ✅ Customizable call-to-action

#### Usage Example
```typescript
import { HeroSection } from '@/components';

<HeroSection
  title="Pinja Pasanen"
  description="Jalkaterapeuttiopiskelija, joka on erikoistunut..."
  ctaText="Varaa aika"
  ctaLink="/yhteystiedot"
  backgroundImage="/images/hero_background.jpg"
/>
```

---

### ServicesPreviewSection

**Purpose**: Homepage preview of available services

**Location**: `src/components/sections/ServicesPreviewSection.tsx`

#### Props
```typescript
interface ServicesPreviewSectionProps {
  services: ServicePreview[];  // Array of service preview objects
}

interface ServicePreview {
  title: string;
  description: string;
  icon: LucideIcon;           // Lucide React icon component
}
```

#### Features
- ✅ Grid layout (responsive: 1 col mobile, 3 cols desktop)
- ✅ Icon integration with Lucide React
- ✅ Hover effects and transitions
- ✅ Links to detailed services page
- ✅ Performance optimized with React.memo

#### Usage Example
```typescript
import { ServicesPreviewSection } from '@/components';
import { servicesPreviews } from '@/constants';

<ServicesPreviewSection services={servicesPreviews} />
```

---

### NewsSection

**Purpose**: News articles display with modal details

**Location**: `src/components/sections/NewsSection.tsx`

#### Props
```typescript
interface NewsSectionProps {
  articles: NewsArticle[];    // Array of news articles
}

interface NewsArticle {
  title: string;
  excerpt: string;
  thumbnail: string;          // Image path
  date: string;              // Display date
}
```

#### Features
- ✅ Grid layout for article cards
- ✅ Image optimization with Next.js
- ✅ Modal integration for full article view
- ✅ Date badges on article cards
- ✅ Truncated text with "Read more" functionality

#### Usage Example
```typescript
import { NewsSection } from '@/components';
import { newsArticles } from '@/constants';

<NewsSection articles={newsArticles} />
```

---

## Shared Components

### Button

**Purpose**: Reusable button component with variants

**Location**: `src/components/shared/Button.tsx`

#### Props
```typescript
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}
```

#### Variants
- **Primary**: Default brand-colored button
- **Secondary**: Subtle background button
- **Outline**: Border-only button

#### Sizes
- **Small**: Compact padding (sm)
- **Medium**: Default padding (md)
- **Large**: Extended padding (lg)

#### Features
- ✅ ForwardRef support for ref passing
- ✅ Full accessibility (focus states, ARIA)
- ✅ Customizable via className prop
- ✅ TypeScript strict typing
- ✅ Hover and focus animations

#### Usage Examples
```typescript
import { Button } from '@/components';

// Primary button (default)
<Button onClick={handleClick}>
  Click me
</Button>

// Large secondary button, full width
<Button variant="secondary" size="lg" fullWidth>
  Full Width Button
</Button>

// Outline button with custom styling
<Button variant="outline" className="mt-4">
  Outline Style
</Button>
```

---

### Card

**Purpose**: Flexible content container component

**Location**: `src/components/shared/Card.tsx`

#### Props
```typescript
interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
}
```

#### Features
- ✅ Configurable padding sizes
- ✅ Consistent styling with Tailwind
- ✅ Shadow and border-radius styling
- ✅ Flexible content support
- ✅ Performance optimized with React.memo

#### Usage Examples
```typescript
import { Card } from '@/components';

// Default card
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here...</p>
</Card>

// Large padding with custom class
<Card padding="lg" className="border-2">
  <div>Custom styled card</div>
</Card>
```

---

### Modal

**Purpose**: Accessible overlay dialog component

**Location**: `src/components/shared/Modal.tsx`

#### Props
```typescript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  closeOnBackdropClick?: boolean;
}
```

#### Features
- ✅ Keyboard navigation (Escape to close)
- ✅ Backdrop click handling
- ✅ Body scroll locking when open
- ✅ Focus management
- ✅ Responsive sizing options
- ✅ Smooth animations

#### Usage Example
```typescript
import { Modal } from '@/components';

const [isOpen, setIsOpen] = useState(false);

<Modal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)}
  size="lg"
>
  <div className="p-6">
    <h2>Modal Content</h2>
    <p>Modal body content...</p>
  </div>
</Modal>
```

---

## UI Components

### ServiceCard

**Purpose**: Display individual service information

**Location**: `src/components/ui/ServiceCard.tsx`

#### Props
```typescript
interface ServiceCardProps {
  service: Service;           // Service data object
  onLearnMore: (service: Service) => void;  // Click handler
}
```

#### Features
- ✅ Service image with optimization
- ✅ Price and duration display with icons
- ✅ Truncated description with "Learn more"
- ✅ Consistent card styling
- ✅ Performance optimized with React.memo

#### Usage Example
```typescript
import { ServiceCard } from '@/components';

const handleLearnMore = (service: Service) => {
  setSelectedService(service);
};

<ServiceCard 
  service={serviceData} 
  onLearnMore={handleLearnMore} 
/>
```

---

### ServiceModal

**Purpose**: Detailed service information in modal

**Location**: `src/components/ui/ServiceModal.tsx`

#### Props
```typescript
interface ServiceModalProps {
  service: Service | null;    // Selected service (null when closed)
  isOpen: boolean;           // Modal visibility state
  onClose: () => void;       // Close handler
}
```

#### Features
- ✅ Full service details display
- ✅ Large hero image
- ✅ Price and duration information
- ✅ Integrated with base Modal component
- ✅ Responsive design

#### Usage Example
```typescript
import { ServiceModal } from '@/components';

<ServiceModal
  service={selectedService}
  isOpen={!!selectedService}
  onClose={() => setSelectedService(null)}
/>
```

---

## Usage Examples

### Complete Service Page Example

```typescript
"use client";

import { useState } from "react";
import { ServiceCard, ServiceModal } from "@/components";
import { services } from "@/constants";
import { Service } from "@/types";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <main>
      <section>
        <h1>Palvelut</h1>
        <p>Tarjoan laajan valikoiman jalkaterveyspalveluita.</p>
      </section>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onLearnMore={setSelectedService}
          />
        ))}
      </div>
      
      <ServiceModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
    </main>
  );
}
```

### Homepage Layout Example

```typescript
import { HeroSection, ServicesPreviewSection, NewsSection } from "@/components";
import { servicesPreviews, newsArticles } from "@/constants";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-8">
      <HeroSection
        title="Pinja Pasanen"
        description="Jalkaterapeuttiopiskelija..."
        ctaText="Varaa aika"
        ctaLink="/yhteystiedot"
        backgroundImage="/images/hero_background.jpg"
      />
      
      <ServicesPreviewSection services={servicesPreviews} />
      <NewsSection articles={newsArticles} />
    </main>
  );
}
```

---

## Styling Guidelines

### Tailwind Class Patterns

1. **Responsive Design**
   ```typescript
   className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
   ```

2. **State-based Styling**
   ```typescript
   className={cn(
     "base-classes",
     isActive && "active-classes",
     variant === 'primary' && "primary-classes"
   )}
   ```

3. **Component Composition**
   ```typescript
   className={cn(baseClasses, variantClasses[variant], className)}
   ```

### CSS Custom Properties

Use CSS variables for consistent theming:

```css
:root {
  --primary: 24, 15%, 48%;
  --secondary: 0 0% 96.1%;
  --background: 27, 17%, 90%;
}
```

### Component-Specific Styles

When Tailwind isn't sufficient, use CSS modules or styled-components:

```css
/* component.module.css */
.heroBackground {
  background-size: cover;
  background-position: 50% 20%;
  background-attachment: fixed;
}
```

---

## Best Practices

### 1. Performance Optimization

```typescript
// Use React.memo for components that don't change frequently
const ServiceCard = React.memo(({ service, onLearnMore }) => {
  // Component implementation
});

// Memoize callback functions
const handleClick = useCallback(() => {
  onAction(data);
}, [data, onAction]);
```

### 2. TypeScript Best Practices

```typescript
// Extend HTML attributes for native behavior
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

// Use strict typing for props
interface ServiceCardProps {
  service: Service;  // Import from types
  onLearnMore: (service: Service) => void;
}
```

### 3. Accessibility

```typescript
// Proper ARIA labels
<button aria-label="Close modal" onClick={onClose}>
  <X size={24} />
</button>

// Semantic HTML structure
<main>
  <section>
    <h1>Page Title</h1>
    <article>Content</article>
  </section>
</main>
```

### 4. Component Composition

```typescript
// Favor composition over inheritance
const Page = () => (
  <Layout>
    <HeroSection {...heroProps} />
    <ContentSection>
      <ServiceGrid services={services} />
    </ContentSection>
  </Layout>
);
```

### 5. Error Boundaries

```typescript
// Wrap components that might fail
<ErrorBoundary fallback={<ErrorFallback />}>
  <ComplexComponent />
</ErrorBoundary>
```

---

## Testing Components

### Unit Testing Setup

```typescript
import { render, screen } from '@testing-library/react';
import { Button } from '@/components';

test('renders button with correct text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByRole('button')).toHaveTextContent('Click me');
});
```

### Component Testing Checklist

- ✅ Props are properly typed
- ✅ Default values work correctly
- ✅ Event handlers are called
- ✅ Accessibility attributes are present
- ✅ Responsive behavior works
- ✅ Error states are handled

---

**Next:** [Development Guidelines →](development.md)