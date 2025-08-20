import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'

const projects = [
  {
    name: "Vacations of Africa",
    year: "Mar2022",
    align: "right",
    image: "https://i.pinimg.com/736x/d0/1f/e9/d01fe9528e9b98deed0dec0d9b499875.jpg",
    link: "#",
  },
  {
    name: "Moola App",
    year: "Sept2022",
    align: "left",
    image: "https://i.pinimg.com/736x/d0/1f/e9/d01fe9528e9b98deed0dec0d9b499875.jpg",
    link: "#",
  },
  {
    name: "Tourzania",
    year: "Jan2023",
    align: "right",
    image: "https://i.pinimg.com/736x/d0/1f/e9/d01fe9528e9b98deed0dec0d9b499875.jpg",
    link: "#",
  },
  {
    name: "Bank of Luck",
    year: "May2024",
    align: "left",
    image: "https://i.pinimg.com/736x/d0/1f/e9/d01fe9528e9b98deed0dec0d9b499875.jpg",
    link: "#",
  },
];


const ProjectMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <ProjectText />
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