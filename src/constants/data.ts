import { Footprints, Candy, Hand } from "lucide-react";
import { Service, NewsArticle, ServicePreview } from "@/types";

export const servicesPreviews: ServicePreview[] = [
  {
    title: "Jalkaterapia",
    description:
      "Ennaltaehkäisee ja hoitaa alaraajojen vaivoja, kipu tiloja, asentovirheitä ja iho- ja kynsimuutoksia.",
    icon: Footprints,
  },
  {
    title: "Hieronta",
    description:
      "Rentouttaa kehoa ja mieltä. Lievittää lihaskireyksiä ja kiputiloja sekä edistää palautumista.",
    icon: Hand,
  },
  {
    title: "Sokerointi",
    description:
      "Hellävarainen ja tehokas karvanpoistomenetelmä, joka poistaa karvat tehokkaasti ja kuorii ihoa luonnollisesti.",
    icon: Candy,
  },
];

export const newsArticles: NewsArticle[] = [
  {
    title: "Syksyn kuulumisia!",
    excerpt:
      "Ihanaa kertoa, että hierontaopintoni ovat edenneet siihen vaiheeseen, että voin nyt tarjota asiakkaille hierontaa harjoitteluhinnoin! Alkaen maanantaista 27.10.2025: Osahieronta 50 min - 36€ & kokohieronta 80 min - 57€. Tämä on loistava mahdollisuus päästä hierottavaksi edullisesti ja samalla tukea opintojeni etenemistä.",
    thumbnail: "/images/pinja.jpg",
    date: "22.10.2025",
  },
  {
    title: "Lympha press sarjahoito tarjous!",
    excerpt:
      "Lympha press sarjahoito: 3 hoitokertaa valitsemallasi aikavälillä. Osta 1.9 - 7.9 välisenä aikana niin saat sarjahoidon tarjoushintaan 120€ (norm. 144€). Voit varata hoidon käyttämisen myöhemmin itsellesi sopivaan aikaan.",
    thumbnail: "/images/buutsi.jpg",
    date: "01.09.2025",
  },
  {
    title: "Uusi maksutapa!",
    excerpt:
      "Korttimaksu lähimaksulla on nyt mahdollista! Tee maksusi kätevästi hoidon yhteydessä.",
    thumbnail: "/images/sumup.jpg",
    date: "23.08.2025",
  }
];

export const services: Service[] = [
  {
    id: "Kliininen jalkahoito",
    title: "Kliininen jalkahoito",
    description:
      "Kliininen jalkahoito on terveydenhoitoa, jossa hoidetaan jalkojen iho- ja kynsiongelmia sekä ehkäistään jalkavaivoja. Ihon rasvaushieronta ja lampaanvillat varpaiden väliin. Se on erityisen tärkeää riskiryhmille, kuten diabeetikoille, ja sen tavoitteena on ylläpitää jalkojen terveyttä.",
    image: "pinja_2025-52.jpg",
    link: "kliininen-jalkahoito",
    price: "81 €",
    duration: "90 minuuttia",
    type: "terapia",
  },
  {
    id: "Jalkaterapia",
    title: "Jalkaterapia",
    description:
      "Yksilöllistä ja asiantuntevaa jalkaterapiaa, joka tuo helpotusta vaivoihin ja edistää kokonaisvaltaista hyvinvointia. Hoidoissani yhdistyvät puhtaus, nykyaikaiset menetelmät ja lämmin, asiakaslähtöinen kohtaaminen. Olipa kyseessä kynsiongelmat tai jalkakipu, saat juuri sinun tarpeisiisi räätälöidyn hoidon turvallisessa ja rauhallisessa ympäristössä.",
    image: "pinja_2025-38.jpg",
    link: "kliininen-jalkahoito",
    price: "52 €",
    duration: "60 minuuttia",
    type: "terapia",
  },
  {
    id: "Lympha",
    title: "Lympha Press -kompressiohoito",
    description:
      "Lympha Press -kompressiohoito, jota voidaan käyttää tukena mm. sekundaarisen lymfaödeeman, lipödeeman, laskimoperäisen turvotuksen, suonikohjujen, säärihaavojen, urheiluvammojen ja palautumisen tukena.",
    image: "buutsi.jpg",
    link: "lympha-press",
    price: "48 €",
    duration: "30 minuuttia",
    type: "terapia",
  },
  {
    id: "Syylä",
    title: "Syylänhoito",
    description:
      "Verrutop-syylähoito on tehokas ja kivuton tapa päästä eroon pitkäaikaisista tai kivuliaista syylistä. Verrutopin vaikuttava aine Nitrizinc Complex vähentää syyläkudosta, ja hoito toteutetaan yksilöllisesti parhaimman lopputuloksen saavuttamiseksi. Pitkään olleet tai syvälle ulottuvat syylät vaativat yleensä useamman käsittelykerran, ja uusintahoito tehdään 7–14 vuorokauden välein. Hoidon tueksi saat selkeät kotihoito-ohjeet – erityisesti desinfiointi on tärkeää syylän kuivumisen edistämiseksi. Hoitoa ei suositella alle 6-vuotiaille, raskauden tai imetyksen aikana, tulehtuneelle iholle, kasvoihin tai muiden paikallishoitojen kanssa.",
    image: "syyla.jpg",
    link: "kliininen-jalkahoito",
    price: "53 € + ajankäyttö",
    duration: "45 - 60 minuuttia",
    type: "terapia",
  },
  {
    id: "Kynsien lyhennys",
    title: "Kynsien lyhennys",
    description:
      "Kynsien lyhennys on toimenpide, jossa kynnet leikataan sopivaan pituuteen ja muotoon. Se auttaa ylläpitämään kynsien terveyttä ja ehkäisee esimerkiksi sisäänkasvaneita kynsiä.",
    image: "pinja_2025-45.jpg",
    link: "/palvelut/kynsien-lyhennys",
    price: "48 €",
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
    price: "31 € per silikoni",
    duration: "30 minuuttia",
    type: "terapia",
  },
  {
    id: "Osahieronta",
    title: "Osahieronta (harjoittelija)",
    description:
      "Osahieronta keskittyy esimerkiksi alaraajojen lihaksiin lantiosta alaspäin. Hieronta rentouttaa lihaksia ja lievittää kireys- ja kiputiloja. Hieronta edistää palautumista rasituksesta ja tukee fyysisen hyvinvoinnin ylläpitämistä.",
    image: "osahieronta.jpg",
    link: "/palvelut/kynsien-lyhennys",
    price: "36 €",
    duration: "50 minuuttia",
    type: "hieronta",
  },
  {
    id: "Kokohieronta",
    title: "Kokohieronta (harjoittelija)",
    description:
      "Kokohieronta on koko kehon kattava hierontahoito. Hieronta rentouttaa lihaksia ja lievittää kireys- ja kiputiloja. Hieronta edistää palautumista rasituksesta ja tukee fyysisen hyvinvoinnin ylläpitämistä.",
    image: "kokohieronta.jpg",
    link: "/palvelut/kynsien-lyhennys",
    price: "57 €",
    duration: "80 minuuttia",
    type: "hieronta",
  },
  {
    id: "Sokerointi",
    title: "Sokerointi (harjoittelija)",
    description:
      "Sokerointi poistaa karvat hellävaraisesti, jättäen ihon sileäksi ja pehmeäksi viikoiksi. Samalla iho kuoriutuu kevyesti, mikä tekee siitä ihanteellisen vaihtoehdon myös herkälle iholle. Palvelun hinta ja kesto vaihtelevat sokeroitavan alueen mukaan. Vaihtoehtoina ovat kainaloiden, säärien ja reisien sokerointi.",
    image: "pinja_2025-20.jpg",
    link: "/palvelut/kynsien-lyhennys",
    price: "16 - 38 €",
    duration: "30 - 60 minuuttia",
    type: "sokerointi",
  },
  {
    id: "Lahjakortti",
    title: "Lahjakortti",
    description:
      "Jalkaterapia, hieronta tai sokerointi. Valitse lahjakorttiin juuri se hoito, jonka tiedät ilahduttavan. Täydellinen tapa muistaa ystävää, läheistä tai itseäsi!",
    image: "lahjakortti.jpg",
    link: "/palvelut/kynsien-lyhennys",
    price: "Avoin",
    duration: "palvelusta riippuen",
    type: "sokerointi",
  },
];