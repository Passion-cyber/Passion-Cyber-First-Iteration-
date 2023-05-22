import {Link} from "react-router-dom"
import "../stylesheets/Anchor.css"

const Anchor = ({text, path}) => {
  return (
   <Link path={path} className='global-links'>{text}</Link>
  )
}

export default Anchor
