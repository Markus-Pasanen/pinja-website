import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center gap-6 py-6">
      <div className="relative flex items-center w-full">
        <div className="flex-grow border-t border-primary"></div>
        <span className="flex flex-row mx-4 gap-4 font-semibold">
          <a
            href="https://www.facebook.com/profile.php?id=61573830269174"
            className="text-primary hover:text-accent transition-colors duration-200 p-3 rounded-full bg-secondary"
            aria-label="Facebook"
          >
            <FaFacebookF className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com/jalkaterapiapinja/"
            className="text-primary hover:text-accent transition-colors duration-200 p-3 rounded-full bg-secondary"
            aria-label="Instagram"
          >
            <FaInstagram className="h-6 w-6" />
          </a>
        </span>
        <div className="flex-grow border-t border-primary"></div>
      </div>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center w-full">
          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Yritys</h3>
            <ul className="text-muted-foreground list-none">
              <li>Jalkaterapia Pinja</li>
              <li>Y-tunnus: 3453859-7</li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Varkaus/@62.3234278,27.8290594,12z/data=!3m1!4b1!4m6!3m5!1s0x469b1fae772c9653:0x40146d63c75c390!8m2!3d62.31792!4d27.8598871!16zL20vMDNjNGt6?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  78300 Varkaus
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Varaa aika</h3>
            <ul className="text-muted-foreground list-none">
              <li>
                <a
                  href="tel:+358451032606"
                  className="hover:text-accent transition-colors"
                >
                  (+358) 45-103 2606
                </a>
              </li>
              <li>
                <a
                  href="mailto:jalkaterapia.pinja@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  jalkaterapia.pinja@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Sivusto</h3>
            <ul className="text-muted-foreground list-none">
              <li>
                <Link
                  href="/toimitusehdot"
                  className="hover:text-accent transition-colors"
                >
                  Toimitusehdot
                </Link>
              </li>
              <li>
                <Link
                  href="/maksutavat"
                  className="hover:text-accent transition-colors"
                >
                  Maksutavat
                </Link>
              </li>
            </ul>
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

