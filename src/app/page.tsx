"use client";

import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import Project from "@/components/Project";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

const HomePage = () => {
    const [showNav, setshowNav] = useState(false);
    const showNavHandler = () => setshowNav(true);
    const closeNavHandler = () => setshowNav(false);

    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: "ease",
        });
    }, []);

    return (
        <div className="overflow-hidden">
            <NavMobile showNav={showNav} closeNav={closeNavHandler} />
            <Nav openNav={showNavHandler} />
            <Hero />
            <About />
            <Skills />
            <Services />
            <Project />
            <Footer />
        </div>
    );
};

export default HomePage;
