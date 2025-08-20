import React from 'react'

const SingleContactSocial = ({Icon,link,Border}) => {
  return (
    <div className={`text-2xl h-12 w-12 ${Border==="y"?"border-4 border-orange":""}  text-orange rounded-full p-3 flex items-center justify-center`}>
      <a href={link} className="cursor-pointer">
        <Icon />
      </a>
    </div>
  )
}

export default SingleContactSocial