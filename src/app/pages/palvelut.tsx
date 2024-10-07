import Card from "@/app/components/card";

const palvelut = ({ id }: any) => {
  return (
    <div
      id={id}
      className="w-screen min-h-screen flex justify-center items-center p-10 py-24 md:py-0"
    >
      <div className=" w-full max-w-4xl flex flex-col gap-8">
        <h1 className="text-5xl text-center">Palvelut & Hinnasto</h1>
        <div className="flex flex-wrap gap-4 md:gap-10 justify-center">
          <Card
            backgroundImg="jalka-4.jpg"
            mainImg="jalka-4.jpg"
            title="Kliininen jalkahoito"
            text="Kliininen jalkahoito on terveydenhoitoa, jossa hoidetaan jalkojen iho- ja kynsiongelmia sekä ehkäistään jalkavaivoja. Se on erityisen tärkeää riskiryhmille, kuten diabeetikoille, ja sen tavoitteena on ylläpitää jalkojen terveyttä."
            pricing="90min / 75€"
          />
          <Card
            backgroundImg="jalka-7.jpg"
            mainImg="jalka-7.jpg"
            title="Kynsien lyhennys"
            text="Kynsien lyhennys on toimenpide, jossa kynnet leikataan sopivaan pituuteen ja muotoon. Se auttaa ylläpitämään kynsien terveyttä ja ehkäisee esimerkiksi sisäänkasvaneita kynsiä."
            pricing="30min / 45€"
          />
          <Card
            backgroundImg="jalka-2.jpg"
            mainImg="jalka-2.jpg"
            title="Kynnenoikaisu"
            text="Podofix-menetelmä, joka soveltuu lähes kaikkien epämuodostuneille kynsille, kuten sisäänkasvaneille kynsille sekä taipuneiden kynsien hoitoon. Podofix-hoito uusitaan 2vk-2kk välein, kunnes haluttu tulos on saavutettu."
            pricing="45€ hoidon yhteydessä"
            pricing2="55€ erikseen"
          />
          <Card
            backgroundImg="jalka-5.jpg"
            mainImg="jalka-5.jpg"
            title="Silikoniortoosit"
            text="Silikoniortoosit ovat yksilöllisesti muotoiltuja silikonista valmistettuja tukia, joita käytetään jalkaterän virheasentojen korjaamiseen tai vaimentamaan painetta. Ne helpottavat kipua ja parantavat jalkojen asentoa, auttaen esimerkiksi vaivaisenluun tai vasaravarpaiden hoidossa.  Yksilöllisesti valmistettavilla tuotteilla on 3kk takuu, jonka aikana muokkauksia voidaan tehdä veloituksetta. Yksilöllisesti valmistettavilla tuotteilla ei ole vaihto- eikä palautusoikeitta."
            pricing="25€ / silikoni"
          />
        </div>
        <div className="text-sm mb-6">
          <p className="font-semibold">HUOM!</p>
          <p>
            Peruutus tulee tehdä vähintään 24 tuntia ennen vastaanottoajan alkua
            puhelimitse. Mikäli varattua palvelua ei peruta peruutusajan
            puitteissa, veloitetaan <b>40,00 €</b>.
          </p>
          <p className="mt-2">
            Yksilöllisesti valmistettavilla tuotteilla on 3kk takuu, jonka
            aikana muokkauksia voidaan tehdä veloituksetta. Yksilöllisesti
            valmistettavilla tuotteilla ei ole vaihto- eikä palautusoikeutta.
          </p>
          <p className="mt-2">Pidätämme oikeuden hinnanmuutoksiin.</p>
        </div>
      </div>
    </div>
  );
};

export default palvelut;
