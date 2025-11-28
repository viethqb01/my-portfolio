import React from "react";

import ProjectCard from "./Helpers/ProjectCard";

const Project = () => {
    const projectCards = [
        {
            title: "Payment Gateway",
            description:
                "The solution allows merchants to accept online payments on websites, applications, social networks, using popular non-cash payment methods today: Domestic payment cards, International cards, Transfer money, E-wallet, Buy now pay later, Installments...",
            image: "/images/paygate.jpg",
            techs: [
                "/images/php.png",
                "/images/go.png",
                "/images/react.svg",
                "/images/mysql.png",
                "/images/rabitmq.png",
                "/images/redis.png",
            ],
            link: "https://appotapay.com/cong-thanh-toan",
        },
        {
            title: "Smart POS",
            description:
                "SmartPOS is an intelligent payment device primarily designed to optimize payment operations at the point of sale. With just one compact device, SmartPOS meets all cashless transaction needs of customers when they enter the store. Using popular non-cash payment methods today: Domestic ATM cards, International cards, Bank transfers,  E-wallets, Mobile money...",
            image: "/images/smart-pos.jpg",
            techs: [
                "/images/go.png",
                "/images/react.svg",
                "/images/mysql.png",
                "/images/rabitmq.png",
                "/images/redis.png",
            ],
            link: "https://appotapay.com/tu-dien-smartpos-tro-thu-dac-luc-cua-chu-cua-hang-trong-thoi-dai-so.html",
        },
    ];
    return (
        <div id="blog-project" className="bg-gray-900 pb-[3rem] pt-[5rem]">
            <div className="text-center">
                <p className="heading__mini">Recent Works</p>
                <h1 className="heading__primary">
                    My Best <span className="text-yellow-300">Project</span>
                </h1>
            </div>

            {projectCards.map((projectCard, index) => (
                <ProjectCard
                    key={index}
                    title={projectCard.title}
                    description={projectCard.description}
                    techs={projectCard.techs}
                    image={projectCard.image}
                    link={projectCard.link}
                />
            ))}
        </div>
    );
};

export default Project;
