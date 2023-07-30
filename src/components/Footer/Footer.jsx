import {FiGithub, FiLinkedin} from "react-icons/fi"
import {BsTwitter, BsFacebook} from "react-icons/bs"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footerLinks">
      <div className="footer-inner">       
            <a href="https://github.com/Passion-cyber" rel="noreferrer" target="_blank"> <FiGithub/> </a> 
            <a href="https://twitter.com/Dede_edum" rel="noreferrer" target="_blank"> <BsTwitter/> </a>
            <a href="https://www.linkedin.com/in/ibelachi-franklyn/" rel="noreferrer" target="_blank"> <FiLinkedin/> </a>
            <a href="https://www.facebook.com/ibelachi.chinedu" rel="noreferrer" target="_blank"> <BsFacebook/> </a>
        </div>
        <p className="copyWrite">Designed by <a href="https://brittanychiang.com/" rel="noreferrer" target="_blank">brittany chiang</a> and built by <a href="https://twitter.com/Dede_edum" rel="noreferrer" target="_blank">yours truly with ❤</a></p>
    </footer>
  )
}

export default Footer
