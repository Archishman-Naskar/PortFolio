import React from 'react'

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa6";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

import SkillSingle from './SkillSingle';
const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: DiJavascript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
];


const AllSkills = () => {
  return (
    <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto ">
      {
        skills.map((item,index)=>{
          return <SkillSingle key={index} text={item.skill} imgSvg={<item.icon/>} />
        })
      }
    </div>
  )
}

export default AllSkills