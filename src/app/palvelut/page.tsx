"use client";

import { Clock, Wallet } from "lucide-react";
import { useState } from "react";
import Modal from "@/components/shared/Modal";
import Image from "next/image";

const services = [
	{
		id: "Kliininen jalkahoito",
		title: "Kliininen jalkahoito",
		description:
			"Kliininen jalkahoito on terveydenhoitoa, jossa hoidetaan jalkojen iho- ja kynsiongelmia sekä ehkäistään jalkavaivoja. Ihon rasvaushieronta ja lampaanvillat varpaiden väliin. Se on erityisen tärkeää riskiryhmille, kuten diabeetikoille, ja sen tavoitteena on ylläpitää jalkojen terveyttä.",
		image: "pinja_2025-52.jpg",
		link: "kliininen-jalkahoito",
		price: "81 €",
		duration: "90 minuuttia",
		type: "terapia",
	},
	{
		id: "Jalkaterapia",
		title: "Jalkaterapia",
		description:
			"Yksilöllistä ja asiantuntevaa jalkaterapiaa, joka tuo helpotusta vaivoihin ja edistää kokonaisvaltaista hyvinvointia. Hoidoissani yhdistyvät puhtaus, nykyaikaiset menetelmät ja lämmin, asiakaslähtöinen kohtaaminen. Olipa kyseessä kynsiongelmat tai jalkakipu, saat juuri sinun tarpeisiisi räätälöidyn hoidon turvallisessa ja rauhallisessa ympäristössä.",
		image: "pinja_2025-38.jpg",
		link: "kliininen-jalkahoito",
		price: "52 €",
		duration: "60 minuuttia",
		type: "terapia",
	},
	{
		id: "Syylä",
		title: "Syylänhoito",
		description:
			"Verrutop-syylähoito on tehokas ja kivuton tapa päästä eroon pitkäaikaisista tai kivuliaista syylistä. Verrutopin vaikuttava aine Nitrizinc Complex vähentää syyläkudosta, ja hoito toteutetaan yksilöllisesti parhaimman lopputuloksen saavuttamiseksi. Pitkään olleet tai syvälle ulottuvat syylät vaativat yleensä useamman käsittelykerran, ja uusintahoito tehdään 7–14 vuorokauden välein. Hoidon tueksi saat selkeät kotihoito-ohjeet – erityisesti desinfiointi on tärkeää syylän kuivumisen edistämiseksi. Hoitoa ei suositella alle 6-vuotiaille, raskauden tai imetyksen aikana, tulehtuneelle iholle, kasvoihin tai muiden paikallishoitojen kanssa.",
		image: "syyla.jpg",
		link: "kliininen-jalkahoito",
		price: "53 €",
		duration: "45 - 60 minuuttia",
		type: "terapia",
	},
	{
		id: "Kynsien lyhennys",
		title: "Kynsien lyhennys",
		description:
			"Kynsien lyhennys on toimenpide, jossa kynnet leikataan sopivaan pituuteen ja muotoon. Se auttaa ylläpitämään kynsien terveyttä ja ehkäisee esimerkiksi sisäänkasvaneita kynsiä.",
		image: "pinja_2025-45.jpg",
		link: "/palvelut/kynsien-lyhennys",
		price: "48 €",
		duration: "30 minuuttia",
		type: "terapia",
	},
	{
		id: "Kynnenoikaisu",
		title: "Kynnenoikaisu",
		description:
			"Podofix-menetelmä, joka soveltuu lähes kaikkien epämuodostuneille kynsille, kuten sisäänkasvaneille kynsille sekä taipuneiden kynsien hoitoon. Podofix-hoito uusitaan 2vk-2kk välein, kunnes haluttu tulos on saavutettu.",
		image: "pinja_2025-76.jpg",
		link: "/palvelut/kynsien-lyhennys",
		price: "58 € + käytetty aika",
		duration: "45 minuuttia",
		type: "terapia",
	},
	{
		id: "Silikoniortoosi",
		title: "Silikoniortoosi",
		description:
			"Silikoniortoosit ovat yksilöllisesti muotoiltuja silikonista valmistettuja tukia, joita käytetään jalkaterän virheasentojen korjaamiseen tai vaimentamaan painetta. Ne helpottavat kipua ja parantavat jalkojen asentoa, auttaen esimerkiksi vaivaisenluun tai vasaravarpaiden hoidossa.",
		image: "pinja_2025-5.jpg",
		link: "/palvelut/kynsien-lyhennys",
		price: "31 € per silikoni",
		duration: "30 minuuttia",
		type: "terapia",
	},
	{
		id: "Alaraajahieronta",
		title: "Alaraajahieronta (harjoittelija)",
		description:
			"Alaraajahieronta keskittyy reisien, säärien, nilkkojen ja jalkaterien alueelle. Hieronnassa käsitellään lihaksia ja pehmytkudoksia kokonaisvaltaisesti. Hoito lievittää lihaskireyksiä ja kiputiloja, erityisesti pohkeissa ja reisissä. Hieronta rentouttaa lihaksia, parantaa verenkiertoa ja tehostaa aineenvaihduntaa alaraajoissa. Se edistää palautumista rasituksesta ja tukee fyysisen hyvinvoinnin ylläpitämistä.",
		image: "pinja_2025-14.jpg",
		link: "/palvelut/kynsien-lyhennys",
		price: "48 €",
		duration: "90 minuuttia",
		type: "hieronta",
	},
	{
		id: "Sokerointi",
		title: "Sokerointi (harjoittelija)",
		description:
			"Sokerointi poistaa karvat hellävaraisesti, jättäen ihon sileäksi ja pehmeäksi viikoiksi. Samalla iho kuoriutuu kevyesti, mikä tekee siitä ihanteellisen vaihtoehdon myös herkälle iholle. Palvelun hinta ja kesto vaihtelevat sokeroitavan alueen mukaan. Vaihtoehtoina ovat kainaloiden, säärien ja reisien sokerointi.",
		image: "pinja_2025-20.jpg",
		link: "/palvelut/kynsien-lyhennys",
		price: "16 - 38 €",
		duration: "30 - 60 minuuttia",
		type: "sokerointi",
	},
	{
		id: "Lahjakortti",
		title: "Lahjakortti",
		description:
			"Jalkaterapia, hieronta tai sokerointi. Valitse lahjakorttiin juuri se hoito, jonka tiedät ilahduttavan. Täydellinen tapa muistaa ystävää, läheistä tai itseäsi!",
		image: "lahjakortti.jpg",
		link: "/palvelut/kynsien-lyhennys",
		price: "Avoin",
		duration: "palvelusta riippuen",
		type: "sokerointi",
	},
];

interface Service {
	id: string;
	title: string;
	description: string;
	image: string;
	link: string;
	price: string;
	duration: string;
	type: string;
}

export default function ServicesPage() {
	const [openService, setOpenService] = useState<Service | null>(null);

	return (
		<main>
			<section>
				<h1 className="">Palvelut</h1>
				<p className="text-lg text-muted-foreground">
					Tarjoan laajan valikoiman jalkaterveyspalveluita pitääkseni sinut
					liikkeessä.
				</p>
			</section>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{services.map((service: Service, index: number) => (
					<section
						id={service.id}
						key={index}
						className="rounded-lg shadow-md bg-card flex flex-col justify-between overflow-hidden text-left"
					>
						<div>
							<div>
								<Image
									src={"/images/" + service.image}
									alt={service.title}
									className="w-full h-48 brightness-75 object-cover object-[50%_35%]"
									width={500}
									height={500}
								/>
								<div className="p-4">
									<h3 className="text-xl font-semibold mb-2">
										{service.title}
									</h3>
									<p className="line-clamp-2">
										{service.description}
									</p>
									<button
										className="text-primary hover:underline mt-2 block p-0 bg-transparent border-none cursor-pointer"
										onClick={() => setOpenService(service)}
									>
										Lue lisää
									</button>
								</div>
							</div>
						</div>
						<div className="p-4">
							<div className="flex items-center pb-2">
								<Wallet className="h-4 w-4 mr-2 text-muted-foreground" />
								<p className="text-sm text-muted-foreground m-0">
									Hinta: {service.price}
								</p>
							</div>

							<div className="flex items-center">
								<Clock className="h-4 w-4 mr-2 text-muted-foreground" />
								<p className="text-sm m-0">
									Ajanvaraus: {service.duration}
								</p>
							</div>
						</div>
					</section>
				))}
			</div>
			<Modal isOpen={!!openService} onClose={() => setOpenService(null)}>
				{openService && (
					<div className="flex flex-col h-full">
						<div className="w-full" style={{ height: "400px" }}>
							<Image
								src={"/images/" + openService.image}
								alt={openService.title}
								className="w-full h-full rounded-t-lg object-cover object-top"
								style={{ display: "block", padding: 0, margin: 0 }}
								width={500}
								height={500}
							/>
						</div>
						<div className="p-6 flex-1 flex flex-col">
							<h2 className="text-2xl font-bold mb-2">
								{openService.title}
							</h2>
							<p className="mb-4">{openService.description}</p>
							<div className="flex items-center mb-2">
								<Wallet className="h-4 w-4 mr-2 text-muted-foreground" />
								<span className="text-sm">Hinta: {openService.price}</span>
							</div>
							<div className="flex items-center">
								<Clock className="h-4 w-4 mr-2 text-muted-foreground" />
								<span className="text-sm">
									Ajanvaraus: {openService.duration}
								</span>
							</div>
						</div>
					</div>
				)}
			</Modal>
		</main>
	);
}
