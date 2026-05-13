"use client";

import Image from "next/image";
import React, { useState } from "react";

const projects = [
    {
        title: "Payment Gateway",
        position: "Software Engineer @ AppotaPay",
        description:
            "A solution that allows merchants to accept online payments on websites, apps, and social networks. Supports domestic cards, international cards, bank transfers, e-wallets, buy-now-pay-later, and installment payments.",
        image: "/images/banner_payment_gateway.jpg",
        link: "https://appotapay.com/cong-thanh-toan",
        techs: [
            { icon: "/images/php.png", name: "PHP" },
            { icon: "/images/go.png", name: "Go" },
            { icon: "/images/react.svg", name: "React" },
            { icon: "/images/next.png", name: "Next.js" },
            { icon: "/images/mysql.png", name: "MySQL" },
            { icon: "/images/rabitmq.png", name: "RabbitMQ" },
            { icon: "/images/redis.png", name: "Redis" },
        ],
        tags: ["Fintech", "High-load", "Microservices"],
    },
    {
        title: "E-Wallet",
        position: "Software Engineer @ AppotaPay",
        description:
            "A digital wallet platform that enables users to store, send, and receive money seamlessly. Supports top-up, withdrawals, peer-to-peer transfers, and integrated payment across merchants.",
        image: "/images/banner_ewallet.webp",
        link: "https://appotapay.com",
        techs: [
            { icon: "/images/php.png", name: "PHP" },
            { icon: "/images/go.png", name: "Go" },
            { icon: "/images/react.svg", name: "React" },
            { icon: "/images/mysql.png", name: "MySQL" },
            { icon: "/images/redis.png", name: "Redis" },
        ],
        tags: [],
    },
    {
        title: "Smart POS",
        position: "Software Engineer @ AppotaPay",
        description:
            "An intelligent payment device designed to optimize point-of-sale operations. One compact device handles all cashless transactions — ATM cards, international cards, bank transfers, e-wallets, and mobile money.",
        image: "/images/banner_smart_pos.png",
        link: "https://appotapay.com/tu-dien-smartpos-tro-thu-dac-luc-cua-chu-cua-hang-trong-thoi-dai-so.html",
        techs: [
            { icon: "/images/go.png", name: "Go" },
            { icon: "/images/react.svg", name: "React" },
            { icon: "/images/mysql.png", name: "MySQL" },
            { icon: "/images/redis.png", name: "Redis" },
        ],
        tags: ["POS", "Payments", "Real-time"],
    },
];

const Project = () => {
    const [hovered, setHovered] = useState<number | null>(null);
    const [tooltip, setTooltip] = useState<string | null>(null);

    return (
        <div id="blog-project" className="bg-[#080910] pb-[5rem] pt-[5rem]">
            <div className="text-center">
                <p className="heading__mini" data-aos="fade-up">
                    Recent Works
                </p>
                <h1 className="heading__primary" data-aos="fade-up" data-aos-delay="80">
                    Featured <span className="text-yellow-300">Projects</span>
                </h1>
            </div>

            <div className="mx-auto mt-[4rem] flex w-[90%] max-w-5xl flex-col gap-16">
                {projects.map((project, index) => {
                    const isHov = hovered === index;

                    return (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="group flex flex-col items-center gap-8 lg:flex-row"
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            {/* Image */}
                            <div className="relative w-full overflow-hidden rounded-2xl lg:w-1/2">
                                {/* Glow border */}
                                <div
                                    className={`absolute -inset-px rounded-2xl transition-opacity duration-500 ${
                                        isHov ? "opacity-100" : "opacity-0"
                                    }`}
                                    style={{
                                        background:
                                            "linear-gradient(135deg, rgba(253,224,71,0.5), transparent 60%)",
                                    }}
                                />
                                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f1019]">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={600}
                                        height={360}
                                        className={`h-[220px] w-full object-cover transition-all duration-700 md:h-[280px] ${
                                            isHov
                                                ? "scale-105 brightness-75"
                                                : "scale-100 brightness-90"
                                        }`}
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex w-full flex-col gap-4 lg:w-1/2">
                                {/* Title */}
                                <h2
                                    className={`text-2xl font-bold transition-colors duration-300 md:text-3xl ${
                                        isHov ? "text-yellow-300" : "text-white"
                                    }`}
                                >
                                    {project.title}
                                </h2>

                                {/* Position */}
                                <p className="text-xs font-medium text-gray-500">
                                    {project.position}
                                </p>

                                {/* Description */}
                                <p className="text-sm leading-relaxed text-gray-400">
                                    {project.description}
                                </p>

                                {/* Divider */}
                                <div className="bg-white/8 h-px w-full" />

                                {/* Tech stack */}
                                <div>
                                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
                                        Tech Stack
                                    </p>
                                    <div className="relative flex flex-wrap gap-2">
                                        {project.techs.map((tech, i) => (
                                            <div
                                                key={i}
                                                className="relative"
                                                onMouseEnter={() => setTooltip(`${index}-${i}`)}
                                                onMouseLeave={() => setTooltip(null)}
                                            >
                                                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 p-1.5 transition-all duration-200 hover:-translate-y-1 hover:border-yellow-300/30 hover:bg-white/10">
                                                    <Image
                                                        src={tech.icon}
                                                        alt={tech.name}
                                                        width={28}
                                                        height={28}
                                                        className="h-full w-full object-contain"
                                                    />
                                                </div>
                                                {/* Tooltip */}
                                                {tooltip === `${index}-${i}` && (
                                                    <div className="absolute -top-8 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-yellow-300 px-2 py-0.5 text-[10px] font-bold text-black">
                                                        {tech.name}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Link */}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/link mt-1 flex w-fit items-center gap-2 text-sm font-medium text-yellow-300/70 transition-all duration-300 hover:text-yellow-300"
                                >
                                    <span>View live project</span>
                                    <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                                        →
                                    </span>
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Project;
