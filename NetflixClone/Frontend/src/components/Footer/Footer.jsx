import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faFacebook,faInstagram,faTwitter,faYoutube} from "@fortawesome/free-brands-svg-icons"
import { useNavigate } from "react-router-dom"

export const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className="footer">
      <div className="icon">
           <FontAwesomeIcon icon={faFacebook}/>
            <FontAwesomeIcon icon={faInstagram}/>
            <FontAwesomeIcon icon={faTwitter}/>
            <FontAwesomeIcon icon={faYoutube}/>
      </div>

          <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Media Center</li>
              <li>Terms & Use</li>
              <li>Privacy</li>
              <li>Legal Notices</li>
              <li>Cookies Preferences</li>
              <li>Contact Us</li>
         </ul>
         <ul>
          <li>Practice project by Komal Prajapat</li>
              <li onClick={()=>navigate("/addMovie")}> Inspired by [Netflix]</li>
              <li> Not for commercial use</li>
         </ul>
    </div>
  )
}
