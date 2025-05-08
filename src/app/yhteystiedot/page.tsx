import { Mail, Phone } from "lucide-react";

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
          <div className="flex flex-col gap-4">
            <p>
              <a href="tel:+358451032606" className="hover:text-accent flex flex-row gap-2">
                <Phone className="h-4 my-auto"/>(+358) 45-103 2606
              </a>
            </p>
            <p>
              <a href="mailto:jalkaterapia.pinja@gmail.com" className="hover:text-accent flex flex-row gap-2">
                <Mail className="h-4 my-auto"/>jalkaterapia.pinja@gmail.com
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
