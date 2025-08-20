import React from 'react'

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quam. Similique dicta veritatis nulla, nihil expedita alias voluptatum vitae blanditiis enim rerum nostrum molestias doloribus corporis neque. Non hic error cupiditate id, sit quaerat consequatur enim voluptates aperiam voluptatum accusamus qui culpa facilis repudiandae maiores odit autem earum modi temporibus? Qui consectetur beatae numquam quaerat exercitationem doloribus autem illo eum magni nobis! Asperiores nobis culpa, aspernatur exercitationem fugit cum eaque nesciunt dolorum minus corporis recusandae.</p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-1 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">
        My Projects
      </button>
    </div>
  )
}

export default AboutMeText