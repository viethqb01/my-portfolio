import React, { useEffect, useMemo, useState } from "react";

import { XMarkIcon } from "@heroicons/react/16/solid";

interface Props {
    showNav: boolean;
    closeNav: () => void;
}

const NavMobile = ({ showNav, closeNav }: Props) => {
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

    const navOpenStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";

    return (
        <div>
            <div
                className={`fixed top-0 ${navOpenStyle} bottom-0 left-0 right-0 z-[10000] h-[100vh] w-[100vw] transform bg-black opacity-80 transition-all duration-300`}
            ></div>
            <ul
                className={`text-white ${navOpenStyle} fixed z-[10006] flex h-[100%] w-[70%] transform flex-col items-center justify-center space-y-14 bg-red-500 transition-all delay-100 duration-300`}
            >
                {sections.map(section => (
                    <li key={section.id}>
                        <a
                            className={`nav__link text-[25px] sm:text-[30px] ${
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

                <XMarkIcon
                    onClick={closeNav}
                    className="absolute right-[1.4rem] top-[-1.4rem] h-[2.2rem] w-[2.2rem] text-white"
                />
            </ul>
        </div>
    );
};

export default NavMobile;
