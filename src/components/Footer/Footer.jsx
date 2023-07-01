import {FiGithub, FiLinkedin} from "react-icons/fi"
import {BsTwitter, BsFacebook} from "react-icons/bs"
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">       
            <a href="https://github.com/Passion-cyber" rel="noreferrer" target="_blank"> <FiGithub/> </a> 
            <a href="https://twitter.com/Dede_edum" rel="noreferrer" target="_blank"> <BsTwitter/> </a>
            <a href="www.linkedin.com/in/ibelachi-franklyn-767322246" rel="noreferrer" target="_blank"> <FiLinkedin/> </a>
            <a href="https://www.facebook.com/ibelachi.chinedu" rel="noreferrer" target="_blank"> <BsFacebook/> </a>
        </div>
    </footer>
  )
}

export default Footer
