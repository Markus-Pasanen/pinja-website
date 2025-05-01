import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="container mx-auto py-16 px-4 text-muted-foreground">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-black">Minusta</h1>
        <p className="text-lg">
          Opi lisää taustastani ja asiantuntemuksestani.
        </p>
      </section>
      <section className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="pinja_2025-84.jpg"
              alt="Pinja Pasanen"
              className="w-full h-96 md:h-full rounded-lg shadow-md object-cover object-top"
            />
          </div>
          <div className="flex flex-col justify-between gap-8">

            <div className="bg-card p-6 rounded-lg shadow-sm h-full">
              <h3 className="text-2xl font-semibold mb-2 text-black">
                Pinja Pasanen
              </h3>
              <p className="pb-4">
                Olen kolmannen vuoden jalkaterapeuttiopiskelija Kaakkois-Suomen ammattikorkeakoulussa (XAMK) Savonlinnassa.
                Taustaltani olen lähihoitaja, ja vuosien työskentely hoitoalalla sytytti intohimoni jalkojen hyvinvointiin ja terveyden edistämiseen.</p>
              <p>
                Tämä innostus johdatti minut jalkaterapian korkeakouluopintoihin.
                Jalkaterapeutti on terveydenhuollon ammattilainen, joka on suorittanut 3,5-vuotisen korkeakoulututkinnon.
                Erikoisosaamiseni keskittyy alaraajojen terveyteen ja hyvinvointiin.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm h-full">
              <h3 className="text-2xl font-semibold mb-2 text-black">Missio</h3>
              <p className="pb-4">
                Jalkaterapeuttina tarjoan kokonaisvaltaista hoitoa, joka erottuu tavallisesta jalkojen hoidosta koulutukseni syvyyden ja monipuolisuuden ansiosta.
                Osaamiseni kattaa iho- ja kynsiongelmien hoidon sekä yksilölliset apuvälineet, kuten silikoniortoosit ja tukipohjalliset.
              </p>
              <p>
                Tavoitteenani on edistää ja ylläpitää jalkojesi terveyttä ennaltaehkäisevästi sekä ratkaista mahdolliset ongelmat tehokkaasti.
                Jokainen asiakas on ainutlaatuinen, joten räätälöin hoidot juuri sinun tarpeidesi mukaisiksi.
              </p>
            </div>




            <div className="p-4 rounded-lg shadow-md bg-card h-full">
              <h3 className="text-2xl font-semibold mb-2 text-black">Koulutus</h3>
              <p className="text-muted-foreground">
                <strong>Jalkaterapeutti (AMK)</strong>
                <br />
                Kaakkois-Suomen ammattikorkeakoulu - 2025
              </p>
              <p className="text-muted-foreground">
                <strong>Lähihoitaja</strong>
                <br />
                Savon ammatti- ja aikuisopisto - 2020
              </p>
            </div>


            {/* Certifications */}
            <div className="p-4 rounded-lg shadow-md bg-card h-full">
              <h3 className="text-2xl font-semibold mb-2 text-black">Sertifikaatit</h3>
              <p className="text-muted-foreground">
                <strong>Fast&Furious sugaring (level 1)</strong>
                <br />
                MAKEA pro - 2025
              </p>
            </div>
            <Link href="/yhteystiedot">
            <button className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-hover transition duration-300 w-full">
              Varaa aika
            </button></Link>
          </div>

        </div>
      </section>
    </main>
  );
}
