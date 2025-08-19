import Card from "@/components/shared/Card";

export default function ServicesPage() {
  return (
    <main>
      <section>
        <h1>Maksutavat</h1>
        <p>Tarjoamme asiakkaillemme joustavat maksuvaihtoehdot palveluihimme.</p>
        <div className="max-w-3xl mx-auto text-left space-y-8 my-4">
          <Card>
            <h2>Käteinen</h2>
            <p>Voit maksaa palvelumme käteisellä heti palvelun suorittamisen yhteydessä.</p>
          </Card>
          <Card>
            <h2>Lasku</h2>
            <p>Tarjoamme myös laskutusmahdollisuuden. Laskun maksuaika on 14 päivää laskun päiväyksestä.</p>
            <ul>
              <li>Lähetämme laskun palvelun suorittamisen jälkeen</li>
              <li>Maksuehto: 14 päivää netto</li>
              <li>Laskutamme ilman erillistä laskutuslisää</li>
            </ul>
          </Card>
          <Card>
            <h2>ePassi</h2>
            <p>ePassi on digitaalinen maksuväline, joka mahdollistaa joustavan maksamisen palveluista.</p>
            <ul>
              <li>Voit maksaa ePassilla palvelumme suoraan käynnin aikana</li>
              <li>Voit myös maksaa ePassilla etukäteen ennen palvelua</li>
            </ul>
          </Card>
          <Card>
            <h2>Smartum</h2>
            <p>Smartum on liikunta- ja kulttuurietujen maksuväline, jota voit käyttää palveluidemme maksamiseen joustavasti.</p>
            <ul>
              <li>Voit maksaa Smartumilla suoraan palvelukäynnin yhteydessä</li>
              <li>Voit hyödyntää Smartumia myös etukäteen ennen palvelua</li>
            </ul>
          </Card>
        </div>
        <p className="text-center italic">
          Jos sinulla on kysyttävää maksutavoista, olethan yhteydessä minuun puhelimitse tai sähköpostitse.
        </p>
      </section>
    </main>
  );
}
