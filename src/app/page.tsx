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
    title: "Olen tavattavissa Kommilan apteekilla",
    excerpt:
      "Tervetuloa tapaamaan minua Kommilan apteekilla Maanantaina 03.03. ja Torstaina 07.03. klo 9-16.",
    thumbnail: "apteekki.jpg",
    link: "/blog/uusi-tutkimus-jalkakipu",
    date: "03.03.2025",
  },
  {
    title: "Muutoksia hinnastoon 1.1.2025 alkaen",
    excerpt:
      "Tarkistamme hinnastomme ja teemme muutoksia, jotta voimme tarjota asiakkaillemme parasta mahdollista palvelua.",
    thumbnail: "raha.jpg",
    link: "/blog/edistysaskeleet-diabeettinen-jalkahoito",
    date: "01.01.2025",
  },
];

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground gap-8">
      {/* Hero Section backdrop-blur-sm brightness-75 */}
      <section
        className="relative w-full h-[50vh] flex items-center justify-center text-center text-card"
        style={{
          backgroundImage: `url('hero_background.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: '50% 20%',
        }}
      >
        <div className="absolute inset-0 brightness-75 backdrop-blur-sm "></div>
        <div className="relative z-10 px-4 rounded-lg">
          <h1 className="text-5xl font-bold mb-4">
            Pinja Pasanen
          </h1>
          <p className="text-lg mb-16">
            Jalkaterapeuttiopiskelija, joka on erikoistunut jalkojen terveyteen ja hyvinvointiin nykyaikaisilla hoitomenetelmillä.
          </p>
            <Link href="/yhteystiedot" className="bg-primary text-card px-24 py-4 rounded-lg hover:ring-4 ring-secondary transition duration-300  font-semibold">
              Varaa aika
            </Link>
        </div>
      </section>
      <div className="container mx-auto px-4 py-24">
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Palveluni
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href="/palvelut"
                className="p-6 rounded-lg shadow-md bg-card hover:shadow-xl hover:brightness-90 transition duration-300 flex flex-col items-center"
              >
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-center">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="pt-24">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Ajankohtaista
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {news.map((article, index) => (
              <div
                key={index}
                className="rounded-lg shadow-md bg-card overflow-hidden relative flex flex-col justify-between"
              >
                <div className="shadow-lg absolute left-0 top-0 rounded-br-lg py-2 px-4 bg-primary text-card z-10 font-semibold">
                  {article.date}
                </div>
                <div>
                  <img
                    src={article.thumbnail}
                    alt={article.title}
                    className="w-full h-48 object-cover brightness-75"
                  />

                  <div className="p-4 h-48 flex flex-col gap-2">
                    <h3 className="text-xl font-semibold">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {article.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}