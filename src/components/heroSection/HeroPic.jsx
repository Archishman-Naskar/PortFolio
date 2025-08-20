import React from 'react'
import { FiCircle } from "react-icons/fi";
import { PiHexagonThin } from "react-icons/pi";
import { PiHexagonBold } from "react-icons/pi";
const HeroPic = () => {
  return (
    <div className="h-[560px] w-[560px] flex justify-center items-center relative overflow-hidden">
      <img src="https://i.pinimg.com/736x/93/06/5e/93065e53a0ba979174d6de26387c4751.jpg" alt="SunGod" className="max-h-[400px] w-auto rounded-full "/>
      <div className="absolute -z-10 flex justify-center items-center animate-pulse ">
        <PiHexagonBold className="md:h-[90%] sm:h-[120%] min-h-[520px]  w-auto text-yellow-300 blur-md animate-[spin_20s_linear_infinite]"/>
      </div>
    </div>
  )
}

export default HeroPic