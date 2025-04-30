export default function ServicesPage() {
  return (
    <main className="container mx-auto py-16 px-4">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Tietosuojaseloste</h1>
        <p className="text-lg mb-6 text-muted-foreground">
          Tämä on Jalkaterapia Pinja verkkosivujen EU:n yleisen tietosuoja-asetuksen (GDPR) mukainen tietosuojaseloste.
        </p>

        <div className="max-w-3xl mx-auto text-left space-y-8 text-muted-foreground">
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-3 text-black">1. Rekisterinpitäjä</h3>
            <p>
              <strong>Nimi:</strong> Jalkaterapia Pinja<br />
              <strong>Y-tunnus:</strong> 3453859-7<br />
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-3 text-black">2. Yhteystiedot rekisteriä koskevissa asioissa</h3>
            <p>
              <strong>Sähköposti:</strong> jalkaterapia.pinja@gmail.com<br />
              <strong>Puhelinnumero:</strong> (+358) 45-103 2606 <br />
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-3 text-black">3. Rekisterin nimi</h3>
            <p>Ajanvarauslomakkeen asiakasrekisteri</p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-3 text-black">4. Henkilötietojen käsittelyn tarkoitus ja käsittelyperuste</h3>
            <p>
              Henkilötietoja kerätään ainoastaan ajanvarauspyyntöihin vastaamista ja
              mahdollisesti myöhemmin tehtävää laskutusta varten. Tietoja ei käytetä
              markkinointiin eikä luovuteta kolmansille osapuolille ilman suostumusta
              tai lakiin perustuvaa velvoitetta.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-3 text-black">5. Rekisterin tietosisältö</h3>
            <p>Kerättävät tiedot voivat sisältää seuraavat:</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Nimi</li>
              <li>Sähköpostiosoite</li>
              <li>Puhelinnumero</li>
              <li>Ajanvaraukseen liittyvät tiedot</li>
              <li>Mahdollinen laskutusosoite</li>
            </ul>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-3 text-black">6. Tietojen säännönmukaiset luovutukset ja tietojen siirto EU:n tai ETA:n ulkopuolelle</h3>
            <p>
              Tietoja ei luovuteta säännönmukaisesti muille tahoille.
              Tietoja ei käsitellä EU:n tai ETA:n ulkopuolella.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-3 text-black">7. Rekisterin suojauksen periaatteet</h3>
            <p>
              Rekisterinpitäjä huolehtii, että tietojen käsittelyssä noudatetaan huolellisuutta ja että tietoturvallisuudesta huolehditaan asiallisesti niin fyysisellä, kuin digitaalisella tasolla.
              Tietoihin pääsy on mahdollistettu käyttöoikeushallinnan keinoin vain henkilöille, joille se on tehtävien vuoksi välttämätöntä.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-3 text-black">8. Tarkastusoikeus ja oikeus vaatia tiedon korjaamista</h3>
            <p>
              Rekisteröidyllä on oikeus tarkistaa rekisteriin tallennetut tietonsa ja vaatia mahdollisen virheellisen tiedon korjaamista tai puutteellisen tiedon täydentämistä.
              Mikäli rekisteröity haluaa tarkistaa hänestä tallennetut tiedot tai vaatia niihin oikaisua, pyyntö tulee lähettää kirjallisesti rekisterinpitäjälle. Rekisterinpitäjä voi pyytää tarvittaessa pyynnön esittäjää todistamaan henkilöllisyytensä.
              Rekisterinpitäjä vastaa asiakkaalle EU:n tietosuoja-asetuksessa säädetyssä ajassa (pääsääntöisesti kuukauden kuluessa).

            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-3 text-black">9. Muut henkilötietojen käsittelyyn liittyvät oikeudet</h3>
            <p>
              Rekisterissä olevalla henkilöllä on oikeus pyytää häntä koskevien henkilötietojen poistamiseen rekisteristä (”oikeus tulla unohdetuksi”).
              Niin ikään rekisteröidyillä on muut EU:n yleisen tietosuoja-asetuksen mukaiset oikeudet kuten henkilötietojen käsittelyn rajoittaminen tietyissä tilanteissa.
              Pyynnöt tulee lähettää kirjallisesti rekisterinpitäjälle. Rekisterinpitäjä voi pyytää tarvittaessa pyynnön esittäjää todistamaan henkilöllisyytensä.
              Rekisterinpitäjä vastaa asiakkaalle EU:n tietosuoja-asetuksessa säädetyssä ajassa (pääsääntöisesti kuukauden kuluessa).
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}