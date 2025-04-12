"use client";

const posts = [
  {
    title: "Kuinka Valita Oikeat Kengät",
    excerpt:
      "Oikeiden kenkien valinta voi vaikuttaa merkittävästi jalkojesi terveyteen. Opi, mitä etsiä tästä kattavasta oppaasta.",
    thumbnail: "https://picsum.photos/400/300",
    link: "/blog/kuinka-valita-oikeat-kengat",
    date: "2023-10-01",
  },
  {
    title: "Kantapään Kivun Ehkäisy",
    excerpt:
      "Kantapään kipu on yleinen ongelma, mutta on olemassa keinoja sen ehkäisemiseksi. Tutustu parhaisiin vinkkeihimme.",
    thumbnail: "https://picsum.photos/400/300",
    link: "/blog/kantapaan-kivun-ehkaisy",
    date: "2023-10-02",
  },
  {
    title: "Säännöllisten Jalkatutkimusten Tärkeys",
    excerpt:
      "Säännölliset jalkatutkimukset ovat ratkaisevan tärkeitä jalkojen terveyden ylläpitämiseksi, erityisesti diabeetikoille. Ota selvää, miksi.",
    thumbnail: "https://picsum.photos/400/300",
    link: "/blog/saannollisten-jalkatutkimusten-tarkeys",
    date: "2023-10-03",
  },
  {
    title: "Uudet Hoidot Plantaarifaskiitille",
    excerpt:
      "Tutustu uusimpiin edistysaskeliin plantaarifaskiitin hoidossa ja selvitä, mitkä menetelmät ovat tehokkaimpia.",
    thumbnail: "https://picsum.photos/400/301",
    link: "/blog/uudet-hoidot-plantaarifaskiitille",
    date: "2023-10-04",
  },
  {
    title: "Sisäänkasvaneiden Varpaankynsien Ymmärtäminen ja Hallinta",
    excerpt:
      "Sisäänkasvaneet varpaankynnet voivat olla kivuliaita ja johtaa tulehdukseen. Opi ehkäisemään ja hallitsemaan niitä tehokkaasti.",
    thumbnail: "https://picsum.photos/400/302",
    link: "/blog/sisäänkasvaneiden-varpaankynsien-ymmartaminen",
    date: "2023-10-05",
  },
  {
    title: "Jalkojen Hoitovinkkejä Seniorikansalaisille",
    excerpt:
      "Ikääntyessämme jalkamme vaativat erityistä huomiota. Tutustu tärkeisiin jalkojen hoitovinkkeihin, joiden avulla seniorit voivat ylläpitää terveitä jalkoja.",
    thumbnail: "https://picsum.photos/400/303",
    link: "/blog/jalkojen-hoitovinkkeja-seniorikansalaisille",
    date: "2023-10-06",
  },
];

export default function BlogPage() {
  return (
    <main className="container mx-auto py-16 px-4">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Blogi</h1>
        <p className="text-lg text-muted-foreground">
          Pysy ajan tasalla uusimmista artikkeleistani jalkojen terveydestä ja hoidosta.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md bg-card overflow-hidden relative flex flex-col justify-between"
          >
            <div className="shadow-lg absolute left-0 top-0 rounded-br-lg py-2 px-4 bg-primary text-card z-10 font-semibold">
              {post.date}
            </div>
            <div>
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-48 object-cover sepia-[.25] brightness-75"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground">
                  {post.excerpt}
                </p>
              </div>
            </div>
            <div className="p-4">
              <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-hover transition duration-300 w-full font-semibold">
                <a href={post.link} className="w-full text-center">
                  Lue Lisää
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
