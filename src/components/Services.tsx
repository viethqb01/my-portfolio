"use client";

import React, { useEffect, useState } from "react";

import CountUp from "react-countup";

const stats = [
    { end: 6, suffix: "+", label: "Years of Experience" },
    { end: 3, suffix: "", label: "Companies" },
    { end: 100, suffix: "K+", label: "Users Served" },
    { end: 1, prefix: "$", suffix: "M+", label: "Transaction Revenue" },
];

const strengths = [
    {
        icon: "💳",
        title: "Fintech Domain Expert",
        summary: "3+ years building core fintech products at scale.",
        points: [
            "Payment gateway & e-wallet platforms",
            "SmartPOS & CMS systems & Payment link & Partner system",
            "Secure transaction processing at high volume",
        ],
    },
    {
        icon: "⚡",
        title: "Full-Stack Engineer",
        summary: "End-to-end ownership from database to UI.",
        points: [
            "Backend: PHP, Golang, Microservices",
            "Frontend: React, Next.js, TypeScript",
            "Database: MySQL, MongoDB, Redis",
        ],
    },
    {
        icon: "🤖",
        title: "AI-Driven Developer",
        summary: "Early adopter of AI in real product workflows.",
        points: [
            "AI Agents, Skills & Rules-based automation",
            "Claude & ChatGPT integration in products",
            "Productivity-first development with AI tools",
        ],
    },
    {
        icon: "🏗️",
        title: "Architecture & Scale",
        summary: "Designing systems built to last and grow.",
        points: [
            "Clean Architecture, DDD, microservices",
            "High-load systems serving millions of users",
            "IAM with Keycloak, JWT & distributed infra",
        ],
    },
];

const Services = () => {
    const [key, setKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setKey(prev => prev + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="blog-services" className="bg-[#0b0c13] pb-[5rem] pt-[5rem]">
            <div className="text-center">
                <p className="heading__mini">Why Choose Me</p>
                <h1 className="heading__primary">
                    My <span className="text-yellow-300">Strengths</span>
                </h1>
            </div>

            {/* Summary */}
            <p
                className="mx-auto mt-6 max-w-2xl text-center text-[15px] leading-relaxed text-gray-400"
                data-aos="fade-up"
            >
                Software Engineer with 6+ years of experience in fintech, full-stack development,
                and AI integration. I build secure, scalable systems that handle real-world load —
                and I bring both technical depth and product thinking to every project.
            </p>

            {/* Stats */}
            <div
                className="mx-auto mt-12 grid w-[90%] max-w-3xl grid-cols-2 gap-4 md:grid-cols-4"
                data-aos="fade-up"
            >
                {stats.map((stat, i) => (
                    <div
                        key={i}
                        className="rounded-2xl border border-yellow-300/20 bg-yellow-300/5 p-5 text-center"
                    >
                        <p className="text-3xl font-black text-yellow-300">
                            {stat.prefix ?? ""}
                            <CountUp key={key + i} start={0} end={stat.end} duration={2} />
                            {stat.suffix}
                        </p>
                        <p className="mt-1 text-xs text-gray-400">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Strength cards */}
            <div className="mx-auto mt-10 grid w-[90%] max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
                {strengths.map((item, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 80}
                        className="group rounded-2xl border border-yellow-300/20 bg-yellow-300/5 p-6 transition-all duration-300 hover:border-yellow-300/30 hover:bg-yellow-300/10"
                    >
                        <div className="mb-4 flex items-center gap-3">
                            <span className="text-3xl">{item.icon}</span>
                            <div>
                                <h3 className="font-bold text-white transition-colors duration-300 group-hover:text-yellow-300">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-gray-500">{item.summary}</p>
                            </div>
                        </div>
                        <ul className="space-y-2">
                            {item.points.map((point, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-2 text-sm text-gray-400"
                                >
                                    <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-300/60" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
