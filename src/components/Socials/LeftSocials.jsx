import React from 'react'
import {FiGithub } from "react-icons/fi"
import {FiLinkedin } from "react-icons/fi"
import {BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs"
import "./Socials.css"

const LeftSocials = () => {
  return (
   <section>
     <div className="left-socials">
            <a href="https://github.com/Passion-cyber" rel="noreferrer" target="_blank"> <FiGithub/> </a> 
            <a href="www.linkedin.com/in/ibelachi-franklyn-767322246" rel="noreferrer" target="_blank"> <FiLinkedin/> </a>
            <a href="https://twitter.com/Dede_edum" rel="noreferrer" target="_blank"> <BsTwitter/> </a>
            <a href="https://www.facebook.com/ibelachi.chinedu" rel="noreferrer" target="_blank"> <BsFacebook/> </a>
            <a href="https://www.instagram.com/passion-cyber" rel="noreferrer" target="_blank"> <BsInstagram/> </a>     <div></div>
        </div>
   </section>
  )
}

export default LeftSocials