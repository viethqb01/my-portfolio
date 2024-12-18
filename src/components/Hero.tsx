import React, { useEffect, useRef } from "react";
import TypeWriteEffect from "./Helpers/TypeWriteEffect";
import Image from "next/image";

const Hero = () => {
    return (
        <div
            id="blog-hero"
            className="w-[100vw] pt-[4vh] md:pt-[12vh] h-[85vh] md:h-[100vh] custom-bg"
        >
            <div className="flex justify-center flex-col w-[80%] h-[100%] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center">
                    <div>
                        <h1 data-aos="fade-right" className="text-[#c4cfdf] mb-[1.3rem]">WELCOME TO MY WORLD</h1>
                        <div>
                            <h1 data-aos="fade-left" data-aos-delay="200" className="xl-text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-bold leading-[2.6rem] text-white">
                                Hi, I'm <span className="text-yellow-300">Viet</span>
                            </h1>

                            <TypeWriteEffect />

                            <p data-aos="fade-up" data-aos-delay="400" className="mt-[1.2rem] text-[14px] md:text-[16px] text-[#c4cfdf]">
                                I am a Full Stack Developer with five years of experience, proficient in PHP programming.
                                Additionally, I have the ability to work with Golang, React, and Vue.js
                                My experience includes developing systems for payment gateways, e-wallets, POS machines, and e-learning platforms ...vv.
                                I am eager to work in a challenging environment that fosters learning and personal growth.
                            </p>
                            <p data-aos="fade-up" data-aos-delay="500" className="mt-[1.2rem] text-[14px] md:text-[16px] text-yellow-300 font-medium">
                                Not afraid of difficult tasks – only afraid of having no tasks at all.
                            </p>

                            <div className="mt-[2rem] flex items-center space-x-6">
                                <button data-aos="zoom-in" data-aos-delay="600" className="relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                                    <a href="https://www.facebook.com/viethoang100701" className="relatve z-10">Hire Me</a>
                                </button>

                                <button data-aos="zoom-in" data-aos-delay="700" className="before:ease relative h-12 w-40 overflow-hidden bg-orange-600 text-white font-semibold shadow-s2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-green-700 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180">
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
                            className="object-contain rounded-full border-4 border-yellow-300 shadow-[0_0_15px_5px_rgba(255,215,0,0.8)]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
