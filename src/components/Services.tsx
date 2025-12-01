import React from "react";

import ServiceCard from "./Helpers/ServiceCard";

const Services = () => {
    const serviceCard = [
        {
            title: "PHP",
            num: "01",
            description:
                "Php is my first language and major. I have been doing php since I was in school and doing internships until now.",
            note: "Background: Payment Gateway, E-wallet, E-learning, Software Management",
        },
        {
            title: "Golang",
            num: "02",
            description:
                "Golang is also a backend language that I am learning and working with. I started learning it after two years of working, and I use it to develop core services for payment gateway systems and e-wallet platforms.",
            note: "Background: Payment Gateway, Payment Link, E-wallet, SmartPOS",
        },
        {
            title: "React",
            num: "03",
            description:
                "React is also one of my main technologies. I started working with React early in my career and have continued using it across many of my projects.",
            note: "Background: Payment Gateway, Payment Link, CMS",
        },
        {
            title: "Next.js",
            num: "04",
            description:
                "NextJS is an open source framework built on top of React, allowing us to build super fast and user-friendly static websites.",
            note: "Background: New site, My Pofolio",
        },
        {
            title: "Angular/Vue.js",
            num: "05",
            description:
                "Vue.js and Angular are the frameworks I mainly use when taking on freelancer projects for clients. I have also completed several large-scale projects using these technologies.",
            note: "Background: Multiple project freelancer",
        },
        {
            title: "Bug Fixing",
            num: "06",
            description:
                "During the working process, Fixbug and maintain systems is also an indispensable part of dev.",
            note: "Background: Payment Gateway, E-wallet, Payment Link",
        },
    ];
    return (
        <div id="blog-services" className="bg-[#0b0c13] pb-[3rem] pt-[5rem]">
            <div className="text-center">
                <p className="heading__mini">Popular Service</p>
                <h1 className="heading__primary">
                    My Special <span className="text-yellow-300">Service</span> For You
                </h1>
            </div>

            <div className="mx-auto grid w-[80%] grid-cols-1 items-center gap-[3rem] pt-[5rem] md:grid-cols-2 lg:grid-cols-3">
                {serviceCard.map((serviceCard, index) => (
                    <div className="h-full" key={index}>
                        <ServiceCard
                            title={serviceCard.title}
                            num={serviceCard.num}
                            description={serviceCard.description}
                            note={serviceCard.note}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
