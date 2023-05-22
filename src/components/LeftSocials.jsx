import React from 'react'
import {FiGithub } from "react-icons/fi"
import {GrInstagram } from "react-icons/gr"
import {FaTwitter, FaCodepen } from "react-icons/fa"
import {FiLinkedin } from "react-icons/fi"
import "../stylesheets/Socials.css"

const LeftSocials = () => {
  return (
   <section>
     <div className="left-socials">
          <div className="individual-links">
            <a href="https://github.com/Passion-cyber" target='_blank' rel="noreferrer"> <FiGithub className='link-tags'/></a>
            </div>
            <div className="individual-links">
            <a href="https://github.com/Passion-cyber" target='_blank' rel="noreferrer"> <GrInstagram className='link-tags'/></a>
            </div>
            <div className="individual-links">
            <a href="https://github.com/Passion-cyber" target='_blank' rel="noreferrer"> <FaTwitter className='link-tags'/></a>
            </div>
            <div className="individual-links">
            <a href="https://github.com/Passion-cyber" target='_blank' rel="noreferrer"> <FiLinkedin className='link-tags'/></a>
            </div>
            <div className="individual-links">
            <a href="https://github.com/Passion-cyber" target='_blank' rel="noreferrer"> <FaCodepen className='link-tags'/></a>
            </div>
            <div className="individual-links">
            <span className="link-line"></span>
            </div>
       
        </div>
   </section>
  )
}

export default LeftSocials