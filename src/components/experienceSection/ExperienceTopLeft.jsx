import React from 'react'
import ExperienceInfo from './ExperienceInfo'
const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">Since 2022</p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="3" text="Years"/>
        <p className="text-6xl font-bold text-lightBrown">-</p>
        <ExperienceInfo number="23" text="Websites"/>
      </div>
      <p className="text-center text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorum ad dolore, repudiandae amet illum?</p>
      <ExperienceInfo number="$100k" text="Max Budget"/>
    </div>
  )
}

export default ExperienceTopLeft