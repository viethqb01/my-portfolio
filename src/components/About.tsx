"use client";

import React, { useEffect, useState } from "react";

import CountUp from "react-countup";

const roles = [
    "Software Engineer",
    "Backend Developer",
    "Frontend Developer",
    "Full Stack Engineer",
    "AI Power User",
    "Freelancer",
];

const stats = [
    { end: 6, suffix: "+", label: "Years Experience" },
    { end: 57, suffix: "+", label: "Technologies" },
    { end: 30, suffix: "+", label: "Projects Done" },
    { end: 3, suffix: "", label: "Companies" },
];

const highlights = [
    { icon: "💳", text: "3+ yrs in Fintech — payments, e-wallets, SmartPOS" },
    { icon: "⚡", text: "Full ownership from DB schema to pixel-perfect UI" },
    { icon: "🤖", text: "AI-first workflow with Claude, Cursor & custom agents" },
];

const About = () => {
    const [key, setKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setKey(k => k + 1), 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="blog-about" className="bg-[#080910] pb-[5rem] pt-[5rem]">
            <div className="mx-auto w-[90%] max-w-6xl">
                <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
                    {/* Left */}
                    <div className="flex flex-col">
                        <p className="heading__mini" data-aos="fade-up">
                            About Me
                        </p>
                        <h1 className="heading__primary" data-aos="fade-up" data-aos-delay="80">
                            Building Products That{" "}
                            <span className="text-yellow-300">Actually Scale</span>
                        </h1>
                        <p
                            className="mt-4 text-[15px] leading-relaxed text-gray-400"
                            data-aos="fade-up"
                            data-aos-delay="160"
                        >
                            Software Engineer with 6+ years across both Product and Outsourcing
                            environments. I&apos;ve shipped fintech systems handling millions of
                            transactions, led frontend rewrites, and built internal tooling with AI
                            automation — always with a focus on clean architecture and real impact.
                        </p>

                        {/* Role pills */}
                        <div
                            className="mt-6 flex flex-wrap gap-2"
                            data-aos="fade-up"
                            data-aos-delay="240"
                        >
                            {roles.map(role => (
                                <span
                                    key={role}
                                    className="rounded-full border border-yellow-300/20 bg-yellow-300/5 px-3 py-1 text-xs font-medium text-yellow-300/80"
                                >
                                    {role}
                                </span>
                            ))}
                        </div>

                        {/* Highlights */}
                        <div className="mt-8 space-y-3">
                            {highlights.map((h, i) => (
                                <div
                                    key={i}
                                    data-aos="fade-up"
                                    data-aos-delay={320 + i * 80}
                                    className="flex items-start gap-3 rounded-xl border border-yellow-300/10 bg-yellow-300/5 px-4 py-3"
                                >
                                    <span className="mt-0.5 text-lg">{h.icon}</span>
                                    <p className="text-sm text-gray-300">{h.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col gap-6">
                        {/* Stats grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, i) => (
                                <div
                                    key={i}
                                    data-aos="zoom-in"
                                    data-aos-delay={i * 100}
                                    className="rounded-2xl border border-yellow-300/20 bg-yellow-300/5 p-5 text-center"
                                >
                                    <p className="text-4xl font-black text-yellow-300">
                                        <CountUp
                                            key={key + i}
                                            start={0}
                                            end={stat.end}
                                            duration={2}
                                        />
                                        {stat.suffix}
                                    </p>
                                    <p className="mt-1 text-xs text-gray-400">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Currently card */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="400"
                            className="rounded-2xl border border-yellow-300/20 bg-yellow-300/5 p-5"
                        >
                            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-yellow-300/60">
                                Currently
                            </p>
                            <div className="space-y-2.5">
                                <div className="flex items-center gap-3">
                                    <span className="flex h-2 w-2 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80]" />
                                    <p className="text-sm text-gray-300">
                                        Full Stack Engineer{" "}
                                        <span className="text-yellow-300">@ AppotaPay</span>
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="flex h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_6px_rgba(253,224,71,0.8)]" />
                                    <p className="text-sm text-gray-300">
                                        Open to{" "}
                                        <span className="text-yellow-300">
                                            freelance & side projects
                                        </span>
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="flex h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_6px_#60a5fa]" />
                                    <p className="text-sm text-gray-300">
                                        Exploring{" "}
                                        <span className="text-yellow-300">
                                            AI Agents & automation
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
