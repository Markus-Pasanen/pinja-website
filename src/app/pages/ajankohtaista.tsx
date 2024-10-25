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
            pvm="25.10.2024"
            backgroundImg="apteekki.jpg"
            title="Olen tavattavissa Kommilan Apteekissa!"
          >
          {elementContent}
          </Card_ajankohtaista>
        </div>
      </div>
    </div>
  );
};

const elementContent: React.ReactElement = (
  <>
    <p>
      Hei! Löydät minut <strong>maanantaina 4.11. klo 8.30–16</strong> Kommilan
      apteekilta. Päivän aikana pääset tutustumaan jalkaterapian
      mahdollisuuksiin ja saamaan asiantuntevaa neuvontaa alaraajaongelmissa.
    </p>
    <p>
      Tämä on erinomainen tilaisuus päästä kysymään jalkaterveyteen liittyvistä
      asioista sekä varaamaan aika henkilökohtaiseen jalkaterapiaan.
    </p>

    <p>Varaamalla kliinisen jalkahoidon apteekille saat hoidon:</p>
    <p className="text-xl">
      <strong>68 € / 90 min</strong> (norm. 75 €)
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

export default ajankohtaista;
