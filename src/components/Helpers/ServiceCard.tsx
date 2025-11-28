import React from "react";

import {
    BugAntIcon,
    CodeBracketIcon,
    CommandLineIcon,
    CursorArrowRaysIcon,
    RocketLaunchIcon,
    ServerIcon,
} from "@heroicons/react/16/solid";

interface Props {
    title: string;
    num: string;
    description: string;
    note: string;
}

const iconMapping = {
    "01": CommandLineIcon,
    "02": ServerIcon,
    "03": CodeBracketIcon,
    "04": CursorArrowRaysIcon,
    "05": RocketLaunchIcon,
    "06": BugAntIcon,
};

const ServiceCard = ({ title, num, description, note }: Props) => {
    const IconComponent =
        (iconMapping as Record<string, React.ElementType>)[num] || CommandLineIcon;

    return (
        <div
            className="custom__service relative z-[100] h-full transform rounded-2xl bg-black p-6 text-center shadow-md"
            data-aos="zoom-in"
        >
            <IconComponent className="ralative z-[1] mx-auto h-[5rem] w-[5rem] text-yellow-400" />
            <h1 className="relative z-[1] mt-[1rem] text-[25px] text-white">{title}</h1>
            <p className="mt-[0.8rem] text-[15px] text-white opacity-60">{description}</p>
            <p className="mt-[0.8rem] text-[11px] text-yellow-300 opacity-60">{note}</p>
            <p className="absolute right-4 top-3 font-bold text-[q.6rem] text-white">{num}</p>
        </div>
    );
};

export default ServiceCard;
