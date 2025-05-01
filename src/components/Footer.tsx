import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center gap-6 py-6">
      <div className="relative flex items-center w-full">
        <div className="flex-grow border-t border-primary"></div>
        <span className="flex flex-row mx-4 gap-4 font-semibold">
          <a
            href="#"
            className="text-primary hover:text-accent transition-colors duration-200 p-3 rounded-full bg-secondary"
            aria-label="Facebook"
          >
            <Facebook className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="text-primary hover:text-accent transition-colors duration-200 p-3 rounded-full bg-secondary"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </span>
        <div className="flex-grow border-t border-primary"></div>
      </div>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center w-full">
          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Yritys</h3>
            <p className="text-muted-foreground">Jalkaterapia Pinja</p>
            <p className="text-muted-foreground">
            Y-tunnus: 3453859-7
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Varaa aika</h3>
            <p className="text-muted-foreground">(+358) 45-103 2606</p>
            <p className="text-muted-foreground">
              jalkaterapia.pinja@gmail.com
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Sivusto</h3>
            <p className="text-muted-foreground">
              <Link href="/toimitusehdot" className="text-muted-foreground">Toimitusehdot</Link>
            </p>
            <p className="text-muted-foreground">
              <Link href="/maksutavat" className="text-muted-foreground">Maksutavat</Link>
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Copyright {new Date().getFullYear()} @ Pinja Pasanen
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

