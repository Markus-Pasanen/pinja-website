"use client";
import { useState } from "react";
import Modal from "@/components/shared/Modal";
import { Footprints, Candy, Hand} from "lucide-react";
import Link from 'next/link';

const services = [
  {
    title: "Jalkaterapia",
    description:
      "Ennaltaehkäisee ja hoitaa alaraajojen vaivoja, kipu tiloja, asentovirheitä ja iho- ja kynsimuutoksia.",
    icon: Footprints,
  },
  {
    title: "Hieronta",
    description:
      "Rentouttaa kehoa ja mieltä. Lievittää lihaskireyksiä ja kiputiloja sekä edistää palautumista.",
    icon: Hand,
  },
  {
    title: "Sokerointi",
    description:
      "Hellävarainen ja tehokas karvanpoistomenetelmä, joka poistaa karvat tehokkaasti ja kuorii ihoa luonnollisesti.",
    icon: Candy,
  },
];

const news = [
  {
    title: "Tiedotus asiakkaille",
    excerpt:
      "Olen työharjoittelussa viikot 19–24 Kuopion yliopistollisessa sairaalassa (KYS), ja harjoittelu painottuu erikoissairaanhoidon puolelle. Harjoittelun aikana en välttämättä pysty vastaamaan yhteydenottoihin heti, mutta pyrin palaamaan viestiisi mahdollisimman pian. Seuraavat vapaat hoitoajat sijoittuvat kesäkuun puolelle, mutta ota rohkeasti yhteyttä, niin etsitään sinulle sopiva aika yhdessä! Kiitos ymmärryksestä ja ihanaa kevättä!",
    thumbnail: "/images/pinja_2025-10.jpg",
    link: "/blog/edistysaskeleet-diabeettinen-jalkahoito",
    date: "06.05.2025",
  },
  {
    title: "Lahjakortti nyt saatavilla",
    excerpt:
      "Jalkaterapia, hieronta tai sokerointi. Valitse lahjakorttiin juuri se hoito, jonka tiedät ilahduttavan. Täydellinen tapa muistaa ystävää, läheistä tai itseäsi!",
    thumbnail: "/images/lahjakortti.jpg",
    link: "/blog/uusi-tutkimus-jalkakipu",
    date: "01.05.2025",
  },
];

export default function Page() {
  const [openArticle, setOpenArticle] = useState(null);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground gap-8">
      {/* Hero Section backdrop-blur-sm brightness-75 */}
      <section
        className="relative top-0 w-screen h-[75vh] flex items-center justify-center text-center text-card"
        style={{
          backgroundImage: `url('/images/hero_background.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: '50% 20%',
        }}
      >
        <div className="absolute inset-0 brightness-75 backdrop-blur-sm"></div>
        <div className="relative z-10 px-4 rounded-lg">
          <h1 className="text-card">Pinja Pasanen</h1>
          <p className="text-card mb-12">
            Jalkaterapeuttiopiskelija, joka on erikoistunut jalkojen terveyteen ja hyvinvointiin nykyaikaisilla hoitomenetelmillä.
          </p>
            <Link href="/yhteystiedot" className="bg-primary text-card px-24 py-4 rounded-lg font-semibold">
              Varaa aika
            </Link>
        </div>
      </section>
      <section>
        <h2 className="text-center">Palveluni</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href="/palvelut"
              className="p-6 rounded-lg shadow-md bg-card hover:shadow-xl hover:brightness-90 transition duration-300 flex flex-col items-center"
            >
              <service.icon className="size-12 text-primary mb-4" />
              <h3>{service.title}</h3>
              <p>
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-center">Ajankohtaista</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((article, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md bg-card overflow-hidden relative flex flex-col justify-between"
            >
              <div className="shadow-lg absolute left-0 top-0 rounded-br-lg py-2 px-4 bg-primary text-card z-10">
                {article.date}
              </div>
              <div>
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="w-full h-48 object-cover brightness-75"
                />
                <div className="p-4 text-ellipsis overflow-hidden text-left h-48">
                  <h3>{article.title}</h3>
                  <p className="line-clamp-2">
                    {article.excerpt}
                  </p>
                  <button
                    className="text-primary hover:underline mt-2 block p-0 bg-transparent border-none cursor-pointer"
                    onClick={() => setOpenArticle(article)}
                  >
                    Lue lisää
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Modal isOpen={!!openArticle} onClose={() => setOpenArticle(null)}>
          {openArticle && (
            <div className="flex flex-col h-full">
              <div className="w-full" style={{ height: "400px" }}>
                <img
                  src={openArticle.thumbnail}
                  alt={openArticle.title}
                  className="w-full h-full object-cover rounded-t-lg object-top"
                  style={{display: 'block', padding: 0, margin: 0}}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold mb-2">{openArticle.title}</h2>
                <div className="text-sm text-muted-foreground mb-2">{openArticle.date}</div>
                <p>{openArticle.excerpt}</p>
              </div>
            </div>
          )}
        </Modal>
      </section>
    </main>
  );
}