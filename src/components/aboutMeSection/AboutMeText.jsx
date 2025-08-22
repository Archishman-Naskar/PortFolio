import React from 'react'
import {Link} from 'react-scroll'
const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white text-2xl">
        I am <span className="font-bold">Archishman Naskar</span>, currently pursuing a <span className="font-bold">B.Tech in Computer Science and Engineering</span> at <span className="font-bold">Motilal Nehru National Institute of Technology, Allahabad</span>. I have always been deeply fascinated by technology, and I am continuously working on building and refining my skills in areas such as <span className="font-bold">Web Development, Artificial Intelligence, and Machine Learning</span>.  
        <br />
        Alongside this, I have a strong passion for <span className="font-bold">problem-solving and tackling challenges</span>, which drives my keen interest in the world of <span className="font-bold">Competitive Programming</span>. I strive to keep learning, growing, and pushing myself to explore innovative solutions and cutting-edge technologies.

    
      </p>
      <Link
        to="projects"
        smooth={true}
        spy={true}
        duration={500}
        offset={-130} >
        <button className="px-4 py-2 mt-2 rounded-full text-xl font-bold text-white flex items-center gap-1 bg-gradient-to-r from-darkOrange to-yellow-600 hover:scale-110 transition-all duration-500 shadow-lg hover:shadow-yellow-500/50">
              My Projects
        </button>
      </Link>
    </div>
  )
}

export default AboutMeText