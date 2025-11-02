"use client";

import { Card } from "@/components";
import Link from 'next/link';

export default function HinnastoPage() {
	return (
		<main className="min-h-screen bg-background">
			<section>
				<h1>Hinnasto</h1>
			</section>
			<div className="flex flex-col gap-4 text-center">
				<h3 className="my-auto">Jalkaterapia</h3>
				<Link href='/palvelut'>
					<Card>
						<div className="flex justify-between">
							<p className="my-auto">Kliininen jalkahoito</p>
							<p className="my-auto">81€ / 90min</p>
						</div>
					</Card>
				</Link>
				<Link href='/palvelut'>
					<Card>
						<div className="flex justify-between">
							<p className="my-auto">Jalkaterapia</p>
							<p className="my-auto">52€ / 60min</p>
						</div>
					</Card>
				</Link>
				<Link href='/palvelut'>
					<Card>
						<div className="flex justify-between">
							<p className="my-auto">Kynnenoikaisu</p>
							<p className="my-auto">58€ / 45min</p>
						</div>
					</Card>
				</Link>
				<Link href='/palvelut'>
					<Card>
						<div className="flex justify-between">
							<p className="my-auto">Lympha Press</p>
							<p className="my-auto">48€ / 30min</p>
						</div>
					</Card>
				</Link>
				<Link href='/palvelut'>
					<Card>
						<div className="flex justify-between">
							<p className="my-auto">Syylänhoito</p>
							<p className="my-auto">53€ / hoito</p>
						</div>
					</Card>
				</Link>
				<Link href='/palvelut'>
					<Card>
						<div className="flex justify-between">
							<p className="my-auto">Kynsien lyhennys</p>
							<p className="my-auto">48€ / 30min</p>
						</div>
					</Card>
				</Link>
				<Link href='/palvelut'>
					<Card>
						<div className="flex justify-between">
							<p className="my-auto">Silikoniortoosi</p>
							<p className="my-auto">31€ / kappale</p>
						</div>
					</Card>
				</Link>
				<Link href='/palvelut'>
					<Card>
						<div className="flex justify-between">
							<p className="my-auto">Yksilölliset palapohjalliset</p>
							<p className="my-auto">160-180€</p>
						</div>
					</Card>
				</Link>
				<h3 className="my-auto pt-4">Hieronta</h3>
				<Link href='/palvelut'>
					<Card>
						<div className="flex justify-between">
							<p className="my-auto">Osahieronta (harjoittelija)</p>
							<p className="my-auto">36€ / 50min</p>
						</div>
					</Card>
				</Link>
				<Link href='/palvelut'>
					<Card>
						<div className="flex justify-between">
							<p className="my-auto">Kokohieronta (harjoittelija)</p>
							<p className="my-auto">57€ / 80min</p>
						</div>
					</Card>
				</Link>
				<h3 className="my-auto pt-4">Sokerointi</h3>
				<Link href='/palvelut'>
					<Card>
						<div className="flex justify-between">
							<p className="my-auto">Kainalot (harjoittelija)</p>
							<p className="my-auto">16€ / 30min</p>
						</div>
					</Card>
				</Link>
				<Link href='/palvelut'>
					<Card>
						<div className="flex justify-between">
							<p className="my-auto">Sääret (harjoittelija)</p>
							<p className="my-auto">28€ / 60min</p>
						</div>
					</Card>
				</Link>
				<h3 className="my-auto pt-4">Lahjakortti</h3>
				<Link href='/palvelut'>
					<Card>
						<div className="flex justify-between">
							<p className="my-auto">Lahjakortti</p>
							<p className="my-auto">avoin / palvelusta riippuen</p>
						</div>
					</Card>
				</Link>
			</div>
		</main>
	);
}