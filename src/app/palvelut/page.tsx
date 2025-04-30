"use client";
import { Clock, Wallet } from "lucide-react";

const services = [
  {
    id: "Kliininen jalkahoito",
    title: "Kliininen jalkahoito",
    description:
      "Kliininen jalkahoito on terveydenhoitoa, jossa hoidetaan jalkojen iho- ja kynsiongelmia sekä ehkäistään jalkavaivoja. Ihon rasvaushieronta ja lampaanvillat varpaiden väliin. Se on erityisen tärkeää riskiryhmille, kuten diabeetikoille, ja sen tavoitteena on ylläpitää jalkojen terveyttä.",
    image: "pinja_2025-52.jpg",
    link: "kliininen-jalkahoito",
    price: "78 €",
    duration: "90 minuuttia",
    type: "terapia",
  },
  {
    id: "",
    title: "Diabeetikon jalkojen perustutkimus- ja hoito",
    description:
      "Silikoniortoosit ovat yksilöllisesti muotoiltuja silikonista valmistettuja tukia, joita käytetään jalkaterän virheasentojen korjaamiseen tai vaimentamaan painetta. Ne helpottavat kipua ja parantavat jalkojen asentoa, auttaen esimerkiksi vaivaisenluun tai vasaravarpaiden hoidossa.",
    image: "pinja_2025-33.jpg",
    link: "/palvelut/kynsien-lyhennys",
    price: "26 € per silikoni",
    duration: "30 minuuttia",
    type: "terapia",
  },
  {
    id: "Kynsien lyhennys",
    title: "Kynsien lyhennys",
    description:
      "Kynsien lyhennys on toimenpide, jossa kynnet leikataan sopivaan pituuteen ja muotoon. Se auttaa ylläpitämään kynsien terveyttä ja ehkäisee esimerkiksi sisäänkasvaneita kynsiä.",
    image: "pinja_2025-45.jpg",
    link: "/palvelut/kynsien-lyhennys",
    price: "46 €",
    duration: "30 minuuttia",
    type: "terapia",
  },
  {
    id: "Kynnenoikaisu",
    title: "Kynnenoikaisu",
    description:
      "Podofix-menetelmä, joka soveltuu lähes kaikkien epämuodostuneille kynsille, kuten sisäänkasvaneille kynsille sekä taipuneiden kynsien hoitoon. Podofix-hoito uusitaan 2vk-2kk välein, kunnes haluttu tulos on saavutettu.",
    image: "pinja_2025-76.jpg",
    link: "/palvelut/kynsien-lyhennys",
    price: "58 € + käytetty aika",
    duration: "45 minuuttia",
    type: "terapia",
  },
  {
    id: "Silikoniortoosi",
    title: "Silikoniortoosi",
    description:
      "Silikoniortoosit ovat yksilöllisesti muotoiltuja silikonista valmistettuja tukia, joita käytetään jalkaterän virheasentojen korjaamiseen tai vaimentamaan painetta. Ne helpottavat kipua ja parantavat jalkojen asentoa, auttaen esimerkiksi vaivaisenluun tai vasaravarpaiden hoidossa.",
    image: "pinja_2025-5.jpg",
    link: "/palvelut/kynsien-lyhennys",
    price: "28 € per silikoni",
    duration: "30 minuuttia",
    type: "terapia",
  },
  {
    id: "Alaraajahieronta",
    title: "Alaraajahieronta (harjoittelija)",
    description:
      "Alaraajahieronta keskittyy reisien, säärien, nilkkojen ja jalkaterien alueelle. Hieronnassa käsitellään lihaksia ja pehmytkudoksia kokonaisvaltaisesti. Hoito lievittää lihaskireyksiä ja kiputiloja, erityisesti pohkeissa ja reisissä. Hieronta rentouttaa lihaksia, parantaa verenkiertoa ja tehostaa aineenvaihduntaa alaraajoissa. Se edistää palautumista rasituksesta ja tukee fyysisen hyvinvoinnin ylläpitämistä.",
    image: "pinja_2025-14.jpg",
    link: "/palvelut/kynsien-lyhennys",
    price: "48 €",
    duration: "90 minuuttia",
    type: "hieronta",
  },
  {
    id: "Säärien sokerointi",
    title: "Säärien sokerointi",
    description:
      "Silikoniortoosit ovat yksilöllisesti muotoiltuja silikonista valmistettuja tukia, joita käytetään jalkaterän virheasentojen korjaamiseen tai vaimentamaan painetta. Ne helpottavat kipua ja parantavat jalkojen asentoa, auttaen esimerkiksi vaivaisenluun tai vasaravarpaiden hoidossa.",
    image: "pinja_2025-20.jpg",
    link: "/palvelut/kynsien-lyhennys",
    price: "32 €",
    duration: "60 minuuttia",
    type: "sokerointi",
  },
  {
    id: "Kainaloiden sokerointi",
    title: "Kainaloiden sokerointi",
    description:
      "Silikoniortoosit ovat yksilöllisesti muotoiltuja silikonista valmistettuja tukia, joita käytetään jalkaterän virheasentojen korjaamiseen tai vaimentamaan painetta. Ne helpottavat kipua ja parantavat jalkojen asentoa, auttaen esimerkiksi vaivaisenluun tai vasaravarpaiden hoidossa.",
    image: "pinja_2025-20.jpg",
    link: "/palvelut/kynsien-lyhennys",
    price: "16 €",
    duration: "45 minuuttia",
    type: "sokerointi",
  },
  {
    id: "Reisien sokerointi",
    title: "Reisien sokerointi",
    description:
      "Silikoniortoosit ovat yksilöllisesti muotoiltuja silikonista valmistettuja tukia, joita käytetään jalkaterän virheasentojen korjaamiseen tai vaimentamaan painetta. Ne helpottavat kipua ja parantavat jalkojen asentoa, auttaen esimerkiksi vaivaisenluun tai vasaravarpaiden hoidossa.",
    image: "pinja_2025-20.jpg",
    link: "/palvelut/kynsien-lyhennys",
    price: "36 €",
    duration: "60 minuuttia",
    type: "sokerointi",
  },
  {
    id: "Lahjakortti",
    title: "Lahjakortti",
    description:
      "Osta lahjakortti miellyttääksesi itseäsi tai läheistäsi.",
    image: "pinja_2025-20.jpg",
    link: "/palvelut/kynsien-lyhennys",
    price: "20 - 1000 €",
    duration: "palvelusta riippuen",
    type: "sokerointi",
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
  type: string;
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
                  className="w-full h-48 mb-6 brightness-75 object-cover object-[50%_35%]"
                />
                <div className="p-4 text-ellipsis overflow-hidden">
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
