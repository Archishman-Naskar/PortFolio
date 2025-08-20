import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
const ContactForm = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
  //       publicKey: 'YOUR_PUBLIC_KEY',
  //     })
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       },
  //     );
  // };
  //**Look as we are want to access the HTML_Element of the form only inside onSubmit() so we don't need useRef nesscarily here because we are getting (e) and we could use e.target to do the same in pale of from.current. If, had to access HTML_Element of the form outside onSubmit then we had to use useRef but that not the case here. So, I am using e.target in place of from.current in the above code. But using useRef and from.current is more React way.**//
  const [formData,setFormData]=useState({name:"",email:"",message:""});
  const [successMessage,setSuccessMassage]=useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_29yuq3c', 'template_32oqste', e.target, {
        publicKey: 'm_tBvhGh6gEJDWky7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccessMassage("Message Sent Successfully");
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSuccessMassage("Could Not Send Message. Try again");
        },
      );
      setFormData({name:"",email:"",message:""});
  };
  return (
    <div className="w-[650px] mt-4">
      <p className="text-cyan text-2xl mb-2">{successMessage}</p>
      <form className="flex flex-col gap-4 text-white" onSubmit={sendEmail}>
        <input name="from_name" type="text" placeholder="Your Name" required className="h-12 rounded-lg bg-lightBrown px-2" 
        value={formData.name} 
        onChange={(e)=>{
          setFormData({...formData,name:e.target.value});
          setSuccessMassage("");
        }}/>
        <input name="from_email" type="email" placeholder="Email" required className="h-12 rounded-lg bg-lightBrown px-2" 
        value={formData.email} 
        onChange={(e)=>{
          setFormData({...formData,email:e.target.value});
          setSuccessMassage("");
        }}/>
        <textarea name="message" type="text" placeholder="Massage" rows="10" cols="52" required className="rounded-lg bg-lightBrown p-2" 
        value={formData.message} onChange={(e)=>{
          setFormData({...formData,message:e.target.value});
          setSuccessMassage("");
        }}></textarea>
        <button type="submit" className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500">Send</button>
      </form>
    </div>
  )
}

export default ContactForm