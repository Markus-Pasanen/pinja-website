"use client";

import { Icons } from "@/components/icons";
import { LucideIcon, Clock, Wallet, EuroIcon } from "lucide-react";

const services = [
  {
    id: "Kliininen jalkahoito",
    title: "Kliininen jalkahoito",
    description:
      "Kliininen jalkahoito on terveydenhoitoa, jossa hoidetaan jalkojen iho- ja kynsiongelmia sekä ehkäistään jalkavaivoja. Ihon rasvaushieronta ja lampaanvillat varpaiden väliin. Se on erityisen tärkeää riskiryhmille, kuten diabeetikoille, ja sen tavoitteena on ylläpitää jalkojen terveyttä.",
    image: "jalka-1.jpg",
    link: "/palvelut/kliininen-jalkahoito",
    price: "78 €",
    duration: "90 minuuttia",
  },
  {
    id: "Kynsien lyhennys",
    title: "Kynsien lyhennys",
    description:
      "Kynsien lyhennys on toimenpide, jossa kynnet leikataan sopivaan pituuteen ja muotoon. Se auttaa ylläpitämään kynsien terveyttä ja ehkäisee esimerkiksi sisäänkasvaneita kynsiä.",
    image: "jalka-7.jpg",
    link: "/palvelut/kynsien-lyhennys",
    price: "46 €",
    duration: "30 minuuttia",
  },
  {
    id: "Kynnenoikaisu",
    title: "Kynnenoikaisu",
    description:
      "Podofix-menetelmä, joka soveltuu lähes kaikkien epämuodostuneille kynsille, kuten sisäänkasvaneille kynsille sekä taipuneiden kynsien hoitoon. Podofix-hoito uusitaan 2vk-2kk välein, kunnes haluttu tulos on saavutettu.",
    image: "jalka-2.jpg",
    link: "/palvelut/kynsien-lyhennys",
    price: "48 / 58* + käytetty aika",
    duration: "30-60 minuuttia",
  },
  {
    id: "Silikoniortoosit",
    title: "Silikoniortoosit",
    description:
      "Silikoniortoosit ovat yksilöllisesti muotoiltuja silikonista valmistettuja tukia, joita käytetään jalkaterän virheasentojen korjaamiseen tai vaimentamaan painetta. Ne helpottavat kipua ja parantavat jalkojen asentoa, auttaen esimerkiksi vaivaisenluun tai vasaravarpaiden hoidossa.",
    image: "jalka-5.jpg",
    link: "/palvelut/kynsien-lyhennys",
    price: "26 € per silikoni",
    duration: "30 minuuttia",
  },
];

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  price: string;
  duration: string;
}

export default function ServicesPage() {
  return (
    <main className="container mx-auto py-16 px-4">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Palvelut</h1>
        <p className="text-lg text-muted-foreground">
          Tarjoan laajan valikoiman jalkaterveyspalveluita pitääkseni sinut liikkeessä.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service: Service, index: number) => (
          <section id={service.id} key={index} className="rounded-lg shadow-md bg-card flex flex-col justify-between gap-4 overflow-hidden">
            <div>
              <div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover  mb-6 brightness-75"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                <Wallet className="h-4 w-4 mr-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Hinta: {service.price}
                </p>
              </div>

              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Ajanvaraus: {service.duration}
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
