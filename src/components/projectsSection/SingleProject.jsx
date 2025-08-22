import React from 'react'
import { CgArrowTopRightO } from "react-icons/cg";
import {motion} from "framer-motion";
import { fadeIn } from '../../framerMotion/varients';
import {Link, link} from 'react-scroll'
const SingleProject = ({name,year,align,image,link}) => {
  return (
    <motion.div 
                    variants={fadeIn("up",0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once:false,amount:0}}
                    className={`flex w-full sm:flex-col-reverse items-center gap-8 
    ${align==="left"?"md:flex-row":"md:flex-row-reverse"} justify-end`}>
      <div>
        <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
        <h2 className={`text-xl font-thin text-white font-special sm:text-center 
          ${align==="left"?"md:text-right":"md:text-left"}`}>{year}</h2>
        {link==="hero"?(<Link 
              to={link}
                smooth={true}
                spy={true}
                duration={500}
                offset={-130} 
        className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${align==="left"?"md:justify-self-end":"md:justify-self-start"}`}>
          View <CgArrowTopRightO />
        </Link>) :(<a href={link} target="_blank" rel="noopener noreferrer"
        className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${align==="left"?"md:justify-self-end":"md:justify-self-start"}`}>
          View <CgArrowTopRightO />
        </a>)}
      </div>
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden relative">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img src={image} alt="Project Image" className="w-full h-full"/>
      </div>
    </motion.div>
  )
}

export default SingleProject
{/* <a href={link} target="_blank" rel="noopener noreferrer"
        className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${align==="left"?"md:justify-self-end":"md:justify-self-start"}`}>
          View <CgArrowTopRightO />
        </a> */}