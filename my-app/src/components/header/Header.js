import React from "react";
import CV from "../../assets/CV.pdf";
import ME from '../../assets/Nobg.png';
import {FaLinkedin,FaGithubSquare} from 'react-icons/fa'
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial";
import './header.css'
function Header() {
  return (
    <>
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Bhanu Teja Pogiri</h1>
          <h5 className="text-light">Developer</h5>
          <CTA/>
          <HeaderSocial/>
          <a href="#contact" className="scroll_down">Scroll Down</a>

          <div className="me">
            <img src={ME} alt="me" className="meImg"/>
          </div>


        </div>
      </header>
      
    </>
  );
}

export default Header;
