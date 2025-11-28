import React, { useEffect, useState } from "react";

import { CheckIcon } from "@heroicons/react/16/solid";
import CountUp from "react-countup";

const About = () => {
    const [key, setKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setKey(prevKey => prevKey + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="blog-about" className="mt-[-4rem] bg-black pb-[3rem]">
            <div className="mx-auto grid w-[80%] grid-cols-1 items-center gap-[2rem] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] lg:grid-cols-2">
                <div>
                    <p className="heading__mini">About Me</p>
                    <h1 className="heading__primary">
                        Quickly synthesize <span className="text-yellow-400">parameters</span>{" "}
                        during work
                    </h1>
                    <p className="mt-[1.3rem] text-[15px] text-white opacity-75">
                        Throughout my working career, I have experienced both Product and
                        Outsourcing environments, been exposed to many new technologies, and
                        experienced many different job positions.
                    </p>
                    <div className="mt-[2rem] space-y-3">
                        <div data-aos="zoom-in" className="flex items-center space-x-4">
                            <CheckIcon className="h-[2rem] w-[2rem] text-yellow-400" />
                            <p className="text-[18px] text-white">Backend Developer</p>
                        </div>

                        <div
                            data-aos="zoom-in"
                            data-aos-delay="100"
                            className="flex items-center space-x-4"
                        >
                            <CheckIcon className="h-[2rem] w-[2rem] text-yellow-400" />
                            <p className="text-[18px] text-white">Front End Developer</p>
                        </div>

                        <div
                            data-aos="zoom-in"
                            data-aos-delay="200"
                            className="flex items-center space-x-4"
                        >
                            <CheckIcon className="h-[2rem] w-[2rem] text-yellow-400" />
                            <p className="text-[18px] text-white">Full Stack Developer</p>
                        </div>

                        <div
                            data-aos="zoom-in"
                            data-aos-delay="200"
                            className="flex items-center space-x-4"
                        >
                            <CheckIcon className="h-[2rem] w-[2rem] text-yellow-400" />
                            <p className="text-[18px] text-white">Software Engineer</p>
                        </div>
                    </div>
                </div>

                <div className="lg:ml-auto">
                    <div className="grid grid-cols-1 items-center gap-[1rem] sm:grid-cols-2">
                        <div className="bg-yellow-500 p-6 text-center" data-aos="zoom-in">
                            <p className="text-[50px] font-bold text-black">
                                <CountUp key={key} start={1} end={6} duration={1.5} />
                            </p>
                            <p className="font-600 text-[20px] text-black">Years experience</p>
                        </div>

                        <div
                            className="bg-yellow-500 p-6 text-center"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        >
                            <p className="text-[50px] font-bold text-black">
                                <CountUp key={key + 1} start={1} end={30} duration={2} />+
                            </p>
                            <p className="font-600 text-[20px] text-black">Technology</p>
                        </div>

                        <div
                            className="bg-yellow-500 p-6 text-center"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            <p className="text-[50px] font-bold text-black">
                                <CountUp key={key + 2} start={1} end={30} duration={2} /> +
                            </p>
                            <p className="font-600 text-[20px] text-black">Project done</p>
                        </div>

                        <div
                            className="bg-yellow-500 p-6 text-center"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                        >
                            <p className="text-[50px] font-bold text-black">
                                <CountUp key={key + 3} start={1} end={2} duration={2} />
                            </p>
                            <p className="font-600 text-[20px] text-black">Award win</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
