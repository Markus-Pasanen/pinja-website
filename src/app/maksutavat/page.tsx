import Card from "@/components/shared/Card";

export default function ServicesPage() {
  return (
    <main>
      <section>
        <h1>Maksutavat</h1>
        <p>Tarjoamme asiakkaillemme joustavat maksuvaihtoehdot palveluihimme.</p>
        <div>
          <Card>
            <h2>Käteinen</h2>
            <p>Voit maksaa palvelumme käteisellä heti palvelun suorittamisen yhteydessä.</p>
          </Card>
          <Card>
            <h2>Korttimaksu</h2>
            <p>Hyväksymme yleisimmät pankki- ja luottokortit.</p>
          </Card>
          <Card>
            <h2>Lahjakortti</h2>
            <p>Voit maksaa palvelun myös lahjakortilla.</p>
          </Card>
        </div>
        <p>
          Jos sinulla on kysyttävää maksutavoista, olethan yhteydessä minuun puhelimitse tai sähköpostitse.
        </p>
      </section>
    </main>
  );
}
