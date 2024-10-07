const esittely = ({ id }: any) => {
  return (
    <div
      id={id}
      className="w-screen min-h-screen flex justify-center items-center p-10"
    >
      <div className="w-full max-w-4xl flex flex-col gap-8 py-12 md:py-0">
        <h1 className="text-5xl text-center">Esittely</h1>
        <div className="text-lg">
          Olen jalkaterapeuttiopiskelija ja opiskelen Savonlinnan
          ammattikorkeakoulussa (XAMK). Olen toiminut useita vuosia
          lähihoitajana, ja kiinnostukseni jalkojen hyvinvointiin ja terveyden
          edistämiseen johdatti minut jatko-opintoihin. Jalkaterapeutti on korkeakoulututkinnon suorittanut terveys- ja kuntoutusala ammattilainen. Koulutus kestää 3,5 vuotta.  Tarjoan
          jalkaterapiapalveluita kaikenikäisille asiakkaille, ja minulla on
          vahva intohimo auttaa ihmisiä saavuttamaan ja ylläpitämään jalkojen
          terveyttä.
        </div>
        <div className="text-lg">
          <h2 className="text-2xl font-semibold pb-4">Miksi valita minut?</h2>
          Olen sitoutunut jatkuvaan ammatilliseen kehitykseen ja käytän työssäni
          aina ajantasaisia menetelmiä, moderneja teknologioita sekä huolehdin
          työvälineiden puhtaudesta. Ymmärrän, että jokaisen asiakkaan tarpeet
          ovat yksilöllisiä, ja siksi jokainen hoito räätälöidään juuri sinulle
          sopivaksi.
        </div>
        <div className="text-lg">
          <h2 className="text-2xl font-semibold pb-4">Ota yhteyttä</h2>
          Jos sinulla on kysymyksiä tai haluat varata ajan, älä epäröi ottaa
          yhteyttä. Olen täällä auttamassa sinua ja tarjoamassa parasta
          mahdollista jalkaterapiaa.
        </div>

        <div className="text-lg">
          <h2 className="text-2xl font-semibold pb-4">
            Lämpimästi tervetuloa vastaanotolleni!
          </h2>
          <p className="font-semibold">Pinja Pasanen</p>
          <p>Jalkaterapeuttiopiskelija ja lähihoitaja</p>
        </div>
      </div>
    </div>
  );
};

export default esittely;
