import React from 'react'
import ContactInfo from './ContactInfo'
import ContactSocial from './ContactSocial'
const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img src="https://i.pinimg.com/736x/51/94/49/5194494718224a0ea32a752251a71c34.jpg" alt="Contact Me" 
      className="max-w-[300px] rounded-3xl"/>
      <ContactInfo />
      <ContactSocial /> 
    </div>
  )
}

export default ContactMeRight