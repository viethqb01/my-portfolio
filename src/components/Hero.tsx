import Image from "next/image";
import React from "react";

import TypeWriteEffect from "./Helpers/TypeWriteEffect";

const Hero = () => {
    return (
        <div
            id="blog-hero"
            className="custom-bg w-[100vw] pb-[4vh] pt-[8vh] md:h-[100vh] md:pt-[12vh]"
        >
            <div className="mx-auto flex h-[100%] w-[80%] flex-col justify-center">
                <div className="grid grid-cols-1 items-center gap-[3rem] md:grid-cols-2">
                    <div>
                        <h1 data-aos="fade-right" className="mb-[1.3rem] text-[#c4cfdf]">
                            WELCOME TO MY WORLD
                        </h1>
                        <div>
                            <h1
                                data-aos="fade-left"
                                data-aos-delay="200"
                                className="xl-text-[50px] text-[25px] font-bold leading-[2.6rem] text-white sm:text-[35px] lg:text-[40px]"
                            >
                                Hi, I&apos;m <span className="text-yellow-300">Viet</span>
                            </h1>

                            <TypeWriteEffect />

                            <p
                                data-aos="fade-up"
                                data-aos-delay="400"
                                className="mt-[1.2rem] text-justify text-[14px] text-[#c4cfdf] md:text-[16px]"
                            >
                                I am a Software Engineer with 6 years of experience, specializing in
                                PHP and React, Next.js, and I am also able to work with Golang,
                                Angular, and Vue.js. I have worked on developing complex systems
                                such as payment gateways, e-wallets, POS solutions, and e-learning
                                platforms. In addition, I am currently working as a freelancer,
                                supporting various clients in building and developing their web
                                projects. I am eager to work in a challenging environment that
                                encourages continuous learning and personal growth, and I am
                                passionate about building high-quality, scalable, and efficient
                                solutions.
                            </p>
                            <p
                                data-aos="fade-up"
                                data-aos-delay="500"
                                className="mt-[1.2rem] text-[14px] font-medium text-yellow-300 md:text-[16px]"
                            >
                                Not afraid of difficult tasks – only afraid of having no tasks at
                                all.
                            </p>

                            <div className="mt-[2rem] flex items-center space-x-6">
                                <button
                                    data-aos="zoom-in"
                                    data-aos-delay="600"
                                    className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-red-500 font-semibold text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56"
                                >
                                    <a
                                        href="https://www.facebook.com/viethoang100701"
                                        className="relatve z-10"
                                    >
                                        Hire Me
                                    </a>
                                </button>

                                <button
                                    data-aos="zoom-in"
                                    data-aos-delay="700"
                                    className="before:ease shadow-s2xl relative h-12 w-40 overflow-hidden bg-orange-600 font-semibold text-white before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-green-700 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180"
                                >
                                    <span className="relative z-10">Download CV</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-left" className="hidden md:flex md:justify-end">
                        <Image
                            src="/images/me.jpg"
                            alt="hero"
                            width={400}
                            height={400}
                            className="rounded-full border-4 border-yellow-300 object-contain shadow-[0_0_15px_5px_rgba(255,215,0,0.8)]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
