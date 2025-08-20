import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import CodeforcesIcon from './CodeForceIcon';
const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://github.com/Archishman-Naskar" Icon={FaGithub} Border="y" />
      <SingleContactSocial link="https://www.linkedin.com/in/archishman-naskar-233bbb326/" Icon={FaLinkedin} Border="y" H="12" W="12"/>
      <SingleContactSocial link="https://codeforces.com/profile/Archishman_Naskar" Icon={CodeforcesIcon} Border="n" />
    </div>
  )
}

export default ContactSocial