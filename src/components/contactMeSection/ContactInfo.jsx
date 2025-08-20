import React from 'react'
import SingleInfo from './SingleInfo'
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="rkmvndphs1387@gmail.com" Image={HiOutlineMail}/>
      <SingleInfo text="+91 8637061918" Image={FiPhoneCall}/>
      <SingleInfo text="Kolkata, West Bengal" Image={IoLocationOutline}/>
    </div>
  )
}

export default ContactInfo