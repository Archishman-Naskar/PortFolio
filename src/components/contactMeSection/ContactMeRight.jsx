import React from 'react'
import ContactInfo from './ContactInfo'
import ContactSocial from './ContactSocial'
const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img src="/pic.svg" alt="Contact Me" 
      className="max-w-[300px] rounded-3xl mr-4"/>
      <ContactInfo />
      <ContactSocial /> 
    </div>
  )
}

export default ContactMeRight