export default function ServicesPage() {
  return (
    <main className="container mx-auto py-16 px-4">
      <section className="text-center mb-12 text-muted-foreground">
        <h1 className="text-4xl font-bold mb-4 text-black">Toimitusehdot</h1>
        <p className="mb-6 text-lg">Tutustu toimitusehtojemme yksityiskohtiin alla.</p>
        
        <div className="max-w-3xl mx-auto text-left space-y-8">
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-3 text-black">Peruutusehdot</h2>
            <p>
              Peruutus tulee tehdä vähintään 24 tuntia ennen vastaanottoajan alkua puhelimitse.
              Mikäli varattua palvelua ei peruta peruutusajan puitteissa, veloitetaan 40,00 €.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-3 text-black">Takuu ja palautusoikeus</h2>
            <p>
              Yksilöllisesti valmistettavilla tuotteilla on 3kk takuu, jonka aikana muokkauksia
              voidaan tehdä veloituksetta. Yksilöllisesti valmistettavilla tuotteilla ei ole
              vaihto- eikä palautusoikeutta.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-3 text-black">Hinnat</h2>
            <p>
              Pidätämme oikeuden hinnanmuutoksiin.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}