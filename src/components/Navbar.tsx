'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { usePathname } from 'next/navigation';
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={cn(
        'py-2 px-4 w-full transition-all duration-300 bg-background',
        isSticky ? 'sticky top-0 z-50 shadow-md' : 'relative',
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold z-50">
          <img src="/logo.png" alt="Logo" className="h-14" />
        </Link>
        {/* Burger menu button for mobile */}
        <button
          className="md:hidden flex justify-center items-center w-10 h-10 focus:outline-none"
          aria-label={menuOpen ? 'Sulje valikko' : 'Avaa valikko'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className={cn("hover:text-accent", pathname === "/" ? "font-semibold" : "")}>
            Etusivu
          </Link>
          <Link href="/palvelut" className={cn("hover:text-accent", pathname === "/palvelut" ? "font-semibold" : "")}>
            Palvelut
          </Link>
          <Link href="/esittely" className={cn("hover:text-accent", pathname === "/esittely" ? "font-semibold" : "")}>
            Minusta
          </Link>
          <Link href="/yhteystiedot" className={cn("hover:text-accent", pathname === "/yhteystiedot" ? "font-semibold" : "")}>
            Ota yhteyttä
          </Link>
        </div>
        {/* Mobile nav */}
        <div
          className={cn(
            "fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 text-xl font-medium transition-all duration-300 md:hidden",
            menuOpen ? "pointer-events-auto opacity-100 bg-secondary" : "pointer-events-none opacity-0"
          )}
        >
          {/* Close button at top right, always visible when menu is open */}
          <button
            className="absolute top-4 right-4 flex justify-center items-center w-10 h-10 focus:outline-none"
            aria-label="Sulje valikko"
            onClick={() => setMenuOpen(false)}
          >
            <X size={28} />
          </button>
          <div className="flex flex-col items-center space-y-8 mt-12">
            <Link href="/" className={cn("hover:text-accent", pathname === "/" ? "font-semibold" : "")}
              onClick={() => setMenuOpen(false)}>
              Etusivu
            </Link>
            <Link href="/palvelut" className={cn("hover:text-accent", pathname === "/palvelut" ? "font-semibold" : "")}
              onClick={() => setMenuOpen(false)}>
              Palvelut
            </Link>
            <Link href="/esittely" className={cn("hover:text-accent", pathname === "/esittely" ? "font-semibold" : "")}
              onClick={() => setMenuOpen(false)}>
              Minusta
            </Link>
            <Link href="/yhteystiedot" className={cn("hover:text-accent", pathname === "/yhteystiedot" ? "font-semibold" : "")}
              onClick={() => setMenuOpen(false)}>
              Ota yhteyttä
            </Link>
          </div>
          {/* Footer for mobile menu */}
          <footer className="absolute bottom-4 left-0 w-full flex flex-col items-center text-sm text-gray-500 dark:text-gray-400">
            <span>&copy; {new Date().getFullYear()} Pinja</span>
            <span>Kaikki oikeudet pidätetään</span>
          </footer>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
