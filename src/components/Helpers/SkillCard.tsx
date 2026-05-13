"use client";

import Image from "next/image";
import React, { useRef } from "react";

interface Props {
    image: string;
    title: string;
}

const SkillCard = ({ image, title }: Props) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;
        card.style.setProperty("--x", `-999px`);
        card.style.setProperty("--y", `-999px`);
    };

    return (
        <div
            ref={cardRef}
            data-aos="flip-left"
            data-aos-once="true"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={
                {
                    "--x": "-999px",
                    "--y": "-999px",
                } as React.CSSProperties
            }
            className="group relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-yellow-300/20 bg-yellow-300/5 p-3 text-center transition-all duration-300 hover:border-yellow-300/50"
        >
            {/* Spotlight */}
            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background:
                        "radial-gradient(80px circle at var(--x) var(--y), rgba(253,224,71,0.12), transparent 80%)",
                }}
            />

            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110">
                <Image src={image} alt={title} width={28} height={28} className="object-contain" />
            </div>
            <p className="relative text-[11px] font-semibold leading-tight text-gray-300 transition-colors duration-300 group-hover:text-yellow-300">
                {title}
            </p>
        </div>
    );
};

export default SkillCard;
