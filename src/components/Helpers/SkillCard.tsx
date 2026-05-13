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
            className="group relative flex flex-col items-center justify-center gap-2 rounded-2xl border border-yellow-300/20 bg-yellow-300/5 p-3 text-center transition-all duration-300 hover:border-yellow-300/50 hover:bg-yellow-300/10 hover:shadow-[0_0_20px_rgba(253,224,71,0.08)]"
        >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110">
                <Image src={image} alt={title} width={28} height={28} className="object-contain" />
            </div>
            <p className="text-[11px] font-semibold leading-tight text-gray-300 transition-colors duration-300 group-hover:text-yellow-300">
                {title}
            </p>
        </div>
    );
};

export default SkillCard;
