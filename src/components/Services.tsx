import React from "react";
import ServiceCard from "./Helpers/ServiceCard";

const Services = () => {
	const serviceCard = [
		{
			title: 'PHP',
			num: '01',
			description: 'Php is my first language and major. I have been doing php since I was in school and doing internships until now.',
			note: 'Background: Payment Gateway, E-wallet, E-learning, Software Management'
		},
		{
			title: 'Golang',
			num: '02',
			description: 'Golang is the next language I am learning and working on.',
			note: 'Background: Payment Link, E-wallet, SmartPOS'

		},
		{
			title: 'React',
			num: '03',
			description: 'Besides Backend, I also love Frontend. React is also the main language in my work.',
			note: 'Background: Payment Gateway, Payment Link, CMS'

		},
		{
			title: 'Nextjs',
			num: '04',
			description: 'NextJS is an open source framework built on top of React, allowing us to build super fast and user-friendly static websites.',
			note: 'Background: New site, My Pofolio'

		},
		{
			title: 'Vuejs',
			num: '05',
			description: 'Vuejs is also a very popular farmeword, I have also done some big projects on it.',
			note: 'Background: Building Management VTV, E-learning'

		},
		{
			title: 'Bug Fixing',
			num: '06',
			description: 'During the working process, Fixbug and maintain systems is also an indispensable part of dev.',
			note: 'Background: Payment Gateway, E-wallet, Payment Link'

		},
	];
	return (
		<div id="blog-services" className="pt-[5rem] pb-[3rem] bg-[#0b0c13]">
			<div className="text-center">
				<p className="heading__mini">Popular Service</p>
				<h1 className="heading__primary">
					My Special <span className="text-yellow-300">Service</span> For You
				</h1>
			</div>

			<div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
				{
					serviceCard.map((serviceCard, index) => (
						<div className="h-full" key={index}>
							<ServiceCard title={serviceCard.title} num={serviceCard.num} description={serviceCard.description} note={serviceCard.note} />
						</div>
					))
				}
			</div>
		</div>
	);
};

export default Services;
