import React, { useMemo, useState } from "react";

import SkillCard from "./Helpers/SkillCard";

type Skill = {
    title: string;
    image: string;
    category: string;
};

const Skills = () => {
    const tabs = ["All", "BE", "FE", "DevOps", "Knowledge", "Project stuffs"];
    const [activeTab, setActiveTab] = useState("All");

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
            { title: "Angular", image: "/images/angular.png", category: "FE" },
            { title: "Vuejs", image: "/images/vue.svg", category: "FE" },
            { title: "Redux", image: "/images/redux.png", category: "FE" },
            { title: "Zustand", image: "/images/zustand.png", category: "FE" },
            { title: "SWR", image: "/images/swr.webp", category: "FE" },
            { title: "React hook form", image: "/images/rhf.svg", category: "FE" },
            { title: "Tailwind CSS", image: "/images/tailwind.svg", category: "FE" },
            { title: "Shadcn", image: "/images/shadcn.png", category: "FE" },
            { title: "Mui", image: "/images/mui.png", category: "FE" },
            { title: "Bootstrap", image: "/images/bootstrap.svg", category: "FE" },
            { title: "Ng-zorro", image: "/images/ngzorro.svg", category: "FE" },
            { title: "Javascript", image: "/images/js.svg", category: "FE" },
            { title: "Typescript", image: "/images/ts.svg", category: "FE" },
            { title: "HTML", image: "/images/html.svg", category: "FE" },
            { title: "CSS", image: "/images/css.svg", category: "FE" },

            { title: "Docker", image: "/images/docker.png", category: "DevOps" },
            { title: "RabbitMQ", image: "/images/rabitmq.png", category: "DevOps" },
            { title: "Kafka", image: "/images/kafka.webp", category: "DevOps" },
            { title: "Github action", image: "/images/github-action.png", category: "DevOps" },
            { title: "Gitlab CI CD", image: "/images/gitlab-ci-cd.png", category: "DevOps" },
            { title: "Aws IAM", image: "/images/iam.png", category: "DevOps" },
            { title: "Aws EC2", image: "/images/ec2.svg", category: "DevOps" },
            { title: "Aws CDN", image: "/images/cdn.png", category: "DevOps" },
            { title: "Aws S3", image: "/images/s3.png", category: "DevOps" },
            { title: "Jenkins", image: "/images/jenkin.png", category: "DevOps" },
            { title: "Consul", image: "/images/consul.png", category: "DevOps" },
            { title: "Sentry", image: "/images/sentry.svg", category: "DevOps" },
            { title: "Kibana", image: "/images/kibana.svg", category: "DevOps" },

            { title: "Db.Singleton", image: "/images/singleton.png", category: "Knowledge" },
            {
                title: "Db.Abstract factory",
                image: "/images/abstract-factory.png",
                category: "Knowledge",
            },
            {
                title: "Db.Factory method",
                image: "/images/factory-method.png",
                category: "Knowledge",
            },
            { title: "Db.Builder", image: "/images/builder.png", category: "Knowledge" },
            { title: "Db.Facade", image: "/images/facade.png", category: "Knowledge" },
            { title: "Keycloak", image: "/images/keycloak.png", category: "Knowledge" },
            { title: "JWT", image: "/images/jwt.webp", category: "Knowledge" },
            { title: "Hashing", image: "/images/hashing.png", category: "Knowledge" },
            { title: "Encryption", image: "/images/encryption.svg", category: "Knowledge" },
            {
                title: "Asymmetric Cryptography",
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
        <div id="blog-skills" className="bg-black pb-12 pt-20">
            <div className="mx-auto w-[80%]">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-7">
                    <div className="lg:col-span-3">
                        <p className="heading__mini">My Skills</p>
                        <h1 className="heading__primary mb-6">
                            Let&apos;s Explore Popular Skills{" "}
                            <span className="text-yellow-300">Skills</span> & Experience
                        </h1>
                        <p className="mb-6 text-[15px] text-white opacity-70">
                            As someone who loves to experience new technologies, I have learned and
                            had access to many programming languages and technologies that are very
                            popular at the moment.
                        </p>
                        <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-red-500 font-semibold text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                            <span className="relative z-10">Learn More</span>
                        </button>
                    </div>

                    <div className="lg:col-span-4">
                        <div className="mb-6 flex flex-wrap gap-4">
                            {tabs.map(tab => (
                                <button
                                    key={tab}
                                    className={`rounded-md px-4 py-2 font-medium transition-colors ${
                                        activeTab === tab
                                            ? "bg-yellow-300 text-black"
                                            : "bg-gray-800 text-white hover:bg-gray-700"
                                    }`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6">
                            {filteredSkills.map(skill => (
                                <SkillCard
                                    key={skill.title}
                                    title={skill.title}
                                    image={skill.image}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
