import React from 'react'
import { NavLink } from 'react-router-dom'
import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Footer() {
  return (
    <footer>
            <span>&copy; 2024 aysenurtatli</span>
            <div className="social-links">
                <NavLink><FontAwesomeIcon icon={faInstagram}/></NavLink>
                <NavLink><FontAwesomeIcon icon={faXTwitter}/></NavLink>
            </div>
    </footer>
  )
}

export default Footer