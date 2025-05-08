import Link from "next/link";
import Card from "@/components/shared/Card";

export default function AboutPage() {
  return (
    <main>
      <section>
        <h1>Minusta</h1>
        <p>Opi lisää taustastani ja asiantuntemuksestani.</p>
      </section>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="/images/pinja_2025-84.jpg"
              alt="Pinja Pasanen"
              className="w-full h-96 md:h-full rounded-lg shadow-md object-cover object-top"
            />
          </div>
          <div className="flex flex-col justify-between gap-8">
            <Card>
              <h3>Pinja Pasanen</h3>
              <p>
                Olen kolmannen vuoden jalkaterapeuttiopiskelija Kaakkois-Suomen ammattikorkeakoulussa (XAMK) Savonlinnassa.
                Taustaltani olen lähihoitaja, ja vuosien työskentely hoitoalalla sytytti intohimoni jalkojen hyvinvointiin ja terveyden edistämiseen.
              </p>
              <p>
                Tämä innostus johdatti minut jalkaterapian korkeakouluopintoihin.
                Jalkaterapeutti on terveydenhuollon ammattilainen, joka on suorittanut 3,5-vuotisen korkeakoulututkinnon.
                Erikoisosaamiseni keskittyy alaraajojen terveyteen ja hyvinvointiin.
              </p>
            </Card>
            <Card>
              <h3>Missio</h3>
              <p>
                Jalkaterapeuttina tarjoan kokonaisvaltaista hoitoa, joka erottuu tavallisesta jalkojen hoidosta koulutukseni syvyyden ja monipuolisuuden ansiosta.
                Osaamiseni kattaa iho- ja kynsiongelmien hoidon sekä yksilölliset apuvälineet, kuten silikoniortoosit ja tukipohjalliset.
              </p>
              <p>
                Tavoitteenani on edistää ja ylläpitää jalkojesi terveyttä ennaltaehkäisevästi sekä ratkaista mahdolliset ongelmat tehokkaasti.
                Jokainen asiakas on ainutlaatuinen, joten räätälöin hoidot juuri sinun tarpeidesi mukaisiksi.
              </p>
            </Card>
            <Card>
              <h3>Koulutus</h3>
              <p>
                <strong>Jalkaterapeutti (AMK)</strong>
                <br />
                Kaakkois-Suomen ammattikorkeakoulu - 2025
              </p>
              <p>
                <strong>Lähihoitaja</strong>
                <br />
                Savon ammatti- ja aikuisopisto - 2020
              </p>
            </Card>
            <Card>
              <h3>Sertifikaatit</h3>
              <p>
                <strong>Fast&Furious sugaring (level 1)</strong>
                <br />
                MAKEA pro - 2025
              </p>
            </Card>
            <Link href="/yhteystiedot">
              <button className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-hover transition duration-300 w-full">
                Varaa aika
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
