const esittely = ({ id }: any) => {
  return (
    <div
      id={id}
      className="w-screen min-h-lvh flex justify-center items-center px-10 scroll-mt-16"
    >
      <div className="w-full max-w-4xl flex flex-col gap-8 py-12 md:py-0">
        <h1 className="text-5xl text-center">Esittely</h1>
        <div className="text-lg">
          Olen jalkaterapeuttiopiskelija ja opiskelen Savonlinnan
          ammattikorkeakoulussa (XAMK). Olen toiminut useita vuosia
          lähihoitajana, ja kiinnostukseni jalkojen hyvinvointiin ja terveyden
          edistämiseen johdatti minut jatko-opintoihin. Jalkaterapeutti on
          korkeakoulututkinnon suorittanut terveys- ja kuntoutusala
          ammattilainen. Koulutus kestää 3,5 vuotta. Jalkaterapeuttina
          osaamisalani ovat alaraajat.
        </div>
        <div className="text-lg">
          Jalkaterapeutti eroa tavallisesta jalkojenhoidosta koulutuksen
          laajuudesta, osaamisen laajuus ulottuu iho- ja kynsiongelmien lisäksi
          myös erilaisiin apuvälineisiin, kuten silikoniortooseihin ja
          tukipohjallisiin.
        </div>
        <div className="text-lg">
          Jalkaterapeuttina edistän sekä ylläpidän jalkaterveyttä. Jos
          jaloissasi on ongelmia, autan lievittämään ja poistamaan ongelman.
          Ymmärrän, että jokaisen asiakkaan tarpeet ovat yksilöllisiä, ja siksi
          jokainen hoito räätälöidään juuri sinulle sopivaksi.
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
