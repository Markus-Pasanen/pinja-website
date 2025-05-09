import Card from "@/components/shared/Card";

export default function ServicesPage() {
  return (
    <main>
      <section>
        <h1>Toimitusehdot</h1>
        <p>Tutustu toimitusehtojemme yksityiskohtiin alla.</p>
        <div className="max-w-3xl mx-auto text-left space-y-8 my-4">
          <Card>
            <h2>Peruutusehdot</h2>
            <p>
              Peruutus tulee tehdä vähintään 24 tuntia ennen vastaanottoajan alkua puhelimitse.
              Mikäli varattua palvelua ei peruta peruutusajan puitteissa, veloitetaan 40,00 €.
            </p>
          </Card>
          <Card>
            <h2>Takuu ja palautusoikeus</h2>
            <p>
              Yksilöllisesti valmistettavilla tuotteilla on 3kk takuu, jonka aikana muokkauksia
              voidaan tehdä veloituksetta. Yksilöllisesti valmistettavilla tuotteilla ei ole
              vaihto- eikä palautusoikeutta.
            </p>
          </Card>
          <Card>
            <h2>Hinnat</h2>
            <p>
              Pidätämme oikeuden hinnanmuutoksiin.
            </p>
          </Card>
        </div>
      </section>
    </main>
  );
}