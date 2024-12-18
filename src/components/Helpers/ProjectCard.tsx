import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import Image from 'next/image';

interface Props {
	title: string;
	description: string;
	image: string;
	techs: string[];
	link: string
}

const ProjectCard = ({ image, title, description, techs, link }: Props) => {
	return (
		<div className="grid w-[80%] mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-10 items-start">
			<div data-aos="fade-up"  className="p-4 rounded-xl relative cursor-pointer hover:rotate-6 transform transition-all duration-200 bg-gray-800 shadow-md items-center">
				<Image
					src={image}
					alt={title}
					width={550}
					height={300}
					className="object-contain rounded-xl"
				/>
			</div>

			<div data-aos="fade-up" >
				<h1 data-aos="fade-up" data-aos-delay="100" className="text-[25px] text-white">{title}</h1>
				<p data-aos="fade-up" data-aos-delay="100" className="text-white opacity-65 text-[15px] mt-[1rem]">
					{description}
					<a href={link} className="text-yellow-400 text-[14px] mt-[1rem] cursor-pointer flex">
						<ArrowLongRightIcon className="h-6 w-6 text-yellow-500" />Learn more
					</a>
				</p>
				<h4 data-aos="fade-up" data-aos-delay="150"  className="mt-[1rem] text-white text-[22px]">Technical</h4>
				<div data-aos="fade-up" data-aos-delay="200"  className="mt-[1.3rem] grid grid-cols-2 sm:grid-cols-5 xl:grid-cols-6 gap-[1rem]">
					{
						techs.map((tech, index) => (
							<div key={index} className="px-1 py-1 bg-[#202f4a] min-h-[48px] hover:mt-[-5px] rounded-lg text-center font-semibold cursor-pointer transition-all duration-300 flex justify-center items-center">
								<Image src={tech} alt="php"  width={40} height={40} className="object-cover mx-auto"/>
							</div>
						))
					}
				</div>
				<h4 data-aos="fade-up" data-aos-delay="250" className="text-white text-[22px] mt-[1rem]">Position</h4>
				<p data-aos="fade-up" data-aos-delay="250" className="text-yellow-400 cursor-pointer mt-[0.5rem]">Fullstack Developer</p>
			</div>
		</div>
	);
};

export default ProjectCard;
