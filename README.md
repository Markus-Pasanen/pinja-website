# 🦶 Jalkaterapia Pinja Website

[![Next.js](https://img.shields.io/badge/Next.js-14.2.28-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/)

> Official website for Jalkaterapia Pinja - Professional foot therapy services in Varkaus, Finland.

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Development](#-development)
- [Deployment](#-deployment)
- [Documentation](#-documentation)
- [Contributing](#-contributing)
- [License](#-license)

## 🎯 Overview

This is a modern, responsive website built for Jalkaterapia Pinja, showcasing professional foot therapy services. The website provides comprehensive information about services, enables easy contact and appointment booking, and maintains a professional online presence.

**Live Website:** [jalkaterapiapinja.fi](https://jalkaterapiapinja.fi)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional, and mobile-first responsive design
- ⚡ **Performance Optimized** - Built with Next.js 14 App Router for optimal performance
- 🔧 **Component-Based Architecture** - Modular, reusable components following best practices
- 🎯 **TypeScript** - Full type safety and enhanced developer experience
- 📱 **Mobile-First** - Responsive design that works perfectly on all devices
- 🌐 **SEO Optimized** - Automatic sitemap generation and meta tag optimization
- 🐳 **Docker Ready** - Containerized for easy deployment and scaling
- ♿ **Accessible** - WCAG compliant with proper semantic HTML and ARIA labels

## 🛠 Tech Stack

### Frontend
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful & customizable SVG icons

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting and quality enforcement
- **[PostCSS](https://postcss.org/)** - CSS processing and optimization
- **[next-sitemap](https://github.com/iamvishnusankar/next-sitemap)** - Automatic sitemap generation

### Deployment
- **[Docker](https://www.docker.com/)** - Containerization
- **[Docker Compose](https://docs.docker.com/compose/)** - Multi-container orchestration

## 📁 Project Structure

```
pinja-website/
├── 📁 src/
│   ├── 📁 app/                    # Next.js 14 App Router pages
│   │   ├── 📄 layout.tsx          # Root layout component
│   │   ├── 📄 page.tsx            # Homepage
│   │   ├── 📁 palvelut/           # Services page
│   │   ├── 📁 esittely/           # About page
│   │   ├── 📁 yhteystiedot/       # Contact page
│   │   ├── 📁 maksutavat/         # Payment methods page
│   │   └── 📁 toimitusehdot/      # Terms of service page
│   ├── 📁 components/             # Reusable React components
│   │   ├── 📁 layout/             # Layout components (Navbar, Footer)
│   │   ├── 📁 sections/           # Page section components
│   │   ├── 📁 shared/             # Shared utility components
│   │   ├── 📁 ui/                 # UI-specific components
│   │   └── 📄 index.ts            # Component exports
│   ├── 📁 constants/              # Application constants and data
│   │   ├── 📄 data.ts             # Static data (services, news, etc.)
│   │   └── 📄 index.ts            # Constants exports
│   ├── 📁 types/                  # TypeScript type definitions
│   │   └── 📄 index.ts            # Type exports
│   └── 📁 lib/                    # Utility functions and helpers
│       └── 📄 utils.ts            # Common utility functions
├── 📁 public/                     # Static assets
│   ├── 📁 images/                 # Image assets
│   ├── 📄 favicon.ico             # Site favicon
│   ├── 📄 robots.txt              # Search engine directives
│   └── 📄 sitemap.xml             # Generated sitemap
├── 📁 docs/                       # Project documentation
├── 📁 deploy/                     # Deployment configuration
├── 📄 package.json                # Dependencies and scripts
├── 📄 tailwind.config.ts          # Tailwind CSS configuration
├── 📄 tsconfig.json               # TypeScript configuration
├── 📄 next.config.mjs             # Next.js configuration
└── 📄 docker-compose.yml          # Docker Compose configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (18.17 or later)
- **npm** or **yarn**
- **Docker** (optional, for containerized development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/pinja-website.git
   cd pinja-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 💻 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking

# Deployment
npm run deploy       # Deploy using Docker Compose
```

### Development Guidelines

- **Components**: Use TypeScript interfaces for all component props
- **Styling**: Utilize Tailwind CSS utility classes
- **State Management**: Use React hooks for local state
- **Code Style**: Follow ESLint configuration and Prettier formatting
- **Commits**: Use conventional commit messages

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add any environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🚢 Deployment

### Docker Deployment (Recommended)

```bash
# Build and deploy
npm run deploy

# Or manually with Docker Compose
docker-compose -f deploy/docker-compose.yml up -d --build
```

### Manual Deployment

```bash
# Build the application
npm run build

# Start the production server
npm start
```

## 📚 Documentation

Comprehensive documentation is available in the `docs/` directory:

- **[Project Overview](docs/overview.md)** - Project goals, features, and architecture
- **[Component Guide](docs/components.md)** - Component documentation and usage
- **[Deployment Guide](docs/deployment.md)** - Deployment instructions and best practices

### Code Standards

- Follow the existing code style and conventions
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all checks pass before submitting

## 📄 License

This project is proprietary and confidential. All rights reserved.

---

## 🙋‍♀️ Support

For questions or support regarding this website:

- **Business Inquiries**: [jalkaterapia.pinja@gmail.com](mailto:jalkaterapia.pinja@gmail.com)
- **Technical Issues**: Please open an issue in this repository

---

<div align="center">

**Built with ❤️ for Jalkaterapia Pinja**

[Website](https://jalkaterapiapinja.fi) • [Instagram](https://www.instagram.com/jalkaterapiapinja/) • [Facebook](https://www.facebook.com/profile.php?id=61573830269174)

</div>