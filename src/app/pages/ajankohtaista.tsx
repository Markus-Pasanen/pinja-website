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
            pvm="29.12.2024"
            backgroundImg="apteekki.jpg"
            title="Olen tavattavissa 13.1. Kommilan apteekilla!"
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
      Hei! Löydät minut <strong>maanantaina 13.1. klo 9 – 16</strong> Kommilan
      apteekilta. Päivän aikana pääset tutustumaan jalkaterapian
      mahdollisuuksiin ja saamaan asiantuntevaa neuvontaa alaraajaongelmissa.
    </p>
    <p>
      Tämä on erinomainen tilaisuus päästä kysymään jalkaterveyteen liittyvistä
      asioista sekä varaamaan aika henkilökohtaiseen jalkaterapiaan.
    </p>

    <p>Varaamalla kliinisen jalkahoidon apteekille saat hoidon:</p>
    <p className="text-xl">
      <strong>71 € / 90 min</strong> (norm. 78 €)
    </p>
    <p>
      Hoidot tehdään apteekin hoitohuoneessa. Ajan voit varata puhelimitse
      numerosta:
    </p>
    <p className="text-xl">
      <strong>0451032606</strong>
    </p>
    <p>Tervetuloa tapaamaan ja keskustelemaan kanssani Kommilan apteekkiin!</p>
  </>
);

const elementContent2: React.ReactElement = (
  <>
    <p>
      Tarkistamme ja teemme hinnastoomme muutoksia 1.1.2025 alkaen. Muutoksilla haluamme
      varmistaa hinnaston ajantasaisuuden nousseiden kulujen myötä.
    </p>
    <p>Päivitetyt hinnat löydät hinnasto-välilehdeltä.</p>
  </>
);

export default ajankohtaista;
