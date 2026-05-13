"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import TypeWriteEffect from "./Helpers/TypeWriteEffect";

const rawCode = `const developer = {
  name:       "Hoang Quoc Bao Viet",
  role:       "Software Engineer",
  experience: "6+ years",
  stack:      ["PHP", "Golang", "React", "Next.js"],
  domains:    ["Fintech"],
  available:  true,
}`;

function highlight(line: string): React.ReactNode {
    const parts: React.ReactNode[] = [];
    let rest = line;
    let key = 0;

    const push = (text: string, cls: string) => {
        parts.push(
            <span key={key++} className={cls}>
                {text}
            </span>,
        );
    };

    // keywords
    rest = rest.replace(/^(const|true|false)(\s|$|,)/, (_, kw, after) => {
        push(kw, "text-purple-400");
        return "\x00" + after;
    });

    // process remaining tokens
    const segments = rest.split(/("[^"]*"|\btrue\b|\bfalse\b|\bconst\b|\x00)/g);
    for (const seg of segments) {
        if (!seg) continue;
        if (seg === "\x00") continue;
        if (seg.startsWith('"') && seg.endsWith('"')) {
            const inner = seg.slice(1, -1);
            const isNum = /^\d/.test(inner) || inner.includes("+");
            push(seg, isNum ? "text-emerald-300" : "text-yellow-300");
        } else if (seg === "true" || seg === "false") {
            push(seg, "text-orange-300");
        } else if (seg === "const") {
            push(seg, "text-purple-400");
        } else {
            // check for key: pattern
            const keyMatch = seg.match(/^(\s+)([a-zA-Z_]+)(\s*:)(.*)/s);
            if (keyMatch) {
                push(keyMatch[1], "text-white");
                push(keyMatch[2], "text-sky-300");
                push(keyMatch[3], "text-white");
                // recurse remaining
                const remaining = keyMatch[4];
                push(remaining, "text-white");
            } else {
                push(seg, "text-white");
            }
        }
    }

    return parts;
}

const Hero = () => {
    const [displayedText, setDisplayedText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [waiting, setWaiting] = useState(false);

    // Typing effect
    useEffect(() => {
        if (waiting) return;
        if (charIndex >= rawCode.length) {
            setWaiting(true);
            return;
        }
        const t = setTimeout(
            () => {
                setDisplayedText(rawCode.slice(0, charIndex + 1));
                setCharIndex(i => i + 1);
            },
            rawCode[charIndex] === "\n" ? 80 : 30,
        );
        return () => clearTimeout(t);
    }, [charIndex, waiting]);

    // Reset after 2s delay
    useEffect(() => {
        if (!waiting) return;
        const t = setTimeout(() => {
            setDisplayedText("");
            setCharIndex(0);
            setWaiting(false);
        }, 2000);
        return () => clearTimeout(t);
    }, [waiting]);

    const typedLines = displayedText.split("\n");

    return (
        <div
            id="blog-hero"
            className="custom-bg w-[100vw] pb-[4vh] pt-[8vh] md:min-h-[100vh] md:pt-[12vh]"
        >
            <div className="mx-auto flex h-full w-[88%] max-w-6xl flex-col justify-center">
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                    {/* Left — text */}
                    <div>
                        <p
                            data-aos="fade-right"
                            className="mb-3 font-mono text-sm tracking-widest text-yellow-300/70"
                        >
                            {"// welcome to my world"}
                        </p>

                        <h1
                            data-aos="fade-left"
                            data-aos-delay="100"
                            className="text-[28px] font-bold leading-tight text-white sm:text-[38px] lg:text-[46px]"
                        >
                            Hi, I&apos;m <span className="text-yellow-300">Viet</span>
                        </h1>

                        <div data-aos="fade-up" data-aos-delay="200" className="mt-2">
                            <TypeWriteEffect />
                        </div>

                        <p
                            data-aos="fade-up"
                            data-aos-delay="350"
                            className="mt-5 text-justify text-[12px] leading-relaxed text-[#c4cfdf] md:text-[13px]"
                        >
                            Software Engineer with 6+ years of experience building and developing
                            fintech systems, including payment gateways and e-wallet platforms.
                            Proficient in PHP, Golang, React, and Next.js. Strong expertise in
                            applying AI to products and systems, particularly with AI Agents,
                            Skills, and Rules-based workflows to build intelligent automation
                            solutions. Contributed to large-scale products with secure
                            architectures, high-load capabilities, serving millions of users, and
                            generating multi-million-dollar transaction revenue. Strong foundation
                            in microservices, distributed systems, payment integration, and system
                            optimization within highly scalable and high-availability environments.
                        </p>

                        <p
                            data-aos="fade-up"
                            data-aos-delay="450"
                            className="mt-[1.2rem] text-[12px] font-medium text-yellow-300 md:text-[13px]"
                        >
                            Not afraid of difficult tasks – only afraid of having no tasks at all.
                        </p>

                        <div
                            data-aos="fade-up"
                            data-aos-delay="550"
                            className="mt-[2rem] flex items-center space-x-6"
                        >
                            <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-red-500 font-semibold text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                                <a
                                    href="https://www.facebook.com/viethoang100701"
                                    className="relative z-10"
                                >
                                    Hire Me
                                </a>
                            </button>
                            <button className="before:ease shadow-s2xl relative h-12 w-40 overflow-hidden bg-orange-600 font-semibold text-white before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-green-700 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180">
                                <span className="relative z-10">Download CV</span>
                            </button>
                        </div>
                    </div>

                    {/* Right — photo + code editor */}
                    <div
                        data-aos="fade-left"
                        data-aos-delay="200"
                        className="flex flex-col items-center gap-6"
                    >
                        {/* Avatar */}
                        <div className="relative">
                            <div className="absolute -inset-1 animate-[spin_6s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,rgba(253,224,71,0.8)_0%,transparent_40%,transparent_60%,rgba(253,224,71,0.8)_100%)]" />
                            <Image
                                src="/images/me.jpg"
                                alt="Viet"
                                width={120}
                                height={120}
                                className="relative rounded-full border-2 border-yellow-300/40 object-cover shadow-[0_0_30px_rgba(253,224,71,0.25)]"
                            />
                        </div>

                        {/* Code editor */}
                        <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] shadow-[0_0_40px_rgba(253,224,71,0.04)]">
                            {/* Title bar */}
                            <div className="border-white/8 flex items-center justify-between border-b bg-[#161b22] px-4 py-2.5">
                                <div className="flex items-center gap-1.5">
                                    <span className="h-3 w-3 rounded-full bg-red-500/80" />
                                    <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                                    <span className="h-3 w-3 rounded-full bg-green-500/80" />
                                </div>
                                <span className="font-mono text-[11px] text-gray-500">
                                    developer.ts
                                </span>
                                <span className="font-mono text-[10px] text-emerald-400/70">
                                    ● TypeScript
                                </span>
                            </div>

                            {/* Code */}
                            <div className="h-[270px] overflow-auto p-5 font-mono text-[13px] leading-7">
                                {typedLines.map((line, i) => {
                                    const isLast = i === typedLines.length - 1;
                                    return (
                                        <div key={i} className="flex">
                                            <span className="mr-4 w-4 select-none text-right text-gray-600">
                                                {i + 1}
                                            </span>
                                            <span className="whitespace-pre">
                                                {highlight(line)}
                                                {isLast && (
                                                    <span className="inline-block h-[1em] w-[0.5em] animate-pulse bg-yellow-300/80 align-middle" />
                                                )}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Status bar */}
                            <div className="border-white/8 flex items-center justify-between border-t bg-[#161b22] px-4 py-2">
                                <span className="font-mono text-[10px] text-gray-600">
                                    Ln {typedLines.length}, Col{" "}
                                    {(typedLines.at(-1)?.length ?? 0) + 1}
                                </span>
                                <div className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                    <span className="font-mono text-[10px] text-gray-600">
                                        available for work
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
