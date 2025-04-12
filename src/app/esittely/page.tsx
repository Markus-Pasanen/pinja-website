import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="container mx-auto py-16 px-4">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Minusta</h1>
        <p className="text-lg text-muted-foreground">
          Opi lisää taustastani ja asiantuntemuksestani.
        </p>
      </section>
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Professional Headshot */}
          <div>
            <img
              src="https://picsum.photos/400/500" // Placeholder image
              alt="Tohtori Matti Meikäläinen"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Introduction */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Pinja Pasanen
            </h2>
            <p className="text-muted-foreground mb-6">
              Olen kolmannen vuoden jalkaterapeuttiopiskelija Kaakkois-Suomen ammattikorkeakoulussa (XAMK) Savonlinnassa.
              Taustaltani olen lähihoitaja, ja vuosien työskentely hoitoalalla sytytti intohimoni jalkojen hyvinvointiin ja terveyden edistämiseen.
              Tämä innostus johdatti minut jalkaterapian korkeakouluopintoihin.
              Jalkaterapeutti on terveydenhuollon ammattilainen, joka on suorittanut 3,5-vuotisen korkeakoulututkinnon.
              Erikoisosaamiseni keskittyy alaraajojen terveyteen ja hyvinvointiin.
            </p>
            <h3 className="text-2xl font-semibold mb-2">Missio</h3>
            <p className="text-muted-foreground mb-6">
              Jalkaterapeuttina tarjoan kokonaisvaltaista hoitoa, joka erottuu tavallisesta jalkojen hoidosta koulutukseni syvyyden ja monipuolisuuden ansiosta.
              Osaamiseni kattaa iho- ja kynsiongelmien hoidon sekä yksilölliset apuvälineet, kuten silikoniortoosit ja tukipohjalliset.
              Tavoitteenani on edistää ja ylläpitää jalkojesi terveyttä ennaltaehkäisevästi sekä ratkaista mahdolliset ongelmat tehokkaasti.
              Jokainen asiakas on ainutlaatuinen, joten räätälöin hoidot juuri sinun tarpeidesi mukaisiksi.
            </p>
            <button className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-hover transition duration-300">
              <Link href="/yhteystiedot">Varaa aika</Link>
            </button>
          </div>
        </div>
      </section>
      {/* CV Section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
          {/* Education */}
          <div className="p-4 rounded-lg shadow-md bg-card">
            <h3 className="text-xl font-semibold mb-2">Koulutus</h3>
            <p className="text-muted-foreground">
              <strong>Jalkaterapeutti (AMK)</strong>
              <br />
              XAMK - 2025
            </p>
            <p className="text-muted-foreground">
              <strong>Lähihoitaja (Vanhustenhoito)</strong>
              <br />
              Savonia - 2015
            </p>
          </div>

          {/* Experience */}
          <div className="p-4 rounded-lg shadow-md bg-card">
            <h3 className="text-xl font-semibold mb-2">Kokemus</h3>
            <p className="text-muted-foreground">
              <strong>Jalkaterapeutti ja Omistaja</strong>
              <br />
              Toiminimi - Nykyinen
            </p>
            <p className="text-muted-foreground">
              <strong>Kotihoito</strong>
              <br />
              Kotipalvelu verenpisara - Nykyinen
            </p>
            <p className="text-muted-foreground">
              <strong>Kotihoito</strong>
              <br />
              Varkauden kaupunki - Nykyinen
            </p>
          </div>

          {/* Certifications */}
          <div className="p-4 rounded-lg shadow-md bg-card">
            <h3 className="text-xl font-semibold mb-2">Sertifikaatit</h3>
            <p className="text-muted-foreground">
              <strong>Fast&Furious sugaring (level 1)</strong>
              <br />
              MAKEA pro - 2025
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
