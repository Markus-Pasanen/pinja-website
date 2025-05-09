import { Mail, Phone, Map } from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      <section>
        <h1>Ota Yhteyttä</h1>
        <p>
          Voit varata ajan hoitoon tai kysyä lisätietoja palveluistani. Ota yhteyttä suoraan puhelimitse tai sähköpostitse.
        </p>
      </section>
      <div className="flex flex-col md:flex-row gap-8 align-center justify-center">
        <div className="p-6 rounded-lg shadow-md bg-card flex flex-col h-48 w-full max-w-md">
          <h2>Yhteystiedot</h2>
          <div className="flex flex-col">
            <p>
              <a href="tel:+358451032606" className="hover:text-accent flex flex-row gap-2">
                <Phone className="h-4 my-auto"/>(+358) 45-103 2606
              </a>
              <a href="mailto:jalkaterapia.pinja@gmail.com" className="hover:text-accent flex flex-row gap-2">
                <Mail className="h-4 my-auto"/>jalkaterapia.pinja@gmail.com
              </a>
              <a
              href="https://www.google.com/maps/place/Varkaus/@62.3234278,27.8290594,12z/data=!3m1!4b1!4m6!3m5!1s0x469b1fae772c9653:0x40146d63c75c390!8m2!3d62.31792!4d27.8598871!16zL20vMDNjNGt6?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
               className="hover:text-accent flex flex-row gap-2"
            >
              <Map className="h-4 my-auto"/>78300 Varkaus
            </a>
            </p>
          </div>
        </div>
        <div className="p-6 rounded-lg shadow-md bg-card flex flex-col h-48 w-full max-w-md">
          <h2>Aukioloajat</h2>
          <p>
            Maanantai - Perjantai: 9:00 - 17:00
            <br />
            Lauantai: Suljettu
            <br />
            Sunnuntai: Suljettu
          </p>
        </div>
      </div>
    </main>
  );
}
