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
      "Olen työharjoittelussa viikot 19–24 Kuopion yliopistollisessa sairaalassa (KYS). Harjoittelun aikana en välttämättä pysty vastaamaan yhteydenottoihin heti, mutta pyrin palaamaan viestiisi mahdollisimman pian.",
    thumbnail: "/images/pinja_2025-10.jpg",
    link: "/blog/edistysaskeleet-diabeettinen-jalkahoito",
    date: "06.05.2025",
  },
  {
    title: "Lahjakortti nyt saatavilla",
    excerpt:
      "Voit nyt ostaa lahjakortin palveluihini. Lahjakortti on loistava lahjaidea itselle tai läheiselle.",
    thumbnail: "/images/lahjakortti.jpg",
    link: "/blog/uusi-tutkimus-jalkakipu",
    date: "01.05.2025",
  },
];

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground gap-8">
      {/* Hero Section backdrop-blur-sm brightness-75 */}
      <section
        className="relative top-0 w-screen h-[50vh] xl:h-[75vh] flex items-center justify-center text-center text-card"
        style={{
          backgroundImage: `url('/images/hero_background.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: '50% 20%',
        }}
      >
        <div className="absolute inset-0 brightness-75 backdrop-blur-sm"></div>
        <div className="relative z-10 px-4 rounded-lg">
          <h1 className="text-card">Pinja Pasanen</h1>
          <p className="text-card mb-10">
            Jalkaterapeuttiopiskelija, joka on erikoistunut jalkojen terveyteen ja hyvinvointiin nykyaikaisilla hoitomenetelmillä.
          </p>
            <Link href="/yhteystiedot" className="bg-primary text-card px-24 py-4  rounded-lg font-semibold">
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
              className="p-4 rounded-lg shadow-md bg-card hover:shadow-xl hover:brightness-90 transition duration-300 flex flex-col items-center"
            >
              <service.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-center">{service.title}</h3>
              <p className="text-center">
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
                <div className="p-4 text-ellipsis overflow-hidden text-left">
                  <h3>{article.title}</h3>
                  <p className="line-clamp-2">
                    {article.excerpt}
                  </p>
                  <Link href={article.link} className="text-primary hover:underline mt-2 block">
                    Lue lisää
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}