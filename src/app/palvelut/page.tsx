"use client";

import { useState } from "react";
import { ServiceCard, ServiceModal } from "@/components";
import { services } from "@/constants/data";
import { Service } from "@/types";

export default function ServicesPage() {
	const [openService, setOpenService] = useState<Service | null>(null);

	return (
		<main>
			<section>
				<h1>Palvelut</h1>
				<p className="text-lg text-muted-foreground">
					Tarjoan laajan valikoiman jalkaterveyspalveluita pitääkseni sinut
					liikkeessä.
				</p>
			</section>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{services.map((service, index) => (
					<ServiceCard
						key={index}
						service={service}
						onLearnMore={setOpenService}
					/>
				))}
			</div>
			<ServiceModal
				service={openService}
				isOpen={!!openService}
				onClose={() => setOpenService(null)}
			/>
		</main>
	);
}
