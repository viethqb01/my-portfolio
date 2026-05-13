"use client";

import Image from "next/image";
import React, { useState } from "react";

const experiences = [
    {
        company: "AppotaPay",
        logo: "/images/appotapay_logo.png",
        period: "03/2023 – Present",
        role: "Software Engineer",
        tag: "Fintech",
        description:
            "Worked as a Software Engineer focusing on fintech systems, including payment gateways, e-wallets, POS machines, and CMS platforms.",
        highlights: [
            "Designed and developed scalable systems following clean architecture principles",
            "Participated in system analysis, architecture design, and technology selection for projects",
            "Developed, maintained, and optimized backend/frontend systems for performance, scalability, and reliability",
            "Built authentication and authorization systems using Keycloak and JWT-based solutions",
            "Designed and implemented RESTful APIs and modern frontend applications",
            "Worked with high-load systems serving large-scale users and transaction volumes",
            "Collaborated with cross-functional teams to deliver secure and maintainable products",
        ],
        current: true,
    },
    {
        company: "Toprate",
        logo: "/images/toprate_vietnam_logo.jpeg",
        period: "05/2021 – 03/2023",
        role: "Full Stack Developer",
        tag: "E-Learning",
        description: "Worked as a FullStack Developer. Main field: e-learning and CMS platforms.",
        highlights: [
            "Developing, maintaining, and optimizing source code",
            "Create Api, Implementing Frontend projects",
        ],
        current: false,
    },
    {
        company: "Viettel Post",
        logo: "/images/viettel_post_logo.jpeg",
        period: "01/2021 – 05/2021",
        role: "Backend Developer",
        tag: "Logistics",
        description: "Worked as a BackEnd Developer. Main field: e-learning and CMS platforms.",
        highlights: ["Developing, maintaining, and optimizing source code", "Create Api"],
        current: false,
    },
];

const WorkExperience = () => {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <>
            <style>{`
                @keyframes dotTravel {
                    0%   { top: 0%;   left: 8%;   }
                    22%  { top: 0%;   left: 92%;  }
                    25%  { top: 8%;   left: 100%; }
                    47%  { top: 92%;  left: 100%; }
                    50%  { top: 100%; left: 92%;  }
                    72%  { top: 100%; left: 8%;   }
                    75%  { top: 92%;  left: 0%;   }
                    97%  { top: 8%;   left: 0%;   }
                    100% { top: 0%;   left: 8%;   }
                }
            `}</style>

            <div id="work-experience" className="bg-[#0e0f18] pb-[5rem] pt-[5rem]">
                <div className="text-center">
                    <p className="heading__mini" data-aos="fade-up">
                        Career Path
                    </p>
                    <h1 className="heading__primary" data-aos="fade-up" data-aos-delay="80">
                        Work <span className="text-yellow-300">Experience</span>
                    </h1>
                </div>

                <div className="relative mx-auto mt-[4rem] w-[90%] max-w-3xl">
                    {/* Vertical line */}
                    <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-yellow-300/80 via-yellow-300/30 to-transparent md:left-1/2" />

                    <div className="flex flex-col gap-10">
                        {experiences.map((exp, index) => {
                            const isHovered = hovered === index;
                            const isRight = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                    className={`relative flex items-start md:gap-0 ${
                                        isRight ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-6 z-10 -translate-x-1/2 translate-y-6 md:left-1/2">
                                        <div
                                            className={`h-4 w-4 rounded-full border-2 transition-all duration-300 ${
                                                exp.current
                                                    ? "border-yellow-300 bg-yellow-300 shadow-[0_0_10px_rgba(253,224,71,0.7)]"
                                                    : isHovered
                                                      ? "border-yellow-300 bg-yellow-300/30 shadow-[0_0_8px_rgba(253,224,71,0.4)]"
                                                      : "border-yellow-300/50 bg-[#0b0c13]"
                                            }`}
                                        />
                                        {exp.current && (
                                            <div className="absolute inset-0 animate-ping rounded-full bg-yellow-300/40" />
                                        )}
                                    </div>

                                    {/* Empty spacer */}
                                    <div className="hidden md:block md:w-1/2" />

                                    {/* Card */}
                                    <div
                                        className={`ml-12 w-full md:ml-0 md:w-1/2 ${
                                            isRight ? "md:pl-10" : "md:pr-10"
                                        }`}
                                        onMouseEnter={() => setHovered(index)}
                                        onMouseLeave={() => setHovered(null)}
                                    >
                                        {/* Border wrapper */}
                                        <div
                                            className="relative rounded-2xl p-[1.5px]"
                                            style={{ background: "rgba(253,224,71,0.35)" }}
                                        >
                                            {/* Traveling dot */}
                                            <div
                                                className="pointer-events-none absolute z-10 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300"
                                                style={{
                                                    animation: "dotTravel 4s linear infinite",
                                                    boxShadow:
                                                        "0 0 6px 2px rgba(253,224,71,0.8), 0 0 12px 4px rgba(253,224,71,0.4)",
                                                }}
                                            />

                                            {/* Inner card */}
                                            <div
                                                className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
                                                    isHovered
                                                        ? "bg-[#13141f] shadow-[0_8px_32px_rgba(253,224,71,0.08)]"
                                                        : "bg-[#0f1019]"
                                                }`}
                                            >
                                                <div className="p-5">
                                                    {/* Row 1: logo + company + period */}
                                                    <div className="flex items-center gap-3">
                                                        <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white p-1.5">
                                                            <Image
                                                                src={exp.logo}
                                                                alt={exp.company}
                                                                width={56}
                                                                height={56}
                                                                className="h-full w-full object-contain"
                                                            />
                                                        </div>
                                                        <div className="flex flex-1 items-center justify-between gap-4">
                                                            <h3 className="whitespace-nowrap text-lg font-bold text-white">
                                                                {exp.company}
                                                            </h3>
                                                            <span className="shrink-0 rounded-full border border-yellow-300/20 bg-yellow-300/5 px-3 py-1 text-[11px] font-medium text-yellow-300/70">
                                                                {exp.period}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    {/* Row 2: tag + role */}
                                                    <div className="mt-2 flex items-center gap-2">
                                                        <span className="rounded-md bg-yellow-300/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-yellow-300/70">
                                                            {exp.tag}
                                                        </span>
                                                        <p className="text-sm font-medium text-yellow-300/80">
                                                            {exp.role}
                                                        </p>
                                                    </div>

                                                    {/* Description */}
                                                    <p className="mt-3 text-sm leading-relaxed text-gray-400">
                                                        {exp.description}
                                                    </p>

                                                    {/* Highlights — revealed on hover */}
                                                    <div
                                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                                            isHovered
                                                                ? "mt-4 max-h-[500px] opacity-100"
                                                                : "max-h-0 opacity-0"
                                                        }`}
                                                    >
                                                        <div className="border-white/8 border-t pt-4">
                                                            <ul className="space-y-2.5">
                                                                {exp.highlights.map((item, i) => (
                                                                    <li
                                                                        key={i}
                                                                        className="flex items-start gap-2 text-sm leading-relaxed text-gray-300"
                                                                    >
                                                                        <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-300" />
                                                                        <span>{item}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    {/* Hint */}
                                                    <p
                                                        className={`mt-3 text-[11px] text-gray-600 transition-opacity duration-300 ${
                                                            isHovered ? "opacity-0" : "opacity-100"
                                                        }`}
                                                    >
                                                        Hover to see details
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default WorkExperience;
