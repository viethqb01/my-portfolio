import React from "react";

import { TypeAnimation } from "react-type-animation";

const TypeWriteEffect = () => {
    return (
        <div>
            <TypeAnimation
                sequence={[
                    "a Software Engineer",
                    1000,
                    "a PHP Developer",
                    1000,
                    "a React Developer",
                    1000,
                    "a Next.js Developer",
                    1000,
                    "a Golang Developer",
                    1000,
                    "an Angular Developer",
                    1000,
                    "a VueJS Developer",
                    1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="xl-text-[50px] text-[25px] font-bold text-white sm:text-[35px] lg:text-[40px]"
            />
        </div>
    );
};

export default TypeWriteEffect;
