import React from 'react'

const AboutMeImage = () => {
  return (
    <div className="h-[500px] w-[300px] relative">
      <div className="h-[500px] w-[300px] absolute rounde-[100px]  left-[30px] overflow-hidden">
        <img src="https://i.pinimg.com/736x/09/a8/fc/09a8fc5b87451d2fbb7847b7cb6bcb32.jpg" alt="zenitsu" className="h-full w-auto object-cover rounded-tr-[70px] rounded-tl-[20px] rounded-bl-[70px]"/>
      </div>
      <div className="h-[500px] w-[290px] bg-orange absolute bottom-[-30px] left-[-21px] rounded-bl-[90px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10">

      </div>
    </div>
  )
}

export default AboutMeImage