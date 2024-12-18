import { XMarkIcon } from "@heroicons/react/16/solid";
import React, { useState, useEffect } from "react";

interface Props {
    showNav: boolean;
    closeNav: () => void;
}

const NavMobile = ({ showNav, closeNav }: Props) => {
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

    const navOpenStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";

    return (
        <div>
            <div className={`fixed top-0 ${navOpenStyle} transform transition-all duration-300 z-[10000] left-0 right-0 bottom-0 bg-black opacity-80 w-[100vw] h-[100vh]`}></div>
            <ul className={`text-white ${navOpenStyle} fixed flex items-center justify-center flex-col h-[100%] transform transition-all duration-300 w-[70%] delay-100 bg-red-500 space-y-14 z-[10006]`}>
                {sections.map((section) => (
                    <li key={section.id}>
                        <a
                            className={`nav__link text-[25px] sm:text-[30px] ${activeSection === section.name
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

                <XMarkIcon onClick={closeNav} className="absolute top-[-1.4rem] right-[1.4rem] w-[2.2rem] h-[2.2rem] text-white" />
            </ul>
        </div>
    );
};

export default NavMobile;
