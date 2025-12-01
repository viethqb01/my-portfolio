import Image from "next/image";
import React from "react";

import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

interface Props {
    title: string;
    description: string;
    image: string;
    techs: string[];
    link: string;
    position?: string;
}

const ProjectCard = ({ image, title, description, techs, link, position }: Props) => {
    return (
        <div className="mx-auto grid w-[80%] grid-cols-1 items-start gap-10 pt-[5rem] lg:grid-cols-2">
            <div
                data-aos="fade-up"
                className="relative transform cursor-pointer items-center rounded-xl bg-gray-800 p-4 shadow-md transition-all duration-200 hover:rotate-6"
            >
                <Image
                    src={image}
                    alt={title}
                    width={550}
                    height={300}
                    className="rounded-xl object-contain"
                />
            </div>

            <div data-aos="fade-up">
                <h1 data-aos="fade-up" data-aos-delay="100" className="text-[25px] text-white">
                    {title}
                </h1>
                <p
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="mt-[1rem] text-[15px] text-white opacity-65"
                >
                    {description}
                    <a
                        href={link}
                        className="mt-[1rem] flex cursor-pointer text-[14px] text-yellow-400"
                    >
                        <ArrowLongRightIcon className="h-6 w-6 text-yellow-500" />
                        Learn more
                    </a>
                </p>
                <h4
                    data-aos="fade-up"
                    data-aos-delay="150"
                    className="mt-[1rem] text-[22px] text-white"
                >
                    Technical
                </h4>
                <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="mt-[1.3rem] grid grid-cols-2 gap-[1rem] sm:grid-cols-5 xl:grid-cols-6"
                >
                    {techs.map((tech, index) => (
                        <div
                            key={index}
                            className="flex min-h-[48px] cursor-pointer items-center justify-center rounded-lg bg-[#202f4a] px-1 py-1 text-center font-semibold transition-all duration-300 hover:mt-[-5px]"
                        >
                            <Image
                                src={tech}
                                alt="php"
                                width={40}
                                height={40}
                                className="mx-auto object-cover"
                            />
                        </div>
                    ))}
                </div>
                <h4
                    data-aos="fade-up"
                    data-aos-delay="250"
                    className="mt-[1rem] text-[22px] text-white"
                >
                    Position
                </h4>
                <p
                    data-aos="fade-up"
                    data-aos-delay="250"
                    className="mt-[0.5rem] cursor-pointer text-yellow-400"
                >
                    {position}
                </p>
            </div>
        </div>
    );
};

export default ProjectCard;
