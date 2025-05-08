import Card from "@/components/shared/Card";

export default function ServicesPage() {
  return (
    <main className="container mx-auto py-16 px-4 text-muted-foreground">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-black">Maksutavat</h1>
        <p className="mb-6 text-lg">
          Tarjoamme asiakkaillemme joustavat maksuvaihtoehdot palveluihimme.
        </p>
        
        <div className="max-w-3xl mx-auto text-left space-y-8">
          <Card>
            <h2 className="text-2xl font-semibold mb-3 text-black">Käteinen</h2>
            <p>Voit maksaa palvelumme käteisellä heti palvelun suorittamisen yhteydessä.</p>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold mb-3 text-black">Korttimaksu</h2>
            <p>Hyväksymme yleisimmät pankki- ja luottokortit.</p>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold mb-3 text-black">Lahjakortti</h2>
            <p>Voit maksaa palvelun myös lahjakortilla.</p>
          </Card>
        </div>
        
        <p className="mt-6 text-center italic text-muted-foreground">
          Jos sinulla on kysyttävää maksutavoista, olethan yhteydessä minuun puhelimitse tai sähköpostitse.
        </p>
      </section>
    </main>
  );
}
