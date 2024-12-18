"use client";

import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import About from "@/components/About";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Project from "@/components/Project";
import React, { useState, useEffect } from "react";
import Skills from "@/components/Skills";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
    const [showNav, setshowNav] = useState(false);
    const showNavHandler = () => setshowNav(true);
    const closeNavHandler = () => setshowNav(false);

    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease',
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
