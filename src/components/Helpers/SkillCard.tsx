import React from 'react';
import Image from 'next/image';

interface Props {
    image: string,
    title: string,
}

const SkillCard = ({ image, title }: Props) => {
    return (
        <div data-aos="flip-left" className="min-h-[110px] flex flex-col items-center justify-center hover:bg-[#202f4a] duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900">
            <Image src={image} alt={title} width={40} height={40} className="object-cover mx-auto" />
            <h1 className="text-[13px] mt-[1rem] text-white font-[600]">{title}</h1>
        </div>
    )
}

export default SkillCard
