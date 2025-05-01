export default function ServicesPage() {
  return (
    <main className="container mx-auto py-16 px-4 text-muted-foreground">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-black">Maksutavat</h1>
        <p className="mb-6 text-lg">
          Tarjoamme asiakkaillemme joustavat maksuvaihtoehdot palveluihimme.
        </p>
        
        <div className="max-w-3xl mx-auto text-left space-y-8">
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-3 text-black">Käteinen</h2>
            <p>Voit maksaa palvelumme käteisellä heti palvelun suorittamisen yhteydessä.</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-3 text-black">Lasku</h2>
            <p>Tarjoamme myös laskutusmahdollisuuden. Laskun maksuaika on 14 päivää laskun päiväyksestä.</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Lähetämme laskun palvelun suorittamisen jälkeen</li>
              <li>Maksuehto: 14 päivää netto</li>
              <li>Laskutamme ilman erillistä laskutuslisää</li>
            </ul>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-3 text-black">ePassi</h2>
            <p>ePassi on digitaalinen maksuväline, joka mahdollistaa joustavan maksamisen palveluista.</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Voit maksaa ePassilla palvelumme suoraan käynnin aikana</li>
              <li>Voit myös maksaa ePassilla etukäteen ennen palvelua</li>
            </ul>
          </div>
          
          <p className="mt-6 text-center italic text-muted-foreground">
            Jos sinulla on kysyttävää maksutavoista, olethan yhteydessä minuun puhelimitse tai sähköpostitse.
          </p>
        </div>
      </section>
    </main>
  );
}
