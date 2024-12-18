import { EnvelopeIcon, LinkIcon, MapIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { FaLinkedin, FaFacebook } from 'react-icons/fa';
import React from "react";

const Footer = () => {
    return (
        <div id="blog-footer" className="pt-[5rem] pb-[3rem] bg-black">
            <div className="w-[80%] pb-[5rem] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] border-gray-600 border-opacity-40">
                <div data-aos="fade-up">
                    <div className="font-logo text-white text-[18px]">
                        <span className="text-[30px] md:text-[40px] text-yellow-400">
                            HV.
                        </span>
                        VIETHQB
                    </div>
                    <h1 className="text-[14px] mt-[0.5rem] text-white opacity-70">Thank you for taking an interest in my portfolio. Please feel free to contact me using the information provided. I look forward to the opportunity for us to work together in the future.</h1>
                    <p className="text-yellow-300 opacity-70 text-[14px] mt-[10px]">Wishing you a wonderful day ahead!</p>
                </div>

                <div data-aos="fade-up" className="lg:mx-auto">
                    <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
                        Blog 
                    </h1>
                    <div className="flex items-center mt-[1rem] space-x-2">
                        <FaFacebook className="w-[1rem] h-[1rem] text-yellow-300"/>
                        <a href="https://www.facebook.com/viethoang100701" className="text-white text-[q7px] font-normal opacity-75">Facebook</a>
                    </div>

                    <div className="flex items-center mt-[1rem] space-x-2">
                        <FaLinkedin className="w-[1rem] h-[1rem] text-yellow-300"/>
                        <a href="https://www.linkedin.com/in/viet-beo/" className="text-white text-[q7px] font-normal opacity-75">Linkin</a>
                    </div>
                </div>

                <div data-aos="fade-up" className="lg:mx-auto">
                    <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
                        Contact 
                    </h1>
                    <div className="flex items-center mt-[1rem] space-x-2">
                        <MapIcon className="w-[1rem] h-[1rem] text-yellow-300"/>
                        <p className="text-white text-[q7px] font-normal opacity-75">Phu Do, Nam Tu Liem, Ha Noi</p>
                    </div>

                    <div className="flex items-center mt-[1rem] space-x-2">
                        <EnvelopeIcon className="w-[1rem] h-[1rem] text-yellow-300"/>
                        <p className="text-white text-[q7px] font-normal opacity-75">viethqb@gmail.com</p>
                    </div>

                    <div className="flex items-center mt-[1rem] space-x-2">
                        <PhoneIcon className="w-[1rem] h-[1rem] text-yellow-300"/>
                        <p className="text-white text-[q7px] font-normal opacity-75">+84 355 755 697</p>
                    </div>
                </div>
            </div>

            <div className="mt-[1.4rem] w-[80%] mx-auto text-white opacity-70 text-[14px]">
                &#169; Copyright viethqb 2024
            </div>
        </div>
    );
};

export default Footer;
