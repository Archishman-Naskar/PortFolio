import React from 'react'
import { BsBoxArrowRight } from "react-icons/bs";
const NavBarBtn = () => {
  return (
    <button className="px-4 py-2 rounded-full text-xl font-bold text-white flex items-center gap-1 bg-gradient-to-r from-darkCyan to-grey hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow">
      Hire Me
      <div className="pb-1 sm:hidden md:block"><BsBoxArrowRight /></div>
    </button>
  )
}

export default NavBarBtn