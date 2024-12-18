import { CheckIcon } from "@heroicons/react/16/solid";
import CountUp from "react-countup";
import React, { useState, useEffect } from "react";

const About = () => {
    const [key, setKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setKey((prevKey) => prevKey + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="blog-about" className="mt-[-4rem] bg-black pb-[3rem]">
            <div className="w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]">
                <div>
                    <p className="heading__mini">About Me</p>
                    <h1 className="heading__primary">
                        Quickly synthesize{" "}
                        <span className="text-yellow-400">parameters</span> during work
                    </h1>
                    <p className="text-[15px] mt-[1.3rem] text-white opacity-75">
                        Throughout my working career, I have experienced both Product and
                        Outsourcing environments, been exposed to many new technologies, and
                        experienced many different job positions.
                    </p>
                    <div className="mt-[2rem] space-y-3">
                        <div data-aos="zoom-in" className="flex items-center space-x-4">
                            <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                            <p className="text-[18px] text-white">Backend Developer</p>
                        </div>

                        <div data-aos="zoom-in" data-aos-delay="100" className="flex items-center space-x-4">
                            <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                            <p className="text-[18px] text-white">Front End Developer</p>
                        </div>

                        <div data-aos="zoom-in" data-aos-delay="200" className="flex items-center space-x-4">
                            <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                            <p className="text-[18px] text-white">Full Stack Developer</p>
                        </div>
                    </div>
                </div>

                <div className="lg:ml-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-[1rem]">
                        <div className="p-6 text-center bg-yellow-500" data-aos="zoom-in">
                            <p className="text-[50px] text-black font-bold">
                                <CountUp key={key} start={1} end={5} duration={1.5} />
                            </p>
                            <p className="text-[20px] text-black font-600">
                                Years experience
                            </p>
                        </div>

                        <div className="p-6 text-center bg-yellow-500" data-aos="zoom-in" data-aos-delay="100">
                            <p className="text-[50px] text-black font-bold">
                                <CountUp key={key + 1} start={1} end={20} duration={2} />+
                            </p>
                            <p className="text-[20px] text-black font-600">Technology</p>
                        </div>

                        <div className="p-6 text-center bg-yellow-500" data-aos="zoom-in" data-aos-delay="200">
                            <p className="text-[50px] text-black font-bold">
                                <CountUp key={key + 2} start={1} end={30} duration={2} /> +
                            </p>
                            <p className="text-[20px] text-black font-600">Project done</p>
                        </div>

                        <div className="p-6 text-center bg-yellow-500" data-aos="zoom-in" data-aos-delay="300">
                            <p className="text-[50px] text-black font-bold">
                                <CountUp key={key + 3} start={1} end={2} duration={2} />
                            </p>
                            <p className="text-[20px] text-black font-600">Award win</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
