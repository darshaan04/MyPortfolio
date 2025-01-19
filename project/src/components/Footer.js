import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import "./footer.css";
const Footer = () => {
  // const year=newDate().getFullYear()
  return (  
    <div className="footer">
    <div className="container footer_container">
        <div className="first">
            <h4>Darshaan S P</h4>
            <p>&copy; All rights reserved</p>
        </div>
        <div className="second">
            <h4>Get in touch</h4>
            <p>darshaanpadmanaban@gmail.com</p>
            <p className="d-flex">
                <a href="https://www.instagram.com/darshaan04/?next=%2F" target='_blank' className="text-decoration-none"><FontAwesomeIcon icon={faInstagram} />&nbsp;&nbsp;</a> 
                <a href="https://www.linkedin.com/in/darshaan-padmanaban-b2408126a/" target='_blank' className="text-decoration-none"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </p>
        </div>
        <div className="third">
            <h4>About</h4>
            <p><a href="Resume.pdf" target='_blank'>Resume</a></p>
        </div>
    </div>
</div>

  )
}

export default Footer