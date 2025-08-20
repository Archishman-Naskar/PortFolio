import React from 'react'

const SingleInfo = ({text,Image}) => {
  return (
    <div className="flex items-center justify-start gap-4">
      <Image className="text-3xl"/>
      <p>{text}</p>
    </div>
  )
}

export default SingleInfo