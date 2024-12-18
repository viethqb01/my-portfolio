import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";
import React, { useState, useEffect } from "react";

interface Props {
    openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
    const [navSticky, setNavSticky] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");

    const sections = [
        { id: "blog-hero", name: "Home" },
        { id: "blog-about", name: "About" },
        { id: "blog-skills", name: "Skills" },
        { id: "blog-services", name: "Service" },
        { id: "blog-project", name: "Project" },
        { id: "blog-footer", name: "Contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 90) {
                setNavSticky(true);
            } else {
                setNavSticky(false);
            }

            let currentSection = "Home";
            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        currentSection = section.name;
                    }
                }
            });
            setActiveSection(currentSection);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string, sectionName: string) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setActiveSection(sectionName);
        }
    };

    const stickyStyle = navSticky ? "bg-[#212428] shadow-gray-900 shadow-sm" : "";

    return (
        <div className={`fixed ${stickyStyle} transition-all duration-300 w-[100%] z-[1000]`}>
            <div className="flex items-center justify-between h-[8vh] w-[80%] mx-auto">
                <div className="font-logo text-white text-[18px]">
                    <span className="text-[30px] md:text-[40px] text-yellow-400">HV.</span> VIETHQB
                </div>

                <ul className="md:flex hidden items-center space-x-10">
                    {sections.map((section) => (
                        <li key={section.id}>
                            <a
                                className={`nav__link ${
                                    activeSection === section.name
                                        ? "text-yellow-400 font-bold"
                                        : "text-white"
                                }`}
                                href="#"
                                onClick={(e) => handleClick(e, section.id, section.name)}
                            >
                                {section.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <Bars3CenterLeftIcon
                    onClick={openNav}
                    className="w-[2.3rem] md:hidden h-[2.3rem] text-white rotate-180"
                />
            </div>
        </div>
    );
};

export default Nav;
