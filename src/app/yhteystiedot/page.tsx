
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="container mx-auto py-16 px-4">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Ota Yhteyttä</h1>
        <p className="text-lg text-muted-foreground">
          Voit varata ajan tai kysyä lisätietoja palveluistani. Täytä alla oleva lomake tai ota yhteyttä suoraan puhelimitse tai sähköpostitse.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="p-6 rounded-lg shadow-md bg-card">
          <h2 className="text-xl font-semibold mb-6">
            Lähetä minulle viesti
          </h2>
          <form className="flex flex-col gap-4">
            <Input type="text" placeholder="Nimesi" />
            <Input type="email" placeholder="Sähköpostiosoitteesi" />
            <Input type="tel" placeholder="Puhelinnumerosi" />
            <Textarea placeholder="Viestisi" />
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-hover transition duration-300 w-full">
              <a href="" className="w-full text-center">
                Lähetä viesti
              </a>
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="p-6 rounded-lg shadow-md bg-card flex flex-col gap-16">

          <div>
            <h2 className="text-xl font-semibold mb-6">
              Yhteystiedot
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-muted-foreground">
                <a href="tel:+15551234567" className="hover:text-accent flex flex-row gap-6">
                  Puhelin: (+048) 4510-32606
                </a>
              </p>
            </div>
            <p className="text-muted-foreground">
              <a href="jalkaterapia.pinja@gmail.com" className="hover:text-accent flex flex-row gap-6">
                Sähköposti: jalkaterapia.pinja@gmail.com
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-6">
              Hoitoajat
            </h2>
            <p className="text-muted-foreground">
              Maanantai - Perjantai: 9:00 - 17:00
              <br />
              Lauantai: 10:00 - 14:00
              <br />
              Sunnuntai: Ei hoitoja
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
