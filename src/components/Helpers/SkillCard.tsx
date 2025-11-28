import Image from "next/image";
import React from "react";

interface Props {
    image: string;
    title: string;
}

const SkillCard = ({ image, title }: Props) => {
    return (
        <div
            data-aos="flip-left"
            className="flex min-h-[110px] cursor-pointer flex-col items-center justify-center rounded-lg bg-gray-900 text-center transition-all duration-300 hover:bg-[#202f4a]"
        >
            <Image
                src={image}
                alt={title}
                width={40}
                height={40}
                className="mx-auto object-cover"
            />
            <h1 className="mt-[1rem] text-[13px] font-[600] text-white">{title}</h1>
        </div>
    );
};

export default SkillCard;
