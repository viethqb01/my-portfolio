"use client";

import React, { useMemo, useState } from "react";

import SkillCard from "./Helpers/SkillCard";
import SkillSphere from "./Helpers/SkillSphere";

type Skill = {
    title: string;
    image: string;
    category: string;
};

const categoryMeta: Record<string, { label: string; emoji: string }> = {
    All: { label: "All", emoji: "✦" },
    BE: { label: "Backend", emoji: "⚙️" },
    FE: { label: "Frontend", emoji: "🎨" },
    AI: { label: "AI & Tools", emoji: "🤖" },
    DevOps: { label: "DevOps", emoji: "🚀" },
    Knowledge: { label: "Knowledge", emoji: "🧠" },
    "Project stuffs": { label: "Project", emoji: "📋" },
};

const Skills = () => {
    const tabs = ["All", "BE", "FE", "AI", "DevOps", "Knowledge", "Project stuffs"];
    const [activeTab, setActiveTab] = useState("All");
    const [viewMode, setViewMode] = useState<"sphere" | "list">("sphere");

    const skills: Skill[] = useMemo(
        () => [
            { title: "PHP", image: "/images/php.png", category: "BE" },
            { title: "Laravel", image: "/images/laravel.png", category: "BE" },
            { title: "Livewire", image: "/images/livewire.png", category: "BE" },
            { title: "Lumen", image: "/images/lumen.png", category: "BE" },
            { title: "Golang", image: "/images/go.png", category: "BE" },
            { title: "Gorm", image: "/images/gorm.png", category: "BE" },
            { title: "Gin", image: "/images/gin-gonic.png", category: "BE" },
            { title: "Echo", image: "/images/echo.png", category: "BE" },
            { title: "Mysql", image: "/images/mysql.png", category: "BE" },
            { title: "PostgreSQL", image: "/images/postgre.png", category: "BE" },
            { title: "MongoDB", image: "/images/mongo.svg", category: "BE" },
            { title: "Redis", image: "/images/redis.png", category: "BE" },

            { title: "React", image: "/images/react.svg", category: "FE" },
            { title: "Next.js", image: "/images/next.png", category: "FE" },
            { title: "Redux", image: "/images/redux.png", category: "FE" },
            { title: "Zustand", image: "/images/zustand.png", category: "FE" },
            { title: "SWR", image: "/images/swr.webp", category: "FE" },
            { title: "React Hook Form", image: "/images/rhf.svg", category: "FE" },
            { title: "Tailwind CSS", image: "/images/tailwind.svg", category: "FE" },
            { title: "Shadcn", image: "/images/shadcn.png", category: "FE" },
            { title: "MUI", image: "/images/mui.png", category: "FE" },
            { title: "Bootstrap", image: "/images/bootstrap.svg", category: "FE" },
            { title: "Javascript", image: "/images/js.svg", category: "FE" },
            { title: "Typescript", image: "/images/ts.svg", category: "FE" },
            { title: "HTML", image: "/images/html.svg", category: "FE" },
            { title: "CSS", image: "/images/css.svg", category: "FE" },

            { title: "ChatGPT", image: "/images/chatgpt.png", category: "AI" },
            { title: "Claude", image: "/images/claude.svg", category: "AI" },
            { title: "Cursor", image: "/images/cursor.png", category: "AI" },
            { title: "Agent Skill", image: "/images/skill.png", category: "AI" },
            { title: "Rules", image: "/images/rule.jpg", category: "AI" },

            { title: "Docker", image: "/images/docker.png", category: "DevOps" },
            { title: "RabbitMQ", image: "/images/rabitmq.png", category: "DevOps" },
            { title: "Kafka", image: "/images/kafka.webp", category: "DevOps" },
            { title: "Github Actions", image: "/images/github-action.png", category: "DevOps" },
            { title: "Gitlab CI/CD", image: "/images/gitlab-ci-cd.png", category: "DevOps" },
            { title: "AWS IAM", image: "/images/iam.png", category: "DevOps" },
            { title: "AWS EC2", image: "/images/ec2.svg", category: "DevOps" },
            { title: "AWS CDN", image: "/images/cdn.png", category: "DevOps" },
            { title: "AWS S3", image: "/images/s3.png", category: "DevOps" },
            { title: "Jenkins", image: "/images/jenkin.png", category: "DevOps" },
            { title: "Consul", image: "/images/consul.png", category: "DevOps" },
            { title: "Sentry", image: "/images/sentry.svg", category: "DevOps" },
            { title: "Kibana", image: "/images/kibana.svg", category: "DevOps" },

            { title: "Singleton", image: "/images/singleton.png", category: "Knowledge" },
            {
                title: "Abstract Factory",
                image: "/images/abstract-factory.png",
                category: "Knowledge",
            },
            {
                title: "Factory Method",
                image: "/images/factory-method.png",
                category: "Knowledge",
            },
            { title: "Builder", image: "/images/builder.png", category: "Knowledge" },
            { title: "Facade", image: "/images/facade.png", category: "Knowledge" },
            { title: "Keycloak", image: "/images/keycloak.png", category: "Knowledge" },
            { title: "JWT", image: "/images/jwt.webp", category: "Knowledge" },
            { title: "Hashing", image: "/images/hashing.png", category: "Knowledge" },
            { title: "Encryption", image: "/images/encryption.svg", category: "Knowledge" },
            {
                title: "Asymmetric Crypto",
                image: "/images/asymmetric-cryptography.png",
                category: "Knowledge",
            },

            { title: "Gitlab", image: "/images/git.png", category: "Project stuffs" },
            { title: "Github", image: "/images/github.svg", category: "Project stuffs" },
            { title: "Jira", image: "/images/jira.png", category: "Project stuffs" },
        ],
        [],
    );

    const filteredSkills = useMemo(
        () => (activeTab === "All" ? skills : skills.filter(skill => skill.category === activeTab)),
        [activeTab, skills],
    );

    return (
        <div id="blog-skills" className="bg-[#0b0c13] pb-[5rem] pt-[5rem]">
            <div className="mx-auto w-[90%] max-w-6xl">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_3fr]">
                    {/* Left — title, description, tabs */}
                    <div className="flex flex-col">
                        <p className="heading__mini" data-aos="fade-up">
                            Tech Stack
                        </p>
                        <h1 className="heading__primary" data-aos="fade-up" data-aos-delay="80">
                            Skills &amp; <span className="text-yellow-300">Expertise</span>
                        </h1>
                        <p
                            className="mt-4 text-[15px] leading-relaxed text-gray-400"
                            data-aos="fade-up"
                            data-aos-delay="160"
                        >
                            A curated set of technologies I&apos;ve worked with across backend,
                            frontend, AI tooling, and infrastructure — built through years of
                            real-world product delivery.
                        </p>

                        {/* Category tabs */}
                        <div
                            className="mt-8 flex flex-wrap gap-2"
                            data-aos="fade-up"
                            data-aos-delay="240"
                        >
                            {tabs.map(tab => {
                                const meta = categoryMeta[tab];
                                const isActive = activeTab === tab;
                                return (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
                                            isActive
                                                ? "border-yellow-300 bg-yellow-300 text-black shadow-[0_0_16px_rgba(253,224,71,0.3)]"
                                                : "border-yellow-300/20 bg-yellow-300/5 text-gray-400 hover:border-yellow-300/40 hover:text-yellow-300"
                                        }`}
                                    >
                                        <span className="text-xs">{meta.emoji}</span>
                                        {meta.label}
                                    </button>
                                );
                            })}
                        </div>

                        <p className="mt-5 text-xs text-yellow-300/60">
                            {filteredSkills.length} technologies
                        </p>
                    </div>

                    {/* Right — view toggle + content */}
                    <div data-aos="fade-up" data-aos-delay="200">
                        {/* Toggle */}
                        <div className="mb-4 flex justify-end">
                            <div className="flex overflow-hidden rounded-full border border-yellow-300/20 bg-yellow-300/5">
                                <button
                                    onClick={() => setViewMode("sphere")}
                                    title="Sphere view"
                                    className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-all duration-300 ${
                                        viewMode === "sphere"
                                            ? "bg-yellow-300 text-black"
                                            : "text-gray-400 hover:text-yellow-300"
                                    }`}
                                >
                                    <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                                        <path d="M2 12h20" />
                                    </svg>
                                    Sphere
                                </button>
                                <button
                                    onClick={() => setViewMode("list")}
                                    title="Grid view"
                                    className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-all duration-300 ${
                                        viewMode === "list"
                                            ? "bg-yellow-300 text-black"
                                            : "text-gray-400 hover:text-yellow-300"
                                    }`}
                                >
                                    <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect x="3" y="3" width="7" height="7" rx="1" />
                                        <rect x="14" y="3" width="7" height="7" rx="1" />
                                        <rect x="3" y="14" width="7" height="7" rx="1" />
                                        <rect x="14" y="14" width="7" height="7" rx="1" />
                                    </svg>
                                    Grid
                                </button>
                            </div>
                        </div>

                        {viewMode === "sphere" ? (
                            <SkillSphere skills={filteredSkills} />
                        ) : (
                            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
                                {filteredSkills.map(skill => (
                                    <SkillCard
                                        key={skill.title}
                                        title={skill.title}
                                        image={skill.image}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
