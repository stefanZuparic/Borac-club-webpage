import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoBorac from '../../assets/images/LogoBorac.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faPeopleGroup,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'

import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

const SideBar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoBorac} alt="logo" />
      </Link>
      <nav>
        <NavLink
          exact="true"
          activeclasname="active"
          className="home-link"
          to="/"
        >
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink
          exact="true"
          activeclasname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink
          exact="true"
          activeclasname="active"
          className="coach-link"
          to="/coaches"
        >
          <FontAwesomeIcon icon={faPeopleGroup} />
        </NavLink>
        <NavLink
          exact="true"
          activeclasname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/dzudo_i_sambo_klub_borac/"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/p/Judo-i-Sambo-klub-Borac-100076890109846/"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SideBar
