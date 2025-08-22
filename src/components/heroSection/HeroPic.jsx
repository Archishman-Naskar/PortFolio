import React from 'react'
import { FiCircle } from "react-icons/fi";
import { PiHexagonThin } from "react-icons/pi";
import { PiHexagonBold } from "react-icons/pi";
import {motion} from "framer-motion";
import { fadeIn } from '../../framerMotion/varients';
const HeroPic = () => {
  return (
    <motion.div
          variants={fadeIn("left",0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{once:false,amount:0}}
            className="h-[560px] w-[560px] flex justify-center items-center relative overflow-hidden">
      <img src="https://i.pinimg.com/736x/93/06/5e/93065e53a0ba979174d6de26387c4751.jpg" alt="SunGod" className="max-h-[400px] w-auto rounded-full "/>
      <div className="absolute -z-10 flex justify-center items-center animate-pulse ">
        <PiHexagonBold className="md:h-[90%] sm:h-[120%] min-h-[520px]  w-auto text-yellow-300 blur-md animate-[spin_20s_linear_infinite]"/>
      </div>
    </motion.div>
  )
}

export default HeroPic