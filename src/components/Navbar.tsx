'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
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

  return (
    <nav
      className={cn(
        'py-4 px-6 w-full transition-all duration-300 bg-background',
        isSticky ? 'sticky top-0 z-50 shadow-md' : 'relative',
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          <img src="/logo.png" alt="Logo" className="h-14" />
        </Link>
        <div className="flex items-center space-x-6">
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
      </div>
    </nav>
  );
};

export default Navbar;
