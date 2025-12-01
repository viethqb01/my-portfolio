import React from "react";

import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div id="blog-footer" className="bg-black pb-[3rem] pt-[5rem]">
            <div className="mx-auto grid w-[80%] grid-cols-1 gap-[2rem] border-b-[1.4px] border-gray-600 border-opacity-40 pb-[5rem] md:grid-cols-3 lg:grid-cols-3">
                <div data-aos="fade-up">
                    <div className="font-logo text-[18px] text-white">
                        <span className="text-[30px] text-yellow-400 md:text-[40px]">HV.</span>
                        VIETHQB
                    </div>
                    <h1 className="mt-[0.5rem] text-[14px] text-white opacity-70">
                        Thank you for taking an interest in my portfolio. Please feel free to
                        contact me using the information provided. I look forward to the opportunity
                        for us to work together in the future.
                    </h1>
                    <p className="mt-[10px] text-[14px] text-yellow-300 opacity-70">
                        Wishing you a wonderful day ahead!
                    </p>
                </div>

                <div data-aos="fade-up" className="lg:mx-auto">
                    <h1 className="mb-[1.4rem] text-[17px] font-semibold text-white">Blog</h1>
                    <div className="mt-[1rem] flex items-center space-x-2">
                        <FaFacebook className="h-[1rem] w-[1rem] text-yellow-300" />
                        <a
                            href="https://www.facebook.com/viethoang100701"
                            className="text-[q7px] font-normal text-white opacity-75"
                        >
                            Facebook
                        </a>
                    </div>

                    <div className="mt-[1rem] flex items-center space-x-2">
                        <FaLinkedin className="h-[1rem] w-[1rem] text-yellow-300" />
                        <a
                            href="https://www.linkedin.com/in/viet-beo/"
                            className="text-[q7px] font-normal text-white opacity-75"
                        >
                            Linkin
                        </a>
                    </div>
                </div>

                <div data-aos="fade-up" className="lg:mx-auto">
                    <h1 className="mb-[1.4rem] text-[17px] font-semibold text-white">Contact</h1>
                    <div className="mt-[1rem] flex items-center space-x-2">
                        <MapIcon className="h-[1rem] w-[1rem] text-yellow-300" />
                        <p className="text-[q7px] font-normal text-white opacity-75">
                            Nam Tu Liem, Ha Noi
                        </p>
                    </div>

                    <div className="mt-[1rem] flex items-center space-x-2">
                        <EnvelopeIcon className="h-[1rem] w-[1rem] text-yellow-300" />
                        <p className="text-[q7px] font-normal text-white opacity-75">
                            viethqb01@gmail.com
                        </p>
                    </div>

                    <div className="mt-[1rem] flex items-center space-x-2">
                        <PhoneIcon className="h-[1rem] w-[1rem] text-yellow-300" />
                        <p className="text-[q7px] font-normal text-white opacity-75">
                            +84 355 755 697
                        </p>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-[1.4rem] w-[80%] text-[14px] text-white opacity-70">
                &#169; 2024 viethqb
            </div>
        </div>
    );
};

export default Footer;
