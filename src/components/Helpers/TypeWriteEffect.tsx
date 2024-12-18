import React from 'react'; 
import { TypeAnimation } from 'react-type-animation';

const TypeWriteEffect = () => {
  return (
    <div>
     <TypeAnimation
      sequence={[
        'a PHP Developer',
        1000,
        'a Golang Developer',
        1000,
        'a React Developer',
        1000,
        'a VueJS Developer',
        1000,
        'a Fullstack Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="xl-text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-bold text-white"
    />
    </div>
  )
}

export default TypeWriteEffect
