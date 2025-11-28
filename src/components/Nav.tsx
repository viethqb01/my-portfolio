import React, { useEffect, useMemo, useState } from "react";

import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";

interface Props {
    openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
    const [navSticky, setNavSticky] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");

    const sections = useMemo(
        () => [
            { id: "blog-hero", name: "Home" },
            { id: "blog-about", name: "About" },
            { id: "blog-skills", name: "Skills" },
            { id: "blog-services", name: "Service" },
            { id: "blog-project", name: "Project" },
            { id: "blog-footer", name: "Contact" },
        ],
        [],
    );

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 90) {
                setNavSticky(true);
            } else {
                setNavSticky(false);
            }

            let currentSection = "Home";
            sections.forEach(section => {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (
                        rect.top <= window.innerHeight / 2 &&
                        rect.bottom >= window.innerHeight / 2
                    ) {
                        currentSection = section.name;
                    }
                }
            });
            setActiveSection(currentSection);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sections]);

    const handleClick = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        sectionId: string,
        sectionName: string,
    ) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setActiveSection(sectionName);
        }
    };

    const stickyStyle = navSticky ? "bg-[#212428] shadow-gray-900 shadow-sm" : "";

    return (
        <div className={`fixed ${stickyStyle} z-[1000] w-[100%] transition-all duration-300`}>
            <div className="mx-auto flex h-[8vh] w-[80%] items-center justify-between">
                <div className="font-logo text-[18px] text-white">
                    <span className="text-[30px] text-yellow-400 md:text-[40px]">HV.</span> VIETHQB
                </div>

                <ul className="hidden items-center space-x-10 md:flex">
                    {sections.map(section => (
                        <li key={section.id}>
                            <a
                                className={`nav__link ${
                                    activeSection === section.name
                                        ? "font-bold text-yellow-400"
                                        : "text-white"
                                }`}
                                href="#"
                                onClick={e => handleClick(e, section.id, section.name)}
                            >
                                {section.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <Bars3CenterLeftIcon
                    onClick={openNav}
                    className="h-[2.3rem] w-[2.3rem] rotate-180 text-white md:hidden"
                />
            </div>
        </div>
    );
};

export default Nav;
