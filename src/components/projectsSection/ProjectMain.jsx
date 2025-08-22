import React from 'react';
import ProjectText from './ProjectText';
import SingleProject from './SingleProject';
import {motion} from "framer-motion";
import { fadeIn } from '../../framerMotion/varients';

const projects = [
  {
    name: "Rock-Paper-Sissor",
    year: "Mar2025",
    align: "right",
    image: "/p1.png",
    link: "/Rock-Paper-Scissor/Rock-Paper-Sisor.html",
  },
  {
    name: "ToDo App",
    year: "May2025",
    align: "left",
    image: "/p2.png",
    link: "/To-Do-List/ToDo2.html",
  },
  {
    name: "YouTube FrontEnd",
    year: "March2025",
    align: "right",
    image: "/p3.png",
    link: "/Youtube-Frontend/YouTube_with_grid_search_flex.html",
  },
  {
    name: "Password Generator with React",
    year: "July2024",
    align: "left",
    image: "/p4.png",
    link: "/Password-Generator/index.html",
  },
  {
    name: "Portfolio with React, TailwindCSS,Framer Motion",
    year: "August2024",
    align: "right",
    image: "/p5.png",
    link: "hero",
  },
];


const ProjectMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
                variants={fadeIn("up",0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{once:false,amount:0}}
                >
        <ProjectText />
      </motion.div>
      <div className="flex flex-col gap-20 mx-auto mt-12">
        {
          projects.map((item,index)=>{
            return <SingleProject key={index} name={item.name} year={item.year} align={item.align} image={item.image} link={item.link}/>
          })
        }
      </div>
    </div>
  )
}

export default ProjectMain