import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import { IconContext } from 'react-icons';
import { IoCodeWorking } from 'react-icons/io5';
import { HiDocumentDownload } from 'react-icons/hi';
import { GiSkills } from 'react-icons/gi';
import {
  FaAngellist,
  FaEnvelope, FaGithub, FaHome, FaLinkedin, FaTwitter, FaUser,
} from 'react-icons/fa';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';

const Sidebar = () => (
  <div className="nav-bar">
    <IconContext.Provider value={{ color: '#4d4d4e' }}>
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FaHome />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
          <FaUser />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
          <IoCodeWorking />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="skills-link" to="/skills">
          <GiSkills />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="resume-link" to="/resume">
          <HiDocumentDownload />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
          <FaEnvelope />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/ykerroum/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/YKerroum" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://angel.co/u/ykerroum" target="_blank" rel="noreferrer">
            <FaAngellist />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/kerroum_youssef" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </li>
      </ul>
    </IconContext.Provider>
  </div>

);

export default Sidebar;
