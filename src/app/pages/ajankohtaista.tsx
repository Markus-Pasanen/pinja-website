import Card_ajankohtaista from "@/app/components/card_ajankohtaista";

const ajankohtaista = ({ id }: any) => {
  return (
    <div
      id={id}
      className="w-screen min-h-lvh flex justify-center items-center -scroll-mt-14"
    >
      <div className=" w-full max-w-4xl flex flex-col gap-8 px-10">
        <h1 className="text-5xl text-center">Ajankohtaista</h1>
        <div className="flex flex-col gap-4 md:gap-10 justify-center -z-1">
          <Card_ajankohtaista
            pvm="24.02.2025"
            backgroundImg="apteekki.jpg"
            title="Olen Kommilan apteekilla maanantaina 3.3. ja 7.4. klo 9–16!"
          >
            {elementContent}
          </Card_ajankohtaista>

          <Card_ajankohtaista
            pvm="29.12.2024"
            backgroundImg="raha.jpg"
            title="Muutoksia hinnastoon 1.1.2025."
          >
            {elementContent2}
          </Card_ajankohtaista>
        </div>
      </div>
    </div>
  );
};

const elementContent: React.ReactElement = (
  <>
    <p>
      Tervetuloa jalkaterapeuttiopiskelijan jalkahoitoon apteekille{" "}
      <strong>maanantaina 3.3. ja 7.4. klo 9–16.</strong> Hyödynnä tämä erinomainen
      mahdollisuus keskustella jalkaterapian mahdollisuuksista ja löytää juuri
      sinulle sopiva hoitokeino.
    </p>
    <p className="text-xl">Miksi valita jalkaterapeutti?</p>
    <p>
      Jalkaterapeutti arvioi ja hoitaa jalkojen vaivoja yksilöllisesti, auttaen
      parantamaan liikkuvuutta ja elämänlaatua.
    </p>

    <p className="text-xl">Talven jälkeinen huolenpito jalkoihin</p>
    <p>
      Kaipaavatko jalkasi talven jäljiltä huolenpitoa ja hoitoa? Nyt on
      täydellinen hetki tarttua tilaisuuteen ja varata aika jalkahoitoon
      apteekille!
    </p>

    <p className="text-xl">Erikoistarjous</p>
    <p>
      Varaa jalkahoitoaika <strong>75 € (norm. 78 €)</strong> ja nauti ammattitaitoisesta
      hoidosta. Tarjolla myös Podofix-kynnenoikaisuhoito sekä yksilölliset
      silikoniortoosit.
    </p>

    <p className="text-xl">Varaa aikasi nyt</p>
    <p>
      Ajanvaraus on helppoa! Soita numeroon <strong>045 103 2606</strong> ja varaa aika.
    </p>

    <p className="text-xl">
      Tervetuloa hoitamaan jalkojasi ja parantamaan elämänlaatua!
    </p>
  </>
);

const elementContent2: React.ReactElement = (
  <>
    <p>
      Tarkistamme ja teemme hinnastoomme muutoksia 1.1.2025 alkaen. Muutoksilla
      haluamme varmistaa hinnaston ajantasaisuuden nousseiden kulujen myötä.
    </p>
    <p>Päivitetyt hinnat löydät palvelut-välilehdeltä.</p>
  </>
);

export default ajankohtaista;
