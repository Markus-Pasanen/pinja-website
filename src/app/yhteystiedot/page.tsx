import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="container mx-auto py-16 px-4">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Ota Yhteyttä</h1>
        <p className="text-lg text-muted-foreground">
          Voit varata ajan hoitoon tai kysyä lisätietoja palveluistani. Ota yhteyttä suoraan puhelimitse tai sähköpostitse.
        </p>
      </section>
      <div className="flex flex-col md:flex-row gap-8 align-center justify-center">
        <div className="p-6 rounded-lg shadow-md bg-card flex flex-col h-48 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-6">
            Yhteystiedot
          </h2>
          <div className="flex flex-col gap-4">
            <p className="text-muted-foreground">
              <a href="tel:+358451032606" className="hover:text-accent flex flex-row gap-2">
              <Phone className="h-4 my-auto"/>(+358) 45-103 2606
              </a>
            </p>
          </div>
          <p className="text-muted-foreground">
            <a href="mailto:jalkaterapia.pinja@gmail.com" className="hover:text-accent flex flex-row gap-2">
              <Mail className="h-4 my-auto"/>jalkaterapia.pinja@gmail.com
            </a>
          </p>
        </div>
        <div className="p-6 rounded-lg shadow-md bg-card flex flex-col h-48 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-6">
            Aukioloajat
          </h2>
          <p className="text-muted-foreground">
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
