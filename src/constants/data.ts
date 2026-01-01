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
    title: "Muutoksia hinnastoon vuoden 2026 alusta",
    excerpt:
      "Hinnat nousevat arviolta 3 € / palvelu yleisten kustannusten nousun sekä opintojeni päättymisen myötä. Uusi hinnasto tulee näkyviin 1.1.2026. Lämpimästi tervetuloa hoitoihin!",
    thumbnail: "/images/raha.jpg",
    date: "19.12.2025",
  },
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
  }
];

export const services: Service[] = [
  {
    id: "Jalkahoito-90",
    title: "Jalkahoito",
    description: `Kliininen jalkaterapia on yleisin tarjoamamme palvelu ja se toteutetaan aina yksilöllisesti asiakkaan tarpeiden mukaan. Hoito soveltuu kaikenlaisille jaloille ja perustuu terveydenhuollon suosituksiin.
Hoito sisältää jalkojen ja ihon kunnon tarkistuksen, kynsien lyhennyksen ja tarvittaessa ohennuksen, kovettumien ja känsien poiston ja jalkojen rasvauksen.
Jos hoidossa havaitaan muita hoidettavia ongelmakohtia, ne käsitellään osana kokonaisvaltaista hoitoa.`,
    image: "pinja_2025-52.jpg",
    link: "/palvelut",
    price: "84 €",
    duration: "90 min",
    type: "terapia",
  },
  {
    id: "Kynsien-lyhennys",
    title: "Kynsien lyhennys",
    description: `Kynsien lyhennys on tarkoitettu sinulle, kun kynnet kaipaavat ammattimaista ja turvallista hoitoa. 
Vastaanotolla tarkastamme kynsien ja ympäröivän ihon kunnon sekä huomioimme mahdolliset perussairaudet. Kynnet lyhennetään huolellisesti ja tarvittaessa ohennetaan. Hoito toteutetaan terveydenhuollon suositusten mukaisesti.

Kynsien lyhennys auttaa ehkäisemään kynsiongelmia, kuten sisäänkasvaneita kynsiä, kipua ja tulehduksia. Palvelu sopii myös säännölliseksi ylläpitohoidoksi.`,
    image: "pinja_2025-45.jpg",
    link: "/palvelut",
    price: "48 €",
    duration: "45 min",
    type: "terapia",
  },
  {
    id: "Jalkaterapia-60",
    title: "Jalkaterapia",
    description: `Jalkaterapian tavoitteena on antaa sinulle kattavaa tietoa jalkojesi toiminnasta ja rakenteista sekä kartoittaa mahdollisia puolieroja tai lihasepätasapainoja. 

Vastaanotollemme tullaan usein esimerkiksi vaivasenluun (hallux valgus) tai plantaarifaskiitin aiheuttamien kipujen vuoksi.

Arviointikäynnillä tutkimme jalkaterien nivelliikkuvuudet, jalan kaarirakenteet ja linjaukset sekä mahdolliset puolierot ja toiminnalliset poikkeamat.

Tutkimuksen perusteella saat yksilöllistä ohjausta, joka voi sisältää lihaksia vahvistavia ja tukevia harjoitteita, arvion mahdollisesta tukipohjallistarpeesta tai kenkäohjausta arjen ja liikunnan tarpeisiin.

`,
    image: "pinja_2025-38.jpg",
    link: "/palvelut",
    price: "56 €",
    duration: "60 min",
    type: "terapia",
  },
  {
    id: "Syyla-hoito",
    title: "Syylän hoito",
    description: `Syylien hoito toteutetaan vastaanotollamme Verrutop-hoitomenetelmällä. Vastaanotolla käymme hoidon kulun huolellisesti läpi yhdessä asiakkaan kanssa.

Syylän hoito perustuu syyläkudoksen päällä olevan kovettuneen ihon poistoon, jotta hoitava aine pääsee vaikuttamaan itse syylään. Hoito voidaan aloittaa jo ensimmäisellä vastaanottokäynnillä.

Verrutop-syylähoito on tehokas ja kivuton hoitomuoto erityisesti pitkäaikaisiin tai kivuliaisiin syyliin. Verrutopin vaikuttava aine, Nitrizinc Complex, vähentää syyläkudosta hallitusti. Hoito toteutetaan yksilöllisesti parhaan mahdollisen lopputuloksen saavuttamiseksi.

Pitkään olleet tai syvälle ulottuvat syylät edellyttävät yleensä useampaa käsittelykertaa, ja uusintahoito tehdään 7–14 vuorokauden välein.

Hoidon tueksi saat selkeät kotihoito-ohjeet. 
Huomioitavaa: Verrutop-hoitoa ei suositella alle 6-vuotiaille, raskauden tai imetyksen aikana, tulehtuneelle iholle, kasvoihin eikä samanaikaisesti muiden paikallishoitojen kanssa.`,
    image: "syyla.jpg",
    link: "/palvelut",
    price: "53 € + käytetty aika",
    duration: "45 min",
    type: "terapia",
  },
  {
    id: "Podofix-kynnenoikaisu",
    title: "Podofix-kynnenoikaisu",
    description: `Podofix-kynnenoikaisu on yksi käytetyimmistä ja luotettavimmista hoitomenetelmistä sisäänkasvaneiden ja taipuneiden kynsien hoidossa. Podofix-menetelmä soveltuu lähes kaikille epämuodostuneille kynsille, kuten sisäänkasvaneille ja voimakkaasti kaartuville kynsille. Hoidon tavoitteena on oikaista kynnen kasvusuuntaa, nostaa kynnen reunaa ja poistaa kipua sekä painetta kynsivallista.

Hoito on kivuton ja tehokas, ja vaikutus alkaa välittömästi. Menetelmä soveltuu kynsille, joissa ei ole kynsisientä, kynsi ei ole voimakkaasti paksuuntunut ja kynsipatja on terve.


Hoidon eteneminen: hoito uusitaan 2 viikon–2 kuukauden välein yksilöllisen tarpeen mukaan. Hoitoa suositellaan jatkettavaksi säännöllisesti noin 6-12 kuukauden ajan parhaan lopputuloksen saavuttamiseksi.

Hoidon kesto ja hoitoväli määritellään aina kynnen tilanteen mukaan vastaanotolla.`,
    image: "pinja_2025-76.jpg",
    link: "/palvelut",
    price: "58 € + käytetty aika",
    duration: "45min",
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
    id: "Silikoniortoosi",
    title: "Silikoniortoosi",
    description: `Silikoniortoosi valmistetaan aina yksilöllisesti vastaanotolla. Se on varpaita keventävä, korjaava ja suojaava tuki, jonka avulla ohjataan varpaiden asentoa oikeaan suuntaan. Ortoosi on pitkäikäinen, joustava ja pestävä, joten se soveltuu hyvin päivittäiseen käyttöön.


Varvasortoosit valmistetaan erilaisista silikonimassoista, joiden vahvuus ja joustavuus valitaan käyttötarkoituksen mukaan. Ortoosi muotoillaan yksilöllisesti jalan ja varpaiden rakenteiden perusteella, jotta se on mahdollisimman toimiva ja miellyttävä käyttää.`,
    image: "pinja_2025-5.jpg",
    link: "/palvelut",
    price: "32 € / kpl + käytetty aika",
    duration: "45min",
    type: "terapia",
  },
  {
    id: "Puolihieronta-60 (opiskelija)",
    title: "Puolihieronta",
    description: `Puolihieronta on tehokas ja rentouttava hoito, jonka aikana käsitellään valitsemasi kehonosat. Hoito sopii erityisesti lihasjännitysten, kiputilojen ja kuormituksen lievittämiseen sekä palautumisen tueksi.

Hieronnassa voidaan käsitellä esimerkiksi:
• ylävartalo: niska, hartiat, selkä ja käsivarret
• alavartalo: alaselkä, pakarat ja alaraajat

Hieronnan kohteet räätälöidään aina yhdessä hoitajan kanssa asiakkaan tarpeiden ja toiveiden mukaan.

Hieronta toteutetaan ammattitaitoisesti ja rauhallisesti, ja tarvittaessa sen intensiteetti voidaan mukauttaa kevyemmäksi tai napakammaksi. Puolihieronta sopii hyvin osaksi säännöllistä kehonhuoltoa tai yksittäisenä hoitona lihasvaivojen lievittämiseen.`,
    image: "osahieronta.jpg",
    link: "/palvelut",
    price: "39 €",
    duration: "60 min",
    type: "hieronta",
  },
    {
    id: "Kokohieronta-90 (opiskelija)",
    title: "Kokohieronta 90 min",
    description: `Kokohieronta on kokonaisvaltainen ja rentouttava hoito, jossa käydään läpi koko kehon lihaksisto. Hoito sopii erityisesti lihasjännitysten, kiputilojen ja kuormituksen lievittämiseen sekä yleisen hyvinvoinnin ja palautumisen tukemiseen. Kokemus on samalla kokonaisvaltainen ja hyvin rentouttava.
Hieronnassa voidaan käsitellä selän, hartioiden, niskan, käsivarsien, pakaroiden ja jalkojen lihaksisto. Hoidon sisältö ja käsiteltävät alueet räätälöidään aina yksilöllisesti asiakkaan tarpeiden ja toiveiden mukaan.
Hieronta toteutetaan ammattitaitoisesti ja rauhallisesti. Voimakkuutta voidaan mukauttaa kevyemmäksi tai napakammaksi asiakkaan mieltymyksen ja tarpeen mukaan.
Kokohieronta sopii hyvin osaksi säännöllistä kehonhuoltoa tai yksittäisenä hoitona lihasjännitysten lievittämiseen ja rentoutumiseen.
`,
    image: "kokohieronta.jpg",
    link: "/palvelut",
    price: "57 €",
    duration: "90 min",
    type: "hieronta",
  },
  {
    id: "Kokohieronta-120 (opiskelija)",
    title: "Kokohieronta 120 min",
    description: `120 minuutin kokohieronta on kokonaisvaltainen ja syvempi hoito, jossa käsitellään koko kehon lihaksisto perusteellisesti. Hoito sopii erityisesti lihasjännitysten ja kiputilojen lievittämiseen, kuormituksen palautumiseen sekä kokonaisvaltaisen rentoutumisen tukemiseen.

Hoidon sisältö ja käsiteltävät alueet räätälöidään aina asiakkaan tarpeiden ja toiveiden mukaan.

Hieronta toteutetaan ammattitaitoisesti ja rauhallisesti, ja hieronnan voimakkuutta voidaan mukauttaa kevyemmäksi tai napakammaksi asiakkaan mieltymyksen ja tarpeen mukaan.

120 minuutin kokohieronta tarjoaa erityisen kokonaisvaltaisen ja syvän rentoutumiskokemuksen, ja se sopii sekä säännölliseksi kehonhuoltoon että yksittäiseksi hemmotteluhoidoksi.`,
    image: "kokohieronta.jpg",
    link: "/palvelut",
    price: "78 €",
    duration: "120 min",
    type: "hieronta",
  },
  {
    id: "Sokerointi1",
    title: "Kainaloiden sokerointi (harjoittelija)",
    description:
      "Sokerointi poistaa karvat hellävaraisesti, jättäen ihon sileäksi ja pehmeäksi viikoiksi. Samalla iho kuoriutuu kevyesti, mikä tekee siitä ihanteellisen vaihtoehdon myös herkälle iholle. Palvelun hinta ja kesto vaihtelevat sokeroitavan alueen mukaan. Vaihtoehtoina ovat kainaloiden, säärien ja reisien sokerointi.",
    image: "pinja_2025-20.jpg",
    link: "/palvelut/kynsien-lyhennys",
    price: "19 €",
    duration: "30 minuuttia",
    type: "sokerointi",
  },
  {
    id: "Sokerointi2",
    title: "Säärien sokerointi (harjoittelija)",
    description:
      "Sokerointi poistaa karvat hellävaraisesti, jättäen ihon sileäksi ja pehmeäksi viikoiksi. Samalla iho kuoriutuu kevyesti, mikä tekee siitä ihanteellisen vaihtoehdon myös herkälle iholle. Palvelun hinta ja kesto vaihtelevat sokeroitavan alueen mukaan. Vaihtoehtoina ovat kainaloiden, säärien ja reisien sokerointi.",
    image: "jalkaterapia.jpg",
    link: "/palvelut/kynsien-lyhennys",
    price: "29 €",
    duration: "60 minuuttia",
    type: "sokerointi",
  },
  {
    id: "Pohjallinen",
    title: "Yksilölliset palapohjalliset",
    description:
      "Yksilöllisellä palapohjallisella pyritään ohjaamaan ja tasaamaan jalkaterään kohdistuvaa kuormitusta ja painetta koko jalkaterän alueelle. Pohjallisen tarkoituksena on auttaa jalkaterää pysymään oikeassa asennossa. Palapohjallisten hinta sisältää palapohjallistarpeen arvioinnin, pohjallisten valmistuksen, itse tukipohjalliset, sovituksen sekä kontrollin.",
    image: "pohjallinen.jpg",
    link: "/palvelut/kynsien-lyhennys",
    price: "160 -180 €",
    duration: "Sovitaan tilattaessa",
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